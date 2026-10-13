# 앱 출시 가이드 — 월하궁: 도깨비 야행 (안드로이드 · iOS)

웹판을 [Capacitor](https://capacitorjs.com)로 감싼 앱입니다. 게임 코드는 웹판·데스크톱판과 같고, 앱 껍데기는 `mobile/` 폴더에 있습니다.

| 항목 | 값 |
| --- | --- |
| 앱 이름 | 월하궁 |
| 패키지 이름(앱 ID) | `kr.wolhagung.game` — **처음 올리기 전에만 바꿀 수 있음.** 바꾸려면 `mobile/capacitor.config.json`의 `appId`와 `mobile/android/app/build.gradle`의 `namespace`·`applicationId`, `MainActivity.java`의 폴더·`package`를 함께 고칩니다 |
| 최소 안드로이드 | 7.0 (API 24) · 대상 API 36 |
| 화면 | 가로·세로 모두, 상태 표시줄·내비게이션 바 숨긴 전체 화면, 노는 동안 화면 꺼짐 없음 |
| 용량 | 게임 파일 약 38MB (음원 ogg·mp3 둘 다) → 설치 크기 약 45~50MB |
| 인터넷 | 필요 없음 (모든 파일이 앱 안에) |

## 1. 폴더 구성

```
mobile/
  capacitor.config.json   앱 ID·이름·바탕색
  package.json            npm run sync / android / apk / bundle
  www/                    (자동) 웹판 파일 묶음 — tools/app_www.cjs가 만듦, 저장소에 안 올림
  android/                안드로이드 스튜디오 프로젝트
    app/src/main/java/kr/wolhagung/game/MainActivity.java   전체 화면·화면 켜 두기
    app/src/main/res/      아이콘(적응형)·시작 화면 — tools/app_icons.py가 만듦
  ios/                    Xcode 프로젝트 (Mac에서)
```

게임 안 앱 전용 처리는 `src/native.js`: 휴대폰 **뒤로 가기 단추**(대화 넘기기 → 열린 창 닫기 → 게임 중이면 메뉴, 선택 화면에서는 두 번 눌러 끄기), **앱을 내리면** 저장하고 메뉴를 열어 멈추고 소리를 멈춤. 앱에서는 오프라인 저장(sw.js)을 쓰지 않고, 파일 내려받기가 안 되니 저장 파일 내보내기 대신 **기기 옮기기 코드**를 씁니다.

## 2. 안드로이드 빌드

준비: [Android Studio](https://developer.android.com/studio) (SDK·JDK 21 함께 설치됨), Node.js 22 이상.

```bash
cd dot3d
npm install && npm run build          # 웹판 빌드
cd mobile
npm install
npm run android                       # www 묶기 → 안드로이드에 복사 → 안드로이드 스튜디오 열기
```

안드로이드 스튜디오에서 휴대폰을 USB로 연결(개발자 옵션 → USB 디버깅)하고 ▶ Run. 시험용 APK만 필요하면 `npm run apk` → `android/app/build/outputs/apk/debug/app-debug.apk`.

게임을 고친 뒤에는 `npm run build` 후 `cd mobile && npm run sync`만 다시 하면 됩니다. 아이콘(`icon.png`)을 바꿨으면 `python3 tools/app_icons.py`.

### 출시용 서명 (처음 한 번)

```bash
cd dot3d/mobile/android
keytool -genkey -v -keystore ../wolhagung-release.jks -keyalg RSA -keysize 2048 -validity 10000 -alias wolhagung
```

`mobile/android/keystore.properties`를 만듭니다 (저장소에 올리지 않음):

```
storeFile=../../wolhagung-release.jks
storePassword=만든 비밀번호
keyAlias=wolhagung
keyPassword=만든 비밀번호
```

> **열쇠 파일(.jks)과 비밀번호를 잃어버리면 앱을 다시는 고쳐 올릴 수 없습니다.** 두 군데 이상에 따로 보관하세요. (Play 앱 서명을 켜면 구글이 출시 열쇠를 보관하고, 이 파일은 '업로드 열쇠'가 됩니다 — 잃어버려도 구글에 재설정을 요청할 수 있음.)

출시 묶음: `npm run bundle` → `android/app/build/outputs/bundle/release/app-release.aab` (플레이 스토어에는 APK가 아니라 이 AAB를 올림).

**올릴 때마다** `android/app/build.gradle`의 `versionCode`를 1 올리고, `versionName`을 게임 버전(`src/version.js`)과 맞춥니다.

## 3. 구글 플레이 출시

1. [Play Console](https://play.google.com/console) 개발자 계정 — 등록비 **$25 한 번**, 신원 확인(며칠).
   - **개인 계정은 처음 출시 전에 비공개 테스트가 필요합니다:** 테스터 12명 이상이 14일 넘게 참여해야 '프로덕션'으로 출시할 수 있습니다. 지인·커뮤니티로 테스터를 미리 모아 두세요. (조직(사업자) 계정은 이 조건이 없습니다.)
   - 유료로 팔려면 결제 프로필(판매자 계정)과 은행 계좌가 필요합니다. 국내에서 판매 수익이 생기면 사업자 등록·통신판매업 신고가 필요할 수 있으니 세무 상담을 받아 보세요.
2. **앱 만들기:** 이름 `월하궁: 도깨비 야행`, 기본 언어 한국어, 게임, 유료/무료 선택 (**유료 ↔ 무료는 나중에 유료로 되돌릴 수 없음** — 무료로 냈다가 유료로 바꿀 수 없음).
3. **스토어 등록정보** (아래 5장의 글을 붙여 넣기):
   - 앱 아이콘 512×512: `icon.png`
   - 그래픽 이미지 1024×500: `marketing/capsules/play_feature_1024x500.png`
   - 휴대폰 스크린샷: `marketing/play/phone_1_palace.png` ~ `phone_5_shop.png` (1080×1920) + 가로 `marketing/screenshots/*.jpg` (1920×1080)
   - 태블릿 스크린샷(7·10인치): 가로 스크린샷을 그대로 써도 됩니다
   - 홍보 영상(선택): 트레일러를 유튜브에 올려 링크
4. **앱 콘텐츠:**
   - 개인정보처리방침: `PRIVACY.md` 내용을 웹 페이지로 올리고 그 주소 입력 (GitHub Pages, 노션 공개 페이지 등)
   - 광고: 없음
   - 앱 액세스: 모든 기능 제한 없이 이용 가능
   - 콘텐츠 등급(IARC 설문): 게임 → 폭력: 판타지 폭력(만화풍 캐릭터가 요괴와 싸움, 피 없음) / 성적 내용·욕설·약물·도박 없음 / 사용자 간 상호작용·위치 공유 없음 / 디지털 상품 구매 있음(꾸미기, 8장) → 보통 **12세 이용가(국내) · PEGI 7** 정도로 나옵니다. 구글 플레이는 국내 자체등급분류 사업자라 이 설문으로 국내 등급도 정해집니다.
   - 타겟층: **13세 이상** 으로 고르면 '가족 정책' 심사가 단순해집니다
   - 데이터 보안: **수집하는 데이터 없음 · 공유하는 데이터 없음** (진행 기록은 기기 안에만 저장, 서버 전송 없음)
   - 정부 앱·금융 기능·건강 기능: 아님
5. **테스트 → 출시:** 내부 테스트(나와 팀)로 먼저 올려 실제 기기에서 확인 → 비공개 테스트(12명·14일) → 프로덕션. 심사는 보통 며칠.

## 4. iOS (앱스토어)

필요한 것: **Mac + Xcode**, Apple 개발자 프로그램(**1년 $99**).

```bash
cd dot3d/mobile
npm run sync && npx cap open ios      # Xcode가 열림
```

Xcode → App 대상 → Signing & Capabilities에서 팀 선택 → 실제 아이폰으로 Run → Product → Archive → App Store Connect에 올림. 앱스토어 등록정보·스크린샷(6.7인치 1290×2796 등)·개인정보 '데이터 수집 안 함'·연령 등급(9+ 또는 12+)을 채우고 심사 제출. 아이콘·시작 화면은 `tools/app_icons.py`가 이미 넣어 둡니다. 상태 표시줄 숨김·전체 화면은 `Info.plist`에 설정돼 있습니다.

## 5. 스토어 등록정보 글

**짧은 설명 (80자 이내)**
- 한국어: 달빛 아래 궁궐에서 도깨비와 요괴를 물리치는 도트 3D 액션 RPG
- English: A pixel-art 3D action RPG — battle dokkaebi and yokai beneath the moon

**자세한 설명 (한국어)**

```
해가 지면 궁궐 마당에 도깨비 떼가 몰려온다.
깨진 달거울의 조각을 찾아, 검객·도사·요정·창술사 네 영웅이 열네 개의 지역을 누빈다.

■ 한국 설화 속 요괴들과 싸우는 도트 3D 액션
 - 도깨비 대왕, 천년 구미호, 저승사자, 이무기, 불가사리, 장산범, 어둑시니, 뇌공… 보스 열넷
 - 단계마다 패턴이 바뀌는 보스전, 완벽한 회피와 반격

■ 네 직업, 기술 수련과 각인
 - 직업마다 다섯 기술과 보스 무기의 고유 기술
 - 갈래를 골라 기술이 바뀌는 기술 수련과 각인

■ 모으고 키우는 재미
 - 강화(+15), 도감(모을수록 모든 직업이 강해짐), 세트 장비, 수호령
 - 장터와 공방, 보스 다시 싸우기와 보스 연속 도전
 - 저승 시련탑(끝없는 층), 오늘의 목표, 업적 58개

■ 휴대폰에 맞춘 조작
 - 가상 스틱과 큰 기술 단추, 세로·가로 모두 지원
 - 자동 사냥·자동 이동, 인터넷 없이 플레이
 - 한국어·English·日本語·简体中文

광고 없음 · 개인 정보 수집 없음
```

**Full description (English)**

```
When night falls, dokkaebi swarm the palace courtyard.
Four heroes — swordsman, mage, fairy archer and spearman — travel fourteen regions to restore the shattered Moon Mirror.

• Pixel-art 3D action against monsters from Korean folklore: the Dokkaebi King, the Thousand-Year Gumiho, the Grim Reaper, Imugi, Bulgasari, Jangsanbeom, Eoduksini, Noegong… fourteen bosses with phase-changing patterns, perfect dodges and counters.
• Four classes, branching skill training and runes, unique boss-weapon skills.
• Enhancement to +15, a codex that strengthens every class, set gear and companion spirits, a market and workshop, boss rematches and boss rush, the endless Trial Tower, daily goals and 58 achievements.
• Built for phones: virtual stick and large skill buttons, portrait and landscape, auto-hunt and auto-move, fully offline.
• Korean, English, Japanese, Simplified Chinese.

No ads · No personal data collected
```

## 6. 출시 전 확인 (실제 기기)

`RELEASE.md`의 「실제 기기 점검」 목록을 앱으로도 한 번 합니다. 앱에서 더 볼 것:

- [ ] 뒤로 가기 단추: 대화·가방·메뉴·지도가 차례로 닫히고, 선택 화면에서 두 번 눌러 꺼지는지
- [ ] 홈 단추로 내렸다 다시 열기: 저장돼 있고, 메뉴가 열린 채 멈춰 있고, 소리가 다시 나는지
- [ ] 전화가 오거나 알림 창을 내렸을 때 게임이 멈추는지
- [ ] 휴대폰을 돌렸을 때 가로·세로 배치가 바로 바뀌는지
- [ ] 앱을 지웠다 다시 깔면 기록이 사라지므로(기기 안 저장), 옮기기 코드로 되살아나는지

## 7. 나중에 더할 수 있는 것

- **클라우드 저장:** 구글 플레이 게임즈 서비스(저장된 게임)·iCloud 또는 우리 서버. 지금은 기기 안 저장 + 옮기기 코드.
- **업적 연동:** 게임 안 업적 58개를 플레이 게임즈 업적으로 (`STEAM_ACHIEVEMENTS.md`의 이름·설명·아이콘을 그대로 쓸 수 있음).
- **인앱 결제:** 꾸미기(달빛 구슬)로 정함 — 아래 8장.

## 8. 인앱 결제 (달빛 구슬)

게임 쪽은 다 돼 있습니다: 구슬 지갑, 꾸밈 27가지, 입어 보기, 꾸러미 다섯 (`src/cosmetics.js`, `src/billing.js`, README 「꾸미기 · 달빛 구슬」). 남은 것은 앱 쪽 결제 연결입니다.

1. **Play Console → 수익 창출 → 인앱 상품**에 '소비성' 상품 다섯을 같은 id로 만듭니다: `beads_60` ₩1,200 · `beads_300` ₩5,900 · `beads_600` ₩11,000 · `beads_1200` ₩22,000 · `beads_3000` ₩55,000. (결제 프로필·판매자 계정이 있어야 만들 수 있음.)
2. 앱에 결제 플러그인을 넣습니다 (예: `cordova-plugin-purchase` 또는 RevenueCat Capacitor 플러그인). 앱이 켜질 때 `window.dot3dBilling = { buy: async (id) => ({ ok: true }) | ({ ok: false, msg }) }`를 만들어 주면 게임이 그대로 씁니다. 결제가 끝나고 **영수증 확인이 된 뒤에만** `{ ok: true }`를 돌려주고, 그다음 상품을 '소비(consume)' 처리합니다.
3. **꼭 정할 것 — 구슬을 어디에 보관하나:** 지금 구슬은 기기 안 저장 기록에 들어 있습니다. 그래서
   - 앱을 지우거나 기기를 바꾸면 산 구슬도 사라집니다(옮기기 코드로만 옮김). 소비성 상품은 구글이 되살려 주지 않습니다.
   - 저장 기록·옮기기 코드를 고치면 구슬을 늘릴 수 있습니다.
   → 출시 전에 둘 중 하나를 고르세요. **(가) 서버:** 계정(구글 로그인) + 서버에서 영수증 검증·구슬 보관 — 가장 안전, 서버 비용·개발이 듦. **(나) 서버 없이:** 구슬 대신 꾸밈을 '비소비성(한 번 사면 영구)' 상품이나 묶음으로 팔고, 앱을 켤 때 구글에서 산 목록을 다시 받아와 열어 줌 — 되살리기는 되지만 상품 수가 많아짐.
4. 개인정보처리방침·데이터 보안: 결제는 구글 플레이가 처리하고 게임은 카드 정보를 받지 않습니다 (`PRIVACY.md` 4항). 콘텐츠 등급 설문에서 '디지털 상품 구매 있음'에 답합니다. 스토어 등록정보에 '인앱 구매 포함'이 붙습니다.
5. 확률형 상품은 없습니다(꾸밈은 고른 것을 그대로 삼). 그래서 확률 공개 의무 대상이 아닙니다.
