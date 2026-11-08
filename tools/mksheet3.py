import asyncio,sys,textwrap
from pathlib import Path
from playwright.async_api import async_playwright
from PIL import Image,ImageDraw,ImageFont
d=Path(sys.argv[1]);tag=sys.argv[2]
async def m():
  async with async_playwright() as pw:
    b=await pw.chromium.launch(args=["--allow-file-access-from-files"]);pg=await b.new_page()
    await pg.goto((d/'sb.html').resolve().as_uri());await pg.wait_for_function('window.READY===true')
    r=await pg.evaluate('FR.map(f=>({id:f.id,t:f.t,v:f.v,a:f.a}))');await b.close();return r
caps=asyncio.run(m())
pre=[("P01","0:00,0–0:05,4","«You can run Claude Code for free. Same agent, same terminal, same commands.»","Одобренный тест: рабочий стол Windows 11, наезд на Windows Terminal, запуск Claude Code, плашка FREE, агент начинает работу."),
("P02","0:05,5–0:09,4","«The only thing you swap is the brain: instead of Anthropic's servers…»","/status: рамка на модели (THE BRAIN), затем на api.anthropic.com → пунктир к плитке Wi-Fi, пакеты уходят в интернет."),
("P03","0:09,4–0:12,0","«…it's a model running on your own computer.»","ollama launch → окно Ollama грузит модель на видеокарту, видеопамять 7,1/8 ГБ, цепочка Claude Code → Ollama → GPU."),
("P04","0:12,0–0:17,6","«No subscription, no limits, and your code never leaves your machine.»","$200→$0, NO LIMITS, Wi-Fi выключен, агент продолжает: «1 passed». Финальная композиция.")]
mine=set(sys.argv[3].split(',')) if len(sys.argv)>3 else set()
rows=([(a,b,c,e,str(d/(a+'.png'))) for a,b,c,e in pre] if tag=='P1' else [])+[(c['id'],c['t'],c['v'],c['a']+(' [Текст на странице — моя формулировка / по памяти]' if c['id'] in mine else ''),str(d/(c['id']+'.png'))) for c in caps]
f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',19);fb=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',22)
W,H,CH=900,506,250;per=8;n=0
for s in range(0,len(rows),per):
  ch=rows[s:s+per];rr=(len(ch)+1)//2
  S=Image.new('RGB',(W*2+60,(H+CH)*rr+40),'#151515');dr=ImageDraw.Draw(S)
  for i,(k,t,v,a,p) in enumerate(ch):
    x=20+(i%2)*(W+20);y=20+(i//2)*(H+CH)
    S.paste(Image.open(p).convert('RGB').resize((W,H)),(x,y))
    dr.text((x,y+H+8),f'{k} · {t}',fill='#FFE600',font=fb);yy=y+H+38
    for l in textwrap.wrap(v,78)[:3]: dr.text((x,yy),l,fill='#FFFFFF',font=f);yy+=24
    for l in textwrap.wrap(a,78)[:6]: dr.text((x,yy),l,fill='#BBBBBB',font=f);yy+=24
  n+=1;S.save(str(d/f'EP03_{tag}_storyboard_{n}.png'))
print(len(rows),n)
