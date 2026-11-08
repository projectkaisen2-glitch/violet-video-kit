import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(next(p for p in _P(__file__).resolve().parents if (p/'tools'/'violet_env.py').exists())/'tools'));from violet_env import settle
import asyncio,sys
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent
async def main(ts):
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page(viewport={'width':1920,'height':1080})
    msgs=[];pg.on('console',lambda m:msgs.append(m.text));pg.on('pageerror',lambda e:msgs.append('ERR '+str(e)))
    await pg.goto((H/'test.html').as_uri()+'?render');await pg.wait_for_function('window.READY===true',timeout=15000)
    for t in ts:
      await pg.evaluate(f'R({t})');await settle(pg);await pg.screenshot(path=str(H/f'f_{t:05.1f}.png'))
    print(msgs[:5]);await b.close()
asyncio.run(main([float(x) for x in sys.argv[1:]]))
