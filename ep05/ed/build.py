"""Build one HTML scene per block: out/b<ID>.html
usage: python3 build.py ID   (ID 01..08; long = <ID>.wav + l<n>.wav, short = <ID>.wav + tail)
Page = head.html + SVG logos + CUE_A/CUE_L/CUE_T (word timings) + common.js + b<ID>.js"""
import json,sys,wave,re
from pathlib import Path
H=Path(__file__).resolve().parent;VOICE=H.parent/'voice_in';OUT=H/'out';OUT.mkdir(exist_ok=True)
LEAD=0.35;GAP=0.8
TAIL={'01':'t2','02':'t1','03':'t4','04':'t2','05':'t1','06':'t3','07':'t3','08':'t4'}
svg={p.stem:re.sub(r'<title>.*?</title>','',p.read_text()) for p in (H/'assets').glob('*.svg')}
for k in svg:
  if 'fill=' not in svg[k].split('>',1)[0]: svg[k]=svg[k].replace('<svg ','<svg fill="currentColor" ',1)
  svg[k]=re.sub(r'\s(width|height)="[^"]*"','',svg[k],count=2).replace('<svg ','<svg width="100%" height="100%" ',1)
def dur(k):
  with wave.open(str(VOICE/f'{k}.wav')) as f: return f.getnframes()/f.getframerate()
def cue(k,off): return [[round(off+w['start'],3),w['word']] for w in json.load(open(VOICE/f'{k}.json'))] if (VOICE/f'{k}.json').exists() else []
head=(H/'head.html').read_text();common=(H/'common.js').read_text()
for i in sys.argv[1:]:
  b0=LEAD+dur(i)+GAP
  L='l'+str(int(i)) if i.isdigit() and 1<=int(i)<=8 else None
  page=head+'<script>\nconst SVG='+json.dumps(svg)+';\nconst CUE_A='+json.dumps(cue(i,LEAD))+';\nconst CUE_L='+json.dumps(cue(L,b0) if L else [])+';\nconst CUE_T='+json.dumps(cue(TAIL.get(i,''),b0) if i in TAIL else [])+f';\nconst CUE_B0={b0:.3f};\n'+common+'\n'+(H/f'b{i}.js').read_text()+'\nwindow.R=R;window.END=END;document.fonts.ready.then(()=>{R(0);window.READY=true});\n</script></body></html>'
  (OUT/f'b{i}.html').write_text(page.replace('url(assets/','url(../assets/'));print('built',f'out/b{i}.html','B0',round(b0,2))
