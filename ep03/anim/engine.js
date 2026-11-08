// ===== EP03 animation engine: approved storyboard frames = end states of living shots =====
const $=id=>document.getElementById(id);
const P=(t,a,b)=>t<=a?0:t>=b?1:(t-a)/(b-a), lerp=(a,b,k)=>a+(b-a)*k;
const E={io:k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,o:k=>1-Math.pow(1-k,3),s:k=>k*k*(3-2*k),b:k=>{const c=1.4;return 1+(c+1)*Math.pow(k-1,3)+c*Math.pow(k-1,2)}};
const ts=s=>{const m=s.match(/(\d+):(\d+),(\d)/);return +m[1]*60+ +m[2]+ +m[3]/10};
const T_START=17.2, T_END=429.8, XF=0.6;
const SH=ALL.map(f=>({...f,st:ts(f.t)})).sort((a,b)=>a.st-b.st);
SH.forEach((s,i)=>{s.en=i+1<SH.length?SH[i+1].st:T_END;s.dur=s.en-s.st;s.idx=i});
// DOM
document.getElementById('frames').innerHTML=`<div class="S" id="S" style="background:#0A0E18">${SH.map(f=>`<div class="ab shot" id="sh_${f.id}" style="left:0;top:0;width:1920px;height:1080px;display:none;overflow:hidden">
 <div class="ab cam" style="left:0;top:0;width:1920px;height:1080px;transform-origin:0 0">${f.sc}</div>
 <svg class="ab dots" style="left:0;top:0;z-index:8" width="1920" height="1080"></svg><div class="hl" style="display:none;z-index:9"></div>
 ${f.plate?`<div class="ab plate" style="left:${f.plate.x}px;top:${f.plate.y}px;z-index:10"><div class="H" style="font-size:${f.plate.size}px;line-height:1.02"><span class="PL">${f.plate.txt}</span></div></div>`:''}</div>`).join('')}</div>`;
const isExpl=f=>/rgba\(9,16,36/.test(f.sc);
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
// per-shot setup
const TRN=['swap','zoom','slide'];let lastT='';
const ANIMS=['up','mask','scale','left'];
SH.forEach((f,i)=>{
 const el=$('sh_'+f.id);f.el=el;f.cam=el.querySelector('.cam');f.camEnd=f.cam?f.cam:null;
 const c=f.cam?f.cam:null;f.C=f.camE=(f.cam&&f.cam.style&&false)||null;
 f.CE=f.camKey=(f.cam&&null);f.ce=(f.camObj=f.camObj||null);
 const ce=ALL.find(x=>x.id===f.id).cam||{x:960,y:540,s:1};f.c1=ce;
 const wide={x:960,y:540,s:1};f.c0={x:lerp(ce.x,wide.x,.35),y:lerp(ce.y,wide.y,.35),s:lerp(ce.s,wide.s,.35)*(ce.s>1.02?1:1.035)};
 f.tr=isExpl(f)?'scrim':(()=>{let t=TRN[i%3];if(t===lastT)t=TRN[(i+1)%3];return t})();lastT=f.tr;f.anim=ANIMS[i%4];
 // key time: plate words in voice, else 50%
 let th=f.st+.5*f.dur;if(f.plate){const pw=f.plate.txt.split(/\s+/).map(norm).filter(w=>w.length>2&&!['the','and','you','your'].includes(w));for(const [t,w] of WORDS){if(t>=f.st-.2&&t<f.en-.6&&pw.includes(norm(w))){th=t;break}}}
 f.th=Math.max(f.st+1.0,Math.min(th,f.en-1.4));
});
// element inventories (after layout)
function texts(f,sel){return [...f.el.querySelectorAll(sel)].map(e=>(e.textContent||"").slice(0,60))}
SH.forEach((f,i)=>{const prev=i?SH[i-1]:null;
 const prevWin=prev?texts(prev,'.win'):[],prevAb=prev?texts(prev,'.cam > .ab'):[],prevPre=prev?[...prev.el.querySelectorAll('pre')].map(p=>p.innerText.split('\n')):[];
 f.wins=[...f.el.querySelectorAll('.cam > .win')].filter(w=>!/blur/.test(w.getAttribute('style')||'')).map((w,k)=>({e:w,k,old:prevWin.includes((w.textContent||"").slice(0,60))}));
 f.abs=[...f.el.querySelectorAll('.cam > .ab')].filter(a=>a.tagName!=='IMG'&&!a.classList.contains('tbar')&&!/rgba\(9,16,36/.test(a.getAttribute('style')||'')).map((a,k)=>({e:a,k,old:prevAb.includes((a.textContent||"").slice(0,60))}));
 f.pres=[...f.el.querySelectorAll('.cam pre')].filter(p=>!/blur/.test((p.closest('.win')||{getAttribute:()=>''}).getAttribute('style')||'')).map(p=>{const L=p.innerText.split('\n');let c=0;for(const q of prevPre){let k=0;while(k<L.length&&k<q.length&&L[k]===q[k])k++;c=Math.max(c,k)}return{e:p,L:L.length,c}});
 f.wires=[...f.el.querySelectorAll('.cam > svg path')].map(p=>{let l=1000;try{l=p.getTotalLength()}catch(e){}return{e:p,l}});
 f.curs=[...f.el.querySelectorAll('.cam .cur')];
 f.pages=[...f.el.querySelectorAll('.cam .cr-page, .cam .lm-body, .cam .vs-cc')].filter(p=>{const w=p.closest('.win');return w&&!/blur/.test(w.getAttribute('style')||'')&&!prevWin.includes((w.textContent||'').slice(0,60))}).map(p=>[...p.querySelectorAll(':scope > div > div, :scope > div > h1, :scope > div > p, :scope > div > h2, :scope > div > pre, :scope > div > table')].slice(0,14));
 f.hlT=f.c1&&ALL.find(x=>x.id===f.id).hl;
});
// helpers
function camAt(f,u){const k=E.io(P(u,0,Math.min(2.2,.45*f.dur)));const d=1+.018*P(u,0,f.dur);const c0=f.c0,c1=f.c1;return{x:lerp(c0.x,c1.x,k),y:lerp(c0.y,c1.y,k),s:lerp(c0.s,c1.s,k)*d}}
function setCam(f,c,extra=''){f.cam.style.transform=`translate(${960-c.x*c.s}px,${540-c.y*c.s}px) scale(${c.s})`}
function DOTS(a,b,k){let h='';const n=Math.round(36*k);for(let i=0;i<=n;i++){const u=i/36;const x=(1-u)**3*a[0]+3*(1-u)**2*u*a[0]+3*(1-u)*u*u*b[0]+u**3*b[0];const y=(1-u)**3*a[1]+3*(1-u)**2*u*((a[1]+b[1])/2)+3*(1-u)*u*u*b[1]+u**3*b[1];h+=`<circle cx="${x}" cy="${y}" r="3" fill="#FFE600"/>`}return h}
function anim(e,k,type){if(k>=1){e.style.opacity='';e.style.transform='';e.style.clipPath='';return}
 if(k<=0){e.style.opacity=0;return}const o=E.o(k);
 if(type==='up'){e.style.opacity=o;e.style.transform=`translateY(${(1-o)*26}px)`}
 else if(type==='mask'){e.style.opacity=1;e.style.clipPath=`inset(0 ${100-o*100}% 0 0)`}
 else if(type==='scale'){e.style.opacity=o;e.style.transform=`scale(${.86+.14*E.b(k)})`;e.style.transformOrigin='50% 50%'}
 else{e.style.opacity=o;e.style.transform=`translateX(${(1-o)*-40}px)`}}
function shotState(f,t){const u=t-f.st;
 setCam(f,camAt(f,u));
 // windows open (Windows-style) if new
 f.wins.forEach(w=>{if(w.old){w.e.style.opacity='';w.e.style.transform='';return}const k=E.o(P(u,.05+w.k*.14,.5+w.k*.14));w.e.style.opacity=k;w.e.style.transform=`translateY(${(1-k)*22}px) scale(${.955+.045*k})`;w.e.style.transformOrigin='50% 60%'});
 // terminals / code: lines appear in order (typing)
 f.pres.forEach(p=>{const lh=parseFloat(getComputedStyle(p.e).lineHeight)||25;const pad=parseFloat(getComputedStyle(p.e).paddingTop)||0;const tot=p.L;const t0=.25,t1=Math.min(Math.max(1.2,.55*f.dur),.25+(tot-p.c)*.16);const pr=P(u,t0,t1);const n=p.c+(tot-p.c)*pr;const full=Math.floor(n),frac=n-full;
  if(pr>=1){p.e.style.clipPath='';return}const W=p.e.scrollWidth+40,y1=pad+full*lh,y2=y1+lh;p.e.style.clipPath=`polygon(0 0,${W}px 0,${W}px ${y1}px,${W*frac}px ${y1}px,${W*frac}px ${y2}px,0 ${y2}px)`});
 // page load: blocks of a freshly opened page appear top to bottom
 f.pages.forEach(bl=>bl.forEach((e,k)=>{const k2=E.o(P(u,.35+k*.09,.75+k*.09));e.style.opacity=k2;e.style.transform=`translateY(${(1-k2)*14}px)`}));
 // built-up overlays (chips, cards, toasts, labels)
 const nA=f.abs.filter(a=>!a.old).length;let j=0;f.abs.forEach(a=>{if(a.old){anim(a.e,1);return}const ta=lerp(.18,.58,nA>1?j/(nA-1):0)*f.dur;j++;anim(a.e,P(u,ta,ta+.45),f.anim)});
 f.wires.forEach(w=>{const k=E.io(P(u,.15*f.dur,.55*f.dur));w.e.style.strokeDasharray=w.e.getAttribute('stroke-dasharray')||'';if(!w.e.getAttribute('stroke-dasharray')){w.e.style.strokeDasharray=`${w.l} ${w.l}`;w.e.style.strokeDashoffset=w.l*(1-k)}else w.e.style.opacity=k});
 f.curs.forEach(c=>{const k=E.io(P(u,.15*f.dur,.5*f.dur));c.style.transform=`translate(${(1-k)*240}px,${(1-k)*160}px)`;c.style.opacity=P(u,.1*f.dur,.2*f.dur)});
 // highlight -> dots -> plate on the key word
 const hl=f.el.querySelector('.hl'),dots=f.el.querySelector('.dots'),pl=f.el.querySelector('.plate');const hk=E.o(P(t,f.th-.05,f.th+.25));
 const tgt=f.hl?f.el.querySelector('#'+f.hl):null;
 // plate position first: the wire below is measured against the plate as it is NOW (deterministic, order-independent)
 if(pl){const ki=E.o(P(t,f.th+.25,f.th+.6));pl.style.opacity=ki;pl.style.transform=`translateY(${(1-ki)*18}px)`}
 if(tgt&&hk>0){const sr=f.el.getBoundingClientRect(),q=sr.width/1920||1,r0=tgt.getBoundingClientRect(),p=8;
  const r={left:(r0.left-sr.left)/q,top:(r0.top-sr.top)/q,width:r0.width/q,height:r0.height/q};r.bottom=r.top+r.height;
  hl.style.display='block';hl.style.opacity=hk;hl.style.left=(r.left-p)+'px';hl.style.top=(r.top-p)+'px';hl.style.width=(r.width+2*p)+'px';hl.style.height=(r.height+2*p)+'px';
  if(pl){const PL=pl.querySelector('.PL');const p0=PL.getBoundingClientRect();const pr={left:(p0.left-sr.left)/q,right:(p0.right-sr.left)/q,top:(p0.top-sr.top)/q,bottom:(p0.bottom-sr.top)/q};const below=pr.top>r.bottom;const a=[r.left+r.width/2,(below?r.bottom+p:r.top-p)],b=[(pr.left+pr.right)/2,(below?pr.top:pr.bottom)];dots.innerHTML=DOTS(a,b,E.o(P(t,f.th+.1,f.th+.5)))}}else{hl.style.display='none';dots.innerHTML=''}
 if(pl){const ki=E.o(P(t,f.th+.25,f.th+.6));const PL=pl.querySelector('.PL');const fk=E.o(P(t,f.th+.35,f.th+.7));PL.style.backgroundImage=`linear-gradient(90deg,#FFE600 ${fk*100}%,rgba(10,10,10,.85) ${fk*100}%)`;PL.style.backgroundColor='transparent';PL.style.color=fk>.5?'#0A0A0A':'#fff';if(!tgt&&ki===0)pl.style.opacity=0}
}
let cur=-1;
function R(t){t=Math.max(T_START,Math.min(T_END-1e-3,t));
 let i=SH.findIndex(s=>t>=s.st&&t<s.en);if(i<0)i=SH.length-1;const f=SH[i];
 SH.forEach((s,k)=>{if(k!==i&&k!==i-1){s.el.style.display='none';s.el.style.filter='';s.el.style.transform='';s.el.style.opacity=1}});
 f.el.style.display='block';f.el.style.zIndex=2;
 const u=t-f.st;const prev=i?SH[i-1]:null;const inX=prev&&u<XF;
 // shot-level transition styles are set BEFORE the shot states, so every measurement sees the current frame (order-independent)
 if(inX){const k=E.io(u/XF);prev.el.style.display='block';prev.el.style.zIndex=1;
  if(f.tr==='scrim'){f.el.style.opacity=k;f.el.style.transform='';f.el.style.filter='';prev.el.style.filter=`brightness(${1-.4*k})`;prev.el.style.transform='';prev.el.style.opacity=1}
  else if(f.tr==='swap'){prev.el.style.filter=`blur(${4*k}px) brightness(${1-.45*k})`;prev.el.style.transform=`scale(${1-.03*k})`;prev.el.style.opacity=1;f.el.style.opacity=k;f.el.style.transform=`scale(${1.03-.03*k})`;f.el.style.filter=''}
  else if(f.tr==='zoom'){prev.el.style.filter=`blur(${6*k}px)`;prev.el.style.transform=`scale(${1+.18*k})`;prev.el.style.opacity=1-k*.4;f.el.style.opacity=k;f.el.style.transform=`scale(${.92+.08*k})`;f.el.style.filter=''}
  else{prev.el.style.transform=`translateX(${-160*k}px)`;prev.el.style.filter=`brightness(${1-.4*k})`;prev.el.style.opacity=1;f.el.style.opacity=k;f.el.style.transform=`translateX(${160*(1-k)}px)`;f.el.style.filter=''}
 }else{f.el.style.opacity=1;f.el.style.transform='';f.el.style.filter='';if(prev){prev.el.style.display='none';prev.el.style.filter='';prev.el.style.transform='';prev.el.style.opacity=1}}
 shotState(f,t);if(inX)shotState(prev,t);
}
window.R=R;R(T_START);window.READY=true;
