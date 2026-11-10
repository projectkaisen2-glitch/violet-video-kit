#!/usr/bin/env bash
# Render one editorial EP04 block on this machine: both formats, with voice.
# usage: bash ep04/ed/run.sh 01        -> ep04/ed/out/EP04_b01_h.mp4 (long) + EP04_b01_v.mp4 (short)
set -e
cd "$(dirname "$0")"
B=$1; PY=${PY:-python3}
$PY build.py $B
END=$($PY get_end.py $B)
echo "block $B  END=$END"
for f in v h; do
  m=long; [ $f = v ] && m=short
  [ -f out/raw_${B}_$f.mp4 ] || $PY render.py $B 0 $END raw_${B}_$f.mp4 --fmt $f --mode $m
  ffmpeg -y -loglevel error -i out/raw_${B}_$f.mp4 -i ../voice_in/$B.wav -filter_complex "[1:a]adelay=350|350,apad,atrim=0:$END,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out/EP04_b${B}_$f.mp4
done
# small preview sheet (12 frames per format) so the result can be checked remotely
for f in h v; do
  ffmpeg -y -loglevel error -i out/EP04_b${B}_$f.mp4 -vf "fps=12/$END,scale=$([ $f = h ] && echo 480:270 || echo 216:384),tile=$([ $f = h ] && echo 4x3 || echo 6x2)" -frames:v 1 -q:v 4 out/sheet_b${B}_$f.jpg
done
echo "DONE block $B"
