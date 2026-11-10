// ===== FINALE (long video only): the whole board; each tier lights up and its cards turn into their block styles; comments, subscribe, Telegram =====
setAccent('#E8C46A');
const T={board:at('board'),s:at('S',1,true),a:at('A',1,true),b:at('B',1,true),c:at('C',1,true),f:at('F',1,true),disagree:at('Disagree'),tell:at('Tell'),comments:at('comments'),belongs:at('belongs'),every:at('Every'),test:at('test'),money:at('money'),subscribe:at('Subscribe'),helps:at('helps'),free:at('free'),guide:at('guide'),local:at('local'),telegram:at('Telegram')};
END=VOICE_END+6;   // ~10 s after "subscribe" for the YouTube end screen (right half stays clear)
makeShots([['board',0,T.disagree-.3],['talk',T.disagree-.3,END+1]],{talk:'push'});
el(`<style>.swc{position:absolute;inset:0;border-radius:12px;overflow:hidden;opacity:0}</style>`,document.head);

// ===== 1. THE BOARD: rows light up in the order the voice reads them =====
{const s=shots.board;
 const geo=V?{x:60,y:620,w:960,h:1060}:{x:720,y:120,w:1120,h:840};const B=makeBoard(s.L1,geo);
 const counts={S:0,A:0,B:0,C:0,F:0};
 const cards=TOOLS.map(tl=>{const p=B.slot(tl.tier,counts[tl.tier]++);const e=el(cardHTML(tl,`style="left:${p.x}px;top:${p.y}px"`),B.board);
  const sw=el(`<div class="swc">${swatchHTML(tl,150,150)}</div>`,e);sw.firstChild.style.boxShadow='none';sw.querySelectorAll('span')[1].style.fontSize='19px';return{e,sw,tier:tl.tier}});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:200}px">The 2026 tier list</div>`,s.L1);
 const hl=headline(s.L1,["So here's","the [[board.]]"],{x:V?60:120,y:V?210:250,fs:V?130:92,lh:1.06});
 const crit=el(`<div class="ab kick" style="left:${V?60:124}px;top:${V?500:520}px;font-size:${V?24:20}px;color:var(--mute);text-transform:none;line-height:1.7">How I rank:<br>usefulness · price ·<br>stability · trust</div>`,s.L1);
 const at_={S:T.s,A:T.a,B:T.b,C:T.c,F:T.f},order=['S','A','B','C','F'];
 s.R=t=>{rise(kick,t,0,1e9,14);revealLines(hl,t,[0,T.board-.4]);sweep(hl.querySelector('.mk'),t,T.board);rise(crit,t,T.board+.2,1e9,12);B.ob.style.opacity=cl(P(t,0,.5));
  const cur=order.filter(k=>t>=at_[k]-.1).pop();
  order.forEach(k=>{const a=at_[k];const f=P(t,a,a+.15)*(1-P(t,a+.15,a+1.1));B.rows[k].el.querySelector('.flash').style.background=`rgba(${TRGB[k]},${.5*f})`});
  cards.forEach(({e,sw,tier})=>{const a=at_[tier],on=t>=a-.1;rise(e,t,.2+.05*TOOLS.findIndex(x=>x.tier===tier),1e9,20,.5);
   sw.style.opacity=cl(P(t,a,a+.35));e.style.filter=cur&&!on?'brightness(.45)':'';e.style.transform=(e.style.transform||'')+(cur===tier?' scale(1.06)':'')});
  s.cam.z=.03*eio(P(t,0,T.disagree))}}

// ===== 2. TALK TO ME: comments, subscribe for value, Telegram guide (right half kept clear for the end screen) =====
{const s=shots.talk;
 const bg=el(`<div class="ab" style="left:${V?60:980}px;top:${V?900:120}px;width:${V?960:860}px;height:${V?720:820}px;border-radius:16px;background:#121315;border:1px solid rgba(236,232,225,.08);filter:blur(10px);opacity:.35"></div>`,s.L0);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?160:140}px">Disagree?</div>`,s.L1);
 const hl=headline(s.L1,['Where does','[[your tool]] belong?'],{x:V?60:120,y:V?210:190,fs:V?100:84,lh:1.08});
 const box=el(`<div class="ab" style="left:${V?60:120}px;top:${V?470:420}px;width:${V?960:800}px;padding:22px 26px;border-radius:14px;background:#17181b;border:1px solid #2c2d31;font:500 ${V?32:30}px Inter;color:#ECE8E1"><span class="cm" style="color:#7b7a76">Add a comment…</span><i class="cur" style="display:inline-block;width:2px;height:1.1em;background:#ECE8E1;vertical-align:middle;margin-left:2px"></i></div>`,s.L1);
 const cm=box.querySelector('.cm'),cur=box.querySelector('.cur');const typed='My tool belongs in ___ tier, because…';
 const sub=el(`<div class="ab" style="left:${V?60:120}px;top:${V?170:170}px;width:${V?960:900}px">
   <div class="ab kick" style="position:relative;color:var(--mute)">Every week</div>
   <div style="font:700 ${V?60:64}px/1.08 'TeX Gyre Heros Cn';text-transform:uppercase;color:#ECE8E1;margin-top:10px">I test AI coding tools so you<br>don't pay for the wrong one.</div>
   <div class="sb" style="display:inline-flex;align-items:center;gap:12px;margin-top:22px;padding:16px 32px;border-radius:40px;background:#ECE8E1;color:#0D0E10;font:700 ${V?32:30}px Inter">Subscribe</div></div>`,s.L1);
 const tg=el(`<div class="ab" style="left:${V?60:120}px;top:${V?640:600}px;display:flex;align-items:center;gap:26px">
   <img src="../assets/qr_card.png" style="width:${V?260:250}px;height:auto;border-radius:16px">
   <div style="font:500 ${V?28:24}px/1.5 Inter;color:#ECE8E1;width:${V?600:520}px"><div class="kick" style="color:var(--mute)">Free guide · Telegram</div><b style="font:700 ${V?40:34}px/1.15 'TeX Gyre Heros Cn';text-transform:uppercase">Claude Code on a local model</b><div style="color:#9C978E;margin-top:6px">t.me/violet_ina</div></div></div>`,s.L1);
 const sb=sub.querySelector('.sb');
 s.R=t=>{rise(kick,t,T.disagree-.2,1e9,14);revealLines(hl,t,[T.tell-.2,T.belongs-.6]);sweep(hl.querySelector('.mk'),t,T.belongs-.3);rise(box,t,T.tell,1e9,16);fadeIn(bg,t,T.disagree,1e9,.5);
  const n=Math.floor(typed.length*P(t,T.comments,T.belongs+.6));cm.textContent=n?typed.slice(0,n):'Add a comment…';cm.style.color=n?'#ECE8E1':'#7b7a76';cur.style.opacity=Math.floor(t*2.4)%2?1:0;
  const hide=P(t,T.every-.3,T.every);box.style.opacity=Math.min(+box.style.opacity,1-hide);hl.style.opacity=1-hide;kick.style.opacity=Math.min(+kick.style.opacity,1-hide);
  rise(sub,t,T.every-.1,1e9,20,.6);const pk=P(t,T.subscribe,T.subscribe+.5);sb.style.transform=`scale(${1+.08*Math.sin(pk*Math.PI)})`;sb.style.background=t>T.subscribe?'#FF5A36':'#ECE8E1';sb.style.color=t>T.subscribe?'#fff':'#0D0E10';
  rise(tg,t,T.free-.2,1e9,20,.6);s.cam.z=.02*eio(P(t,T.disagree,END))}}
