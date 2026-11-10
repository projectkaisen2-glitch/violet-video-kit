set -e
cd "$(dirname "$0")"
END=40.9
for f in v h; do
  [ -f test_$f.mp4 ] || ${PY:-python3} render_test.py 0 $END test_$f.mp4 --fmt $f
done
for f in v h; do
  ffmpeg -y -loglevel error -i test_$f.mp4 -i ../voice_in/01.wav -filter_complex "[1:a]adelay=350|350,apad,atrim=0:$END,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest EP04_test_$f.mp4
done
echo DONE
