// ===== INTRO (long video only): 8 tools, two scandals, S tier hidden (editorial) =====
setAccent('#E8C46A');
const T={eight:at('Eight'),tools:at('tools'),one1:at('One',1),bought:at('bought'),rocket:at('rocket'),company:at('company'),one2:at('One',2),switched:at('switched'),google:at('Google'),only:at('only'),stier:at('S',1,true),here:at('Here'),list:at('list')};
END=VOICE_END+1.0;
makeShots([['grid',0,T.one1-.25],['rocket',T.one1-.25,T.one2-.25],['off',T.one2-.25,T.only-.3],['board',T.only-.3,END+1]],{rocket:'push',off:'push',board:'dolly'});

// 1. eight tools: headline left, logo grid right (flat)
{const s=shots.grid;
 el(`<div class="bgword" style="left:${V?-20:700}px;top:${V?1200:260}px">2026</div>`,s.L0);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:250}px">AI coding tools · 2026 tier list</div>`,s.L1);
 const hl=headline(s.L1,['[[Eight]] AI','coding tools'],{x:V?60:120,y:V?210:300,fs:V?140:112,lh:1.08});
 const g=V?{x:90,y:760,c:3,d:310}:{x:880,y:190,c:4,d:236};
 const tiles=TOOLS.map((tl,i)=>{const e=el(`<div class="tile lit" style="left:0;top:0"><span class="lg">${ic(tl.logo)}</span>${tl.name}</div>`,s.L1);
  e.dataset.base=`translate(${g.x+(i%g.c)*g.d}px,${g.y+Math.floor(i/g.c)*(g.d+10)}px) scale(${V?1:.9})`;return e});
 const f1=el(`<div class="fg" style="left:${V?500:1300}px;top:${V?1800:960}px">$ claude --model local</div>`,s.L2);
 s.R=t=>{rise(kick,t,0,1e9,14);revealLines(hl,t,[T.eight-.2,T.tools-.4]);sweep(hl.querySelector('.mk'),t,T.eight+.1);
  tiles.forEach((e,i)=>rise(e,t,T.eight+.09*i,1e9,40,.6));s.cam.z=.03*eio(P(t,0,T.one1));f1.style.transform=`translateX(${-t*16}px)`}}

// 2. one got bought by a rocket company
{const s=shots.rocket;
 const bp=obj3d(s.L0,{x:V?260:1060,y:V?820:160,w:760,h:460,tf:'rotateY(-22deg) rotateX(5deg)',inner:paperHTML('MERGERS &amp; ACQUISITIONS','SpaceX Completes Its $60 Billion Cursor Acquisition','Bloomberg Law · Aug. 14, 2026','',760,460)});bp.style.filter='blur(4px) brightness(.45)';
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:250}px">One of them</div>`,s.L1);
 const hl=headline(s.L1,['Got bought','by a [[rocket]]','[[company]]'],{x:V?60:120,y:V?210:300,fs:V?130:110,lh:1.1});
 const cur=el(`<div class="tile lit" style="left:${V?120:900}px;top:${V?1180:330}px;width:300px;height:300px;font-size:30px"><span class="lg" style="width:130px;height:130px">${ic('cursor')}</span>Cursor</div>`,s.L1);
 const spx=el(`<div class="ab" style="left:${V?560:1360}px;top:${V?1200:340}px;width:300px;height:280px;color:var(--ink)">${ic('spacex')}</div>`,s.L1);
 const co=callout(s.L1);
 s.R=t=>{rise(kick,t,T.one1-.2,1e9,14);revealLines(hl,t,[T.bought-.3,T.rocket-.35,T.company-.3]);const m=hl.querySelectorAll('.mk');sweep(m[0],t,T.rocket);sweep(m[1],t,T.company);
  rise(cur,t,T.one1-.1,1e9,40,.6);rise(spx,t,T.rocket-.1,1e9,30,.6);fadeIn(bp,t,T.one1,1e9,.6);
  const a=rectOf(cur),b=rectOf(spx);co.set(t,T.rocket+.1,V?a.x+a.w:a.x+a.w,a.y+a.h/2,V?b.x+20:b.x+20,b.y+b.h/2);s.cam.z=.03*eio(P(t,T.one1,T.one2))}}

// 3. one got switched off by Google (CRT-style power-off of a flat terminal)
{const s=shots.off;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:250}px">Another one</div>`,s.L1);
 const hl=headline(s.L1,['Got [[switched off]]','by Google'],{x:V?60:120,y:V?210:300,fs:V?104:96,lh:1.1});
 const tw=V?960:780,th=V?560:470;
 const term=obj3d(s.L1,{x:V?60:1040,y:V?900:300,w:tw,h:th,tf:'none',inner:termHTML(tw,th,'gemini — terminal',`<span style="color:#8ab4f8;font-weight:700">  ✦ Gemini CLI</span>
<span style="color:#7ee787">&gt;</span> refactor the auth module
<span style="color:#8b949e">● reading 14 files…</span>
<span id="g0off" style="color:#ff8a70;font-weight:700">✖ Gemini CLI access has ended.</span>`,V?24:22)});
 const scr=term.querySelector('.win>div:last-child');const msg=term.querySelector('#g0off');
 const lg=el(`<div class="ab" style="left:${V?820:1700}px;top:${V?820:230}px;width:120px;height:120px">${ic('gemini-color')}</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">June 18 2026 · free, AI Pro and Ultra<br>SRC: The Register</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.one2-.2,1e9,14);revealLines(hl,t,[T.switched-.3,T.google-.3]);sweep(hl.querySelector('.mk'),t,T.switched+.1);
  rise(term,t,T.one2-.1,1e9,40,.6);rise(lg,t,T.one2,1e9,20);
  msg.style.opacity=t>T.switched?1:0;const off=eio(P(t,T.google,T.google+.45));scr.style.transform=`scaleY(${1-.97*off})`;scr.style.filter=`brightness(${1+2*off})`;scr.style.opacity=1-P(t,T.google+.4,T.google+.6);
  lg.style.filter=`grayscale(${off}) brightness(${1-.5*off})`;rise(cap,t,T.google,1e9,10);s.cam.z=.03*eio(P(t,T.one2,T.only))}}

// 4. the board: filled with blurred cards, S tier hidden
{const s=shots.board;
 const geo=V?{x:60,y:620,w:960,h:980}:{x:780,y:130,w:1040,h:800};const B=makeBoard(s.L1,geo);
 const counts={S:0,A:0,B:0,C:0,F:0};
 const cards=TOOLS.filter(tl=>tl.tier!=='S').map(tl=>{const p=B.slot(tl.tier,counts[tl.tier]++);return el(cardHTML(tl,`style="left:${p.x}px;top:${p.y}px;filter:blur(10px) brightness(.6)"`),B.board)});
 const s0=B.slot('S',0);const q=el(`<div class="card" style="left:${s0.x}px;top:${s0.y}px;border:2px solid var(--sig);font:700 96px var(--hd);color:var(--ink)">?</div>`,B.board);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:250}px">And only one</div>`,s.L1);
 const hl=headline(s.L1,['Made','[[S tier]]'],{x:V?60:120,y:V?210:300,fs:V?140:150,lh:1.06});
 const k2=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?545:640}px;font-size:${V?30:26}px;color:var(--ink)">→ The 2026 tier list</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.only-.25,1e9,14);revealLines(hl,t,[T.only,T.stier-.4]);sweep(hl.querySelector('.mk'),t,T.stier);
  cards.forEach((e,i)=>fadeIn(e,t,T.only-.2+.05*i,1e9,.4));rise(q,t,T.stier-.3,1e9,20,.5);q.style.boxShadow=`0 0 0 ${4+3*Math.sin(t*5)}px rgba(255,90,54,.25)`;
  rise(k2,t,T.here-.1,1e9,14);s.cam.z=.04*eio(P(t,T.only,END))}}
