# 트레일러 (`wolhagung-trailer.mp4`)

1280×720, 30fps, 약 1분. 배경음악은 `audio/music/battle.ogg`(국악 싸움 곡, 반복). 화면 글자(HUD)는 숨기고 게임만 보입니다.

## 장면 순서

| 폴더 | 직업 | 장면 |
| --- | --- | --- |
| a_title | — | 제목 로고 |
| b_palace | 검객 | 월하궁 밤, 도깨비 떼 |
| c_kingdrop | 검객 | 도깨비 대왕 |
| d_bamboo | 요정 | 죽림, 여우·여우불 |
| e_temple | 도사 | 폐사찰, 강시·원귀 |
| f_imugi | 창술사 | 물안개 늪, 천년 이무기 |
| g_baekho | 검객 | 단풍 산성, 산군 백호 |
| h_dragon | 요정 | 동해 용궁, 용왕 |
| i_valley | 창술사 | 청류 계곡 |
| j_frost | 도사 | 백설 고원, 동장군 |
| k_kill | 도사 | 보스 격파 연출 |
| kb_tomb | 검객 | 왕릉 고분 밤, 어둑시니 |
| kc_market | 요정 | 도깨비 밤장터, 독각귀 |
| kd_tidal | 창술사 | 남해 갯벌 마을, 장산범 |
| ke_sky | 도사 | 천상 선계, 뇌공 |
| l_end | — | 끝 화면: Steam 찜하기 · 네 직업 · 열네 개의 지역 · 열네 마리의 보스 |

## 다시 만들기

게임을 1/30초씩 직접 진행하며 매 프레임을 찍습니다(`tools/record_trailer.cjs`, 헤드리스 브라우저라 실제보다 훨씬 느림: 장면 하나에 10~20분).

```bash
cd dot3d && npm run build
python3 -m http.server 8765 &
# 전부 새로 (두 시간 가까이)
OUT=/tmp/frames/ node tools/record_trailer.cjs          # 직업·제목 장면 모두
tools/make_trailer.sh /tmp/frames                       # 이어 붙이고 음악 깔기 → marketing/trailer/wolhagung-trailer.mp4
# 장면 몇 개만 새로 찍어 지금 영상 끝에 붙이기 (끝 화면은 바꿈)
SEG=kb_tomb OUT=/tmp/new/ node tools/record_trailer.cjs sword
SEG=l_end OUT=/tmp/new/ node tools/record_trailer.cjs title
tools/extend_trailer.sh /tmp/new                        # 지금 영상에서 끝 화면(119프레임)을 떼고 새 장면 + 새 끝 화면
```

장면을 바꾸려면 `tools/record_trailer.cjs`의 `SEGS`(직업별 [폴더 이름, 준비, 프레임 수])를 고칩니다. 폴더 이름 순서가 영상 순서입니다.
