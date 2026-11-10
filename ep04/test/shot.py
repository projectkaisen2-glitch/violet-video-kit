import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(_P(__file__).resolve().parents[2]/'tools'));from violet_env import settle,ARGS
import asyncio,sys
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent
fmt=sys.argv[1];ts=[float(x) for x in sys.argv[2:]]
async def m():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=ARGS)
    vp={'width':1920,'height':1080} if fmt=='h' else {'width':1080,'height':1920};dsf=4/3 if fmt=='h' else 1
    pg=await b.new_page(viewport=vp,device_scale_factor=dsf);msgs=[]
    pg.on('console',lambda x:msgs.append(x.text));pg.on('pageerror',lambda e:msgs.append('ERR '+str(e)))
    await pg.goto((H/'scene.html').as_uri()+'?fmt='+fmt);await pg.wait_for_function('window.READY===true',timeout=60000)
    print('END',await pg.evaluate('window.END'))
    for t in ts:
      await pg.evaluate(f'R({t})');await settle(pg);await pg.screenshot(path=str(H/f'f_{fmt}_{t:05.1f}.png'))
    print('\n'.join(msgs[:10]));await b.close()
asyncio.run(m())
