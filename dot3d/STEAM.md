# 스팀 출시 준비

코드 쪽 연동은 끝나 있고, 아래는 **스팀웍스 사이트에서 직접 해야 하는 일**과 그때 쓸 자료입니다.

## 1. 앱 등록
1. [스팀웍스](https://partner.steamgames.com/) 가입, 세금·은행 정보 입력, 앱 등록비(앱마다 100달러) 결제
2. 정식판 앱 번호(App ID)와 체험판 앱 번호(Demo App ID)를 받음
3. `desktop/steam.json`에 적기
   ```json
   { "appId": 1234560, "demoAppId": 1234570 }
   ```
   0이면 스팀 연동 없이 실행됩니다. 개발 중 시험은 `STEAM_APP_ID=480 npm start` (스팀의 시험용 앱 Spacewar)

## 2. 게임 안 연동 (해 둔 것)
- `desktop/main.js`: `steamworks.js`로 스팀 초기화, 스팀 오버레이(Shift+Tab), 스팀 밖에서 실행하면 스팀을 통해 다시 실행
- 업적: 게임 안에서 업적을 달성하면 스팀 업적도 같이 열림. 스팀이 켜진 뒤 처음 한 번은 이미 달성한 업적을 모두 보냄
- 스팀이 없거나 초기화에 실패하면 그냥 실행 (웹판·itch.io판과 같은 코드)

## 3. 업적 등록
- 표: [`STEAM_ACHIEVEMENTS.md`](STEAM_ACHIEVEMENTS.md) (39개, API 이름 · 한국어 · 영어)
- 아이콘: `marketing/achievements/` (64×64, 달성 / `_locked` 미달성)
- 업적을 고치면 다시 만들기: `python3 tools/steam_achievements.py && node tools/steam_icons.cjs`

## 4. 스팀 클라우드 저장 (코드 필요 없음)
스팀웍스 → 앱 관리 → 스팀 클라우드 → **자동 클라우드(Auto-Cloud)**
| 운영체제 | 루트 | 하위 폴더 | 패턴 |
| --- | --- | --- | --- |
| Windows | `WinAppDataRoaming` | `Wolhagung` | `save.json` |
| macOS | `MacAppSupport` | `Wolhagung` | `save.json` |
| Linux | `LinuxXdgConfigHome` | `Wolhagung` | `save.json` |
바이트 한도 1MB, 파일 수 5개면 충분합니다.

## 5. 빌드 올리기
```bash
npm run build && cd desktop && npm install && npm run dist:win        # 정식판 → desktop/release/Wolhagung-<버전>-win-x64.zip
cd .. && npm run build:demo && cd desktop && npm run dist:win:demo     # 체험판
```
압축을 풀어 스팀웍스 SDK의 `ContentBuilder`(SteamPipe)로 디포에 올립니다. 실행 파일: `Wolhagung.exe`

## 6. 스토어 페이지 자료
- 캡슐 이미지: `marketing/capsules/` (헤더 920×430, 작은 462×174, 메인 1232×706, 세로 748×896, 라이브러리 600×900·3840×1240·로고)
  - 키 아트 원본은 `marketing/keyart/`. 다시 만들 때: 게임 서버(`python3 -m http.server 8765`)를 띄우고 `node tools/key_art.cjs '…'`(설정은 파일 맨 위)로 찍은 뒤 `node tools/make_capsules.cjs`.
- 스크린샷: `marketing/screenshots/` (1920×1080, 10장)
- 트레일러: `marketing/trailer/` (1280×720)
- 소개 문구: [`RELEASE.md`](RELEASE.md)

## 7. 그 밖에
- 등급 분류: 게임물관리위원회 — 스팀은 자체 등급 분류 사업자라 스팀웍스의 등급 설문(IARC)으로 처리할 수 있는지 확인
- 체험판: 정식판 앱의 '체험판' 항목으로 만들고, 넥스트 페스트에 내려면 출시 예정 페이지가 먼저 공개되어 있어야 함
- 스토어 주소가 정해지면 `src/edition.js`의 `STORE_URL`을 바꾸기
