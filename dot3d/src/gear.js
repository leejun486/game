// 방어구·장신구: 장갑, 각반, 허리띠, 반지(두 개). 주울 때마다 등급과 옵션이 무작위로 붙음
import { RARITY, PERKS } from './items.js';

export const GEAR_SLOTS = ['gloves', 'legs', 'belt', 'ring1', 'ring2'];
export const SLOT_NAME = { weapon: '무기', outfit: '갑옷', gloves: '장갑', legs: '각반', belt: '허리띠', ring1: '반지', ring2: '반지', ring: '반지' };
export const BAG_MAX = 40;

// 종류별 등급 이름과 색 (장갑·각반·허리띠는 캐릭터 모습에 그 색이 입혀짐)
const BASES = {
  gloves: [['무명 장갑', '#c8bca0'], ['가죽 토시', '#8a5a32'], ['쇠미늘 장갑', '#8a96a4'], ['비단 수갑', '#6a3a9a'], ['용린 장갑', '#c8302c']],
  legs: [['무명 바지', '#b8ae98'], ['가죽 각반', '#7a4e2e'], ['쇠미늘 각반', '#6a7684'], ['비단 바지', '#3a3a8a'], ['용린 각반', '#8a1a1a']],
  belt: [['새끼 띠', '#c8a868'], ['가죽 띠', '#6a4428'], ['은장 띠', '#c8d0d8'], ['옥대', '#3aa87a'], ['금관 요대', '#ffc840']],
  ring: [['구리 가락지', '#c87a4a'], ['은 가락지', '#d8dde4'], ['옥 가락지', '#5ac88a'], ['비취 가락지', '#3ab0a0'], ['금강 가락지', '#ffe080']],
};

// 옵션: 이름, 표시 방법, 등급 1배 기준 값 범위
export const STATS = {
  atk: { name: '공격력', pre: '맹렬한', fmt: (v) => `+${(v * 100).toFixed(1)}%`, lo: 0.02, hi: 0.04 },
  hp: { name: '최대 체력', pre: '튼튼한', fmt: (v) => `+${Math.round(v)}`, lo: 6, hi: 12, lv: true },
  def: { name: '받는 피해', pre: '단단한', fmt: (v) => `-${(v * 100).toFixed(1)}%`, lo: 0.01, hi: 0.02 },
  crit: { name: '치명타 확률', pre: '날카로운', fmt: (v) => `+${(v * 100).toFixed(1)}%`, lo: 0.01, hi: 0.025 },
  critDmg: { name: '치명타 피해', pre: '잔혹한', fmt: (v) => `+${Math.round(v * 100)}%`, lo: 0.05, hi: 0.1 },
  spd: { name: '이동 속도', pre: '날랜', fmt: (v) => `+${(v * 100).toFixed(1)}%`, lo: 0.012, hi: 0.025 },
  cdr: { name: '스킬 재사용', pre: '지혜로운', fmt: (v) => `-${(v * 100).toFixed(1)}%`, lo: 0.01, hi: 0.022 },
  ls: { name: '흡혈', pre: '피에 굶주린', fmt: (v) => `${(v * 100).toFixed(1)}%`, lo: 0.004, hi: 0.01 },
  exp: { name: '경험치', pre: '배움의', fmt: (v) => `+${Math.round(v * 100)}%`, lo: 0.03, hi: 0.06 },
  regen: { name: '초당 체력 회복', pre: '푸른', fmt: (v) => `+${v.toFixed(1)}`, lo: 0.25, hi: 0.6, lv: true },
};
// 합쳐도 넘지 않는 한계
export const CAPS = { def: 0.6, crit: 0.6, cdr: 0.4, spd: 0.4, ls: 0.1 };

// 종류마다 꼭 붙는 기본 옵션과, 무작위 옵션이 뽑히는 목록
const MAIN = { gloves: ['crit'], legs: ['spd', 'hp'], belt: ['hp'], ring: ['atk', 'critDmg', 'cdr', 'ls'] };
const POOL = { gloves: ['atk', 'crit', 'critDmg', 'ls', 'hp'], legs: ['hp', 'def', 'spd', 'regen', 'exp'], belt: ['hp', 'def', 'regen', 'exp', 'atk'], ring: ['atk', 'crit', 'critDmg', 'cdr', 'ls', 'exp', 'regen'] };
const TIER_MUL = [1, 1.4, 1.9, 2.5, 3.2];
const LEGEND_PERKS = ['quake', 'drain', 'execute', 'rage', 'swift', 'soul'];

let uidSeed = Date.now() % 100000;
export const newUid = () => 'g' + (uidSeed++).toString(36) + Math.floor(Math.random() * 1296).toString(36);

const kindOf = (slot) => (slot === 'ring1' || slot === 'ring2' ? 'ring' : slot);
export const slotKind = kindOf;

function rollStat(key, tier, level) {
  const S = STATS[key];
  let v = (S.lo + Math.random() * (S.hi - S.lo)) * TIER_MUL[tier];
  if (S.lv) v *= 1 + level * 0.05;
  return key === 'hp' ? Math.round(v) : +v.toFixed(4);
}

// 새 장비 한 개. kind: gloves|legs|belt|ring (없으면 무작위), tier 0~4
export function makeGear(level, tier, kind) {
  kind = kind || ['gloves', 'legs', 'belt', 'ring', 'ring'][Math.floor(Math.random() * 5)];
  const stats = {};
  const main = MAIN[kind][Math.floor(Math.random() * MAIN[kind].length)];
  stats[main] = rollStat(main, tier, level);
  // 등급이 높을수록 옵션이 많음 (일반 1개 ~ 전설 4개 + 고유 효과)
  const extra = Math.min(tier, 3);
  const pool = POOL[kind].filter((k) => k !== main);
  for (let i = 0; i < extra && pool.length; i++) {
    const k = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    stats[k] = rollStat(k, tier, level);
  }
  const g = { uid: newUid(), kind, tier, lv: level, stats };
  if (tier >= 4) g.perk = LEGEND_PERKS[Math.floor(Math.random() * LEGEND_PERKS.length)];
  // 이름: 가장 센 무작위 옵션의 접두어 + 종류 이름
  const pre = Object.keys(stats).filter((k) => k !== main)[0] || main;
  g.name = `${STATS[pre].pre} ${BASES[kind][tier][0]}`;
  return g;
}

// 드롭 등급 굴림 (적 종류·회차가 높을수록 좋은 등급)
export function rollGearTier(strong, round) {
  const r = Math.random() + round * 0.1 + strong;
  return r > 1.45 ? 4 : r > 1.15 ? 3 : r > 0.82 ? 2 : r > 0.5 ? 1 : 0;
}

export const gearColor = (g) => (g.set ? SETS[g.set].color : BASES[g.kind][g.tier][1]);

// 장착한 장비 옵션 합계 (한계 적용)
export function sumStats(list) {
  const t = {};
  for (const g of list) if (g) for (const [k, v] of Object.entries(g.stats)) t[k] = (t[k] || 0) + v;
  for (const [k, v] of Object.entries(setBonuses(list).stats)) t[k] = (t[k] || 0) + v;
  for (const [k, c] of Object.entries(CAPS)) if (t[k] > c) t[k] = c;
  return t;
}

// 대충의 장비 점수 (더 좋은 장비 표시용)
export function gearScore(g) {
  if (!g) return 0;
  const w = { atk: 260, hp: 0.8, def: 300, crit: 240, critDmg: 70, spd: 160, cdr: 260, ls: 900, exp: 40, regen: 12 };
  let s = 0;
  for (const [k, v] of Object.entries(g.stats)) s += v * (w[k] || 1);
  return s + (g.perk ? 20 : 0) + (g.set ? 12 : 0);
}

export function gearLines(g) {
  const out = Object.entries(g.stats).map(([k, v]) => `${STATS[k].name} ${STATS[k].fmt(v)}`);
  if (g.perk) out.push(`<em>${PERKS[g.perk]}</em>`);
  return out;
}

// 분해하면 얻는 경험치
export const salvageExp = (g) => 8 + g.tier * g.tier * 10 + g.lv * 2;

// 16x16 도트 아이콘
export function drawGearIcon(cv, g) {
  const c = cv.getContext('2d');
  c.clearRect(0, 0, 16, 16);
  const rc = (g.set ? SET_RARITY : RARITY[g.tier]).color, col = gearColor(g);
  c.fillStyle = '#14101c'; c.fillRect(0, 0, 16, 16);
  c.globalAlpha = 0.25; c.fillStyle = rc; c.fillRect(0, 0, 16, 16); c.globalAlpha = 1;
  const px = (x, y, w, h, k) => { c.fillStyle = k; c.fillRect(x, y, w, h); };
  if (g.kind === 'gloves') {
    px(4, 4, 7, 7, col); px(4, 2, 2, 3, col); px(6, 1, 2, 4, col); px(8, 1, 2, 4, col); px(10, 3, 2, 3, col); px(11, 6, 2, 3, col);
    px(4, 11, 7, 3, '#2a2028'); px(4, 11, 7, 1, rc);
  } else if (g.kind === 'legs') {
    px(4, 2, 8, 3, col); px(4, 5, 3, 8, col); px(9, 5, 3, 8, col); px(3, 12, 4, 2, '#2a2028'); px(9, 12, 4, 2, '#2a2028'); px(4, 2, 8, 1, rc);
  } else if (g.kind === 'belt') {
    px(1, 6, 14, 4, col); px(6, 5, 4, 6, '#ffd040'); px(7, 6, 2, 4, '#2a2028'); px(1, 6, 14, 1, rc);
  } else {
    for (let a = 0; a < 16; a++) { const t = (a / 16) * Math.PI * 2; px(Math.round(8 + Math.cos(t) * 4), Math.round(9 + Math.sin(t) * 4), 1, 1, '#ffd890'); }
    px(6, 2, 4, 4, col); px(7, 3, 1, 1, '#ffffff');
  }
  if (g.perk) { px(1, 1, 1, 1, '#ffffff'); px(14, 14, 1, 1, '#ffffff'); }
  if (g.set) { px(12, 1, 3, 3, '#5aff9a'); px(13, 2, 1, 1, '#14101c'); }
  c.strokeStyle = rc; c.strokeRect(0.5, 0.5, 15, 15);
}

// ================= 세트 아이템 =================
// 부위 네 개(장갑·각반·허리띠·반지). 2개·4개를 함께 끼면 세트 효과
export const SET_RARITY = { name: '세트', color: '#5aff9a' };
export const SETS = {
  dokkaebi: {
    name: '도깨비 대왕의 차림', from: ['blue', 'red', 'wisp', 'boss'], color: '#c8302c',
    pieces: { gloves: '대왕의 손아귀', legs: '호피 각반', belt: '방망이 허리띠', ring: '도깨비불 반지' },
    b2: { stats: { atk: 0.1 }, text: '공격력 +10%' },
    b4: { stats: { critDmg: 0.3 }, perks: ['quake'], text: '치명타 피해 +30%, 도깨비 벼락 (맞힐 때 20% 확률로 주변에 벼락)' },
  },
  fox: {
    name: '구미호의 홀림', from: ['fox', 'foxfire', 'gumiho'], color: '#ff8a3a',
    pieces: { gloves: '여우털 장갑', legs: '구미 각반', belt: '아홉 꼬리 띠', ring: '여우구슬 반지' },
    b2: { stats: { spd: 0.08, crit: 0.05 }, text: '이동 속도 +8%, 치명타 확률 +5%' },
    b4: { stats: { cdr: 0.1 }, perks: ['drain'], text: '스킬 재사용 -10%, 여우구슬 (준 피해의 6% 회복)' },
  },
  reaper: {
    name: '저승사자의 명부', from: ['jiangshi', 'ghost', 'reaper'], color: '#8a5ad8',
    pieces: { gloves: '저승 수갑', legs: '망자의 각반', belt: '명부 허리띠', ring: '혼불 반지' },
    b2: { stats: { def: 0.08 }, text: '받는 피해 -8%' },
    b4: { stats: {}, perks: ['soul', 'execute'], text: '혼 거두기 (처치 시 체력 4% 회복) + 저승 심판 (체력 35% 아래 적에게 피해 +60%)' },
  },
  tomb: {
    name: '왕릉의 부장품', from: ['tombsoldier', 'muinseok', 'gungnyeo', 'eodum'], color: '#9a7ad8',
    pieces: { gloves: '무인석 손목대', legs: '순장 병사의 각반', belt: '옥 노리개 띠', ring: '그믐 구슬 가락지' },
    b2: { stats: { def: 0.06, hp: 40 }, text: '받는 피해 -6%, 최대 체력 +40' },
    b4: { stats: { critDmg: 0.25 }, perks: ['shadow'], text: '치명타 피해 +25%, 그림자 베기 (체력 70% 넘는 적에게 피해 +30%)' },
  },
  market: {
    name: '밤장터의 판돈', from: ['imp', 'gambler', 'tanuki', 'dokgak'], color: '#f0c040',
    pieces: { gloves: '노름꾼 토시', legs: '외다리 각반', belt: '엽전 꿰미 띠', ring: '도깨비 감투 가락지' },
    b2: { stats: { crit: 0.06, spd: 0.05 }, text: '치명타 확률 +6%, 이동 속도 +5%' },
    b4: { stats: { atk: 0.12 }, perks: ['jackpot'], text: '공격력 +12%, 대박 (맞힐 때 8% 확률로 피해 3배)' },
  },
  tidal: {
    name: '갯마을 해녀의 물옷', from: ['fiddler', 'fishman', 'mudghost', 'jangsan'], color: '#6ac8e8',
    pieces: { gloves: '농게 집게 토시', legs: '갯벌 각반', belt: '테왁 끈 띠', ring: '인면어 비늘 가락지' },
    b2: { stats: { regen: 3, hp: 50 }, text: '초당 체력 회복 +3, 최대 체력 +50' },
    b4: { stats: { def: 0.08 }, perks: ['whitefur'], text: '받는 피해 -8%, 흰 털옷 (받는 피해 -8%, 느려지지 않음)' },
  },
  sky: {
    name: '선계 천둥 장수의 차림', from: ['thunderkid', 'crane', 'shadowfairy', 'noegong'], color: '#8ac8ff',
    pieces: { gloves: '천둥 북채 토시', legs: '구름 각반', belt: '학 깃털 띠', ring: '벼락 구슬 가락지' },
    b2: { stats: { cdr: 0.08, atk: 0.06 }, text: '스킬 재사용 -8%, 공격력 +6%' },
    b4: { stats: { crit: 0.08 }, perks: ['thunderclap'], text: '치명타 확률 +8%, 천둥 (맞힐 때 15% 확률로 벼락)' },
  },
  moon: {
    name: '월하 선인의 유품', from: ['boss', 'gumiho', 'reaper'], color: '#bfe8ff',
    pieces: { gloves: '월광 장갑', legs: '선인의 바지', belt: '은하 띠', ring: '달빛 가락지' },
    b2: { stats: { exp: 0.15, regen: 2 }, text: '경험치 +15%, 초당 체력 회복 +2' },
    b4: { stats: { cdr: 0.15, atk: 0.15 }, text: '스킬 재사용 -15%, 공격력 +15%' },
  },
};

export const rarityOf = (g) => (g.set ? SET_RARITY : RARITY[g.tier]);

// 세트 조각 하나 (영웅 등급 옵션 + 세트 이름·색)
export function makeSetPiece(setId, level, kind) {
  const S = SETS[setId];
  kind = kind || ['gloves', 'legs', 'belt', 'ring'][Math.floor(Math.random() * 4)];
  const g = makeGear(level, 3, kind);
  delete g.perk;
  g.set = setId;
  g.name = S.pieces[kind];
  return g;
}

// 이 적이 떨어뜨릴 수 있는 세트 (없으면 null)
export function setFor(enemyType) {
  const ids = Object.keys(SETS).filter((k) => SETS[k].from.includes(enemyType));
  return ids.length ? ids[Math.floor(Math.random() * ids.length)] : null;
}

// 착용 목록의 세트 개수와 켜진 효과
export function setBonuses(list) {
  const cnt = {};
  for (const g of list) if (g?.set) cnt[g.set] = (cnt[g.set] || 0) + 1;
  const stats = {}, perks = [], active = [];
  for (const [id, n] of Object.entries(cnt)) {
    const S = SETS[id];
    for (const [need, B] of [[2, S.b2], [4, S.b4]]) {
      if (n < need) continue;
      for (const [k, v] of Object.entries(B.stats)) stats[k] = (stats[k] || 0) + v;
      if (B.perks) perks.push(...B.perks);
    }
    active.push({ id, n });
  }
  return { stats, perks, active, cnt };
}
