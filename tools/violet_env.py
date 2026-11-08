"""Shared render environment: import this BEFORE launching Chromium.
- FONTCONFIG_FILE -> fontpack/fonts.conf: the exact cloud fonts + rules, system fonts ignored,
  so every machine picks identical fonts (incl. fallbacks for symbols and emoji).
- settle(page): waits two animation frames after R(t) so the screenshot never catches
  half-painted tiles (seen ~2% of shots under heavy parallel load without it)."""
import os
from pathlib import Path
_here=Path(__file__).resolve()
for p in [_here.parent]+list(_here.parents):
  if (p/'fontpack'/'fonts.conf').exists():
    os.environ['FONTCONFIG_FILE']=str(p/'fontpack'/'fonts.conf');break
else: raise SystemExit('fontpack/fonts.conf not found — run from the violet-video-kit checkout')
async def settle(pg): await pg.evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))')
