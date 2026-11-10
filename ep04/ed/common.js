// ===== EP04 editorial runtime =====
const Q=new URLSearchParams(location.search);const FMT=Q.get('fmt')||'h';const V=FMT==='v';const MODE=Q.get('mode')||(V?'short':'long');
const W=V?1080:1920,H=V?1920:1080;
const root=document.getElementById('root');root.style.width=W+'px';root.style.height=H+'px';
const ic=k=>SVG[k]||'';
const norm=w=>w.replace(/[^\w$-]/g,'').toLowerCase();
const at=(word,n=1,exact=false)=>{let k=0;for(const [t,w] of CUE){const a=norm(w),b=word.toLowerCase();if(exact?a===b:a.startsWith(b)){k++;if(k===n)return t}}console.warn('cue?',word,n);return 0};
const VOICE_END=CUE.length?CUE[CUE.length-1][0]:0;let END=VOICE_END+1.8;
const cl=(x,a=0,b=1)=>Math.max(a,Math.min(b,x)),P=(t,a,b)=>cl((t-a)/(b-a));
const eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,e5=x=>1-Math.pow(1-x,5);
function el(h,p=root){const d=document.createElement('div');d.innerHTML=h.trim();const e=d.firstChild;p.appendChild(e);return e}
const css=(e,o)=>{for(const k in o)e.style[k]=o[k]};
function rectOf(e){const r=e.getBoundingClientRect(),R=root.getBoundingClientRect(),s=R.width/W;return{x:(r.left-R.left)/s,y:(r.top-R.top)/s,w:r.width/s,h:r.height/s}}
const shown=(e,v)=>{if(e.dataset.d===undefined)e.dataset.d=e.style.display||'';e.style.display=v>0?e.dataset.d:'none'};
// fade+rise (soft, editorial — no bouncy pops)
function rise(e,t,a,b=1e9,dy=30,dur=.6){const k=e5(P(t,a,a+dur)),v=Math.min(cl(P(t,a,a+dur*.6)),1-P(t,b,b+.3));e.style.opacity=v;shown(e,v);e.style.transform=(e.dataset.base||'')+` translateY(${(1-k)*dy}px)`}
function fadeIn(e,t,a,b=1e9,dur=.5){const v=Math.min(cl(P(t,a,a+dur)),1-P(t,b,b+.3));e.style.opacity=v;shown(e,v)}
// headline: lines with [[marked]] words; lines reveal from a mask, markers sweep
function headline(p,lines,{x,y,fs,lh=1.04,cls='h1',w}){const e=el(`<div class="${cls}" style="left:${x}px;top:${y}px;font-size:${fs}px;line-height:${lh};${w?`width:${w}px`:''};position:absolute"></div>`,p);
 e.innerHTML=lines.map(l=>`<span class="ln"><span>${l.replace(/\[\[(.+?)\]\]/g,'<span class="mk">$1</span>')}</span></span>`).join('');return e}
function revealLines(e,t,times,b=1e9){[...e.querySelectorAll('.ln>span')].forEach((s,i)=>{const a=times[Math.min(i,times.length-1)];const k=e5(P(t,a,a+.55));s.style.transform=`translateY(${(1-k)*105}%)`});const v=1-P(t,b,b+.3);e.style.opacity=v;shown(e,v)}
// marker modes per style (theme.mk): 'block' (default, filled marker), 'under' (thick underline), 'color' (word changes colour)
function sweep(mk,t,a,dur=.35){const k=eo(P(t,a,a+dur)),m=document.documentElement.dataset.mk||'block';
 if(m==='under'){mk.style.background='linear-gradient(var(--sig),var(--sig)) no-repeat 0 96%';mk.style.backgroundSize=`${k*100}% 12%`;return}
 if(m==='color'){mk.style.background='none';mk.style.color=k>.5?'var(--sig)':'var(--ink)';mk.style.opacity=1-.0*k;return}
 mk.style.backgroundSize=`${k*100}% 86%`;mk.style.color=k>.6?'var(--mkink)':'var(--ink)'}
// per-block style (§9.1 П48): CSS variables + marker mode; skeleton (index header, source line, board) stays
function theme(o){const r=document.documentElement;for(const k in o.vars||{})r.style.setProperty('--'+k,o.vars[k]);if(o.mk)r.dataset.mk=o.mk;if(o.vars&&o.vars.bg){document.body.style.background=o.vars.bg;root.style.background=o.vars.bg}window.LIGHT=!!o.light}
function drawLine(e,t,a,dur=.45){e.style.transform=(e.dataset.base||'')+` scaleX(${eo(P(t,a,a+dur))})`;e.style.opacity=t>a?1:0}
// callout line between two points (root coords)
function callout(p){const l=el('<div class="callout"></div>',p),d=el('<div class="dot"></div>',p);return{set(t,a,x1,y1,x2,y2){const k=eo(P(t,a,a+.5)),L=Math.hypot(x2-x1,y2-y1),ang=Math.atan2(y2-y1,x2-x1);
 css(l,{left:x1+'px',top:y1+'px',width:L*k+'px',transform:`rotate(${ang}rad)`,opacity:t>a?1:0});css(d,{left:x2+'px',top:y2+'px',opacity:k>.95?1:0})}}}
function setAccent(c){document.documentElement.style.setProperty('--acc',c)}
// ---------- backdrop (shared by all shots; parallax by depth) ----------
const back=el('<div class="ab" style="inset:0"></div>');
const cols=el('<div class="cols"></div>',back);
const light=el(`<div class="light" style="width:${W*.9}px;height:${H*1.1}px;left:${W*.45}px;top:${-H*.3}px"></div>`,back);
const vig=el('<div class="vig"></div>');vig.style.zIndex=40;const grain=el('<div class="grain"></div>');
// ---------- tools & tiers ----------
const TOOLS=[
 {id:'01',logo:'cursor',name:'Cursor',price:'$8–$200',tier:'B'},
 {id:'02',logo:'gemini-color',name:'Gemini CLI',price:'paid API only',tier:'F'},
 {id:'03',logo:'githubcopilot',name:'Copilot',price:'$10–$100',tier:'B'},
 {id:'04',logo:'windsurf',name:'Windsurf',price:'$20–$200',tier:'C'},
 {id:'05',logo:'lovable-color',name:'Lovable',price:'$25–$50',tier:'C'},
 {id:'06',logo:'codex-color',name:'Codex',price:'$20–$500',tier:'A'},
 {id:'07',logo:'cline',name:'Cline',price:'$0 + model',tier:'A'},
 {id:'08',logo:'claudecode-color',name:'Claude Code',price:'$20–$200',tier:'S'}];
const TIERS=['S','A','B','C','F'];const TC={S:'var(--S)',A:'var(--A)',B:'var(--B)',C:'var(--C)',F:'var(--F)'};
const TRGB={S:'229,83,75',A:'232,146,74',B:'232,196,106',C:'141,191,106',F:'108,155,216'};
const cardHTML=(tl,extra='')=>`<div class="card" ${extra}><span class="lg">${ic(tl.logo)}</span><span class="nm">${tl.name}</span><span class="pr">${tl.price}</span></div>`;
// index header "B  01 / 08 — CURSOR" + rule
function indexHeader(p,tool,n,{x,y,w}){const e=el(`<div class="ab idx" style="left:${x}px;top:${y}px"><b style="background:${TC[tool.tier]}">${tool.tier}</b><span class="kick">${n} / 08 — ${tool.name}</span></div>`,p);
 const r=el(`<div class="rule" style="left:${x}px;top:${y+56}px;width:${w}px"></div>`,p);return{e,r}}
// ---------- shot system with parallax layers ----------
// every shot: .shot > .L0 (far, 0.35) .L1 (main, 1) .L2 (near, 1.8) ; camera drift moves layers by depth
let SH=[],TR={},shots={};
function makeShots(list,tr){SH=list;TR=tr||{};for(const [k] of SH){const s=el(`<div class="ab" style="inset:0;display:none"><div class="ab" style="inset:0"></div><div class="ab" style="inset:0"></div><div class="ab" style="inset:0"></div></div>`);
 shots[k]={el:s,L0:s.children[0],L1:s.children[1],L2:s.children[2],R:()=>{},cam:{x:0,y:0,z:0}}}return shots}
const XF=.42;
function R(t){
 const dx=Math.sin(t*.16)*16,dy=Math.cos(t*.13)*8;
 cols.style.transform=`translate(${dx*.35}px,0)`;light.style.transform=`translate(${Math.sin(t*.2)*40}px,${Math.cos(t*.17)*20}px)`;
 SH.forEach(([k,a,b],i)=>{const s=shots[k];const nx=SH[i+1],hard=nx&&TR[nx[0]]==='cut';const on=t>=a&&t<b+(hard?0:XF);s.el.style.display=on?'block':'none';if(!on)return;
  const tr=TR[k]||'push',ek=i===0||tr==='cut'?1:e5(P(t,a,a+XF*1.4)),out=hard?0:P(t,b,b+XF);
  // 'cut': hard cut with a short flicker (style "shutdown")
  s.el.style.filter=tr==='cut'&&i>0?`brightness(${1+1.6*(1-P(t,a,a+.1))*(Math.floor(t*60)%2?1:.35)})`:'';
  // transitions: push (slide from right with depth), rise (from below), dolly (scale from deep)
  let enter='';if(tr==='push')enter=`translateX(${(1-ek)*W*.35}px)`;else if(tr==='rise')enter=`translateY(${(1-ek)*H*.25}px)`;else if(tr==='dolly')enter=`scale(${.86+.14*ek})`;
  s.el.style.transform=enter+(out>0?` translateX(${-out*W*.12}px)`:'');s.el.style.opacity=Math.min(i===0?1:cl(ek*1.5),1-out);s.el.style.zIndex=i;
  s.R(t);const c=s.cam;
  [[s.L0,.35],[s.L1,1],[s.L2,1.8]].forEach(([L,d])=>{L.style.transform=`translate(${(dx+c.x)*d}px,${(dy+c.y)*d}px) scale(${1+c.z*d})`;L.style.transformOrigin='50% 50%'})});
}
// ---------- shared building blocks ----------
// a lit object on its own perspective stage; tf:'none' = flat (mixed style: tilt only papers, price fans, the board)
function obj3d(p,{x,y,w,h,tf,origin='0 50%',inner}){const st=el(`<div class="stage" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"></div>`,p);
 const o=el(`<div class="obj lit" style="left:0;top:0;width:${w}px;height:${h}px;border-radius:12px;transform:${tf};transform-origin:${origin}">${inner}</div>`,st);return o}
const paperHTML=(kk,h3,meta,pp,w,h,extra='')=>`<div class="paper" style="position:absolute;left:0;top:0;width:${w}px;height:${h}px;padding:34px 40px;${extra}"><div class="kk">${kk}</div><h3>${h3}</h3><div class="meta">${meta}</div>${pp?`<p>${pp}</p>`:''}</div>`;
const capPos=V?{x:60,y:1700}:{x:120,y:880};
// browser window (flat real UI): title, url, page html, page style
const browserHTML=(w,h,{logo,title,url,page,pst=''})=>`<div class="win chrome" style="left:0;top:0;width:${w}px;height:${h}px"><div class="tb">${logo?`<span class="lg">${ic(logo)}</span>`:''}${title}</div><div class="url"><span>${url}</span></div><div class="page" style="${pst}">${page}</div></div>`;
// terminal window (flat)
const termHTML=(w,h,title,body,fs=20)=>`<div class="win" style="left:0;top:0;width:${w}px;height:${h}px;background:#0c0c0f"><div class="tb">${title}</div><div style="padding:22px 26px;font:${fs}px/1.7 var(--mono);color:#d4d4d4;white-space:pre">${body}</div></div>`;
// tier board inside a tilted, lit object
function makeBoard(p,geo){const st=el(`<div class="stage" style="left:${geo.x}px;top:${geo.y}px;width:${geo.w}px;height:${geo.h}px"></div>`,p);
 const ob=el(`<div class="obj lit" style="left:0;top:0;width:${geo.w}px;height:${geo.h}px;border-radius:14px;transform:${V?'rotateX(8deg)':'rotateY(-14deg) rotateX(4deg)'};transform-origin:${V?'50% 0':'0 50%'}"></div>`,st);
 const board=el(`<div class="board" style="left:0;top:0;width:${geo.w}px;height:${geo.h}px"></div>`,ob);
 const rh=(geo.h-40-4*12)/5,rows={};
 TIERS.forEach((k,i)=>{const y=20+i*(rh+12);const r=el(`<div class="row" style="left:20px;top:${y}px;width:${geo.w-40}px;height:${rh}px"><div class="lab" style="width:120px;background:${TC[k]};font-size:${V?64:72}px">${k}</div><div class="flash"></div></div>`,board);
  rows[k]={el:r,y:y+(rh-150)/2,x0:20+136};for(let g=0;g<(V?4:5);g++)el(`<div class="ghost" style="left:${136+g*164}px;top:${(rh-150)/2}px"></div>`,r)});
 return{ob,board,rows,slot:(k,i)=>({x:rows[k].x0+i*164,y:rows[k].y})}}
// verdict shot (board in 3D on the right, huge tier letter on the left)
function verdictShot(shot,tool,{start,tierAt,line}){const lines=Array.isArray(line)?line:[line];
 const p=shot.L1,me=TOOLS.findIndex(x=>x.id===tool.id);
 const geo=V?{x:60,y:620,w:960,h:980}:{x:780,y:130,w:1040,h:800};const B=makeBoard(p,geo),ob=B.ob,board=B.board,rows=B.rows;
 const counts={S:0,A:0,B:0,C:0,F:0};
 if(MODE==='long')TOOLS.slice(0,me).forEach(tl=>{const r=rows[tl.tier];el(cardHTML(tl,`style="left:${r.x0+counts[tl.tier]++*164}px;top:${r.y}px"`),board)});
 const dst={x:rows[tool.tier].x0+counts[tool.tier]*164,y:rows[tool.tier].y};
 const card=el(cardHTML(tool),board);
 const L=shot.L1;const big=el(`<div class="ab big" style="left:${V?60:120}px;top:${V?190:170}px;font-size:${V?300:420}px;color:${window.LIGHT?'var(--ink)':TC[tool.tier]};${window.LIGHT?`border-bottom:${V?18:24}px solid ${TC[tool.tier]}`:''}">${tool.tier}</div>`,L);
 const lab=el(`<div class="ab kick" style="left:${V?70:130}px;top:${V?150:140}px">VERDICT — ${tool.name}</div>`,L);
 const ln=headline(L,lines,{x:V?60:120,y:V?470:560,fs:V?60:58,w:V?960:620});
 shot.R=t=>{const fly=eio(P(t,tierAt-.6,tierAt+.35));const k=e5(P(t,start,start+.6));
  css(card,{left:(dst.x+(1-fly)*(V?0:-560))+'px',top:(dst.y+(1-fly)*(V?-520:-120))+'px',transform:`scale(${1.5-.5*fly}) rotate(${(1-fly)*-6}deg)`,opacity:cl(P(t,start,start+.3))});
  const f=P(t,tierAt+.3,tierAt+.45)*(1-P(t,tierAt+.45,tierAt+1.3));rows[tool.tier].el.querySelector('.flash').style.background=`rgba(${TRGB[tool.tier]},${.55*f})`;
  rise(lab,t,start-.1,1e9,16);big.style.opacity=cl(P(t,tierAt-.2,tierAt+.2));big.style.transform=`scale(${1.25-.25*e5(P(t,tierAt-.2,tierAt+.5))})`;big.style.transformOrigin='0 100%';
  revealLines(ln,t,[start]);ob.style.opacity=k;shot.cam.z=.02*eio(P(t,start,END))};
}
