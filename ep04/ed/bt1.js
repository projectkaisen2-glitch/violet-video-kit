// ===== SHORT TAILS t1–t5 (vertical only): "full tier list — video below", drawn in the style of the Short's own block =====
// one file for all five tails (bt2..bt5 are links to it); the variant is read from the first voice word; ?tool=NN picks the block style
const TV={where:1,seven:2,see:3,the:4,whos:5}[norm(CUE[0][1])]||1;
const TOOLID=(new URLSearchParams(location.search).get('tool')||'01');const TOOL=TOOLS.find(x=>x.id===TOOLID)||TOOLS[0];
const TH={
 '01':{vars:{bg:'#0D0E10',ink:'#ECE8E1',sig:'#FF5A36',mkink:'#0D0E10'},mk:'block'},
 '02':{vars:{bg:'#0A0A0B',ink:'#EDEDED',mute:'#8D9096',sig:'#EA4335',hd:"'Space Grotesk'",hdtt:'none',hdls:'-.04em'},mk:'color'},
 '03':{vars:{bg:'#ECE7DD',ink:'#151515',mute:'#6B665C',sig:'#D33A2C',mkink:'#151515',hd:"'Archivo Black'",hdw:400,hdtt:'none',hdls:'-.02em',colc:'rgba(0,0,0,.035)',lightc:'rgba(255,255,255,.55)',vigc:'rgba(90,70,40,.16)'},mk:'under',light:true},
 '04':{vars:{bg:'#0B3B3A',ink:'#F1E9DA',mute:'#9FC7C1',sig:'#F1E9DA',mkink:'#0B3B3A',hd:"'Bricolage Grotesque'",hdw:800,hdtt:'none',hdls:'-.03em',lightc:'rgba(160,230,220,.10)'},mk:'block'},
 '05':{vars:{bg:'#130F11',ink:'#F6EDEF',mute:'#C9A9B2',sig:'#FF5C8A',mkink:'#130F11',hd:"'Instrument Serif'",hdw:400,hdtt:'none',lightc:'rgba(255,92,138,.16)'},mk:'block'},
 '06':{vars:{bg:'#F3F2EE',ink:'#0E0E0E',mute:'#555',sig:'#0E0E0E',mkink:'#F3F2EE',hd:"'Inter Display'",hdw:900,hdtt:'none',hdls:'-.05em',colc:'rgba(0,0,0,.05)',lightc:'rgba(255,255,255,0)',vigc:'rgba(0,0,0,.05)'},mk:'block',light:true},
 '07':{vars:{bg:'#0F2C4B',ink:'#E6F0FA',mute:'#9DBCDD',sig:'#F2C14E',mkink:'#0F2C4B',hd:"'IBM Plex Sans Condensed'",colc:'rgba(170,205,240,.16)'},mk:'under'},
 '08':{vars:{bg:'#F1ECE2',ink:'#2A2522',mute:'#7A6F63',sig:'#C8643E',mkink:'#F1ECE2',hd:"'Fraunces'",hdw:500,hdtt:'none',hdls:'-.02em',colc:'rgba(42,37,34,.035)',lightc:'rgba(255,250,240,.6)',vigc:'rgba(90,60,30,.14)'},mk:'color',light:true}};
theme(TH[TOOLID]||TH['01']);
END=VOICE_END+1.2;
const W0=CUE[0][0],FULL=at('Full'),BELOW=CUE[CUE.length-1][0];
makeShots([['tail',0,END+1]]);
{const s=shots.tail;
 const lines={1:['Where does','your tool [[rank?]]'],2:['Seven more tools,','[[one S tier.]]'],3:['See who made','[[S tier.]]'],4:['The full tier list','is [[one tap away.]]'],5:["Who's in","[[A tier?]]"]}[TV];
 const hl=headline(s.L1,lines,{x:60,y:170,fs:V?120:110,lh:1.06});
 const geo={x:60,y:560,w:960,h:980};const B=makeBoard(s.L1,geo);
 const counts={S:0,A:0,B:0,C:0,F:0};
 TOOLS.forEach(tl=>{const p=B.slot(tl.tier,counts[tl.tier]++);const me=tl.id===TOOLID;
  // hidden: the S card on every Short except Claude Code's; the A row on Claude Code's Short (t5)
  const hide=(tl.tier==='S'&&TOOLID!=='08')||(TV===5&&tl.tier==='A');
  el(hide?`<div class="card" style="left:${p.x}px;top:${p.y}px;border:2px solid var(--sig);font:700 96px 'TeX Gyre Heros Cn';color:#ECE8E1">?</div>`
   :cardHTML(tl,`style="left:${p.x}px;top:${p.y}px;${me?'box-shadow:0 0 0 3px #ECE8E1,0 14px 30px rgba(0,0,0,.5)':'filter:blur(7px) brightness(.55)'}"`),B.board)});
 const pill=el(`<div class="ab" style="left:60px;top:1640px;display:flex;align-items:center;gap:16px;padding:24px 40px;border-radius:50px;background:var(--ink);color:var(--bg);font:700 44px Inter">Full video below <span class="ar" style="display:inline-block">↓</span></div>`,s.L1);
 const ar=pill.querySelector('.ar');
 s.R=t=>{revealLines(hl,t,[W0-.25,W0+.25]);hl.querySelectorAll('.mk').forEach(m=>sweep(m,t,W0+.5));B.ob.style.opacity=cl(P(t,0,.35));
  rise(pill,t,FULL-.2,1e9,20,.5);ar.style.transform=`translateY(${Math.abs(Math.sin(t*5))*8}px)`;s.cam.z=.03*eio(P(t,0,END))}}
