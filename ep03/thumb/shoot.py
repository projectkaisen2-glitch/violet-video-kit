import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(_P(__file__).resolve().parents[2]/'tools'));from violet_env import ARGS
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent
async def m():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=ARGS);pg=await b.new_page(viewport={'width':1280,'height':1500},device_scale_factor=2)
    await pg.goto((H/'thumb.html').as_uri());await pg.wait_for_timeout(800)
    for i in ['A','B']: await pg.locator('#'+i).screenshot(path=str(H/f'thumb_{i}_2x.png'))
    await b.close()
asyncio.run(m())
