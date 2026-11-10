// ===== BLOCK 01: Cursor -> B  (editorial) =====
const TOOL=TOOLS[0];setAccent('#E8C46A');
const T={most:at('most'),owned:at('owned'),rocket:at('rocket'),company:at('company'),spacex:at('SpaceX'),deal:at('sixty'),oct:at('October'),xsub:at('Subscription'),grok1:at('Grok'),xprem:at('Premium'),editor:at('editor',2),fast:at('fast'),cloud:at('cloud'),review:at('review'),catch:at('catch'),cheap:at('cheapest'),eight:at('eight'),grokonly:at('Grok',2),claude:at('Claude'),included:at('included'),api:at('P',2,true),composer:at('Composer'),admitted:at('admitted'),kimi:at('Kimi'),great:at('Great'),btier:at('B',1,true)};
makeShots([['hook',0,T.spacex-.3],['news',T.spacex-.3,T.oct-.25],['bundle',T.oct-.25,T.editor-.3],['ui',T.editor-.3,T.catch-.3],['price',T.catch-.3,T.composer-.4],['model',T.composer-.4,T.great-.35],['verdict',T.great-.35,END+1]],{news:'push',bundle:'dolly',ui:'push',price:'rise',model:'push',verdict:'dolly'});
const CODE=`<span class="k">import</span> { sign } <span class="k">from</span> <span class="s">"jsonwebtoken"</span>;
<span class="k">import</span> { db } <span class="k">from</span> <span class="s">"./db"</span>;

<span class="k">export async function</span> <span class="f">login</span>(<span class="n">email</span>, <span class="n">pw</span>) {
  <span class="k">const</span> <span class="n">user</span> = <span class="k">await</span> db.<span class="f">findUser</span>(email);
  <span class="k">if</span> (!user) <span class="k">throw new</span> <span class="t">Error</span>(<span class="s">"not found"</span>);
  <span class="c">// TODO: rate limit</span>
  <span class="k">return</span> <span class="f">sign</span>({ id: user.id });
}

<span class="k">export function</span> <span class="f">rateLimit</span>(<span class="n">max</span> = <span class="t">100</span>) {
  <span class="k">const</span> <span class="n">hits</span> = <span class="k">new</span> <span class="t">Map</span>();
  <span class="k">return</span> (<span class="n">req</span>, <span class="n">res</span>, <span class="n">next</span>) => {
    <span class="k">const</span> <span class="n">n</span> = (hits.<span class="f">get</span>(req.ip) ?? <span class="t">0</span>) + <span class="t">1</span>;
    hits.<span class="f">set</span>(req.ip, n);
    <span class="k">if</span> (n > max) <span class="k">return</span> res.<span class="f">status</span>(<span class="t">429</span>).<span class="f">end</span>();
    <span class="f">next</span>();
  };
}`;
const cursorWin=(w,h)=>`<div class="win" style="left:0;top:0;width:${w}px;height:${h}px"><div class="tb"><span class="lg">${ic('cursor')}</span>auth-api — Cursor</div>
 <div class="side"><div>▾ AUTH-API</div><div>&nbsp;&nbsp;▸ node_modules</div><div>&nbsp;&nbsp;▾ src</div><div class="on">&nbsp;&nbsp;&nbsp;&nbsp;auth.ts</div><div>&nbsp;&nbsp;&nbsp;&nbsp;routes.ts</div><div>&nbsp;&nbsp;&nbsp;&nbsp;db.ts</div></div>
 <div class="code">${CODE}</div>
 <div class="agent"><h4>AGENTS</h4><div class="msg">Add rate limiting and tests to auth</div>
  <div class="task"><i></i>Fast agent: rate limiter<span class="st q">queued</span></div><div class="task"><i></i>Cloud agent: tests<span class="st q">queued</span></div><div class="task"><i style="background:#e8c46a"></i>Code review<span class="st q">queued</span></div>
  <div class="model">Model: <b style="color:#fff">Composer 2</b> ▾</div></div></div>`;
// ===== 1. HOOK =====
{const s=shots.hook;
 const bw=el(`<div class="bgword" style="left:${V?-30:640}px;top:${V?1020:150}px">ROCKET</div>`,s.L0);
 const bp=obj3d(s.L0,{x:V?300:1240,y:V?780:40,w:760,h:500,tf:'none',inner:paperHTML('MERGERS &amp; ACQUISITIONS','SpaceX Completes Its $60 Billion Cursor Acquisition','Aug. 14, 2026','',760,500)});bp.style.filter='blur(3px) brightness(.5)';
 const WTF=V?'scale(.9)':'none';const win=obj3d(s.L1,{x:V?100:880,y:V?900:190,w:1100,h:660,tf:WTF,origin:'0 0',inner:cursorWin(1100,660)});
 const ix=indexHeader(s.L1,TOOL,'01',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?220:230}px;font-size:${V?26:22}px;color:#C9C4BB">The most popular AI code editor</div>`,s.L1);
 const hl=headline(s.L1,['Is now owned','by a [[rocket]]','[[company]]'],{x:V?60:120,y:V?280:290,fs:V?118:96,lh:1.1});
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1660:640}px">SRC: Bloomberg Law · Aug 14 2026<br><em>$60B all-stock deal</em> · Anysphere → SpaceX</div>`,s.L1);
 const r2=el(`<div class="rule" style="left:${V?60:120}px;top:${V?1640:620}px;width:${V?960:640}px"></div>`,s.L1);
 const spx=el(`<div class="ab" style="left:${V?60:600}px;top:${V?1380:760}px;width:${V?260:250}px;height:${V?260:250}px;color:var(--ink)">${ic('spacex')}</div>`,s.L1);
 const co=callout(s.L1);
 const f1=el(`<div class="fg" style="left:${V?560:1450}px;top:${V?1820:880}px">await db.findUser(email)</div>`,s.L2);
 const f2=el(`<div class="fg" style="left:-60px;top:${V?40:20}px;font-size:40px;opacity:.2">export async function login(</div>`,s.L2);
 const mks=hl.querySelectorAll('.mk');
 s.R=t=>{rise(ix.e,t,.1,1e9,14);drawLine(ix.r,t,.25,.7);rise(kick,t,T.most-.15,1e9,14);
  revealLines(hl,t,[T.owned-.25,T.rocket-.35,T.company-.25]);sweep(mks[0],t,T.rocket);sweep(mks[1],t,T.company);
  const wk=e5(P(t,.2,1.4));win.style.transform=`translateX(${(1-wk)*160}px) `+WTF;win.style.opacity=wk;
  fadeIn(bp,t,.6,1e9,.8);rise(spx,t,T.company+.15,1e9,20);rise(cap,t,T.company+.4,1e9,10);drawLine(r2,t,T.company+.3);
  const r=rectOf(win);co.set(t,T.company+.45,V?320:860,V?1510:885,V?r.x+r.w*.35:r.x+170,V?r.y+r.h*.9:r.y+r.h*.84);
  s.cam.z=.015*eio(P(t,0,T.spacex));f1.style.transform=`translateX(${-t*14}px)`;f2.style.transform=`translateX(${t*10}px)`}}

// ===== 2. NEWS: $60B, three headlines stacked in depth =====
{const s=shots.news;
 const bw=el(`<div class="bgword" style="left:${V?-20:560}px;top:${V?1220:300}px">$60B</div>`,s.L0);
 const pb=[['CNBC · APR 21 2026','SpaceX says it can buy Cursor later this year for $60 billion'],['BLOOMBERG · MAY 21 2026','Cursor hits $3 billion annual sales rate ahead of SpaceX deal']];
 const backs=pb.map(([k,h],i)=>{const o=obj3d(s.L0,{x:(V?200:1060)+i*70,y:(V?560:90)+i*-50,w:720,h:420,tf:'rotateY(-24deg) rotateX(5deg)',inner:paperHTML(k,h,'','',720,420)});o.style.filter=`blur(${4-i}px) brightness(${.45+.1*i})`;return o});
 const front=obj3d(s.L1,{x:V?110:920,y:V?760:200,w:860,h:540,tf:'rotateY(-20deg) rotateX(4deg)',inner:paperHTML('MERGERS &amp; ACQUISITIONS','SpaceX Completes Its <span class="m60" style="padding:0 3px;border-radius:3px">$60 Billion</span> Cursor Acquisition','Bloomberg Law · Aug. 14, 2026','The all-stock deal makes Anysphere, the maker of the Cursor AI code editor, a wholly owned SpaceX subsidiary.',860,540)});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:180}px">August 14, 2026 — deal closed</div>`,s.L1);
 const num=el(`<div class="ab big" style="left:${V?50:110}px;top:${V?200:250}px;font-size:${V?330:300}px">$60B</div>`,s.L1);
 const und=el(`<div class="rule" style="left:${V?60:120}px;top:${V?500:520}px;width:${V?560:520}px;height:10px;background:var(--sig)"></div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1660:600}px">All-stock · <em>Anysphere becomes a SpaceX subsidiary</em><br>SRC: Bloomberg Law</div>`,s.L1);
 const co=callout(s.L1);const m=front.querySelector('.m60');
 s.R=t=>{rise(kick,t,T.spacex-.2,1e9,14);rise(num,t,T.deal-.25,1e9,40,.7);drawLine(und,t,T.deal+.2,.5);rise(cap,t,T.deal+.5,1e9,10);
  const fk=e5(P(t,T.spacex-.3,T.spacex+.9));front.style.transform=`rotateY(${-20-(1-fk)*20}deg) rotateX(4deg) translateX(${(1-fk)*200}px)`;front.style.opacity=fk;
  backs.forEach((o,i)=>fadeIn(o,t,T.spacex+.1*i,1e9,.7));
  const k=P(t,T.deal,T.deal+.4);m.style.background=`linear-gradient(90deg,rgba(255,90,54,.85) ${k*100}%,transparent ${k*100}%)`;
  const mr=rectOf(m);co.set(t,T.deal+.45,V?mr.x+mr.w/2:mr.x,V?mr.y:mr.y+mr.h/2,V?340:660,V?520:420);
  s.cam.z=.04*eio(P(t,T.spacex,T.oct));s.cam.x=-20*eio(P(t,T.spacex,T.oct))}}

// ===== 3. BUNDLE: three tiles slide into one subscription =====
{const s=shots.bundle;
 const bw=el(`<div class="bgword" style="left:${V?-40:620}px;top:${V?1250:420}px">BUNDLE</div>`,s.L0);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">October 2026</div>`,s.L1);
 const hl=headline(s.L1,['Folded into','[[the X]]','[[subscription]]'],{x:V?60:120,y:V?190:250,fs:V?118:100,lh:1.1});
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:720}px">Cursor + Grok + X Premium · one plan<br>SRC: cursor.com/pricing · Oct 12 2026</div>`,s.L1);
 const shelf=el(`<div class="stage" style="left:${V?60:840}px;top:${V?760:330}px;width:${V?960:980}px;height:${V?760:400}px"></div>`,s.L1);
 const plane=el(`<div class="obj" style="left:0;top:0;width:100%;height:100%;transform:none"></div>`,shelf);
 const tiles=[['x','X Premium',T.xprem-.25],['grok','Grok',T.grok1-.15],['cursor','Cursor',T.oct]].map(([k,n,a])=>({e:el(`<div class="tile lit" style="left:0;top:0"><span class="lg">${ic(k)}</span>${n}</div>`,plane),a}));
 const mks=hl.querySelectorAll('.mk');
 s.R=t=>{rise(kick,t,T.oct-.2,1e9,14);revealLines(hl,t,[T.oct,T.xsub-.4,T.xsub-.3]);sweep(mks[0],t,T.xsub-.1);sweep(mks[1],t,T.xsub+.15);rise(cap,t,T.xsub+.4,1e9,10);
  const m=eio(P(t,T.xprem+.15,T.xprem+.75));tiles.forEach(({e,a},i)=>{const gap=V?300:330,x=V?(i===2?365:i*330+40):(i-1)*gap*(1-.3*m)+375,y=V?(i===2?440:60)-(i<2?0:0):60;
   e.dataset.base=`translate(${x}px,${y}px)`;rise(e,t,a,1e9,50,.7)});s.cam.z=.03*eio(P(t,T.oct,T.editor))}}

// ===== 4. UI: the editor itself is still excellent =====
{const s=shots.ui;
 const win=obj3d(s.L1,{x:V?30:740,y:V?720:190,w:1180,h:720,tf:V?'scale(.86)':'none',origin:'0 0',inner:cursorWin(1180,720)});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">The editor itself</div>`,s.L1);
 const hl=headline(s.L1,['Still','[[excellent]]'],{x:V?60:120,y:V?190:250,fs:V?130:120,lh:1.08});
 const items=[['Fast agents',T.fast],['Cloud agents',T.cloud],['Built-in code review',T.review]].map(([n,a],i)=>({e:el(`<div class="ab cap" style="left:${V?60:124}px;top:${(V?520:570)+i*44}px;font-size:${V?28:24}px;color:var(--ink)">→ ${n}</div>`,s.L1),a}));
 const tasks=[...win.querySelectorAll('.task')];const mk=hl.querySelector('.mk');
 s.R=t=>{rise(kick,t,T.editor-.2,1e9,14);revealLines(hl,t,[T.editor-.1,T.editor+.4]);sweep(mk,t,T.editor+.7);items.forEach(({e,a})=>rise(e,t,a-.15,1e9,14));
  [T.fast,T.cloud,T.review].forEach((a,i)=>{const st=tasks[i].querySelector('.st'),done=t>a+.7;st.textContent=done?'done':(t>a-.1?'running':'queued');st.className='st '+(done?'ok':t>a-.1?'run':'q');tasks[i].style.boxShadow=(t>a-.1&&t<a+1)?'0 0 0 2px #8fb4f0':'none'});
  const k=eio(P(t,T.editor-.3,T.catch));s.cam.z=.05*k;s.cam.x=V?0:-50*k}}

// ===== 5. PRICE: $8 = Grok only; Claude & GPT -> API price =====
{const s=shots.price;
 const plans=[['Free','$0',['Limited agent']],['Plus','$8',['Grok models only','X Premium']],['Premium','$30',['Cloud agents','Code review','Claude, GPT: API price']],['Super','$100',['15× Plus']],['Ultra','$200',['50× Plus']]];
 const fan=el(`<div class="stage" style="left:${V?40:900}px;top:${V?820:250}px;width:${V?1000:1000}px;height:${V?800:500}px"></div>`,s.L1);
 const cards=plans.map(([n,p,li],i)=>el(`<div class="pc lit"><span class="lgc">${ic('cursor')}</span><b>${n}</b><div class="p">${p}<small>/mo</small></div>${li.map(x=>`<li${x.includes('API')?' class="apil"':''}>${x}</li>`).join('')}</div>`,fan));
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">But here's the catch</div>`,s.L1);
 const h1=headline(s.L1,['[[$8]] =','Grok only'],{x:V?60:120,y:V?190:250,fs:V?150:130,lh:1.06});
 const h2=headline(s.L1,['Claude &amp; GPT','→ [[API price]]'],{x:V?60:120,y:V?190:250,fs:V?110:88,lh:1.12});
 const stk=el('<div class="strike"></div>',s.L1);[h1,h2,stk].forEach(e=>e.style.zIndex=5);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:720}px">No longer included in any plan<br>SRC: cursor.com/pricing · Nov 2026</div>`,s.L1);
 const co=callout(s.L1);
 s.R=t=>{rise(kick,t,T.catch-.2,1e9,14);const sw=T.claude-.25;
  revealLines(h1,t,[T.eight-.2,T.grokonly-.3],sw);sweep(h1.querySelector('.mk'),t,T.eight);
  revealLines(h2,t,[T.claude-.1,T.api-.3]);if(t<sw)h2.style.opacity=0;sweep(h2.querySelector('.mk'),t,T.api);
  const l1=h2.querySelector('.ln>span').getBoundingClientRect(),R0=root.getBoundingClientRect(),sc=R0.width/W;
  const sk=eo(P(t,T.included,T.included+.35));css(stk,{left:((l1.left-R0.left)/sc-6)+'px',top:((l1.top-R0.top)/sc+l1.height/sc*.52)+'px',width:((l1.width/sc+12)*sk)+'px',opacity:t>T.included?1:0});
  rise(cap,t,T.api,1e9,10);
  const f1=eio(P(t,T.cheap-.1,T.cheap+.4))*(1-P(t,T.claude-.2,T.claude+.2)),f2=eio(P(t,T.claude-.2,T.claude+.3));
  cards.forEach((e,i)=>{const x=V?((i%3)*330-10+(i>2?165:0)):i*188,y=V?(i>2?400:0):0,ry=V?-10:-28+i*4;
   const foc=i===1?f1:i===2?f2:0,dim=Math.max(f1*(i===1?0:1),f2*(i===2?0:1));
   e.dataset.base=`translate(${x}px,${y}px) rotateY(${ry}deg) translateZ(${foc*120}px)`;rise(e,t,T.catch+.06*i,1e9,40,.7);
   e.style.filter=`brightness(${1-.55*dim})`;e.style.borderColor=foc>.5?'var(--acc)':'#2c2c30'});
  const li=fan.querySelector('.apil');li.style.color=t>T.included?'#ff8a70':'';const lr=rectOf(li);co.set(t,T.api+.1,V?lr.x+lr.w/2:lr.x-8,V?lr.y:lr.y+lr.h/2,V?560:680,V?470:400);
  s.cam.z=.03*eio(P(t,T.catch,T.composer))}}

// ===== 6. MODEL: "in-house" Composer 2 = built on Kimi =====
{const s=shots.model;
 const dd=obj3d(s.L1,{x:V?60:900,y:V?760:210,w:V?960:760,h:340,tf:'none',inner:`<div class="dd" style="left:0;top:0;width:100%;height:100%">
  <div class="sel"><span style="width:34px;height:34px;color:#fff">${ic('cursor')}</span>Composer 2<span style="margin-left:auto;font:500 16px var(--mono);color:#8fb4f0">in-house</span></div>
  <div><span style="width:34px;height:34px;color:#fff">${ic('grok')}</span>Grok</div><div style="color:#777">Claude · API price</div><div style="color:#777">GPT · API price</div></div>`});
 const kimi=obj3d(s.L1,{x:V?380:1440,y:V?1220:600,w:230,h:230,tf:'none',inner:`<div class="tile" style="left:0;top:0"><span class="lg">${ic('kimi-color')}</span>Kimi 2.5</div>`});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">The "in-house" model</div>`,s.L1);
 const hl=headline(s.L1,['Composer 2','built on','[[Kimi]]'],{x:V?60:120,y:V?190:250,fs:V?118:100,lh:1.08});
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:720}px">Moonshot AI's open model · undisclosed at launch<br>Cursor: "a miss" · SRC: TechCrunch, Mar 22 2026</div>`,s.L1);
 const co=callout(s.L1);
 s.R=t=>{rise(kick,t,T.composer-.3,1e9,14);revealLines(hl,t,[T.composer-.1,T.admitted+.3,T.kimi-.3]);sweep(hl.querySelector('.mk'),t,T.kimi);
  const dk=e5(P(t,T.composer-.4,T.composer+.6));dd.style.opacity=dk;rise(kimi,t,T.kimi-.2,1e9,60,.7);rise(cap,t,T.kimi+.2,1e9,10);
  const a=rectOf(dd.querySelector('.sel')),b=rectOf(kimi);co.set(t,T.kimi+.1,V?a.x+a.w/2:a.x+a.w,V?a.y+a.h:a.y+a.h/2,V?b.x+b.w/2:b.x+b.w/2,V?b.y:b.y);
  s.cam.z=.03*eio(P(t,T.composer,T.great))}}

// ===== 7. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.great,tierAt:T.btier,line:['Great editor,','[[shaky deal]]']});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.great+.8)}}
