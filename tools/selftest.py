"""Checks that this machine renders EXACTLY like the cloud, and how fast it is.
usage: python3 tools/selftest.py            (uses ep03 as the reference episode)
1) renders 3 reference frames and compares them with ep03/anim/ref/*.png (cloud render)
2) measures screenshots/second with all workers and estimates the EP03 render time."""
import asyncio,os,sys,time,subprocess
from pathlib import Path
import numpy as np,cv2
from playwright.async_api import async_playwright
K=Path(__file__).resolve().parent.parent;A=K/'ep03'/'anim'
NW=int(os.environ.get('VIOLET_WORKERS',min(10,max(3,os.cpu_count() or 2))))
REF=[100.0,205.3,318.7]
subprocess.run([sys.executable,str(A/'build.py')],check=True)
async def page(pw):
  b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page(viewport={'width':1920,'height':1080},device_scale_factor=4/3)
  await pg.goto((A/'anim.html').as_uri());await pg.wait_for_function('window.READY===true',timeout=120000);return b,pg
async def bench(pg,ts,cnt):
  for t in ts: await pg.evaluate(f'R({t:.6f})');await pg.screenshot(type='jpeg',quality=93);cnt.append(1)
async def main():
  async with async_playwright() as pw:
    b,pg=await page(pw);ok=True
    for t in REF:
      await pg.evaluate(f'R({t})');x=cv2.imdecode(np.frombuffer(await pg.screenshot(type='png'),np.uint8),1)
      r=cv2.imread(str(A/'ref'/f'ref_{t}.png'));d=cv2.absdiff(x,r);mse=(d.astype(np.float32)**2).mean()
      ps=99 if mse==0 else 10*np.log10(255**2/mse);same=ps>=40
      ok&=same;print(f'frame {t}: PSNR {ps:.1f} dB, max pixel diff {int(d.max())} ->','OK' if same else 'DIFFERENT')
      if not same: cv2.imwrite(str(K/f'selftest_diff_{t}.png'),np.hstack([r,x]))
    await b.close()
    pgs=await asyncio.gather(*[page(pw) for w in range(NW)]);cnt=[]
    await asyncio.gather(*[bench(p,[150+w],[]) for w,(_,p) in enumerate(pgs)])
    t0=time.time();await asyncio.gather(*[bench(p,[150+w+i/150 for i in range(15)],cnt) for w,(_,p) in enumerate(pgs)])
    rate=len(cnt)/(time.time()-t0)
    for b,_ in pgs: await b.close()
  CLOUD_RATE=2.7;CLOUD_MIN=140
  print(f'\nworkers {NW}, {rate:.1f} screenshots/s (cloud {CLOUD_RATE})  ->  EP03 (7:10) estimate ~{CLOUD_MIN*CLOUD_RATE/rate:.0f} min (cloud ~{CLOUD_MIN} min)')
  print('RESULT:','SAME PICTURE' if ok else 'PICTURE DIFFERS - send selftest_diff_*.png to Claude')
asyncio.run(main())
