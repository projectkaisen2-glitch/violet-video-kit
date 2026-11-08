import asyncio,sys,os
from pathlib import Path
from playwright.async_api import async_playwright
os.chdir(os.path.dirname(os.path.abspath(__file__)))
async def main():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page(viewport={'width':1920,'height':1080})
    errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
    await pg.goto(Path('sb.html').resolve().as_uri());await pg.wait_for_function('window.READY===true',timeout=20000)
    ids=await pg.evaluate('[...document.querySelectorAll(".S")].map(e=>e.id)')
    only=sys.argv[1:]
    for i in ids:
      if only and i not in only: continue
      await pg.locator('#'+i).screenshot(path=f'{i}.png')
    print(len(ids),errs[:3]);await b.close()
asyncio.run(main())
