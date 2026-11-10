#!/usr/bin/env bash
# Render one EP05 block on this machine, with voice.
# usage: bash ep05/ed/run.sh 01      -> out/EP05_b01_h.mp4 (long: block + long add-on) + out/EP05_b01_v.mp4 (Short: block + tail)
#        bash ep05/ed/run.sh 01 h    (one format only)
set -e
cd "$(dirname "$0")"
PY=${PY:-python3}
B=$1; FMTS=${2:-"v h"}
declare -A TAIL=([01]=t2 [02]=t1 [03]=t4 [04]=t2 [05]=t1 [06]=t3 [07]=t3 [08]=t4)
$PY build.py $B
for f in $FMTS; do
  m=long; [ $f = v ] && m=short
  END=$($PY get_end.py $B $f)
  HS=$(sha1sum out/b$B.html | cut -c1-8)
  echo "piece $B $f END=$END scene $HS"
  R=raw_${B}_${f}_$HS.mp4
  [ -f out/$R ] || $PY render.py $B 0 $END $R --fmt $f --mode $m
  if [ $f = h ]; then SECOND=../voice_in/l$((10#$B)).wav; else SECOND=../voice_in/${TAIL[$B]}.wav; fi
  # voice A starts at 0.35 s, voice B starts 0.8 s after A ends (same numbers as build.py)
  DA=$(ffprobe -v error -show_entries format=duration -of csv=p=0 ../voice_in/$B.wav)
  DB=$(python3 -c "print(int((0.35+$DA+0.8)*1000))")
  ffmpeg -y -loglevel error -i out/$R -i ../voice_in/$B.wav -i $SECOND -filter_complex "[1:a]adelay=350|350[a1];[2:a]adelay=$DB|$DB[a2];[a1][a2]amix=inputs=2:normalize=0,apad,atrim=0:$END,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out/EP05_b${B}_${f}.mp4
  ffmpeg -y -loglevel error -i out/EP05_b${B}_${f}.mp4 -vf "fps=12/$END,scale=$([ $f = h ] && echo 480:270 || echo 216:384),tile=$([ $f = h ] && echo 4x3 || echo 6x2)" -frames:v 1 -q:v 4 out/sheet_b${B}_${f}.jpg
done
echo "DONE $B"
