#!/bin/bash
# usage: assemble.sh <anim_dir> <opening.mp4> <xfade_offset_s> <out.mp4>
# opening (video time = absolute time) crossfades 0.4 s into seg1 at offset,
# then seg2..segN are concatenated (stream copy) and voice.m4a is muxed.
set -e
D=$1; OP=$2; OFF=$3; OUT=$4
cd "$D"
ffmpeg -y -loglevel error -i "$OP" -i seg1.mp4 -filter_complex "[0:v]fps=30,format=yuv420p,settb=AVTB[a];[1:v]fps=30,format=yuv420p,settb=AVTB[b];[a][b]xfade=transition=fade:duration=0.4:offset=$OFF,format=yuv420p" -c:v libx264 -preset medium -crf 16 -profile:v high -r 30 head.mp4
{ echo "file head.mp4"; for f in $(ls seg*.mp4 | sort -V | tail -n +2); do echo "file $f"; done; } > list.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i list.txt -i voice.m4a -map 0:v -map 1:a -c copy -movflags +faststart "$OUT"
ffprobe -v error -show_entries format=duration:stream=codec_name,width,height -of compact "$OUT"
