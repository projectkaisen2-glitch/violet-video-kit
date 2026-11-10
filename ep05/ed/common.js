// ===== EP05 runtime: one world per block, camera inside it (P70) =====
const Q=new URLSearchParams(location.search);const FMT=Q.get('fmt')||'h';const V=FMT==='v';const MODE=Q.get('mode')||(V?'short':'long');
const W=V?1080:1920,H=V?1920:1080;const p=(h,v)=>V?v:h;
const root=document.getElementById('root');root.style.width=W+'px';root.style.height=H+'px';
let ICN=0;const ic=k=>{const s=SVG[k]||'';if(!s.includes('id="'))return s;const n='_'+(ICN++);return s.replace(/id="([^"]+)"/g,'id="$1'+n+'"').replace(/url\(#([^)]+)\)/g,'url(#$1'+n+')').replace(/href="#([^"]+)"/g,'href="#$1'+n+'"')};
// voice: part A = the block (also the Short), part B = long add-on (h) or Short tail (v), after GAP
const CUE=MODE==='long'?CUE_A.concat(CUE_L):CUE_A.concat(CUE_T);const T2=CUE_B0;
const norm=w=>w.replace(/[^\w$-]/g,'').toLowerCase();
const at=(word,n=1,from=0)=>{let k=0;for(const [t,w] of CUE){if(t<from)continue;if(norm(w).startsWith(word.toLowerCase())){k++;if(k===n)return t}}console.warn('cue?',word,n);return 0};
const VOICE_END=CUE.length?CUE[CUE.length-1][0]+.5:0;let END=VOICE_END+1.2;
const cl=(x,a=0,b=1)=>Math.max(a,Math.min(b,x)),P=(t,a,b)=>cl((t-a)/(b-a)),lerp=(a,b,k)=>a+(b-a)*k;
const eo=x=>1-Math.pow(1-x,3),eio=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,e5=x=>1-Math.pow(1-x,5);
// physical spring 0->1 with overshoot (mass on a spring): stiffness w, damping z
const spr=(t,a,w=14,z=.32)=>{const x=t-a;if(x<=0)return 0;const wd=w*Math.sqrt(1-z*z);return 1-Math.exp(-z*w*x)*(Math.cos(wd*x)+z*w/wd*Math.sin(wd*x))};
function el(h,par){const d=document.createElement('div');d.innerHTML=h.trim();const e=d.firstChild;(par||root).appendChild(e);return e}
const css=(e,o)=>{for(const k in o)e.style[k]=o[k]};
// world + camera. keys: [t, cx, cy, zoom] = which world point is in the frame centre, eased between keys
const world=el(`<div class="world"></div>`);let CAM=[[0,W/2,H/2,1]];
function camAt(t){let i=0;while(i<CAM.length-1&&t>=CAM[i+1][0])i++;const a=CAM[i],b=CAM[i+1];if(!b)return a.slice(1);
 const d=Math.max(.9,Math.min(1.6,(b[0]-a[0])*.5)),k=eio(P(t,b[0]-d*.15,b[0]+d*.85));
 return [lerp(a[1],b[1],k),lerp(a[2],b[2],k),Math.exp(lerp(Math.log(a[3]),Math.log(b[3]),k))]}
// camera keys move at key time (key t = moment the move starts, it lasts ~0.9-1.6 s)
function camR(t){const [cx,cy,z]=camAt(t);const hx=Math.sin(t*.7)*3+Math.sin(t*1.9)*1.2,hy=Math.cos(t*.6)*2.5;
 world.style.transform=`translate(${W/2-cx*z+hx}px,${H/2-cy*z+hy}px) scale(${z})`}
const grain=el('<div class="grain"></div>');
const src=(txt)=>el(`<div class="src" style="left:${p(120,60)}px;top:${p(1020,1850)}px;width:${p(1680,960)}px">${txt}</div>`);
