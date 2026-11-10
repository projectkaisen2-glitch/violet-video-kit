#!/usr/bin/env bash
# Render one editorial EP04 block on this machine: both formats, with voice.
# usage: bash ep04/ed/run.sh 01        -> ep04/ed/out/EP04_b01_h.mp4 (long) + EP04_b01_v.mp4 (short)
set -e
cd "$(dirname "$0")"
B=$1; PY=${PY:-python3}
$PY build.py $B
END=$($PY get_end.py $B)
HS=$(sha1sum out/b$B.html | cut -c1-8)   # raw renders are tied to this exact scene version
echo "block $B  END=$END  scene $HS"
for f in v h; do
  m=long; [ $f = v ] && m=short
  R=raw_${B}_${f}_$HS.mp4
  [ -f out/$R ] || $PY render.py $B 0 $END $R --fmt $f --mode $m
  ffmpeg -y -loglevel error -i out/$R -i ../voice_in/$B.wav -filter_complex "[1:a]adelay=350|350,apad,atrim=0:$END,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out/EP04_b${B}_$f.mp4
done
# small preview sheet (12 frames per format) so the result can be checked remotely
for f in h v; do
  ffmpeg -y -loglevel error -i out/EP04_b${B}_$f.mp4 -vf "fps=12/$END,scale=$([ $f = h ] && echo 480:270 || echo 216:384),tile=$([ $f = h ] && echo 4x3 || echo 6x2)" -frames:v 1 -q:v 4 out/sheet_b${B}_$f.jpg
done
echo "DONE block $B"
