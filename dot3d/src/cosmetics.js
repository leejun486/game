// 꾸미기 (수익 모델): 능력치는 하나도 없고 겉모습만 바꾸는 꾸밈을 달빛 구슬로 삼
//  - 달빛 구슬: 앱 스토어 결제(billing.js)로 사거나, 업적 하나마다 10개씩 공짜로 모음
//  - 산 꾸밈은 모든 직업이 함께 씀 (game.ext.cos.owned), 무엇을 입을지는 직업마다 따로 (progress[cls].look.head·back·aura)
//  - 머리 장식·등 장식·오라 + 유료 염색·머리색 (looks.js의 DYES·HAIRS에 cost로 섞여 있음)
//  - 사기 전에 입어 볼 수 있음 (game.lookTry → looks.js rigOptions가 잠깐 덧씌움)

// 머리 장식: acc는 리그의 buildAccessory, deco는 buildDeco로 만듦
export const HEADS = [
  { id: 'flowerPin', name: '꽃비녀', cost: 100, deco: 'flowerPin', a: '#ff9ac0', b: '#ffd040' },
  { id: 'passPin', name: '옥비녀', pass: 20, deco: 'flowerPin', a: '#7ad8a0', b: '#f4ecd8' }, // 수련 패스 20칸
  { id: 'jokduri', name: '족두리', cost: 120, acc: 'jokduri' },
  { id: 'mask', name: '도깨비 탈', cost: 140, acc: 'mask' },
  { id: 'horns', name: '도깨비 뿔', cost: 150, acc: 'horns' },
  { id: 'crown', name: '금관', cost: 160, deco: 'crown', a: '#ff4a6a' },
  { id: 'gat', name: '저승 갓', cost: 180, acc: 'gat' },
  { id: 'fox', name: '여우 귀와 꼬리', cost: 200, acc: 'fox' },
];
// 등 장식
export const BACKS = [
  { id: 'scarf', name: '목도리', cost: 80, deco: 'scarf', a: '#c8302c', b: '#f0c040' },
  { id: 'sash', name: '고름 띠', cost: 80, deco: 'sash', a: '#2e4f8f', b: '#e0b040' },
  { id: 'cape', name: '망토', cost: 120, deco: 'cape', a: '#5a1a2a', b: '#e0b040' },
  { id: 'passScarf', name: '수련 목도리', pass: 10, deco: 'scarf', a: '#2a8a9a', b: '#f4ecd8' }, // 수련 패스 10칸
  { id: 'ribbon', name: '선녀 피백', cost: 180, deco: 'ribbon', a: '#e8d0ff', glow: '#3a2a6a' },
  { id: 'wings', name: '학 날개', cost: 280, wings: true },
];
// 오라: 발밑 빛 고리와 떠오르는 빛 알갱이 (petal = 꽃잎처럼 납작하게 흩날림)
export const AURAS = [
  { id: 'moon', name: '달무리', cost: 200, c: '#cfe0ff', c2: '#ffffff' },
  { id: 'wisp', name: '도깨비불', cost: 220, c: '#4ab8ff', c2: '#a0f0ff' },
  { id: 'blossom', name: '벚꽃 바람', cost: 240, c: '#ffa8c8', c2: '#fff0f6', petal: true },
  { id: 'maple', name: '단풍 바람', cost: 240, c: '#ff7a2a', c2: '#ffd040', petal: true },
  { id: 'nether', name: '저승 안개', cost: 260, c: '#9a6aff', c2: '#e0c8ff' },
  { id: 'gold', name: '금빛 기운', cost: 300, c: '#ffd040', c2: '#fff6c0' },
  { id: 'passAura', name: '수련의 기운', pass: 30, c: '#7ad8e0', c2: '#e8fbff' }, // 수련 패스 30칸
];
export const COS_KINDS = { head: HEADS, back: BACKS, aura: AURAS };
const byId = {};
for (const [k, list] of Object.entries(COS_KINDS)) for (const x of list) byId[k + ':' + x.id] = x;
export const cosOf = (kind, id) => byId[kind + ':' + id];

// 업적 하나에 공짜 구슬
export const BEADS_PER_ACH = 10;

export const beads = (g) => g.ext.beads || 0;
export const owns = (g, x) => !!g.ext.cos?.owned?.[x.id];

// 구슬 얻기 (결제·업적)
export function gainBeads(g, n) {
  if (!n) return;
  g.ext.beads = beads(g) + n;
  g.stats.beads = (g.stats.beads || 0) + n;
}

// 업적으로 받을 구슬: 예전 기록은 처음 한 번 몰아서
export function achBeads(g) {
  const n = Object.keys(g.stats?.ach || {}).length;
  const paid = g.ext.achPaid || 0;
  if (n > paid) { gainBeads(g, (n - paid) * BEADS_PER_ACH); g.ext.achPaid = n; return (n - paid) * BEADS_PER_ACH; }
  return 0;
}

// 꾸밈 사기 → '' (성공) 또는 막힌 까닭
export function buyCos(g, x) {
  if (!x?.cost) return '살 수 없는 꾸밈이에요';
  if (owns(g, x)) return '이미 가지고 있어요';
  if (beads(g) < x.cost) return '달빛 구슬이 모자라요';
  g.ext.beads = beads(g) - x.cost;
  ((g.ext.cos ||= {}).owned ||= {})[x.id] = Date.now();
  g.stats.cosBought = (g.stats.cosBought || 0) + 1;
  g.records?.check?.();
  g.save(false);
  return '';
}
