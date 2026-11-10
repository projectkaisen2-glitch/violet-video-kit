// ===== INTRO (long video only): 8 tools in their 8 styles, two scandals (each in its block's style), S tier hidden =====
setAccent('#E8C46A');
const T={eight:at('Eight'),tools:at('tools'),one1:at('One',1),bought:at('bought'),rocket:at('rocket'),company:at('company'),one2:at('One',2),switched:at('switched'),google:at('Google'),only:at('only'),stier:at('S',1,true),here:at('Here'),list:at('list')};
END=VOICE_END+1.0;
makeShots([['grid',0,T.one1-.25],['rocket',T.one1-.25,T.one2-.25],['off',T.one2-.25,T.only-.3],['board',T.only-.3,END+1]],{rocket:'push',off:'cut',board:'cut'});

// 1. eight tools: headline left, logo grid right (flat)
{const s=shots.grid;
 el(`<div class="bgword" style="left:${V?-20:700}px;top:${V?1200:260}px">2026</div>`,s.L0);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:250}px">AI coding tools · 2026 tier list</div>`,s.L1);
 const hl=headline(s.L1,['[[Eight]] AI','coding tools'],{x:V?60:120,y:V?210:300,fs:V?140:112,lh:1.08});
 const g=V?{x:60,y:700,c:2,w:470,h:250,dx:490,dy:270}:{x:860,y:150,c:4,w:236,h:236,dx:252,dy:256};
 const tiles=TOOLS.map((tl,i)=>{const e=el(`<div class="ab" style="left:0;top:0;width:${g.w}px;height:${g.h}px">${swatchHTML(tl,g.w,g.h)}</div>`,s.L1);
  e.dataset.base=`translate(${g.x+(i%g.c)*g.dx}px,${g.y+Math.floor(i/g.c)*g.dy}px)`;return e});
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

// 3. one got switched off by Google — shown in Gemini's own "shutdown" style
{const s=shots.off;
 el(`<div class="ab" style="inset:-12%;background:#0A0A0B"></div>`,s.L0);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:250}px;font-family:'JetBrains Mono';color:#8D9096">Another one</div>`,s.L1);
 const hl=headline(s.L1,['Got switched','off by Google.'],{x:V?52:112,y:V?210:300,fs:V?120:110,lh:1.0});hl.style.cssText+=";font-family:'Space Grotesk';text-transform:none;letter-spacing:-.04em;color:#EDEDED";
 const offw=el('<span>off</span>');const l2=hl.querySelectorAll('.ln>span')[1];l2.innerHTML='<span class="o3">off</span> by Google.';const o3=l2.querySelector('.o3');
 const mon=V?{x:60,y:900,w:960,h:520}:{x:1040,y:300,w:780,h:470};
 const box=el(`<div class="ab" style="left:${mon.x}px;top:${mon.y}px;width:${mon.w}px;height:${mon.h}px;border-radius:18px;background:#111214;border:1px solid #26272b;overflow:hidden;box-shadow:-40px 50px 100px rgba(0,0,0,.6)"></div>`,s.L1);
 const scr=el(`<div class="ab" style="inset:0;transform-origin:50% 50%;display:flex;flex-direction:column">${['#4285F4','#EA4335','#FBBC04','#34A853'].map(c=>`<i style="flex:1;background:${c}"></i>`).join('')}</div>`,s.L1);box.appendChild(scr);
 el(`<div class="ab" style="inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.3) 0 2px,transparent 2px 4px)"></div>`,box);
 const line=el(`<div class="ab" style="left:${mon.w*.06}px;width:${mon.w*.88}px;top:${mon.h/2-2}px;height:4px;background:#fff;box-shadow:0 0 18px 6px rgba(255,255,255,.55);opacity:0"></div>`,box);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#6d7076">June 18 2026 · free, AI Pro and Ultra<br>SRC: The Register</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.one2-.2,1e9,14);revealLines(hl,t,[T.switched-.3,T.google-.4]);const g=P(t,T.switched+.2,T.switched+.6);o3.style.color=g>0?`rgb(${237-144*g},${237-141*g},${237-135*g})`:'';
  rise(box,t,T.one2-.1,1e9,30,.5);const d=eio(P(t,T.switched,T.google));[...scr.children].forEach(e=>e.style.filter=`saturate(${1-d})`);
  const c=eio(P(t,T.google+.1,T.google+.4)),z=eio(P(t,T.google+.4,T.google+.7));scr.style.transform=`scaleY(${1-.985*c})`;scr.style.opacity=1-P(t,T.google+.3,T.google+.45);
  line.style.opacity=c>0?1-P(t,T.google+.65,T.google+.85):0;line.style.transform=`scaleX(${1-.985*z})`;rise(cap,t,T.google,1e9,10);s.cam.z=.03*eio(P(t,T.one2,T.only))}}

// 4. the board: filled with blurred cards, S tier hidden
{const s=shots.board;
 const geo=V?{x:60,y:620,w:960,h:980}:{x:780,y:130,w:1040,h:800};const B=makeBoard(s.L1,geo);
 const counts={S:0,A:0,B:0,C:0,F:0};
 const cards=TOOLS.filter(tl=>tl.tier!=='S').map(tl=>{const p=B.slot(tl.tier,counts[tl.tier]++);return el(cardHTML(tl,`style="left:${p.x}px;top:${p.y}px;filter:blur(10px) brightness(.6)"`),B.board)});
 const s0=B.slot('S',0);const q=el(`<div class="card" style="left:${s0.x}px;top:${s0.y}px;border:2px solid var(--sig);font:700 96px var(--hd);color:var(--ink)">?</div>`,B.board);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:250}px">And only one</div>`,s.L1);
 const hl=headline(s.L1,['Made','[[S tier]]'],{x:V?60:120,y:V?210:300,fs:V?140:150,lh:1.06});
 const k2=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?545:640}px;font-size:${V?30:26}px;color:var(--ink)">→ The 2026 tier list</div>`,s.L1);
 const k3=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?600:690}px;font-size:${V?22:19}px;color:var(--mute);text-transform:none">How I rank: usefulness · price · stability · trust</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.only-.25,1e9,14);revealLines(hl,t,[T.only,T.stier-.4]);sweep(hl.querySelector('.mk'),t,T.stier);
  cards.forEach((e,i)=>fadeIn(e,t,T.only-.2+.05*i,1e9,.4));rise(q,t,T.stier-.3,1e9,20,.5);q.style.boxShadow=`0 0 0 ${4+3*Math.sin(t*5)}px rgba(255,90,54,.25)`;
  rise(k2,t,T.here-.1,1e9,14);rise(k3,t,T.here+.2,1e9,10);s.cam.z=.04*eio(P(t,T.only,END))}}
