// ===== BLOCK 05: Lovable -> C  — style "THE LEAK" (§9.1): warm black, pink-orange, serif; redaction bars come off =====
const TOOL=TOOLS[4];
theme({vars:{bg:'#130F11',ink:'#F6EDEF',mute:'#C9A9B2',sig:'#FF5C8A',mkink:'#130F11',acc:'#FF5C8A',colc:'rgba(246,237,239,.025)',lightc:'rgba(255,92,138,.16)',vigc:'rgba(0,0,0,.6)',stroke:'rgba(246,237,239,.07)',
  hd:"'Instrument Serif',Georgia,serif",hdw:400,hdtt:'none',hdls:'-.01em',kf:"'IBM Plex Mono',monospace"}});
el(`<style>
.grad{background:linear-gradient(90deg,#FF5C8A,#FF9A3C);-webkit-background-clip:text;color:transparent}
.lv{position:absolute;border-radius:14px;background:#1B1619;border:1px solid #3a2f34;box-shadow:-30px 40px 90px rgba(0,0,0,.55);overflow:hidden}
.lvtb{height:42px;background:#241d21;display:flex;align-items:center;gap:10px;padding:0 16px;font:500 15px Inter;color:#b9a7ad}
.redact{position:absolute;background:#000;border-radius:2px}
.lstamp{position:absolute;border:4px solid #FF5C8A;color:#FF5C8A;border-radius:10px;padding:8px 20px;font:700 40px 'IBM Plex Mono';letter-spacing:.08em}
</style>`,document.head);
const T={apps:at('Apps'),lov:at('Lovable'),nine:at('nine'),million:at('million'),visits:at('visits'),month:at('month'),and1:at('And'),fortyeight:at('forty-eight'),days:at('days'),anyone:at('anyone'),read:at('read'),code:at('code'),lov2:at('Lovable',2),builds:at('builds'),whole:at('whole'),chat:at('chat'),great:at('great'),landing:at('landing'),proto:at('prototypes'),worth:at('worth'),thirteen:at('thirteen'),but:at('But'),march:at('March'),research:at('researcher'),free:at('free'),pull:at('pull'),source:at('source'),dbkeys:at('database'),keys:at('keys'),chats:at('chats'),handful:at('handful'),older:at('older'),open:at('open'),fe2:at('forty-eight',2),resp:at('response'),intent:at('Intentional'),behav:at('behaviour'),pro:at('Pro',1,true),credits:at('credits'),burn:at('burn'),complaint:at('complaint'),perfect:at('Perfect'),scary:at('scary'),ctier:at('C',1,true)};
makeShots([['hook',0,T.lov2-.35],['build',T.lov2-.35,T.but-.3],['leak',T.but-.3,T.resp-.6],['resp',T.resp-.6,T.pro-.35],['price',T.pro-.35,T.perfect-.35],['verdict',T.perfect-.35,END+1]],{build:'push',leak:'dolly',resp:'dolly',price:'push',verdict:'dolly'});
const glow=(p,x,y,r)=>el(`<div class="ab" style="left:${x-r}px;top:${y-r}px;width:${2*r}px;height:${2*r}px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,92,138,.22),rgba(255,154,60,.07),transparent)"></div>`,p);

// ===== 1. HOOK: 900M visits a month -> for 48 days anyone could read their code =====
{const s=shots.hook;glow(s.L0,V?700:1400,V?500:200,700);
 const ix=indexHeader(s.L1,TOOL,'05',{x:V?60:120,y:V?120:150,w:V?960:640});
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?200:230}px;font-size:${V?26:22}px;color:var(--mute)">Apps built with Lovable get</div>`,s.L1);
 const n1=el(`<div class="ab big" style="left:${V?52:112}px;top:${V?250:270}px;font-size:${V?260:250}px;line-height:.95">900M</div>`,s.L1);
 const n1s=el(`<div class="ab h1" style="left:${V?60:120}px;top:${V?510:510}px;font-size:${V?64:58}px;font-style:italic;color:var(--mute)">visits a month.</div>`,s.L1);
 const n2=el(`<div class="ab big" style="left:${V?52:112}px;top:${V?250:270}px;font-size:${V?300:290}px;line-height:.9">48 <i class="grad" style="font-size:.55em">days</i></div>`,s.L1);
 const n2s=el(`<div class="ab h1" style="left:${V?60:120}px;top:${V?560:540}px;font-size:${V?60:52}px;line-height:1.2;font-style:italic">anyone could read<br>their code.</div>`,s.L1);
 // a grid of tiny app cards (the 900M), most of them unlocked later
 const g=V?{x:80,y:900,c:7,r:7,s:130}:{x:960,y:150,c:7,r:6,s:120};const cells=[];
 for(let i=0;i<g.c*g.r;i++){const e=el(`<div class="ab" style="left:${g.x+(i%g.c)*g.s}px;top:${g.y+Math.floor(i/g.c)*g.s}px;width:${g.s-18}px;height:${g.s-18}px;border-radius:12px;background:#1E181B;border:1px solid #3a2f34;display:flex;align-items:center;justify-content:center"><i style="width:44%;height:44%;display:block">${ic('lovable-color')}</i></div>`,s.L1);cells.push(e)}
 s.R=t=>{rise(ix.e,t,.05,1e9,14);drawLine(ix.r,t,.2,.7);rise(kick,t,0,1e9,14);
  const sw=T.fortyeight-.25;rise(n1,t,T.nine-.25,sw,30,.5);rise(n1s,t,T.visits-.2,sw,14);rise(n2,t,sw+.05,1e9,30,.5);rise(n2s,t,T.anyone-.2,1e9,14);
  cells.forEach((e,i)=>{const a=T.nine-.2+((i*37)%cells.length)/cells.length*1.2;e.style.opacity=cl(P(t,a,a+.2));
   const red=t>T.read+((i*53)%cells.length)/cells.length*.8;e.style.borderColor=red?'#FF5C8A':'#3a2f34';e.style.background=red?'#2a1820':'#1E181B'});
  s.cam.z=.03*eio(P(t,0,T.lov2))}}

// ===== 2. THE PRODUCT: one chat message builds a whole landing page; now worth $13B =====
{const s=shots.build;glow(s.L0,V?300:500,V?1300:800,600);
 const ww=V?960:1000,wh=V?620:600;
 const win=el(`<div class="lv" style="left:${V?60:840}px;top:${V?760:200}px;width:${ww}px;height:${wh}px"><div class="lvtb"><i style="width:20px;height:20px;display:inline-block">${ic('lovable-color')}</i>lovable.dev — new project</div>
  <div style="display:flex;height:calc(100% - 42px)"><div style="width:36%;padding:18px;border-right:1px solid #3a2f34;font:17px/1.5 Inter;color:#eadfe2"><div style="background:#2a2226;border-radius:12px;padding:12px 14px">Build a landing page for my coffee shop</div><div class="lvm" style="margin-top:14px;color:#c9a9b2">Building your app…</div></div>
  <div class="lvp" style="flex:1;background:#F7F2EE;position:relative;overflow:hidden">
   <div class="lb" style="height:52px;background:#fff;border-bottom:1px solid #e8dfd9;display:flex;align-items:center;padding:0 20px;font:700 18px Inter;color:#3b2a24">Coffee shop</div>
   <div class="lb" style="margin:26px 26px 0;height:${V?170:180}px;border-radius:14px;background:linear-gradient(120deg,#6b3f2a,#c98a5a);display:flex;flex-direction:column;justify-content:center;padding:0 26px;color:#fff"><div style="font:400 ${V?40:42}px 'Instrument Serif'">Slow coffee, warm room.</div><div style="margin-top:12px;width:130px;height:36px;border-radius:18px;background:#fff;color:#6b3f2a;font:700 15px/36px Inter;text-align:center">Order ahead</div></div>
   <div class="lb" style="display:flex;gap:14px;margin:18px 26px">${[0,1,2].map(()=>`<div style="flex:1;height:${V?110:120}px;border-radius:12px;background:#fff;border:1px solid #e8dfd9"></div>`).join('')}</div></div></div></div>`,s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">One chat message</div>`,s.L1);
 const hl=headline(s.L1,['a whole web app.','[[Genuinely great.]]'],{x:V?56:116,y:V?190:250,fs:V?110:100,lh:1.05});
 const worth=el(`<div class="ab" style="left:${V?60:120}px;top:${V?470:520}px;font:400 ${V?120:110}px 'Instrument Serif';color:var(--ink)">$13B <span style="font:500 ${V?26:22}px 'IBM Plex Mono';color:var(--mute);letter-spacing:.06em">VALUATION</span></div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#9A8189">SRC: TechCrunch via Northeast Times, Aug 2026</div>`,s.L1);
 const lbs=[...win.querySelectorAll('.lb')],msg=win.querySelector('.lvm');
 s.R=t=>{rise(kick,t,T.lov2-.2,1e9,14);revealLines(hl,t,[T.whole-.2,T.great-.4]);sweep(hl.querySelector('.mk'),t,T.great);rise(win,t,T.lov2-.2,1e9,40,.6);
  lbs.forEach((e,i)=>rise(e,t,T.chat+.25+.35*i,1e9,16,.4));msg.textContent=t>T.landing?'Done · landing page ready':'Building your app…';
  rise(worth,t,T.thirteen-.25,1e9,30,.5);rise(cap,t,T.worth,1e9,10);s.cam.z=.03*eio(P(t,T.lov2,T.but))}}

// ===== 3. THE LEAK: any free account pulls source code, DB keys, AI chats — bars come off one by one =====
{const s=shots.leak;glow(s.L0,V?700:1300,V?1100:500,700);
 const d=V?{x:60,y:760,w:960,h:760}:{x:880,y:150,w:900,h:760};
 const lines=['import { createClient } from "@supabase/supabase-js";','','const supabase = createClient(','  process.env.SUPABASE_URL,','  "eyJhbGciOiJIUzI1NiIsInR5cCI6…"  // service key',');','','export async function getOrders(user) {','  const { data } = await supabase','    .from("orders").select("*");','  return data;','}','','// chat: "add stripe checkout to the cart page"'];
 const doc=el(`<div class="lv" style="left:${d.x}px;top:${d.y}px;width:${d.w}px;height:${d.h}px"><div class="lvtb"><i style="width:20px;height:20px;display:inline-block">${ic('lovable-color')}</i>someone-elses-app / src / orders.ts</div>
  <div style="padding:20px 24px;font:${V?21:20}px/1.85 'JetBrains Mono';color:#e9dfe2;white-space:pre">${lines.map((l,i)=>`<div style="position:relative" data-i="${i}">${l||' '}</div>`).join('')}</div></div>`,s.L1);
 // which lines hide what: source code / database key / AI chat
 const groups=[[0,2,3,5,7,8,9,10,11],[4],[13]],bars=[];
 groups.forEach((g,gi)=>g.forEach(i=>{const row=doc.querySelector(`[data-i="${i}"]`);const b=el(`<i class="redact" style="left:-4px;top:5px;bottom:5px;width:calc(100% + 8px)"></i>`,row);bars.push({b,gi})}));
 const stamp=el(`<div class="lstamp" style="right:30px;top:90px;transform:rotate(-8deg)">EXPOSED</div>`,doc);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">March 2026 · any free account could pull</div>`,s.L1);
 const items=[['source code',T.source],['database keys',T.dbkeys],['AI chats',T.chats]].map(([n,a],i)=>({e:el(`<div class="ab h1" style="left:${V?56:116}px;top:${(V?190:250)+i*(V?118:108)}px;font-size:${V?96:86}px;line-height:1"><span class="mk">${n}</span></div>`,s.L1),a}));
 const days=el(`<div class="ab" style="left:${V?60:120}px;top:${V?560:600}px;font:400 ${V?44:40}px/1.2 'Instrument Serif';font-style:italic;color:var(--mute)">open for <span class="grad" style="font-style:normal;font-size:1.6em">48 days</span><br>on older projects.</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#9A8189">SRC: TNW · one researcher's findings</div>`,s.L1);
 s.R=t=>{rise(kick,t,T.but-.2,1e9,14);rise(doc,t,T.but-.1,1e9,40,.6);
  items.forEach(({e,a})=>{rise(e,t,a-.25,1e9,20,.5);sweep(e.querySelector('.mk'),t,a+.05)});
  bars.forEach(({b,gi})=>{const a=[T.source,T.keys,T.chats][gi];const k=eio(P(t,a,a+.45));b.style.transform=`translateX(${k*110}%)`;b.style.opacity=1-P(t,a+.3,a+.45)});
  const st=eio(P(t,T.handful,T.handful+.3));stamp.style.opacity=st;stamp.style.transform=`rotate(-8deg) scale(${1.6-.6*st})`;rise(days,t,T.older-.2,1e9,16);rise(cap,t,T.research,1e9,10);
  s.cam.z=.04*eio(P(t,T.but,T.resp))}}

// ===== 4. THE RESPONSE: "Intentional behaviour." =====
{const s=shots.resp;glow(s.L0,W/2,H/2,800);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?600:300}px">Lovable's first response</div>`,s.L1);
 const q=el(`<div class="ab" style="left:${V?50:110}px;top:${V?660:360}px;font:400 ${V?150:190}px/0.95 'Instrument Serif';font-style:italic;color:var(--ink);width:${V?980:1700}px">“<span class="grad">Intentional</span><br>behaviour.”</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#9A8189">SRC: TNW</div>`,s.L1);
 const g=q.querySelector('.grad');
 s.R=t=>{rise(kick,t,T.resp-.4,1e9,14);rise(q,t,T.intent-.35,1e9,30,.6);g.style.backgroundSize=`${100}% 100%`;rise(cap,t,T.intent,1e9,10);s.cam.z=.05*eio(P(t,T.resp,T.pro))}}

// ===== 5. PRICE: $25 for 100 credits — and they burn fast =====
{const s=shots.price;glow(s.L0,V?500:1300,V?1200:500,600);
 const cw=V?960:760,chh=V?520:520;
 const card=el(`<div class="lv" style="left:${V?60:1000}px;top:${V?820:220}px;width:${cw}px;height:${chh}px;padding:38px 44px"><div style="font:600 22px 'IBM Plex Mono';color:#c9a9b2">LOVABLE · PRO</div>
  <div style="font:400 120px 'Instrument Serif';color:#F6EDEF;margin-top:6px">$25<span style="font:500 22px 'IBM Plex Mono';color:#9a8189">/mo</span></div>
  <div style="font:500 22px 'IBM Plex Mono';color:#F6EDEF">100 credits</div>
  <div style="margin-top:34px;height:30px;border-radius:15px;background:#2a2226;overflow:hidden"><i class="lvb" style="display:block;height:100%;background:linear-gradient(90deg,#FF5C8A,#FF9A3C)"></i></div>
  <div style="margin-top:12px;font:500 18px 'IBM Plex Mono';color:#9a8189">CREDITS LEFT · ILLUSTRATION</div>
  <div class="lvn" style="position:absolute;right:44px;bottom:34px;font:400 110px 'Instrument Serif';color:#F6EDEF">100</div></div>`,s.L1);
 const kick=el(`<div class="ab kick" style="left:${V?60:120}px;top:${V?140:200}px">Complaint number one</div>`,s.L1);
 const hl=headline(s.L1,['[[Credit burn.]]'],{x:V?56:116,y:V?190:250,fs:V?140:130,lh:1});
 const sub=el(`<div class="ab h1" style="left:${V?60:120}px;top:${V?380:420}px;font-size:${V?52:46}px;font-style:italic;color:var(--mute);line-height:1.2">$25 a month for<br>100 credits.</div>`,s.L1);
 const cap=el(`<div class="ab cap" style="left:${capPos.x}px;top:${V?1700:880}px;color:#9A8189">SRC: lovable.dev/pricing</div>`,s.L1);
 const bar=card.querySelector('.lvb'),num=card.querySelector('.lvn');
 s.R=t=>{rise(card,t,T.pro-.2,1e9,40,.6);rise(sub,t,T.pro,1e9,14);rise(kick,t,T.burn-.6,1e9,14);revealLines(hl,t,[T.burn-.4]);sweep(hl.querySelector('.mk'),t,T.burn+.1);
  const e=eio(P(t,T.burn-.2,T.complaint+.6));bar.style.width=(100-92*e)+'%';num.textContent=Math.round(100-92*e);rise(cap,t,T.pro,1e9,10);s.cam.z=.03*eio(P(t,T.pro,T.perfect))}}

// ===== 6. VERDICT =====
verdictShot(shots.verdict,TOOL,{start:T.perfect,tierAt:T.ctier,line:['Perfect for a prototype,','[[scary for real users.]]'],fs:V?64:72});
{const s=shots.verdict,R0=s.R;s.R=t=>{R0(t);const m=s.L1.querySelector('.mk');if(m)sweep(m,t,T.scary)}}
