import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(next(p for p in _P(__file__).resolve().parents if (p/'tools'/'violet_env.py').exists())/'tools'));from violet_env import settle,ARGS
import asyncio,json,re
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent;A=H.parent/'scenes'/'assets'
svg={p.stem:re.sub(r'<title>.*?</title>','',p.read_text()) for p in A.glob('*.svg')}
for k in svg:
  if 'fill=' not in svg[k].split('>',1)[0]: svg[k]=svg[k].replace('<svg ','<svg fill="currentColor" ',1)
  svg[k]=re.sub(r'\s(width|height)="[^"]*"','',svg[k],count=2).replace('<svg ','<svg width="100%" height="100%" ',1)
async def m():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=ARGS);pg=await b.new_page(viewport={'width':1280,'height':2240},device_scale_factor=1)
    await pg.add_init_script('window.SVG='+json.dumps(svg))
    await pg.goto((H/'thumb.html').as_uri());await pg.wait_for_function('window.READY===true');await pg.evaluate('document.fonts.ready');await settle(pg)
    for i in 'ABC': await pg.locator('#'+i).screenshot(path=str(H/f'EP04_thumb_{i}.jpg'),type='jpeg',quality=92)
    await b.close()
asyncio.run(m())
