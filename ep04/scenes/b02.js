// ===== BLOCK 02: Gemini CLI -> F =====
setAccent('#8AB4F8');
const T={google:at('Google'),switched:at('switched'),best:at('best'),even:at('even'),ultra:at('Ultra'),y2025:at('twenty-five'),gemini:at('Gemini'),champ:at('champion'),thousand:at('thousand'),day:at('day'),open:at('open'),stars:at('stars'),then:at('Then'),june:at('June'),cut:at('cut'),free2:at('free',3),over:at('over'),pro:at('Pro',1,true),ultra2:at('Ultra',2),repl:at('replacement'),anti:at('Antigravity'),closed:at('closed'),users:at('users',2),quota:at('quota'),runs:at('runs'),youcant:at('You'),use:at('use'),ftier:at('F',1,true)};
makeShots([['hook',0,T.y2025-.4],['repo',T.y2025-.4,T.then-.25],['cut',T.then-.25,T.repl-.3],['anti',T.repl-.3,T.youcant-.3],['verdict',T.youcant-.3,END+1]],{repo:'slideL',cut:'zoom',anti:'pushUp',verdict:'zoom'});
// hook
{const p=shots.hook.in;
 const lg=el(`<div class="ab" style="left:${V?70:150}px;top:${V?420:180}px;width:${V?150:130}px;height:${V?150:130}px">${ic('gemini-color')}</div>`,p);
 const w1=el(`<div class="ab big" style="left:${V?70:310}px;top:${V?600:185}px;font-size:${V?120:140}px">GOOGLE</div>`,p);
 const w2=el(`<div class="PL neg" style="left:${V?60:140}px;top:${V?760:390}px;font-size:${V?140:170}px">SWITCHED OFF</div>`,p);
 const w3=el(`<div class="ab kick" style="left:${V?70:150}px;top:${V?950:600}px;font-size:${V?42:40}px">ITS BEST FREE CODING AGENT</div>`,p);
 const w4=el(`<div class="PL" style="left:${V?60:520}px;top:${V?1120:700}px;font-size:${V?96:110}px">EVEN FOR ULTRA</div>`,p);
 shots.hook.R=t=>{pop(lg,t,T.google-.2);slide(w1,t,T.google-.1,1e9,0,40);pop(w2,t,T.switched,1e9,.4);slide(w3,t,T.best-.1,1e9,-40,0);pop(w4,t,T.even,1e9,.4)}}
// repo page
{const p=shots.repo.in,o=shots.repo.ov;const ww=V?1000:1500,hh=V?900:660;
 el(`<div class="win chrome" style="left:${(W-ww)/2}px;top:${V?380:150}px;width:${ww}px;height:${hh}px">
  <div class="tb"><span class="lg">${ic('github')}</span>google-gemini/gemini-cli<div class="dots"><span>—</span><span>☐</span><span>✕</span></div></div>
  <div class="url"><span>github.com/google-gemini/gemini-cli</span></div>
  <div class="page" style="background:#0d1117;color:#e6edf3;padding:30px 40px;font:18px/1.6 Inter">
   <div style="display:flex;align-items:center;gap:14px;font:700 30px Inter"><span style="width:34px;height:34px;color:#e6edf3">${ic('github')}</span>google-gemini / <b>gemini-cli</b>
    <span style="margin-left:14px;font:600 15px Inter;border:1px solid #30363d;border-radius:20px;padding:2px 10px;color:#8b949e">Public</span></div>
   <div style="display:flex;gap:14px;margin-top:22px">
    <div id="star" style="border:1px solid #30363d;border-radius:8px;padding:8px 16px;font:700 22px Inter">★ Star <span id="sn" style="background:#30363d;border-radius:12px;padding:0 12px;margin-left:8px">0</span></div>
    <div id="lic" style="border:1px solid #30363d;border-radius:8px;padding:8px 16px;font:600 22px Inter">⚖ Apache-2.0 · open source</div></div>
   <div style="margin-top:28px;border:1px solid #30363d;border-radius:10px;padding:22px 26px">
    <div style="font:800 34px Inter">Gemini CLI</div>
    <div style="margin-top:10px;color:#8b949e">An open-source AI agent that brings Gemini directly into your terminal.</div>
    <div id="free" style="margin-top:18px;display:inline-block;font:700 24px Inter;padding:6px 12px;border-radius:8px">🆓 Free tier: 1,000 requests / day</div></div></div></div>`,p);
 const pl=el(`<div class="PL" style="left:${V?60:140}px;top:${V?1380:840}px;font-size:${V?96:96}px">2025: FREE CHAMPION</div>`,o);
 const src=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">Source: github.com/google-gemini/gemini-cli</div>`,o);
 shots.repo.R=t=>{const n=Math.round(107*eio(P(t,T.over,T.stars+.3)));document.getElementById('sn').textContent=n?n+'k':'0';
  const hl=(id,a)=>document.getElementById(id).style.boxShadow=t>a?'0 0 0 3px var(--B)':'none';hl('free',T.thousand-.1);hl('lic',T.open-.1);hl('star',T.stars-.6);
  pop(pl,t,T.champ-.2,1e9,.5);slide(src,t,T.gemini,1e9,0,20);shots.repo.in.style.transform=`scale(${1+.08*eio(P(t,T.gemini,T.then))})`}}
// cut-off: date + three plans crossed out
{const p=shots.cut.in;
 const date=el(`<div class="PL neg" style="left:${V?60:W/2-430}px;top:${V?400:130}px;font-size:${V?110:120}px">JUNE 2026</div>`,p);
 const chips=[['FREE',T.free2],['AI PRO',T.pro],['ULTRA',T.ultra2]].map(([n,a],i)=>{const e=el(`<div class="tile" style="width:${V?300:300}px;height:${V?160:180}px;border-radius:28px;font:900 ${V?52:56}px Inter">${n}</div>`,p);return{e,a,i}});
 const strikes=chips.map(()=>el('<div class="strike"></div>',p));
 const sub=el(`<div class="ab kick" style="left:0;right:0;text-align:center;top:${V?1500:780}px;font-size:${V?40:34}px">GEMINI CLI ACCESS ENDED</div>`,p);
 const src=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">Source: The Register, May 20 2026</div>`,p);
 shots.cut.R=t=>{pop(date,t,T.june-.2,1e9,.5);chips.forEach(({e,a,i},j)=>{const x=V?W/2-150:W/2-490+i*340,y=V?620+i*260:400;css(e,{left:x+'px',top:y+'px'});pop(e,t,T.cut+.1*i,1e9,.5);
   const g=P(t,a,a+.3);e.style.filter=`grayscale(${g}) brightness(${1-.45*g})`;const r=rectOf(e),s=strikes[j],k=eo(P(t,a,a+.35));css(s,{display:t>a?'block':'none',left:(r.x-10)+'px',top:(r.y+r.h/2-4)+'px',width:((r.w+20)*k)+'px',transform:'rotate(-8deg)',transformOrigin:'0 50%'})});
  slide(sub,t,T.cut,1e9,0,30);slide(src,t,T.then,1e9,0,20)}}
// Antigravity: closed source + quota error
{const p=shots.anti.in;
 const tile=el(`<div class="tile" style="left:${V?W/2-110:200}px;top:${V?360:200}px"><span class="lg">${ic('antigravity-color')}</span>Antigravity CLI</div>`,p);
 const lock=el(`<div class="PL neg" style="left:${V?60:120}px;top:${V?620:470}px;font-size:${V?96:80}px">🔒 CLOSED SOURCE</div>`,p);
 const tw=V?980:1000,tx=V?50:780,ty=V?820:180;
 el(`<div class="win" style="left:${tx}px;top:${ty}px;width:${tw}px;height:${V?560:560}px;background:#0c0c10">
  <div class="tb">agy — terminal</div>
  <div style="padding:24px 26px;font:${V?26:24}px/1.7 'DejaVu Sans Mono',monospace;color:#d4d4d4;white-space:pre"><span style="color:#7ee787">$</span> agy "add tests to auth"
<span style="color:#8b949e">● reading 14 files…</span>
<span style="color:#8b949e">● planning…</span>
<span id="qe" style="color:#ff6b6b;font-weight:700">✖ Weekly quota exceeded.
  Resets in 6 days.</span></div></div>`,p);
 const qq=el(`<div class="PL" style="left:${V?60:780}px;top:${V?1440:780}px;font-size:${V?70:66}px">"AFTER A COUPLE OF REQUESTS"</div>`,p);
 const src=el(`<div class="src" style="left:${V?40:60}px;top:${H-60}px">Source: The Register, May 20 2026 — user reports</div>`,p);
 shots.anti.R=t=>{pop(tile,t,T.anti-.2);pop(lock,t,T.closed-.1,1e9,.5);const q=document.getElementById('qe');q.style.opacity=cl(P(t,T.runs-.1,T.runs+.2));pop(qq,t,T.quota,1e9,.5);slide(src,t,T.users,1e9,0,20)}}
// verdict F
verdictShot(shots.verdict,TOOLS[1],{start:T.youcant,tierAt:T.ftier,line:"YOU CAN'T RANK WHAT YOU CAN'T USE",lineFs:V?56:64});
