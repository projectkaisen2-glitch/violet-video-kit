import asyncio,subprocess,shutil,tempfile,sys,os
NW=int(os.environ.get('VIOLET_WORKERS',min(10,max(3,os.cpu_count() or 2))))
from pathlib import Path
from playwright.async_api import async_playwright
HERE=Path(__file__).resolve().parent;FPS=30;SUB=5;T0=-0.6;T1=17.6
async def worker(pw,shots,out):
  b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page(viewport={'width':1920,'height':1080},device_scale_factor=4/3)
  await pg.goto((HERE/'test.html').as_uri()+'?render');await pg.wait_for_function('window.READY===true')
  for i,t in shots:
    await pg.evaluate(f'R({t:.6f})');await pg.screenshot(path=str(out/f's{i:06d}.jpg'),type='jpeg',quality=94)
  await b.close()
async def main():
  n=round((T1-T0)*FPS)*SUB;shots=[(i,T0+i/(FPS*SUB)) for i in range(n)]
  tmp=Path(tempfile.mkdtemp(dir=HERE))
  async with async_playwright() as pw:
    await asyncio.gather(*[worker(pw,shots[k::NW],tmp) for k in range(NW)])
  subprocess.run(['ffmpeg','-y','-loglevel','error','-framerate',str(FPS*SUB),'-i',str(tmp/'s%06d.jpg'),'-vf',f'tmix=frames={SUB},fps={FPS},format=yuv420p','-c:v','libx264','-preset','medium','-crf','16','-profile:v','high',str(HERE/'_v.mp4')],check=True)
  shutil.rmtree(tmp)
  voice=HERE/'01a.wav'
  if not voice.exists(): print('opening video:',HERE/'_v.mp4');return
  subprocess.run(['ffmpeg','-y','-loglevel','error','-i',str(HERE/'_v.mp4'),'-i',str(voice),'-filter_complex',
    "[1:a]atrim=0:16.2,loudnorm=I=-14:TP=-1.5:LRA=11,adelay=600|600,apad,atrim=0:18.2,pan=stereo|c0=c0|c1=c0,aresample=44100[a]",
    '-map','0:v','-map','[a]','-c:v','copy','-c:a','aac','-b:a','192k','-movflags','+faststart',str(HERE/'EP03_test02.mp4')],check=True)
  print(subprocess.check_output(['ffprobe','-v','error','-show_entries','stream=width,height:format=duration','-of','compact',str(HERE/'EP03_test02.mp4')]).decode())
asyncio.run(main())
