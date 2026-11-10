// ===== BLOCK 06: OpenAI Codex -> A  — style "REWIND" (§9.1): Swiss black-on-white, a timeline played backwards =====
const TOOL=TOOLS[5];
theme({vars:{bg:'#F3F2EE',ink:'#0E0E0E',mute:'#555555',sig:'#0E0E0E',mkink:'#F3F2EE',acc:'#0E0E0E',colc:'rgba(0,0,0,.05)',lightc:'rgba(255,255,255,0)',vigc:'rgba(0,0,0,.05)',stroke:'rgba(0,0,0,.06)',
  hd:"'Inter Display',Inter,sans-serif",hdw:900,hdtt:'none',hdls:'-.05em',kf:"'IBM Plex Mono',monospace"},light:true});
el(`<style>
.sw{position:absolute;border:3px solid #0E0E0E;background:#F3F2EE}
.swl{font:600 20px 'IBM Plex Mono';letter-spacing:.04em}
.rw{position:absolute;border-radius:12px;background:#0E0E0E;color:#F3F2EE;font:900 40px 'Inter Display';letter-spacing:-.1em;display:flex;align-items:center;justify-content:center}
.cols{background-size:${(V?1080:1920)/12}px 100%!important}
</style>`,document.head);
const T={openai:at('OpenAI'),tried:at('tried'),cut:at('cut'),half:at('half'),backed:at('backed'),day:at('day'),before:at('before'),dev:at('Dev'),sept:at('September'),announced:at('announced'),pro:at('Pro',1,true),half2:at('half',2),usage:at('usage'),users:at('Users'),revolted:at('revolted'),october:at('October'),cancelled:at('cancelled'),doubled:at('doubled'),plans:at('plans'),codex2:at('Codex',2),chatgpt:at('ChatGPT'),every:at('everywhere'),term:at('terminal'),vs:at('V',1,true),jb:at('JetBrains'),xc:at('Xcode'),cloud:at('cloud'),phone:at('phone'),one:at('One'),catchw:at('catch'),cli:at('command-line'),plus:at('Plus'),twenty:at('twenty'),free:at('Free'),desktop:at('desktop'),biggest:at('Biggest'),moving:at('moving'),atier:at('A',1,true)};
makeShots([['hook',0,T.dev-.4],['timeline',T.dev-.4,T.codex2-.35],['every',T.codex2-.35,T.one-.3],['catch',T.one-.3,T.biggest-.35],['verdict',T.biggest-.35,END+1]],{timeline:'push',every:'push',catch:'push',verdict:'dolly'});

// ===== 1. HOOK: the $200 plan's usage bar is cut in half — then rewound =====
{const s=shots.hook;
 const ix=indexHeader(s.L1,TOOL,'06',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?200:230}px;font-size:${V?26:22}px;color:var(--mute)">OpenAI · the $200 coding plan</div>`,s.L1);
 const hl=headline(s.L1,['Cut in half?','[[Backed down.]]'],{x:V?52:112,y:V?250:280,fs:V?140:130,lh:1.0});
 const b=V?{x:60,y:1050,w:960,h:120}:{x:120,y:720,w:1680,h:110};
 const lab=el(`<div class="ab swl" style="left:${b.x}px;top:${b.y-40}px">CODEX USAGE · PRO $200</div>`,s.L1);
 const L=el(`<div class="ab" style="left:${b.x}px;top:${b.y}px;width:${b.w/2}px;height:${b.h}px;background:#0E0E0E"></div>`,s.L1);
 const R=el(`<div class="ab" style="left:${b.x+b.w/2}px;top:${b.y}px;width:${b.w/2}px;height:${b.h}px;background:#0E0E0E"></div>`,s.L1);
 const cutl=el(`<div class="ab" style="left:${b.x+b.w/2-2}px;top:${b.y-30}px;width:4px;height:${b.h+60}px;background:repeating-linear-gradient(#0E0E0E 0 10px,transparent 10px 18px)"></div>`,s.L1);
 const m50=el(`<div class="ab" style="left:${b.x+b.w*(V?.48:.62)}px;top:${b.y-(V?190:220)}px;font:900 ${V?120:170}px/1 'Inter Display';letter-spacing:-.05em;color:#0E0E0E">−50%</div>`,s.L1);
 const rw=el(`<div class="rw" style="left:${b.x+b.w/2-60}px;top:${b.y+b.h+40}px;width:120px;height:72px">◀◀</div>`,s.L1);
 el(`<div class="ab" style="left:${V?880:1720}px;top:${V?110:90}px;width:90px;height:90px">${ic('codex-color')}</div>`,s.L1);
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,T.openai-.1,1e9,14);revealLines(hl,t,[T.cut-.3,T.backed-.35]);sweep(hl.querySelector('.mk'),t,T.backed+.05);
  [lab,L,R].forEach(e=>fadeIn(e,t,.3,1e9,.3));const away=eio(P(t,T.half,T.half+.5))*(1-eio(P(t,T.backed+.1,T.backed+.7)));
  R.style.transform=`translateX(${away*(V?260:520)}px)`;R.style.opacity=1-.75*away;cutl.style.opacity=t>T.cut&&t<T.backed+.6?1:0;
  m50.style.opacity=away;m50.style.textDecoration=t>T.backed+.2?'line-through':'none';m50.style.textDecorationThickness='12px';
  const rk=P(t,T.backed-.15,T.backed+.1);rw.style.opacity=t<T.backed-.15?0:1-P(t,T.day+.3,T.day+.6);rw.style.transform=`scale(${1+.15*Math.sin(rk*Math.PI)})`;
  s.cam.z=.02*eio(P(t,0,T.dev))}}

// ===== 2. TIMELINE: Sep DevDay -> users revolt -> Oct 29 cancelled (rewind) + limits doubled =====
{const s=shots.timeline;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">DevDay → October 29</div>`,s.L1);
 const hl=headline(s.L1,['Announced.','[[Reversed.]]'],{x:V?52:112,y:V?190:250,fs:V?140:130,lh:1.0});
 const tl=V?{x:60,y:1180,w:960}:{x:120,y:740,w:1680};
 const axis=el(`<div class="ab" style="left:${tl.x}px;top:${tl.y}px;width:${tl.w}px;height:3px;background:#0E0E0E;transform-origin:0 50%"></div>`,s.L1);
 const mk=(f,lab,sub,a,fill)=>{const x=tl.x+tl.w*f;const d=el(`<div class="ab" style="left:${x-11}px;top:${tl.y-10}px;width:22px;height:22px;border-radius:50%;background:${fill};border:3px solid #0E0E0E"></div>`,s.L1);
  const t_=el(`<div class="ab" style="left:${x-11}px;top:${tl.y+30}px;font:700 ${V?26:24}px 'IBM Plex Mono'">${lab}<div style="font:500 ${V?22:20}px/1.45 'IBM Plex Mono';color:#555;margin-top:6px;width:${V?440:520}px">${sub}</div></div>`,s.L1);return{d,t_,a}};
 const m1=mk(.04,'SEP · DEVDAY','Pro plan to get half the Codex usage',T.dev,'#0E0E0E'),m2=mk(V?.52:.62,'OCT 29','Cut cancelled.<br><b class="dbl" style="color:#0E0E0E">Other plans: limits doubled.</b>',T.october,'#F3F2EE');
 const post=el(`<div class="ab" style="left:${V?60:1100}px;top:${V?560:200}px;width:${V?960:700}px;border:3px solid #0E0E0E;background:#fff;padding:22px 26px">
   <div class="swl" style="color:#555">OPENAI DEVELOPER COMMUNITY</div><div style="font:800 ${V?34:30}px/1.2 Inter;margin-top:10px;letter-spacing:-.02em">Existing $200 Pro subscribers should keep their current usage allowance</div>
   <div class="swl" style="margin-top:14px;font-size:17px;color:#555">Thread · users push back</div></div>`,s.L1);
 const ph=el(`<div class="ab" style="left:0;top:${tl.y-100}px;width:3px;height:130px;background:#0E0E0E"></div>`,s.L1);
 const rw=el(`<div class="rw" style="left:0;top:${tl.y-175}px;width:110px;height:66px;font-size:34px">▶</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1720:960}px">SRC: Startup Fortune · OpenAI community forum</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.dev-.2,1e9,14);revealLines(hl,t,[T.announced-.3,T.cancelled-.35]);sweep(hl.querySelector('.mk'),t,T.cancelled);
  axis.style.transform=`scaleX(${eo(P(t,T.dev-.3,T.dev+.5))})`;[m1,m2].forEach(({d,t_,a})=>{fadeIn(d,t,a-.1,1e9,.3);rise(t_,t,a-.1,1e9,12)});
  rise(post,t,T.users-.2,1e9,20,.5);m2.t_.querySelector('.dbl').style.opacity=cl(P(t,T.doubled-.1,T.doubled+.2));
  // playhead: forward from Sep to Oct 29, then rewinds back to the start on "cancelled"
  const f0=.04,f1=V?.52:.62,fwd=eio(P(t,T.announced,T.october+.2)),back=eio(P(t,T.cancelled-.1,T.cancelled+.6));const f=f0+(f1-f0)*fwd*(1-back);
  const x=tl.x+tl.w*f;ph.style.left=x+'px';rw.style.left=(x-55)+'px';rw.textContent=t>T.cancelled-.1&&t<T.cancelled+.8?'◀◀':'▶';fadeIn(ph,t,T.announced-.2,1e9,.3);fadeIn(rw,t,T.announced-.2,1e9,.3);
  rise(cap,t,T.revolted,1e9,10);s.cam.z=.03*eio(P(t,T.dev,T.codex2))}}

// ===== 3. EVERYWHERE: a Swiss grid of surfaces, each fills black when named =====
{const s=shots.every;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Now inside the ChatGPT app</div>`,s.L1);
 const hl=headline(s.L1,['Runs','[[everywhere.]]'],{x:V?52:112,y:V?190:250,fs:V?140:130,lh:1.0});
 const items=[['Terminal',T.term],['VS Code',T.vs],['JetBrains',T.jb],['Xcode',T.xc],['Cloud',T.cloud],['Phone',T.phone]];
 const g=V?{x:60,y:620,c:2,w:470,h:300,gx:20,gy:20}:{x:900,y:200,c:3,w:290,h:300,gx:20,gy:20};
 const cells=items.map(([n,a],i)=>{const e=el(`<div class="sw" style="left:${g.x+(i%g.c)*(g.w+g.gx)}px;top:${g.y+Math.floor(i/g.c)*(g.h+g.gy)}px;width:${g.w}px;height:${g.h}px;padding:22px 24px"><div class="swl">0${i+1}</div><div style="position:absolute;left:24px;bottom:22px;font:900 ${V?60:46}px 'Inter Display';letter-spacing:-.04em">${n}</div></div>`,s.L1);return{e,a}});
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1720:960}px">SRC: learn.chatgpt.com · OpenAI</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.codex2-.2,1e9,14);revealLines(hl,t,[T.chatgpt,T.every-.35]);sweep(hl.querySelector('.mk'),t,T.every);
  cells.forEach(({e,a})=>{fadeIn(e,t,T.every-.2,1e9,.4);const on=t>a-.05;e.style.background=on?'#0E0E0E':'#F3F2EE';e.style.color=on?'#F3F2EE':'#0E0E0E'});
  rise(cap,t,T.codex2,1e9,10);s.cam.z=.03*eio(P(t,T.codex2,T.one))}}

// ===== 4. THE CATCH: CLI needs Plus ($20); Free gets only the desktop app =====
{const s=shots.catch;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">One catch</div>`,s.L1);
 const hl=headline(s.L1,['The CLI','needs [[Plus.]]'],{x:V?52:112,y:V?190:250,fs:V?140:130,lh:1.0});
 const tb=V?{x:60,y:640,w:960}:{x:900,y:220,w:900};const cw=[.46,.27,.27];
 const rowsD=[['','Free','Plus · $20'],['Desktop app','✓','✓'],['Command-line tool','—','✓']];
 const rows=rowsD.map((r,i)=>el(`<div class="ab" style="left:${tb.x}px;top:${tb.y+i*(V?130:120)}px;width:${tb.w}px;height:${V?130:120}px;display:flex;border-top:3px solid #0E0E0E;${i===2?'border-bottom:3px solid #0E0E0E':''}">${r.map((c,j)=>`<div class="c${j}" style="width:${cw[j]*100}%;display:flex;align-items:center;padding:0 18px;font:${i===0?'600 22px \'IBM Plex Mono\'':(j===0?'800 34px Inter':'900 56px \'Inter Display\'')};letter-spacing:${i===0?'.04em':'-.02em'}">${c}</div>`).join('')}</div>`,s.L1));
 const hiC=el(`<div class="ab" style="left:${tb.x+tb.w*(cw[0]+cw[1])}px;top:${tb.y}px;width:${tb.w*cw[2]}px;height:${3*(V?130:120)}px;background:#0E0E0E;opacity:0"></div>`,s.L1);s.L1.insertBefore(hiC,rows[0]);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1720:960}px">SRC: learn.chatgpt.com/docs/pricing</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.one-.2,1e9,14);revealLines(hl,t,[T.cli-.3,T.plus-.4]);sweep(hl.querySelector('.mk'),t,T.plus);
  rows.forEach((e,i)=>rise(e,t,[T.cli-.4,T.desktop-.3,T.cli][i],1e9,14,.4));
  const hk=P(t,T.plus,T.plus+.3);hiC.style.opacity=hk;rows.forEach(r=>{const c=r.querySelector('.c2');c.style.color=hk>.5?'#F3F2EE':'#0E0E0E'});
  const fr=P(t,T.free,T.free+.3);rows[2].querySelector('.c1').style.opacity=1;rows[1].querySelector('.c1').style.textDecoration='none';rows[2].querySelector('.c1').style.transform=`scale(${1+.2*Math.sin(fr*Math.PI)})`;
  rise(cap,t,T.plus,1e9,10);s.cam.z=.03*eio(P(t,T.one,T.biggest))}}

// ===== 5. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.biggest,tierAt:T.atier,line:['Biggest reach,','[[limits keep moving.]]'],fs:V?60:62});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.moving-.3)}}
