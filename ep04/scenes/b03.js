// ===== BLOCK 03: GitHub Copilot -> B =====
setAccent('#B9A2FF');
const T={gh:at('GitHub'),token:at('token'),one:at('one'),proj:at('projected'),from:at('from'),n39:at('thirty-nine'),n847:at('eight'),since:at('Since'),june:at('June'),every:at('every'),credits1:at('Credits'),cent:at('cent'),billed:at('billed'),pro:at('Pro',1,true),fifteen:at('fifteen'),proplus:at('Plus'),max:at('Max'),auto:at('Autocomplete'),free:at('free'),chat:at('Chat'),eat:at('eat'),upside:at('upside'),works:at('works'),vs:at('V',1,true),jb:at('JetBrains'),ecl:at('Eclipse'),xc:at('Xcode'),even:at('even'),ghi:at('GitHub',2),cheapest:at('cheapest'),cheap2:at('Cheapest',2),btier:at('B',1,true)};
makeShots([['hook',0,T.since-.3],['log',T.since-.3,T.pro-.3],['plans',T.pro-.3,T.auto-.3],['split',T.auto-.3,T.upside-.2],['ides',T.upside-.2,T.cheap2-.3],['verdict',T.cheap2-.3,END+1]],{log:'slideL',plans:'zoom',split:'pushUp',ides:'slideL',verdict:'zoom'});
// hook: $39 -> $847
{const p=shots.hook.in;
 const kick=el(`<div class="ab kick" style="left:0;right:0;text-align:center;top:${V?380:150}px;font-size:${V?36:32}px">GITHUB COPILOT · TOKEN BILLING</div>`,p);
 const lg=el(`<div class="ab" style="left:${W/2-60}px;top:${V?450:210}px;width:120px;height:120px;color:#fff">${ic('githubcopilot')}</div>`,p);
 const a=el(`<div class="ab big" style="font-size:${V?200:220}px;left:${V?W/2-200:300}px;top:${V?700:420}px">$39</div>`,p);
 const ar=el(`<div class="ab big" style="font-size:${V?140:160}px;left:${V?W/2-60:W/2-90}px;top:${V?930:440}px">${V?'↓':'→'}</div>`,p);
 const b=el(`<div class="PL neg" style="font-size:${V?240:240}px;left:${V?W/2-330:W/2+180}px;top:${V?1110:380}px">$847</div>`,p);
 const note=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">One Reddit user's projection · via The New Stack, Jun 2 2026</div>`,p);
 shots.hook.R=t=>{slide(kick,t,T.gh-.1,1e9,0,-20);pop(lg,t,T.gh);pop(a,t,T.n39-.2,1e9,.5);slide(ar,t,T.n39+.3,1e9,V?0:-40,V?-40:0);pop(b,t,T.n847-.2,1e9,.3);slide(note,t,T.proj,1e9,0,20)}}
// changelog page
{const p=shots.log.in,o=shots.log.ov;const ww=V?1000:1500,hh=V?820:600;
 el(`<div class="win chrome" style="left:${(W-ww)/2}px;top:${V?380:150}px;width:${ww}px;height:${hh}px">
  <div class="tb"><span class="lg">${ic('github')}</span>GitHub Changelog<div class="dots"><span>—</span><span>☐</span><span>✕</span></div></div>
  <div class="url"><span>github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans</span></div>
  <div class="page" style="padding:40px 50px;font:20px/1.6 Inter;color:#1f2328">
   <div style="font:600 16px Inter;color:#59636e">JUNE 1, 2026 · COPILOT</div>
   <div style="font:800 ${V?48:46}px/1.15 Inter;margin:12px 0 18px">Updates to GitHub Copilot billing and plans</div>
   <div>All Copilot plans now use <b id="aic" style="padding:0 4px;border-radius:5px">GitHub AI Credits</b>, billed by tokens.</div>
   <div style="margin-top:10px;color:#59636e">New sign-ups for Pro, Pro+ and Max are paused.</div></div></div>`,p);
 const coin=el(`<div class="PL" style="left:${V?60:1000}px;top:${V?1300:800}px;font-size:${V?100:96}px">1 CREDIT = 1¢</div>`,o);
 const src=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">Source: GitHub changelog, Jun 1 2026</div>`,o);
 shots.log.R=t=>{const k=P(t,T.credits1-.1,T.credits1+.4);document.getElementById('aic').style.background=`linear-gradient(90deg,rgba(255,217,92,.85) ${k*100}%,transparent ${k*100}%)`;
  pop(coin,t,T.cent-.1,1e9,.5);slide(src,t,T.since,1e9,0,20);shots.log.in.style.transform=`scale(${1+.1*eio(P(t,T.since,T.pro))})`}}
// plans
{const p=shots.plans.in;const pl=[['Pro','$10','1,500 credits',T.pro],['Pro+','$39','7,000 credits',T.proplus],['Max','$100','20,000 credits',T.max]];
 const cards=pl.map(([n,pr,c])=>el(`<div class="pc" style="width:${V?330:300}px;height:${V?330:320}px"><span class="lgc">${ic('githubcopilot')}</span><b>${n}${n==='Max'?' <span style="font:800 13px Inter;background:var(--neg);color:#fff;padding:2px 6px;border-radius:5px;vertical-align:middle">NEW</span>':''}</b><div class="p">${pr}<small>/mo</small></div><li style="font:700 20px Inter;color:#fff">${c}</li></div>`,p));
 const hd=el(`<div class="ab kick" style="left:0;right:0;text-align:center;top:${V?380:150}px">COPILOT PLANS · NOV 2026</div>`,p);
 const src=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">Source: docs.github.com, Nov 2026</div>`,p);
 shots.plans.R=t=>{cards.forEach((e,i)=>{const x=V?W/2-165:W/2-150+(i-1)*360,y=V?470+i*400:330;e.dataset.base=`translate(${x}px,${y}px)`;css(e,{left:0,top:0});
  const a=pl[i][3],f=P(t,a,a+.3)*(i<2?1-P(t,pl[i+1][3],pl[i+1][3]+.3):1);css(e,{borderColor:f>.5?'var(--B)':'#2f2f2f'});pop(e,t,a-.2,1e9,.5)});slide(hd,t,T.pro-.3,1e9,0,-20);slide(src,t,T.pro,1e9,0,20)}}
// split: autocomplete free vs chat/agents eat credits
{const p=shots.split.in;
 const L=el(`<div class="ab" style="left:${V?60:120}px;top:${V?380:200}px;width:${V?960:780}px;height:${V?560:620}px;border-radius:24px;background:rgba(168,232,106,.12);border:3px solid var(--C);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px">
   <div style="font:900 ${V?60:56}px Inter;color:#fff">AUTOCOMPLETE</div><div class="PL" style="position:relative;background:var(--C);font-size:${V?110:110}px">FREE</div></div>`,p);
 const Rr=el(`<div class="ab" style="left:${V?60:1020}px;top:${V?1000:200}px;width:${V?960:780}px;height:${V?560:620}px;border-radius:24px;background:rgba(255,77,77,.12);border:3px solid var(--neg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px">
   <div style="font:900 ${V?60:56}px Inter;color:#fff">CHAT &amp; AGENTS</div><div style="width:70%;height:34px;border-radius:17px;background:#2a2c31;overflow:hidden"><i id="mt" style="display:block;height:100%;background:var(--neg)"></i></div><div style="font:800 34px Inter;color:#ffb3b3">eat credits</div></div>`,p);
 shots.split.R=t=>{slide(L,t,T.auto-.2,1e9,-60,0);slide(Rr,t,T.chat-.3,1e9,60,0);document.getElementById('mt').style.width=(100-85*eio(P(t,T.eat-.2,T.upside)))+'%'}}
// works everywhere
{const p=shots.ides.in;const ides=[['','VS Code',T.vs],['jetbrains','JetBrains',T.jb],['eclipseide','Eclipse',T.ecl],['xcode','Xcode',T.xc],['github','GitHub',T.ghi]];
 const tiles=ides.map(([k,n])=>el(`<div class="tile" style="width:${V?280:250}px;height:${V?200:220}px">${k?`<span class="lg" style="width:80px;height:80px">${ic(k)}</span>`:'<span style="font:900 64px Inter">{ }</span>'}${n}</div>`,p));
 const hd=el(`<div class="ab big" style="font-size:${V?100:100}px;left:${V?60:150}px;top:${V?370:120}px">WORKS ALMOST EVERYWHERE</div>`,p);if(V)hd.style.width='960px';
 const pl=el(`<div class="PL" style="font-size:${V?100:100}px;left:${V?60:W/2-430}px;top:${V?1620:800}px">CHEAPEST WAY IN</div>`,p);
 shots.ides.R=t=>{tiles.forEach((e,i)=>{const x=V?W/2-290+(i%2)*300:W/2-660+i*265,y=V?620+Math.floor(i/2)*230:420;if(V&&i===4)e.dataset.base=`translate(${W/2-140}px,${y}px)`;else e.dataset.base=`translate(${x}px,${y}px)`;css(e,{left:0,top:0});pop(e,t,ides[i][2]-.15,1e9,.4)});
  slide(hd,t,T.works-.3,1e9,0,40);pop(pl,t,T.cheapest-.1,1e9,.5)}}
// verdict B
verdictShot(shots.verdict,TOOLS[2],{start:T.cheap2,tierAt:T.btier,line:'CHEAPEST ENTRY, LEAST PREDICTABLE BILL',lineFs:V?48:58});
