// ===== INTRO (long video only): 8 tools, two scandals, S tier hidden =====
setAccent('#FFD95C');
const T={eight:at('Eight'),tools:at('tools'),one1:at('One',1),rocket:at('rocket'),one2:at('One',2),google:at('Google'),only:at('only'),stier:at('S',1,true),here:at('Here'),list:at('list')};
END=VOICE_END+1.0;
makeShots([['grid',0,T.one1-.2],['rocket',T.one1-.2,T.one2-.2],['off',T.one2-.2,T.only-.25],['board',T.only-.25,END+1]],{rocket:'slideL',off:'slideL',board:'zoom'});
// shot 1: eight tiles
{const p=shots.grid.in;const tiles=TOOLS.map(tl=>el(`<div class="tile"><span class="lg">${ic(tl.logo)}</span>${tl.name}</div>`,p));
 const hd=el(`<div class="PL" style="font-size:${V?110:120}px;left:${V?70:W/2-470}px;top:${V?1500:840}px">8 AI CODING TOOLS</div>`,p);
 shots.grid.R=t=>{tiles.forEach((e,i)=>{const c=V?2:4,x=V?W/2-235+(i%c)*250:W/2-490+(i%c)*250,y=V?300+Math.floor(i/c)*250:150+Math.floor(i/c)*260;
  e.dataset.base=`translate(${x}px,${y}px)`;css(e,{left:0,top:0});pop(e,t,T.eight+.12*i,1e9,.3)});pop(hd,t,T.tools-.3,1e9,.5)}}
// shot 2: Cursor + SpaceX
{const p=shots.rocket.in;
 const a=el(`<div class="tile" style="left:${V?W/2-165:W/2-560}px;top:${V?360:160}px;width:330px;height:330px;font-size:38px"><span class="lg" style="width:150px;height:150px">${ic('cursor')}</span>Cursor</div>`,p);
 const x=el(`<div class="ab big" style="font-size:120px;left:${V?W/2-40:W/2-160}px;top:${V?700:240}px">→</div>`,p);
 const b=el(`<div class="ab" style="left:${V?W/2-220:W/2+40}px;top:${V?760:100}px;width:440px;height:440px;color:#fff">${ic('spacex')}</div>`,p);
 const pl=el(`<div class="PL neg" style="font-size:${V?96:110}px;left:${V?60:W/2-640}px;top:${V?1250:640}px">BOUGHT BY A ROCKET COMPANY</div>`,p);
 if(V)pl.style.whiteSpace='normal',pl.style.width='960px',pl.style.lineHeight='1.05';
 shots.rocket.R=t=>{pop(a,t,T.one1-.1);slide(x,t,T.one1+.3,1e9,-60,0);slide(b,t,T.rocket-.2,1e9,80,0);pop(pl,t,T.rocket,1e9,.5)}}
// shot 3: Gemini switched off
{const p=shots.off.in;
 const a=el(`<div class="tile" style="left:${W/2-165}px;top:${V?420:120}px;width:330px;height:330px;font-size:38px"><span class="lg" style="width:150px;height:150px">${ic('gemini-color')}</span>Gemini CLI</div>`,p);
 const pw=el(`<div class="ab" style="left:${W/2+110}px;top:${V?370:80}px;width:140px;height:140px;border-radius:50%;background:var(--neg);display:flex;align-items:center;justify-content:center;font:900 70px Inter;color:#fff;box-shadow:0 20px 50px rgba(0,0,0,.5)">⏻</div>`,p);
 const pl=el(`<div class="PL" style="font-size:${V?100:120}px;left:${V?60:W/2-620}px;top:${V?1000:560}px">SWITCHED OFF BY GOOGLE</div>`,p);
 if(V)pl.style.whiteSpace='normal',pl.style.width='960px',pl.style.lineHeight='1.05';
 shots.off.R=t=>{pop(a,t,T.one2-.1);const g=P(t,T.google-.2,T.google+.3);a.style.filter=`grayscale(${g}) brightness(${1-.4*g})`;pop(pw,t,T.google-.2,1e9,.2);pop(pl,t,T.google,1e9,.5)}}
// shot 4: board with blurred cards, S hidden
{const p=shots.board.in;const geo=V?{bx:40,by:300,bw:1000,bh:1200}:{bx:300,by:70,bw:1320,bh:820};const B=makeBoard(p,geo);
 const counts={S:0,A:0,B:0,C:0,F:0};const cards=TOOLS.filter(tl=>tl.tier!=='S').map(tl=>{const s=B.slot(tl.tier,counts[tl.tier]++);return el(cardHTML(tl,`style="left:${s.x}px;top:${s.y}px;filter:blur(14px) brightness(.7)"`),p)});
 const s0=B.slot('S',0);const q=el(`<div class="card" style="left:${s0.x}px;top:${s0.y}px;background:#2a2c31;font:900 90px Inter;color:#fff">?</div>`,p);
 const pl=el(`<div class="PL neg" style="font-size:${V?96:84}px;left:${V?60:330}px;top:${V?1560:930}px">ONLY ONE MADE S TIER</div>`,p);
 const t2=el(`<div class="PL" style="font-size:${V?70:64}px;left:${V?60:1050}px;top:${V?1720:940}px">2026 TIER LIST</div>`,p);
 shots.board.R=t=>{cards.forEach((e,i)=>{e.style.opacity=cl(P(t,T.only-.2+.06*i,T.only+.1+.06*i))});pop(q,t,T.stier-.3,1e9,.3);q.style.boxShadow=`0 0 0 3px var(--S),0 0 ${30+20*Math.sin(t*6)}px rgba(255,107,107,.6)`;
  pop(pl,t,T.only,T.here-.2,.5);pop(t2,t,T.here,1e9,.5);p.style.transform=`scale(${1+.04*eio(P(t,T.only,END))})`}}
