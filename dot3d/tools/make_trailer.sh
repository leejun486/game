#!/usr/bin/env bash
# 트레일러 합치기: 장면별 프레임 폴더(a_title, b_palace, …)를 이름 순서대로 이어 30fps 영상으로 만들고 국악 배경음악을 깖
# 사용: tools/make_trailer.sh <프레임 폴더들이 있는 곳> [음악 파일]
#  프레임은 tools/record_trailer.cjs로 녹화 (게임을 1/30초씩 직접 진행하며 매 프레임 캡처)
set -euo pipefail
SRC=${1:?프레임 폴더}
MUSIC=${2:-$(dirname "$0")/../audio/music/battle.ogg}
OUT=$(dirname "$0")/../marketing/trailer/wolhagung-trailer.mp4
TMP=$(mktemp -d)
n=0
for d in "$SRC"/*/; do
  for f in "$d"f_*.jpg; do
    [[ "$f" == *f_00000.jpg ]] && continue # 장면 첫 프레임은 렌더가 덜 된 경우가 있어 뺌
    printf -v name '%s/%05d.jpg' "$TMP" "$n"; ln -s "$(realpath "$f")" "$name"; n=$((n + 1)); done
done
dur=$(echo "scale=3; $n / 30" | bc)
fo=$(echo "scale=3; $dur - 1.5" | bc)
ffmpeg -y -loglevel error -framerate 30 -i "$TMP/%05d.jpg" -i "$MUSIC" \
  -filter_complex "[0:v]fade=t=in:st=0:d=0.8,fade=t=out:st=$fo:d=1.5,format=yuv420p[v];[1:a]atrim=0:$dur,afade=t=in:st=0:d=1,afade=t=out:st=$fo:d=1.5[a]" \
  -map "[v]" -map "[a]" -c:v libx264 -preset slow -crf 18 -c:a aac -b:a 192k -movflags +faststart "$OUT"
rm -rf "$TMP"
echo "$OUT ($n 프레임, ${dur}초)"
