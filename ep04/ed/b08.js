// ===== BLOCK 08: Claude Code -> S  — style "CRAFT" (§9.1): warm paper, serif, clay accent, calm motion =====
const TOOL=TOOLS[7];
theme({vars:{bg:'#F1ECE2',ink:'#2A2522',mute:'#7A6F63',sig:'#C8643E',mkink:'#F1ECE2',acc:'#C8643E',colc:'rgba(42,37,34,.035)',lightc:'rgba(255,250,240,.6)',vigc:'rgba(90,60,30,.14)',stroke:'rgba(42,37,34,.06)',
  hd:"'Fraunces',Georgia,serif",hdw:500,hdtt:'none',hdls:'-.02em',kf:"'IBM Plex Mono',monospace"},mk:'color',light:true});
el(`<style>
.cc{position:absolute;border-radius:16px;background:#221E1B;box-shadow:-40px 50px 90px rgba(70,50,30,.32);overflow:hidden;color:#EDE6DA}
.cctb{height:44px;display:flex;align-items:center;gap:10px;padding:0 18px;background:#2B2622;font:500 15px Inter;color:#b5aa9c}
.pp{position:absolute;border-radius:14px;background:#FBF8F2;border:1px solid #e0d6c6;box-shadow:-24px 34px 60px rgba(70,50,30,.18);color:#2A2522}
.cap{color:#8a7f72}
</style>`,document.head);
const CLAY='#C8643E';
const T={two:at('Two'),three:at('three'),devs:at('developers'),agents:at('agents'),this:at('this'),one:at('one'),stack:at('Stack'),survey:at('survey'),sixty:at('sixty-six'),percent:at('percent'),claude:at('Claude'),more:at('More'),copilot:at('Copilot'),lives:at('lives'),terminal:at('terminal'),plugs:at('plugs'),editor:at('editor'),runs:at('runs'),teams:at('teams'),sub:at('sub-agents'),newest:at('newest'),wasnt:at('wasnt'),clean:at('clean'),march:at('March'),packaging:at('packaging'),leaked:at('leaked'),five:at('five'),twelve:at('twelve'),thousand:at('thousand'),lines:at('lines'),nofree:at('free'),plan:at('plan'),pro:at('Pro',1,true),max:at('Max'),hundred2:at('hundred',2),everyone:at('everyone'),chasing:at('chasing'),stier:at('S',1,true)};
makeShots([['hook',0,T.stack-.6],['survey',T.stack-.6,T.lives-.35],['term',T.lives-.35,T.wasnt-.3],['leak',T.wasnt-.3,T.nofree-.6],['price',T.nofree-.6,T.everyone-.6],['verdict',T.everyone-.6,END+1]],{survey:'rise',term:'rise',leak:'rise',price:'rise',verdict:'dolly'});
const person=(fill)=>`<svg width="100%" height="100%" viewBox="0 0 120 180" fill="none"><circle cx="60" cy="40" r="30" ${fill?`fill="${CLAY}"`:`stroke="#2A2522" stroke-width="5"`}/><path d="M12 176 V130 a48 48 0 0 1 96 0 V176" ${fill?`fill="${CLAY}"`:`stroke="#2A2522" stroke-width="5"`}/></svg>`;

// ===== 1. HOOK: two out of three =====
{const s=shots.hook;
 const ix=indexHeader(s.L1,TOOL,'08',{x:V?60:120,y:V?120:150,w:V?960:640});
 const hl=headline(s.L1,['Two out','of three'],{x:V?52:112,y:V?200:220,fs:V?190:180,lh:.95});
 const sub=el(`<div class="ab" style="left:${V?60:120}px;top:${V?600:600}px;font:400 ${V?56:50}px/1.2 'Fraunces';color:var(--ink);width:${V?960:760}px">developers who use AI agents<br>use <i style="color:${CLAY}">this one.</i></div>`,s.L1);
 const ppl=[1,1,0].map((f,i)=>el(`<div class="ab" style="left:${V?150+i*280:1000+i*260}px;top:${V?1000:300}px;width:${V?220:200}px;height:${V?330:300}px">${person(f)}</div>`,s.L1));
 const lg=el(`<div class="ab" style="left:${V?880:1720}px;top:${V?110:90}px;width:90px;height:90px">${ic('claudecode-color')}</div>`,s.L1);
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);revealLines(hl,t,[T.two-.3,T.three-.4]);rise(sub,t,T.devs-.2,1e9,16);rise(lg,t,.1,1e9,12);
  ppl.forEach((e,i)=>rise(e,t,[T.two,T.two+.35,T.three][i]-.1,1e9,30,.6));s.cam.z=.02*eio(P(t,0,T.stack))}}

// ===== 2. THE SURVEY: 66% of agent users — more than GitHub Copilot =====
{const s=shots.survey;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Stack Overflow Developer Survey 2026</div>`,s.L1);
 const big=el(`<div class="ab big" style="left:${V?50:110}px;top:${V?190:240}px;font-size:${V?280:300}px;color:${CLAY};line-height:.95">0%</div>`,s.L1);
 const sub=el(`<div class="ab" style="left:${V?60:120}px;top:${V?480:540}px;font:400 ${V?52:46}px/1.2 'Fraunces';color:var(--ink)">of agent users said they use<br><b style="font-weight:600">Claude Code.</b></div>`,s.L1);
 const card=el(`<div class="pp" style="left:${V?60:1080}px;top:${V?820:230}px;width:${V?960:720}px;height:${V?520:520}px;padding:36px 40px">
   <div style="font:600 18px 'IBM Plex Mono';color:#8a7f72;letter-spacing:.06em">AI AGENTS · WHICH DO YOU USE?</div>
   <div style="margin-top:34px;font:600 24px Inter">Claude Code</div><div style="margin-top:10px;height:36px;border-radius:6px;background:#ebe3d6;overflow:hidden"><i class="b8" style="display:block;height:100%;background:${CLAY}"></i></div>
   <div class="mc" style="margin-top:44px;display:flex;align-items:center;gap:16px;font:400 ${V?40:36}px 'Fraunces'"><span style="width:44px;height:44px;color:#2A2522">${ic('githubcopilot')}</span><span>more than <b style="font-weight:600">GitHub Copilot</b></span></div>
   <div style="position:absolute;left:40px;bottom:30px;font:500 16px 'IBM Plex Mono';color:#8a7f72">Results published Oct 6 2026</div></div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: Stack Overflow Developer Survey, Oct 6 2026</div>`,s.L1);
 const bar=card.querySelector('.b8'),mc=card.querySelector('.mc');
 s.R=t=>{rise(kick,t,T.stack-.4,1e9,14);const k=eio(P(t,T.sixty-.2,T.percent+.5));big.textContent=Math.round(66*k)+'%';rise(big,t,T.sixty-.3,1e9,20,.5);rise(sub,t,T.claude-.4,1e9,14);
  rise(card,t,T.survey-.2,1e9,30,.6);bar.style.width=(66*k)+'%';rise(mc,t,T.more-.15,1e9,14);rise(cap,t,T.stack,1e9,10);s.cam.z=.03*eio(P(t,T.stack,T.lives))}}

// ===== 3. THE TERMINAL: lives in your terminal, plugs into your editor, runs a team of sub-agents =====
{const s=shots.term;
 const tw=V?960:860,th=V?620:600;
 const agents=[['planner','reading the codebase'],['tests','writing auth.test.ts'],['reviewer','checking the diff']];
 const term=el(`<div class="cc" style="left:${V?60:940}px;top:${V?760:200}px;width:${tw}px;height:${th}px"><div class="cctb"><i style="width:22px;height:22px;display:inline-block">${ic('claudecode-color')}</i>claude — ~/auth-api</div>
  <div style="padding:28px 32px;font:${V?23:21}px/1.85 'JetBrains Mono';white-space:pre"><span style="color:${CLAY}">&gt;</span> add rate limiting and tests to auth
<span class="sp" style="color:#9b8f80">⏺ Spawning 3 sub-agents…</span>
${agents.map(([a,b],i)=>`<span class="ag" style="display:inline-block"><span style="color:${CLAY}">${i<2?'├─':'└─'}</span> <b style="color:#F1ECE2">${a}</b>  <span style="color:#9b8f80">${b}</span></span>`).join('\n')}
<span class="ok"><span style="color:#7fb77e">✔</span> 14 files changed · tests passing</span></div></div>`,s.L1);
 const chip=el(`<div class="ab" style="left:${V?640:1560}px;top:${V?680:120}px;padding:10px 18px;border-radius:30px;background:#FBF8F2;border:1px solid #e0d6c6;font:600 20px Inter;color:#2A2522;box-shadow:-10px 14px 30px rgba(70,50,30,.15)">⇄ your editor</div>`,s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">It lives in your terminal</div>`,s.L1);
 const hl=headline(s.L1,['and runs a whole','[[team of sub-agents.]]'],{x:V?52:112,y:V?190:250,fs:V?84:76,lh:1.1});
 const sub=el(`<div class="ab" style="left:${V?60:120}px;top:${V?410:450}px;font:400 italic ${V?40:36}px 'Fraunces';color:var(--mute)">on the newest Claude models.</div>`,s.L1);
 const ags=[...term.querySelectorAll('.ag')],sp=term.querySelector('.sp'),ok=term.querySelector('.ok');
 s.R=t=>{rise(kick,t,T.lives-.2,1e9,14);rise(term,t,T.lives-.2,1e9,30,.6);rise(chip,t,T.plugs-.2,1e9,16);revealLines(hl,t,[T.runs-.3,T.teams-.3]);sweep(hl.querySelector('.mk'),t,T.sub);rise(sub,t,T.newest-.2,1e9,12);
  sp.style.opacity=cl(P(t,T.teams-.2,T.teams));ags.forEach((e,i)=>{rise(e,t,T.sub+.15*i,1e9,10,.4)});ok.style.opacity=cl(P(t,T.newest+.3,T.newest+.6));
  s.cam.z=.03*eio(P(t,T.lives,T.wasnt))}}

// ===== 4. NOT A CLEAN YEAR: a packaging mistake leaked 512,000 lines =====
{const s=shots.leak;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">March 2026 · a packaging mistake</div>`,s.L1);
 const hl=headline(s.L1,["It wasn't a","[[clean year.]]"],{x:V?52:112,y:V?190:250,fs:V?110:100,lh:1.05});
 const num=el(`<div class="ab big" style="left:${V?50:110}px;top:${V?460:500}px;font-size:${V?170:160}px;color:var(--ink)">0</div>`,s.L1);
 const sub=el(`<div class="ab" style="left:${V?60:120}px;top:${V?650:680}px;font:400 italic ${V?44:40}px 'Fraunces';color:var(--mute)">lines of its own source code.</div>`,s.L1);
 const pk=el(`<div class="pp" style="left:${V?60:1080}px;top:${V?800:200}px;width:${V?960:700}px;height:200px;padding:30px 34px">
   <div style="font:600 18px 'IBM Plex Mono';color:#8a7f72">NPM PACKAGE</div><div style="margin-top:12px;font:600 ${V?34:30}px 'IBM Plex Mono';color:#2A2522">@anthropic-ai/claude-code</div>
   <div style="margin-top:10px;font:500 20px 'IBM Plex Mono';color:${CLAY}">+ source map shipped by mistake</div></div>`,s.L1);
 const sheets=[...Array(9)].map((_,i)=>el(`<div class="pp" style="left:${V?120+i*16:1140+i*14}px;top:${V?1040:440}px;width:${V?760:560}px;height:${V?420:420}px;padding:30px 32px;overflow:hidden">${[...Array(12)].map((_,k)=>`<i style="display:block;height:10px;margin:0 0 16px ${(k%4)*26}px;width:${40+((k*37+i*11)%50)}%;border-radius:5px;background:#e6ddcf"></i>`).join('')}</div>`,s.L1));
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: The Hacker News, Apr 2026</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.march-.3,1e9,14);revealLines(hl,t,[T.wasnt-.2,T.clean-.3]);sweep(hl.querySelector('.mk'),t,T.clean+.2);rise(pk,t,T.packaging-.3,1e9,24,.6);
  const k=eio(P(t,T.five-.1,T.thousand+.4));num.textContent=Math.round(512000*k).toLocaleString('en-US');rise(num,t,T.five-.3,1e9,20,.5);rise(sub,t,T.lines-.2,1e9,14);
  sheets.forEach((e,i)=>{const a=T.leaked+.12*i;const kk=e5(P(t,a,a+.7));e.style.opacity=cl(P(t,a,a+.2));e.style.transform=`translate(${(1-kk)*-40+i*6}px,${(1-kk)*-120+i*(V?40:30)}px) rotate(${(i%3-1)*3*kk}deg)`});
  rise(cap,t,T.leaked,1e9,10);s.cam.z=.03*eio(P(t,T.wasnt,T.nofree))}}

// ===== 5. PRICE: no free plan; Pro $20, Max from $100 =====
{const s=shots.price;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Pricing</div>`,s.L1);
 const hl=headline(s.L1,['No [[free plan.]]'],{x:V?52:112,y:V?190:250,fs:V?120:120,lh:1.05});
 const cards=[['Free','—','not available',T.nofree],['Pro','$20','/ month',T.pro],['Max','from $100','/ month',T.max]].map(([n,p,u,a],i)=>{
  const e=el(`<div class="pp" style="left:${V?60:120+i*560}px;top:${V?480+i*300:470}px;width:${V?960:520}px;height:${V?260:330}px;padding:30px 36px">
   <div style="font:600 20px 'IBM Plex Mono';color:#8a7f72;letter-spacing:.06em">${n.toUpperCase()}</div><div style="margin-top:14px;font:500 ${V?96:90}px 'Fraunces';color:${i?'#2A2522':'#b8ad9f'}">${p}</div><div style="font:500 20px 'IBM Plex Mono';color:#8a7f72">${u}</div>
   ${i===0?`<i class="x8" style="position:absolute;left:20px;right:20px;top:50%;height:5px;background:${CLAY};transform-origin:0 50%;transform:rotate(-8deg) scaleX(0)"></i>`:''}</div>`,s.L1);return{e,a}});
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px">SRC: claude.com/pricing (checked Nov 9 2026)</div>`,s.L1);
 const x8=cards[0].e.querySelector('.x8');
 s.R=t=>{rise(kick,t,T.nofree-.4,1e9,14);revealLines(hl,t,[T.nofree-.4]);sweep(hl.querySelector('.mk'),t,T.nofree);cards.forEach(({e,a})=>rise(e,t,a-.2,1e9,30,.5));
  x8.style.transform=`rotate(-8deg) scaleX(${eo(P(t,T.plan,T.plan+.3))})`;rise(cap,t,T.pro,1e9,10);s.cam.z=.03*eio(P(t,T.nofree,T.everyone))}}

// ===== 6. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.everyone-.3,tierAt:T.stier,line:['The one everyone','else is [[chasing.]]'],fs:V?66:66});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.chasing)}}
