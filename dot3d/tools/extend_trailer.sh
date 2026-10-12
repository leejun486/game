#!/usr/bin/env bash
# 트레일러 늘리기: 지금 영상(marketing/trailer/wolhagung-trailer.mp4)에서 끝 화면(마지막 KEEP_END 프레임)을 떼고,
#  새로 녹화한 장면 폴더들을 이름 순서대로 뒤에 붙여 다시 만듦. 끝 화면(l_end)도 새로 녹화한 것으로.
#  전체를 다시 녹화하면 두 시간 가까이 걸려서, 새 지역 장면만 녹화해 이어 붙일 때 씀
# 사용: tools/extend_trailer.sh <새 장면 폴더들이 있는 곳> [떼어 낼 끝 프레임 수=119] [음악 파일]
#  예) SEG=kb_tomb OUT=/tmp/f/ node tools/record_trailer.cjs sword … SEG=l_end … title 로 녹화한 뒤
#      tools/extend_trailer.sh /tmp/f
set -euo pipefail
SRC=${1:?새 장면 폴더}
CUT=${2:-119}
MUSIC=${3:-$(dirname "$0")/../audio/music/battle.ogg}
VID=$(dirname "$0")/../marketing/trailer/wolhagung-trailer.mp4
TMP=$(mktemp -d)
ffmpeg -loglevel error -i "$VID" -q:v 2 "$TMP/o_%05d.jpg"
total=$(ls "$TMP"/o_*.jpg | wc -l)
keep=$((total - CUT))
n=0
for f in $(ls "$TMP"/o_*.jpg | head -n "$keep"); do printf -v name '%s/%05d.jpg' "$TMP" "$n"; mv "$f" "$name"; n=$((n + 1)); done
rm -f "$TMP"/o_*.jpg
for d in "$SRC"/*/; do
  for f in "$d"f_*.jpg; do
    [[ "$f" == *f_00000.jpg ]] && continue
    printf -v name '%s/%05d.jpg' "$TMP" "$n"; ln -s "$(realpath "$f")" "$name"; n=$((n + 1)); done
done
dur=$(echo "scale=3; $n / 30" | bc)
fo=$(echo "scale=3; $dur - 1.5" | bc)
OUT="$TMP/out.mp4"
ffmpeg -y -loglevel error -framerate 30 -i "$TMP/%05d.jpg" -stream_loop -1 -i "$MUSIC" \
  -filter_complex "[0:v]fade=t=out:st=$fo:d=1.5,format=yuv420p[v];[1:a]atrim=0:$dur,afade=t=in:st=0:d=1,afade=t=out:st=$fo:d=1.5[a]" \
  -map "[v]" -map "[a]" -c:v libx264 -preset slow -crf 20 -c:a aac -b:a 192k -movflags +faststart "$OUT"
mv "$OUT" "$VID"
rm -rf "$TMP"
echo "$VID (원래 $keep + 새 $((n - keep)) 프레임, ${dur}초)"
