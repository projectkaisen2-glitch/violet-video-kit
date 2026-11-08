"""One command to render a whole episode on any Linux machine (uses all CPU cores).
usage: python3 tools/render_local.py <episode_dir>      e.g. python3 tools/render_local.py ep03
Steps (each is skipped if its output already exists, so rerunning resumes):
 1. voice: <ep>/anim/voice.m4a + words.json from <ep>/voice_in/*.wav (tools/voice_timeline.py)
 2. opening: <ep>/opening.mp4 from the opening scene
 3. animation: <ep>/anim/segN.mp4 (60 s each, adaptive motion blur, render_fast.py)
 4. assemble -> <ep>/<out>   5. checks (duration, loudness, freezes, contact sheet, QR)"""
import json,subprocess,sys,os,math,time,shutil
from pathlib import Path
T=Path(__file__).resolve().parent;E=Path(sys.argv[1]).resolve();A=E/'anim'
cfg=json.load(open(E/'episode.json'));st=time.time()
def run(*c,cwd=None): print('>',' '.join(map(str,c)),flush=True);subprocess.run([str(x) for x in c],check=True,cwd=cwd)
if not (A/'voice.m4a').exists():
  if not list((E/'voice_in').glob('*.wav')): sys.exit('no voice: put <key>.wav + <key>.json into '+str(E/'voice_in'))
  run(sys.executable,T/'voice_timeline.py',E/'voice_in',A);shutil.copy(A/'timeline.json',E/'timeline.json')
o=cfg['opening'];O=E/o['dir']
if not (E/'opening.mp4').exists():
  run(sys.executable,O/'build.py');run(sys.executable,O/o['render'],cwd=O);shutil.copy(O/o['video'],E/'opening.mp4')
run(sys.executable,A/'build.py')
a=cfg['anim'];n=math.ceil((a['t_end']-a['t_start'])/a['segment'])
for i in range(n):
  t0=a['t_start']+i*a['segment'];t1=min(a['t_end'],t0+a['segment']);seg=A/f'seg{i+1}.mp4'
  if not seg.exists(): run(sys.executable,A/'render_fast.py',f'{t0:.3f}',f'{t1:.3f}',seg.name,cwd=A)
for f in A.glob('seg*.mp4'):
  if f.stem[3:].isdigit() and int(f.stem[3:])>n: f.unlink()
out=E/cfg['out']
run('bash',T/'assemble.sh',A,E/'opening.mp4',cfg['opening']['xfade_at'],out)
run('bash',T/'checks.sh',out,cfg['end_card_t'],cwd=E)
print(f'DONE {out}  total {(time.time()-st)/60:.1f} min',flush=True)
