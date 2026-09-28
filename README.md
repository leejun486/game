# 이클립스: 어웨이크닝 (ECLIPSE) — 리니지 라이크 웹 MMORPG

브라우저에서 바로 실행되는 리니지 스타일의 쿼터뷰 액션 RPG입니다. 빌드 과정이나 서버 없이 HTML5 Canvas와 순수 JavaScript로 동작합니다.

## 실행 방법

```bash
# 저장소 루트에서 정적 서버 실행
python3 -m http.server 8000
# 브라우저로 http://localhost:8000 접속
```

`index.html`을 더블클릭해서 열어도 실행됩니다. 진행 상황은 브라우저 `localStorage`에 자동 저장됩니다(10초마다, 창을 닫을 때).

## 주요 기능

| 시스템 | 내용 |
| --- | --- |
| 클래스 | 기사(근접), 요정(원거리 활), 마법사(광역 마법). 클래스마다 전용 스킬 4개 |
| 월드 | 180×180 타일 맵. 라스카노 마을(안전 지역), 바람의 초원, 망자의 묘지, 오크 요새, 고요한 숲 |
| 몬스터 | 고블린, 늑대인간, 멧돼지 전사, 좀비, 해골 전사, 오크, 리자드맨, 트롤. 필드 보스는 뱀파이어 군주와 미노타우르스 킹 |
| AI 모드 | 자동 사냥: 적절한 사냥터로 이동한 뒤 몬스터를 찾아 공격하고 스킬을 사용합니다 |
| 자동 물약 | HP 55% 이하가 되면 물약을 자동으로 사용합니다 |
| 초월 | 카드를 장착하면 외형이 바뀌고 능력치가 오릅니다. 등급은 일반/고급/희귀/영웅/전설이며 목록·합성·성장·보유 효과 탭이 있습니다 |
| 소환 | 다이아나 소환권으로 1회 또는 11회 뽑기(희귀 이상 1장 확정). 카드 뒤집기 연출 포함 |
| 장비/강화 | 무기·갑옷·장신구 장착. 무기 마법 주문서로 강화하며 안전 강화(무기 +6, 갑옷 +4)를 넘으면 실패 시 증발합니다 |
| 퀘스트 | 15단계 메인 퀘스트와 일일 토벌. 퀘스트 창을 클릭하면 목적지로 자동 이동합니다 |
| NPC | 잡화·무기·방어구 상인, 순간이동사, 초월 관리인, 경비병 |
| 다른 플레이어 | 마을과 사냥터를 오가며 사냥하고 채팅하는 봇 24명. 혈맹 태그와 서버 공지가 표시됩니다 |
| UI | 레퍼런스 게임과 비슷한 HUD: 미니맵, 재화, 상단 메뉴, 퀘스트 트래커, HP/MP 바, 스킬·아이템 슬롯 1~8, 경험치 바, 전체 메뉴(캐릭터/초월/퀘스트/순위/지도/우편/설정) |

## 조작

- **클릭**: 이동, 몬스터 공격, NPC 대화 (누르고 있으면 계속 이동)
- **WASD / 방향키**: 이동
- **1~4**: 스킬 · **5~8**: 물약, 귀환 주문서
- **Space**: 가까운 적 공격 · **G**: AI 모드 · **Shift**: 질주
- **I** 인벤토리 · **K** 스킬 · **U** 상점 · **C** 캐릭터 · **J** 퀘스트 · **Y** 초월 · **T** 순간이동 · **B** 마을 귀환 · **M** 지도 · **Tab** 전체 메뉴
- **Enter**: 채팅 · **마우스 휠**: 줌

## 구조

```
index.html          HUD와 패널 마크업
css/style.css       UI 스타일 (모바일 대응 포함)
js/util.js          수학, 노이즈, 효과음(WebAudio)
js/data.js          클래스/스킬/몬스터/아이템/초월 카드/퀘스트 데이터
js/world.js         맵 생성, 지형 렌더링(청크 캐시), 오브젝트, 충돌, 미니맵
js/entities.js      스프라이트 애니메이션, 몬스터/NPC/봇 AI
js/player.js        플레이어 스탯, 인벤토리, 레벨업, AI 모드
js/combat.js        데미지 계산, 투사체, 스킬 이펙트, 드랍, 퀘스트
js/ui.js            HUD, 각종 패널
js/transcend.js     초월 화면, 소환, 합성, 성장
js/main.js          게임 루프, 입력, 카메라, 렌더링, 저장
tools/build_sprites.py  LPC 레이어를 합성해 캐릭터 시트를 만드는 스크립트
```

## 그래픽 출처 / 라이선스

레퍼런스 게임의 이미지는 저작권이 있어 사용하지 않았습니다. 대신 웹에서 자유 라이선스 에셋을 받아 사용했습니다.

- **캐릭터·몬스터 스프라이트**: [Universal LPC Spritesheet Character Generator](https://github.com/sanderfrenken/Universal-LPC-Spritesheet-Character-Generator)의 레이어(CC-BY-SA 3.0 / GPL 3.0 / OGA-BY 3.0)를 `tools/build_sprites.py`로 합성했습니다. 작가별 크레딧은 [`assets/sprites/CREDITS.md`](assets/sprites/CREDITS.md)에 있습니다.
- **아이콘**: [game-icons.net](https://game-icons.net) (CC BY 3.0). 작가는 Lorc, Delapouite, Skoll, Faithtoken, Zeromancer, Willdabeast, Carl Olsen, Caro Asercion, sbed, Darkzaitzev입니다. 색상만 바꿨습니다. 자세한 내용은 [`assets/icons/LICENSE-game-icons.txt`](assets/icons/LICENSE-game-icons.txt)를 참고하세요.
- 지형, 나무, 건물, 이펙트는 코드로 직접 그립니다.
