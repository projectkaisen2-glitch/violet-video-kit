#!/usr/bin/env bash
# Put everything the owner needs for EP04 into ONE folder: ~/VIOLET_READY/EP04
# (hard links where possible, so it takes no extra disk space). Intermediate renders stay in ep04/ed/out.
set -e
cd "$(dirname "$0")"
D=$HOME/VIOLET_READY/EP04; rm -rf "$D"; mkdir -p "$D/shorts" "$D/thumbnails"
F=out/final; put(){ ln -f "$1" "$2" 2>/dev/null || cp -f "$1" "$2"; }
put $F/EP04_long.mp4 "$D/EP04_LONG_tier_list_2026.mp4"
names=(Cursor Gemini_CLI Copilot Windsurf Lovable Codex Cline Claude_Code)
order=(1 2 3 8 5 7 6 4)   # publishing order from YOUTUBE_EP04.md
for n in 1 2 3 4 5 6 7 8; do put $F/EP04_short_$n.mp4 "$D/shorts/Short_${n}_${names[$((n-1))]}.mp4"; done
for t in A B C; do put ../thumb/EP04_thumb_$t.jpg "$D/thumbnails/EP04_thumb_$t.jpg"; done
cp -f ../YOUTUBE_EP04.md "$D/YOUTUBE_EP04.md"
cat > "$D/README.txt" <<TXT
EP04 — ready to publish
1) EP04_LONG_tier_list_2026.mp4 — long video (5:42). Publish it FIRST.
2) shorts/ — 8 Shorts. Set "Related video" = the long video. Every 3 hours, in this order:
   Short_1 Cursor -> Short_2 Gemini -> Short_3 Copilot -> Short_8 Claude Code -> Short_5 Lovable -> Short_7 Cline -> Short_6 Codex -> Short_4 Windsurf
3) thumbnails/ — pick one (A board, B mosaic, C stamps).
4) YOUTUBE_EP04.md — titles, description, chapters, tags, pinned comment.
TXT
ls -la "$D" "$D/shorts" "$D/thumbnails"
echo "DONE deliver -> $D"
