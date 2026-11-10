// ===== BLOCK 02: Gemini CLI -> F  (editorial, mixed tilt) =====
const TOOL=TOOLS[1];setAccent('#6C9BD8');
const T={google:at('Google'),switched:at('switched'),best:at('best'),even:at('even'),ultra:at('Ultra'),y2025:at('twenty-five'),gemini:at('Gemini'),champ:at('champion'),thousand:at('thousand'),day:at('day'),open:at('open'),over:at('over'),stars:at('stars'),then:at('Then'),june:at('June'),google2:at('Google',2),cut:at('cut'),free2:at('free',3),pro:at('Pro',1,true),ultra2:at('Ultra',2),repl:at('replacement'),anti:at('Antigravity'),closed:at('closed'),users:at('users',2),quota:at('quota'),runs:at('runs'),couple:at('couple'),youcant:at('You'),use:at('use'),ftier:at('F',1,true)};
makeShots([['hook',0,T.y2025-.5],['repo',T.y2025-.5,T.then-.3],['cut',T.then-.3,T.repl-.35],['anti',T.repl-.35,T.youcant-.35],['verdict',T.youcant-.35,END+1]],{repo:'push',cut:'rise',anti:'push',verdict:'dolly'});

// ===== 1. HOOK: a Gemini CLI terminal powers off =====
{const s=shots.hook;
 el(`<div class="bgword" style="left:${V?-30:700}px;top:${V?1180:250}px">OFF</div>`,s.L0);
 const tw=V?960:860,th=V?600:560;
 const term=obj3d(s.L1,{x:V?60:960,y:V?880:220,w:tw,h:th,tf:'none',inner:termHTML(tw,th,'gemini — ~/auth-api',`<span style="color:#8ab4f8;font-weight:700">  ✦ Gemini CLI</span>  <span style="color:#666">free tier</span>

<span style="color:#7ee787">&gt;</span> add tests to the auth module
<span style="color:#8b949e">● reading 14 files…</span>
<span style="color:#8b949e">● writing auth.test.ts…</span>
<span id="g2off" style="color:#ff8a70;font-weight:700">✖ Gemini CLI access has ended for this account.</span>`,V?23:21)});
 const scr=term.querySelector('.win>div:last-child'),msg=term.querySelector('#g2off');
 const ix=indexHeader(s.L1,TOOL,'02',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?220:230}px;font-size:${V?26:22}px;color:#C9C4BB">Google's best free coding agent</div>`,s.L1);
 const hl=headline(s.L1,['Switched','[[off]]'],{x:V?60:120,y:V?280:290,fs:V?150:150,lh:1.04});
 const sub=el(`<div class="ab h1" style="left:${V?60:120}px;top:${V?620:640}px;font-size:${V?64:54}px;line-height:1.1">Even for <span class="mk">paying Ultra</span> users</div>`,s.L1);
 const lg=el(`<div class="ab" style="left:${V?860:1720}px;top:${V?800:150}px;width:110px;height:110px">${ic('gemini-color')}</div>`,s.L1);
 const f1=el(`<div class="fg" style="left:${V?500:1300}px;top:${V?1820:900}px">npx @google/gemini-cli</div>`,s.L2);
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,T.best-.3,1e9,14);
  revealLines(hl,t,[T.switched-.3,T.switched]);sweep(hl.querySelector('.mk'),t,T.switched+.25);
  rise(sub,t,T.even-.15,1e9,16);sweep(sub.querySelector('.mk'),t,T.ultra-.1);
  rise(term,t,0,1e9,40,.7);rise(lg,t,.2,1e9,20);msg.style.opacity=t>T.switched?1:0;
  const off=eio(P(t,T.ultra+.15,T.ultra+.6));scr.style.transformOrigin='50% 50%';scr.style.transform=`scaleY(${1-.98*off})`;scr.style.filter=`brightness(${1+2.5*off})`;scr.style.opacity=1-P(t,T.ultra+.55,T.ultra+.75);
  lg.style.filter=`grayscale(${off}) brightness(${1-.5*off})`;s.cam.z=.03*eio(P(t,0,T.y2025));f1.style.transform=`translateX(${-t*14}px)`}}

// ===== 2. REPO: 2025, the free champion =====
{const s=shots.repo;
 el(`<div class="bgword" style="left:${V?-30:620}px;top:${V?1250:300}px">2025</div>`,s.L0);
 const bw=V?980:1000,bh=V?520:470;
 const page=`<div style="padding:26px 34px;font:18px/1.6 var(--ui);color:#e6edf3">
   <div style="display:flex;align-items:center;gap:12px;font:600 26px var(--ui)"><span style="width:30px;height:30px;color:#e6edf3">${ic('github')}</span>google-gemini / <b>gemini-cli</b><span style="margin-left:10px;font:600 14px var(--ui);border:1px solid #30363d;border-radius:20px;padding:2px 10px;color:#8b949e">Public</span></div>
   <div style="display:flex;gap:12px;margin-top:20px">
    <div class="g2star" style="border:1px solid #30363d;border-radius:8px;padding:8px 16px;font:600 20px var(--ui)">★ Star <span class="g2sn" style="background:#30363d;border-radius:12px;padding:0 12px;margin-left:8px">0</span></div>
    <div class="g2lic" style="border:1px solid #30363d;border-radius:8px;padding:8px 16px;font:600 20px var(--ui)">Apache-2.0 · open source</div></div>
   <div style="margin-top:24px;border:1px solid #30363d;border-radius:10px;padding:20px 24px">
    <div style="font:700 30px var(--ui)">Gemini CLI</div>
    <div style="margin-top:8px;color:#8b949e">An open-source AI agent that brings Gemini directly into your terminal.</div>
    <div class="g2free" style="margin-top:16px;display:inline-block;font:700 22px var(--ui);padding:6px 12px;border-radius:8px;border:1px solid #30363d">Free tier: 1,000 requests / day</div></div></div>`;
 const win=obj3d(s.L1,{x:V?50:820,y:V?820:200,w:bw,h:bh,tf:'none',inner:browserHTML(bw,bh,{logo:'github',title:'google-gemini/gemini-cli',url:'github.com/google-gemini/gemini-cli',page,pst:'background:#0d1117'})});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">In 2025, Gemini CLI was</div>`,s.L1);
 const hl=headline(s.L1,['The free','[[champion]]'],{x:V?60:120,y:V?190:250,fs:V?140:120,lh:1.06});
 const facts=[['1,000 requests / day',T.thousand],['Open source',T.open],['~107k GitHub stars',T.stars]].map(([n,a],i)=>({e:el(`<div class="ab cap" style="left:${V?60:124}px;top:${(V?520:560)+i*44}px;font-size:${V?28:24}px;color:var(--ink)">→ ${n}</div>`,s.L1),a}));
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: github.com/google-gemini/gemini-cli</div>`,s.L1);
 const co=callout(s.L1);
 const sn=win.querySelector('.g2sn'),boxes={free:win.querySelector('.g2free'),lic:win.querySelector('.g2lic'),star:win.querySelector('.g2star')};
 s.R=t=>{rise(kick,t,T.y2025-.3,1e9,14);revealLines(hl,t,[T.gemini-.2,T.champ-.4]);sweep(hl.querySelector('.mk'),t,T.champ);
  facts.forEach(({e,a})=>rise(e,t,a-.2,1e9,14));rise(cap,t,T.gemini,1e9,10);
  const n=Math.round(107*eio(P(t,T.over,T.stars+.3)));sn.textContent=n?n+'k':'0';
  const on=(e,a,b)=>{e.style.boxShadow=t>a&&t<b?'0 0 0 3px var(--acc)':'none'};on(boxes.free,T.thousand-.1,T.open-.2);on(boxes.lic,T.open-.1,T.over-.1);on(boxes.star,T.over-.1,1e9);
  const tgt=t<T.open-.2?boxes.free:t<T.over-.1?boxes.lic:boxes.star,r=rectOf(tgt),src=t<T.open-.2?facts[0].e:t<T.over-.1?facts[1].e:facts[2].e,q=rectOf(src);
  co.set(t,T.thousand+.1,q.x+q.w+12,q.y+q.h/2,V?r.x+r.w/2:r.x,V?r.y:r.y+r.h/2);
  const k=eio(P(t,T.y2025,T.then));s.cam.z=.05*k;s.cam.x=V?0:-30*k}}

// ===== 3. CUT: June 2026, three plans struck off; the news story tilted =====
{const s=shots.cut;
 const art=obj3d(s.L0,{x:V?200:1060,y:V?1000:250,w:780,h:300,tf:'rotateY(-22deg) rotateX(5deg)',inner:paperHTML('THE REGISTER · AI + ML','Bye bye Gemini CLI: Google nudges devs toward Antigravity','May 20, 2026','',780,300)});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">June 18, 2026</div>`,s.L1);
 const hl=headline(s.L1,['Google','[[cut it off]]'],{x:V?60:120,y:V?190:250,fs:V?140:130,lh:1.06});
 const plans=[['Free',T.free2],['AI Pro',T.pro],['Ultra',T.ultra2]].map(([n,a],i)=>{const e=el(`<div class="ab" style="left:${V?60+i*320:120+i*250}px;top:${V?560:580}px;padding:14px 22px;border:1.5px solid rgba(236,232,225,.35);border-radius:10px;font:700 ${V?46:40}px var(--hd);text-transform:uppercase;color:var(--ink);background:#141518">${n}</div>`,s.L1);
  const k=el('<div class="strike"></div>',s.L1);return{e,k,a}});
 const sub=el(`<div class="ab cap" style="left:${V?60:124}px;top:${V?680:690}px;font-size:${V?26:22}px;color:var(--ink)">Paying subscribers too</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: The Register, May 20 2026</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.june-.3,1e9,14);revealLines(hl,t,[T.google2-.2,T.cut-.3]);sweep(hl.querySelector('.mk'),t,T.cut);fadeIn(art,t,T.then,1e9,.6);
  art.style.transform=`rotateY(${-22-12*(1-e5(P(t,T.then,T.then+1)))}deg) rotateX(5deg)`;
  plans.forEach(({e,k,a},i)=>{rise(e,t,T.cut+.25+.12*i,1e9,24);const g=P(t,a,a+.3);e.style.color=`rgba(236,232,225,${1-.55*g})`;
   const r=rectOf(e),w=eo(P(t,a,a+.35));css(k,{left:(r.x-8)+'px',top:(r.y+r.h/2-3)+'px',width:((r.w+16)*w)+'px',opacity:t>a?1:0})});
  rise(sub,t,T.pro-.2,1e9,12);rise(cap,t,T.then+.2,1e9,10);s.cam.z=.03*eio(P(t,T.then,T.repl))}}

// ===== 4. ANTIGRAVITY: closed source + quota error =====
{const s=shots.anti;
 el(`<div class="bgword" style="left:${V?-40:640}px;top:${V?1250:330}px">QUOTA</div>`,s.L0);
 const tw=V?960:860,th=V?470:440;
 const term=obj3d(s.L1,{x:V?60:960,y:V?900:300,w:tw,h:th,tf:'none',inner:termHTML(tw,th,'agy — ~/auth-api',`<span style="color:#7ee787">$</span> agy "add tests to auth"
<span style="color:#8b949e">● reading 14 files…</span>
<span style="color:#8b949e">● planning…</span>
<span id="g2q" style="color:#ff8a70;font-weight:700">✖ Weekly quota exceeded.
  Resets in 6 days.</span>`,V?24:22)});
 const q=term.querySelector('#g2q');
 const tile=el(`<div class="tile lit" style="left:${V?800:1600}px;top:${V?720:130}px;width:200px;height:200px;font-size:20px"><span class="lg" style="width:84px;height:84px">${ic('antigravity-color')}</span>Antigravity CLI</div>`,s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">The replacement: Antigravity CLI</div>`,s.L1);
 const hl=headline(s.L1,['[[Closed]]','source'],{x:V?60:120,y:V?190:250,fs:V?140:130,lh:1.06});
 const quote=el(`<div class="ab" style="left:${V?60:120}px;top:${V?540:560}px;width:${V?960:720}px;font:italic 500 ${V?46:40}px/1.3 var(--serif);color:var(--ink)">“Runs out after a <span class="mk" style="font-style:italic">couple of requests</span>”</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">User reports · SRC: The Register, May 20 2026</div>`,s.L1);
 const co=callout(s.L1);
 s.R=t=>{rise(kick,t,T.repl-.2,1e9,14);rise(tile,t,T.anti-.2,1e9,30,.6);revealLines(hl,t,[T.closed-.3,T.closed-.1]);sweep(hl.querySelector('.mk'),t,T.closed+.1);
  rise(term,t,T.anti,1e9,40,.6);q.style.opacity=cl(P(t,T.runs-.1,T.runs+.15));rise(quote,t,T.quota-.3,1e9,16);sweep(quote.querySelector('.mk'),t,T.couple);rise(cap,t,T.users,1e9,10);
  const a=rectOf(quote.querySelector('.mk')),b=rectOf(q);co.set(t,T.couple+.3,V?a.x+a.w/2:a.x+a.w+8,V?a.y+a.h:a.y+a.h/2,V?b.x+60:b.x-6,V?b.y:b.y+b.h/2);
  s.cam.z=.03*eio(P(t,T.repl,T.youcant))}}

// ===== 5. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.youcant,tierAt:T.ftier,line:["You can't rank","[[what you can't use]]"]});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.use-.2)}}
