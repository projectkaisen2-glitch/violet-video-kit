import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(next(p for p in _P(__file__).resolve().parents if (p/'tools'/'violet_env.py').exists())/'tools'));from violet_env import settle,ARGS
# shoots the 8-style key frames: out/s<N>_<fmt>.png
import asyncio,json,re
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent;A=H.parent.parent/'ep04'/'scenes'/'assets';(H/'out').mkdir(exist_ok=True)
svg={p.stem:re.sub(r'<title>.*?</title>','',p.read_text()) for p in A.glob('*.svg')}
for k in svg:
  if 'fill=' not in svg[k].split('>',1)[0]: svg[k]=svg[k].replace('<svg ','<svg fill="currentColor" ',1)
  svg[k]=re.sub(r'\s(width|height)="[^"]*"','',svg[k],count=2).replace('<svg ','<svg width="100%" height="100%" ',1)
async def m():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=ARGS)
    for fmt in 'hv':
      pg=await b.new_page(viewport={'width':1920,'height':1080} if fmt=='h' else {'width':1080,'height':1920},device_scale_factor=4/3 if fmt=='h' else 1)
      await pg.add_init_script('window.SVG='+json.dumps(svg))
      for n in range(0,9):
        await pg.goto((H/'frames.html').as_uri()+f'?s={n}&fmt={fmt}');await pg.wait_for_function('window.READY===true');await pg.evaluate('document.fonts.ready');await settle(pg)
        await pg.screenshot(path=str(H/'out'/f's{n}_{fmt}.png'))
      await pg.close()
    await b.close()
asyncio.run(m())
