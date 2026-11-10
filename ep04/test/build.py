"""Build scene.html: inline SVG logos (so currentColor works) and, if present, real voice word timings.
usage: python3 build.py [voice_json]   (voice_json = Kokoro word timings for block 01)"""
import json,sys,os,re
from pathlib import Path
VJ=Path(sys.argv[1]).resolve() if len(sys.argv)>1 else None
H=Path(__file__).resolve().parent;os.chdir(H)
svg={p.stem:re.sub(r'<title>.*?</title>','',p.read_text()) for p in (H/'assets').glob('*.svg')}
for k in svg: svg[k]=re.sub(r'\s(width|height)="[^"]*"','',svg[k],count=2).replace('<svg ','<svg width="100%" height="100%" ',1)
src=(H/'scene_src.html').read_text().replace('/*SVG*/{}',json.dumps(svg))
if len(sys.argv)>1:
  lead=0.35;cue=[[round(lead+w['start'],3),w['word']] for w in json.load(open(VJ))]
  src=src.replace('let CUE=/*CUE*/null','let CUE='+json.dumps(cue))
(H/'scene.html').write_text(src);print('scene.html built',len(svg),'logos','(real timings)' if len(sys.argv)>1 else '(estimated timings)')
