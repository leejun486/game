# 바뀐 점 / Changelog

## 1.1.0

새 지역 넷, 새로 꾸민 월하궁, 더 긴 모험.

- **월하궁을 새로 꾸몄습니다:** 일직선 어도와 2층 정전 대신, 굽이진 박석 길과 가운데 연지·섬 위 육각정, 동북쪽 침전과 서북쪽 서고, 꽃담과 매화·벚나무, 청사초롱이 있는 달빛 정원 궁입니다. 남문·큰 북·수문장 자리는 그대로입니다.
- **청류 계곡(여름):** 용궁 뒤 샘물길 너머. 폭포에서 시작한 시냇물이 졸졸 흐르고(흐르는 물살과 물거품), 나무다리·징검돌, 물레방아, 산신 제단, 수국과 원추리 꽃밭이 있습니다. 멧돼지, 사마귀 요괴, 왕벌 요괴, 우두머리 천년 왕지네.
- **백설 고원(겨울):** 계곡 남서쪽. 눈 쌓인 소나무와 눈더미, 얼어붙은 못, 눈 덮인 초가 마을, 화톳불, 비스듬히 몰아치는 눈보라. 눈늑대, 얼음 도깨비, 서리 도깨비불, 우두머리 서리 거인 동장군.
- **그래픽·연출:** 범·백호·멧돼지·늑대를 새 몸(가슴·엉덩이 덩어리, 무릎이 굽는 다리, 벌어지는 턱, 마디 꼬리)으로 바꿨고, 왕지네는 등딱지 마디와 물결치는 관절 다리를 달았습니다. 보스 격파 연출(느린 시간, 갈라지는 빛, 빛 폭발, `격파!`), 치명타 섬광, 쓰러지는 몬스터의 넋 연출을 넣었습니다. 눈 쌓인 소나무와 고원 바닥을 깔끔하게 다듬었습니다.
- **지도와 퀘스트 일지:** 화면 오른쪽 아래에 지금 지역의 작은 지도(막힌 곳·물·북·NPC·적·퀘스트 목표 별·내 위치와 방향)가 있습니다. V 키(또는 작은 지도 클릭)로 큰 지도를 열면 모든 지역의 이어짐과 평정 여부(★), 지금 할 일, 지나온 퀘스트 목록을 볼 수 있습니다. 여는 동안 게임은 멈춥니다.
- **그래픽 2차:** 흙길 가장자리가 잔디와 자연스럽게 섞임(돌 포장은 반듯하게). 지역마다 풀포기·들꽃·자갈·낙엽·갈대·조개·눈덩이를 촘촘히 깔고, 덤불·바위·고사리·산호·그루터기를 무리 지어 배치(길을 막지 않음). 늪 웅덩이에 하늘 반사·물결·물가 거품. 단풍·벚·여름 나무의 잎을 둥글고 풍성한 잎뭉치로. 캐릭터·몬스터에 은은한 테두리 빛(밤엔 달빛). 설원·폐사찰이 하얗게 날아가지 않게 노출 조정. 한쪽에서 풀잎이 까맣게 보이던 문제 수정.
- **연출:** 보스마다 등장 연출(하늘에서 떨어져 내려찍기 · 땅이나 물을 가르고 솟기 · 기운이 모여 터지기)과 카메라 당김. 지역마다 다른 색감과 먼 곳의 대기(고화질). 창술사 `창기`에 날아가는 빛의 창과 잔상.
- **난이도:** 쉬움(몬스터 체력 75%·받는 피해 55%) / 보통 / 어려움(체력 135%·받는 피해 145%·경험치 125%·장비 드롭 140%). 선택 화면에서 고르고(패드 Y), 메뉴 → 화면에서 언제든 바꿀 수 있습니다. 저장 파일마다 따로 기억합니다. 어려움 업적 셋(보스 하나, 보스 열 모두, 한 번도 낮추지 않고 메인 퀘스트 완료)이 생겨 업적은 43개입니다(오늘의 목표 포함).
- **고친 점:** 처음 하는 판에서도 세 번째 지역(폐사찰)부터 보스가 `각성`해서 나오던 문제(회차는 지역을 평정할 때마다 오르는데, 각성 조건을 회차로 잡았음). 이제 이미 평정한 지역을 다시 싸울 때만 각성합니다. 새 방식 퀘스트로 넘어가는 순간 2초쯤 매 프레임 오류가 나던 문제(버티기 퀘스트). 밤 싸움의 적이 멀리 떨어진 채 길이 끊겨 오지 못하면 싸움이 끝나지 않던 문제(이제 6초 뒤 가까이 데려오고, 자동 사냥도 멀리 남은 적을 찾아감).
- **깨진 저장 복구:** 저장 기록이 깨져 있으면(저장 도중 꺼짐 등) 기록이 없는 것처럼 새로 시작하던 것을, 5분마다 남기는 예비 기록으로 이어지게 했습니다.
- **자동 테스트:** `npm test` 하나로 번역·타이틀(오프라인)·메인 퀘스트 전 단계·연출 장면·시련탑·저장을 확인합니다.
- **자동 이동은 이동만:** 퀘스트 자동 이동이 사냥터에 닿으면 자동 사냥을 저절로 켜던 것, 자동 사냥이 켜져 있으면 가는 길에 적과 싸우던 것을 없앴습니다. 도착하면 알려만 주고, 싸움은 자동 사냥 버튼(H)으로 직접 켭니다.
- **시련탑 특수 규칙 층 · 각성 보스:** 6층부터 보스가 없는 층 절반쯤에 규칙(질풍·정예·어둠·불바다·떼·유리 몸)이 붙고, 대신 경험치 1.5배·장비 하나 더. 시련탑 20층 이상 보스와 이미 평정한 지역을 다시 울려 부른 보스는 `각성`해서 더 단단하고 빠르며 좋은 장비를 하나 더 줍니다. 업적 `규칙을 넘어서`(규칙 층 10번), `깨어난 것을 잠재우다`(각성 보스) 추가로 업적은 45개입니다.
- **짧은 연출 장면:** 게임 화면 그대로 카메라가 움직이고 사람이 걸어오는 장면을 넣었습니다(Esc·패드 B로 건너뛰기).
  - 첫 밤: 남문으로 들어서는 주인공, 큰 북 곁에서 피어오르는 도깨비불, 돌아보는 수문장
  - 도깨비 대왕을 처음 물리친 뒤 달려와 기뻐하는 수문장, 동해 용왕을 물리친 뒤 물빛이 돌아오는 용궁과 해랑
  - 엔딩 직전: 열 조각이 주인공 둘레를 돌며 떠올라 하나의 달로 모임
- **지역마다 새 방식 퀘스트 (메인 퀘스트 46 → 55단계):** 말 걸기·처치·불 켜기만 되풀이되지 않게 지역마다 하나씩 넣었습니다.
  - 추격: 궁궐 `북채 도둑`, 산성 `전령 까마귀` — 가까이 가면 도망치는 도둑을 구석에 몰거나 기술로 끊어 잡기
  - 찾기: 죽림 `여우의 홀림`, 용궁 `흩어진 진주` — 지도·화살표 없이, 가까이 가면 들리는 소리를 따라 숨은 물건 넷 찾기
  - 순서: 폐사찰 `망자의 비석`, 계곡 `솟대의 순서` — 점(새)이 적은 것부터 두드리기, 틀리면 몬스터가 깨어남
  - 호위: 늪 `사공의 뱃길`, 고원 `심마니의 길` — 곁에 붙어 있어야 걷는 NPC를 매복을 막으며 목적지까지
  - 버티기: 협곡 `가마 지키기` — 몰려오는 화염 도깨비를 막으며 원 안에서 40초
  - 예전 기록은 같은 퀘스트에서 이어집니다(이미 지난 새 퀘스트는 건너뜀).
- **인터넷 없이도 같은 제목 글꼴:** 제목 `월하궁`, 배너, 쓰러짐 화면, 크레딧의 명조체를 게임에 넣었습니다(쓰는 글자만, 한국어·일본어·중국어). 이제 외부 서버에 아무것도 요청하지 않습니다.
- **일본어 · 중국어(간체):** 화면 글자, 퀘스트·대화, 이야기, 아이템, 업적까지 모두 번역했습니다. 선택 화면의 🌐 버튼이나 메뉴 → 화면 → 언어에서 고르고, 처음에는 브라우저 언어를 따릅니다. 중국어는 같은 계열의 도트 글꼴(Fusion Pixel, OFL)을 씁니다. 스팀 업적표에도 두 언어를 넣었습니다.
- **옷 색이 하얗게 보이던 문제:** 고화질에서 옷감 결 노멀맵 때문에 캐릭터 옷(무관복·비단옷·곤룡포 등)이 거의 하얗게 날아가 보이던 문제를 고쳤습니다. 이제 갑옷과 염색 색이 제대로 보입니다.
- **스토어 이미지 새로:** 네 영웅과 도깨비 대왕이 달밤 궁궐에 선 키 아트(`marketing/keyart/`)를 게임 화면으로 찍고, 모든 캡슐 이미지를 다시 만들었습니다(`tools/key_art.cjs`, `tools/make_capsules.cjs`).
- **보기 편하게:** 메뉴 → 화면에 글자·메뉴 크기(100/115/130%), 위험 표시 색(적 공격의 바닥 원·경고선을 노랑·하늘색·자홍 한 색으로 — 색약 대응), 화면 번쩍임 줄이기를 넣었습니다.
- **외형:** 가방에 `외형` 탭. 능력치는 그대로 두고 겉옷 모양, 무기 모양, 염색(14가지, 여덟은 업적으로 열림), 머리색(7가지), 방어구 색 숨기기를 직업마다 고릅니다. 선택 화면의 캐릭터에도 그대로 보입니다.
- **오늘의 목표:** 날마다 목표 셋(적 처치, 특정 몬스터, 보스, 완벽한 회피, 연속 타격, 장비 줍기, 밤 싸움, 시련탑, 현상수배 중 지금 할 수 있는 것)이 생깁니다. 하나마다 경험치, 셋 다 마치면 희귀 이상 장비. 퀘스트 창 아래 `☀ 오늘의 목표 1/3`을 누르거나 메뉴 → 오늘의 목표에서 봅니다. 목표 몬스터는 필드에 더 자주 나옵니다. 업적 `하루하루`(7일) 추가.
- **게임패드 · 스팀 덱:** 메뉴 안을 십자키로 위아래·좌우 칸을 따라 움직이고, LB/RB로 탭을 넘깁니다. 십자키 → 는 큰 지도. 패드를 만지면 화면의 조작 안내(기술 칸, 하단 도움말)가 A·B·X·Y 버튼 그림으로 바뀌고, 키보드를 누르면 다시 글자로 돌아옵니다. 1280×800에서 모든 메뉴를 확인했습니다.
- **발소리 · 등장 소리:** 풀·돌·눈·물·나무·모래 발소리(각 네 가지)를 밟는 바닥에 맞춰 냅니다. 보스 등장 때 떨어지는 바람 소리, 땅울림, 기운 모이는 소리가 납니다.
- **체험판 빌드:** `npm run dist:demo`. 월하궁·죽림·폐사찰(보스 셋)까지 하고, 저승사자를 물리치면 체험판 끝 안내가 나옵니다. 기록은 정식판에서 그대로 이어집니다.
- **저사양:** 플레이 중 프레임이 낮으면(초당 40 미만) 화질이 저절로 한 단계씩 낮아집니다. 화질을 직접 고르면 그대로 둡니다. 화질 '보통'·'낮음'의 그림자 해상도가 실제로 낮아지지 않던 문제(늘 최고 해상도)를 고쳤고, 이제 새로고침 없이 바로 바뀝니다.
- **고친 점:** 밤 싸움 중 쓰러진 뒤 다시 하면 그 파가 바로 '완료'되어 대왕이 둘 나오던 문제. 날아다니는 몬스터가 대숲 덤불처럼 갈 수 없는 곳에 갇혀 밤 싸움이 끝나지 않던 문제(3초 넘게 갇히면 가까운 빈터로 옮겨짐).
- **고친 점 (2):** 남문 밖 박석 길과 죽림 흙길이 겹친 곳이 깜빡이며 깨져 보이던 문제. 창술사 `천창우`·꽃잎 충격파의 바닥 원이 사라지지 않고 잔상으로 남던 문제. `여우불 구슬`처럼 특정 몬스터가 필요한 퀘스트·현상수배 중에는 그 몬스터가 훨씬 자주 나옵니다(여우불 25% → 약 65%).
- **직업 균형:** 요정 체력 100 → 112, 검객 위력 +6%.
- **도사 기본 공격 소리:** 부적을 휙 던지면 종이가 탁 펴지고 오음 풍경 소리와 함께 불이 붙는 소리로 바꿨습니다. 세 번째 부채꼴 공격과 맞았을 때 소리도 따로 있습니다.

- **새 지역 둘:**
  - **단풍 산성:** 협곡 남쪽 산길 너머의 옛 산성입니다. 산적 도깨비, 까마귀 요괴(깃털 화살 세 발), 범(덮치기)이 있고, 우두머리는 산군 백호입니다(돌진·도약·바람 발톱, 3단계는 세 번 연달아).
  - **동해 용궁:** 산성 남서쪽 물길 아래 바다 밑 궁전입니다. 꽃게 병사(단단함), 해파리(독 방울), 거북 장군(아주 단단, 내려찍기)이 있고, 우두머리는 동해 용왕입니다(잠수 후 솟구치기·벼락 폭풍·해일).
  - 지역마다 국악 배경음악과 환경음, 날리는 단풍잎과 떠오르는 물방울이 있습니다.
- **퀘스트 24단계 추가:** 의병장 강호, 용녀 해랑, 포수 만복, 심마니 영감과 함께합니다. 메인 퀘스트는 46단계가 됐습니다.
- **이야기:** 달거울은 이제 열 조각입니다. 백호, 용왕, 왕지네, 동장군이 조각을 하나씩 갖고 있습니다.
- **보스 장비 추가:** 백호·용왕·왕지네·동장군 무기(직업마다 하나씩, 고유 기술 `백호 발톱`·`용왕의 폭풍`·`독침 비`·`눈보라`)와 옷 네 벌.
- **현상수배 8개, 업적 4개, 도감 16종 추가.** 시련탑 보스 층에도 새 보스 넷이 나옵니다.
- **플레이 시간과 드롭:**
  - 일반 몬스터의 장비 드롭을 줄였습니다(종류별 확률의 절반, 방어구·장신구 6~8%, 세트 조각 6%). 보스 전용 무기는 12%, 옷은 22% 확률입니다.
  - 레벨업에 필요한 경험치가 높은 레벨에서 더 가파르게 늘어납니다.
  - 퀘스트 목표 수를 늘렸습니다(여우 10, 여우구슬 6, 강시 8·원귀 5, 물귀신 9·두꺼비 5, 화염 도깨비 9·돌장승 3, 쇳조각 7).
- 예전 저장 파일은 그대로 이어집니다. 메인 퀘스트를 마쳤거나 마지막 단계였다면 `산길 너머`부터 새 지역을 이어서 합니다.

### English

Four new regions, a redesigned Wolhagung and a longer adventure.

- Wolhagung redesigned as a moonlit garden palace: a winding stone path, a lotus pond with an island pavilion, side halls, flower walls and blossoming trees.
- New regions: the Maple Fortress (boss: the White Tiger), the Dragon Palace beneath the East Sea (boss: the Dragon King), Cheongryu Valley with a babbling summer stream (boss: the Thousand-Year Centipede) and the White Snow Highland (boss: General Winter). Each has its own music and ambience.
- Graphics pass 2: soil paths blend into grass with ragged edges; dense per-region ground details (tufts, flowers, pebbles, leaves, reeds, shells, snow) and clustered props (bushes, rocks, ferns, corals, stumps) that never block movement; swamp pools with reflections, ripples and shore foam; rounded, fuller broadleaf canopies; a soft rim light on characters; tamer snow exposure; grass blades no longer render black from one side.
- Presentation: boss entrances (fall and slam, rise from ground or water, gather and burst) with a camera pull-in; per-region color grading and distant haze in HD; a flying spirit spear for the Lancer's spear beam.
- Difficulty: Easy (monster HP 75%, damage taken 55%) / Normal / Hard (HP 135%, damage taken 145%, EXP 125%, gear drops 140%). Pick it on the title screen (pad Y) or change it any time under Menu → Screen; it is stored per save. Three Hard achievements (43 in total with the daily-goal one).
- Short in-engine cutscenes (skippable with Esc / pad B): the first night's arrival, the Gatekeeper after the Dokkaebi King, Haerang after the Dragon King, and the ten shards gathering into a moon before the ending.
- One new kind of quest per region (main quest 46 → 55 steps): chase a thief, search for hidden objects by sound, strike steles/poles in order, escort an NPC through ambushes, and hold a circle for 40 seconds. Old saves continue at the same quest.
- The serif title/banner font is now bundled (subset of Noto Serif KR/JP/SC), so the logo looks the same offline. The game makes no external requests.
- Japanese and Simplified Chinese: every screen, quest, dialogue, story line, item and achievement is translated. Pick a language with the 🌐 button on the title screen or under Menu → Display → Language. Chinese uses a matching pixel font (Fusion Pixel, OFL).
- Fix: in HD, character outfits were washed out to near-white by the cloth normal map; outfit and dye colors now show properly.
- New key art (the four heroes and the Dokkaebi King in the moonlit palace) and regenerated store capsules.
- Accessibility: text and menu size (100/115/130%), a single danger-marker color for all enemy ground circles and charge lines (yellow, sky blue or magenta, for color-vision deficiency) and reduced screen flashes.
- Looks: a new Looks tab in the bag changes appearance only — outfit look, weapon look, 14 dyes (eight unlocked by achievements), 7 hair colors and a toggle for gear colors, saved per class and shown on the title screen too.
- Daily goals: three goals a day picked from what you can currently do (foes, a specific monster, bosses, perfect dodges, combos, gear, night battles, tower floors, bounties). EXP for each, a rare-or-better gear piece for all three. Shown under the quest panel and in Menu → Daily Goals. New achievement for 7 completed days.
- Gamepad / Steam Deck: spatial D-pad focus inside every menu, LB/RB to switch tabs, D-pad right for the world map, and on-screen prompts that switch to A/B/X/Y glyphs while a pad is in use. All menus checked at 1280×800.
- Footsteps per surface (grass, stone, snow, water, wood, sand) and boss entrance sounds (falling whistle, ground rumble, energy gather).
- Demo build (`npm run dist:demo`): the first three regions and bosses, ending with a demo-complete message after the Grim Reaper. Saves carry over to the full game.
- Low-end PCs: quality now steps down automatically when the frame rate drops below 40 (unless you pick it yourself). Medium/Low shadow resolution now actually applies, without a reload.
- Fixes: retrying after dying in a night battle no longer skips the wave and spawns two bosses; flying monsters stuck inside unreachable thickets are moved out so the battle can end.
- Fixes: flickering where the palace stone path meets the bamboo dirt path; Lancer spear-rain and petal rings no longer stay on the ground; quests and bounties that need a certain monster now spawn it far more often (Foxfire 25% → about 65% during Foxfire Beads).
- Balance: Fairy HP 100 → 112, Swordsman power +6%.
- Minimap and world map: a corner map of the current region (walls, water, drums, NPCs, foes, quest stars, your heading). Press V or click it for the full map with every region, cleared marks, the current task and a quest log.
- New Taoist basic-attack sounds (talisman throw, fan throw, hit).
- 24 new quest steps (46 in total), four new Moon Mirror shards (ten in all), new boss weapons and outfits with unique skills, 8 bounties, 4 achievements and 16 codex entries. All new bosses also appear on tower boss floors.
- Longer play: lower gear drop rates, a steeper level curve at high levels, and larger quest targets.
- Old saves continue; if the main quest was finished, it resumes at the new chapter.

## 1.0.0

첫 판매판입니다.

- **이야기:**
  - 달거울이 여섯 조각으로 깨지는 프롤로그로 시작합니다.
  - 지역 보스 다섯을 처음 물리칠 때마다 조각을 되찾습니다.
  - 시련탑 10층 염라대왕을 처음 쓰러뜨리면 에필로그와 크레딧이 나옵니다. 엔딩 뒤에도 계속 플레이할 수 있습니다.
- **직업 넷:** 검객, 도사, 요정, 창술사. 직업마다 기술 셋, 기술마다 파생 갈래 둘이 있고, Ⅱ~Ⅴ단계에서 각인을 고릅니다.
- **여섯 지역:**
  - 지역: 월하궁, 죽림, 설원 폐사찰, 물안개 늪, 불가사리 협곡, 저승 시련탑
  - 보스 여섯: 도깨비 대왕, 천년 구미호, 저승사자, 천년 이무기, 쇠먹는 불가사리, 염라대왕. 보스마다 3단계 패턴이 있습니다.
- **장비:** 직업별 무기 5등급, 옷 5등급, 보스 전용 무기(고유 기술)와 옷, 무작위 옵션 방어구·장신구, 세트가 있습니다.
- **처음 하는 사람을 위한 안내:** 따라 해 보는 튜토리얼과, 처음 겪는 순간에 한 번씩 뜨는 도움말이 있습니다.
- **기록:** 업적 35개, 몬스터 도감, 장비 도감, 누적 통계가 있습니다.
- **편의:**
  - 자동 이동과 자동 사냥(기술 사용 포함)
  - 일시정지 메뉴와 설정(음량, 화질, 화면 흔들림, 데미지 숫자, 도움말, 키 바꾸기)
  - 게임패드와 터치 지원
  - 저장 파일 내보내기·불러오기
- **언어:** 한국어, 영어
- **소리:** 국악 배경음악, 지역 환경음, 효과음을 직접 합성했습니다.
- **데스크톱판:** Windows, Linux, macOS(Electron), 전체 화면(F11)을 지원하고 저장 파일은 사용자 폴더에 남습니다.
- **스크린샷 모드:** F2 화면 글자 숨기기, F3 PNG 저장.
- **균형:** 직업별 위력을 측정해 맞췄습니다(도사 ×1.2, 요정 ×0.92, 검객 삼연 검기 상향, 창술사 파천창·창룡출해 하향). 창술사 전용 효과음을 넣었습니다. 자동 사냥은 원거리 기술을 그 사거리에서 씁니다.

### English

First commercial release.

- Story: a prologue, Moon Mirror shards from five regional bosses, and an ending after King Yeomra on tower floor 10. Play continues afterwards.
- Four classes (Swordsman, Taoist, Fairy, Lancer), three skills each, two branches per skill, and a rune choice at ranks II–V.
- Six regions and six bosses, each boss with three phases.
- Gear: class weapons, outfits, boss weapons with unique skills, random-stat accessories and sets.
- Hands-on tutorial and one-time tips.
- Records: 35 achievements, monster and item codex, lifetime stats.
- Auto-move, auto-hunt, pause menu and settings, rebindable keys, gamepad and touch, save export and import.
- Korean and English.
- Synthesized Korean traditional music, ambience and sound effects.
- Desktop builds via Electron; screenshot mode (F2 hide HUD, F3 save PNG).
- Balance: measured per-class damage and tuned it (Taoist x1.2, Fairy x0.92, Swordsman Triple Wave up, Lancer Heaven Piercer/Rising Dragon down). Dedicated Lancer sound effects. Auto-hunt now uses reach skills from range.
