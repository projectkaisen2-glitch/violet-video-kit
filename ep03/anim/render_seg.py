import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(next(p for p in _P(__file__).resolve().parents if (p/'tools'/'violet_env.py').exists())/'tools'));from violet_env import settle,ARGS
import asyncio,subprocess,shutil,tempfile,sys,time
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent;FPS=30;SUB=5
t0,t1,out=float(sys.argv[1]),float(sys.argv[2]),sys.argv[3]
async def worker(pw,shots,tmp):
  b=await pw.chromium.launch(args=ARGS);pg=await b.new_page(viewport={'width':1920,'height':1080},device_scale_factor=4/3)
  await pg.goto((H/'anim.html').as_uri());await pg.wait_for_function('window.READY===true',timeout=120000)
  for i,t in shots:
    if (tmp/f's{i:06d}.jpg').exists(): continue
    await pg.evaluate(f'R({t:.6f})');await settle(pg);await pg.screenshot(path=str(tmp/f's{i:06d}.jpg'),type='jpeg',quality=93)
  await b.close()
async def main():
  n=round((t1-t0)*FPS)*SUB;shots=[(i,t0+i/(FPS*SUB)) for i in range(n)]
  st=time.time();tmp=H/('tmp_'+Path(out).stem);tmp.mkdir(exist_ok=True)
  fs=sorted(tmp.glob('s*.jpg'),key=lambda f:f.stat().st_mtime)
  for f in fs[-6:]+[f for f in fs if f.stat().st_size<1000]: f.unlink(missing_ok=True);st=time.time()
  async with async_playwright() as pw:
    await asyncio.gather(*[worker(pw,shots[k::3],tmp) for k in range(3)])
  subprocess.run(['ffmpeg','-y','-loglevel','error','-framerate',str(FPS*SUB),'-i',str(tmp/'s%06d.jpg'),'-vf',f'tmix=frames={SUB},fps={FPS},format=yuv420p','-c:v','libx264','-preset','medium','-crf','16','-profile:v','high',str(H/('part_'+out))],check=True)
  (H/('part_'+out)).rename(H/out)
  shutil.rmtree(tmp);print(out,round(time.time()-st),'s',flush=True)
asyncio.run(main())
