// ===== BLOCK 07: Cline -> A  — style "BLUEPRINT" (§9.1): technical drawing on blue, lines draw themselves =====
const TOOL=TOOLS[6];
theme({vars:{bg:'#0F2C4B',ink:'#E6F0FA',mute:'#9DBCDD',sig:'#F2C14E',mkink:'#0F2C4B',acc:'#F2C14E',colc:'rgba(170,205,240,.16)',lightc:'rgba(170,205,240,.06)',vigc:'rgba(0,10,25,.45)',stroke:'rgba(230,240,250,.07)',
  hd:"'IBM Plex Sans Condensed',Inter,sans-serif",hdw:700,hdtt:'uppercase',hdls:'0',kf:"'JetBrains Mono',monospace"},mk:'under'});
el(`<style>
.cols{background-image:linear-gradient(rgba(170,205,240,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(170,205,240,.07) 1px,transparent 1px),linear-gradient(rgba(170,205,240,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(170,205,240,.16) 1px,transparent 1px)!important;background-size:24px 24px,24px 24px,120px 120px,120px 120px!important}
.bp text{font-family:'JetBrains Mono';fill:#E6F0FA}
</style>`,document.head);
const RED='#FF7A6B',LN='rgba(230,240,250,.88)';
const lastA=CUE.filter(w=>norm(w[1])==='a').pop()[0];
const T={costs:at('costs'),zero:at('zero'),run:at('run'),gpu:at('G',1,true),cline:at('Cline'),open:at('open'),free:at('free'),you:at('You'),bring:at('bring'),claude:at('Claude'),gpt:at('G',2,true),gemini:at('Gemini'),local:at('local'),ollama:at('Ollama'),lm:at('L',1,true),nosub:at('subscription'),runs:at('runs'),vs:at('V',1,true),jb:at('JetBrains'),desktop:at('desktop'),terminal:at('terminal'),plan:at('plan'),act:at('act'),checkpoints:at('checkpoints'),scar:at('scar'),feb:at('February'),poisoned:at('poisoned'),update:at('update'),npm:at('N',1,true),eight:at('eight'),hours:at('hours'),attackers:at('Attackers'),prompt:at('prompt'),hidden:at('hidden'),github:at('GitHub'),title:at('title'),quietly:at('quietly'),installed:at('installed'),four:at('four'),thousand:at('thousand'),machines:at('machines'),cline3:at('Cline',3),locked:at('locked'),free2:at('Free',2),fully:at('fully'),atier:lastA};
makeShots([['hook',0,T.cline-.3],['byo',T.cline-.3,T.runs-.3],['surf',T.runs-.3,T.scar-.35],['scar',T.scar-.35,T.free2-.35],['verdict',T.free2-.35,END+1]],{byo:'push',surf:'push',scar:'push',verdict:'dolly'});
// drawing sheet stamp (same on every shot of this block)
{const tb=V?{x:640,y:1790}:{x:1480,y:960};const e=window.DWG=el(`<div class="ab" style="left:${tb.x}px;top:${tb.y}px;width:380px;border:2px solid ${LN};font:500 15px/1.5 'JetBrains Mono';color:#E6F0FA;z-index:30"><div style="display:flex;border-bottom:2px solid ${LN}"><span style="flex:1;padding:6px 10px;border-right:2px solid ${LN}">DWG 07 / 08</span><span style="flex:1;padding:6px 10px">REV 2026</span></div><div style="padding:6px 10px">SHEET: CLINE · LOCAL SETUP</div></div>`);}
// SVG drawing layer per shot; every path has pathLength=1 so draw(k) works for any shape
function sheet(p){const s=el(`<svg class="ab bp" style="left:0;top:0;overflow:visible" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none"></svg>`,p);
 return{s,g(html){const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.innerHTML=html;s.appendChild(g);return g},
  draw(g,t,a,dur=.6){const k=eo(P(t,a,a+dur));g.querySelectorAll('[pathLength]').forEach(e=>{e.style.strokeDasharray='1 1';e.style.strokeDashoffset=1-k});g.querySelectorAll('text').forEach(e=>e.style.opacity=cl((k-.5)*2));g.style.opacity=t>a?1:0}}}
const box=(x,y,w,h,col=LN,sw=2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" stroke="${col}" stroke-width="${sw}" pathLength="1"/>`;
const line=(d,col=LN,dash='')=>`<path d="${d}" stroke="${col}" stroke-width="2" pathLength="1"${dash?` data-dash="1"`:''}/>`;
const txt=(x,y,s,sz=20,col='#E6F0FA',w=500)=>`<text x="${x}" y="${y}" font-size="${sz}" font-weight="${w}" fill="${col}">${s}</text>`;
function gpu(x,y,s=1){let h=`<g transform="translate(${x} ${y}) scale(${s})">${box(0,60,520,220)}${line('M0 280 H520 V302 H0 Z')}`;
 for(let i=0;i<3;i++){const cx=100+i*160;h+=`<circle cx="${cx}" cy="170" r="66" stroke="${LN}" stroke-width="2" pathLength="1"/><circle cx="${cx}" cy="170" r="14" stroke="${LN}" stroke-width="2" pathLength="1"/>`;for(let k=0;k<7;k++)h+=line(`M${cx} 170 q ${(30*Math.cos(k*.9)).toFixed(1)} ${(30*Math.sin(k*.9)).toFixed(1)} ${(60*Math.cos(k*.9+.5)).toFixed(1)} ${(60*Math.sin(k*.9+.5)).toFixed(1)}`)}
 for(let i=0;i<14;i++)h+=box(40+i*32,302,18,16,LN,1.5);h+=line('M0 30 V46 M520 30 V46 M0 38 H520')+txt(200,24,'YOUR GPU',22)+'</g>';return h}

// ===== 1. HOOK: $0, and the drawing of a GPU draws itself =====
{const s=shots.hook;const D=sheet(s.L1);
 const ix=indexHeader(s.L1,TOOL,'07',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?200:230}px;font-size:${V?26:22}px;color:var(--mute)">This coding agent costs</div>`,s.L1);
 const big=el(`<div class="ab big" style="left:${V?52:112}px;top:${V?250:270}px;font-size:${V?240:230}px">$0</div>`,s.L1);
 const hl=headline(s.L1,['runs on your','[[own GPU.]]'],{x:V?56:116,y:V?480:500,fs:V?96:84,lh:1.05});
 const G=D.g(gpu(V?100:900,V?900:260,V?1.6:1.6));
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,T.costs-.3,1e9,14);rise(big,t,T.zero-.25,1e9,30,.5);revealLines(hl,t,[T.run-.2,T.gpu-.3]);sweep(hl.querySelector('.mk'),t,T.gpu+.1,.5);
  D.draw(G,t,.2,2.4);s.cam.z=.03*eio(P(t,0,T.cline))}}

// ===== 2. BRING YOUR OWN MODEL: cloud models or a local one through Ollama / LM Studio =====
{const s=shots.byo;const D=sheet(s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Cline · open source · free</div>`,s.L1);
 const hl=headline(s.L1,['Bring your','[[own model.]]'],{x:V?56:116,y:V?190:250,fs:V?110:100,lh:1.05});
 const L=V?{cx:60,cy:1180,mx:600,my:640,lx:600,ly:1380}:{cx:900,cy:560,mx:1420,my:170,lx:1420,ly:650};
 const C=D.g(box(L.cx,L.cy,300,120,LN,3)+txt(L.cx+28,L.cy+70,'CLINE',34,'#E6F0FA',700));
 const cloud=[['CLAUDE',T.claude],['GPT',T.gpt],['GEMINI',T.gemini]].map(([n,a],i)=>({g:D.g(box(L.mx,L.my+i*110,330,80)+txt(L.mx+24,L.my+i*110+50,n,24)+line(`M${L.cx+300} ${L.cy+60} C ${L.cx+380} ${L.cy+60}, ${L.mx-80} ${L.my+i*110+40}, ${L.mx} ${L.my+i*110+40}`,LN)),a}));
 const loc=[['OLLAMA',T.ollama],['LM STUDIO',T.lm]].map(([n,a],i)=>({g:D.g(box(L.lx,L.ly+i*110,330,80,'#F2C14E')+txt(L.lx+24,L.ly+i*110+50,n,24,'#F2C14E')+line(`M${L.cx+300} ${L.cy+60} C ${L.cx+380} ${L.cy+60}, ${L.lx-80} ${L.ly+i*110+40}, ${L.lx} ${L.ly+i*110+40}`,'#F2C14E')),a}));
 const tag=D.g(txt(L.mx,L.my-24,'CLOUD · API KEY',18,'#9DBCDD')+txt(L.lx,L.ly-24,'LOCAL · YOUR GPU',18,'#F2C14E'));
 const ns=el(`<div class="ab" style="left:${V?60:120}px;top:${V?460:500}px;border:2px solid #F2C14E;color:#F2C14E;font:700 ${V?34:30}px 'JetBrains Mono';padding:10px 18px;letter-spacing:.06em">NO SUBSCRIPTION AT ALL</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#8FAED0">SRC: cline.bot</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.cline-.2,1e9,14);revealLines(hl,t,[T.bring-.3,T.model-.3]);sweep(hl.querySelector('.mk'),t,T.model||T.bring+.4,.5);
  D.draw(C,t,T.you-.3,.6);cloud.forEach(({g,a})=>D.draw(g,t,a-.2,.5));loc.forEach(({g,a})=>D.draw(g,t,a-.2,.5));D.draw(tag,t,T.claude,.4);
  const st=eio(P(t,T.nosub-.1,T.nosub+.25));ns.style.opacity=st;ns.style.transform=`scale(${1.4-.4*st})`;rise(cap,t,T.cline,1e9,10);s.cam.z=.03*eio(P(t,T.cline,T.runs))}}
T.model=at('model');

// ===== 3. WHERE IT RUNS + plan / act modes + checkpoints =====
{const s=shots.surf;const D=sheet(s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">It runs in</div>`,s.L1);
 const hl=headline(s.L1,['Your editor,','[[your terminal.]]'],{x:V?56:116,y:V?190:250,fs:V?104:92,lh:1.05});
 const S=V?{x:60,y:620,w:465,h:150,gx:30,gy:30,c:2}:{x:900,y:180,w:430,h:140,gx:30,gy:30,c:2};
 const blocks=[['VS CODE',T.vs],['JETBRAINS',T.jb],['DESKTOP APP',T.desktop],['TERMINAL',T.terminal]].map(([n,a],i)=>{const x=S.x+(i%S.c)*(S.w+S.gx),y=S.y+Math.floor(i/S.c)*(S.h+S.gy);
  return{g:D.g(box(x,y,S.w,S.h)+line(`M${x} ${y+36} H${x+S.w}`)+`<circle cx="${x+18}" cy="${y+18}" r="5" stroke="${LN}" stroke-width="2" pathLength="1"/>`+txt(x+24,y+S.h-30,n,30,'#E6F0FA',700)),a}});
 const by=S.y+2*(S.h+S.gy)+60,bx=S.x;
 const tog=D.g(box(bx,by,300,70,'#F2C14E')+line(`M${bx+150} ${by} V${by+70}`,'#F2C14E')+txt(bx+40,by+45,'PLAN',24,'#F2C14E',700)+txt(bx+190,by+45,'ACT',24,'#F2C14E',700));
 const cpx=bx+(V?0:360),cpy=by+(V?140:35);
 const cps=D.g(line(`M${cpx} ${cpy} H${cpx+(V?900:500)}`)+[0,1,2,3,4].map(i=>`<circle cx="${cpx+i*(V?220:120)}" cy="${cpy}" r="11" stroke="#F2C14E" stroke-width="3" pathLength="1"/>`).join('')+txt(cpx,cpy-24,'CHECKPOINTS',18,'#9DBCDD'));
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#8FAED0">SRC: cline.bot</div>`,s.L1);
 const thumb=el(`<div class="ab" style="left:${bx+4}px;top:${by+4}px;width:146px;height:62px;background:rgba(242,193,78,.25)"></div>`,s.L1);
 s.R=t=>{rise(kick,t,T.runs-.2,1e9,14);revealLines(hl,t,[T.vs-.3,T.terminal-.4]);sweep(hl.querySelector('.mk'),t,T.terminal,.5);
  blocks.forEach(({g,a})=>D.draw(g,t,a-.2,.5));D.draw(tog,t,T.plan-.2,.5);thumb.style.opacity=t>T.plan?1:0;thumb.style.transform=`translateX(${eio(P(t,T.act-.1,T.act+.2))*150}px)`;
  D.draw(cps,t,T.checkpoints-.2,.8);rise(cap,t,T.runs,1e9,10);s.cam.z=.03*eio(P(t,T.runs,T.scar))}}

// ===== 4. THE SCAR: issue title -> poisoned npm update (8 h) -> ~4,000 machines; then publishing locked down =====
{const s=shots.scar;const D=sheet(s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">The scar · February 2026</div>`,s.L1);
 const hl=headline(s.L1,['A poisoned','[[update.]]'],{x:V?56:116,y:V?190:250,fs:V?110:100,lh:1.05});
 const Lb=V?[{x:60,y:820},{x:60,y:1110},{x:60,y:1400}]:[{x:120,y:560},{x:760,y:560},{x:1400,y:560}];const bw=V?560:420,bh=V?190:200;
 const node=(i,lines,col)=>D.g(box(Lb[i].x,Lb[i].y,bw,bh,col,2.5)+lines.map((l,k)=>txt(Lb[i].x+26,Lb[i].y+52+k*40,l,k?20:26,k?'#9DBCDD':col,k?500:700)).join(''));
 const n2=node(1,['NPM · CLINE UPDATE','poisoned build','sat there 8 hours'],RED);
 const n1=node(0,['GITHUB ISSUE TITLE','a prompt hidden','in the title'],RED);
 const n3=node(2,['ANOTHER AI AGENT','installed quietly','~4,000 machines'],RED);
 const ar=(a,b)=>V?`M${Lb[a].x+bw/2} ${Lb[a].y+bh} V${Lb[b].y-6} m-10 -14 l10 14 l10 -14`:`M${Lb[a].x+bw} ${Lb[a].y+bh/2} H${Lb[b].x-6} m-14 -10 l14 10 l-14 10`;
 const a12=D.g(line(ar(0,1),RED)),a23=D.g(line(ar(1,2),RED));
 const dim=D.g(V?line(`M${Lb[1].x+bw+40} ${Lb[1].y} V${Lb[1].y+bh} M${Lb[1].x+bw+30} ${Lb[1].y} h20 M${Lb[1].x+bw+30} ${Lb[1].y+bh} h20`,'#F2C14E')+txt(Lb[1].x+bw+60,Lb[1].y+bh/2+10,'8 H',28,'#F2C14E',700)
  :line(`M${Lb[1].x} ${Lb[1].y-40} H${Lb[1].x+bw} M${Lb[1].x} ${Lb[1].y-50} v20 M${Lb[1].x+bw} ${Lb[1].y-50} v20`,'#F2C14E')+txt(Lb[1].x+bw/2-40,Lb[1].y-60,'8 HOURS',24,'#F2C14E',700));
 // ~4,000 machines as a dot field that fills
 const df=V?{x:680,y:1400,c:16,r:10,s:22}:{x:1400,y:800,c:20,r:6,s:21};const dots=[];
 for(let i=0;i<df.c*df.r;i++){dots.push(el(`<i class="ab" style="left:${df.x+(i%df.c)*df.s}px;top:${df.y+Math.floor(i/df.c)*df.s}px;width:10px;height:10px;border-radius:50%;border:1.5px solid ${RED}"></i>`,s.L1))}
 const lock=el(`<div class="ab" style="left:${V?60:120}px;top:${V?470:490}px;display:flex;align-items:center;gap:16px;color:#E6F0FA;font:700 ${V?32:28}px 'JetBrains Mono';letter-spacing:.04em"><svg width="44" height="54" viewBox="0 0 44 54" fill="none"><rect x="3" y="22" width="38" height="29" rx="4" stroke="#F2C14E" stroke-width="4"/><path d="M11 22 V14 a11 11 0 0 1 22 0 V22" stroke="#F2C14E" stroke-width="4"/></svg>PUBLISHING LOCKED DOWN</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#8FAED0">SRC: The Register, Feb 20 2026 · Simon Willison</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.scar-.2,1e9,14);revealLines(hl,t,[T.poisoned-.4,T.update-.3]);sweep(hl.querySelector('.mk'),t,T.update+.1,.5);
  D.draw(n2,t,T.update-.2,.6);D.draw(dim,t,T.eight-.2,.5);D.draw(n1,t,T.prompt-.3,.6);D.draw(a12,t,T.title-.2,.4);D.draw(a23,t,T.quietly-.3,.4);D.draw(n3,t,T.installed-.2,.6);
  dots.forEach((e,i)=>{const a=T.four-.2+(i/dots.length)*1.3;e.style.opacity=t>a?1:0;e.style.background=t>a+.15?RED:'transparent'});
  const lk=eio(P(t,T.locked-.2,T.locked+.3));lock.style.opacity=lk;lock.style.transform=`translateY(${(1-lk)*14}px)`;
  [n1,n2,n3,a12,a23].forEach(g=>g.style.filter=t>T.locked?'saturate(.4) brightness(.8)':'');rise(cap,t,T.feb,1e9,10);s.cam.z=.03*eio(P(t,T.scar,T.free2))}}

// ===== 5. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.free2,tierAt:T.atier,line:['Free, open,','and [[fully yours.]]']});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.fully,.5)}}
{const R1=R;R=t=>{R1(t);DWG.style.opacity=1-P(t,T.free2-.4,T.free2)}}
