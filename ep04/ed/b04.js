// ===== BLOCK 04: Windsurf -> C  — style "NEW SIGN" (§9.1): teal sea, cream type, the old name peels off =====
const TOOL=TOOLS[3];
theme({vars:{bg:'#0B3B3A',ink:'#F1E9DA',mute:'#9FC7C1',sig:'#F1E9DA',mkink:'#0B3B3A',acc:'#F1E9DA',colc:'rgba(241,233,218,.03)',lightc:'rgba(160,230,220,.10)',vigc:'rgba(0,20,20,.5)',stroke:'rgba(241,233,218,.07)',
  hd:"'Bricolage Grotesque',Inter,sans-serif",hdw:800,hdtt:'none',hdls:'-.03em',kf:"'IBM Plex Mono',monospace"}});
el(`<style>
.wcard{position:absolute;border-radius:22px;background:#0A1F21;border:1px solid rgba(241,233,218,.16);box-shadow:-30px 40px 80px rgba(0,0,0,.45);color:#F1E9DA}
.wtag{font:500 20px 'IBM Plex Mono';color:#9FC7C1;letter-spacing:.06em;text-transform:uppercase}
.stamp{position:absolute;border:5px solid currentColor;border-radius:12px;display:flex;align-items:center;justify-content:center;font:700 30px 'IBM Plex Mono';letter-spacing:.08em;padding:6px 16px}
</style>`,document.head);
// sea: slow sine lines behind every shot
{const sea=el(`<div class="ab" style="inset:0;background:linear-gradient(160deg,#06282A,#0E4A47 60%,#0B3B3A)"></div>`);root.insertBefore(sea,root.children[1]);
 const svg=el(`<svg class="ab" style="left:0;top:0" width="${W}" height="${H}"></svg>`);root.insertBefore(svg,root.children[2]);
 window.SEA=t=>{let h='';for(let i=0;i<14;i++){const y=H*.55+i*34;let d=`M0 ${y}`;for(let x=0;x<=W;x+=40)d+=` L${x} ${(y+Math.sin(x/140+i*.7+t*.6)*10).toFixed(1)}`;h+=`<path d="${d}" stroke="rgba(241,233,218,${.05+.01*(i%3)})" fill="none" stroke-width="2"/>`}svg.innerHTML=h}}
const T={wind:at('Windsurf'),exist:at('exist'),anymore:at('anymore'),openai:at('OpenAI'),almost:at('almost'),three:at('three'),billion:at('billion'),then:at('Then'),google:at('Google'),hired:at('hired'),ceo:at('O',1,true),cognition:at('Cognition'),rest:at('rest'),june:at('June'),wind2:at('Windsurf',2),became:at('became'),devin:at('Devin'),desktop:at('Desktop'),wind3:at('Windsurf',3),redirects:at('redirects'),even:at('Even'),cascade:at('Cascade'),loved:at('loved'),replaced:at('replaced'),devins:at('Devins'),left:at('left'),solid:at('solid'),fork:at('fork'),swe:at('W',1,true),models:at('models'),pro:at('Pro',1,true),max:at('Max'),newn:at('New'),same:at('same'),ctier:at('C',2,true)};
makeShots([['hook',0,T.openai-.35],['deal',T.openai-.35,T.june-.4],['sign',T.june-.4,T.even-.3],['cascade',T.even-.3,T.left-.35],['left',T.left-.35,T.newn-.35],['verdict',T.newn-.35,END+1]],{deal:'push',sign:'dolly',cascade:'push',left:'push',verdict:'dolly'});
// the old sticker over the new plate; peel(k) 0..1
function signPair(p,{x,y,w,h}){
 const plate=el(`<div class="wcard" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;display:flex;align-items:center;gap:30px;padding:0 54px"><span style="width:${h*.4}px;height:${h*.4}px;flex:none">${ic('devin-color')}</span><span style="font:800 ${h*.3}px 'Bricolage Grotesque';letter-spacing:-.02em;white-space:nowrap">Devin Desktop</span></div>`,p);
 const st=el(`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;transform-origin:0 0"></div>`,p);
 const face=el(`<div class="ab" style="inset:0;border-radius:22px;background:#F1E9DA;display:flex;align-items:center;gap:30px;padding:0 54px;box-shadow:0 30px 60px rgba(0,0,0,.4)"><span style="width:${h*.38}px;height:${h*.38}px;color:#0E4A47;flex:none">${ic('windsurf')}</span><span style="font:800 ${h*.34}px 'Bricolage Grotesque';color:#0E4A47;letter-spacing:-.02em">Windsurf</span></div>`,st);
 const flap=el(`<div class="ab" style="left:0;top:0;background:linear-gradient(135deg,#d9cfbd,#fffaf0 55%,#c8bda9);filter:drop-shadow(-10px -6px 14px rgba(0,0,0,.35))"></div>`,st);
 return{plate,st,peel(k,lift=0){const c=Math.max(0,k)*Math.max(w,h)*1.25,cx=Math.min(c*1.1,w),cy=Math.min(c,h);
  face.style.clipPath=k<=0?'none':`polygon(0 0,100% 0,100% ${h-cy}px,${w-cx}px 100%,0 100%)`;
  css(flap,{left:(w-cx)+'px',top:(h-cy)+'px',width:cx+'px',height:cy+'px',clipPath:'polygon(100% 0,0 100%,22% 22%)',display:k>0&&k<1.05?'block':'none'});
  st.style.transform=`translate(${-lift*60}px,${-lift*(h+160)}px) rotate(${-4-8*lift}deg)`;st.style.opacity=1-P(lift,.6,1)}}}

// ===== 1. HOOK: "Windsurf doesn't exist anymore." — the sticker starts to lift =====
{const s=shots.hook;
 const ix=indexHeader(s.L1,TOOL,'04',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?200:230}px;font-size:${V?26:22}px;color:var(--mute)">Windsurf</div>`,s.L1);
 const hl=headline(s.L1,["doesn't exist","[[anymore.]]"],{x:V?56:116,y:V?250:280,fs:V?130:120,lh:1.0});
 const S=signPair(s.L1,V?{x:90,y:1000,w:900,h:300}:{x:880,y:420,w:900,h:300});
 s.R=t=>{SEA(t);rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,0,1e9,14);revealLines(hl,t,[T.exist-.3,T.anymore-.3]);sweep(hl.querySelector('.mk'),t,T.anymore+.1);
  rise(S.st,t,.1,1e9,30,.6);S.plate.style.opacity=0;S.peel(.18*eio(P(t,T.anymore,T.anymore+.6)));s.cam.z=.03*eio(P(t,0,T.openai))}}

// ===== 2. THE DEAL: three suitors, one after another =====
{const s=shots.deal;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">2025 · who got Windsurf</div>`,s.L1);
 const hl=headline(s.L1,['Three suitors,','[[one owner.]]'],{x:V?56:116,y:V?190:250,fs:V?110:96,lh:1.05});
 const cw=V?960:520,chh=V?260:300,cards=[['OpenAI','Almost bought it','$3B',T.openai],['Google','Hired the CEO','',T.google],['Cognition','Bought the rest','',T.cognition]].map(([n,a,b,at_],i)=>{
  const x=V?60:120+i*(cw+40),y=V?540+i*(chh+30):560;
  const e=el(`<div class="wcard" style="left:${x}px;top:${y}px;width:${cw}px;height:${chh}px;padding:34px 38px"><div class="wtag">${['01','02','03'][i]} · ${n}</div>
   <div style="font:800 ${V?62:54}px/1.05 'Bricolage Grotesque';margin-top:18px;letter-spacing:-.02em">${a}</div>${b?`<div class="w3b" style="font:800 ${V?86:80}px 'Bricolage Grotesque';color:#9FC7C1;margin-top:10px;position:relative;display:inline-block">${b}<i class="w3s" style="position:absolute;left:-6px;right:-6px;top:52%;height:7px;background:#F1E9DA;transform-origin:0 50%;transform:scaleX(0)"></i></div>`:''}</div>`,s.L1);return{e,a:at_}});
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#86AFA9">Widely reported · Jul 2025</div>`,s.L1);
 const s3=cards[0].e.querySelector('.w3s');
 s.R=t=>{SEA(t);rise(kick,t,T.openai-.2,1e9,14);revealLines(hl,t,[T.openai,T.rest-.2]);sweep(hl.querySelector('.mk'),t,T.rest+.2);
  cards.forEach(({e,a},i)=>{rise(e,t,a-.25,1e9,40,.6);e.style.opacity=Math.min(+e.style.opacity,i<2&&t>cards[i+1].a?.55:1)});
  s3.style.transform=`scaleX(${eo(P(t,T.almost,T.almost+.3))})`;rise(cap,t,T.cognition,1e9,10);s.cam.z=.03*eio(P(t,T.openai,T.june))}}

// ===== 3. THE NEW SIGN: Windsurf peels off, Devin Desktop underneath; the URL redirects =====
{const s=shots.sign;
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">June 2026</div>`,s.L1);
 const hl=headline(s.L1,['Windsurf became','[[Devin Desktop.]]'],{x:V?56:116,y:V?190:250,fs:V?100:92,lh:1.05});
 const S=signPair(s.L1,V?{x:90,y:760,w:900,h:300}:{x:880,y:470,w:900,h:300});
 const url=el(`<div class="ab" style="left:${V?90:880}px;top:${V?1160:850}px;display:flex;align-items:center;gap:18px;font:500 ${V?30:26}px 'IBM Plex Mono';color:#F1E9DA">
   <span style="background:#0A1F21;border:1px solid rgba(241,233,218,.2);border-radius:30px;padding:10px 22px">windsurf.com</span><span class="wa" style="font-size:40px">→</span><span class="wd" style="display:flex;align-items:center;gap:10px"><i style="width:36px;height:36px;display:inline-block">${ic('devin-color')}</i>Devin</span></div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:960}px;color:#86AFA9">SRC: Cognition, Jun 2 2026</div>`,s.L1);
 const wa=url.querySelector('.wa'),wd=url.querySelector('.wd');
 s.R=t=>{SEA(t);rise(kick,t,T.june-.2,1e9,14);revealLines(hl,t,[T.wind2-.2,T.devin-.35]);sweep(hl.querySelector('.mk'),t,T.desktop);
  const pk=eio(P(t,T.became-.1,T.devin+.2)),lift=eio(P(t,T.devin+.1,T.desktop+.6));S.plate.style.opacity=1;S.peel(.18+.9*pk,lift);
  rise(url,t,T.wind3-.2,1e9,20);wa.style.opacity=wd.style.opacity=cl(P(t,T.redirects,T.redirects+.3));rise(cap,t,T.became,1e9,10);
  s.cam.z=.04*eio(P(t,T.june,T.even))}}

// ===== 4. CASCADE: the loved agent's name tag gets swapped =====
{const s=shots.cascade;
 const pw=V?960:760,ph=V?640:600;
 const pane=el(`<div class="wcard" style="left:${V?60:1000}px;top:${V?760:230}px;width:${pw}px;height:${ph}px;padding:0;overflow:hidden">
   <div style="height:54px;display:flex;align-items:center;gap:12px;padding:0 22px;background:#0F2B2D;border-bottom:1px solid rgba(241,233,218,.12);font:600 20px Inter"><span class="cn" style="position:relative">Cascade<i class="cs" style="position:absolute;left:-4px;right:-4px;top:52%;height:4px;background:#F1E9DA;transform-origin:0 50%;transform:scaleX(0)"></i></span><span class="dn" style="display:flex;align-items:center;gap:8px;color:#9FC7C1"><i style="width:22px;height:22px;display:inline-block">${ic('devin-color')}</i>Devin agent</span></div>
   <div style="padding:26px 26px;font:20px/1.55 Inter;color:#dfe9e6">
    <div style="background:#13383A;border-radius:12px;padding:14px 18px;margin-bottom:16px">Add rate limiting to the auth routes</div>
    <div style="color:#9FC7C1;font:500 17px 'IBM Plex Mono';margin-bottom:10px">● planning · 3 steps</div>
    <div style="border:1px solid rgba(241,233,218,.14);border-radius:10px;padding:12px 16px;margin-bottom:8px">1. Read routes/auth.ts</div>
    <div style="border:1px solid rgba(241,233,218,.14);border-radius:10px;padding:12px 16px;margin-bottom:8px">2. Add a limiter middleware</div>
    <div style="border:1px solid rgba(241,233,218,.14);border-radius:10px;padding:12px 16px">3. Write tests</div></div></div>`,s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Even Cascade</div>`,s.L1);
 const hl=headline(s.L1,['the agent people','actually [[loved]]'],{x:V?56:116,y:V?190:250,fs:V?96:88,lh:1.05});
 const sub=el(`<div class="ab h1" style="left:${V?60:120}px;top:${V?450:500}px;font-size:${V?54:48}px;font-weight:600;line-height:1.15;width:${V?960:800}px;color:#9FC7C1">— replaced by Devin's own agent.</div>`,s.L1);
 const cs=pane.querySelector('.cs'),dn=pane.querySelector('.dn'),cn=pane.querySelector('.cn');
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#86AFA9">SRC: Digital Applied (single secondary source)</div>`,s.L1);
 s.R=t=>{SEA(t);rise(kick,t,T.even-.2,1e9,14);revealLines(hl,t,[T.cascade,T.loved-.4]);sweep(hl.querySelector('.mk'),t,T.loved);rise(pane,t,T.cascade-.2,1e9,40,.6);
  rise(sub,t,T.replaced-.2,1e9,16);cs.style.transform=`scaleX(${eo(P(t,T.replaced,T.replaced+.3))})`;cn.style.opacity=1-.5*P(t,T.devins,T.devins+.3);dn.style.opacity=cl(P(t,T.devins,T.devins+.3));
  rise(cap,t,T.replaced,1e9,10);s.cam.z=.03*eio(P(t,T.even,T.left))}}

// ===== 5. WHAT'S LEFT: a solid VS Code fork, own SWE models, same prices =====
{const s=shots.left;
 const ew=V?960:900,eh=V?520:520;
 const ed=el(`<div class="wcard" style="left:${V?60:900}px;top:${V?720:200}px;width:${ew}px;height:${eh}px;overflow:hidden;padding:0">
   <div style="height:44px;display:flex;align-items:center;gap:10px;padding:0 18px;background:#0F2B2D;font:500 15px Inter;color:#9FC7C1"><i style="width:20px;height:20px;display:inline-block">${ic('devin-color')}</i>auth-api — Devin Desktop</div>
   <div style="display:flex;height:calc(100% - 44px)"><div style="width:170px;background:#0C2426;padding:14px;font:14px/2 Inter;color:#7fa7a1">▾ src<br>&nbsp;&nbsp;auth.ts<br>&nbsp;&nbsp;routes.ts<br>&nbsp;&nbsp;db.ts</div>
   <div style="flex:1;padding:18px;font:16px/1.8 'IBM Plex Mono';color:#dfe9e6;white-space:pre"><span style="color:#e3a6d6">export</span> <span style="color:#e3a6d6">function</span> <span style="color:#f1d38c">rateLimit</span>(max = <span style="color:#9fe0c8">100</span>) {
  <span style="color:#e3a6d6">const</span> hits = <span style="color:#e3a6d6">new</span> Map();
  <span style="color:#e3a6d6">return</span> (req, res, next) =&gt; {…}
}</div>
   <div style="width:250px;background:#0C2426;padding:14px;font:15px Inter;color:#dfe9e6"><div class="wtag" style="font-size:13px">Model</div><div class="sw" style="margin-top:10px;border:1px solid rgba(241,233,218,.25);border-radius:10px;padding:10px 12px">SWE model · Cognition ▾</div></div></div></div>`,s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">What's left</div>`,s.L1);
 const hl=headline(s.L1,['A solid','VS Code [[fork.]]'],{x:V?56:116,y:V?190:250,fs:V?110:96,lh:1.05});
 const tags=[['Pro','$20',T.pro],['Max','$200',T.max]].map(([n,p,a],i)=>({e:el(`<div class="ab" style="left:${V?60+i*330:120+i*300}px;top:${V?480:520}px;width:${V?300:270}px;height:150px;border-radius:16px;background:#F1E9DA;color:#0E4A47;padding:20px 24px;transform:rotate(${i?3:-3}deg);box-shadow:-20px 30px 50px rgba(0,0,0,.35)"><div style="font:600 20px 'IBM Plex Mono'">${n}</div><div style="font:800 64px 'Bricolage Grotesque'">${p}<span style="font:500 18px 'IBM Plex Mono'">/mo</span></div></div>`,s.L1),a}));
 const sw=ed.querySelector('.sw');
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#86AFA9">SRC: Devin docs · self-serve billing</div>`,s.L1);
 s.R=t=>{SEA(t);rise(kick,t,T.left-.2,1e9,14);revealLines(hl,t,[T.solid-.2,T.fork-.4]);sweep(hl.querySelector('.mk'),t,T.fork);rise(ed,t,T.left-.2,1e9,40,.6);
  sw.style.boxShadow=t>T.swe-.2&&t<T.pro?'0 0 0 3px #F1E9DA':'none';tags.forEach(({e,a})=>rise(e,t,a-.2,1e9,30,.5));rise(cap,t,T.pro,1e9,10);
  const k=eio(P(t,T.left,T.newn));s.cam.z=.04*k;s.cam.x=V?0:-25*k}}

// ===== 6. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.newn,tierAt:T.ctier,line:['New name, new brain,','[[same price.]]']});
{const s=shots.verdict,R0=s.R;s.R=t=>{SEA(t);R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.same)}}
