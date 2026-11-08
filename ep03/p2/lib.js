// ===== EP03 storyboard library: real interfaces on one Windows 11 PC + drawn explainers built from the same material =====
const I=n=>window.ICONS[n]||'';
const MONO="'DejaVu Sans Mono',monospace", UI="Inter,'Segoe UI',sans-serif";
const CUR=(x,y)=>`<svg class="cur" style="left:${x}px;top:${y}px" viewBox="0 0 20 28"><path d="M1 1 L1 22 L6.5 17 L10 26 L13.5 24.5 L10 16 L17 16 Z" fill="#fff" stroke="#000" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
const W=(x,y,w,h,cls,inner,st='')=>`<div class="win w11 ${cls}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;${st}">${inner}</div>`;
const AB=(x,y,inner,st='')=>`<div class="ab" style="left:${x}px;top:${y}px;${st}">${inner}</div>`;
const IMG=(n,s)=>`<img src="assets/${n}" width="${s}" height="${s}" style="vertical-align:middle">`;
const ICO=(n,s,c)=>`<span style="display:inline-flex;width:${s}px;height:${s}px;color:${c};vertical-align:middle">${I(n).replace('<svg','<svg width="'+s+'" height="'+s+'" fill="currentColor"')}</span>`;
// ---------- Windows 11 pieces ----------
function wallpaper(){return `<img class="ab" src="assets/wall.jpg" style="left:0;top:0;width:1920px;height:1080px">`}
const WINLOGO=(s=22)=>`<svg width="${s}" height="${s}" viewBox="0 0 22 22"><defs><linearGradient id="wl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4CC2FF"/><stop offset="1" stop-color="#0067C0"/></linearGradient></defs><rect width="10.4" height="10.4" fill="url(#wl)"/><rect x="11.6" width="10.4" height="10.4" fill="url(#wl)"/><rect y="11.6" width="10.4" height="10.4" fill="url(#wl)"/><rect x="11.6" y="11.6" width="10.4" height="10.4" fill="url(#wl)"/></svg>`;
const TERMICO=(s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><rect x="1" y="2" width="22" height="20" rx="4" fill="#2B2B2B" stroke="#5A5A5A"/><rect x="1" y="2" width="22" height="5" rx="2" fill="#3C3C3C"/><path d="M5 11 l4 3 -4 3" stroke="#E8E8E8" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M11 18 h7" stroke="#E8E8E8" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const TMICO=(s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><rect x="1" y="2" width="22" height="20" rx="4" fill="#1E5B3A"/><path d="M3 15 h4 l2 -6 3 9 2 -5 h7" stroke="#7CF2A8" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>`;
const FOLDER=(s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24"><path d="M2 6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="#F8C744"/><path d="M2 9h20v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="#FFD866"/></svg>`;
const WIFI=(s=18,c='#fff')=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"><path d="M2 9a15 15 0 0 1 20 0"/><path d="M5.5 12.5a10 10 0 0 1 13 0"/><path d="M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1.3" fill="${c}"/></svg>`;
const LMICO=(s=22)=>`<span style="display:inline-flex;width:${s}px;height:${s}px;border-radius:${s*.25}px;background:linear-gradient(135deg,#6E56CF,#3E63DD);align-items:center;justify-content:center">${ICO('l-lmstudio',s*.7,'#fff')}</span>`;
function taskbar(o={}){const ic=(h,act,id='')=>`<div class="tbi${act?' act':''}" ${id?`id="${id}"`:''}>${h}</div>`;
 return `<div class="ab tbar" style="left:0;top:1032px;width:1920px;height:48px"><div class="tb-c">${ic(WINLOGO(22))}<div class="tb-search">⌕  Search</div>${ic(FOLDER(24))}${ic(ICO('googlechrome',22,'#4285F4'),o.chrome)}${ic(TERMICO(24),o.term!==false,'tbTerm')}${ic(ICO('ollama',22,'#fff'),o.ollama,'tbOllama')}${ic(LMICO(22),o.lm,'tbLm')}${ic(`<img src="assets/code.png" width="22" height="22">`,o.code,'tbCode')}${ic(TMICO(24),o.tm)}</div>
 <div class="tb-r"><span style="font-size:14px">⌃</span>${o.ollamaTray?`<span id="trayOllama" style="display:inline-flex">${ICO('ollama',16,'#fff')}</span>`:''}<div class="tb-net">${WIFI(18)}<span style="font-size:16px">🔊</span></div><div class="tb-clk" id="tbClk"><div>9:41 AM</div><div>${o.date||'11/8/2026'}</div></div></div></div>`}
// ---------- Windows Terminal ----------
function wt(title,ico,body,o={}){return `<div class="wt-bar"><div class="wt-tab">${ico}<span>${title}</span><span class="x">✕</span></div>${o.tab2?`<div class="wt-tab off">${o.tab2}</div>`:''}<div class="wt-plus">＋</div><div class="wt-plus">⌄</div><div class="wctl"><span>—</span><span>▢</span><span>✕</span></div></div><pre class="wt-body" style="${o.fs?`font-size:${o.fs}px;line-height:${Math.round(o.fs*1.45)}px`:''}">${body}</pre>`}
const PSI=(dir='todo-app')=>`<span class="cg">PS C:\\Users\\kai${dir?'\\'+dir:''}&gt;</span> `;
const CCWEL=`<span class="ccw"><span class="co">✻</span> <b class="cw">Welcome to Claude Code!</b>\n\n  <span class="cg">/help for help, /status for your current setup</span>\n\n  <span class="cg">cwd: C:\\Users\\kai\\todo-app</span></span>`;
const ccFoot=(local,id='ccFoot')=>`\n<span class="cg">  ? for shortcuts</span>${' '.repeat(24)}<span id="${id}" class="${local?'cgr':'cg'}">${local?'qwen3.6:35b-a3b · local':'Opus 5.5 · Claude Max'}</span>`;
const ccIn=(txt)=>`\n<span class="cci"><span class="cw">&gt;</span> ${txt}<span class="cblk"> </span>${' '.repeat(Math.max(0,58-txt.replace(/<[^>]+>/g,'').length))}</span>`;
const CLAUDE_TAB=['claude',IMG('l-claude-color.svg',16)];
const PS_TAB=['PowerShell',`<span style="display:inline-flex;width:16px;height:16px;border-radius:3px;background:#012456;color:#fff;font:700 10px ${MONO};align-items:center;justify-content:center">&gt;_</span>`];
// ---------- Chrome (light) ----------
function chrome(tabs,url,content,o={}){return `<div class="cr-tabs">${tabs.map((t,i)=>`<div class="cr-tab${i?'':' on'}">${t[0]}<span>${t[1]}</span><span class="x">✕</span></div>`).join('')}<div class="cr-plus">＋</div><div class="wctl dark"><span>—</span><span>▢</span><span>✕</span></div></div>
 <div class="cr-bar"><span>←</span><span>→</span><span>↻</span><div class="cr-url"><span class="lk">⊜</span>${url}</div><span>☆</span><span class="cr-av">K</span></div><div class="cr-page" style="${o.bg?'background:'+o.bg:''}">${content}</div>`}
// ---------- VS Code (dark) ----------
function vscode(o){return `<div class="vs-title"><img src="assets/code.png" width="16" height="16"><span class="vs-menu">File  Edit  Selection  View  Go  Run  Terminal  Help</span><div class="vs-search">⌕ todo-app</div><div class="wctl"><span>—</span><span>▢</span><span>✕</span></div></div>
 <div class="vs-main"><div class="vs-act">${['⧉','⌕','⑂','▷','⊞'].map((x,i)=>`<div class="${i==0?'on':''}">${x}</div>`).join('')}<div style="margin-top:auto">${IMG('l-claudecode.svg',22)}</div></div>
 <div class="vs-side"><div class="vs-h">EXPLORER</div><div class="vs-h2">⌄ TODO-APP</div>${o.files.map(f=>`<div class="vs-f${f[1]?' sel':''}">${f[0]}</div>`).join('')}</div>
 <div class="vs-ed"><div class="vs-tabs">${o.tabs.map((t,i)=>`<div class="vs-tab${i?'':' on'}">${t}</div>`).join('')}</div><div class="vs-crumb">${o.crumb||''}</div><pre class="vs-code">${o.code}</pre>
 ${o.term?`<div class="vs-term"><div class="vs-pt"><span>PROBLEMS</span><span>OUTPUT</span><span class="on">TERMINAL</span><span>PORTS</span></div><pre>${o.term}</pre></div>`:''}</div>
 ${o.panel?`<div class="vs-cc">${o.panel}</div>`:''}</div>
 <div class="vs-status"><span>⑂ main</span><span>⊗ 0 ⚠ 0</span><span style="margin-left:auto">Ln 4, Col 41</span><span>Spaces: 2</span><span>UTF-8</span><span>{ } JSON with Comments</span></div>`}
// ---------- LM Studio ----------
function lmShell(active,content){const nav=[['💬','Chat'],['⌨','Developer'],['📁','My Models'],['🔍','Discover']];
 return `<div class="lm-title">${LMICO(18)}<span>LM Studio</span><span class="cg2">0.4.1</span><div class="wctl"><span>—</span><span>▢</span><span>✕</span></div></div><div class="lm-main"><div class="lm-nav">${nav.map(n=>`<div class="${n[1]===active?'on':''}" title="${n[1]}">${n[0]}</div>`).join('')}</div><div class="lm-body">${content}</div></div>
 <div class="lm-status"><span>User</span><span>Power User</span><span class="on">Developer</span><span style="margin-left:auto">RAM: 14.2 GB · VRAM: 0.6 GB</span></div>`}
// ---------- Task Manager mini (GPU) ----------
function graph(a,w,h,col,fill){const p=a.map((v,i)=>`${i?'L':'M'}${(i/(a.length-1)*w).toFixed(1)} ${(h-v*h).toFixed(1)}`).join(' ');let g='';for(let i=1;i<10;i++)g+=`<path d="M${i*w/10} 0 V${h}" stroke="${col}" stroke-opacity=".12"/>`;for(let i=1;i<5;i++)g+=`<path d="M0 ${i*h/5} H${w}" stroke="${col}" stroke-opacity=".12"/>`;
 return `<svg width="${w}" height="${h}" style="display:block;border:1px solid ${col}66">${g}<path d="${p} L${w} ${h} L0 ${h} Z" fill="${fill}"/><path d="${p}" stroke="${col}" stroke-width="1.6" fill="none"/></svg>`}
// ---------- drawn explainers: chips made of the same UI material ----------
const chip=(ico,txt,o={})=>`<div class="chip2${o.cls?' '+o.cls:''}" ${o.id?`id="${o.id}"`:''} style="${o.st||''}">${ico}<span>${txt}</span>${o.sub?`<small>${o.sub}</small>`:''}</div>`;
const urlPill=(txt,o={})=>`<div class="urlp${o.cls?' '+o.cls:''}" ${o.id?`id="${o.id}"`:''}><span class="lk">${o.lock===false?'ⓘ':'🔒'}</span><span>${txt}</span></div>`;
function packets(pts,n=6,col='#FF9F5A',r=8){let h='';const L=pts.length-1;for(let i=0;i<n;i++){const u=(i+.5)/n;const j=Math.min(L-1,Math.floor(u*L)),k=u*L-j;const x=pts[j][0]+(pts[j+1][0]-pts[j][0])*k,y=pts[j][1]+(pts[j+1][1]-pts[j][1])*k;h+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${col}" opacity="${.35+.6*Math.sin(u*Math.PI)}"/>`}return h}
const wire=(d,col='#5A606A',w=4,dash='')=>`<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
// ---------- CSS ----------
document.head.insertAdjacentHTML('beforeend',`<style>
.w11{border-radius:8px;box-shadow:0 32px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.09)}
.dim{filter:blur(1.6px) brightness(.62)}
.wt{background:#0C0C0C}
.wt-bar{height:40px;background:#1F1F1F;display:flex;align-items:flex-end;padding-left:8px;position:relative}
.wt-tab{height:34px;background:#0C0C0C;border-radius:8px 8px 0 0;display:flex;align-items:center;gap:9px;padding:0 14px;color:#F2F2F2;font:13px ${UI};min-width:200px}.wt-tab.off{background:transparent;color:#BDBDBD}
.wt-tab .x{margin-left:auto;color:#9A9A9A;font-size:11px}
.wt-plus{height:34px;display:flex;align-items:center;padding:0 12px;color:#CFCFCF;font-size:15px}
.wctl{position:absolute;right:0;top:0;height:40px;display:flex}.wctl span{width:46px;display:flex;align-items:center;justify-content:center;color:#E0E0E0;font:13px ${UI}}.wctl.dark span{color:#333}
.wt-body{padding:14px 18px;font:17px/25px ${MONO};color:#CCCCCC;white-space:pre}
.cg{color:#8C8C8C}.cw{color:#F2F2F2}.co{color:#D97757}.cgr{color:#4EBA65}.cok{color:#16C60C}.cbl{color:#3B78FF}.cyl{color:#F9F1A5}.crd{color:#F14C4C}.cpk{color:#C586C0}.cst{color:#CE9178}
.cblk{background:#CCCCCC}
.ccw{display:inline-block;border:2px solid #D97757;border-radius:10px;padding:10px 18px;white-space:pre}
.cci{display:inline-block;border:2px solid #5A5A5E;border-radius:10px;padding:4px 14px;white-space:pre}
.tbar{background:rgba(28,28,30,.86);border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center}
.tb-c{position:absolute;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:4px;height:48px}
.tbi{width:44px;height:40px;border-radius:5px;display:flex;align-items:center;justify-content:center;position:relative}.tbi.act:after{content:'';position:absolute;bottom:2px;width:16px;height:3px;border-radius:2px;background:#4CC2FF}
.tb-search{width:150px;height:32px;border-radius:16px;background:#2E2E2E;color:#CFCFCF;font:13px ${UI};display:flex;align-items:center;padding-left:14px;margin:0 4px}
.tb-r{position:absolute;right:12px;display:flex;align-items:center;gap:12px;color:#fff;font:12px ${UI}}
.tb-net{display:flex;align-items:center;gap:10px;padding:5px 10px;border-radius:5px}.tb-clk{text-align:right;line-height:16px}
.cr-tabs{height:42px;background:#DFE3EA;display:flex;align-items:flex-end;padding-left:10px;position:relative}
.cr-tab{height:34px;width:250px;border-radius:9px 9px 0 0;display:flex;align-items:center;gap:8px;padding:0 12px;font:12.5px ${UI};color:#3C4043}.cr-tab.on{background:#fff}.cr-tab span:nth-child(2){overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.cr-tab .x{margin-left:auto;font-size:10px}
.cr-plus{height:34px;display:flex;align-items:center;padding:0 10px;color:#444}
.cr-bar{height:44px;background:#fff;display:flex;align-items:center;gap:16px;padding:0 14px;color:#5F6368;font-size:15px;border-bottom:1px solid #E3E3E3}
.cr-url{flex:1;height:32px;border-radius:16px;background:#EEF1F6;display:flex;align-items:center;gap:10px;padding:0 14px;font:14px ${UI};color:#202124}.cr-url .lk{color:#5F6368}
.cr-av{width:26px;height:26px;border-radius:50%;background:#7B61FF;color:#fff;font:600 12px ${UI};display:flex;align-items:center;justify-content:center}
.cr-page{position:absolute;left:0;right:0;top:86px;bottom:0;background:#fff;overflow:hidden;font-family:${UI};color:#202124}
.vs-title{height:36px;background:#1F1F1F;display:flex;align-items:center;gap:14px;padding-left:12px;position:relative;color:#CCCCCC;font:12.5px ${UI}}
.vs-search{margin-left:120px;width:420px;height:24px;border-radius:6px;background:#2A2A2A;border:1px solid #3C3C3C;display:flex;align-items:center;justify-content:center;color:#9D9D9D}
.vs-main{display:flex;height:calc(100% - 58px);background:#1F1F1F}
.vs-act{width:48px;background:#181818;display:flex;flex-direction:column;align-items:center;padding:8px 0 12px;gap:4px;color:#868686;font-size:20px}.vs-act div{height:44px;display:flex;align-items:center}.vs-act .on{color:#fff;box-shadow:inset 2px 0 0 #0078D4;width:48px;justify-content:center}
.vs-side{width:230px;background:#181818;border-right:1px solid #2B2B2B;color:#CCCCCC;font:13px ${UI}}.vs-h{font-size:11px;padding:10px 18px;letter-spacing:.04em}.vs-h2{font-size:11px;font-weight:700;padding:4px 10px}
.vs-f{padding:3px 26px}.vs-f.sel{background:#37373D}
.vs-ed{flex:1;display:flex;flex-direction:column;background:#1F1F1F;min-width:0}
.vs-tabs{height:35px;background:#181818;display:flex}.vs-tab{padding:0 16px;display:flex;align-items:center;color:#9D9D9D;font:13px ${UI};border-right:1px solid #2B2B2B}.vs-tab.on{background:#1F1F1F;color:#fff;box-shadow:inset 0 1px 0 #0078D4}
.vs-crumb{height:22px;padding-left:16px;color:#A9A9A9;font:12px ${UI};display:flex;align-items:center}
.vs-code{flex:1;padding:6px 18px;font:16px/24px ${MONO};color:#CCCCCC;white-space:pre}
.vs-term{height:190px;border-top:1px solid #2B2B2B}.vs-pt{display:flex;gap:22px;padding:8px 18px;font:11px ${UI};color:#9D9D9D}.vs-pt .on{color:#fff;border-bottom:1px solid #fff}.vs-term pre{padding:4px 18px;font:14px/21px ${MONO};color:#CCCCCC}
.vs-cc{width:420px;background:#181818;border-left:1px solid #2B2B2B;color:#CCCCCC;font:14px ${UI};position:relative}
.vs-status{height:22px;background:#0078D4;color:#fff;display:flex;gap:16px;align-items:center;padding:0 12px;font:12px ${UI}}
.lm-title{height:40px;background:#16161A;display:flex;align-items:center;gap:10px;padding-left:14px;color:#E6E6E6;font:600 13px ${UI};position:relative}.cg2{color:#8A8A93;font-weight:400}
.lm-main{display:flex;height:calc(100% - 68px);background:#1C1C21}
.lm-nav{width:58px;background:#16161A;padding-top:10px}.lm-nav div{height:46px;margin:4px 8px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px}.lm-nav .on{background:#2C2C35}
.lm-body{flex:1;color:#E6E6E6;font-family:${UI};position:relative;overflow:hidden}
.lm-status{height:28px;background:#16161A;border-top:1px solid #2A2A31;display:flex;gap:6px;align-items:center;padding:0 12px;font:12px ${UI};color:#8A8A93}.lm-status span{padding:2px 8px;border-radius:6px}.lm-status .on{background:#3E63DD;color:#fff}
.chip2{display:inline-flex;align-items:center;gap:14px;background:#1E1F22;border:1px solid #3A3B40;border-radius:14px;padding:16px 22px;color:#F2F2F2;font:600 26px ${UI};box-shadow:0 24px 60px rgba(0,0,0,.55);white-space:nowrap}.chip2 small{font:500 18px ${UI};color:#9A9A9A;margin-left:6px}
.chip2.light{background:#fff;color:#191919;border-color:#E3E3E3}.chip2.light small{color:#6B6B6B}
.urlp{display:inline-flex;align-items:center;gap:14px;background:#EEF1F6;border-radius:40px;padding:18px 34px;font:500 38px ${UI};color:#202124;box-shadow:0 30px 70px rgba(0,0,0,.55);white-space:nowrap}.urlp .lk{font-size:28px;color:#5F6368}
.urlp.dark{background:#1E1F22;color:#F2F2F2;border:1px solid #3A3B40}
.lbl{font:600 16px ${UI};letter-spacing:.14em;color:#9AA4B5;text-transform:uppercase}
.toast{width:420px;background:#2B2B2B;border:1px solid #3C3C3C;border-radius:8px;padding:14px 16px;color:#fff;font:13px ${UI};box-shadow:0 20px 50px rgba(0,0,0,.6)}.toast b{display:block;font-size:14px;margin:2px 0}.toast .ap{display:flex;align-items:center;gap:8px;color:#BDBDBD;font-size:12px}

/* customization: accent from wallpaper, acrylic surfaces, contrast helpers */
.wt{background:rgba(12,16,26,.90);backdrop-filter:blur(28px) saturate(1.3)}
.wt-bar{background:rgba(22,28,44,.82)}.wt-tab{background:rgba(12,16,26,.95)}.wt-tab.off{background:transparent}
.w11{border-radius:10px;box-shadow:0 40px 90px rgba(10,20,45,.55),0 8px 24px rgba(10,20,45,.35),0 0 0 1px rgba(255,255,255,.10)}
.tbar{background:rgba(18,22,34,.72)!important;backdrop-filter:blur(30px) saturate(1.4)}
.tbi.act:after{background:#6E9BE6!important}
.cblk{background:#8FB4F0!important}
.urlp,.chip2.light{box-shadow:0 30px 70px rgba(10,20,45,.45),0 0 0 1px rgba(10,20,45,.18)}
svg circle[fill="#FFE600"]{stroke:#0A0A0A;stroke-width:1.3}
path[stroke="#FFE600"]{filter:drop-shadow(0 0 1.2px #000) drop-shadow(0 0 1.2px #000)}
.hl{box-shadow:0 0 0 2px rgba(10,10,10,.75),0 0 24px rgba(255,230,0,.25)!important}
</style>`);
