"""Font diagnostics: which font file Chromium really uses for every character in EP03,
compared with the cloud reference (ep03/anim/ref/fonts_ref.json).
usage: python3 tools/fontdiag.py            -> prints only the differences (short text, send it to Claude)
       python3 tools/fontdiag.py --make-ref  (cloud only)"""
import sys as _s;from pathlib import Path as _P;_s.path.insert(0,str(_P(__file__).resolve().parent));import violet_env
import asyncio,json,subprocess,os,sys
from pathlib import Path
from playwright.async_api import async_playwright
K=Path(__file__).resolve().parent.parent;A=K/'ep03'/'anim';O=K/'ep03'/'testB';REF=A/'ref'/'fonts_ref.json'
GET='''()=>{const s=new Set();const w=document.createTreeWalker(document.documentElement,NodeFilter.SHOW_TEXT);let n;
while(n=w.nextNode()){if(n.parentElement&&['SCRIPT','STYLE'].includes(n.parentElement.tagName))continue;for(const ch of n.textContent)s.add(ch)}return [...s]}'''
CTX={'ui':"Inter,'Segoe UI',sans-serif",'ui2':"Inter,system-ui,sans-serif",'disp':"'Inter Display',Inter,sans-serif",'mono':"'DejaVu Sans Mono',monospace",'serif':"Georgia,serif"}
async def main():
  for b in (A,O): subprocess.run([sys.executable,str(b/'build.py')],check=True)
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page();chars=set()
    for u in [(A/'anim.html').as_uri(),(O/'test.html').as_uri()+'?render']:
      await pg.goto(u);await pg.wait_for_function('window.READY===true',timeout=120000);chars|=set(await pg.evaluate(GET))
    chars=sorted(c for c in chars if c.isprintable() and c!=' ')
    html=''.join(f'<span data-c="{ord(c)}" data-k="{k}" data-w="{w}" style="font-family:{st.replace(chr(34),"&quot;")};font-weight:{w};font-size:20px">{c}</span>' for c in chars for k,st in CTX.items() for w in (400,600,700,900))
    await pg.set_content('<html><body>'+html+'</body></html>')
    c=await pg.context.new_cdp_session(pg);await c.send('DOM.enable');await c.send('CSS.enable')
    root=(await c.send('DOM.getDocument',{'depth':-1}))['root']['nodeId'];res={}
    for nid in (await c.send('DOM.querySelectorAll',{'nodeId':root,'selector':'span'}))['nodeIds']:
      at=(await c.send('DOM.getAttributes',{'nodeId':nid}))['attributes'];a=dict(zip(at[::2],at[1::2]))
      fs=(await c.send('CSS.getPlatformFontsForNode',{'nodeId':nid}))['fonts']
      res[f"{a['data-k']}/{a['data-w']}/{chr(int(a['data-c']))}"]='+'.join(f.get('postScriptName') or f['familyName'] for f in fs)
    await b.close()
  fc=subprocess.run(['fc-match','--version'],capture_output=True,text=True).stderr.strip()
  info={'fontconfig':fc,'chromium':'see playwright','fc_sans':subprocess.run(['fc-match','sans-serif'],capture_output=True,text=True).stdout.strip(),
        'fc_list_count':len(subprocess.run(['fc-list'],capture_output=True,text=True).stdout.splitlines())}
  if '--make-ref' in sys.argv: json.dump({'info':info,'fonts':res},open(REF,'w'),ensure_ascii=False,indent=0);print('ref written',len(res));return
  ref=json.load(open(REF));print('this machine:',info);print('cloud       :',ref['info'])
  diff=[(k,ref['fonts'].get(k),v) for k,v in res.items() if ref['fonts'].get(k)!=v]
  print(f'{len(res)} char/style checks, {len(diff)} differ')
  for k,a,b in diff[:40]: print(f'  {k}: cloud={a}  here={b}')
asyncio.run(main())
