// ===== BLOCK 02: Gemini CLI -> F  — style "SHUTDOWN" (§9.1): Google colours drain to grey, screens collapse, hard cuts =====
const TOOL=TOOLS[1];
theme({vars:{bg:'#0A0A0B',ink:'#EDEDED',mute:'#8D9096',sig:'#EA4335',acc:'#8AB4F8',colc:'rgba(255,255,255,.025)',lightc:'rgba(140,170,255,.07)',vigc:'rgba(0,0,0,.6)',stroke:'rgba(237,237,237,.06)',
  hd:"'Space Grotesk',Inter,sans-serif",hdw:700,hdtt:'none',hdls:'-.04em',kf:"'JetBrains Mono',monospace"},mk:'color'});
const T={google:at('Google'),switched:at('switched'),off:at('off'),best:at('best'),even:at('even'),ultra:at('Ultra'),y2025:at('twenty-five'),gemini:at('Gemini'),champ:at('champion'),thousand:at('thousand'),day:at('day'),open:at('open'),over:at('over'),stars:at('stars'),then:at('Then'),june:at('June'),google2:at('Google',2),cut:at('cut'),free2:at('free',3),pro:at('Pro',1,true),ultra2:at('Ultra',2),repl:at('replacement'),anti:at('Antigravity'),closed:at('closed'),users:at('users',2),quota:at('quota'),runs:at('runs'),couple:at('couple'),youcant:at('You'),use:at('use'),ftier:at('F',1,true)};
makeShots([['hook',0,T.y2025-.5],['repo',T.y2025-.5,T.then-.3],['cut',T.then-.3,T.repl-.35],['anti',T.repl-.35,T.youcant-.35],['verdict',T.youcant-.35,END+1]],{repo:'cut',cut:'cut',anti:'cut',verdict:'cut'});
const GC=['#4285F4','#EA4335','#FBBC04','#34A853'],GREY='#5D6066';
// four Google-colour bands; drain(d): 0 = full colour, 1 = grey
function bands(p,{x,y,w,h,dir='col'}){const e=el(`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;display:flex;flex-direction:${dir==='col'?'column':'row'}">${GC.map(c=>`<div style="flex:1"></div>`).join('')}</div>`,p);
 const b=[...e.children];return{e,drain(d){b.forEach((s,i)=>{const X=Math.max(0,100-115*d+i*4);s.style.background=`linear-gradient(${dir==='col'?90:180}deg,${GC[i]} 0%,${GC[i]} ${X}%,#8a8a8a ${X+30}%,#3a3a3a ${X+70}%)`})}}}
const scan=p=>el(`<div class="ab" style="inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(0,0,0,.3) 0 2px,transparent 2px 4px)"></div>`,p);
const greyWord=(e,t,a)=>{const k=P(t,a,a+.4);e.style.color=k>0?`rgb(${Math.round(237-(237-93)*k)},${Math.round(237-(237-96)*k)},${Math.round(237-(237-102)*k)})`:''};

// ===== 1. HOOK: a live Gemini CLI screen drains to grey and collapses into a line =====
{const s=shots.hook;
 const mon=V?{x:60,y:840,w:960,h:600}:{x:920,y:190,w:880,h:620};
 const box=el(`<div class="ab" style="left:${mon.x}px;top:${mon.y}px;width:${mon.w}px;height:${mon.h}px;border-radius:18px;background:#111214;border:1px solid #26272b;overflow:hidden;box-shadow:-40px 50px 100px rgba(0,0,0,.6)"></div>`,s.L1);
 const scr=el(`<div class="ab" style="inset:0;transform-origin:50% 50%"></div>`,box);
 const B=bands(scr,{x:0,y:0,w:mon.w,h:mon.h*.34});
 const term=el(`<div class="ab" style="left:30px;top:${mon.h*.34+26}px;right:30px;font:${V?23:21}px/1.8 'JetBrains Mono';color:#d4d4d4;white-space:pre"><span style="color:#8ab4f8;font-weight:700">✦ Gemini CLI</span>  <span style="color:#666">free tier</span>
<span style="color:#7ee787">&gt;</span> add tests to the auth module
<span style="color:#8b949e">● reading 14 files…</span>
<span class="g2e" style="color:#ff8a70;font-weight:700">✖ Gemini CLI access has ended for this account.</span></div>`,scr);
 const err=term.querySelector('.g2e');scan(box);
 const line=el(`<div class="ab" style="left:${mon.w*.06}px;width:${mon.w*.88}px;top:${mon.h/2-2}px;height:4px;background:#fff;box-shadow:0 0 18px 6px rgba(255,255,255,.55),0 0 60px 20px rgba(180,200,255,.25);opacity:0;transform-origin:50% 50%"></div>`,box);
 const lg=el(`<div class="ab" style="left:${V?880:1720}px;top:${V?740:100}px;width:90px;height:90px">${ic('gemini-color')}</div>`,s.L1);
 const ix=indexHeader(s.L1,TOOL,'02',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?220:230}px;font-size:${V?26:22}px;color:var(--mute)">Google's best free coding agent</div>`,s.L1);
 const hl=headline(s.L1,['Switched','off.'],{x:V?52:112,y:V?270:280,fs:V?190:170,lh:.95});
 const offw=hl.querySelectorAll('.ln>span')[1];
 const sub=el(`<div class="ab h1" style="left:${V?60:120}px;top:${V?660:640}px;font-size:${V?54:46}px;line-height:1.15;font-weight:500">Even for people paying for <span class="u2" style="position:relative;color:var(--ink)">Ultra.</span></div>`,s.L1);
 const stk=el('<div class="strike" style="height:5px"></div>',s.L1);
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,T.best-.3,1e9,14);revealLines(hl,t,[T.switched-.3,T.off-.25]);greyWord(offw,t,T.off+.2);
  rise(sub,t,T.even-.15,1e9,16);const u=sub.querySelector('.u2'),r=rectOf(u),k=eo(P(t,T.ultra+.1,T.ultra+.4));css(stk,{left:(r.x-4)+'px',top:(r.y+r.h*.55)+'px',width:((r.w+8)*k)+'px',opacity:t>T.ultra+.1?1:0});
  box.style.opacity=cl(P(t,0,.4));B.drain(eio(P(t,T.switched,T.ultra+.1)));err.style.opacity=t>T.switched+.1?1:0;
  lg.style.filter=`grayscale(${eio(P(t,T.switched,T.ultra))}) brightness(${1-.4*P(t,T.switched,T.ultra)})`;rise(lg,t,.1,1e9,16);
  const c=eio(P(t,T.ultra+.15,T.ultra+.45)),z=eio(P(t,T.ultra+.45,T.ultra+.8));scr.style.transform=`scaleY(${1-.985*c})`;scr.style.filter=`brightness(${1+2.5*c})`;scr.style.opacity=1-P(t,T.ultra+.35,T.ultra+.5);
  line.style.opacity=c>0?(1-P(t,T.ultra+.7,T.ultra+.9)):0;line.style.transform=`scaleX(${1-.985*z})`;
  s.cam.z=.025*eio(P(t,0,T.y2025))}}

// ===== 2. 2025 FLASHBACK: colour comes back — the free champion =====
{const s=shots.repo;
 el(`<div class="bgword" style="left:${V?-30:600}px;top:${V?1250:300}px">2025</div>`,s.L0);
 const Bv=bands(s.L1,{x:0,y:0,w:14,h:H,dir:'col'});
 const bw=V?980:1000,bh=V?520:470;
 const page=`<div style="height:6px;display:flex">${GC.map(c=>`<i style="flex:1;background:${c}"></i>`).join('')}</div><div style="padding:24px 34px;font:18px/1.6 var(--ui);color:#e6edf3">
   <div style="display:flex;align-items:center;gap:12px;font:600 26px var(--ui)"><span style="width:30px;height:30px;color:#e6edf3">${ic('github')}</span>google-gemini / <b>gemini-cli</b><span style="margin-left:10px;font:600 14px var(--ui);border:1px solid #30363d;border-radius:20px;padding:2px 10px;color:#8b949e">Public</span></div>
   <div style="display:flex;gap:12px;margin-top:20px">
    <div class="g2star" style="border:1px solid #30363d;border-radius:8px;padding:8px 16px;font:600 20px var(--ui)">★ Star <span class="g2sn" style="background:#30363d;border-radius:12px;padding:0 12px;margin-left:8px">0</span></div>
    <div class="g2lic" style="border:1px solid #30363d;border-radius:8px;padding:8px 16px;font:600 20px var(--ui)">Apache-2.0 · open source</div></div>
   <div style="margin-top:24px;border:1px solid #30363d;border-radius:10px;padding:20px 24px">
    <div style="font:700 30px var(--ui)">Gemini CLI</div>
    <div style="margin-top:8px;color:#8b949e">An open-source AI agent that brings Gemini directly into your terminal.</div>
    <div class="g2free" style="margin-top:16px;display:inline-block;font:700 22px var(--ui);padding:6px 12px;border-radius:8px;border:1px solid #30363d">Free tier: 1,000 requests / day</div></div></div>`;
 const win=obj3d(s.L1,{x:V?50:840,y:V?820:220,w:bw,h:bh,tf:'none',inner:browserHTML(bw,bh,{logo:'github',title:'google-gemini/gemini-cli',url:'github.com/google-gemini/gemini-cli',page,pst:'background:#0d1117'})});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">2025 · Gemini CLI was</div>`,s.L1);
 const hl=headline(s.L1,['The free','champion.'],{x:V?52:112,y:V?190:250,fs:V?150:130,lh:1.0});
 const ch=hl.querySelectorAll('.ln>span')[1];
 const facts=[['1,000 requests / day',T.thousand],['Open source',T.open],['~107k GitHub stars',T.stars]].map(([n,a],i)=>({e:el(`<div class="ab kick" style="left:${V?60:124}px;top:${(V?520:560)+i*46}px;font-size:${V?28:24}px;color:var(--ink);text-transform:none">→ ${n}</div>`,s.L1),a}));
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: github.com/google-gemini/gemini-cli</div>`,s.L1);
 const co=callout(s.L1);
 const sn=win.querySelector('.g2sn'),boxes={free:win.querySelector('.g2free'),lic:win.querySelector('.g2lic'),star:win.querySelector('.g2star')};
 s.R=t=>{Bv.drain(0);Bv.e.style.transform=`scaleY(${e5(P(t,T.y2025-.5,T.y2025+.3))})`;Bv.e.style.transformOrigin='50% 0';
  rise(kick,t,T.y2025-.4,1e9,14);revealLines(hl,t,[T.gemini-.2,T.champ-.4]);
  const g=P(t,T.champ,T.champ+.5);ch.style.background=`linear-gradient(90deg,${GC.join(',')})`;ch.style.webkitBackgroundClip='text';ch.style.color=g>0?`rgba(237,237,237,${1-g})`:'';
  facts.forEach(({e,a})=>rise(e,t,a-.2,1e9,14));rise(cap,t,T.gemini,1e9,10);rise(win,t,T.y2025-.45,1e9,30,.5);
  const n=Math.round(107*eio(P(t,T.over,T.stars+.3)));sn.textContent=n?n+'k':'0';
  const on=(e,a,b)=>{e.style.boxShadow=t>a&&t<b?'0 0 0 3px #8AB4F8':'none'};on(boxes.free,T.thousand-.1,T.open-.2);on(boxes.lic,T.open-.1,T.over-.1);on(boxes.star,T.over-.1,1e9);
  const i=t<T.open-.2?0:t<T.over-.1?1:2,tgt=[boxes.free,boxes.lic,boxes.star][i],r=rectOf(tgt),q=rectOf(facts[i].e);
  co.set(t,T.thousand+.1,q.x+q.w+12,q.y+q.h/2,V?r.x+r.w/2:r.x,V?r.y:r.y+r.h/2);
  const k=eio(P(t,T.y2025,T.then));s.cam.z=.05*k;s.cam.x=V?0:-30*k}}

// ===== 3. JUNE 2026: cut off — plans struck in red, the story drains to grey =====
{const s=shots.cut;
 const art=obj3d(s.L0,{x:V?200:1060,y:V?1000:250,w:780,h:300,tf:'rotateY(-22deg) rotateX(5deg)',inner:paperHTML('THE REGISTER · AI + ML','Bye bye Gemini CLI: Google nudges devs toward Antigravity','May 20, 2026','',780,300)});
 const Bh=bands(s.L1,{x:V?60:120,y:V?600:590,w:V?960:700,h:V?24:20,dir:'col'});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">June 18, 2026</div>`,s.L1);
 const hl=headline(s.L1,['Google','cut it off.'],{x:V?52:112,y:V?190:250,fs:V?150:140,lh:1.0});
 const cw=hl.querySelectorAll('.ln>span')[1];
 const plans=[['FREE',T.free2],['AI PRO',T.pro],['ULTRA',T.ultra2]].map(([n,a],i)=>{const e=el(`<div class="ab" style="left:${V?60+i*300:120+i*240}px;top:${V?660:650}px;padding:12px 20px;border:1.5px solid #3a3c41;border-radius:10px;font:600 ${V?38:32}px 'JetBrains Mono';color:var(--ink);background:#111214">${n}</div>`,s.L1);
  const k=el('<div class="strike" style="height:5px"></div>',s.L1);return{e,k,a}});
 const sub=el(`<div class="ab kick" style="left:${V?60:124}px;top:${V?780:760}px;font-size:${V?28:24}px;color:var(--ink);text-transform:none">Paying subscribers too.</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: The Register, May 20 2026</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.june-.3,1e9,14);revealLines(hl,t,[T.google2-.25,T.cut-.3]);greyWord(cw,t,T.cut+.25);fadeIn(art,t,T.then,1e9,.4);
  art.style.filter=`grayscale(${eio(P(t,T.cut,T.ultra2+.5))}) brightness(${1-.35*P(t,T.cut,T.ultra2+.5)})`;Bh.drain(eio(P(t,T.cut,T.ultra2+.4)));Bh.e.style.opacity=cl(P(t,T.then,T.then+.3));
  plans.forEach(({e,k,a},i)=>{rise(e,t,T.cut+.25+.1*i,1e9,20,.4);const g=P(t,a,a+.3);e.style.color=`rgba(237,237,237,${1-.6*g})`;
   const r=rectOf(e),w=eo(P(t,a,a+.3));css(k,{left:(r.x-8)+'px',top:(r.y+r.h/2-2)+'px',width:((r.w+16)*w)+'px',opacity:t>a?1:0})});
  rise(sub,t,T.pro-.2,1e9,12);rise(cap,t,T.then+.2,1e9,10);s.cam.z=.03*eio(P(t,T.then,T.repl))}}

// ===== 4. ANTIGRAVITY: closed source, quota gone =====
{const s=shots.anti;
 el(`<div class="bgword" style="left:${V?-40:640}px;top:${V?1250:330}px">QUOTA</div>`,s.L0);
 const tw=V?960:860,th=V?470:440;
 const term=obj3d(s.L1,{x:V?60:960,y:V?900:300,w:tw,h:th,tf:'none',inner:termHTML(tw,th,'agy — ~/auth-api',`<span style="color:#7ee787">$</span> agy "add tests to auth"
<span style="color:#8b949e">● reading 14 files…</span>
<span style="color:#8b949e">● planning…</span>
<span class="g2q" style="color:#ff8a70;font-weight:700">✖ Weekly quota exceeded.
  Resets in 6 days.</span>`,V?24:22)});
 const q=term.querySelector('.g2q');scan(term);
 const tile=el(`<div class="tile lit" style="left:${V?800:1600}px;top:${V?720:130}px;width:200px;height:200px;font-size:20px"><span class="lg" style="width:84px;height:84px">${ic('antigravity-color')}</span>Antigravity CLI</div>`,s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">The replacement: Antigravity CLI</div>`,s.L1);
 const hl=headline(s.L1,['[[Closed]]','source.'],{x:V?52:112,y:V?190:250,fs:V?150:140,lh:1.0});
 const quote=el(`<div class="ab h1" style="left:${V?60:120}px;top:${V?540:560}px;width:${V?960:720}px;font-size:${V?54:46}px;line-height:1.2;font-weight:500">“Runs out after a <span class="mk">couple of requests.</span>”</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">User reports · SRC: The Register, May 20 2026</div>`,s.L1);
 const co=callout(s.L1);
 s.R=t=>{rise(kick,t,T.repl-.2,1e9,14);rise(tile,t,T.anti-.2,1e9,30,.5);tile.style.filter=`grayscale(${.85*P(t,T.closed,T.closed+.4)})`;
  revealLines(hl,t,[T.closed-.3,T.closed-.1]);sweep(hl.querySelector('.mk'),t,T.closed+.1);
  rise(term,t,T.anti,1e9,30,.5);q.style.opacity=cl(P(t,T.runs-.1,T.runs+.1));rise(quote,t,T.quota-.3,1e9,16);sweep(quote.querySelector('.mk'),t,T.couple);rise(cap,t,T.users,1e9,10);
  const a=rectOf(quote.querySelector('.mk')),b=rectOf(q);co.set(t,T.couple+.3,V?a.x+a.w/2:a.x+a.w+8,V?a.y+a.h:a.y+a.h/2,V?b.x+60:b.x-6,V?b.y:b.y+b.h/2);
  s.cam.z=.03*eio(P(t,T.repl,T.youcant))}}

// ===== 5. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.youcant,tierAt:T.ftier,line:["You can't rank","what you [[can't use.]]"]});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.use-.2)}}
