# 이클립스: 어웨이크닝 — 시나리오

## 세계관

**대륙 아스텔라.** 천 년 전 어둠의 군주 **녹스(Nox)** 가 대륙을 삼키려 했다. 네 명의 수호자가 목숨을 걸고
그를 **네 개의 봉인**에 가두었고, 각자 한 봉인씩 맡아 지키기로 맹세했다.

| 봉인 | 수호자 | 장소 | 게임 속 보스 |
|---|---|---|---|
| 피의 봉인 | 피로 맹세한 기사 군주 | 망자의 묘지 (동쪽) | 뱀파이어 군주 |
| 미궁의 봉인 | 길 잃은 자를 인도하던 왕 | 오크 요새 너머 미궁 (남쪽) | 미노타우르스 킹 |
| 서리의 봉인 | 가장 오래 버틴 거인 | 서리 설원 (북서쪽) | 서리 거인 요툰 |
| 화염의 봉인 | 가장 강했던 불꽃 | 화염의 용암지대 (남동쪽) | 화염 군주 이그니스 |

해와 달이 겹치는 **이클립스(일식)** 가 오면 봉인이 약해진다. 이번 이클립스에 녹스의 목소리가 봉인 너머에서
수호자들을 불렀고, 넷 모두 **검은 빛**에 타락했다. 그 기운은 짐승과 망자, 오크와 트롤까지 물들이고 있다.

같은 날, **라스카노 마을** 광장의 오래된 제단 앞에서 기억을 잃은 한 사람이 눈을 뜬다. 손등에는 **일식의 인장**.
이클립스의 날 인장을 받고 깨어난 자를 사람들은 **각성자** 라 부른다. 플레이어가 바로 그 각성자다.

## 인물

- **현자 엘로아** — 이클립스 수호회의 마지막 현자. 라스카노 광장에서 각성자를 이끈다. 장이 끝날 때마다 보고를 받는다.
- **무기 상인 자이드 / 잡화 상인 노바 / 모험 상인 레빈** — 마을 상인들. 각성자의 여정을 돕는다.
- **순간이동사 카심** — 봉인지로 각성자를 보내 준다. 이클립스 균열로 가는 길도 안다.
- **경비병들** — 마을 네 문을 지키며 주변의 이상 징후를 알린다.
- **녹스** — 봉인 너머의 어둠의 군주. 아직 모습을 드러내지 않는다.

## 이야기 흐름 (퀘스트)

| 장 | 내용 | 퀘스트 |
|---|---|---|
| **1장 · 각성** | 제단에서 깨어나 엘로아를 만나고, 초원의 이상 징후를 처리하며 힘을 되찾는다. | 1-1 ~ 1-6 |
| **2장 · 피의 봉인** | 묘지의 망자와 해골 기사단을 쉬게 하고 뱀파이어 군주를 쓰러뜨린다. 군주의 유언: "녹스가… 깨어난다…" | 2-1 ~ 2-5 |
| **3장 · 미궁의 봉인** | 검은 부적을 받은 오크 요새를 뚫고, 늪지에서 봉인석 조각을 되찾아 미노타우르스 킹과 싸운다. | 3-1 ~ 3-5 |
| **4장 · 서리의 봉인** | 얼어붙은 설원을 지나 서리 거인 요툰을 쓰러뜨린다. 거인의 경고: "화염의 형제가… 이미 문을 열었다…" | 4-1 ~ 4-5 |
| **5장 · 화염의 봉인** | 용암지대에서 녹스의 땅에서 넘어온 지옥 늑대까지 상대하고 화염 군주 이그니스를 쓰러뜨린다. | 5-1 ~ 5-6 |

**반전 (5-5 ~ 5-6).** 이그니스의 마지막 말: "각성자여… 너의 인장은… 녹스가 남긴 것이다."
일식의 인장은 녹스가 자신의 그릇을 찾으려 뿌린 씨앗이었다. 엘로아는 말한다. "인장의 주인이 누구든,
자네의 선택이 자네를 만드는 걸세." 네 봉인은 되살아났지만 **이클립스 균열** (일일 던전)은 여전히 열려 있다.
녹스의 그림자가 스며드는 그곳을 매일 막는 것이 각성자의 다음 임무다. (다음 이야기로 이어짐)

## 게임에 적용된 곳

- **인트로**: 새 캐릭터로 시작하면 `assets/intro/intro.mp4` (컷 1~4를 1초 크로스페이드로 이은 영상)를 재생하며 프롤로그 문장을 `D.INTRO.cues` 시간표대로 자막으로 띄운다. 영상을 못 틀면 문장만 나온다. 설정 → 인트로 다시 보기.
- **퀘스트**: 장(章)별로 묶이고, 시작할 때 의뢰인의 대사, 보상을 받을 때 결과 대사가 대화창으로 나온다.
  퀘스트 창에서 현재 퀘스트의 대사를 다시 볼 수 있다.
- **현자 엘로아**: 마을 광장의 새 NPC. 장이 끝날 때 보고 퀘스트가 있다.
- 데이터는 `js/data.js` 의 `D.PROLOGUE`, `D.QUESTS` (`ch`, `by`, `story`, `end`).

## 인트로 영상 프롬프트 (Gemini / Veo)

8초짜리 컷 4개를 만들어 이어 붙이는 구성이다. 모든 컷 앞에 **공통 스타일** 문단을 똑같이 붙인다.
완성된 컷 4개는 1초 크로스페이드로 이어 `assets/intro/intro.mp4` 하나로 합쳐 두었다 (컷을 바꾸면 다시 합친다).

**공통 스타일**
```
Epic dark-fantasy cinematic, hand-painted 2D animation look like a high-end fantasy MMORPG opening, 16:9, 8 seconds,
dramatic volumetric light, deep purple and gold palette with a black solar eclipse motif, film grain, slow camera moves,
no text, no subtitles, no modern objects, orchestral trailer mood.
```

**컷 1 — 천 년 전의 전쟁**
```
A colossal shadow lord made of black smoke and purple fire looms over a medieval continent at night. Four heroic guardians
stand on four mountain peaks — a crimson knight, a horned labyrinth king, a frost giant, and a warrior of living flame —
and raise glowing seal runes (red, bronze, ice blue, orange) that bind the shadow with chains of light and drag it into
the earth. The camera pulls back as the four seals flash and the land falls silent.
```

**컷 2 — 이클립스**
```
Present day. A peaceful medieval stone town with a round plaza and a fountain at dawn. The moon slides across the sun;
a black eclipse with a thin golden ring forms in the sky. Birds scatter, torches flicker, the townsfolk look up in fear.
The light turns violet and a cold wind sweeps through the empty streets.
```

**컷 3 — 타락한 수호자들**
```
Fast cinematic montage under the black sun: a vampire lord rising from a graveyard altar, a minotaur king roaring in a
stone labyrinth, a frost giant cracking a glacier, a fire lord bursting out of a lava lake. In each shot their eyes
ignite with the same dark purple light and black veins spread across their bodies.
```

**컷 4 — 각성자의 눈뜸**
```
Inside the town plaza, an old stone altar glows. A young adventurer lying before it opens their eyes. A golden eclipse
sigil burns into the back of their hand, light spilling between the fingers. They stand up and look toward the black sun.
The camera rises past them into the sky, ending on the eclipse filling the frame with a bright golden rim.
```

**한 번에 만들 때 (8초 1컷)**
```
Epic dark-fantasy cinematic, hand-painted 2D animation look, 16:9, 8 seconds. A black solar eclipse over a medieval stone
town. Four corrupted guardians — a vampire lord, a minotaur king, a frost giant and a fire lord — appear as giant ghostly
silhouettes around the eclipse, their eyes glowing purple. In the town plaza a young adventurer awakens before a glowing
altar, a golden eclipse sigil burning on the back of the hand, and looks up at the black sun. No text.
```
