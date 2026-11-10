"""Build one HTML scene per block: scenes/out/b<ID>.html
usage: python3 build.py [ID ...]     (default: every b??.js that has voice_in/<ID>.json)
Each page = head.html + inlined SVG logos + CUE (voice word timings) + common.js + b<ID>.js
Open with ?fmt=h|v&mode=long|short"""
import json,sys,os,re
from pathlib import Path
H=Path(__file__).resolve().parent;VOICE=H.parent/'voice_in';OUT=H/'out';OUT.mkdir(exist_ok=True)
svg={p.stem:re.sub(r'<title>.*?</title>','',p.read_text()) for p in (H/'assets').glob('*.svg')}
for k in svg:
  if 'fill=' not in svg[k].split('>',1)[0]: svg[k]=svg[k].replace('<svg ','<svg fill="currentColor" ',1)
  svg[k]=re.sub(r'\s(width|height)="[^"]*"','',svg[k],count=2).replace('<svg ','<svg width="100%" height="100%" ',1)
head=(H/'head.html').read_text();common=(H/'common.js').read_text()
ids=sys.argv[1:] or sorted(p.stem[1:] for p in H.glob('b??.js'))
for i in ids:
  js=H/f'b{i}.js';vj=VOICE/f'{i}.json'
  cue=[[round(0.35+w['start'],3),w['word']] for w in json.load(open(vj))] if vj.exists() else []
  # the asset folder is shared: pages live in out/, so point to ../assets
  page=head+'<script>\nconst SVG='+json.dumps(svg)+';\nconst CUE='+json.dumps(cue)+';\n'+common+'\n'+js.read_text()+'\nwindow.R=R;window.END=END;document.fonts.ready.then(()=>{fitPlates();R(0);window.READY=true});\n</script></body></html>'
  page=page.replace('url(assets/','url(../assets/')
  (OUT/f'b{i}.html').write_text(page);print('built',f'out/b{i}.html',len(cue),'words')
