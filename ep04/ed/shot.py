import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(next(p for p in _P(__file__).resolve().parents if (p/'tools'/'violet_env.py').exists())/'tools'));from violet_env import settle,ARGS
import asyncio,sys
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent
# usage: shot.py ID fmt mode t1 t2 ...   -> out/f_<ID>_<fmt>_<t>.png
bid,fmt,mode=sys.argv[1:4];ts=[float(x) for x in sys.argv[4:]]
async def m():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=ARGS)
    pg=await b.new_page(viewport={'width':1920,'height':1080} if fmt=='h' else {'width':1080,'height':1920},device_scale_factor=4/3 if fmt=='h' else 1);msgs=[]
    pg.on('console',lambda x:msgs.append(x.text));pg.on('pageerror',lambda e:msgs.append('ERR '+str(e)))
    await pg.goto((H/'out'/f'b{bid}.html').as_uri()+f'?fmt={fmt}&mode={mode}'+__import__('os').environ.get('VQ',''));await pg.wait_for_function('window.READY===true',timeout=60000)
    print('END',round(await pg.evaluate('window.END'),2))
    for t in ts:
      await pg.evaluate(f'R({t})');await settle(pg);await pg.screenshot(path=str(H/'out'/f'f_{bid}_{fmt}_{t:05.1f}.png'))
    for x in msgs[:8]: print(x)
    await b.close()
asyncio.run(m())
