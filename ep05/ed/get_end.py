import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(next(p for p in _P(__file__).resolve().parents if (p/'tools'/'violet_env.py').exists())/'tools'));from violet_env import ARGS
# prints window.END of out/b<ID>.html (the block decides its own tail)
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright
H=Path(__file__).resolve().parent
with sync_playwright() as pw:
  b=pw.chromium.launch(args=ARGS);pg=b.new_page();pg.goto((H/'out'/f'b{sys.argv[1]}.html').as_uri()+('?fmt=h&mode=long' if (sys.argv[2:] or ['h'])[0]=='h' else '?fmt=v&mode=short'))
  pg.wait_for_function('window.READY===true',timeout=60000);print(round(pg.evaluate('window.END'),2));b.close()
