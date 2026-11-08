cd "$(dirname "$0")"
for a in "136.8 196.8 seg3" "196.8 256.8 seg4" "256.8 316.8 seg5" "316.8 376.8 seg6" "376.8 429.8 seg7"; do
 set -- $a; [ -f $3.mp4 ] && continue
 python3 render_seg.py $1 $2 $3.mp4 || exit 1
done
echo ALLDONE
