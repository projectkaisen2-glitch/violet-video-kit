// ---------- cues ----------
const T={most:at('most'),owned:at('owned'),rocket:at('rocket'),spacex:at('SpaceX'),deal:at('sixty'),oct:at('October'),xsub:at('Subscription'),grok1:at('Grok'),xprem:at('Premium'),editor:at('editor',2),fast:at('fast'),cloud:at('cloud'),review:at('review'),catch:at('catch'),cheap:at('cheapest'),eight:at('eight'),grokonly:at('Grok',2),claude:at('Claude'),included:at('included'),api:at('P',2,true),first:at('first'),composer:at('Composer'),admitted:at('admitted'),kimi:at('Kimi'),great:at('Great'),btier:at('B',1,true)};
setAccent('#EDEDED');
makeShots([['hook',0,T.spacex-.25],['news',T.spacex-.25,T.oct-.2],['bundle',T.oct-.2,T.editor-.25],['ui',T.editor-.25,T.catch-.25],['price',T.catch-.25,T.composer-.35],['model',T.composer-.35,T.great-.3],['verdict',T.great-.3,END+1]],{news:'slideL',bundle:'zoom',ui:'pushUp',price:'slideL',model:'zoom',verdict:'pushUp'});
// ===== SHOT 1: hook — kinetic type =====
{const p=shots.hook.in;
 const kick=el(`<div class="ab kick" style="left:${V?70:150}px;top:${V?420:230}px;font-size:${V?34:30}px">THE MOST POPULAR AI CODE EDITOR</div>`,p);
 const lg=el(`<div class="ab" style="left:${V?70:150}px;top:${V?500:300}px;width:${V?150:130}px;height:${V?150:130}px;color:#fff">${ic('cursor')}</div>`,p);
 const w1=el(`<div class="ab big" style="left:${V?70:310}px;top:${V?690:300}px;font-size:${V?120:140}px">IS NOW OWNED BY</div>`,p);
 const w2=el(`<div class="PL neg" style="left:${V?60:140}px;top:${V?900:520}px;font-size:${V?150:200}px">A ROCKET</div>`,p);
 const w3=el(`<div class="PL" style="left:${V?60:520}px;top:${V?1100:740}px;font-size:${V?150:170}px">COMPANY</div>`,p);
 const spx=el(`<div class="ab" style="left:${V?620:1460}px;top:${V?1330:470}px;width:${V?380:360}px;height:${V?110:100}px;color:#fff;opacity:.9">${ic('spacex')}</div>`,p);
 shots.hook.R=t=>{slide(kick,t,T.most-.1,1e9,-40,0);pop(lg,t,T.most);slide(w1,t,T.owned-.15,1e9,0,40);pop(w2,t,T.rocket-.2,1e9,.4);pop(w3,t,T.rocket+.15,1e9,.4);slide(spx,t,T.rocket+.3,1e9,80,0)}}
// ===== SHOT 2: news full screen, push into $60B =====
{const p=shots.news.in,o=shots.news.ov;const ww=V?1000:1500,hh=V?760:600;
 const win=el(`<div class="win chrome" style="left:${(W-ww)/2}px;top:${V?400:160}px;width:${ww}px;height:${hh}px">
  <div class="tb">Bloomberg Law<div class="dots"><span>—</span><span>☐</span><span>✕</span></div></div>
  <div class="url"><span>news.bloomberglaw.com/mergers-and-acquisitions/spacex-completes-its-60-billion-cursor-acquisition</span></div>
  <div class="page"><div class="news" style="${V?'padding:34px 36px':''}"><div class="kk">MERGERS &amp; ACQUISITIONS</div>
  <h1 style="font-size:${V?64:62}px">SpaceX Completes Its <span id="m60" style="border-radius:6px;padding:0 4px">$60 Billion</span> Cursor Acquisition</h1>
  <div class="meta">Aug. 14, 2026</div>
  <p style="font-size:${V?24:22}px">The all-stock deal makes Anysphere, the maker of the Cursor AI code editor, a wholly owned SpaceX subsidiary.</p></div></div></div>`,p);
 const pl=el(`<div class="PL neg" style="left:${V?70:1080}px;top:${V?1240:790}px;font-size:${V?110:100}px">$60 BILLION</div>`,o);
 const src=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">Source: Bloomberg Law, Aug 14 2026</div>`,o);
 shots.news.R=(t,u)=>{const m=document.getElementById('m60'),k=P(t,T.deal,T.deal+.45);m.style.background=`linear-gradient(90deg,rgba(255,217,92,.85) ${k*100}%,transparent ${k*100}%)`;
  const z=1+.16*eio(P(t,T.deal-.2,T.oct-.3));shots.news.in.style.transformOrigin=V?'40% 30%':'45% 35%';shots.news.in.style.transform=`scale(${z})`;
  pop(pl,t,T.deal+.35);slide(src,t,T.spacex+.2,1e9,0,20)}}
// ===== SHOT 3: bundle — three tiles merge =====
{const p=shots.bundle.in;const ts=[['x','X Premium'],['grok','Grok'],['cursor','Cursor']];
 const tiles=ts.map(([k,n])=>el(`<div class="tile"><span class="lg">${ic(k)}</span>${n}</div>`,p));
 const res=el(`<div class="PL" style="font-size:${V?78:110}px">THE X SUBSCRIPTION</div>`,p);
 const ttl=el(`<div class="ab kick" style="left:0;right:0;text-align:center;top:${V?380:150}px">OCTOBER 2026 · ONE BUNDLE</div>`,p);
 shots.bundle.R=t=>{const order=[T.xprem-.3,T.grok1-.1,T.oct];
  const merge=eio(P(t,T.xsub,T.xsub+.6));const cx=W/2-110,cy=V?800:330;
  tiles.forEach((e,i)=>{const sp=V?0:320,spy=V?290:0;const x=cx+(i-1)*sp*(1-merge*.28),y=cy+(i-1)*spy*(1-merge*.2);
   css(e,{left:x+'px',top:y+'px'});e.dataset.base='';pop(e,t,Math.min(order[i],T.oct+.2*i))});
  slide(ttl,t,T.oct-.1,1e9,0,-20);
  const rr=V?{x:70,y:1480}:{x:W/2-560,y:700};css(res,{left:rr.x+'px',top:rr.y+'px'});pop(res,t,T.xsub+.2,1e9,.5)}}
// ===== SHOT 4: Cursor UI close-up, agents running =====
{const p=shots.ui.in;const ww=V?1180:1560,hh=V?1100:820;
 const win=el(`<div class="win" style="left:${V?-120:(W-ww)/2}px;top:${V?380:130}px;width:${ww}px;height:${hh}px">
  <div class="tb"><span class="lg">${ic('cursor')}</span>auth-api — Cursor<div class="dots"><span>—</span><span>☐</span><span>✕</span></div></div>
  <div class="side"><div>▾ AUTH-API</div><div>&nbsp;&nbsp;▸ node_modules</div><div>&nbsp;&nbsp;▾ src</div><div class="on">&nbsp;&nbsp;&nbsp;&nbsp;auth.ts</div><div>&nbsp;&nbsp;&nbsp;&nbsp;routes.ts</div><div>&nbsp;&nbsp;&nbsp;&nbsp;db.ts</div></div>
  <div class="code"><span class="k">import</span> { sign } <span class="k">from</span> <span class="s">"jsonwebtoken"</span>;
<span class="k">import</span> { db } <span class="k">from</span> <span class="s">"./db"</span>;

<span class="k">export async function</span> <span class="f">login</span>(<span class="n">email</span>, <span class="n">pw</span>) {
  <span class="k">const</span> <span class="n">user</span> = <span class="k">await</span> db.<span class="f">findUser</span>(email);
  <span class="k">if</span> (!user) <span class="k">throw new</span> <span class="t">Error</span>(<span class="s">"not found"</span>);
  <span class="c">// TODO: rate limit</span>
  <span class="k">return</span> <span class="f">sign</span>({ id: user.id });
}</div>
  <div class="agent"><h4>AGENTS</h4><div class="msg">Add rate limiting and tests to auth</div>
   <div class="task" id="t1">⚡ Fast agent: rate limiter<span class="st run">running</span></div>
   <div class="task" id="t2">☁ Cloud agent: tests<span class="st run">running</span></div>
   <div class="task" id="t3">🔍 Code review<span class="st run">queued</span></div>
   <div class="model">Model: <b style="color:#fff">Composer 2</b> ▾</div></div></div>`,p);
 const tag=el(`<div class="PL" style="left:${V?70:140}px;top:${V?1600:880}px;font-size:${V?96:84}px">STILL EXCELLENT</div>`,shots.ui.ov);
 shots.ui.R=t=>{const pan=eio(P(t,T.editor,T.catch-.3));
  shots.ui.in.style.transformOrigin=V?'85% 40%':'80% 40%';shots.ui.in.style.transform=`scale(${(V?1.3:1)*(1+.18*pan)}) translateX(${V?-pan*120:-pan*40}px)`;
  [['t1',T.fast],['t2',T.cloud],['t3',T.review]].forEach(([id,ts])=>{const e=document.getElementById(id),st=e.querySelector('.st'),done=t>ts+.7;
   st.textContent=done?'done ✓':(t>ts-.1?'running':'queued');st.className='st '+(done?'ok':'run');e.style.boxShadow=(t>ts-.1&&t<ts+1)?'0 0 0 2px #8fb4f0':'none'});
  pop(tag,t,T.editor+.2)}}
// ===== SHOT 5: price cards =====
{const p=shots.price.in;
 const plans=[['Free','$0',['Limited agent']],['Plus','$8',['Grok models only','X Premium']],['Premium','$30',['Cloud agents','Code review','Claude, GPT: API price']],['Super','$100',['15× Plus']],['Ultra','$200',['50× Plus']]];
 const cards=plans.map(([n,pr,li])=>el(`<div class="pc"><span class="lgc">${ic('cursor')}</span><b>${n}</b><div class="p">${pr}<small>/mo</small></div>${li.map(x=>`<li>${x}</li>`).join('')}</div>`,p));
 const hd=el(`<div class="ab kick" style="left:0;right:0;text-align:center;top:${V?400:150}px">CURSOR PRICING · NOV 2026</div>`,p);
 const p8=el(`<div class="PL" style="font-size:${V?104:96}px">$8 = GROK ONLY</div>`,p);
 const inc=el(`<div class="PL" style="font-size:${V?66:62}px;background:#2a2c31;color:#fff">CLAUDE &amp; GPT INCLUDED</div>`,p);
 const strike=el('<div class="strike"></div>',p);
 const api=el(`<div class="PL neg" style="font-size:${V?84:78}px">→ API PRICE</div>`,p);
 const src=el(`<div class="src">Source: cursor.com/pricing, Nov 2026</div>`,p);
 shots.price.R=t=>{const foc1=eio(P(t,T.cheap-.1,T.cheap+.4)),foc2=eio(P(t,T.claude-.2,T.claude+.3));
  cards.forEach((e,i)=>{let x,y;if(V){x=W/2-120+((i%2)?175:-175);y=540+Math.floor(i/2)*390;if(i===4){x=W/2-120;y=1280}}else{x=W/2-120+(i-2)*310;y=300}
   const isP=i===1,isPr=i===2;const f=isP?foc1*(1-foc2):isPr?foc2:0;const dim=Math.max(foc1*(isP?0:1)*(1-foc2),foc2*(isPr?0:1));
   e.dataset.base=`translate(${x}px,${y}px)`;css(e,{left:0,top:0,filter:`brightness(${1-.55*dim})`,zIndex:isP||isPr?3:1,borderColor:f>.5?'var(--B)':'#2f2f2f',boxShadow:f>.5?'0 0 0 3px var(--B),0 30px 70px rgba(0,0,0,.6)':''});
   const k=back(P(t,T.catch+.05*i,T.catch+.05*i+.45));e.style.opacity=cl(P(t,T.catch+.05*i,T.catch+.05*i+.2));e.style.transform=e.dataset.base+` scale(${(.7+.3*k)*(1+.18*f)*(V?1.3:1.22)})`});
  slide(hd,t,T.catch-.1,1e9,0,-20);
  const p8p=V?{x:80,y:1600}:{x:W/2-420,y:720};css(p8,{left:p8p.x+'px',top:p8p.y+'px'});pop(p8,t,T.grokonly-.15,T.claude-.3,.5);
  const ip=V?{x:70,y:1600}:{x:W/2-640,y:730};css(inc,{left:ip.x+'px',top:ip.y+'px'});pop(inc,t,T.claude,1e9,.6);
  const ir=rectOf(inc),sk=eo(P(t,T.included,T.included+.35));css(strike,{display:t>T.included?'block':'none',left:(ir.x-8)+'px',top:(ir.y+ir.h/2-4)+'px',width:((ir.w+16)*sk)+'px'});
  const ap=V?{x:300,y:1720}:{x:W/2+120,y:740};css(api,{left:ap.x+'px',top:ap.y+'px'});pop(api,t,T.api-.15,1e9,.5);
  css(src,{left:(V?40:60)+'px',top:(H-60)+'px'});slide(src,t,T.catch+.2,1e9,0,20)}}
// ===== SHOT 6: model picker + Kimi =====
{const p=shots.model.in;
 const dd=el(`<div class="dd" style="width:${V?900:760}px;left:${V?90:140}px;top:${V?420:220}px;font-size:${V?36:32}px">
  <div class="sel"><span style="width:1.2em;height:1.2em;color:#fff">${ic('cursor')}</span>Composer 2 <span style="margin-left:auto;font-size:.7em;color:#8fb4f0">in-house</span></div>
  <div><span style="width:1.2em;height:1.2em;color:#fff">${ic('grok')}</span>Grok</div>
  <div style="color:#888">Claude · API price</div><div style="color:#888">GPT · API price</div></div>`,p);
 const eq=el(`<div class="ab big" style="font-size:${V?140:130}px;left:${V?480:1000}px;top:${V?820:250}px">=</div>`,p);
 const kimi=el(`<div class="tile" style="left:${V?430:1180}px;top:${V?1010:200}px;transform-origin:50% 50%"><span class="lg">${ic('kimi-color')}</span>Kimi 2.5</div>`,p);
 const pl=el(`<div class="PL neg" style="left:${V?50:140}px;top:${V?1360:640}px;font-size:${V?70:86}px">BUILT ON MOONSHOT'S KIMI</div>`,p);
 const src=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">Source: TechCrunch, Mar 22 2026 — Cursor: "a miss"</div>`,p);
 shots.model.R=t=>{slide(dd,t,T.composer-.3,1e9,0,40);const s=dd.querySelector('.sel');s.style.boxShadow=t>T.composer+.2?'0 0 0 3px var(--B)':'none';
  pop(eq,t,T.admitted,1e9,.3);pop(kimi,t,T.kimi-.25,1e9,.5);pop(pl,t,T.kimi+.1,1e9,.5);slide(src,t,T.kimi+.3,1e9,0,20)}}

// ===== SHOT 7: verdict =====
verdictShot(shots.verdict,TOOLS[0],{start:T.great,tierAt:T.btier,line:'GREAT EDITOR, SHAKY DEAL'});
