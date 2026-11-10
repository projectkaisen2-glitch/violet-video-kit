// ===== EP04 shared scene runtime =====
// URL: ?fmt=h|v  (h = long video 1920x1080 @4/3, v = Short 1080x1920)  &mode=long|short (board shows earlier verdicts in long mode)
const Q=new URLSearchParams(location.search);const FMT=Q.get('fmt')||'h';const V=FMT==='v';const MODE=Q.get('mode')||(V?'short':'long');
const W=V?1080:1920,H=V?1920:1080;
const root=document.getElementById('root');root.style.width=W+'px';root.style.height=H+'px';
const ic=k=>SVG[k]||'';
const LEAD=0.35;
// CUE = [[time, word], ...] from Kokoro word timings, shifted by LEAD
const norm=w=>w.replace(/[^\w$-]/g,'').toLowerCase();
const at=(word,n=1,exact=false)=>{let k=0;for(const [t,w] of CUE){const a=norm(w),b=word.toLowerCase();if(exact?a===b:a.startsWith(b)){k++;if(k===n)return t}}console.warn('cue?',word,n);return 0};
const VOICE_END=CUE.length?CUE[CUE.length-1][0]:0;
let END=VOICE_END+1.8;
const cl=(x,a=0,b=1)=>Math.max(a,Math.min(b,x)),P=(t,a,b)=>cl((t-a)/(b-a));
const eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,back=x=>{const c=1.7;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)};
function el(h,p=root){const d=document.createElement('div');d.innerHTML=h.trim();const e=d.firstChild;p.appendChild(e);return e}
const css=(e,o)=>{for(const k in o)e.style[k]=o[k]};
function rectOf(e){const r=e.getBoundingClientRect(),R=root.getBoundingClientRect(),s=R.width/W;return{x:(r.left-R.left)/s,y:(r.top-R.top)/s,w:r.width/s,h:r.height/s}}
const shown=(e,v)=>{if(e.dataset.d===undefined)e.dataset.d=e.style.display||'';e.style.display=v>0?e.dataset.d:'none'};
function pop(e,t,a,b=1e9,from=0.6){const k=back(P(t,a,a+.45)),v=Math.min(cl(P(t,a,a+.2)),1-P(t,b,b+.3));e.style.opacity=v;shown(e,v);e.style.transform=(e.dataset.base||'')+` scale(${from+(1-from)*k})`}
function slide(e,t,a,b=1e9,dx=0,dy=60){const k=eo(P(t,a,a+.5)),v=Math.min(cl(P(t,a,a+.25)),1-P(t,b,b+.3));e.style.opacity=v;shown(e,v);e.style.transform=(e.dataset.base||'')+` translate(${(1-k)*dx}px,${(1-k)*dy}px)`}
function setAccent(c,ink='#0B0B0D'){document.documentElement.style.setProperty('--acc',c);document.documentElement.style.setProperty('--accInk',ink)}
// ---------- studio background ----------
const bg=el('<div class="ab" style="inset:0"></div>');
const studio=el('<div class="studio"></div>',bg),grid=el('<div class="grid"></div>',bg);
const glow=el(`<div class="glow" style="width:${W*.8}px;height:${W*.8}px;left:${W*.1}px;top:${H*.1}px"></div>`,bg);
const sweep=el('<div class="sweep"></div>',bg);
// ---------- tools on the board (order = order of blocks) ----------
const TOOLS=[
 {id:'01',logo:'cursor',name:'Cursor',price:'$8–$200',tier:'B'},
 {id:'02',logo:'gemini-color',name:'Gemini CLI',price:'paid API only',tier:'F'},
 {id:'03',logo:'githubcopilot',name:'Copilot',price:'$10–$100',tier:'B'},
 {id:'04',logo:'windsurf',name:'Windsurf',price:'$20–$200',tier:'C'},
 {id:'05',logo:'lovable-color',name:'Lovable',price:'$25–$50',tier:'C'},
 {id:'06',logo:'codex-color',name:'Codex',price:'$20–$500',tier:'A'},
 {id:'07',logo:'cline',name:'Cline',price:'$0 + model',tier:'A'},
 {id:'08',logo:'claudecode-color',name:'Claude Code',price:'$20–$200',tier:'S'}];
const TIERS=[['S','var(--S)'],['A','var(--A)'],['B','var(--B)'],['C','var(--C)'],['F','var(--F)']];
const TCOL={S:'255,107,107',A:'255,170,92',B:'255,217,92',C:'168,232,106',F:'111,178,255'};
const cardHTML=(tl,extra='')=>`<div class="card" ${extra}><span class="lg">${ic(tl.logo)}</span><span class="nm">${tl.name}</span><span class="pr">${tl.price}</span></div>`;
// board inside a parent; returns {rows, slotXY(tier,i)}
function makeBoard(p,{bx,by,bw,bh}){
 const board=el(`<div class="board" style="left:${bx}px;top:${by}px;width:${bw}px;height:${bh}px"></div>`,p);
 el(`<div class="btitle" style="left:30px;top:22px">AI CODING TOOLS <b>2026</b></div>`,board);
 const rh=(bh-110-4*14)/5,rows={};
 TIERS.forEach(([k,c],i)=>{const y=90+i*(rh+14);const r=el(`<div class="row" style="left:24px;top:${y}px;width:${bw-48}px;height:${rh}px"><div class="lab" style="width:130px;background:${c}">${k}</div><div class="flash"></div></div>`,board);
  rows[k]={el:r,y:by+y+(rh-150)/2,x0:bx+24+150,n:0};for(let g=0;g<(V?4:6);g++)el(`<div class="ghost" style="left:${150+g*170}px;top:${(rh-150)/2}px"></div>`,r)});
 return {board,rows,slot:(k,i)=>({x:rows[k].x0+i*170,y:rows[k].y})};
}
// verdict shot: board, earlier cards (long mode), this card flies in at the tier word
function verdictShot(shot,tool,{start,tierAt,line,lineFs}){
 const p=shot.in;const geo=V?{bx:40,by:260,bw:1000,bh:1260}:{bx:300,by:70,bw:1320,bh:820};
 const B=makeBoard(p,geo);const me=TOOLS.findIndex(x=>x.id===tool.id);
 const counts={S:0,A:0,B:0,C:0,F:0};
 if(MODE==='long')TOOLS.slice(0,me).forEach(tl=>{const s=B.slot(tl.tier,counts[tl.tier]++);el(cardHTML(tl,`style="left:${s.x}px;top:${s.y}px"`),p)});
 const dst=B.slot(tool.tier,counts[tool.tier]);
 const card=el(cardHTML(tool),p);
 const vd=line?el(`<div class="PL" style="left:${V?50:330}px;top:${V?1590:930}px;font-size:${lineFs||(V?64:70)}px">${line}</div>`,p):null;
 shot.R=t=>{const fly=eio(P(t,tierAt-.55,tierAt+.4));const sx=W/2-75,sy=V?-260:-200;const k=back(P(t,start,start+.5));
  css(card,{left:(sx+(dst.x-sx)*fly)+'px',top:(sy+(dst.y-sy)*fly)+'px',transform:`scale(${(1.6-.6*fly)*(.5+.5*k)}) rotate(${(1-fly)*8}deg)`,opacity:cl(P(t,start-.1,start+.2))});
  const f=P(t,tierAt+.35,tierAt+.5)*(1-P(t,tierAt+.5,tierAt+1.3));B.rows[tool.tier].el.querySelector('.flash').style.background=`rgba(${TCOL[tool.tier]},${.6*f})`;
  if(vd)pop(vd,t,start-.1,1e9,.5);p.style.transform=`scale(${1+.03*eio(P(t,start,END))})`};
 return B;
}
// ---------- shot system ----------
let SH=[],TR={},shots={};
function makeShots(list,tr){SH=list;TR=tr||{};for(const [k] of SH){const s=el(`<div class="shot"><div class="in"></div><div class="in"></div></div>`);shots[k]={el:s,in:s.firstChild,ov:s.lastChild,R:()=>{}}}return shots}
const XF=.38;
function R(t){
 css(studio,{transform:`scale(${1.03+.015*Math.sin(t*.2)}) translate(${Math.sin(t*.13)*-14}px,${Math.cos(t*.11)*8}px)`});
 sweep.style.transform=`translateX(${((t*90)%(W*2))-W}px)`;glow.style.transform=`translate(${Math.sin(t*.3)*60}px,${Math.cos(t*.25)*40}px)`;
 SH.forEach(([k,a,b],i)=>{const s=shots[k];const on=t>=a&&t<b+XF;s.el.style.display=on?'block':'none';if(!on)return;
  const ek=i===0?1:eio(P(t,a,a+XF)),tr=TR[k];let tf='';
  if(tr==='slideL')tf=`translateX(${(1-ek)*W*.6}px)`;else if(tr==='zoom')tf=`scale(${.82+.18*ek})`;else if(tr==='pushUp')tf=`translateY(${(1-ek)*H*.5}px)`;
  const out=P(t,b,b+XF);s.el.style.opacity=Math.min(i===0?1:cl(ek*1.6),1-out);s.el.style.filter=out>0?`blur(${out*8}px)`:'';
  s.el.style.transform=tf+(out>0?` scale(${1+.05*out})`:'');s.el.style.zIndex=i;s.R(t)});
}

// shrink any plate that would run off the right edge (keeps a 30px margin)
function fitPlates(){document.querySelectorAll('.PL').forEach(e=>{if(e.style.position==='relative')return;const sh=e.closest('.shot');const d0=sh?sh.style.display:null;if(sh)sh.style.display='block';
 const dd=e.style.display;e.style.display='block';const left=parseFloat(e.style.left)||0,max=W-30-left;let fs=parseFloat(e.style.fontSize)||60,n=0;
 while(e.offsetWidth>max&&n++<40){fs*=.95;e.style.fontSize=fs+'px'}e.style.display=dd;if(sh)sh.style.display=d0})}
