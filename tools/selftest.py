"""Checks that this machine renders EXACTLY like the cloud, and how fast it is.
usage: python3 tools/selftest.py            (uses ep03 as the reference episode)
1) renders 11 reference frames (animation + opening) and compares them pixel by pixel with ep03/anim/ref/*.png (cloud render)
   (cloud only: --make-ref rewrites the reference frames)
2) measures screenshots/second with all workers and estimates the EP03 render time."""
import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(next(p for p in _P(__file__).resolve().parents if (p/'tools'/'violet_env.py').exists())/'tools'));from violet_env import settle
import asyncio,os,sys,time,subprocess
from pathlib import Path
import numpy as np,cv2
from playwright.async_api import async_playwright
K=Path(__file__).resolve().parent.parent;A=K/'ep03'/'anim'
NW=int(os.environ.get('VIOLET_WORKERS',min(10,max(3,os.cpu_count() or 2))))
REF=[('anim',t) for t in (22.0,64.5,100.0,149.5,205.3,267.0,318.7,417.0,427.0)]+[('open',t) for t in (3.0,11.6)]
O=K/'ep03'/'testB'
subprocess.run([sys.executable,str(A/'build.py')],check=True);subprocess.run([sys.executable,str(O/'build.py')],check=True)
MAKE='--make-ref' in sys.argv
async def page(pw):
  b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page(viewport={'width':1920,'height':1080},device_scale_factor=4/3)
  await pg.goto((A/'anim.html').as_uri());await pg.wait_for_function('window.READY===true',timeout=120000);return b,pg
async def bench(pg,ts,cnt):
  for t in ts: await pg.evaluate(f'R({t:.6f})');await settle(pg);await pg.screenshot(type='jpeg',quality=93);cnt.append(1)
async def main():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page(viewport={'width':1920,'height':1080},device_scale_factor=4/3);ok=True;cur=None
    (A/'ref').mkdir(exist_ok=True)
    for kind,t in REF:
      if kind!=cur:
        await pg.goto((A/'anim.html').as_uri() if kind=='anim' else (O/'test.html').as_uri()+'?render');await pg.wait_for_function('window.READY===true',timeout=120000);cur=kind
      await pg.evaluate(f'R({t})');await settle(pg);png=await pg.screenshot(type='png');rp=A/'ref'/f'ref_{kind}_{t}.png'
      if MAKE: rp.write_bytes(png);continue
      x=cv2.imdecode(np.frombuffer(png,np.uint8),1);r=cv2.imread(str(rp));d=cv2.absdiff(x,r).max(axis=2);n=int((d>0).sum())
      v='IDENTICAL' if n==0 else ('OK (pixel noise)' if d.max()<=60 and n<=200 else 'DIFFERENT')
      ok&=v!='DIFFERENT';print(f'{kind} {t:6.1f}s: {v:17s} max diff {int(d.max())}, pixels {n}')
      if v=='DIFFERENT': cv2.imwrite(str(K/f'selftest_diff_{kind}_{t}.png'),np.hstack([r,x]))
    await b.close()
    if MAKE: print('reference frames written');return
    pgs=await asyncio.gather(*[page(pw) for w in range(NW)]);cnt=[]
    await asyncio.gather(*[bench(p,[150+w],[]) for w,(_,p) in enumerate(pgs)])
    t0=time.time();await asyncio.gather(*[bench(p,[150+w+i/150 for i in range(15)],cnt) for w,(_,p) in enumerate(pgs)])
    rate=len(cnt)/(time.time()-t0)
    for b,_ in pgs: await b.close()
  CLOUD_RATE=2.7;CLOUD_MIN=140
  print(f'\nworkers {NW}, {rate:.1f} screenshots/s (cloud {CLOUD_RATE})  ->  EP03 (7:10) estimate ~{CLOUD_MIN*CLOUD_RATE/rate:.0f} min (cloud ~{CLOUD_MIN} min)')
  print('RESULT:','SAME PICTURE' if ok else 'PICTURE DIFFERS - send the selftest_diff_*.png files to Claude')
asyncio.run(main())
