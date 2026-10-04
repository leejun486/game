// 판본: 정식판 / 체험판. 체험판은 빌드할 때 --define:__DEMO__=true (npm run build:demo)
//  체험판: 월하궁·죽림·폐사찰(보스 셋)까지. 저승사자를 물리치면 '체험판 끝' 안내가 나오고,
//  그 세 지역에서는 계속 놀 수 있음. 저장은 정식판과 같은 자리라 그대로 이어서 할 수 있음
/* global __DEMO__ */
export const DEMO = typeof __DEMO__ !== 'undefined' && !!__DEMO__;
// 스토어 페이지 (출시 전에 실제 주소로 바꿀 것)
export const STORE_URL = 'https://store.steampowered.com/';
// 체험판에서 열리지 않는 문 (뒷문 너머부터)
export const DEMO_LOCKED_GATES = new Set(['swamp', 'canyon', 'fortress', 'sea', 'valley', 'snowfield']);
// 체험판 마지막을 알리는 가짜 임무 (퀘스트 창에 표시)
export const DEMO_QUEST = { title: '체험판은 여기까지', type: 'demo', desc: '정식판에서는 <b>물안개 늪</b>부터 여섯 지역과 보스 일곱이 더 기다려요. 이 세 지역은 계속 돌아다닐 수 있어요' };
export const DEMO_END_LINES = [
  '저승사자가 물러가고, 폐사찰 뒷문의 부적이 희미하게 빛난다…',
  '체험판은 여기까지입니다. 끝까지 함께해 주셔서 고맙습니다!',
  '정식판에서는 물안개 늪, 불가사리 협곡, 단풍 산성, 동해 용궁, 청류 계곡, 백설 고원 — 여섯 지역과 보스 일곱이 더 기다립니다.',
  '마음에 드셨다면 스토어 페이지에서 찜하기를 눌러 주세요. 정식판은 이 기록을 그대로 이어서 할 수 있어요.',
];
