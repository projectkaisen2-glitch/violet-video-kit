// ===== BLOCK 03: GitHub Copilot -> B  (editorial, mixed tilt) =====
const TOOL=TOOLS[2];setAccent('#E8C46A');
const T={gh:at('GitHub'),token:at('token'),one:at('one'),proj:at('projected'),from:at('from'),n39:at('thirty-nine'),n847:at('eight'),since:at('Since'),june:at('June'),every:at('every'),credits1:at('Credits'),cent:at('cent'),billed:at('billed'),tokens:at('tokens'),pro:at('Pro',1,true),fifteen:at('fifteen'),proplus:at('Plus'),max:at('Max'),auto:at('Autocomplete'),free:at('free'),chat:at('Chat'),eat:at('eat'),upside:at('upside'),works:at('works'),every2:at('everywhere'),vs:at('V',1,true),jb:at('JetBrains'),ecl:at('Eclipse'),xc:at('Xcode'),ghi:at('GitHub',2),cheapest:at('cheapest'),cheap2:at('Cheapest',2),least:at('least'),btier:at('B',1,true)};
makeShots([['hook',0,T.since-.35],['log',T.since-.35,T.pro-.35],['plans',T.pro-.35,T.auto-.35],['split',T.auto-.35,T.upside-.25],['ides',T.upside-.25,T.cheap2-.35],['verdict',T.cheap2-.35,END+1]],{log:'push',plans:'rise',split:'push',ides:'push',verdict:'dolly'});

// ===== 1. HOOK: $39 -> $847, two bars =====
{const s=shots.hook;
 el(`<div class="bgword" style="left:${V?-30:620}px;top:${V?1240:300}px">$847</div>`,s.L0);
 const ix=indexHeader(s.L1,TOOL,'03',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?220:230}px;font-size:${V?26:22}px;color:#C9C4BB">GitHub Copilot switched to</div>`,s.L1);
 const hl=headline(s.L1,['[[Token]]','billing'],{x:V?60:120,y:V?280:290,fs:V?150:140,lh:1.04});
 const note=el(`<div class="ab cap" style="left:${V?60:124}px;top:${V?620:620}px;font-size:${V?26:22}px;color:var(--ink)">One user's projected bill:</div>`,s.L1);
 // chart: baseline + two bars (flat)
 const ch=V?{x:120,y:1640,h:880,bw:300,gap:180}:{x:1040,y:880,h:640,bw:250,gap:150};
 const base=el(`<div class="rule" style="left:${ch.x-40}px;top:${ch.y}px;width:${2*ch.bw+ch.gap+80}px;background:rgba(236,232,225,.5)"></div>`,s.L1);
 const mk=(i,val,label,col)=>{const x=ch.x+i*(ch.bw+ch.gap);const b=el(`<div class="ab" style="left:${x}px;top:${ch.y}px;width:${ch.bw}px;height:0;background:${col};border-radius:6px 6px 0 0;box-shadow:0 30px 60px rgba(0,0,0,.5)"></div>`,s.L1);
  const n=el(`<div class="ab big" style="left:${x-6}px;top:0;font-size:${V?110:96}px">${val}</div>`,s.L1);const l=el(`<div class="ab cap" style="left:${x}px;top:${ch.y+16}px">${label}</div>`,s.L1);return{b,n,l}};
 const b1=mk(0,'$39','Before','#3a3b40'),b2=mk(1,'$847','Projected · tokens','var(--sig)');
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1760:880}px">One Reddit user's projection<br>SRC: The New Stack, Jun 2026</div>`,s.L1);
 const f1=el(`<div class="fg" style="left:${V?500:1300}px;top:${V?1860:980}px">gh copilot --usage</div>`,s.L2);
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,T.gh-.2,1e9,14);revealLines(hl,t,[T.token-.35,T.token-.15]);sweep(hl.querySelector('.mk'),t,T.token+.1);
  rise(note,t,T.proj-.2,1e9,14);drawLine(base,t,T.proj-.1,.5);
  const h1=ch.h*39/847*eo(P(t,T.n39-.2,T.n39+.4)),h2=ch.h*eio(P(t,T.n847-.1,T.n847+.9));
  [[b1,h1,T.n39-.2],[b2,h2,T.n847-.1]].forEach(([o,h,a])=>{css(o.b,{height:h+'px',top:(ch.y-h)+'px',opacity:t>a?1:0});css(o.n,{top:(ch.y-h-(V?118:104))+'px'});fadeIn(o.n,t,a+.1,1e9,.3);fadeIn(o.l,t,a,1e9,.3)});
  rise(cap,t,T.n847+.3,1e9,10);s.cam.z=.03*eio(P(t,0,T.since));f1.style.transform=`translateX(${-t*14}px)`}}

// ===== 2. CHANGELOG: AI Credits (flat browser) =====
{const s=shots.log;
 const bw=V?980:1000,bh=V?520:470;
 const page=`<div style="padding:34px 44px;font:20px/1.6 var(--ui);color:#1f2328">
   <div style="font:600 15px var(--ui);color:#59636e">JUNE 1, 2026 · COPILOT</div>
   <div style="font:700 ${V?40:38}px/1.15 var(--ui);margin:12px 0 18px">Updates to GitHub Copilot billing and plans</div>
   <div>All Copilot plans now use <b class="aic" style="padding:0 4px;border-radius:5px">GitHub AI Credits</b>, billed by tokens.</div></div>`;
 const win=obj3d(s.L1,{x:V?50:840,y:V?820:220,w:bw,h:bh,tf:'none',inner:browserHTML(bw,bh,{logo:'github',title:'GitHub Changelog',url:'github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans',page,pst:'background:#fff'})});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Since June 1, every plan runs on</div>`,s.L1);
 const hl=headline(s.L1,['[[AI Credits]]'],{x:V?60:120,y:V?190:250,fs:V?140:120,lh:1.06});
 const eq=el(`<div class="ab big" style="left:${V?60:120}px;top:${V?370:410}px;font-size:${V?130:120}px">1 = 1¢</div>`,s.L1);
 const sub=el(`<div class="ab cap" style="left:${V?60:124}px;top:${V?510:540}px;font-size:${V?28:24}px;color:var(--ink)">→ Billed by tokens</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: GitHub changelog, Jun 1 2026</div>`,s.L1);
 const co=callout(s.L1);const aic=win.querySelector('.aic');
 s.R=t=>{rise(kick,t,T.since-.2,1e9,14);revealLines(hl,t,[T.credits1-.5]);sweep(hl.querySelector('.mk'),t,T.credits1);rise(eq,t,T.cent-.3,1e9,30,.6);rise(sub,t,T.billed-.2,1e9,14);rise(cap,t,T.since,1e9,10);
  const k=P(t,T.credits1-.1,T.credits1+.4);aic.style.background=`linear-gradient(90deg,rgba(255,90,54,.85) ${k*100}%,transparent ${k*100}%)`;
  const r=rectOf(hl.querySelector('.mk')),a=rectOf(aic);co.set(t,T.credits1+.3,V?r.x+r.w/2:r.x+r.w+10,V?r.y+r.h:r.y+r.h/2,V?a.x+a.w/2:a.x,V?a.y:a.y+a.h/2);
  const kk=eio(P(t,T.since,T.pro));s.cam.z=.05*kk;s.cam.x=V?0:-30*kk}}

// ===== 3. PLANS: fanned cards in 3D, focus moves with the voice =====
{const s=shots.plans;
 const pl=[['Pro','$10','1,500 credits',T.pro],['Pro+','$39','7,000 credits',T.proplus],['Max','$100','20,000 credits',T.max]];
 const fan=el(`<div class="stage" style="left:${V?60:950}px;top:${V?820:250}px;width:${V?960:880}px;height:${V?820:520}px"></div>`,s.L1);
 const cards=pl.map(([n,pr,c])=>el(`<div class="pc lit" style="width:${V?300:290}px;height:${V?360:350}px"><span class="lgc">${ic('githubcopilot')}</span><b>${n}${n==='Max'?' <span style="font:700 12px var(--mono);background:var(--sig);color:#111;padding:2px 6px;border-radius:4px;vertical-align:middle">NEW</span>':''}</b><div class="p">${pr}<small>/mo</small></div><li style="font:600 19px var(--ui);color:#fff">${c}</li><li>AI Credits · 1¢ each</li></div>`,fan));
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Copilot plans · Nov 2026</div>`,s.L1);
 const hl=headline(s.L1,['Three plans,','[[one meter]]'],{x:V?60:120,y:V?190:250,fs:V?130:104,lh:1.08});hl.style.zIndex=5;
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: docs.github.com, Nov 2026</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.pro-.2,1e9,14);revealLines(hl,t,[T.pro-.1,T.max-.3]);sweep(hl.querySelector('.mk'),t,T.max);rise(cap,t,T.pro,1e9,10);
  cards.forEach((e,i)=>{const a=pl[i][3],nx=i<2?pl[i+1][3]:1e9,foc=eio(P(t,a-.1,a+.3))*(1-eio(P(t,nx-.1,nx+.3)));
   const x=V?(i===2?330:i*330):i*290,y=V?(i===2?420:0):0,ry=V?-8:-24+i*6;
   e.dataset.base=`translate(${x}px,${y}px) rotateY(${ry}deg) translateZ(${foc*120}px)`;rise(e,t,T.pro-.2+.1*i,1e9,40,.7);
   e.style.borderColor=foc>.5?'var(--acc)':'#2c2c30';e.style.filter=`brightness(${t>T.pro?(.55+.45*Math.max(foc,i===2&&t>T.max?1:0)):1})`});
  s.cam.z=.03*eio(P(t,T.pro,T.auto))}}

// ===== 4. SPLIT: autocomplete free vs chat & agents eat credits =====
{const s=shots.split;
 el(`<div class="bgword" style="left:${V?-30:560}px;top:${V?1250:330}px">CREDITS</div>`,s.L0);
 const pw=V?960:820,ph=V?600:620;
 const panel=(x,y,title,body,col)=>obj3d(s.L1,{x,y,w:pw,h:ph,tf:'none',inner:`<div class="ab" style="left:0;top:0;width:${pw}px;height:${ph}px;border-radius:14px;background:#131417;border:1px solid rgba(236,232,225,.14);padding:40px 44px">
   <div class="kick" style="color:${col}">${title}</div>${body}</div>`});
 const code=`<div style="margin-top:26px;font:${V?24:22}px/1.8 var(--mono);color:#d4d4d4;white-space:pre"><span style="color:#c586c0">function</span> <span style="color:#dcdcaa">total</span>(items) {
  <span style="color:#c586c0">return</span> <span class="gh3" style="color:#6e7681">items.reduce((a, b) =&gt; a + b.price, 0);</span>
}</div>`;
 const L=panel(V?60:120,V?260:240,'Autocomplete',code,'var(--C)');
 const Rp=panel(V?60:980,V?960:240,'Chat &amp; agents',`<div style="margin-top:26px;background:#262633;border-radius:10px;padding:14px 18px;font:${V?24:22}px var(--ui);color:#ddd">Refactor billing and add tests</div>
   <div style="margin-top:40px;font:500 ${V?20:18}px var(--mono);color:var(--mute)">AI CREDITS LEFT</div><div style="margin-top:12px;height:30px;border-radius:15px;background:#2a2c31;overflow:hidden"><i class="mt3" style="display:block;height:100%;background:var(--sig)"></i></div>
   <div class="ab big mn3" style="left:44px;bottom:30px;font-size:${V?110:100}px">1,500</div>`,'var(--sig)');
 const fr=el(`<div class="ab big" style="left:${V?640:700}px;top:${V?700:700}px;font-size:${V?120:110}px;color:var(--C)">FREE</div>`,s.L1);
 const mt=Rp.querySelector('.mt3'),mn=Rp.querySelector('.mn3'),gh=L.querySelector('.gh3');
 s.R=t=>{rise(L,t,T.auto-.3,1e9,40,.6);rise(Rp,t,T.chat-.35,1e9,40,.6);rise(fr,t,T.free-.15,1e9,30,.5);
  gh.style.color=t>T.auto+.4?'#d4d4d4':'#6e7681';const e=eio(P(t,T.eat-.2,T.upside+.3));mt.style.width=(100-82*e)+'%';mn.textContent=Math.round(1500-1230*e).toLocaleString('en-US');
  s.cam.z=.03*eio(P(t,T.auto,T.upside))}}

// ===== 5. EVERYWHERE: five flat tiles + cheapest way in =====
{const s=shots.ides;
 const ides=[['','VS Code',T.vs],['jetbrains','JetBrains',T.jb],['eclipseide','Eclipse',T.ecl],['xcode','Xcode',T.xc],['github','GitHub',T.ghi]];
 const tiles=ides.map(([k,n])=>el(`<div class="tile lit" style="left:0;top:0;width:${V?280:230}px;height:${V?220:230}px">${k?`<span class="lg" style="width:84px;height:84px">${ic(k)}</span>`:`<span style="font:700 72px var(--mono);color:#fff">{ }</span>`}${n}</div>`,s.L1));
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:150}px">The upside</div>`,s.L1);
 const hl=headline(s.L1,['Works almost','[[everywhere]]'],{x:V?60:120,y:V?190:200,fs:V?130:120,lh:1.06});
 const hl2=headline(s.L1,['Still the','[[cheapest way in]]'],{x:V?60:120,y:V?1540:760,fs:V?84:70,lh:1.08});
 const pr=el(`<div class="ab cap" style="left:${V?60:124}px;top:${V?1740:920}px;font-size:${V?26:22}px;color:var(--ink)">Pro from $10 / month · SRC: docs.github.com</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.upside-.1,1e9,14);revealLines(hl,t,[T.works-.3,T.every2-.4]);sweep(hl.querySelector('.mk'),t,T.every2);
  tiles.forEach((e,i)=>{const x=V?200+(i%2)*330+(i===4?165:0):500+i*262,y=V?560+Math.floor(i/2)*270:500;e.dataset.base=`translate(${x}px,${y}px)`;rise(e,t,ides[i][2]-.2,1e9,40,.5)});
  revealLines(hl2,t,[T.cheapest-.5,T.cheapest-.3]);sweep(hl2.querySelector('.mk'),t,T.cheapest+.1);rise(pr,t,T.cheapest+.3,1e9,10);
  s.cam.z=.03*eio(P(t,T.upside,T.cheap2))}}

// ===== 6. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.cheap2,tierAt:T.btier,line:['Cheapest entry,','[[least predictable bill]]']});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.least)}}
