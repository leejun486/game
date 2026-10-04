# 출시 가이드 — 월하궁: 도깨비 야행

판매용 빌드를 만들고 itch.io와 Steam에 올리는 순서, 스토어 소개문(한국어/영어), 준비물 체크리스트입니다.

## 1. 빌드 만들기

| 대상 | 명령 (dot3d 폴더에서) | 결과 |
| --- | --- | --- |
| 웹판 (itch.io 브라우저 플레이) | `npm run dist:web` | `release/Wolhagung-web-<버전>.zip` (약 20MB) |
| 체험판 웹판 (스팀 넥스트 페스트·itch.io) | `npm run dist:demo` | `release/Wolhagung-demo-web-<버전>.zip` (보스 셋, 약 30~40분) |
| Windows | `cd desktop && npm install && npm run dist:win` | `desktop/release/Wolhagung-<버전>-win-x64.zip`, `desktop/release/win-unpacked/` |
| Linux | `cd desktop && npm run dist:linux` | AppImage |
| macOS | `cd desktop && npm run dist:mac` (맥에서) | dmg (서명·공증은 Apple 개발자 계정 필요) |

- 버전은 `src/version.js` 한 곳에서 바꿉니다. 바꾸면 `CHANGELOG.md`에 적고, `package.json`과 `desktop/package.json`의 version도 맞춥니다.
- 아이콘은 `icon.png`(512×512)와 `favicon.png`(64×64)입니다. 데스크톱판은 `icon.png`를 실행 파일 아이콘으로 씁니다.
- 게임 안 스크린샷 모드: **F2** 화면 글자 숨기기, **F3** 지금 화면을 PNG로 저장.

## 2. itch.io

1. itch.io → Dashboard → **Create new project**.
2. Kind of project: **HTML**. Uploads에 `Wolhagung-web-<버전>.zip`을 올리고 **This file will be played in the browser**를 체크합니다.
3. Embed options: Viewport **1280 × 720**, **Fullscreen button** 켜기, **Mobile friendly** 켜기(터치 조작 지원).
4. 같은 페이지에 Windows zip도 올리고 플랫폼을 Windows로 표시합니다(내려받아 하는 판).
5. Pricing: **Paid**. 가격을 정합니다. 예: $3.99, 5,000원 선이면 $3.99~$4.99.
6. Cover image에 `marketing/capsules/itch_cover_630x500.png`, Screenshots에 `marketing/screenshots/*.jpg`를 넣습니다.
7. 소개문은 아래 4장을 붙여 넣습니다. Genre: Action, Tags: action, rpg, hack-and-slash, korean, folklore, 3d, pixel-art.

## 3. Steam

1. Steamworks 가입 후 **Steam Direct** 앱 등록비($100, 한 게임당)를 냅니다. 세금·은행 정보 입력이 끝나야 다음 단계가 열립니다.
2. 스토어 페이지:
   - 캡슐 이미지: `marketing/capsules/`의 파일을 쓰고, 파일 이름에 규격이 적혀 있습니다.

     | Steam 항목 | 파일 |
     | --- | --- |
     | Header capsule 920×430 | header_920x430.png |
     | Small capsule 462×174 | small_462x174.png |
     | Main capsule 1232×706 | main_1232x706.png |
     | Vertical capsule 748×896 | vertical_748x896.png |
     | Library capsule 600×900 | library_600x900.png |
     | Library hero 3840×1240 | library_hero_3840x1240.jpg |
     | Library logo 1280×720 | library_logo_1280x720.png (투명 배경) |

   - 스크린샷: 1920×1080 다섯 장 이상이 필요합니다. `marketing/screenshots/`에 열 장이 있습니다.
   - 트레일러는 아직 없습니다. 권장 사항이며, F2 스크린샷 모드로 화면을 녹화해 30~60초로 만들면 좋습니다.
3. 빌드 올리기: SteamPipe(ContentBuilder/SteamCMD)로 `desktop/release/win-unpacked/` 폴더를 Windows 디포에 올립니다. 실행 파일은 `Wolhagung.exe`입니다.
4. Steam Cloud: Auto-Cloud에 저장 경로를 등록합니다. 경로는 `%APPDATA%/Wolhagung/save.json`이고, Steamworks 설정의 Root는 WinAppDataRoaming, 하위 경로는 `Wolhagung`입니다.
5. 업적: 게임 안 업적 39개(`src/records.js`)는 지금은 게임 안에만 기록됩니다. Steam 업적으로도 띄우려면 steamworks.js 같은 연동 모듈을 데스크톱판에 붙이고 같은 id로 등록해야 합니다. 다음 작업 후보입니다.
6. 출시 일정: 스토어 페이지를 "출시 예정"으로 최소 2주 공개해야 출시할 수 있고, 빌드와 스토어 검토에 며칠씩 걸립니다.
7. 가격: Steam 가격 등급에서 원화 가격을 고릅니다(5,000원 근처의 등급).

> 한국에서 유료로 판매하려면 게임물 등급분류가 필요할 수 있습니다. 플랫폼별 자체등급분류 여부와 절차는 게임물관리위원회(GRAC) 안내를 확인하세요. 내용 기술 예시: 판타지 폭력(요괴와 싸움), 피 표현 없음, 선정성·언어 문제 없음.

## 4. 스토어 소개문

### 한국어

**짧은 소개 (300자 이내)**
달빛이 가장 밝은 밤, 조선 궁궐의 담장이 이승과 저승의 경계가 된다. 깨진 달거울 조각을 되찾으려 도깨비·구미호·저승사자와 맞서는 한국 설화 액션 RPG. 네 직업, 파생 기술과 각인, 보스 장비, 끝없는 저승 시련탑.

**자세한 소개**
백 년마다 경계를 비추던 궁의 보물 달거울이 열 조각으로 깨졌습니다. 조각이 떨어진 곳마다 잠들어 있던 것들이 깨어납니다. 궁궐에는 도깨비가, 대숲에는 여우가, 옛 절터에는 망자가 나타납니다.

- **한국 설화 속 요괴들:** 도깨비 대왕 두억시니, 천년 구미호, 저승사자, 천년 이무기, 쇠먹는 불가사리, 산군 백호, 동해 용왕, 천년 왕지네, 동장군, 염라대왕. 보스마다 체력이 줄면 포효하며 공격이 바뀝니다.
- **네 직업:** 발도술의 검객, 부적술의 도사, 활의 요정, 창술의 창술사. 직업마다 기술 셋이 있습니다.
- **파생 기술과 각인:** 기술마다 두 갈래가 있고, 단계마다 각인(화염·서리·뇌전, 메아리·흡혼, 신속·호신·질풍, 각성·폭주)을 골라 나만의 조합을 만듭니다.
- **보스 장비:** 보스만 떨어뜨리는 고유 기술 무기와 고유 효과 옷, 세트 장비, 무작위 옵션 장신구가 있습니다.
- **열 지역의 오픈월드:** 달빛 정원 궁, 대숲, 눈 덮인 폐사찰, 물안개 늪, 불가사리 협곡, 단풍 산성, 바다 밑 용궁, 시냇물 흐르는 여름 계곡, 눈보라 치는 고원, 저승 시련탑.
- **엔드게임:** 층마다 강해지는 저승 시련탑, 회차, 현상수배, 업적 39개와 도감이 있습니다.
- **국악 배경음악:** 지역마다 장단과 가락이 다른 배경음악이 흐릅니다.
- **조작:** 키보드·마우스, 게임패드, 터치를 지원하고 키를 바꿀 수 있습니다. 한국어와 영어를 지원합니다.

### English

**Short description (≤300 chars)**
On the brightest full moon, the walls of a Joseon palace become the border between the living and the dead. Recover the shards of the broken Moon Mirror and battle dokkaebi, gumiho and the Grim Reaper in an action RPG drawn from Korean folklore.

**About this game**
Every hundred years, the palace's Moon Mirror shone upon the border and kept the spirits on the other side. This year it shattered into ten pieces, and wherever a shard fell, something woke up.

- **Monsters of Korean folklore:** the Dokkaebi King, the Thousand-Year Gumiho, the Grim Reaper, the Imugi, the iron-eating Bulgasari, the White Tiger of the mountains, the Dragon King of the East Sea, the Thousand-Year Centipede, General Winter and King Yeomra. Every boss roars and changes tactics as it weakens.
- **Four classes:** Swordsman (iaijutsu), Taoist (talismans), Fairy (bow) and Lancer (spear), each with three skills.
- **Skill branches and runes:** every skill splits into two branches, and each rank lets you pick a rune (Flame, Frost, Thunder, Echo, Soul Drain, Swift, Guard, Gale, Awakening, Frenzy) to build your own style.
- **Boss gear:** weapons with unique skills, outfits with unique perks, sets and randomly rolled accessories.
- **Ten regions:** a moonlit garden palace, a bamboo grove, a snowbound temple, a misty marsh, a volcanic canyon, a maple-covered mountain fortress, the Dragon Palace beneath the sea, a summer valley with a babbling stream, a blizzard-swept highland and the Tower of Trials.
- **Endgame:** an endless tower, new rounds, bounties, 39 achievements and a codex.
- **Korean traditional music** with its own rhythm in every region.
- **Keyboard & mouse, gamepad and touch**, rebindable keys, Korean and English.

### 태그 / Tags
Action RPG, Hack and Slash, Fantasy, Mythology, Korean, Folklore, 3D, Stylized, Singleplayer, Controller

### 시스템 요구 사항 / System requirements (Windows)

| | 최소 / Minimum | 권장 / Recommended |
| --- | --- | --- |
| OS | Windows 10 64-bit | Windows 10/11 64-bit |
| CPU | 듀얼 코어 2GHz / Dual core 2 GHz | 쿼드 코어 / Quad core |
| 메모리 / RAM | 4 GB | 8 GB |
| 그래픽 / GPU | WebGL 2 지원 내장 그래픽 (Intel UHD 620급), 화질 '낮음' | GTX 1050 / RX 560 이상 |
| 저장 공간 / Storage | 400 MB | 400 MB |

## 5. 출시 전 체크리스트

- [ ] `src/version.js`, `package.json`, `desktop/package.json` 버전을 맞추고 `CHANGELOG.md` 갱신
- [ ] `npm run build` 후 새로 시작해서 튜토리얼, 첫 보스, 저장·이어하기까지 해 보기 (한국어·영어 각각)
- [ ] 화질 '낮음'으로 저사양 노트북에서 30분 플레이 (멈춤·발열 확인)
- [ ] 게임패드와 터치(태블릿)로 한 번씩
- [ ] Windows 빌드를 깨끗한 PC에서 실행하고, 저장 파일 위치(%APPDATA%/Wolhagung) 확인
- [ ] 크레딧 이름(`src/story.js`의 CREDITS) 확인
- [ ] 스토어 이미지(`marketing/`)와 소개문 확인, 트레일러 준비
- [ ] 가격과 지역, 등급분류 확인
