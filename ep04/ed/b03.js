// ===== BLOCK 03: GitHub Copilot -> B  — style "THE BILL" (§9.1): light paper, a receipt prints, counters roll, stamps =====
const TOOL=TOOLS[2];
theme({vars:{bg:'#ECE7DD',ink:'#151515',mute:'#6B665C',sig:'#D33A2C',acc:'#D33A2C',mkink:'#151515',colc:'rgba(0,0,0,.035)',lightc:'rgba(255,255,255,.55)',vigc:'rgba(90,70,40,.16)',stroke:'rgba(0,0,0,.06)',
  hd:"'Archivo Black',Inter,sans-serif",hdw:400,hdtt:'none',hdls:'-.02em',kf:"'IBM Plex Mono',monospace"},mk:'under',light:true});
el(`<style>
.pc{background:#FBFAF6;border:1px solid #d9d2c4;color:#5d584f}.pc b{color:#151515}.pc .p{color:#151515;font-family:'Archivo Black'}.pc .p small{color:#8b867c}.pc .lgc{color:#151515}
.ptile{position:absolute;width:230px;height:230px;border-radius:22px;background:#FBFAF6;border:1px solid #d9d2c4;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font:600 22px 'IBM Plex Mono';color:#151515;box-shadow:-20px 30px 50px rgba(70,55,30,.18)}
.ptile .lg{width:84px;height:84px;color:#151515}
.stamp{position:absolute;border:5px solid currentColor;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;font:700 30px/1.1 'IBM Plex Mono';letter-spacing:.06em}
.paperbox{position:absolute;background:#FBFAF6;border:1px solid #d9d2c4;border-radius:12px;box-shadow:-30px 40px 70px rgba(70,55,30,.2)}
.cap{color:#7a756b}
</style>`,document.head);
const T={gh:at('GitHub'),token:at('token'),one:at('one'),proj:at('projected'),from:at('from'),n39:at('thirty-nine'),n847:at('eight'),since:at('Since'),june:at('June'),every:at('every'),credits1:at('Credits'),cent:at('cent'),billed:at('billed'),tokens:at('tokens'),pro:at('Pro',1,true),fifteen:at('fifteen'),proplus:at('Plus'),max:at('Max'),auto:at('Autocomplete'),free:at('free'),chat:at('Chat'),eat:at('eat'),upside:at('upside'),works:at('works'),every2:at('everywhere'),vs:at('V',1,true),jb:at('JetBrains'),ecl:at('Eclipse'),xc:at('Xcode'),ghi:at('GitHub',2),cheapest:at('cheapest'),cheap2:at('Cheapest',2),least:at('least'),btier:at('B',1,true)};
makeShots([['hook',0,T.since-.35],['log',T.since-.35,T.pro-.35],['plans',T.pro-.35,T.auto-.35],['split',T.auto-.35,T.upside-.25],['ides',T.upside-.25,T.cheap2-.35],['verdict',T.cheap2-.35,END+1]],{log:'rise',plans:'rise',split:'rise',ides:'rise',verdict:'dolly'});
const money=v=>'$'+Math.round(v).toLocaleString('en-US');

// ===== 1. HOOK: $39 -> $847 rolls up while a receipt prints =====
{const s=shots.hook;
 const ix=indexHeader(s.L1,TOOL,'03',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?200:220}px;font-size:${V?26:22}px;color:var(--mute)">GitHub Copilot switched to</div>`,s.L1);
 const hl=headline(s.L1,['[[Token billing.]]'],{x:V?56:116,y:V?245:260,fs:V?96:84,lh:1.1});
 const n39=el(`<div class="ab big" style="left:${V?56:116}px;top:${V?400:390}px;font-size:${V?96:84}px;color:#8b867c">$39</div>`,s.L1);
 const k39=el('<div class="strike" style="height:8px;background:#151515"></div>',s.L1);
 const n847=el(`<div class="ab big" style="left:${V?50:110}px;top:${V?500:480}px;font-size:${V?240:230}px;color:var(--sig);letter-spacing:-.03em">$847</div>`,s.L1);
 const note=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?730:700}px;font-size:${V?30:26}px;color:var(--ink);text-transform:none">one user's projected bill</div>`,s.L1);
 const r=V?{x:200,y:860,w:680,h:780}:{x:1180,y:110,w:560,h:800};
 const slot=el(`<div class="ab" style="left:${r.x-30}px;top:${r.y-18}px;width:${r.w+60}px;height:22px;border-radius:11px;background:#1c1b19;box-shadow:0 8px 20px rgba(0,0,0,.25);z-index:3"></div>`,s.L1);
 const clip=el(`<div class="ab" style="left:${r.x-80}px;top:${r.y}px;width:${r.w+160}px;height:${r.h+120}px;overflow:hidden"></div>`,s.L1);
 const row=(a,b,st='',c='')=>`<div class="${c}" style="display:flex;justify-content:space-between;${st}"><span>${a}</span><span>${b}</span></div>`;
 const paper=el(`<div class="ab" style="left:80px;top:0;width:${r.w}px;height:${r.h}px;transform-origin:50% 0;filter:drop-shadow(-24px 30px 30px rgba(60,50,30,.25))">
  <div style="width:100%;height:100%;background:#FBFAF6;padding:44px 40px;font:500 ${V?24:21}px/1.9 'IBM Plex Mono';color:#1c1c1c;clip-path:polygon(0 0,100% 0,100% 97%,${[...Array(20)].map((_,i)=>`${100-(i+.5)*5}% ${i%2?97:100}%`).join(',')},0 97%)">
   <div style="display:flex;align-items:center;gap:12px;font-weight:700;font-size:${V?26:23}px"><span style="width:34px;height:34px;color:#111">${ic('githubcopilot')}</span>GITHUB COPILOT</div>
   <div style="font-size:${V?18:16}px;color:#777;margin:6px 0 18px">PROJECTION · ILLUSTRATION ONLY</div>
   <div style="border-top:2px dashed #bbb;margin:10px 0"></div>
   ${row('BEFORE · flat plan','$39.00','','rc1')}${row('1 AI credit','$0.01','','rc2')}${row('billed by','tokens','','rc2')}
   <div style="border-top:2px dashed #bbb;margin:16px 0"></div>
   ${row('AFTER · projected','<b class="rcv">$847.00</b>','font-weight:700;color:#D33A2C;font-size:'+(V?30:27)+'px','rc3')}
   <div style="border-top:2px dashed #bbb;margin:16px 0"></div>
   <div style="font-size:${V?18:16}px;color:#777;line-height:1.6">One Reddit user's projection<br>via The New Stack · Jun 2026</div>
   <div style="margin-top:28px;height:60px;background:repeating-linear-gradient(90deg,#1c1c1c 0 3px,transparent 3px 6px,#1c1c1c 6px 7px,transparent 7px 11px);opacity:.8"></div></div></div>`,clip);
 const rcv=paper.querySelector('.rcv'),rows=[...paper.querySelectorAll('.rc1,.rc2,.rc3')];
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1760:900}px">SRC: The New Stack, Jun 2026 · GitHub changelog</div>`,s.L1);
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,T.gh-.2,1e9,14);revealLines(hl,t,[T.token-.35]);sweep(hl.querySelector('.mk'),t,T.token+.2,.4);
  rise(n39,t,T.n39-.25,1e9,20,.4);const a=rectOf(n39),kk=eo(P(t,T.n847-.3,T.n847));css(k39,{left:(a.x-6)+'px',top:(a.y+a.h*.48)+'px',width:((a.w+12)*kk)+'px',opacity:t>T.n847-.3?1:0});
  const v=39+(847-39)*eio(P(t,T.n847-.1,T.n847+.8));n847.textContent=money(v);rcv.textContent=money(v)+'.00';fadeIn(n847,t,T.n847-.15,1e9,.2);rise(note,t,T.proj-.1,1e9,12);
  // printing: paper comes out of the slot in steps that follow the voice
  const pr=.16+.30*eo(P(t,T.n39-.4,T.n39+.2))+.24*eo(P(t,T.from,T.n39))+.30*eo(P(t,T.n847-.2,T.n847+.6));
  clip.style.height=(r.h+120)*pr+'px';paper.style.transform=`translateY(${-14*(1-pr)}px)`;rows.forEach((e,i)=>{e.style.opacity=t>[T.n39-.3,T.n39,T.n39+.1,T.n847-.2][i]?1:0});
  rise(cap,t,T.n847+.4,1e9,10);s.cam.z=.025*eio(P(t,0,T.since))}}

// ===== 2. CHANGELOG: AI Credits, 1 credit = 1 cent =====
{const s=shots.log;
 const bw=V?980:1000,bh=V?380:340;
 const page=`<div style="padding:34px 44px;font:20px/1.6 var(--ui);color:#1f2328">
   <div style="font:600 15px var(--ui);color:#59636e">JUNE 1, 2026 · COPILOT</div>
   <div style="font:700 ${V?40:38}px/1.15 var(--ui);margin:12px 0 18px">Updates to GitHub Copilot billing and plans</div>
   <div>All Copilot plans now use <b class="aic" style="padding:0 4px;border-radius:5px">GitHub AI Credits</b>, billed by tokens.</div></div>`;
 const win=obj3d(s.L1,{x:V?50:840,y:V?820:220,w:bw,h:bh,tf:'none',inner:browserHTML(bw,bh,{logo:'github',title:'GitHub Changelog',url:'github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans',page,pst:'background:#fff'})});
 win.style.boxShadow='-30px 40px 80px rgba(70,55,30,.25)';
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Since June 1 · every plan</div>`,s.L1);
 const hl=headline(s.L1,['runs on','[[AI Credits.]]'],{x:V?56:116,y:V?190:250,fs:V?120:104,lh:1.08});
 const coin=el(`<div class="stamp" style="left:${V?60:120}px;top:${V?480:500}px;width:${V?250:230}px;height:${V?250:230}px;color:var(--sig);font-size:${V?30:27}px;transform:rotate(-12deg)">1 CREDIT<br>= 1¢</div>`,s.L1);
 const sub=el(`<div class="ab kick" style="left:${V?350:390}px;top:${V?590:600}px;font-size:${V?30:26}px;color:var(--ink);text-transform:none">billed by tokens</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: GitHub changelog, Jun 1 2026</div>`,s.L1);
 const co=callout(s.L1);const aic=win.querySelector('.aic');
 s.R=t=>{rise(kick,t,T.since-.2,1e9,14);revealLines(hl,t,[T.every,T.credits1-.4]);sweep(hl.querySelector('.mk'),t,T.credits1+.1,.4);
  const st=eio(P(t,T.cent-.25,T.cent+.05));coin.style.opacity=st;coin.style.transform=`rotate(-12deg) scale(${1.6-.6*st})`;rise(sub,t,T.billed-.2,1e9,14);rise(cap,t,T.since,1e9,10);rise(win,t,T.since-.2,1e9,30,.6);
  const k=P(t,T.credits1-.1,T.credits1+.4);aic.style.background=`linear-gradient(90deg,rgba(211,58,44,.25) ${k*100}%,transparent ${k*100}%)`;
  const r=rectOf(hl.querySelector('.mk')),a=rectOf(aic);co.set(t,T.credits1+.3,V?r.x+r.w/2:r.x+r.w+10,V?r.y+r.h:r.y+r.h/2,V?a.x+a.w/2:a.x,V?a.y:a.y+a.h/2);
  const kk=eio(P(t,T.since,T.pro));s.cam.z=.04*kk;s.cam.x=V?0:-25*kk}}

// ===== 3. PLANS: paper price tags fanned in 3D, focus follows the voice =====
{const s=shots.plans;
 const pl=[['Pro','$10','1,500 credits',T.pro],['Pro+','$39','7,000 credits',T.proplus],['Max','$100','20,000 credits',T.max]];
 const fan=el(`<div class="stage" style="left:${V?60:950}px;top:${V?820:250}px;width:${V?960:880}px;height:${V?820:520}px"></div>`,s.L1);
 const cards=pl.map(([n,pr,c])=>el(`<div class="pc" style="width:${V?300:290}px;height:${V?360:350}px;box-shadow:-24px 34px 60px rgba(70,55,30,.22)"><span class="lgc">${ic('githubcopilot')}</span><b>${n}</b><div class="p">${pr}<small>/mo</small></div><li style="font:600 19px 'IBM Plex Mono';color:#151515">${c}</li><li>AI Credits · 1¢ each</li>${n==='Max'?`<div class="stamp" style="right:-26px;top:-30px;width:110px;height:110px;color:var(--sig);font-size:24px;transform:rotate(14deg);background:rgba(251,250,246,.9)">NEW</div>`:''}</div>`,fan));
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Copilot plans · Nov 2026</div>`,s.L1);
 const hl=headline(s.L1,['Three plans,','[[one meter.]]'],{x:V?56:116,y:V?190:250,fs:V?120:96,lh:1.1});hl.style.zIndex=5;
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: docs.github.com, Nov 2026</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.pro-.2,1e9,14);revealLines(hl,t,[T.pro-.1,T.max-.3]);sweep(hl.querySelector('.mk'),t,T.max,.4);rise(cap,t,T.pro,1e9,10);
  cards.forEach((e,i)=>{const a=pl[i][3],nx=i<2?pl[i+1][3]:1e9,foc=eio(P(t,a-.1,a+.3))*(1-eio(P(t,nx-.1,nx+.3)));
   const x=V?(i===2?330:i*330):i*290,y=V?(i===2?420:0):0,ry=V?-8:-24+i*6;
   e.dataset.base=`translate(${x}px,${y}px) rotateY(${ry}deg) translateZ(${foc*120}px)`;rise(e,t,T.pro-.2+.1*i,1e9,40,.7);
   e.style.borderColor=foc>.5?'var(--sig)':'#d9d2c4';e.style.opacity=Math.min(+e.style.opacity,t>T.pro?(.55+.45*Math.max(foc,i===2&&t>T.max?1:0)):1)});
  s.cam.z=.03*eio(P(t,T.pro,T.auto))}}

// ===== 4. SPLIT: autocomplete is free (stamp) vs chat & agents eat credits (counter rolls down) =====
{const s=shots.split;
 const pw=V?960:820,ph=V?600:620;
 const L=el(`<div class="paperbox" style="left:${V?60:120}px;top:${V?240:230}px;width:${pw}px;height:${ph}px;padding:40px 44px"><div class="kick" style="color:#2F7D4F">Autocomplete</div>
  <div style="margin-top:26px;font:${V?24:22}px/1.8 'IBM Plex Mono';color:#2b2b2b;white-space:pre"><span style="color:#8a3ab9">function</span> <span style="color:#795e26">total</span>(items) {
  <span style="color:#8a3ab9">return</span> <span class="gh3" style="color:#a9a397">items.reduce((a, b) =&gt; a + b.price, 0);</span>
}</div></div>`,s.L1);
 const stamp=el(`<div class="stamp" style="left:${V?640:640}px;top:${V?560:560}px;width:230px;height:230px;color:#2F7D4F;font-size:48px;transform:rotate(-14deg)">FREE</div>`,s.L1);
 const Rp=el(`<div class="paperbox" style="left:${V?60:980}px;top:${V?960:230}px;width:${pw}px;height:${ph}px;padding:40px 44px"><div class="kick" style="color:var(--sig)">Chat &amp; agents</div>
  <div style="margin-top:26px;background:#efe9de;border-radius:10px;padding:14px 18px;font:${V?24:22}px 'IBM Plex Mono';color:#2b2b2b">Refactor billing and add tests</div>
  <div style="margin-top:36px;font:500 ${V?20:18}px 'IBM Plex Mono';color:#7a756b">AI CREDITS LEFT · ILLUSTRATION</div>
  <div style="margin-top:12px;height:26px;border-radius:13px;background:#e3ddd1;overflow:hidden"><i class="mt3" style="display:block;height:100%;background:var(--sig)"></i></div>
  <div class="ab big mn3" style="left:44px;bottom:34px;font-size:${V?120:110}px;color:#151515">1,500</div></div>`,s.L1);
 const mt=Rp.querySelector('.mt3'),mn=Rp.querySelector('.mn3'),gh=L.querySelector('.gh3');
 s.R=t=>{rise(L,t,T.auto-.3,1e9,40,.6);rise(Rp,t,T.chat-.35,1e9,40,.6);
  const st=eio(P(t,T.free-.2,T.free+.1));stamp.style.opacity=st;stamp.style.transform=`rotate(-14deg) scale(${1.7-.7*st})`;
  gh.style.color=t>T.auto+.4?'#2b2b2b':'#a9a397';const e=eio(P(t,T.eat-.2,T.upside+.3));mt.style.width=(100-82*e)+'%';mn.textContent=Math.round(1500-1230*e).toLocaleString('en-US');
  s.cam.z=.03*eio(P(t,T.auto,T.upside))}}

// ===== 5. EVERYWHERE: five paper tiles + the cheapest-way-in stamp =====
{const s=shots.ides;
 const ides=[['','VS Code',T.vs],['jetbrains','JetBrains',T.jb],['eclipseide','Eclipse',T.ecl],['xcode','Xcode',T.xc],['github','GitHub',T.ghi]];
 const tiles=ides.map(([k,n])=>el(`<div class="ptile" style="left:0;top:0;${V?'width:280px;height:220px':''}">${k?`<span class="lg">${ic(k)}</span>`:`<span style="font:700 72px 'IBM Plex Mono';color:#151515">{ }</span>`}${n}</div>`,s.L1));
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:150}px">The upside</div>`,s.L1);
 const hl=headline(s.L1,['Works almost','[[everywhere.]]'],{x:V?56:116,y:V?190:200,fs:V?120:110,lh:1.08});
 const hl2=headline(s.L1,['Still the','[[cheapest way in.]]'],{x:V?56:116,y:V?1520:770,fs:V?84:64,lh:1.12});
 const stamp=el(`<div class="stamp" style="left:${V?790:1560}px;top:${V?1290:760}px;width:220px;height:220px;color:var(--sig);font-size:34px;transform:rotate(-12deg)">PRO<br>FROM<br>$10/MO</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1780:960}px">SRC: docs.github.com, Nov 2026</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.upside-.1,1e9,14);revealLines(hl,t,[T.works-.3,T.every2-.4]);sweep(hl.querySelector('.mk'),t,T.every2,.4);
  tiles.forEach((e,i)=>{const x=V?200+(i%2)*330+(i===4?165:0):500+i*262,y=V?560+Math.floor(i/2)*270:480;e.dataset.base=`translate(${x}px,${y}px) rotate(${[-2,1,-1,2,-1.5][i]}deg)`;rise(e,t,ides[i][2]-.2,1e9,40,.5)});
  revealLines(hl2,t,[T.cheapest-.5,T.cheapest-.3]);sweep(hl2.querySelector('.mk'),t,T.cheapest+.1,.4);
  const st=eio(P(t,T.cheapest+.2,T.cheapest+.5));stamp.style.opacity=st;stamp.style.transform=`rotate(-12deg) scale(${1.7-.7*st})`;rise(cap,t,T.cheapest,1e9,10);
  s.cam.z=.03*eio(P(t,T.upside,T.cheap2))}}

// ===== 6. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.cheap2,tierAt:T.btier,line:V?['Cheapest entry,','least predictable [[bill.]]']:['Cheapest entry,','least predictable','[[bill.]]']});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.least+.4,.4)}}
