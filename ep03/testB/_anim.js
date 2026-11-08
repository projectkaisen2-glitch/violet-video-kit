// ================= EP03 test B: block 01a on a real Windows 11 desktop (plan approved 08.11) =================
const $=id=>document.getElementById(id);
const P=(t,a,b)=>t<=a?0:t>=b?1:(t-a)/(b-a), lerp=(a,b,k)=>a+(b-a)*k;
const E={io:k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,o:k=>1-Math.pow(1-k,3),s:k=>k*k*(3-2*k),b:k=>{const c=1.5;return 1+(c+1)*Math.pow(k-1,3)+c*Math.pow(k-1,2)}};
const T0=-0.6,T1=17.6;
const MONO="'DejaVu Sans Mono',monospace", UI="Inter,'Segoe UI',sans-serif";
// ---------- events (voice-aligned) ----------
const CLOUD_REQ=[4.6,4.95,6.35,7.4,8.3];         // agent steps while the brain is Anthropic's
const LOCAL_REQ=[11.35,13.25,15.2];               // steps after the swap -> Ollama + GPU
const lastBefore=(arr,t)=>{let r=-99;for(const x of arr)if(x<=t)r=x;return r};
// ---------- wallpaper (Windows 11 dark "bloom"-like, approximated) ----------
function wallpaper(){return `<img src="assets/wall.jpg" style="display:block;width:1920px;height:1080px">`}
// ---------- small icons ----------
const WINLOGO=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 22 22"><defs><linearGradient id="wl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4CC2FF"/><stop offset="1" stop-color="#0067C0"/></linearGradient></defs><rect x="0" y="0" width="10.4" height="10.4" fill="url(#wl)"/><rect x="11.6" y="0" width="10.4" height="10.4" fill="url(#wl)"/><rect x="0" y="11.6" width="10.4" height="10.4" fill="url(#wl)"/><rect x="11.6" y="11.6" width="10.4" height="10.4" fill="url(#wl)"/></svg>`;
const TERMICO=(s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><rect x="1" y="2" width="22" height="20" rx="4" fill="#2B2B2B" stroke="#5A5A5A"/><rect x="1" y="2" width="22" height="5" rx="2" fill="#3C3C3C"/><path d="M5 11 l4 3 -4 3" stroke="#E8E8E8" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M11 18 h7" stroke="#E8E8E8" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const TMICO=(s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><rect x="1" y="2" width="22" height="20" rx="4" fill="#1E5B3A"/><path d="M3 15 h4 l2 -6 3 9 2 -5 h7" stroke="#7CF2A8" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>`;
const FOLDER=(s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><path d="M2 6 a2 2 0 0 1 2 -2 h5 l2 2 h9 a2 2 0 0 1 2 2 v10 a2 2 0 0 1 -2 2 h-16 a2 2 0 0 1 -2 -2z" fill="#F8C744"/><path d="M2 9 h20 v9 a2 2 0 0 1 -2 2 h-16 a2 2 0 0 1 -2 -2z" fill="#FFD866"/></svg>`;
const ICO=(n,s,c)=>`<span style="display:inline-flex;width:${s}px;height:${s}px;color:${c}">${I(n).replace('<svg','<svg width="'+s+'" height="'+s+'" fill="currentColor"')}</span>`;
const WIFI=(on,s=18)=>on?`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M2 9a15 15 0 0 1 20 0"/><path d="M5.5 12.5a10 10 0 0 1 13 0"/><path d="M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1.3" fill="#fff"/></svg>`
 :`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/><circle cx="18.5" cy="18.5" r="5" fill="#C42B1C" stroke="#1C1C1C" stroke-width="1.5"/><path d="M16.6 16.6l3.8 3.8M20.4 16.6l-3.8 3.8" stroke="#fff" stroke-width="1.5"/></svg>`;
// ---------- Windows Terminal frame ----------
function wtFrame(tabTitle,tabIco,body,id){return `<div class="wt-bar"><div class="wt-tab">${tabIco}<span>${tabTitle}</span><span class="x">✕</span></div><div class="wt-plus">＋</div><div class="wt-plus">⌄</div><div class="wctl"><span>—</span><span>▢</span><span>✕</span></div></div><pre class="wt-body" id="${id}">${body}</pre>`}
// ---------- Claude Code TUI ----------
const PS=`<span class="cg">PS C:\\Users\\kai\\todo-app&gt;</span> `;
const WELCOME=`<span class="ccw"><span class="co">✻</span> <b class="cw">Welcome to Claude Code!</b>\n\n  <span class="cg">/help for help, /status for your current setup</span>\n\n  <span class="cg">cwd: C:\\Users\\kai\\todo-app</span></span>`;
const SPIN='✻✶✳✢·✢✳✶';
function ccFooter(local){return `\n<span class="cg">  ? for shortcuts</span>${' '.repeat(24)}<span id="ccFoot" class="${local?'cgr':'cg'}">${local?'qwen3.6:35b-a3b · local':'Opus 5.5 · Claude Max'}</span>`}
function ccInput(txt,cur=true){return `\n<span class="cci"><span class="cw">&gt;</span> ${txt}${cur?'<span class="cblk"> </span>':''}${' '.repeat(Math.max(0,60-txt.length))}</span>`}
function claudeBody(t){
 // phase A: cloud session (until 9.25)
 if(t<9.25){
  let s=PS+'claude'.slice(0,Math.round(P(t,-0.4,0.25)*6))+(t<0.45?'<span class="cblk"> </span>':'');
  if(t<0.55)return s;
  const hk=E.o(P(t,0.55,0.9));s+=`\n\n<span style="display:inline-block;opacity:${hk};transform:translateY(${(1-hk)*8}px)">${WELCOME}</span>\n`;
  if(t<4.45){s+=ccInput('fix the failing test'.slice(0,Math.round(P(t,3.3,4.35)*20)))+ccFooter(false);return s}
  s+=`\n<span class="cg">&gt;</span> <span class="cw">fix the failing test</span>\n`;
  if(t>=4.95)s+=`\n<span class="cw">●</span> <span class="cw">Read</span>(tests\\test_todo.py)\n  <span class="cg">⎿  Read 24 lines (ctrl+r to expand)</span>\n`;
  if(t>=4.6&&t<5.5)s+=`\n<span class="co">${SPIN[Math.floor(t*8)%8]} Reading…</span> <span class="cg">(esc to interrupt)</span>\n`;
  if(t<6.3){s+=ccInput('/status'.slice(0,Math.round(P(t,5.6,6.15)*7)))+ccFooter(false);return s}
  const sk=E.o(P(t,6.3,6.6));
  s+=`\n<span class="cst" style="opacity:${sk};transform:translateY(${(1-sk)*8}px)"> <span class="sttab on">Status</span>  <span class="sttab">Config</span>  <span class="sttab">Usage</span>\n\n <span class="cg">Version:</span>      2.3.1\n <span class="cg">cwd:</span>          C:\\Users\\kai\\todo-app\n <span class="cg">Login method:</span> Claude Max account\n <span class="cg">Model:</span>        <span id="stModel" class="cw">claude-opus-5-5</span>\n <span class="cg">API:</span>          <span id="stApi" class="cw">https://api.anthropic.com</span></span>\n`;
  return s+ccFooter(false)}
 // phase B: back to shell, launch through Ollama (9.25..10.75)
 if(t<10.75){return `${PS}<span class="cw">${'ollama launch claude --model qwen3.6:35b-a3b'.slice(0,Math.round(P(t,9.3,9.95)*45))}</span>${t<10.0?'<span class="cblk"> </span>':''}`+(t>=10.05?`\n<span class="cg">Starting Claude Code with qwen3.6:35b-a3b via http://localhost:11434 …</span>`:'')}
 // phase C: local session
 let s=`${PS}<span class="cw">ollama launch claude --model qwen3.6:35b-a3b</span>\n\n${WELCOME}\n\n<span class="cg">&gt;</span> <span class="cw">fix the failing test</span>\n`;
 if(t>=11.35)s+=`\n<span class="cw">●</span> <span class="cw">Read</span>(tests\\test_todo.py)\n  <span class="cg">⎿  Read 24 lines (ctrl+r to expand)</span>\n`;
 if(t>=13.25)s+=`\n<span class="cw">●</span> <span class="cw">Update</span>(todo.py)\n  <span class="cg">⎿  Updated todo.py with 1 addition and 1 removal</span>\n`;
 if(t>=15.2)s+=`\n<span class="cw">●</span> <span class="cw">Bash</span>(pytest -q)\n  <span class="cg">⎿</span>  <span class="cgr" id="ccPass">1 passed in 0.38s</span>\n`;
 if(t<15.2)s+=`\n<span class="co">${SPIN[Math.floor(t*8)%8]} ${t<13.25?'Reading…':'Running tests…'}</span> <span class="cg">(esc to interrupt)</span>\n`;
 return s+ccFooter(true)}
// ---------- Ollama server log ----------
const OL=[
 [10.05,`<span class="cg">time=2026-11-08T09:41:12 level=INFO source=server.go msg="starting llama server"</span>`],
 [10.15,`<span class="cg">llama_model_loader: loaded meta data from</span> qwen3.6-35b-a3b-q4_k_m.gguf`],
 [10.25,`load_tensors: offloading 41 repeating layers to GPU`],
 [10.35,`load_tensors: <span id="olOff" class="cgr">offloaded 41/41 layers to GPU</span>`],
 [10.45,`load_tensors:        CUDA0 model buffer size =  6912.40 MiB`],
 [10.55,`llama_context: n_ctx = 32768`],
 [10.65,`<span class="cg">time=2026-11-08T09:41:15 level=INFO msg=</span>"llama runner started in 3.12 seconds"`]];
const GIN=(tt,dur)=>`<span class="cg">[GIN] 2026/11/08 - ${tt} |</span> <span class="cok">200</span> <span class="cg">|</span> ${dur} <span class="cg">|</span> 127.0.0.1 <span class="cg">|</span> <span class="cbl">POST</span> "/v1/messages"`;
const OLREQ=[[11.4,GIN('09:41:18','  2.481s')],[13.3,GIN('09:41:21','  1.906s')],[15.25,GIN('09:41:23','  1.215s')]];
function ollamaBody(t){let s=`<span class="cg">PS C:\\Users\\kai&gt;</span> ollama serve\n`;OL.forEach(([a,l])=>{if(t>=a)s+=l+'\n'});OLREQ.forEach(([a,l],i)=>{if(t>=a)s+=`<span id="olR${i}" class="${t<a+.6?'flash':''}">${l}</span>\n`});return s}
// ---------- Task Manager ----------
function series(fn,t,n=60,span=14){const a=[];for(let i=0;i<n;i++){a.push(fn(t-span+span*i/(n-1)))}return a}
function spikeAt(times,x,w=.35){let v=0;for(const s of times){if(x>=s&&x<s+2.5)v=Math.max(v,Math.exp(-(x-s)/w))}return v}
const wifiOn=x=>x<14.7;
const wifiSend=x=>wifiOn(x)?(x<10.7?(.05+.9*spikeAt(CLOUD_REQ,x)+.03*Math.sin(x*13)**2):(.03+.02*Math.sin(x*9)**2)):0;
const gpuMem=x=>.4/8+(7.1-.4)/8*E.io(P(x,10.45,11.0));
const gpu3d=x=>.03+.9*spikeAt(LOCAL_REQ,x,.6)+(x>10.4&&x<10.9?.35:0);
function path(a,w,h){return a.map((v,i)=>`${i?'L':'M'}${(i/(a.length-1)*w).toFixed(1)} ${(h-v*h).toFixed(1)}`).join(' ')}
function graph(a,w,h,col,fill){const p=path(a,w,h);let g='';for(let i=1;i<10;i++)g+=`<path d="M${i*w/10} 0 V${h}" stroke="${col}" stroke-opacity=".12"/>`;for(let i=1;i<5;i++)g+=`<path d="M0 ${i*h/5} H${w}" stroke="${col}" stroke-opacity=".12"/>`;
 return `<svg width="${w}" height="${h}" style="display:block;border:1px solid ${col}66">${g}<path d="${p} L${w} ${h} L0 ${h} Z" fill="${fill}"/><path d="${p}" stroke="${col}" stroke-width="1.6" fill="none"/></svg>`}
function tmBody(t){
 const ws=wifiSend(t),wr=wifiOn(t)?ws*.4+.04:0,gm=gpuMem(t),g3=gpu3d(t);
 const tile=(id,name,sub,val,arr,col,sel)=>`<div class="tmt${sel?' sel':''}" id="${id}"><div class="tmsp">${graph(arr,70,44,col,col+'33')}</div><div><div class="tmn">${name}</div><div class="tms">${sub}</div><div class="tms">${val}</div></div></div>`;
 const wifiTxt=wifiOn(t)?`S: ${(ws*2.4).toFixed(1)} R: ${(wr*2.4).toFixed(1)} Mbps`:`<span style="color:#FF99A4">Not connected</span>`;
 return `<div class="tm-title">${TMICO(18)}<span>Task Manager</span><div class="tm-search">Type a name, publisher, or PID to search</div><div class="wctl" style="position:static;margin-left:auto"><span>—</span><span>▢</span><span>✕</span></div></div>
 <div class="tm-main"><div class="tm-nav">${['☰','▦','◔','⟲','⏻','👥','≣','⚙'].map((x,i)=>`<div class="${i==2?'on':''}">${x}</div>`).join('')}</div>
 <div class="tm-list"><div class="tm-h">Performance</div>
  ${tile('tCpu','CPU','23%  3.81 GHz','',series(x=>.2+.08*Math.sin(x*3)**2,t),'#2AA0F2')}
  ${tile('tMem','Memory','14.2/31.9 GB (45%)','',series(x=>.45,t),'#B46CF0')}
  ${tile('tDisk','Disk 0 (C:)','SSD (NVMe)','1%',series(x=>.02,t),'#4CC26A')}
  ${tile('tWifi','Wi-Fi','Wi-Fi',wifiTxt,series(wifiSend,t),'#D88A28')}
  ${tile('tGpu','GPU 0','NVIDIA GeForce RTX 4060',`${Math.round(g3*100)}%  (${Math.round(45+g3*20)} °C)`,series(gpu3d,t),'#47B3E8',true)}
 </div>
 <div class="tm-det"><div style="display:flex;justify-content:space-between;align-items:flex-end"><div class="tm-big">GPU</div><div class="tm-model">NVIDIA GeForce RTX 4060</div></div>
  <div class="tm-lbl"><span>3D</span><span>${Math.round(g3*100)}%</span></div>${graph(series(gpu3d,t,90),380,150,'#47B3E8','#47B3E833')}
  <div class="tm-lbl" style="margin-top:12px"><span>Dedicated GPU memory usage</span><span>8.0 GB</span></div><div id="tmMemG">${graph(series(gpuMem,t,90),380,80,'#47B3E8','#47B3E855')}</div>
  <div class="tm-stats"><div><i>Utilization</i><b>${Math.round(g3*100)}%</b></div><div><i>Dedicated GPU memory</i><b id="tmMem">${(gm*8).toFixed(1)}/8.0 GB</b></div><div><i>Shared GPU memory</i><b>0.1/15.9 GB</b></div><div><i>Driver version</i><b>572.16</b></div></div>
 </div></div>`}
// ---------- Quick Settings ----------
function qsBody(t){const on=t<14.62;const tile=(ic,l,s,a)=>`<div class="qt"><div class="qb ${a?'on':''}">${ic}</div><div class="ql">${l}</div>${s?`<div class="qs">${s}</div>`:''}</div>`;
 return `<div class="qgrid">${tile(WIFI(true,20),'Wi-Fi',on?'HomeNet-5G':'Off',on).replace('class="qt"','class="qt" id="qsWifi"')}${tile('✱','Bluetooth','Not connected',true)}${tile('✈','Airplane mode','',false)}${tile('☾','Night light','',false)}${tile('♿','Accessibility','',false)}${tile('⇪','Nearby sharing','',false)}</div>
 <div class="qslider"><span>🔊</span><div class="qtrack"><div style="width:62%"></div></div><span>›</span></div><div class="qfoot"><span>✎</span><span>⚙</span></div>`}
// ---------- taskbar ----------
function taskbar(t){const off=t>=14.7;const ic=(h,act,id='')=>`<div class="tbi${act?' act':''}" ${id?`id="${id}"`:''}>${h}</div>`;
 return `<div class="tb-c">${ic(WINLOGO(22))}<div class="tb-search">⌕  Search</div>${ic(FOLDER(24))}${ic(ICO('googlechrome',22,'#4285F4'))}${ic(TERMICO(24),true,'tbTerm')}${ic(ICO('ollama',22,'#fff'),t>=10.0)}${ic(TMICO(24),true)}</div>
 <div class="tb-r"><span style="font-size:14px">⌃</span><div class="tb-net" id="tbNet">${WIFI(!off,18)}<span style="font-size:16px">🔊</span></div><div class="tb-clk"><div>9:41 AM</div><div>11/8/2026</div></div></div>`}
// ---------- scene ----------
document.getElementById('frames').innerHTML=`<div class="S" id="S">
 <div class="ab" id="stage" style="left:0;top:0;width:1920px;height:1080px;transform-origin:0 0">
  <div class="ab" style="left:0;top:0">${wallpaper()}</div>
  <div class="win w11" id="TM" style="left:1210px;top:34px;width:670px;height:720px"></div>
  <div class="win w11 wt" id="OW" style="left:330px;top:652px;width:1120px;height:360px">${wtFrame('ollama',ICO('ollama',16,'#fff'),'','olb')}</div>
  <div class="win w11 wt" id="WT" style="left:50px;top:34px;width:1140px;height:600px">${wtFrame('claude',`<img src="assets/l-claude-color.svg" width="16" height="16">`,'','ccb')}</div>
  <div class="win w11" id="QS" style="left:1430px;top:540px;width:470px;height:430px"></div>
  <div class="ab tbar" id="TB" style="left:0;top:1032px;width:1920px;height:48px"></div>
 </div>
 <svg class="ab" id="dots" style="left:0;top:0;z-index:20" width="1920" height="1080"></svg><svg class="ab" id="pk" style="left:0;top:0;z-index:19" width="1920" height="1080"></svg><div class="hl" id="hl2" style="z-index:21;display:none"></div>
 <div class="hl" id="hl" style="z-index:21;display:none"></div>
 <div class="ab pl" id="pFree" style="left:1300px;top:70px"><div class="H" style="font-size:110px"><span class="PL" id="pFreeS"></span></div></div>
 <div class="ab pl" id="pBrain" style="left:1180px;top:120px"><div class="H" style="font-size:92px"><span class="PL" id="pBrainS">THE BRAIN</span></div></div>
 <div class="ab pl" id="pZero" style="left:1180px;top:560px"><div class="H" style="font-size:96px"><span class="PL" id="pZeroS">$200/MO</span></div></div>
 <div class="ab pl" id="pLim" style="left:1180px;top:680px"><div class="H" style="font-size:76px"><span class="PL" id="pLimS">NO LIMITS</span></div></div>
 ${'<svg class="cur" id="cur" style="z-index:30;left:0;top:0" viewBox="0 0 20 28"><path d="M1 1 L1 22 L6.5 17 L10 26 L13.5 24.5 L10 16 L17 16 Z" fill="#fff" stroke="#000" stroke-width="1.3" stroke-linejoin="round"/></svg>'}
</div>`;
document.head.insertAdjacentHTML('beforeend',`<style>
.w11{border-radius:8px;box-shadow:0 32px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.09)}
.wt{background:#0C0C0C}
.wt-bar{height:40px;background:#1F1F1F;display:flex;align-items:flex-end;padding-left:8px;position:relative}
.wt-tab{height:34px;background:#0C0C0C;border-radius:8px 8px 0 0;display:flex;align-items:center;gap:9px;padding:0 14px;color:#F2F2F2;font:13px ${UI};min-width:210px}
.wt-tab .x{margin-left:auto;color:#9A9A9A;font-size:11px}
.wt-plus{height:34px;display:flex;align-items:center;padding:0 12px;color:#CFCFCF;font-size:15px}
.wctl{position:absolute;right:0;top:0;height:40px;display:flex}.wctl span{width:46px;display:flex;align-items:center;justify-content:center;color:#E0E0E0;font:13px ${UI}}
.wt-body{padding:14px 18px;font:17px/25px ${MONO};color:#CCCCCC;white-space:pre}
.wt-body .cg{color:#8C8C8C}.wt-body .cw{color:#F2F2F2}.wt-body .co{color:#D97757}.wt-body .cgr{color:#4EBA65}.wt-body .cok{color:#16C60C}.wt-body .cbl{color:#3B78FF}
.wt-body .cblk{background:#CCCCCC}
.ccw{display:inline-block;border:2px solid #D97757;border-radius:10px;padding:10px 18px;white-space:pre}
.cci{display:inline-block;border:2px solid #5A5A5E;border-radius:10px;padding:4px 14px;white-space:pre}
.cst{display:inline-block;border:2px solid #5A5A5E;border-radius:10px;padding:10px 16px;white-space:pre}
.sttab{color:#8C8C8C;padding:0 6px}.sttab.on{background:#D97757;color:#111;border-radius:3px}
.flash{background:rgba(71,179,232,.18)}
#TM{background:#202020;color:#fff;font-family:${UI}}
.tm-title{height:44px;display:flex;align-items:center;gap:10px;padding-left:14px;font-size:13px;color:#EDEDED}
.tm-search{margin-left:60px;width:280px;height:30px;border-radius:5px;background:#2D2D2D;border-bottom:1px solid #8A8A8A;color:#9A9A9A;font-size:12px;display:flex;align-items:center;padding-left:12px}
.tm-main{display:flex;height:676px}
.tm-nav{width:48px;padding-top:8px}.tm-nav div{height:40px;display:flex;align-items:center;justify-content:center;color:#CFCFCF;font-size:16px;border-radius:5px;margin:2px 4px}.tm-nav .on{background:#2D2D2D;box-shadow:inset 3px 0 0 #4CC2FF}
.tm-list{width:200px;background:#272727;border-radius:8px 0 0 0;padding:10px 6px}
.tm-h{font-size:18px;font-weight:600;padding:2px 6px 10px}
.tmt{display:flex;gap:8px;padding:7px 6px;border-radius:5px;margin-bottom:3px}.tmt.sel{background:#3A3A3A}
.tmn{font-size:13px}.tms{font-size:11px;color:#BDBDBD;white-space:nowrap;line-height:15px}
.tm-det{flex:1;padding:16px 22px;background:#272727}
.tm-big{font-size:30px;font-weight:600}.tm-model{font-size:14px;color:#D6D6D6}
.tm-lbl{display:flex;justify-content:space-between;font-size:12px;color:#BDBDBD;margin:14px 0 4px}
.tm-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px 18px;margin-top:18px}.tm-stats i{display:block;font-style:normal;font-size:12px;color:#BDBDBD}.tm-stats b{font-size:20px;font-weight:600}
#QS{background:rgba(36,36,36,.96);color:#fff;font-family:${UI};padding:22px;backdrop-filter:blur(30px)}
.qgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px 14px}
.qt{text-align:center}.qb{height:56px;border-radius:6px;background:#3A3A3A;display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff}.qb.on{background:#4CC2FF;color:#000}.qb.on svg *{stroke:#000}.qb.on svg circle{fill:#000}
.ql{font-size:13px;margin-top:7px}.qs{font-size:11px;color:#BDBDBD}
.qslider{display:flex;align-items:center;gap:14px;margin-top:26px;font-size:16px}.qtrack{flex:1;height:4px;background:#5A5A5A;border-radius:2px}.qtrack div{height:100%;background:#4CC2FF;border-radius:2px}
.qfoot{display:flex;justify-content:flex-end;gap:22px;margin-top:30px;color:#CFCFCF}
.tbar{background:rgba(28,28,30,.86);backdrop-filter:blur(30px);border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center}
.tb-c{position:absolute;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:4px;height:48px}
.tbi{width:44px;height:40px;border-radius:5px;display:flex;align-items:center;justify-content:center;position:relative}.tbi.act:after{content:'';position:absolute;bottom:2px;width:16px;height:3px;border-radius:2px;background:#4CC2FF}
.tb-search{width:150px;height:32px;border-radius:16px;background:#2E2E2E;color:#CFCFCF;font:13px ${UI};display:flex;align-items:center;padding-left:14px;margin:0 4px}
.tb-r{position:absolute;right:12px;display:flex;align-items:center;gap:12px;color:#fff;font:12px ${UI}}
.tb-net{display:flex;align-items:center;gap:10px;padding:5px 10px;border-radius:5px}.tb-clk{text-align:right;line-height:16px}
.pl{z-index:22}

.wt{background:rgba(12,16,26,.90);backdrop-filter:blur(28px) saturate(1.3)}
.wt-bar{background:rgba(22,28,44,.82)}.wt-tab{background:rgba(12,16,26,.95)}
.w11{border-radius:10px;box-shadow:0 40px 90px rgba(10,20,45,.55),0 8px 24px rgba(10,20,45,.35),0 0 0 1px rgba(255,255,255,.10)}
.tbar{background:rgba(18,22,34,.72)!important;backdrop-filter:blur(30px) saturate(1.4)}
.tbi.act:after{background:#6E9BE6!important}
svg circle[fill="#FFE600"]{stroke:#0A0A0A;stroke-width:1.3}
.hl{box-shadow:0 0 0 2px rgba(10,10,10,.75),0 0 24px rgba(255,230,0,.25)!important}
</style>`);
// ---------- window focus / depth ----------
// focus timeline: which window is active
function focusAt(t){if(t>=10.0&&t<10.9)return 'OW';return 'WT'}
function setWin(id,act,k){const e=$(id);e.style.filter=act?'none':`blur(${1.6*k}px) brightness(${1-.32*k})`;}
// camera keyframes [t,x,y,s]
const CK=[[-0.6,960,540,1],[0.25,960,540,1],[1.9,690,400,1.42],[5.3,690,410,1.48],[6.2,800,470,1.25],[9.95,800,470,1.27],[10.45,1000,560,1.12],[11.75,1000,560,1.13],[12.55,700,470,1.5],[13.7,700,470,1.53],[14.2,1520,720,1.5],[15.0,1520,720,1.52],[15.7,960,600,1.15],[17.6,960,600,1.17]];
function camAt(t){for(let i=0;i<CK.length-1;i++){const a=CK[i],b=CK[i+1];if(t>=a[0]&&t<=b[0]){const k=E.io(P(t,a[0],b[0]));return[lerp(a[1],b[1],k),lerp(a[2],b[2],k),lerp(a[3],b[3],k)]}}return CK[CK.length-1].slice(1)}
// cursor keyframes (screen coords) [t, [x,y] | id, dx, dy]
const CUK=[[13.6,[1250,820]],[14.05,'tbNet',14,12],[14.25,'tbNet',14,12],[14.55,'qsWifi',40,26],[14.75,'qsWifi',40,26],[15.6,[1500,700]],[17.6,[1510,705]]];
const CLK=[14.12,14.62];
function pos(k){if(Array.isArray(k[1]))return{x:k[1][0],y:k[1][1]};const e=$(k[1]);if(!e)return{x:960,y:540};const r=e.getBoundingClientRect();return{x:r.left+(k[2]||0),y:r.top+(k[3]||0)}}
function curAt(t){if(t<=CUK[0][0])return pos(CUK[0]);for(let i=0;i<CUK.length-1;i++){const a=CUK[i],b=CUK[i+1];if(t>=a[0]&&t<=b[0]){const pa=pos(a),pb=pos(b),k=E.io(P(t,a[0],b[0]));return{x:lerp(pa.x,pb.x,k),y:lerp(pa.y,pb.y,k)}}}return pos(CUK[CUK.length-1])}
function DOTS(a,b,k){let h='';const n=Math.round(34*k);for(let i=0;i<=n;i++){const u=i/34;const x=(1-u)**3*a[0]+3*(1-u)**2*u*a[0]+3*(1-u)*u*u*b[0]+u**3*b[0];const y=(1-u)**3*a[1]+3*(1-u)**2*u*((a[1]+b[1])/2)+3*(1-u)*u*u*b[1]+u**3*b[1];h+=`<circle cx="${x}" cy="${y}" r="3" fill="#FFE600"/>`}return h}
function plateIn(id,t0,t1,mode){const e=$(id);const ki=E.o(P(_t,t0,t0+.35)),ko=E.io(P(_t,t1,t1+.35));e.style.opacity=ki*(1-ko);e.style.transform=`translateY(${(1-ki)*16-ko*16}px)`;return ki*(1-ko)}
let _t=0,lastC='',lastO='',lastTMk='',lastQ='',lastTB='';
function R(t){_t=t;
 // content
 const cb=claudeBody(t);if(cb!==lastC){$('ccb').innerHTML=cb;lastC=cb}
 const ob=ollamaBody(t);if(ob!==lastO){$('olb').innerHTML=ob;lastO=ob}
 $('TM').innerHTML=tmBody(t);
 const qb=qsBody(t);if(qb!==lastQ){$('QS').innerHTML=qb;lastQ=qb}
 const tb=taskbar(t);if(tb!==lastTB){$('TB').innerHTML=tb;lastTB=tb}
 // Ollama window: opens at 10.0
 const oo=E.o(P(t,9.98,10.3));const OW=$('OW');OW.style.opacity=oo;OW.style.transform=`translateY(${(1-oo)*24}px) scale(${.96+.04*oo})`;
 // focus / z-order (window swap like test 2)
 const f=focusAt(t);const kOW=f==='OW'?1-E.io(P(t,10.0,10.25)):E.io(P(t,10.9,11.15)), kWT=f==='WT'?(t<11?E.io(P(t,10.9,11.15))*0+0:0):1;
 $('WT').style.zIndex=f==='OW'?2:3;$('OW').style.zIndex=f==='OW'?3:2;
 setWin('WT',f==='WT',f==='OW'?E.io(P(t,10.0,10.3)):1-E.io(P(t,10.9,11.2)) );if(f==='WT'&&t<10)setWin('WT',true,0);
 setWin('OW',f==='OW',1);setWin('TM',false,.55);
 // WT steps aside a little while Ollama is in front, comes back after
 const sw=f==='OW'?E.io(P(t,10.0,10.3)):1-E.io(P(t,10.9,11.2));const WT=$('WT');WT.style.transform=`translate(${-20*sw}px,${-14*sw}px) scale(${1-.03*sw})`;WT.style.transformOrigin='0 0';
 // Quick settings flyout 14.05..15.3
 const qi=E.o(P(t,14.1,14.4)),qo=E.io(P(t,15.2,15.45));const QS=$('QS');QS.style.opacity=qi*(1-qo);QS.style.transform=`translateY(${(1-qi)*40+qo*30}px)`;QS.style.zIndex=5;QS.style.display=qi*(1-qo)>0?'block':'none';
 // camera
 const c=camAt(t);$('stage').style.transform=`translate(${960-c[0]*c[2]}px,${540-c[1]*c[2]}px) scale(${c[2]})`;
 // plates
 const fN=Math.round(P(t,1.46,1.85)*4);$('pFreeS').textContent='FREE'.slice(0,fN);plateIn('pFree',1.46,5.1);if(fN===0)$('pFree').style.opacity=0;
 plateIn('pBrain',6.97,9.15);
 const bk=E.o(P(t,7.0,7.3)),bs=$('pBrainS');bs.style.backgroundImage=`linear-gradient(90deg,#FFE600 ${bk*100}%,rgba(10,10,10,.85) ${bk*100}%)`;bs.style.backgroundColor='transparent';bs.style.color=bk>.5?'#0A0A0A':'#fff';
 plateIn('pZero',12.3,13.75);const v=Math.round(lerp(200,0,E.io(P(t,12.4,13.0))));$('pZeroS').textContent=`$${v}/MO`;
 const lk=E.o(P(t,13.45,13.8));plateIn('pLim',13.4,13.75);$('pLimS').style.clipPath=`inset(0 ${100-lk*100}% 0 0)`;
 // highlight + dots
 let tgt=null,hk=0,pl=null;
 if(t>=6.97&&t<9.2){if(t<8.24){tgt='stModel';hk=P(t,6.97,7.2)}else{tgt='stApi';hk=1-P(t,9.0,9.2)}pl='pBrainS'}
 if(t>=8.24&&t<9.2){} // rect travels to the API line (handled by measuring the target)
 if(t>=12.35&&t<13.75){tgt='ccFoot';hk=P(t,12.35,12.6)*(1-P(t,13.55,13.75));pl='pZeroS'}
 if(t>=15.35){tgt='ccPass';hk=P(t,15.35,15.6)}
 const hl=$('hl'),dots=$('dots');
 if(tgt&&$(tgt)&&hk>0){let r=$(tgt).getBoundingClientRect();
  if(tgt==='stApi'){const r0=$('stModel').getBoundingClientRect(),k=E.io(P(t,8.24,8.6));r={left:lerp(r0.left,r.left,k),top:lerp(r0.top,r.top,k),width:lerp(r0.width,r.width,k),height:lerp(r0.height,r.height,k)};r.right=r.left+r.width;r.bottom=r.top+r.height}
  const p=7;hl.style.display='block';hl.style.opacity=hk;hl.style.left=(r.left-p)+'px';hl.style.top=(r.top-p)+'px';hl.style.width=(r.width+2*p)+'px';hl.style.height=(r.height+2*p)+'px';
  if(pl&&$(pl.replace('S',''))&&parseFloat($(pl.replace('S','')).style.opacity)>0.05){const pr=$(pl).getBoundingClientRect();const up=pr.top<r.top;const a=[r.left+r.width/2,up?r.top-p:r.bottom+p],b=[(pr.left+pr.right)/2,up?pr.bottom:pr.top];dots.innerHTML=DOTS(a,b,hk)}else dots.innerHTML=''}
 else{hl.style.display='none';dots.innerHTML=''}
 // anchored plates follow their targets
 const anc=(pid,tid,dx,dy)=>{const e=$(tid);if(!e)return;const r=e.getBoundingClientRect();const p=$(pid);p.style.left=Math.min(1920-p.offsetWidth-30,Math.max(30,r.right+dx))+'px';p.style.top=Math.min(1080-p.offsetHeight-30,Math.max(30,r.top+dy))+'px'};
 if(t>=6.9&&t<9.6)anc('pBrain','stModel',170,-190);
 // cause -> effect: Wi-Fi tile reacts to the API line
 const h2=$('hl2'),k2=P(t,8.55,8.75)*(1-P(t,9.0,9.2));
 if(k2>0){const r=$('tWifi').getBoundingClientRect(),p=5;h2.style.display='block';h2.style.opacity=k2;h2.style.left=(r.left-p)+'px';h2.style.top=(r.top-p)+'px';h2.style.width=(r.width+2*p)+'px';h2.style.height=(r.height+2*p)+'px';
  const a=$('stApi').getBoundingClientRect();dots.innerHTML+=DOTS([a.right+8,a.top+a.height/2],[r.left-p,r.top+r.height/2],E.o(P(t,8.4,8.7)))}else h2.style.display='none';
 // data packets: cloud steps leave through Wi-Fi to the internet; local steps go Claude Code -> Ollama -> GPU
 let pk='';const C=id=>{const e=$(id);if(!e)return null;const r=e.getBoundingClientRect();return{l:r.left,r:r.right,t:r.top,b:r.bottom,cx:(r.left+r.right)/2,cy:(r.top+r.bottom)/2}};
 const along=(pts,u)=>{const n=pts.length-1,i=Math.min(n-1,Math.floor(u*n)),k=u*n-i;return[lerp(pts[i][0],pts[i+1][0],k),lerp(pts[i][1],pts[i+1][1],k)]};
 const wt=C('ccb'),wf=C('tWifi'),gp=C('tmMemG');
 for(const s of CLOUD_REQ){const u=P(t,s-.15,s+.75);if(u>0&&u<1&&wt&&wf){const pts=[[wt.r-30,wt.cy],[wf.l,wf.cy],[wf.cx,wf.cy],[wf.cx+40,-40]];for(let j=0;j<6;j++){const q=along(pts,Math.max(0,u-j*.025));pk+=`<circle cx="${q[0]}" cy="${q[1]}" r="${7-j}" fill="#FF9F5A" opacity="${(1-j/6)*.9}"/>`}}}
 OLREQ.forEach(([s],i)=>{const u=P(t,s-.35,s+.55);const ol=C('olR'+i)||C('olb');if(u>0&&u<1&&wt&&ol&&gp){const pts=[[wt.r-30,wt.cy],[ol.l+20,ol.cy],[ol.r-40,ol.cy],[gp.l,gp.cy]];for(let j=0;j<6;j++){const q=along(pts,Math.max(0,u-j*.025));pk+=`<circle cx="${q[0]}" cy="${q[1]}" r="${7-j}" fill="#4EBA65" opacity="${(1-j/6)*.9}"/>`}}});
 $('pk').innerHTML=pk;
 // cursor
 const cu=curAt(t),clk=CLK.reduce((m,x)=>Math.max(m,Math.sin(P(t,x-.05,x+.13)*Math.PI)),0);const cur=$('cur');
 cur.style.left=cu.x+'px';cur.style.top=cu.y+'px';cur.style.transformOrigin='0 0';cur.style.transform=`scale(${1.3*(1-.14*clk)})`;cur.style.opacity=P(t,13.55,13.8);
 $('S').style.opacity=E.o(P(t,-0.6,-0.25));
}
window.R=R;R(T0);window.READY=true;
const qs=new URLSearchParams(location.search);if(!qs.has('render')){const st=performance.now();(function loop(){R(T0+((performance.now()-st)/1000)%(T1-T0));requestAnimationFrame(loop)})()}
