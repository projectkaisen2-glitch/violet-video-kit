# Cut vertical Shorts (1080x1920) from finished EP01/EP02 renders.
import json,re,subprocess,sys
from pathlib import Path
SP=Path(__file__).resolve().parent.parent;OUT=SP/'shorts'
E1=SP/'ep01';E2=SP/'ep02'
V1=E1/'out'/'EP01_full_1440.mp4';V2=E2/'anim'/'out'/'EP02_full_1440.mp4'
t1={x['k']:x for x in json.load(open(E1/'timeline.json'))}
t2={x['k']:x for x in json.load(open(E2/'timeline.json'))}
# EP01 phrases
P1={};cur=None
for ln in open(E1/'voice'/'phrases.txt'):
  m=re.match(r'## (\S+)',ln)
  if m: cur=m[1];P1[cur]=[];continue
  m=re.match(r'\s*([\d.]+)-\s*([\d.]+)\s+(.*)',ln)
  if m and cur: P1[cur].append((float(m[1]),float(m[2]),m[3].strip()))
FIX=[(r'\bfive point six\b','5.6'),(r'\bthree point six\b','3.6'),(r'\bthree point eight\b','3.8'),(r'\bG-L-M\b','GLM'),(r'\bV-RAM\b','VRAM'),
 (r'thirty-five B,? A three B','35B-A3B'),(r'\bthirty-five B\b','35B'),(r'\bA three B\b','A3B'),(r'twenty-seven B','27B'),(r'seventeen hundred dollars','$1,700'),(r'\bseventeen hundred\b','1,700'),
 (r'October seventeenth','October 17'),(r'\bOpus five\b','Opus 5'),(r'\bfour to five\b','4–5'),(r'\b1 percent\b','1%'),(r'\b97 percent\b','97%'),(r'\b16 gigs\b','16 GB'),(r'\b8 gigs\b','8 GB'),(r'\bgigs\b','GB')]
def fix(s):
  for a,b in FIX: s=re.sub(a,b,s)
  return s
def chunks_words(words,off):
  out=[];buf=[]
  for w in words:
    buf.append(w)
    if len(buf)>=4 or re.search(r'[.,:;?!"]$',w['word']):
      out.append((off+buf[0]['start'],off+buf[-1]['end'],fix(' '.join(x['word'] for x in buf))));buf=[]
  if buf: out.append((off+buf[0]['start'],off+buf[-1]['end'],fix(' '.join(x['word'] for x in buf))))
  return out
def chunks_phr(phr,off):
  out=[]
  for a,b,txt in phr:
    ws=txt.split();n=max(1,round(len(ws)/4));step=len(ws)/n
    for i in range(n):
      seg=ws[round(i*step):round((i+1)*step)];out.append((off+a+(b-a)*i/n,off+a+(b-a)*(i+1)/n,' '.join(seg)))
  return out
def caps(ep,blocks,until=None):
  out=[]
  for k in blocks:
    if ep==1: out+=chunks_phr(P1[k],t1[k]['S'])
    else:
      w=json.load(open(E2/'voice_in'/f'{k}.json'))
      if until and k in until: w=[x for x in w if x['start']<until[k]]
      out+=chunks_words(w,t2[k]['S'])
  return out
def ts(t):
  t=max(0,t);return f"{int(t//3600)}:{int(t%3600//60):02d}:{t%60:05.2f}"
SH=[ # id, ep, blocks, title(2 lines), crop x (of 2560-wide frame, crop width 1920), cut-before-word
 ('S1',1,['03'],'PewDiePie made\\Nan uncensored AI',320,None),
 ('S2',1,['06b','07a'],'Why jailbreaks\\Nmake AI dumber',320,None),
 ('S3',1,['11b'],"Don't download\\Nthis AI model",320,None),
 ('S4',1,['12a','12b'],'Can YOUR PC\\Nrun local AI?',320,None),
 ('S5',2,['06a'],'75% of your AI bill\\Nis this one thing',320,None),
 ('S6',2,['09b'],'An AI agent wiped\\Nhis Mac home folder',320,None),
 ('S7',2,['14b'],'Free AI tool hacked:\\Nup to $1,700 charges',320,{'14b':29.0}),
 ('S8',2,['15b'],'8 GB VRAM is enough\\Nfor local AI',320,None),
]
def build(s):
  sid,ep,blocks,title,cx,until=s;T=t1 if ep==1 else t2;V=V1 if ep==1 else V2
  t0=T[blocks[0]]['S']-0.25
  c=caps(ep,blocks,until);t_end=c[-1][1]+0.6
  dur=t_end-t0
  ass=f"""[Script Info]
ScriptType: v4.00+
PlayResX: 1080
PlayResY: 1920
[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: T,Inter ExtraBold,84,&H000A0A0A,&H000A0A0A,&H0000E6FF,&H0000E6FF,1,0,0,0,100,100,0,0,3,18,0,8,60,60,250,1
Style: C,Inter ExtraBold,76,&H00FFFFFF,&H00FFFFFF,&H00000000,&H64000000,1,0,0,0,100,100,0,0,1,7,3,8,70,70,1300,1
Style: F,Inter SemiBold,40,&H00C8C8C8,&H00C8C8C8,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,3,0,2,60,60,150,1
[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,{ts(0)},{ts(dur)},T,,0,0,0,,{{\\fad(250,0)\\t(0,250,\\fscx100\\fscy100)}}{title}
Dialogue: 0,{ts(0)},{ts(dur)},F,,0,0,0,,VIOLET · full video on the channel
"""
  for a,b,txt in c:
    a-=t0;b-=t0
    ass+=f"Dialogue: 0,{ts(a)},{ts(b+0.08)},C,,0,0,0,,{{\\fscx88\\fscy88\\t(0,120,\\fscx100\\fscy100)}}{txt}\n"
  (OUT/f'{sid}.ass').write_text(ass)
  fc=(f"[0:v]split[a][b];[a]scale=-2:1920,crop=1080:1920,boxblur=40:2,eq=brightness=-0.32:saturation=1.2[bg];"
      f"[b]crop=2340:1440:110:0,scale=1080:664:flags=lanczos[fg];[bg][fg]overlay=0:560,ass={OUT/(sid+'.ass')}:fontsdir={E1/'fonts'},fps=30[v];"
      f"[0:a]afade=t=in:d=0.15,afade=t=out:st={dur-0.35:.2f}:d=0.35[au]")
  subprocess.run(['ffmpeg','-v','error','-y','-ss',f'{t0:.3f}','-t',f'{dur:.3f}','-i',str(V),'-filter_complex',fc,'-map','[v]','-map','[au]',
    '-c:v','libx264','-preset','medium','-crf','18','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-movflags','+faststart',str(OUT/f'{sid}.mp4')],check=True)
  print(sid,round(dur,1))
for s in SH:
  if len(sys.argv)<2 or s[0] in sys.argv[1:]: build(s)
