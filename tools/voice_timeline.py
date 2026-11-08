"""voice_in/<key>.wav+.json (Kokoro, per-word times) -> timeline.json, words.json, voice.m4a
usage: python3 voice_timeline.py <voice_in_dir> <out_dir> [--lead 0.6] [--gap 0.7] [--tail 11.0]
Blocks are placed in key-sorted order: S0=LEAD, S_next = S + d + GAP.
voice.m4a total length = last voice end + TAIL (END card), measured and gained to -14 LUFS (2-pass)."""
import json,sys,glob,os,subprocess,argparse,wave
ap=argparse.ArgumentParser();ap.add_argument('vin');ap.add_argument('out')
ap.add_argument('--lead',type=float,default=0.6);ap.add_argument('--gap',type=float,default=0.7);ap.add_argument('--tail',type=float,default=11.56)
a=ap.parse_args();os.makedirs(a.out,exist_ok=True)
keys=sorted(os.path.basename(f)[:-4] for f in glob.glob(a.vin+'/*.wav'))
tl=[];words=[];S=a.lead
for k in keys:
  with wave.open(f'{a.vin}/{k}.wav') as w: d=round(w.getnframes()/w.getframerate(),3)
  tl.append({'k':k,'S':round(S,3),'d':d})
  for x in json.load(open(f'{a.vin}/{k}.json')): words.append([round(S+x['start'],3),x['word']])
  S+=d+a.gap
end=tl[-1]['S']+tl[-1]['d'];total=round(end+a.tail,3)
json.dump(tl,open(a.out+'/timeline.json','w'),indent=0);json.dump(words,open(a.out+'/words.json','w'))
inp=[];flt=[]
for i,b in enumerate(tl):
  inp+=['-i',f"{a.vin}/{b['k']}.wav"];ms=int(round(b['S']*1000));flt.append(f'[{i}:a]aresample=48000,aformat=channel_layouts=mono,adelay={ms}[a{i}]')
flt.append(''.join(f'[a{i}]' for i in range(len(tl)))+f'amix=inputs={len(tl)}:normalize=0,apad,atrim=0:{total}[o]')
subprocess.run(['ffmpeg','-y','-loglevel','error',*inp,'-filter_complex',';'.join(flt),'-map','[o]',a.out+'/_mix.wav'],check=True)
import re
m=subprocess.run(['ffmpeg','-nostats','-i',a.out+'/_mix.wav','-af','ebur128','-f','null','-'],capture_output=True,text=True).stderr
I=float(re.findall(r'I:\s+(-?[\d.]+) LUFS',m)[-1]);g=-14.0-I
subprocess.run(['ffmpeg','-y','-loglevel','error','-i',a.out+'/_mix.wav','-af',f'volume={g:.2f}dB,alimiter=limit=0.89:level=false','-c:a','aac','-b:a','192k',a.out+'/voice.m4a'],check=True)
os.remove(a.out+'/_mix.wav');print('gain',round(g,2),'dB')
print(len(tl),'blocks, voice ends',round(end,2),'s, total',total,'s')
