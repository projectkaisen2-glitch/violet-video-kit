#!/usr/bin/env bash
# EP04 assembly: long video = intro + 8 blocks + finale (16:9); 8 Shorts = block (9:16) + its tail.
# Every piece already carries its own voice at -14 LUFS; concat re-encodes once, then a final loudness pass.
set -e
cd "$(dirname "$0")/out"; mkdir -p final
need(){ for f in "$@"; do [ -f "$f" ] || { echo "MISSING $f — render it first"; exit 1; }; done; }
cat_av(){ out=$1; shift; n=$#; ins=(); fl=""; i=0
  for f in "$@"; do ins+=(-i "$f"); fl="$fl[$i:v][$i:a]"; i=$((i+1)); done
  ffmpeg -y -loglevel error "${ins[@]}" -filter_complex "${fl}concat=n=$n:v=1:a=1[v][a0];[a0]loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]" \
    -map "[v]" -map "[a]" -c:v libx264 -preset medium -crf 16 -pix_fmt yuv420p -profile:v high -c:a aac -b:a 192k -movflags +faststart "$out"
  echo "built $out  $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$out" | cut -c1-6) s"; }
L=(EP04_b00_h.mp4 EP04_b01_h.mp4 EP04_b02_h.mp4 EP04_b03_h.mp4 EP04_b04_h.mp4 EP04_b05_h.mp4 EP04_b06_h.mp4 EP04_b07_h.mp4 EP04_b08_h.mp4 EP04_b99_h.mp4)
need "${L[@]}"; cat_av final/EP04_long.mp4 "${L[@]}"
TAIL=(t1 t2 t3 t4 t1 t2 t3 t5)   # script: Shorts 1–8 tails, Short 8 (S tier) asks "Who's in A tier?"
for n in 1 2 3 4 5 6 7 8; do t=${TAIL[$((n-1))]}; need EP04_b0${n}_v.mp4 EP04_b${t}_v_0${n}.mp4
  cat_av final/EP04_short_${n}.mp4 EP04_b0${n}_v.mp4 EP04_b${t}_v_0${n}.mp4; done
# quick checks: duration, loudness, black frames
for f in final/*.mp4; do
  lu=$(ffmpeg -nostats -i "$f" -af ebur128 -f null - 2>&1 | grep -E "^\s+I:" | tail -1 | tr -s ' ')
  bk=$(ffmpeg -nostats -i "$f" -vf blackdetect=d=0.5:pix_th=0.05 -an -f null - 2>&1 | grep -c black_start || true)
  echo "$f | $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f" | cut -c1-6) s | loudness$lu | black>0.5s: $bk"
done
ffmpeg -y -loglevel error -i final/EP04_long.mp4 -vf "fps=1/10,scale=320:180,tile=6x6" -frames:v 1 final/EP04_long_sheet.jpg
echo "DONE assemble -> ep04/ed/out/final/"
