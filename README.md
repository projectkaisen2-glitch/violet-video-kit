# VIOLET video kit

This is the production base for the VIOLET channel (English, local AI and vibe coding). It is a working pipeline that turns an approved script plus a voice-over into a fully animated 2560×1440 video. Everything is built from code: the scenes are HTML pages, a headless Chromium screenshots them frame by frame, and ffmpeg assembles the result. No video editor or GPU is needed.

**The rules come first.** `rules/PRODUCTION_RULES_v2.md` is the only valid rules file. The files in `rules/archive/` are history only. Read the rules fully before any work, and never simplify, downscale or "save" on quality without the owner's explicit approval (П35, П36).

## Why it is cheap

The model writes the script, the storyboard and the scene code once. That is the only part that spends tokens. The tens of thousands of frames are rendered by the machine, which costs no tokens. For example, EP03 (7:10) took ~3.5 h of pure render on 2 CPU cores, and it barely touched the usage limit.

## Layout

```
rules/              PRODUCTION_RULES_v2.md (the law), RENDER_SPEEDUP_PLAN.md (pending), archive/
tools/              voice_timeline.py, assemble.sh, checks.sh, mksheet3.py
ep03/               reference episode: copy it to start a new one
  SCRIPT_EP03_EN.md, EP03_VOICE_TASK.md, timeline.json, voice_in/*.json (wav not stored)
  testB/            opening sequence (living Windows 11 desktop), render.py -> opening.mp4
  p1/ p2/ p3/       storyboard parts: lib.js (UI builders) + framesN.js (shots) + render.js
  anim/             animation engine: engine.js animates the approved storyboard frames
ep02/               EP02 script, voice task, YouTube pack
shorts/             shorts.py (cut Shorts from finished episodes) + SHORTS_UPLOAD.md
```

## Pipeline (each step ends with the owner's approval where marked)

1. **Topic and facts.** Research current facts with sources.
2. **Script.** Write `SCRIPT_EPxx_EN.md` (rules П29–П34). → owner approves.
3. **Voice task.** Write `EPxx_VOICE_TASK.md`. The owner generates the voice (Kokoro af_heart) and returns `voice_in/<key>.wav + <key>.json` (per-word times).
4. **Timeline:**
   `python3 tools/voice_timeline.py epXX/voice_in epXX/anim`
   This writes `timeline.json`, `words.json` and `voice.m4a` (LEAD 0.6 s, GAP 0.7 s, END tail, −14 LUFS).
5. **Test.** Build one short living test of the style (like `testB`). → owner approves.
6. **Storyboard in parts.** Write `pN/framesN.js` with shots `{id,t,v,a,sc,cam,hl,plate}` built with `lib.js`, then:
   - `python3 pN/build.py && python3 pN/shoot.py`
   - `python3 tools/mksheet3.py pN PN <ids-with-my-wording>`

   This produces the caption sheets. Send each part. → owner approves each part.
7. **Animation.** `anim/build.py` merges `lib.js` + all `framesN.js` + `words.json` + `engine.js` into `anim.html`. What the engine does:
   - It treats each shot as the end state of a living shot: camera push and drift, windows opening, terminal lines typing, pages loading, overlays staggering in.
   - Highlights and plates land on the word the voice says (from `words.json`).
   - Transitions use a scrim, swap, zoom or slide, never repeating one in a row.

   Spot-check frames with `python3 anim/shot.py <t> ...`.
8. **Render.** `bash anim/chainR.sh` renders the 60 s segments with `render_seg.py`:
   - 30 fps × 5 subframes, mixed with `tmix` for motion blur;
   - dsf 4/3 → 2560×1440, x264 CRF 16.

   The render is resumable: if the background job is killed, rerun the same command and it continues from where it stopped. Edit the segment list in `chainR.sh` per episode.
9. **Assemble:**
   `bash tools/assemble.sh epXX/anim epXX/opening.mp4 <opening_end_offset> EPxx_full_1440.mp4`
10. **Checks (§12):**
    `bash tools/checks.sh EPxx_full_1440.mp4 <end_card_t>`
    It reports duration, loudness, freezes ≥4 s, a contact sheet and whether the end-card QR decodes. Then look at the sheet and spot-check sync. → deliver to the owner with an honest list of weak spots (STOP).
11. **YouTube pack.** Write a title with search keywords first, a description with chapters from the timeline, and tags. Shorts are optional.

## Requirements

- Python 3 with `playwright`. Chromium comes with Playwright.
- `ffmpeg`, and `opencv-python` (only for the QR check).
- Fonts: Inter and Inter Display (`fonts-inter`), and DejaVu Sans Mono (`fonts-dejavu`).
- Owner assets in `*/assets/`:
  - `wall.jpg` — the owner's wallpaper;
  - `avatar.png`;
  - `qr_card.png` — QR to t.me/violet_ina;
  - logo SVGs.

## Process rules to remember

- Approvals and stops: П38–П41.
- Plain-language plans.
- At every approval request, recommend a model and effort level (П42).
  - High effort: rules, scripts, plans, tests, storyboards.
  - Medium effort: renders, cutting, checks, small fixes.
