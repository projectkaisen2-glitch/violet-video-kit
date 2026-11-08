"""Adaptive motion-blur renderer (same look as SUB=5 everywhere, fewer screenshots).
usage: python3 render_fast.py t0 t1 out.mp4 [--full] [--thr 1.5]
Pass 1: one screenshot per frame at the centre subframe (j=2).
Motion map: frame k is 'moving' if any 40x40 tile of the 640x360 grey diff to a neighbour
centre frame exceeds --thr (mean abs diff); neighbours of moving frames are moving too.
Pass 2: the 4 remaining subframes (j=0,1,3,4) for moving frames only.
Compose: moving frame = mean of its 5 subframes (exactly what tmix did), still frame = centre.
--full renders all 5 subframes for every frame (reference for A/B checks).
Resumable: subframes live in tmp_<out>/ and are skipped if present."""
import asyncio,subprocess,sys,time,argparse,json
from pathlib import Path
import numpy as np,cv2
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent;FPS=30;SUB=5;W,HH=2560,1440
import os,shutil;NW=int(os.environ.get('VIOLET_WORKERS',min(10,max(3,os.cpu_count() or 2))))
ap=argparse.ArgumentParser();ap.add_argument('t0',type=float);ap.add_argument('t1',type=float);ap.add_argument('out')
ap.add_argument('--full',action='store_true');ap.add_argument('--thr',type=float,default=1.5);a=ap.parse_args()
tmp=H/('tmp_'+Path(a.out).stem);tmp.mkdir(exist_ok=True)
n=round((a.t1-a.t0)*FPS)
def fn(k,j): return tmp/f'f{k:05d}_{j}.jpg'
def tt(k,j): return a.t0+(k*SUB+j)/(FPS*SUB)
async def worker(pw,jobs):
  b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page(viewport={'width':1920,'height':1080},device_scale_factor=4/3)
  await pg.goto((H/'anim.html').as_uri());await pg.wait_for_function('window.READY===true',timeout=120000)
  for k,j in jobs:
    p=fn(k,j)
    if p.exists() and p.stat().st_size>1000: continue
    await pg.evaluate(f'R({tt(k,j):.6f})');await pg.screenshot(path=str(p)+'.part',type='jpeg',quality=93)
    Path(str(p)+'.part').rename(p)
  await b.close()
async def shoot(jobs):
  async with async_playwright() as pw: await asyncio.gather(*[worker(pw,jobs[w::NW]) for w in range(NW)])
def small(k): return cv2.resize(cv2.imread(str(fn(k,2)),cv2.IMREAD_GRAYSCALE),(640,360),interpolation=cv2.INTER_AREA).astype(np.float32)
def tilemax(d): return d.reshape(9,40,16,40).mean(axis=(1,3)).max()
st=time.time()
asyncio.run(shoot([(k,2) for k in range(n)]))
t1=time.time()
if a.full: moving=np.ones(n,bool);score=[0]*n
else:
  score=[0.0]*n;prev=small(0)
  for k in range(1,n):
    cur=small(k);score[k]=float(tilemax(cv2.absdiff(cur,prev)));prev=cur
  m=np.array([s>a.thr for s in score]);moving=m.copy()
  moving[:-1]|=m[1:];moving[1:]|=m[:-1]   # frame k-1 and k both touch the k-1..k change
asyncio.run(shoot([(k,j) for k in range(n) if moving[k] for j in (0,1,3,4)]))
t2=time.time()
part=H/('part_'+a.out)
ff=subprocess.Popen(['ffmpeg','-y','-loglevel','error','-f','rawvideo','-pix_fmt','bgr24','-s',f'{W}x{HH}','-r',str(FPS),'-i','-','-vf','format=yuv420p','-c:v','libx264','-preset','medium','-crf','16','-profile:v','high',str(part)],stdin=subprocess.PIPE)
for k in range(n):
  if moving[k]:
    acc=np.zeros((HH,W,3),np.float32)
    for j in range(SUB): acc+=cv2.imread(str(fn(k,j)))
    fr=np.clip(acc/SUB+0.5,0,255).astype(np.uint8)
  else: fr=cv2.imread(str(fn(k,2)))
  ff.stdin.write(fr.tobytes())
ff.stdin.close();ff.wait();part.rename(H/a.out);shutil.rmtree(tmp)
json.dump({'n':n,'moving':int(moving.sum()),'score':score},open(H/(Path(a.out).stem+'_motion.json'),'w'))
print(a.out,f'frames {n}, moving {int(moving.sum())} ({moving.mean()*100:.0f}%), shots {n+4*int(moving.sum())} vs {n*SUB},',
      f'pass1 {t1-st:.0f}s pass2 {t2-t1:.0f}s total {time.time()-st:.0f}s',flush=True)
