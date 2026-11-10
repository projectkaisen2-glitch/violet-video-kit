import asyncio
from pathlib import Path
from playwright.async_api import async_playwright
H=Path(__file__).resolve().parent
async def m():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=["--allow-file-access-from-files","--font-render-hinting=none","--disable-lcd-text","--force-color-profile=srgb"]);pg=await b.new_page(viewport={'width':1920,'height':1080},device_scale_factor=4/3)
    await pg.goto((H/'frames_b.html').as_uri());await pg.wait_for_function('window.READY===true');await pg.wait_for_timeout(500)
    for i in 'ABC': await pg.locator('#'+i).screenshot(path=str(H/f'style_{i}.png'))
    await b.close()
asyncio.run(m())
