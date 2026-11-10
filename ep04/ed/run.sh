#!/usr/bin/env bash
# Render one EP04 piece on this machine, with voice.
# usage: bash ep04/ed/run.sh 01            -> out/EP04_b01_h.mp4 (long) + out/EP04_b01_v.mp4 (short)
#        bash ep04/ed/run.sh 00 h          (intro and finale 99 are long-video only)
#        bash ep04/ed/run.sh t1 v 05       (Short tail t1 drawn in block 05's style -> out/EP04_bt1_v_05.mp4)
#        bash ep04/ed/run.sh assemble      (long video + 8 Shorts -> out/final/, then everything for the owner -> ~/VIOLET_READY/EP04)
#        bash ep04/ed/run.sh deliver       (only the copy into ~/VIOLET_READY/EP04)
set -e
cd "$(dirname "$0")"
PY=${PY:-python3}
if [ "$1" = assemble ]; then bash assemble.sh && exec bash deliver.sh; fi
if [ "$1" = deliver ]; then exec bash deliver.sh; fi
B=$1; FMTS=${2:-"v h"}; TOOL=${3:-}
SUF=""; if [ -n "$TOOL" ]; then export VQ="&tool=$TOOL"; SUF="_$TOOL"; fi
$PY build.py $B
END=$($PY get_end.py $B)
HS=$(sha1sum out/b$B.html | cut -c1-8)   # raw renders are tied to this exact scene version
echo "piece $B$SUF  END=$END  scene $HS"
for f in $FMTS; do
  m=long; [ $f = v ] && m=short
  R=raw_${B}_${f}${SUF}_$HS.mp4
  [ -f out/$R ] || $PY render.py $B 0 $END $R --fmt $f --mode $m
  ffmpeg -y -loglevel error -i out/$R -i ../voice_in/$B.wav -filter_complex "[1:a]adelay=350|350,apad,atrim=0:$END,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out/EP04_b${B}_${f}${SUF}.mp4
done
# small preview sheet so the result can be checked remotely
for f in $FMTS; do
  ffmpeg -y -loglevel error -i out/EP04_b${B}_${f}${SUF}.mp4 -vf "fps=12/$END,scale=$([ $f = h ] && echo 480:270 || echo 216:384),tile=$([ $f = h ] && echo 4x3 || echo 6x2)" -frames:v 1 -q:v 4 out/sheet_b${B}_${f}${SUF}.jpg
done
echo "DONE $B$SUF"
