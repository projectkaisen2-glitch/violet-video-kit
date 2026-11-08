"""Shared render environment: import this BEFORE launching Chromium.
- FONTCONFIG_FILE -> fontpack/fonts.conf: the exact cloud fonts + rules, system fonts ignored,
  so every machine picks identical fonts (incl. fallbacks for symbols and emoji).
- settle(page): waits two animation frames after R(t) so the screenshot never catches
  half-painted tiles (seen ~2% of shots under heavy parallel load without it)."""
import os
from pathlib import Path
_here=Path(__file__).resolve()
for p in [_here.parent]+list(_here.parents):
  if (p/'fontpack'/'fonts').is_dir(): FP=p/'fontpack';break
else: raise SystemExit('fontpack/ not found — run from the violet-video-kit checkout')
# fontconfig resolves "relative" paths differently between versions, so write a config with ABSOLUTE paths
_cache=Path(os.environ.get('XDG_CACHE_HOME',Path.home()/'.cache'))/'violet-fontpack';_cache.mkdir(parents=True,exist_ok=True)
_conf=_cache/'fonts.conf'
_conf.write_text(f'''<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd">
<fontconfig><dir>{FP/'fonts'}</dir><include ignore_missing="no">{FP/'conf.d'}</include><cachedir>{_cache/'cache'}</cachedir></fontconfig>
''')
os.environ['FONTCONFIG_FILE']=str(_conf)
# the cloud's Chromium wrapper adds these flags; pass them everywhere so every machine rasterizes text the same way
ARGS=["--allow-file-access-from-files","--font-render-hinting=none","--disable-lcd-text","--force-color-profile=srgb"]
async def settle(pg): await pg.evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))')
