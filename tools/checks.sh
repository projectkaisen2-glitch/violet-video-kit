#!/bin/bash
# usage: checks.sh <video.mp4> <end_card_time_s>   (§12 checks; outputs into ./chk/)
set -e
V=$1; T=${2:-$(echo "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$V") - 3" | bc)}
mkdir -p chk
echo "duration: $(ffprobe -v error -show_entries format=duration -of csv=p=0 "$V") s"
ffmpeg -nostats -i "$V" -vn -af ebur128 -f null - 2>&1 | grep " I:" | tail -1 | sed 's/^ */loudness /'
echo "freezes >=4s:"; ffmpeg -nostats -i "$V" -an -vf "scale=640:-1,freezedetect=n=0.001:d=4" -f null - 2>&1 | grep -E "freeze_(start|duration)" | paste - - | grep . || echo "  none"
ffmpeg -y -loglevel error -i "$V" -vf "fps=1/9,scale=480:-1,tile=6x8" -frames:v 1 chk/sheet.jpg && echo "contact sheet: chk/sheet.jpg"
ffmpeg -y -loglevel error -ss "$T" -i "$V" -frames:v 1 chk/end.png
python3 - <<'PY'
import cv2
im=cv2.imread('chk/end.png');g=cv2.cvtColor(im,cv2.COLOR_BGR2GRAY);h,w=g.shape;r=None
_,b=cv2.threshold(g,235,255,cv2.THRESH_BINARY)
cs=[cv2.boundingRect(c) for c in cv2.findContours(b,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)[0]]
cs=[g[y:y+hh,x:x+ww] for x,y,ww,hh in sorted(cs,key=lambda r:-r[2]*r[3])[:3] if ww>100 and hh>100]
for crop in cs+[g,g[:,:w//2]]:
  for s in [0.4,0.6,0.8,1,1.25,1.5,2,2.5]:
    x=cv2.copyMakeBorder(cv2.resize(crop,None,fx=s,fy=s,interpolation=cv2.INTER_AREA),40,40,40,40,cv2.BORDER_CONSTANT,value=255)
    d=cv2.QRCodeDetector().detectAndDecode(x)[0]
    if d: r=d;break
  if r: break
print('end-card QR:',r or 'NOT DECODED — check by phone')
PY
