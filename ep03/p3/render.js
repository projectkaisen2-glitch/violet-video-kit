function DOTS(a,b){let h='';for(let i=0;i<=36;i++){const u=i/36;const x=(1-u)**3*a[0]+3*(1-u)**2*u*a[0]+3*(1-u)*u*u*b[0]+u**3*b[0];const y=(1-u)**3*a[1]+3*(1-u)**2*u*((a[1]+b[1])/2)+3*(1-u)*u*u*b[1]+u**3*b[1];h+=`<circle cx="${x}" cy="${y}" r="3" fill="#FFE600"/>`}return h}
document.getElementById('frames').innerHTML=FR.map(f=>{const c=f.cam||{x:960,y:540,s:1};const tr=`translate(${960-c.x*c.s}px,${540-c.y*c.s}px) scale(${c.s})`;
 return `<div class="S" id="${f.id}"><div class="ab" style="left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;transform:${tr}">${f.sc}</div>
 <div class="hl" style="display:none;z-index:9"></div><svg class="ab dots" style="left:0;top:0;z-index:8" width="1920" height="1080"></svg>
 ${f.plate?`<div class="ab plate" style="left:${f.plate.x}px;top:${f.plate.y}px;z-index:10"><div class="H" style="font-size:${f.plate.size}px;line-height:1.02"><span class="PL">${f.plate.txt}</span></div></div>`:''}
 ${f.cur?CUR(f.cur[0],f.cur[1]).replace('class="cur"','class="cur" style="z-index:11;left:'+f.cur[0]+'px;top:'+f.cur[1]+'px"'):''}</div>`}).join('');
document.querySelectorAll('.plate').forEach(pl=>{const r=pl.querySelector('.PL').getBoundingClientRect(),S=pl.closest('.S').getBoundingClientRect();const over=r.right-S.left-1880;if(over>0)pl.style.left=(parseFloat(pl.style.left)-over)+'px';const ob=r.bottom-S.top-1050;if(ob>0)pl.style.top=(parseFloat(pl.style.top)-ob)+'px'});/*clampPlates*/
FR.forEach(f=>{if(!f.hl)return;const S=document.getElementById(f.id);const t=S.querySelector('#'+f.hl);if(!t)return;const sr=S.getBoundingClientRect(),r=t.getBoundingClientRect();
 const hl=S.querySelector('.hl'),p=8;hl.style.display='block';hl.style.left=(r.left-sr.left-p)+'px';hl.style.top=(r.top-sr.top-p)+'px';hl.style.width=(r.width+2*p)+'px';hl.style.height=(r.height+2*p)+'px';
 const pl=S.querySelector('.plate .PL');if(!pl)return;const pr=pl.getBoundingClientRect();const below=pr.top>r.bottom;
 const a=[r.left-sr.left+r.width/2,(below?r.bottom+p:r.top-p)-sr.top],b=[(pr.left+pr.right)/2-sr.left,(below?pr.top:pr.bottom)-sr.top];S.querySelector('.dots').innerHTML=DOTS(a,b)});
window.READY=true;
