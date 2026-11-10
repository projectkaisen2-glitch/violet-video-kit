// ===== EP05 block 01 — CLAUDE PRO — one world: an instrument dashboard (P70) =====
// The money goes in, the odometer counts what it buys, two gauges show what stops you, a slide rule shows the Ultra gap,
// the ladder (through-object) takes the Claude bar. Long add-on (l1): model knob, chat feeding the same gauge, terminal tips.
const T={note:at('Twenty'),six:at('six'),aiEnd:at('Thats')-.15,meas:at('Thats'),n79:at('seventy-nine'),rough:at('roughly'),wk:at('week'),
 task:at('my')-.1,eleven:at('eleven'),win:at('window'),around:at('around'),wk2:at('week',2),catch:at('catch'),cap:at('cap'),stops:at('stops'),not:at('not'),
 bigger:at('bigger'),ultra:at('Ultra'),per:at('Per',2),ten:at('ten'),most:at('Most'),priced:at('priced')};
const LONG=MODE==='long';
const C={bg0:'#1a1412',bg1:'#0e0b0a',plate:'#221b18',ink:'#F3E9DF',eng:'rgba(243,233,223,.55)',cream:'#D9C2A6',hot:'#E8835E',lamp:'#ff6a45',green:'#9ED8A0'};
const ENG=(fs)=>`font:500 ${fs}px/1.25 'IBM Plex Sans Condensed';color:${C.eng}`;
// ---------- the dashboard surface (whole world) ----------
const WW=p(2900,1080),WH=p(2500,6400);
el(`<div class="ab" style="left:-1200px;top:-1200px;width:${WW+2400}px;height:${WH+2400}px;background:
 radial-gradient(1400px 900px at ${1200+p(900,540)}px ${1200+p(700,900)}px,rgba(255,170,120,.10),transparent 70%),
 repeating-linear-gradient(90deg,rgba(255,255,255,.012) 0 1px,transparent 1px 4px),
 radial-gradient(120% 90% at 50% 40%,${C.bg0},${C.bg1})"></div>`,world);
const plate=(x,y,w,h,extra='')=>el(`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:28px;background:linear-gradient(180deg,#261e1a,#1c1613);border:1px solid rgba(255,255,255,.06);box-shadow:inset 0 2px 0 rgba(255,255,255,.05),inset 0 -20px 40px rgba(0,0,0,.35),0 30px 60px rgba(0,0,0,.45);${extra}">
 ${[[18,18],[w-30,18],[18,h-30],[w-30,h-30]].map(([a,b])=>`<i style="position:absolute;left:${a}px;top:${b}px;width:12px;height:12px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#7a6a60,#2a221e);box-shadow:0 1px 1px rgba(0,0,0,.6)"></i>`).join('')}</div>`,world);
// ---------- 1. ODOMETER: a $20 note goes into the slot, the drums roll 020 -> 672 ----------
const O=p({x:140,y:140,w:1140,h:420},{x:60,y:100,w:960,h:900});const Op=plate(O.x,O.y,O.w,O.h);
const slot=p({x:330,y:90,h:240},{x:0,y:0,h:0});
const DH=p(250,300),DW=p(170,200);const drumX=p(400,45),drumY=p(85,440);
// slot + note
const noteWrap=el(`<div class="ab" style="left:${p(30,60)}px;top:${p(110,40)}px;width:${p(330,840)}px;height:${p(200,320)}px;overflow:hidden"></div>`,Op);
const note=el(`<div class="ab" style="left:0;top:${p(20,15)}px;width:${p(300,320)}px;height:${p(150,140)}px;border-radius:8px;background:
 repeating-radial-gradient(circle at 80% 50%,rgba(60,80,60,.18) 0 2px,transparent 2px 6px),linear-gradient(135deg,#cfd6c4,#aab79e);box-shadow:0 10px 20px rgba(0,0,0,.45);border:1px solid rgba(0,0,0,.2)">
 <span style="position:absolute;left:16px;top:8px;font:800 56px 'Bricolage Grotesque';color:#3d4a3a">20</span>
 <span style="position:absolute;right:18px;bottom:10px;font:800 34px 'Bricolage Grotesque';color:#3d4a3a">$20</span>
 <i style="position:absolute;left:130px;top:28px;width:90px;height:90px;border-radius:50%;border:2px solid rgba(61,74,58,.45)"></i></div>`,noteWrap);
const slit=el(`<div class="ab" style="left:${p(358,60)}px;top:${p(100,370)}px;width:${p(10,840)}px;height:${p(220,12)}px;border-radius:5px;background:#050404;box-shadow:inset 0 2px 4px rgba(0,0,0,.9),0 1px 0 rgba(255,255,255,.08)"></div>`,Op);
if(V){note.style.transformOrigin='0 0'}
// drums
const drumWin=el(`<div class="ab" style="left:${drumX}px;top:${drumY}px;width:${DW*4+30}px;height:${DH}px;border-radius:16px;background:#0b0908;box-shadow:inset 0 6px 14px rgba(0,0,0,.9);overflow:hidden;display:flex;gap:10px;padding:0 10px"></div>`,Op);
const drums=[];for(let d=0;d<4;d++){const col=el(`<div style="position:relative;width:${DW}px;height:${DH}px;overflow:hidden;background:linear-gradient(180deg,#bfb3a6,#F3E9DF 30%,#F3E9DF 70%,#bfb3a6)"></div>`,drumWin);
 const strip=el(`<div class="ab" style="left:0;top:0;width:${DW}px">${(d===0?['$']:[0,1,2,3,4,5,6,7,8,9,0]).map(n=>`<div style="height:${DH}px;display:flex;align-items:center;justify-content:center;font:800 ${DH*.82}px/1 'Bricolage Grotesque';color:#1b1513;letter-spacing:-.04em">${n}</div>`).join('')}</div>`,col);
 el(`<div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(0,0,0,.55),transparent 28%,transparent 72%,rgba(0,0,0,.55))"></div>`,col);drums.push(strip)}
el(`<div class="ab" style="left:${drumX}px;top:${drumY}px;width:${DW*4+30}px;height:${DH}px;border-radius:16px;background:linear-gradient(170deg,rgba(255,255,255,.14),transparent 40%);pointer-events:none"></div>`,Op);
el(`<div class="ab" style="left:${drumX+4}px;top:${drumY+DH+16}px;${ENG(p(26,28))}">AI per month, priced at API rates</div>`,Op);
function odo(N){[2,1,0].forEach((d,i)=>{const pw=Math.pow(10,d);let r=Math.floor(N/pw);const rem=N-r*pw;
  if(d===0)r=N;else if(rem>pw-1)r+=rem-(pw-1);drums[i+1].style.transform=`translateY(${-((r%10+10)%10)*DH}px)`})}
// ---------- 2. MEASUREMENT PANEL: 79 account lamps + weekly readout ----------
const M=p({x:1360,y:140,w:1040,h:420},{x:60,y:1080,w:960,h:1150});const Mp=plate(M.x,M.y,M.w,M.h);
const LG=p({x:50,y:60,cols:10,rows:8,s:40},{x:78,y:70,cols:10,rows:8,s:84});const lamps=[];
for(let i=0;i<80;i++){const c=i%LG.cols,r=Math.floor(i/LG.cols);lamps.push(el(`<i class="ab" style="left:${LG.x+c*LG.s}px;top:${LG.y+r*LG.s}px;width:${p(22,52)}px;height:${p(22,52)}px;border-radius:50%;background:#2a221e;box-shadow:inset 0 2px 3px rgba(0,0,0,.7)"></i>`,Mp))}
el(`<div class="ab" style="left:${LG.x}px;top:${LG.y+LG.rows*LG.s+12}px;${ENG(p(22,30))}">one lamp = one Claude Pro account</div>`,Mp);
const lcd=el(`<div class="ab" style="left:${p(500,60)}px;top:${p(70,820)}px;width:${p(480,840)}px;height:${p(200,220)}px;border-radius:14px;background:linear-gradient(180deg,#120f0d,#1a1512);box-shadow:inset 0 4px 12px rgba(0,0,0,.9);padding:22px 26px">
 <div style="${ENG(p(22,30))}">API value used, per week</div><div class="v" style="white-space:nowrap;font:600 ${p(92,110)}px/1.15 'IBM Plex Mono';color:#F2B36B;text-shadow:0 0 18px rgba(242,179,107,.45)">$0</div></div>`,Mp);
const lcdV=lcd.querySelector('.v');
el(`<div class="ab" style="left:${p(500,60)}px;top:${p(300,1060)}px;width:${p(480,840)}px;${ENG(p(20,26))}">median of 79 accounts, week of Oct 26 – Nov 2, 2026 (Wokey)</div>`,Mp);
// ---------- 3. GAUGES: 5-hour window + weekly cap ----------
const NS='http://www.w3.org/2000/svg';
function gauge(cx,cy,r,lab,hot){const gid='g'+(hot?2:1);const a0=-210,a1=30,rad=d=>d*Math.PI/180,pt=(d,rr)=>[cx+rr*Math.cos(rad(d)),cy+rr*Math.sin(rad(d))];
 const arcD=(d0,d1,rr)=>{const [x1,y1]=pt(d0,rr),[x2,y2]=pt(d1,rr);return `M${x1} ${y1} A${rr} ${rr} 0 ${d1-d0>180?1:0} 1 ${x2} ${y2}`};
 const ticks=[...Array(25)].map((_,i)=>{const d=a0+(a1-a0)*i/24,[x1,y1]=pt(d,r*.86),[x2,y2]=pt(d,r*(i%4?.8:.74));return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${hot&&i>19?C.hot:'#8a7a6e'}" stroke-width="${i%4?2.5:5}"/>`}).join('');
 const g=el(`<svg class="ab" style="left:0;top:0;overflow:visible" width="10" height="10"><defs><radialGradient id="gl${gid}" cx="40%" cy="28%" r="80%"><stop offset="0" stop-color="#fff" stop-opacity=".09"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <linearGradient id="bz${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a4a40"/><stop offset=".5" stop-color="#2a211d"/><stop offset="1" stop-color="#4a3c34"/></linearGradient></defs>
  <circle cx="${cx}" cy="${cy}" r="${r*1.16}" fill="url(#bz${gid})"/><circle cx="${cx}" cy="${cy}" r="${r*1.08}" fill="#17120f"/>
  <path d="${arcD(a0,a1,r*.94)}" fill="none" stroke="#2f2622" stroke-width="${r*.08}" stroke-linecap="round"/>
  <path class="prog" d="" fill="none" stroke="${hot?C.hot:C.cream}" stroke-width="${r*.08}" stroke-linecap="round"/>
  ${hot?`<path d="${arcD(a0+(a1-a0)*.83,a1,r*1.0)}" fill="none" stroke="${C.hot}" stroke-opacity=".35" stroke-width="${r*.03}"/>`:''}${ticks}
  <text x="${cx}" y="${cy+r*.44}" text-anchor="middle" font-family="IBM Plex Sans Condensed" font-weight="500" font-size="${r*.13}" fill="${C.eng}">${lab}</text>
  <g class="lampg"></g>
  <g class="nd"><line x1="${cx}" y1="${cy+r*.12}" x2="${cx}" y2="${cy-r*.78}" stroke="${C.ink}" stroke-width="${r*.035}" stroke-linecap="round"/></g>
  <circle cx="${cx}" cy="${cy}" r="${r*.08}" fill="#d8ccbf"/><circle cx="${cx}" cy="${cy}" r="${r*1.08}" fill="url(#gl${gid})" pointer-events="none"/></svg>`,world);
 const prog=g.querySelector('.prog'),nd=g.querySelector('.nd');
 return{g,pt,a0,a1,set(f){const ang=a0+(a1-a0)*cl(f,-.02,1.02);nd.setAttribute('transform',`rotate(${ang+90} ${cx} ${cy})`);prog.setAttribute('d',f>.004?arcD(a0,a0+(a1-a0)*cl(f),r*.94):'')}}}
const G1=p({cx:560,cy:940,r:290},{cx:540,cy:2720,r:360}),G2=p({cx:1300,cy:940,r:290},{cx:540,cy:3660,r:360});
const g1=gauge(G1.cx,G1.cy,G1.r,'5-hour window',false),g2=gauge(G2.cx,G2.cy,G2.r,'weekly',true);
// 11 task pips inside the 5-hour gauge (one per Opus bug fix), 13 window cells under the weekly gauge
const pips=[...Array(11)].map((_,i)=>{const f=(i+1)/11*.48,d=g1.a0+(g1.a1-g1.a0)*f,[x,y]=g1.pt(d,G1.r*.63);const q=p(18,24);return el(`<i class="ab" style="left:${x-q/2}px;top:${y-q/2}px;width:${q}px;height:${q}px;border-radius:50%;background:#2c241f"></i>`,world)});
const CW=p(42,50),cells=[...Array(13)].map((_,i)=>el(`<i class="ab" style="left:${G2.cx-6.5*CW-6*4+i*(CW+4)}px;top:${G2.cy+G2.r*1.26}px;width:${CW}px;height:${p(34,40)}px;border-radius:5px;background:#2a221e;box-shadow:inset 0 2px 3px rgba(0,0,0,.6)"></i>`,world));
el(`<div class="ab" style="left:${G2.cx-6.5*CW-24}px;top:${G2.cy+G2.r*1.26+p(44,54)}px;white-space:nowrap;${ENG(p(22,28))}">full 5-hour windows in one week</div>`,world);
el(`<div class="ab" style="left:${G1.cx-G1.r}px;top:${G1.cy+G1.r*1.26+p(10,8)}px;width:${G1.r*2}px;text-align:center;${ENG(p(22,28))}">one dot = one medium bug fix on Opus ($1.06)</div>`,world);
// warning lamp on the weekly gauge face
const lampEl=el(`<div class="ab" style="left:${G2.cx-p(26,32)}px;top:${G2.cy+G2.r*.58}px;width:${p(52,64)}px;height:${p(52,64)}px;border-radius:50%;background:#3a1a14;box-shadow:inset 0 3px 5px rgba(0,0,0,.7)"></div>`,world);
// ---------- 4. SLIDE RULE: Ultra, sold as 20x per 5 hours — per week it sits at 10x ----------
const SR=p({x:1700,y:740,w:820,h:380},{x:60,y:4300,w:960,h:860});const SRp=plate(SR.x,SR.y,SR.w,SR.h);
const rail=(y,lab)=>{const x0=60,len=SR.w-130;el(`<div class="ab" style="left:${x0}px;top:${y}px;width:${len}px;height:6px;border-radius:3px;background:#0f0c0a;box-shadow:inset 0 1px 2px rgba(0,0,0,.9)"></div>`,SRp);
 for(let v=0;v<=20;v++)el(`<i class="ab" style="left:${x0+v/20*len-1}px;top:${y+12}px;width:2px;height:${v%5?10:20}px;background:#8a7a6e"></i>`,SRp);
 [0,5,10,15,20].forEach(v=>el(`<span class="ab" style="left:${x0+v/20*len-30}px;top:${y+36}px;width:60px;text-align:center;font:600 ${p(22,30)}px 'IBM Plex Mono';color:#a8978a">${v}×</span>`,SRp));
 el(`<span class="ab" style="${V?'right:60px':'left:170px'};top:${y-p(44,130)}px;${ENG(p(24,32))}">${lab}</span>`,SRp);return{x:v=>x0+v/20*len,y}};
const r1=rail(p(90,300),'usage vs Pro, per 5 hours'),r2=rail(p(250,640),'usage vs Pro, per week');
const tab=(lab,col)=>el(`<div class="ab" style="left:0;top:0;height:${p(46,62)}px;padding:0 16px;border-radius:10px;background:linear-gradient(180deg,${col},#8a6a3a);box-shadow:0 8px 14px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.4);font:700 ${p(24,34)}px/${p(46,62)}px 'Bricolage Grotesque';color:#1b1513;white-space:nowrap;transform:translate(-50%,-100%)">${lab}</div>`,SRp);
const proTab1=tab('Pro','#cdb48a'),proTab2=tab('Pro','#cdb48a'),ultra=tab('Ultra','#E8B36B');
const gap=el(`<div class="ab" style="top:${r2.y-22}px;height:16px;background:repeating-linear-gradient(-45deg,rgba(232,131,94,.55) 0 6px,transparent 6px 12px);border-radius:3px"></div>`,SRp);
const ghost=el(`<div class="ab" style="left:${r2.x(20)}px;top:${r2.y-6}px;height:${p(46,62)}px;padding:0 16px;border-radius:10px;border:2px dashed rgba(232,131,94,.7);font:700 ${p(24,34)}px/${p(42,58)}px 'Bricolage Grotesque';color:rgba(232,131,94,.8);white-space:nowrap;transform:translate(-50%,-100%)">20×?</div>`,SRp);
// ---------- 5. THE LADDER (through-object of the video) ----------
const LD=p({x:1700,y:1200,w:820,h:520},{x:60,y:5260,w:960,h:900});const LDp=plate(LD.x,LD.y,LD.w,LD.h);
const LR=[['claudecode-color','Claude Pro',672,'$672','34×'],['codex-color','?',0],['','?',0],['githubcopilot','?',0],['cursor','?',0],['gemini-color','?',0]];
const bw=LD.w-p(330,420),rowsL=LR.map(([lg,nm,v,val,x],i)=>{const y=p(40,60)+i*p(68,124);const r=el(`<div class="ab" style="left:36px;top:${y}px;width:${LD.w-70}px;height:${p(52,90)}px;display:flex;align-items:center;gap:16px">
 <span style="width:${p(40,60)}px;height:${p(40,60)}px;flex:none;color:#fff;${i?'opacity:.25;filter:grayscale(1)':''}">${lg?ic(lg):''}</span>
 <span style="width:${p(170,230)}px;flex:none;font:700 ${p(28,40)}px 'Bricolage Grotesque';color:${i?'rgba(243,233,223,.3)':C.ink}">${nm}</span>
 <span class="tr" style="position:relative;width:${bw}px;height:${p(30,52)}px;flex:none;border-radius:6px;background:#141010;box-shadow:inset 0 2px 4px rgba(0,0,0,.8)"><span class="bar" style="position:absolute;left:0;top:0;bottom:0;width:0;border-radius:6px;background:linear-gradient(90deg,#6fbf7b,${C.green});box-shadow:0 0 20px rgba(158,216,160,.35)"></span>
 <span class="val" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);font:700 ${p(24,34)}px 'Bricolage Grotesque';color:#10200f;opacity:0">${val||''} <span style="font-weight:500;opacity:.7">${x||''}</span></span></span></div>`,LDp);return r});
el(`<div class="ab" style="left:36px;top:${LD.h-p(46,64)}px;${ENG(p(20,28))}">API dollars of AI per month, per plan</div>`,LDp);
// ---------- 6. LONG ADD-ON (h only): model knob + price readout, chat screen wired to the weekly gauge, terminal ----------
let knob,kPtr,flapA,flapB,chatScr,bubbles=[],wire,pulse,term,termTxt,ctxBar,useBars;
if(LONG){
 const K={cx:1980,cy:2010,r:150};
 knob=el(`<div class="ab" style="left:${K.cx-K.r}px;top:${K.cy-K.r}px;width:${K.r*2}px;height:${K.r*2}px;border-radius:50%;background:repeating-conic-gradient(#3a2f29 0 4deg,#2a221e 4deg 8deg);box-shadow:0 20px 40px rgba(0,0,0,.6),inset 0 0 0 14px #2d2420">
  <div style="position:absolute;inset:36px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#4a3c34,#1e1815)"></div></div>`,world);
 kPtr=el(`<div class="ab" style="left:${K.cx-6}px;top:${K.cy-K.r+40}px;width:12px;height:${K.r-40}px;border-radius:6px;background:${C.ink};transform-origin:6px ${K.r-40}px;box-shadow:0 0 10px rgba(243,233,223,.4)"></div>`,world);
 [['Haiku',-55],['Sonnet',0],['Opus',55]].forEach(([n,a])=>{const rr=K.r+46,x=K.cx+rr*Math.sin(a*Math.PI/180),y=K.cy-rr*Math.cos(a*Math.PI/180);el(`<span class="ab" style="left:${x-60}px;top:${y-16}px;width:120px;text-align:center;font:700 26px 'Bricolage Grotesque';color:${C.eng}">${n}</span>`,world)});
 const fl=(y)=>el(`<div class="ab" style="left:${K.cx+K.r+80}px;top:${y}px;width:420px;height:84px;border-radius:12px;background:#120f0d;box-shadow:inset 0 3px 8px rgba(0,0,0,.9);perspective:600px"><div class="in" style="position:absolute;inset:0;display:flex;align-items:center;padding:0 22px;font:600 38px 'IBM Plex Mono';color:#F2B36B;text-shadow:0 0 14px rgba(242,179,107,.4);backface-visibility:hidden"></div></div>`,world);
 flapA=fl(K.cy-110);flapB=fl(K.cy-10);
 el(`<div class="ab" style="left:${K.cx+K.r+82}px;top:${K.cy+90}px;white-space:nowrap;${ENG(22)}">API price per 1M tokens, in / out</div>`,world);
 chatScr=plate(140,1440,640,430);
 el(`<div class="ab" style="left:30px;top:26px;display:flex;align-items:center;gap:12px;font:600 24px 'Bricolage Grotesque';color:${C.ink}"><span style="width:30px;height:30px">${ic('claudecode-color')}</span>Claude chat</div>`,chatScr);
 ['Rewrite this email to my landlord','Explain this error in plain words','Plan my week around the deadline'].forEach((m,i)=>bubbles.push(el(`<div class="ab" style="right:30px;top:${96+i*106}px;max-width:500px;padding:20px 26px;border-radius:22px 22px 6px 22px;background:#3a2f29;font:400 26px/1.35 'IBM Plex Sans Condensed';color:${C.ink}">${m}</div>`,chatScr)));
 wire=el(`<svg class="ab" style="left:0;top:0;overflow:visible" width="10" height="10"><path d="M780 1650 C 1020 1650, ${G2.cx} 1520, ${G2.cx} ${G2.cy+G2.r*1.16}" fill="none" stroke="#3a2f29" stroke-width="8" stroke-linecap="round"/></svg>`,world);
 pulse=el(`<i class="ab" style="left:0;top:0;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;background:#ffd2a8;box-shadow:0 0 24px 8px rgba(255,180,120,.6);opacity:0"></i>`,world);
 term=plate(840,1440,820,520,'background:#100d0c');
 termTxt=el(`<div class="ab" style="left:34px;top:30px;width:750px;font:500 28px/1.6 'IBM Plex Mono';color:#e8ddd2;white-space:pre"></div>`,term);
 useBars=el(`<div class="ab" style="left:34px;top:110px;width:790px;opacity:0">${[['main session, Opus',.72],['sub-agents',.2],['long CLAUDE.md',.08]].map(([n,f])=>`<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px"><span style="width:300px;font:500 24px 'IBM Plex Mono';color:#a8978a">${n}</span><span style="height:22px;width:${f*420}px;border-radius:4px;background:${C.hot}"></span></div>`).join('')}<div style="${ENG(18)}">illustration of the /usage breakdown</div></div>`,term);
 ctxBar=el(`<div class="ab" style="left:34px;top:440px;width:790px;height:44px;opacity:0"><span style="position:absolute;left:0;top:0;${ENG(20)}">context</span><span style="position:absolute;left:110px;top:6px;width:660px;height:20px;border-radius:4px;background:#241c18"></span><span class="f" style="position:absolute;left:110px;top:6px;height:20px;border-radius:4px;background:${C.cream}"></span></div>`,term);
}
// ---------- camera ----------
const L0=T2;const lt=(w,n=1)=>at(w,n,L0);
CAM=V?[[0,540,900,1.0],[T.meas-.2,540,1420,1.0],[T.task-.2,540,3240,1.0],[T.catch-.1,540,3700,1.3],[T.not-.3,540,3240,1.0],[T.bigger-.2,540,4760,1.03],[T.most-.3,540,5640,1.0],[T2,540,5700,1.08]]
 :[[0,700,350,1.42],[T.meas-.2,1880,350,1.42],[T.task-.2,930,960,1.0],[T.catch-.1,1300,950,1.4],[T.not-.3,930,960,1.0],[T.bigger-.2,2110,930,1.6],[T.most-.3,2110,1430,1.55]];
if(LONG)CAM.push([L0-.2,2160,1990,1.3],[lt('not')-.3,1000,1360,1.0],[lt('Tip')-.2,1250,1700,1.2],[lt('Sonnet')-.5,1720,1860,.9],[END-1.6,1300,1200,.72]);
// ---------- source line (changes with the beat) ----------
const S=src('');const SRC=[[0,'Measured: Wokey, 79 Claude Pro accounts, week of Oct 26 – Nov 2, 2026'],[T.task,'Own calculation: one medium bug fix on Opus 5.5 = $1.06 at API price'],[T.bigger,'claude.com/pricing (Nov 10, 2026): Ultra = 10× Pro usage per week'],[T.most,'Own calculation from measured and official numbers']];
if(LONG)SRC.push([L0+8,'Claude Code docs, “Manage costs” · claude.com/pricing']);
// ---------- render ----------
function R(t){camR(t);
 let s='';for(const [a,x] of SRC)if(t>=a)s=x;S.textContent=s;
 // 1. note into slot, drums roll
 const ni=spr(t,T.note-.3,10,.55),suck=eio(P(t,T.note+.9,T.note+1.6));
 if(V)note.style.transform=`translateY(${(1-ni)*-330+suck*330}px) scale(1.45)`;else note.style.transform=`translateX(${(1-ni)*-360+suck*340}px)`;
 const N=lerp(20,672,eo(P(t,T.six-.2,T.aiEnd+.2)));odo(Math.max(20,N));
 // 2. lamps + LCD
 lamps.forEach((l,i)=>{const on=i<79&&t>T.n79-.15+i*.009;l.style.background=on?'radial-gradient(circle at 40% 35%,#ffe0b0,#E8835E 60%,#a04a2c)':'#2a221e';l.style.boxShadow=on?'0 0 12px rgba(255,150,90,.6)':'inset 0 2px 3px rgba(0,0,0,.7)'});
 lcdV.textContent='$'+Math.round(155*eo(P(t,T.rough-.1,T.wk+.1)))+(t>T.wk-.2?' / wk':'');
 // 3. gauges
 const jit=Math.sin(t*23)*.003+Math.sin(t*41)*.002;
 let f1=.48*eio(P(t,T.eleven-.3,T.win+.2));const reset=spr(t,T.not+.15,9,.35);f1=f1*(1-reset);
 const newWeek=LONG?spr(t,L0+.1,8,.4):0;
 let f2=.93*eio(P(t,T.around-.2,T.wk2+.3));const slam=spr(t,T.cap-.25,16,.22);let v2=f2+(1-f2)*slam*(t>T.cap-.25?1:0);if(v2>1)v2=2-v2;
 let chatAdd=0;if(LONG)bubbles.forEach((b,i)=>{const a=[lt('also'),lt('chat',2),lt('eats')][i];chatAdd+=.11*eo(P(t,a+.9,a+1.4))});
 v2=lerp(v2,.12+chatAdd,newWeek);
 g1.set(f1+(f1>.01?jit:0));g2.set(v2+jit*(v2>.02?1:0));
 pips.forEach((pp,i)=>{const on=f1>=(i+1)/11*.48-.005;pp.style.background=on?C.cream:'#2c241f';pp.style.boxShadow=on?'0 0 10px rgba(217,194,166,.6)':'none'});
 cells.forEach((c,i)=>{const on=t>T.around-.2+(i+1)*(T.wk2+.3-T.around+.2)/13-.05&&newWeek<.5;c.style.background=on?C.hot:'#2a221e';c.style.boxShadow=on?'0 0 10px rgba(232,131,94,.5)':'inset 0 2px 3px rgba(0,0,0,.6)'});
 const lampOn=t>T.cap-.05&&newWeek<.5,pulseL=.75+.25*Math.sin(t*7);
 lampEl.style.background=lampOn?`radial-gradient(circle at 40% 35%,#ffd0c0,${C.lamp} 55%,#8a2010)`:'#3a1a14';lampEl.style.boxShadow=lampOn?`0 0 ${40*pulseL}px ${14*pulseL}px rgba(255,90,60,.55)`:'inset 0 3px 5px rgba(0,0,0,.7)';
 // dashboard dims around the red lamp while the weekly cap holds
 const dim=Math.min(P(t,T.stops-.2,T.stops+.4),1-P(t,T.bigger-.3,T.bigger+.3))*.5;[Op,Mp,SRp,LDp,g1.g].forEach(e=>e.style.filter=dim>0?`brightness(${1-dim})`:'');
 // 4. slide rule
 const pr=(e,r)=>{e.style.left=r.x(1)+'px';e.style.top=(r.y-8)+'px'};pr(proTab1,r1);pr(proTab2,r2);
 const uIn=spr(t,T.ultra-.25,12,.4),uDrop=spr(t,T.per-.15,13,.38),uSlide=spr(t,T.per+.15,10,.42);
 const ux=lerp(lerp(SR.w+80,r1.x(20),uIn),r2.x(10),uSlide),uy=lerp(r1.y-8,r2.y-8,uDrop);css(ultra,{left:ux+'px',top:uy+'px'});
 const gk=eo(P(t,T.ten-.1,T.ten+.5));css(gap,{left:r2.x(10)+'px',width:(r2.x(20)-r2.x(10))*gk+'px',opacity:gk});ghost.style.opacity=eo(P(t,T.per+.2,T.per+.7));
 // 5. ladder
 const lb=spr(t,T.most-.1,7,.55);const b0=rowsL[0].querySelector('.bar');b0.style.width=Math.max(0,bw*lb)+'px';rowsL[0].querySelector('.val').style.opacity=cl(P(t,T.most+.5,T.most+.9));
 if(!LONG&&t>T2-.3)rowsL.slice(1).forEach((r,i)=>{const q=.5+.5*Math.sin(t*4-i*.9);r.querySelectorAll('span')[1].style.color=`rgba(243,233,223,${.25+.35*q})`});
 // 6. long add-on
 if(LONG){const ka=lerp(55,0,spr(t,lt('Sonnet')-.1,11,.33));kPtr.style.transform=`rotate(${ka}deg)`;knob.style.boxShadow=`0 20px 40px rgba(0,0,0,.6),inset 0 0 0 14px #2d2420,0 0 ${60*cl(P(t,L0+1.5,L0+2.2))*(1-P(t,L0+3.2,L0+3.8))}px rgba(243,233,223,.25)`;
  const sw=P(t,lt('Sonnet')+.2,lt('Sonnet')+.6);[[flapA,'Opus   $4 / $20','Sonnet $2 / $10']].forEach(([f,a,b])=>{const i=f.querySelector('.in');i.textContent=sw<.5?a:b;i.style.transform=`rotateX(${sw<.5?sw*180:(sw-1)*180}deg)`});
  flapB.querySelector('.in').textContent='half the price';flapB.style.opacity=eo(P(t,lt('half')-.1,lt('half')+.3));
  bubbles.forEach((b,i)=>{const a=[lt('also'),lt('chat',2),lt('eats')][i],k=spr(t,a-.1,13,.45);b.style.transform=`translateY(${(1-k)*60}px)`;b.style.opacity=cl(P(t,a-.1,a+.15))});
  const path=wire.querySelector('path'),Lp=path.getTotalLength();let pv=-1;[lt('also'),lt('chat',2),lt('eats')].forEach(a=>{const k=P(t,a+.3,a+1.3);if(k>0&&k<1)pv=k});
  if(pv>=0){const q=path.getPointAtLength(Lp*eio(pv));css(pulse,{left:q.x+'px',top:q.y+'px',opacity:1})}else pulse.style.opacity=0;
  const typ=(s,a,cps=16)=>s.slice(0,Math.floor(cl((t-a)*cps,0,s.length)));
  const c1=lt('slash'),c2=lt('slash',2),c3=lt('Sonnet')-.6;let tx='';
  if(t<c2-.2)tx='> '+typ('/usage',c1-.1);else if(t<c3)tx='> '+typ('/clear',c2-.1);else tx='> '+typ('/model sonnet',c3,22);
  termTxt.textContent=tx+(Math.floor(t*2)%2?'▌':' ');
  useBars.style.opacity=cl(P(t,c1+.5,c1+.8))*(1-P(t,c2-.3,c2));
  ctxBar.style.opacity=cl(P(t,c1+.5,c1+.8));ctxBar.querySelector('.f').style.width=660*(.85-.83*eio(P(t,c2+.3,c2+.9)))+'px'}
}
END=Math.max(END,(LONG?L0:T2)+(LONG?17.3:4.2));
