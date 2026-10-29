'use strict';
// 이클립스 서바이버: 이클립스 어웨이크닝의 그림(LPC·도트 캐릭터, 요괴, 스킬 아이콘, 배경음악)으로 만든 뱀서류 생존 게임.
(() => {
// ---------------------------------------------------------------- helpers
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const rand = (a, b) => a + Math.random() * (b - a);
const randi = (a, b) => Math.floor(rand(a, b + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const TAU = Math.PI * 2;
const fmtTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const fmt = (n) => Math.floor(n).toLocaleString('ko-KR');
function hash(x, y, s) {
  let h = (x * 374761393 + y * 668265263 + s * 1442695041) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const $ = (id) => document.getElementById(id);

// the repo serves this page from /survivors/ next to the original game's assets; the published artifact carries them alongside
const BASE = /\/survivors\//.test(location.pathname) ? '../' : '';
const ICON = (n) => `${BASE}assets/icons/${n}.svg`;

// ---------------------------------------------------------------- data
// sheet layout (LPC): walk rows 8..11 = up, left, down, right. F = cell size, foot = px from cell bottom to the feet
// atk = the hero's own attack motion: first LPC row, frame count, seconds per frame, frame the blow lands / the shot leaves.
// hero sheets also carry diagonal rows 21-40 (row 21 + floor(row/4)*4 + diag)
const SHEETS = {
  knight_px: { F: 96, foot: 8, walk: 6, hero: 1.25, diag: true, atk: { row: 12, frames: 6, ft: 0.055, hit: 3 } },
  mage_px: { F: 96, foot: 8, walk: 8, hero: 1.05, diag: true, atk: { row: 4, frames: 8, ft: 0.05, hit: 4 } },
  elf_px: { F: 64, foot: 5, walk: 8, hero: 1.15, diag: true, atk: { row: 16, frames: 13, ft: 0.03, hit: 9 } },
};
const sheetInfo = (s) => SHEETS[s] || { F: 64, foot: 3, walk: 8 };
const FOE_ATK = { row: 12, frames: 6, ft: 0.075, hit: 3 }; // LPC slash: every foe sheet swings a club or claws
// 0 up, 1 left, 2 down, 3 right
const dir4 = (x, y) => (Math.abs(x) > Math.abs(y) ? (x < 0 ? 1 : 3) : (y < 0 ? 0 : 2));
// 0 up-left, 1 down-left, 2 down-right, 3 up-right, -1 when the heading is close to a cardinal direction
function diag4(x, y) {
  const ax = Math.abs(x), ay = Math.abs(y);
  if (ax < 0.45 * ay || ay < 0.45 * ax) return -1;
  return x < 0 ? (y < 0 ? 0 : 1) : (y < 0 ? 3 : 2);
}

const HEROES = [
  { id: 'knight', name: '강철 기사', sheet: 'knight_px', weapon: 'sword', hp: 130, spd: 1, armor: 1, might: 0, area: 0, cd: 0,
    desc: '붉은 갑주의 검객. 단단한 몸으로 요괴 떼 한가운데를 가른다.', perk: '방어 +1 · 체력 130' },
  { id: 'elf', name: '숲의 궁수', sheet: 'elf_px', weapon: 'arrow', hp: 100, spd: 1.14, armor: 0, might: 0, area: 0, cd: 0,
    desc: '바람처럼 달리며 먼 곳의 요괴부터 꿰뚫는다.', perk: '이동 속도 +14%' },
  { id: 'mage', name: '여우 도사', sheet: 'mage_px', weapon: 'foxfire', hp: 90, spd: 1, armor: 0, might: 0.05, area: 0.15, cd: 0.05,
    desc: '여우 탈을 쓴 도사. 여우불과 부적으로 넓게 태운다.', perk: '범위 +15% · 재사용 -5% · 공격 +5%' },
];

const WEAPONS = {
  sword: { name: '검기', icon: 'sk_k_charge', evoName: '천검 일섬', evoIcon: 'sk_k_doom', pair: 'might',
    desc: ['바라보는 쪽으로 검기를 날린다.', '피해 +2', '뒤쪽으로도 한 번 더 벤다.', '피해 +3, 범위 +10%', '재사용 -8%', '피해 +4, 범위 +10%', '피해 +4', '피해 +5, 범위 +10%'],
    evoDesc: '주위를 한 바퀴 베는 거대한 검기. 피해 1.6배.' },
  arrow: { name: '신궁', icon: 'sk_e_triple', evoName: '화살비', evoIcon: 'sk_e_rain', pair: 'amount',
    desc: ['가장 가까운 요괴에게 화살을 쏜다.', '피해 +1, 관통 +1', '화살 +1', '재사용 -8%', '피해 +2, 관통 +1', '화살 +1', '피해 +2', '피해 +3, 관통 +2'],
    evoDesc: '하늘에서 화살비가 쏟아지고 화살이 모든 적을 관통한다.' },
  foxfire: { name: '여우불', icon: 'sk_m_fire', evoName: '구미호의 불꽃', evoIcon: 'sk_m_inferno', pair: 'wisdom',
    desc: ['적을 쫓아가 터지는 도깨비불을 날린다.', '피해 +2', '불꽃 +1', '폭발 범위 +15%', '피해 +3', '불꽃 +1', '재사용 -10%', '피해 +5, 폭발 범위 +15%'],
    evoDesc: '아홉 갈래 여우불이 터진 자리에 불바다를 남긴다.' },
  talisman: { name: '수호 부적', icon: 'scroll-town', evoName: '일월 부적', evoIcon: 'sk_e_starfall', pair: 'area',
    desc: ['몸 주위를 도는 부적이 닿는 요괴를 태운다.', '부적 +1', '피해 +2, 지속 +0.5초', '부적 +1', '회전 속도 +20%', '부적 +1', '피해 +3, 범위 +15%', '부적 +1'],
    evoDesc: '해와 달 부적이 쉬지 않고 돈다. 크기와 피해 증가.' },
  lightning: { name: '뇌전', icon: 'sk_m_chain', evoName: '뇌신의 심판', evoIcon: 'sk_k_judge', pair: 'magnet',
    desc: ['화면 안의 요괴에게 벼락을 내린다.', '벼락 +1', '피해 +4', '벼락 +1', '범위 +20%', '벼락 +1', '피해 +6', '벼락 +1, 재사용 -10%'],
    evoDesc: '벼락이 주변 요괴 네 마리에게 연쇄로 튄다.' },
  frost: { name: '서리 결계', icon: 'sk_m_blizzard', evoName: '동장군의 숨결', evoIcon: 'sk_e_frost', pair: 'armor',
    desc: ['주위에 서리 결계를 펼쳐 피해를 주고 느리게 한다.', '범위 +12%', '피해 +1', '범위 +12%', '피해 +2', '범위 +12%', '피해 +2, 둔화 강화', '범위 +15%'],
    evoDesc: '결계가 크게 넓어지고 요괴를 얼려 붙잡는다.' },
  whirl: { name: '회오리 륜', icon: 'sk_e_wind', evoName: '태풍 륜', evoIcon: 'sk_e_energy', pair: 'haste',
    desc: ['날아갔다 돌아오는 칼날 륜을 던진다.', '피해 +2', '륜 +1', '크기 +15%', '피해 +3', '륜 +1', '재사용 -10%', '피해 +5'],
    evoDesc: '거대한 태풍 륜이 더 멀리, 더 많이 날아간다.' },
  meteor: { name: '유성', icon: 'sk_m_meteor', evoName: '일식 유성우', evoIcon: 'sk_m_eclipse', pair: 'growth',
    desc: ['요괴 무리 위로 유성을 떨어뜨린다.', '유성 +1', '피해 +6', '범위 +15%', '유성 +1', '피해 +8', '재사용 -10%', '유성 +1, 피해 +10'],
    evoDesc: '검은 해에서 유성우가 쏟아지고 땅을 불태운다.' },
  quake: { name: '대지 분쇄', icon: 'sk_k_quake', evoName: '천지개벽', evoIcon: 'sk_k_avatar', pair: 'vigor',
    desc: ['땅을 내리쳐 주위로 충격파를 퍼뜨리고 요괴를 잠시 기절시킨다.', '피해 +2', '범위 +15%', '피해 +4', '기절 +0.2초', '재사용 -12%', '범위 +15%', '피해 +6'],
    evoDesc: '충격파가 세 번 연달아 퍼지며 땅이 갈라진다.' },
  phoenix: { name: '불사조', icon: 'sk_e_phoenix', evoName: '주작 강림', evoIcon: 'wings', pair: 'crit',
    desc: ['불사조가 화면을 가로지르며 지나간 길을 불태운다.', '피해 +2', '피해 +4', '불사조 +1', '불길 지속 +40%', '피해 +4', '재사용 -10%', '불사조 +1, 피해 +6'],
    evoDesc: '거대한 주작이 사방에서 날아들고 불길이 오래 남는다.' },
  frozenorb: { name: '빙결 구슬', icon: 'frozen-orb', evoName: '설한 구슬', evoIcon: 'icebolt', pair: 'dur',
    desc: ['천천히 굴러가며 사방으로 얼음 조각을 뿜는 구슬을 던진다.', '조각 피해 +1', '구슬 지속 +0.5초', '조각 피해 +1', '재사용 -10%', '조각 피해 +2', '구슬 +1', '조각 피해 +2, 마지막 폭발 강화'],
    evoDesc: '두 줄기 나선으로 얼음을 뿜고 맞은 요괴를 얼린다.' },
  flysword: { name: '비검', icon: 'sword2', evoName: '만검귀종', evoIcon: 'sword3', pair: 'velocity',
    desc: ['등 뒤에 떠오른 검이 요괴를 향해 날아가 꿰뚫는다.', '검 +1', '피해 +2', '검 +1', '관통 +2', '검 +1', '피해 +3', '검 +1'],
    evoDesc: '하늘을 덮는 검이 두 번씩 쏟아지며 모든 적을 꿰뚫는다.' },
  poison: { name: '독무', icon: 'sk_e_spirit', evoName: '역병의 늪', evoIcon: 'skull', pair: 'area',
    desc: ['독 호리병을 던져 독안개를 피운다. 안개 속 요괴는 느려진다.', '피해 +1', '호리병 +1', '범위 +15%', '피해 +2', '호리병 +1', '지속 +1초', '피해 +3, 범위 +15%'],
    evoDesc: '독안개가 늪이 되어 넓게 퍼지고 훨씬 오래 남는다.' },
  holy: { name: '천벌', icon: 'holy', evoName: '천제의 심판', evoIcon: 'transcend', pair: 'wisdom',
    desc: ['요괴가 가장 몰린 곳에 하늘의 빛기둥을 내린다.', '피해 +6', '범위 +15%', '빛기둥 +1', '피해 +8', '기절 +0.4초', '빛기둥 +1', '피해 +10, 재사용 -10%'],
    evoDesc: '빛기둥 주위로 작은 빛이 연달아 내리꽂히고 체력을 회복한다.' },
};
const W_MAX = 8;

const PASSIVES = {
  might: { name: '힘의 탕약', icon: 'pot-red', desc: '공격력 +10%', max: 5 },
  haste: { name: '바람의 탕약', icon: 'pot-wind', desc: '이동 속도 +10%', max: 5 },
  vigor: { name: '생명의 탕약', icon: 'pot-life', desc: '최대 체력 +20%, 초당 회복 +0.3', max: 5 },
  wisdom: { name: '지혜의 탕약', icon: 'pot-wise', desc: '재사용 대기 -8%', max: 5 },
  magnet: { name: '흡혼 구슬', icon: 'pot-blue', desc: '줍는 거리 +35%', max: 5 },
  area: { name: '확산의 탕약', icon: 'pot-purple', desc: '공격 범위 +10%', max: 5 },
  amount: { name: '분신술', icon: 'pot-orange', desc: '투사체 +1', max: 2 },
  armor: { name: '강철 탕약', icon: 'pot-iron', desc: '받는 피해 -1', max: 5 },
  growth: { name: '깨달음의 탕약', icon: 'pot-exp', desc: '얻는 경험치 +8%', max: 5 },
  crit: { name: '용기의 탕약', icon: 'pot-brave', desc: '치명타 확률 +5%', max: 5 },
  dur: { name: '인내의 탕약', icon: 'pot-green', desc: '효과 지속 시간 +12%', max: 5 },
  velocity: { name: '질풍의 탕약', icon: 'pot-mana', desc: '투사체 속도 +12%', max: 5 },
};
const SLOT_W = 7, SLOT_P = 7; // weapon / tonic slots

const META = {
  might: { name: '공격 수련', icon: 'sword', desc: '공격력 +5%', max: 5, cost: 60 },
  vigor: { name: '체력 수련', icon: 'heart-drop', desc: '최대 체력 +20', max: 5, cost: 50 },
  haste: { name: '경공술', icon: 'sprint', desc: '이동 속도 +5%', max: 3, cost: 80 },
  magnet: { name: '흡혼술', icon: 'sparkles', desc: '줍는 거리 +15%', max: 3, cost: 50 },
  growth: { name: '참선', icon: 'spellbook', desc: '경험치 +5%', max: 5, cost: 70 },
  greed: { name: '보부상 인연', icon: 'gold', desc: '엽전 +15%', max: 5, cost: 60 },
  revive: { name: '환생 부적', icon: 'heal', desc: '쓰러지면 한 번 되살아난다', max: 1, cost: 400 },
  luck: { name: '길몽', icon: 'star', desc: '레벨업 선택지 +1', max: 1, cost: 500 },
  reroll: { name: '점괘', icon: 'hourglass', desc: '판마다 다시 뽑기 +1', max: 3, cost: 80 },
  banish: { name: '봉인술', icon: 'scroll-armor', desc: '판마다 봉인 +1', max: 2, cost: 90 },
};

// foes: hp/spd/dmg at minute 0; hp scales with time. tint = rgba glaze laid over the sprite
const FOES = {
  imp: { name: '꼬마 도깨비', sheet: 'dokkaebi_small', hp: 7, spd: 40, dmg: 5, xp: 1, r: 11, s: 0.85 },
  wolf: { name: '승냥이 요괴', sheet: 'wolfman', hp: 11, spd: 66, dmg: 6, xp: 1, r: 12, s: 1 },
  gangsi: { name: '굶주린 강시', sheet: 'gangsi', hp: 26, spd: 34, dmg: 8, xp: 2, r: 12, s: 1 },
  skel: { name: '백골 귀병', sheet: 'skeleton', hp: 34, spd: 50, dmg: 9, xp: 2, r: 12, s: 1 },
  boar: { name: '멧돼지 요괴', sheet: 'boarman', hp: 50, spd: 56, dmg: 11, xp: 3, r: 13, s: 1.05, charge: true },
  caster: { name: '도깨비불 꼬마', sheet: 'dokkaebi_small', tint: 'rgba(255,90,40,0.35)', hp: 16, spd: 46, dmg: 9, xp: 2, r: 11, s: 0.9, ranged: 'fire' },
  voidcaster: { name: '어둠 술사', sheet: 'skeleton', tint: 'rgba(110,40,200,0.55)', hp: 120, spd: 50, dmg: 15, xp: 5, r: 12, s: 1.05, ranged: 'void' },
  dok: { name: '도깨비 장수', sheet: 'dokkaebi', hp: 75, spd: 48, dmg: 12, xp: 3, r: 13, s: 1.05 },
  liz: { name: '이무기 수졸', sheet: 'lizardman', hp: 95, spd: 58, dmg: 14, xp: 4, r: 13, s: 1.05 },
  big: { name: '산도깨비', sheet: 'dokkaebi_big', hp: 230, spd: 40, dmg: 18, xp: 8, r: 18, s: 1.35 },
  frostwolf: { name: '설원 승냥이', sheet: 'wolfman', tint: 'rgba(120,190,255,0.5)', hp: 70, spd: 78, dmg: 13, xp: 3, r: 12, s: 1.05, charge: true },
  wraith: { name: '어둠에 삼켜진 원귀', sheet: 'zombie', tint: 'rgba(130,90,255,0.45)', hp: 170, spd: 44, dmg: 16, xp: 5, r: 13, s: 1.15 },
  voidskel: { name: '그림자 귀병', sheet: 'skeleton', tint: 'rgba(70,30,140,0.6)', hp: 140, spd: 60, dmg: 16, xp: 5, r: 13, s: 1.1 },
  boss1: { name: '저승차사 강림', sheet: 'jeoseung', hp: 2600, spd: 56, dmg: 22, xp: 80, r: 24, s: 1.9, boss: 'dash' },
  boss2: { name: '우두귀왕', sheet: 'minotaur', hp: 9000, spd: 50, dmg: 30, xp: 150, r: 28, s: 2.2, boss: 'stomp' },
  boss3: { name: '어둠의 군주 어둑시니', sheet: 'vampire', tint: 'rgba(90,40,200,0.5)', hp: 30000, spd: 54, dmg: 36, xp: 0, r: 30, s: 2.5, boss: 'nova', final: true },
};
const WAVES = [
  [0, ['imp']], [1, ['imp', 'wolf', 'imp']], [2, ['wolf', 'gangsi', 'caster']], [3, ['gangsi', 'skel', 'caster']], [4, ['skel', 'boar', 'caster']],
  [5, ['skel', 'boar', 'gangsi', 'caster']], [6, ['boar', 'dok', 'caster']], [7, ['dok', 'liz', 'boar']], [8, ['liz', 'frostwolf', 'caster']],
  [9, ['liz', 'big', 'dok', 'frostwolf']], [10, ['wraith', 'big', 'voidcaster']], [11, ['wraith', 'voidskel', 'frostwolf', 'voidcaster']],
  [12, ['voidskel', 'big', 'liz', 'voidcaster']], [13, ['wraith', 'voidskel', 'big', 'frostwolf']], [14, ['voidskel', 'big', 'frostwolf', 'wraith', 'voidcaster']],
];
// 혈월: a blood moon rises between the bosses; the horde rages for a while and pays out more
const BLOOD_MOONS = [150, 450, 750];
const BLOOD_LEN = 25;
const CAST = { row: 0, frames: 7, ft: 0.09, hit: 5 }; // LPC spellcast
const EVENTS = [
  { t: 90, type: 'swarm', foe: 'wolf', n: 22 },
  { t: 180, type: 'ring', foe: 'gangsi', n: 32 },
  { t: 300, type: 'boss', foe: 'boss1' },
  { t: 400, type: 'swarm', foe: 'boar', n: 30 },
  { t: 480, type: 'ring', foe: 'skel', n: 46 },
  { t: 600, type: 'boss', foe: 'boss2' },
  { t: 690, type: 'swarm', foe: 'frostwolf', n: 40 },
  { t: 780, type: 'ring', foe: 'wraith', n: 54 },
  { t: 900, type: 'boss', foe: 'boss3' },
];
const RUN_LEN = 900;

// ---------------------------------------------------------------- save
const SAVE_KEY = 'eclipse_survivor_v1';
let save = { gold: 0, up: {}, best: null, sound: true, hero: 'knight' };
try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); if (s) save = Object.assign(save, s); } catch (e) { /* storage unavailable: play without saving */ }
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* ignore */ } }
const mlv = (k) => save.up[k] || 0;

// ---------------------------------------------------------------- assets
const IMG = {};
function loadImg(key, src) {
  return new Promise((res) => { const im = new Image(); im.onload = () => { IMG[key] = im; res(); }; im.onerror = () => res(); im.src = src; });
}
const ICONS = {};
function icon(n) { if (!ICONS[n]) { const im = new Image(); im.src = ICON(n); ICONS[n] = im; } return ICONS[n]; }
const VARIANT = {};
// a copy of a sheet glazed with a color (hit flash, elite gold, frost/void tints)
function variant(sheet, rgba) {
  const key = sheet + '|' + rgba;
  if (VARIANT[key]) return VARIANT[key];
  const im = IMG[sheet];
  if (!im) return null;
  const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
  const g = c.getContext('2d');
  g.drawImage(im, 0, 0);
  g.globalCompositeOperation = 'source-atop'; g.fillStyle = rgba; g.fillRect(0, 0, c.width, c.height);
  return (VARIANT[key] = c);
}

// ---------------------------------------------------------------- sound
const SND = (() => {
  let ac = null, master = null, music = null;
  const last = {};
  function init() {
    if (!ac) {
      try { ac = new (window.AudioContext || window.webkitAudioContext)(); master = ac.createGain(); master.gain.value = 0.3; master.connect(ac.destination); } catch (e) { ac = null; }
    }
    if (ac && ac.state === 'suspended') ac.resume();
    if (!music) { music = new Audio(`${BASE}assets/music/cave.mp3`); music.loop = true; music.volume = 0.22; }
  }
  function tone(f, d, type, v, slide, key, gap) {
    if (!ac || !save.sound) return;
    const now = ac.currentTime;
    if (key) { if (last[key] && now - last[key] < gap) return; last[key] = now; }
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f, now);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f * slide), now + d);
    g.gain.setValueAtTime(v, now); g.gain.exponentialRampToValueAtTime(0.0008, now + d);
    o.connect(g); g.connect(master); o.start(now); o.stop(now + d + 0.02);
  }
  let noiseBuf = null;
  function noise(d, v, freq, key, gap) {
    if (!ac || !save.sound) return;
    const now = ac.currentTime;
    if (key) { if (last[key] && now - last[key] < gap) return; last[key] = now; }
    if (!noiseBuf) { noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate); const ch = noiseBuf.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1; }
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noiseBuf; f.type = 'lowpass'; f.frequency.value = freq;
    g.gain.setValueAtTime(v, now); g.gain.exponentialRampToValueAtTime(0.0008, now + d);
    s.connect(f); f.connect(g); g.connect(master); s.start(now); s.stop(now + d);
  }
  let combo = 0, comboT = 0, nextBeat = 0, step = 0;
  // scheduled drum voices for the battle beat
  function kick(at, v) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(120, at); o.frequency.exponentialRampToValueAtTime(42, at + 0.22);
    g.gain.setValueAtTime(v, at); g.gain.exponentialRampToValueAtTime(0.0008, at + 0.3);
    o.connect(g); g.connect(master); o.start(at); o.stop(at + 0.32);
  }
  function taiko(at, v) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(210, at); o.frequency.exponentialRampToValueAtTime(110, at + 0.14);
    g.gain.setValueAtTime(v, at); g.gain.exponentialRampToValueAtTime(0.0008, at + 0.18);
    o.connect(g); g.connect(master); o.start(at); o.stop(at + 0.2);
    hat(at, v * 0.6, 900);
  }
  function hat(at, v, freq = 7000) {
    if (!noiseBuf) { noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate); const ch = noiseBuf.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1; }
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noiseBuf; f.type = freq > 3000 ? 'highpass' : 'lowpass'; f.frequency.value = freq;
    g.gain.setValueAtTime(v, at); g.gain.exponentialRampToValueAtTime(0.0008, at + 0.06);
    s.connect(f); f.connect(g); g.connect(master); s.start(at); s.stop(at + 0.07);
  }
  return {
    init,
    music(on) { if (!music) return; if (on && save.sound) music.play().catch(() => {}); else music.pause(); },
    hit() { tone(rand(160, 220), 0.06, 'square', 0.04, 0.5, 'hit', 0.04); },
    kill() { noise(0.08, 0.06, 900, 'kill', 0.05); },
    gem() {
      const now = performance.now();
      combo = now - comboT < 400 ? Math.min(combo + 1, 24) : 0; comboT = now;
      tone(660 * Math.pow(1.035, combo), 0.07, 'sine', 0.05, 1.3, 'gem', 0.028);
    },
    gold() { tone(1320, 0.08, 'triangle', 0.06, 1.2, 'gold', 0.05); tone(1760, 0.1, 'triangle', 0.04, 1, null); },
    hurt() { tone(120, 0.18, 'sawtooth', 0.09, 0.5, 'hurt', 0.15); },
    slash() { noise(0.12, 0.07, 2600, 'slash', 0.08); tone(900, 0.1, 'sine', 0.025, 0.4, null); },
    twang() { tone(330, 0.12, 'triangle', 0.06, 0.6, 'twang', 0.06); noise(0.06, 0.04, 4000, null); },
    whoosh() { noise(0.25, 0.06, 1200, 'whoosh', 0.1); },
    quake() { tone(48, 0.45, 'sine', 0.16, 0.6, 'quake', 0.15); noise(0.45, 0.12, 280, null); },
    holy() { [1568, 2093, 2637].forEach((f, i) => setTimeout(() => tone(f, 0.35, 'triangle', 0.035, 1, null), i * 40)); noise(0.3, 0.05, 6000, 'holy', 0.1); },
    phoenix() { noise(0.6, 0.07, 2200, 'phoenix', 0.15); tone(520, 0.35, 'sawtooth', 0.025, 1.8, null); },
    ice() { tone(1900, 0.09, 'sine', 0.04, 1.4, 'ice', 0.05); },
    glass() { noise(0.08, 0.07, 7000, 'glass', 0.05); tone(2600, 0.06, 'triangle', 0.03, 0.8, null); },
    dash() { noise(0.16, 0.08, 3000, 'dash', 0.1); },
    cast() { tone(300, 0.2, 'sawtooth', 0.025, 1.8, 'cast', 0.12); },
    horn() { tone(110, 1.1, 'sawtooth', 0.06, 1.02, 'horn', 0.5); tone(165, 1.1, 'sawtooth', 0.04, 1.02, null); },
    heart() { if (!ac || !save.sound) return; const now = ac.currentTime; kick(now, 0.12); kick(now + 0.17, 0.08); },
    drums(I) {
      if (!ac || !save.sound) return;
      const now = ac.currentTime;
      if (nextBeat < now) nextBeat = now + 0.05;
      const spb = 60 / (92 + 64 * Math.min(1, I)) / 2, v = 0.35 + 0.65 * Math.min(1, I); // eighth notes
      while (nextBeat < now + 0.15) {
        const s8 = step % 8;
        if (s8 === 0 || s8 === 4 || (I > 0.55 && (s8 === 3 || s8 === 7))) kick(nextBeat, 0.14 * v);
        if (s8 === 2 || s8 === 6) taiko(nextBeat, 0.06 * v);
        if (I > 0.4 && s8 % 2 === 1) hat(nextBeat, 0.018 * v);
        nextBeat += spb; step++;
      }
    },
    club() { tone(140, 0.08, 'square', 0.03, 0.6, 'club', 0.09); },
    zap() { noise(0.18, 0.09, 5000, 'zap', 0.06); tone(90, 0.2, 'square', 0.05, 0.4, null); },
    boom() { noise(0.35, 0.14, 500, 'boom', 0.08); tone(70, 0.3, 'sine', 0.12, 0.5, null); },
    level() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.18, 'triangle', 0.08, 1, null), i * 70)); },
    chest() { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => setTimeout(() => tone(f, 0.25, 'triangle', 0.08, 1, null), i * 90)); },
    boss() { tone(55, 1.2, 'sawtooth', 0.12, 0.7, null); noise(1, 0.08, 300, null); },
  };
})();

// ---------------------------------------------------------------- canvas
const cv = $('cv'), ctx = cv.getContext('2d');
let SW = 0, SH = 0, DPR = 1, ZOOM = 1, VW = 0, VH = 0;
function resize() {
  DPR = Math.min(2, window.devicePixelRatio || 1);
  SW = window.innerWidth; SH = window.innerHeight;
  cv.width = Math.round(SW * DPR); cv.height = Math.round(SH * DPR);
  ZOOM = clamp(Math.min(SW, SH) / 520, 0.8, 1.7);
  VW = SW / ZOOM; VH = SH / ZOOM;
}
window.addEventListener('resize', resize);
resize();

// ground: a hand-painted night meadow tile, plus props scattered per chunk
let groundPat = null;
function buildGround() {
  const S = 256, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#1c2620'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 70; i++) {
    const x = hash(i, 1, 7) * S, y = hash(i, 2, 7) * S, r = 14 + hash(i, 3, 7) * 40;
    const col = hash(i, 4, 7) < 0.5 ? 'rgba(40,58,44,0.35)' : 'rgba(16,22,20,0.35)';
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) { g.fillStyle = col; g.beginPath(); g.arc(x + ox, y + oy, r, 0, TAU); g.fill(); }
  }
  for (let i = 0; i < 160; i++) {
    const x = hash(i, 5, 9) * S, y = hash(i, 6, 9) * S, h = 2 + hash(i, 7, 9) * 3;
    g.strokeStyle = hash(i, 8, 9) < 0.7 ? 'rgba(78,104,74,0.55)' : 'rgba(110,130,88,0.45)';
    g.lineWidth = 1; g.beginPath(); g.moveTo(x - 1.5, y); g.lineTo(x - 2.5, y - h); g.moveTo(x, y); g.lineTo(x, y - h - 1); g.moveTo(x + 1.5, y); g.lineTo(x + 2.5, y - h); g.stroke();
  }
  for (let i = 0; i < 16; i++) {
    const x = hash(i, 10, 3) * S, y = hash(i, 11, 3) * S;
    g.fillStyle = hash(i, 12, 3) < 0.5 ? 'rgba(220,120,140,0.6)' : 'rgba(230,220,160,0.55)';
    g.fillRect(x, y, 2, 2);
  }
  groundPat = ctx.createPattern(c, 'repeat');
}
const CHUNK = 320;
function drawProp(kind, x, y, r) {
  if (kind === 0) { // stones
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.ellipse(x, y + 3, 10 * r, 4 * r, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#4a4d4f'; ctx.beginPath(); ctx.ellipse(x, y, 9 * r, 6 * r, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#5f6366'; ctx.beginPath(); ctx.ellipse(x - 2 * r, y - 2 * r, 5 * r, 3 * r, 0, 0, TAU); ctx.fill();
  } else if (kind === 1) { // 비석 (grave marker)
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.ellipse(x, y + 2, 12, 4, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#3d3a37'; ctx.fillRect(x - 10, y - 4, 20, 6);
    ctx.fillStyle = '#6b6862'; ctx.fillRect(x - 6, y - 30, 12, 27);
    ctx.fillStyle = '#7d7a73'; ctx.fillRect(x - 8, y - 34, 16, 5);
    ctx.fillStyle = 'rgba(30,28,26,0.8)'; ctx.fillRect(x - 1, y - 26, 2, 16);
  } else if (kind === 2) { // dead tree
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.beginPath(); ctx.ellipse(x, y + 2, 16, 5, 0, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#2b2219'; ctx.lineCap = 'round';
    ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 2, y - 40); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x + 1, y - 26); ctx.lineTo(x - 14, y - 44); ctx.moveTo(x + 2, y - 34); ctx.lineTo(x + 16, y - 52); ctx.moveTo(x + 2, y - 40); ctx.lineTo(x - 2, y - 58); ctx.stroke();
  } else if (kind === 3) { // 석등 (stone lantern) with a faint flame
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.ellipse(x, y + 2, 12, 4, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#56534e'; ctx.fillRect(x - 9, y - 4, 18, 5); ctx.fillRect(x - 3, y - 22, 6, 18);
    ctx.fillStyle = '#6a665f'; ctx.fillRect(x - 8, y - 34, 16, 12);
    ctx.fillStyle = '#ffb35a'; ctx.fillRect(x - 3, y - 31, 6, 6);
    ctx.fillStyle = '#7a766e'; ctx.beginPath(); ctx.moveTo(x - 13, y - 34); ctx.lineTo(x + 13, y - 34); ctx.lineTo(x, y - 44); ctx.fill();
  } else { // reeds
    ctx.strokeStyle = '#4f6a46'; ctx.lineWidth = 1.5;
    for (let i = 0; i < 7; i++) { const dx = (i - 3) * 3; ctx.beginPath(); ctx.moveTo(x + dx, y); ctx.quadraticCurveTo(x + dx * 1.5, y - 12, x + dx * 2.2, y - 18 - (i % 3) * 4); ctx.stroke(); }
  }
}
function propsIn(cx, cy) {
  const out = [], n = Math.floor(hash(cx, cy, 31) * 4);
  for (let i = 0; i < n; i++) {
    const r = hash(cx, cy, 40 + i);
    out.push({ kind: r < 0.35 ? 0 : r < 0.55 ? 4 : r < 0.72 ? 1 : r < 0.88 ? 2 : 3, x: cx * CHUNK + hash(cx, cy, 50 + i) * CHUNK, y: cy * CHUNK + hash(cx, cy, 60 + i) * CHUNK, s: 0.8 + hash(cx, cy, 70 + i) * 0.6 });
  }
  return out;
}

// ---------------------------------------------------------------- run state
let G = null; // current run
let mode = 'loading'; // loading | title | play | levelup | pause | result
const keys = {};
const joy = { on: false, id: null, ox: 0, oy: 0, x: 0, y: 0 };

function newRun(heroId) {
  const hero = HEROES.find((h) => h.id === heroId) || HEROES[0];
  G = {
    hero, t: 0, kills: 0, gold: 0, lvl: 1, xp: 0, next: xpNeed(1), pendingLv: 0,
    p: { x: 0, y: 0, hp: 1, maxhp: 1, dir: 2, diag: -1, face: 1, moving: false, walkT: 0, inv: 0, hurtT: 0, ax: 1, ay: 0, act: null, queue: [], dashT: 0, dashCd: 0, ghostT: 0 },
    weapons: [], passives: {}, S: {},
    foes: [], shots: [], fx: [], gems: [], nums: [], ebul: [], timers: [], zones: [], decals: [],
    spawnAcc: 0, evIdx: 0, eliteNext: 40, boss: null, shake: 0, revive: mlv('revive') > 0, won: false,
    dmgBy: {}, banner: null, gemCount: 0, rerolls: 3 + mlv('reroll'), banishes: 2 + mlv('banish'), banned: new Set(), sealing: false,
    hitstop: 0, zpunch: 0, cam: { x: 0, y: 0 }, warned: {}, edgeWarn: null, blood: 0, bloodIdx: 0,
    combo: 0, comboT: 0, comboBest: 0, comboNext: 100, heartT: 0, flashT: 0,
  };
  addWeapon(hero.weapon);
  recalc(true);
  G.p.hp = G.S.maxhp;
}
function xpNeed(l) { return Math.floor(5 + (l - 1) * 8 + Math.pow(l - 1, 1.75)); }

function recalc(first) {
  const pv = (k) => G.passives[k] || 0, h = G.hero, S = G.S, oldMax = S.maxhp || 0;
  S.might = 1 + 0.1 * pv('might') + 0.05 * mlv('might') + h.might;
  S.area = 1 + 0.1 * pv('area') + h.area;
  S.cd = Math.max(0.35, 0.88 - 0.07 * pv('wisdom') - h.cd);
  S.amount = pv('amount');
  S.speed = 138 * h.spd * (1 + 0.1 * pv('haste') + 0.05 * mlv('haste'));
  S.magnet = 56 * (1 + 0.35 * pv('magnet') + 0.15 * mlv('magnet'));
  S.maxhp = (h.hp + 20 * mlv('vigor')) * (1 + 0.2 * pv('vigor'));
  S.regen = 0.3 * pv('vigor');
  S.armor = pv('armor') + h.armor;
  S.growth = 1 + 0.08 * pv('growth') + 0.05 * mlv('growth');
  S.greed = 1 + 0.15 * mlv('greed');
  S.crit = 0.06 + 0.05 * pv('crit');
  S.dur = 1 + 0.12 * pv('dur');
  S.vel = 1 + 0.12 * pv('velocity');
  if (!first && S.maxhp > oldMax) G.p.hp += S.maxhp - oldMax;
  G.p.maxhp = S.maxhp;
}

// ---------------------------------------------------------------- weapons
function addWeapon(id) { G.weapons.push({ id, lv: 1, cd: 0.3, evo: false, t: 0, on: 0, ang: 0 }); }
const wget = (id) => G.weapons.find((w) => w.id === id);
function wstats(w) {
  const L = w.lv, S = G.S, m = S.might;
  switch (w.id) {
    case 'sword': return { dmg: [12, 14, 14, 17, 17, 21, 25, 30][L - 1] * m * (w.evo ? 1.6 : 1), cd: (L >= 5 ? 1.1 : 1.2) * S.cd * (w.evo ? 0.85 : 1),
      area: S.area * (1 + (L >= 4 ? 0.1 : 0) + (L >= 6 ? 0.1 : 0) + (L >= 8 ? 0.1 : 0)) * (w.evo ? 1.25 : 1), amount: (L >= 3 ? 2 : 1) + S.amount };
    case 'arrow': return { dmg: [9, 10, 10, 10, 12, 12, 14, 17][L - 1] * m, cd: (L >= 4 ? 0.82 : 0.9) * S.cd * (w.evo ? 0.6 : 1),
      amount: 1 + (L >= 3 ? 1 : 0) + (L >= 6 ? 1 : 0) + S.amount + (w.evo ? 2 : 0), pierce: w.evo ? 999 : 1 + (L >= 2 ? 1 : 0) + (L >= 5 ? 1 : 0) + (L >= 8 ? 2 : 0) };
    case 'foxfire': return { dmg: [14, 16, 16, 16, 19, 19, 19, 24][L - 1] * m, cd: (L >= 7 ? 1.45 : 1.6) * S.cd,
      amount: 1 + (L >= 3 ? 1 : 0) + (L >= 6 ? 1 : 0) + S.amount + (w.evo ? 3 : 0), area: S.area * (1 + (L >= 4 ? 0.15 : 0) + (L >= 8 ? 0.15 : 0)) };
    case 'talisman': return { dmg: [8, 8, 10, 10, 10, 10, 13, 13][L - 1] * m * (w.evo ? 1.5 : 1), cd: 3.2 * S.cd, dur: (3.5 + (L >= 3 ? 0.5 : 0)) * S.dur,
      amount: [1, 2, 2, 3, 3, 4, 4, 5][L - 1] + S.amount, area: S.area * (L >= 7 ? 1.15 : 1) * (w.evo ? 1.3 : 1), rot: 3.3 * (L >= 5 ? 1.2 : 1) * (w.evo ? 1.2 : 1) };
    case 'lightning': return { dmg: [20, 20, 24, 24, 24, 24, 30, 30][L - 1] * m, cd: (L >= 8 ? 2.1 : 2.35) * S.cd,
      amount: 1 + (L >= 2 ? 1 : 0) + (L >= 4 ? 1 : 0) + (L >= 6 ? 1 : 0) + (L >= 8 ? 1 : 0) + S.amount, area: S.area * (L >= 5 ? 1.2 : 1) };
    case 'frost': return { dmg: [4, 4, 5, 5, 7, 7, 9, 9][L - 1] * m, tick: w.evo ? 0.4 : 0.55, slow: L >= 7 ? 0.5 : 0.35,
      area: S.area * (1 + 0.12 * ((L >= 2) + (L >= 4) + (L >= 6)) + (L >= 8 ? 0.15 : 0)) * (w.evo ? 1.45 : 1) };
    case 'whirl': return { dmg: [15, 17, 17, 17, 20, 20, 20, 25][L - 1] * m * (w.evo ? 1.4 : 1), cd: (L >= 7 ? 1.35 : 1.5) * S.cd,
      amount: 1 + (L >= 3 ? 1 : 0) + (L >= 6 ? 1 : 0) + S.amount + (w.evo ? 2 : 0), area: S.area * (L >= 4 ? 1.15 : 1) * (w.evo ? 1.6 : 1) };
    case 'meteor': return { dmg: [36, 36, 42, 42, 42, 50, 50, 60][L - 1] * m, cd: (L >= 7 ? 3.1 : 3.4) * S.cd,
      amount: 1 + (L >= 2 ? 1 : 0) + (L >= 5 ? 1 : 0) + (L >= 8 ? 1 : 0) + S.amount + (w.evo ? 3 : 0), area: S.area * (L >= 4 ? 1.15 : 1) * (w.evo ? 1.35 : 1) };
    case 'quake': return { dmg: [16, 18, 18, 22, 22, 22, 22, 28][L - 1] * m * (w.evo ? 1.3 : 1), cd: (L >= 6 ? 2.6 : 3) * S.cd,
      area: S.area * (1 + (L >= 3 ? 0.15 : 0) + (L >= 7 ? 0.15 : 0)) * (w.evo ? 1.25 : 1), stun: L >= 5 ? 0.6 : 0.4, waves: w.evo ? 3 : 1 };
    case 'phoenix': return { dmg: [20, 22, 26, 26, 26, 30, 30, 36][L - 1] * m * (w.evo ? 1.5 : 1), cd: (L >= 7 ? 3.2 : 3.6) * S.cd,
      amount: 1 + (L >= 4 ? 1 : 0) + (L >= 8 ? 1 : 0) + S.amount + (w.evo ? 2 : 0), area: S.area * (w.evo ? 1.6 : 1), burn: (L >= 5 ? 1.4 : 1) * S.dur * (w.evo ? 1.6 : 1) };
    case 'frozenorb': return { dmg: [6, 7, 7, 8, 8, 10, 10, 12][L - 1] * m, cd: (L >= 5 ? 2.9 : 3.2) * S.cd, amount: 1 + (L >= 7 ? 1 : 0) + S.amount,
      life: (2.2 + (L >= 3 ? 0.5 : 0)) * S.dur, arms: w.evo ? 2 : 1, area: S.area, big: L >= 8 };
    case 'flysword': return { dmg: [10, 10, 12, 12, 12, 12, 15, 15][L - 1] * m * (w.evo ? 1.3 : 1), cd: 2.1 * S.cd,
      amount: [1, 2, 2, 3, 3, 4, 4, 5][L - 1] + S.amount + (w.evo ? 3 : 0), pierce: w.evo ? 999 : L >= 5 ? 5 : 3, volleys: w.evo ? 2 : 1 };
    case 'poison': return { dmg: [5, 6, 6, 6, 8, 8, 8, 11][L - 1] * m * (w.evo ? 1.5 : 1), cd: 3 * S.cd, amount: 1 + (L >= 3 ? 1 : 0) + (L >= 6 ? 1 : 0) + S.amount,
      area: S.area * (1 + (L >= 4 ? 0.15 : 0) + (L >= 8 ? 0.15 : 0)) * (w.evo ? 1.5 : 1), dur: (2.6 + (L >= 7 ? 1 : 0)) * S.dur * (w.evo ? 1.8 : 1) };
    case 'holy': return { dmg: [30, 36, 36, 36, 44, 44, 44, 54][L - 1] * m, cd: (L >= 8 ? 3.6 : 4) * S.cd,
      amount: 1 + (L >= 4 ? 1 : 0) + (L >= 7 ? 1 : 0) + S.amount + (w.evo ? 1 : 0), area: S.area * (L >= 3 ? 1.15 : 1) * (w.evo ? 1.2 : 1), stun: L >= 6 ? 1.2 : 0.8 };
  }
  return {};
}
function later(t, fn) { G.timers.push({ t, fn }); }
// the hero's own weapon plays the body's attack motion and lands on its hit frame; borrowed weapons just fire
function act(w, ax, ay, onHit, delay = 0) {
  if (w.id !== G.hero.weapon || !sheetInfo(G.hero.sheet).atk) { later(delay, onHit); return; }
  G.p.queue.push({ ax, ay, onHit });
}
function updateAct(dt) {
  const p = G.p;
  if (!p.act && p.queue.length) {
    const q = p.queue.shift();
    p.act = { t: 0, fired: false, ax: q.ax, ay: q.ay, onHit: q.onHit };
    p.dir = dir4(q.ax, q.ay); p.diag = diag4(q.ax, q.ay);
    if (Math.abs(q.ax) > 0.2) p.face = q.ax < 0 ? -1 : 1;
  }
  const a = p.act;
  if (!a) return;
  const A = sheetInfo(G.hero.sheet).atk;
  a.t += dt * (1 + 0.7 * p.queue.length); // a backlog of swings plays faster instead of piling up
  const f = Math.floor(a.t / A.ft);
  if (!a.fired && f >= A.hit) { a.fired = true; a.onHit(); }
  if (f >= A.frames) p.act = null;
}

function nearestFoes(x, y, n, range = 9999) {
  const arr = [];
  for (const e of G.foes) { const d = (e.x - x) ** 2 + (e.y - y) ** 2; if (d < range * range) arr.push([d, e]); }
  arr.sort((a, b) => a[0] - b[0]);
  return arr.slice(0, n).map((a) => a[1]);
}
function onScreenFoes() {
  const p = G.p, hw = VW / 2 + 20, hh = VH / 2 + 20;
  return G.foes.filter((e) => Math.abs(e.x - p.x) < hw && Math.abs(e.y - p.y) < hh);
}

function fireWeapon(w) {
  const p = G.p, st = wstats(w);
  switch (w.id) {
    case 'sword': {
      const tg = nearestFoes(p.x, p.y, 1, 260)[0];
      const a = tg ? Math.atan2(tg.y - p.y, tg.x - p.x) : Math.atan2(p.ay, p.ax);
      const swing = (dirA, n) => {
        const R = (w.evo ? 128 : 96) * st.area, half = w.evo ? Math.PI : 1.15, side = n % 2 ? -1 : 1;
        G.fx.push({ k: 'swing', a: dirA, R, half, side, t: 0, dur: w.evo ? 0.32 : 0.24, evo: w.evo });
        for (let j = 0; j < 6; j++) { const aa = dirA + rand(-half, half); burst(G.p.x + Math.cos(aa) * R * 0.8, G.p.y - 20 + Math.sin(aa) * R * 0.62, 1, j % 2 ? '#fff0c8' : '#ff8a4a', 160, 2); }
        for (const e of G.foes) {
          const dx = e.x - G.p.x, dy = e.y - G.p.y, d = Math.hypot(dx, dy) || 1;
          if (d > R + e.r) continue;
          let da = Math.atan2(dy, dx) - dirA; while (da > Math.PI) da -= TAU; while (da < -Math.PI) da += TAU;
          if (Math.abs(da) <= half + 0.3 || d < e.r + 16) hurt(e, st.dmg, w.id, (dx / d) * 150, (dy / d) * 150);
        }
        SND.slash();
      };
      // each blow is a full swing of the sword; the second (Lv.3+) turns round and cuts behind
      for (let i = 0; i < (w.evo ? 1 : st.amount); i++) {
        const dirA = a + (i % 2 ? Math.PI : 0) + (i >= 2 ? (i - 1) * 0.5 : 0);
        act(w, Math.cos(dirA), Math.sin(dirA), () => swing(dirA, i), i * 0.16);
      }
      break;
    }
    case 'arrow': {
      const targets = nearestFoes(p.x, p.y, st.amount, 560);
      const lead = targets[0], a0 = lead ? Math.atan2(lead.y - p.y, lead.x - p.x) : Math.atan2(p.ay, p.ax);
      // the bow is drawn toward the nearest foe; every arrow in the volley leaves the string on the release frame
      act(w, Math.cos(a0), Math.sin(a0), () => {
        const P = G.p, ox = P.x + Math.cos(a0) * 16, oy = P.y - 26 + Math.sin(a0) * 6;
        for (let i = 0; i < st.amount; i++) {
          const tg = targets[i];
          let a = tg && !tg.dead ? Math.atan2(tg.y - 18 - oy, tg.x - ox) : a0 + (i - (st.amount - 1) / 2) * 0.16;
          if (tg && i > 0 && Math.abs(a - a0) < 0.05) a += (i % 2 ? 1 : -1) * 0.06;
          shoot({ k: 'arrow', x: ox, y: oy, a, spd: 640 * G.S.vel, dmg: st.dmg, pierce: st.pierce, life: 1.2, r: 6, wid: w.id, kb: 60 });
        }
        G.fx.push({ k: 'twang', x: ox, y: oy, a: a0, t: 0, dur: 0.18 });
        SND.twang();
      });
      if (w.evo) {
        for (let i = 0; i < 6; i++) {
          later(0.1 + i * 0.05, () => {
            const tx = G.p.x + rand(-VW / 2.4, VW / 2.4), ty = G.p.y + rand(-VH / 2.4, VH / 2.4);
            G.fx.push({ k: 'rainArrow', x: tx, y: ty, t: 0, dur: 0.25 });
            later(0.25, () => hitArea(tx, ty, 34 * G.S.area, st.dmg, w.id, 40));
          });
        }
      }
      break;
    }
    case 'foxfire': {
      const pool = nearestFoes(p.x, p.y, 10, 600);
      const lead = pool[0], a0 = lead ? Math.atan2(lead.y - p.y, lead.x - p.x) : Math.atan2(p.ay, p.ax);
      // the staff sweeps toward the foe and the flames peel off its tip, fanning out before they home in
      act(w, Math.cos(a0), Math.sin(a0), () => {
        const P = G.p, tx = P.x + Math.cos(a0) * 22, ty = P.y - 30 + Math.sin(a0) * 8;
        G.fx.push({ k: 'boom', x: tx, y: ty, r: 18, t: 0, dur: 0.2, col: w.evo ? '255,100,190' : '255,150,60' });
        for (let i = 0; i < st.amount; i++) {
          const spread = w.evo ? (i / st.amount) * TAU : (i - (st.amount - 1) / 2) * 0.45;
          shoot({ k: 'fox', x: tx, y: ty, a: a0 + spread, spd: 250 * G.S.vel, dmg: st.dmg, pierce: 1, life: 2.6, r: 8, wid: w.id, kb: 0,
            home: pool.length ? pool[i % pool.length] : null, blast: 48 * st.area, burn: w.evo });
        }
        SND.whoosh();
      });
      break;
    }
    case 'talisman':
      w.on = w.evo ? 1e9 : st.dur;
      break;
    case 'lightning': {
      const pool = shuffle(onScreenFoes()).slice(0, st.amount);
      pool.forEach((e, i) => later(i * 0.07, () => {
        if (e.dead) return;
        bolt(e.x, e.y - 10, st, w.id);
        if (w.evo) {
          let from = e; const seen = new Set([e]);
          for (let j = 0; j < 4; j++) {
            const nx = nearestFoes(from.x, from.y, 6, 150).find((f) => !seen.has(f));
            if (!nx) break;
            seen.add(nx);
            G.fx.push({ k: 'chain', x1: from.x, y1: from.y - 14, x2: nx.x, y2: nx.y - 14, t: 0, dur: 0.18 });
            hurt(nx, st.dmg * 0.7, w.id, 0, 0);
            from = nx;
          }
        }
      }));
      break;
    }
    case 'whirl': {
      const tg = nearestFoes(p.x, p.y, 1, 500)[0];
      const base = tg ? Math.atan2(tg.y - p.y, tg.x - p.x) : Math.atan2(p.ay, p.ax);
      for (let i = 0; i < st.amount; i++) {
        const a = base + (i - (st.amount - 1) / 2) * 0.5;
        shoot({ k: 'whirl', x: p.x, y: p.y - 16, a, spd: 430 * (w.evo ? 1.2 : 1) * G.S.vel, dmg: st.dmg, pierce: 999, life: 2.2, r: 15 * st.area, wid: w.id, kb: 90, back: true, rehit: 0.3, spin: 0 });
      }
      break;
    }
    case 'meteor': {
      const pool = shuffle(onScreenFoes());
      for (let i = 0; i < st.amount; i++) {
        const e = pool[i];
        const tx = e ? e.x : p.x + rand(-VW / 3, VW / 3), ty = e ? e.y : p.y + rand(-VH / 3, VH / 3);
        const R = 62 * st.area;
        later(i * 0.15, () => {
          G.fx.push({ k: 'warn', x: tx, y: ty, r: R, t: 0, dur: 0.6 });
          G.fx.push({ k: 'meteor', x: tx, y: ty, t: 0, dur: 0.6, evo: w.evo });
          later(0.6, () => {
            hitArea(tx, ty, R, st.dmg, w.id, 120);
            G.fx.push({ k: 'boom', x: tx, y: ty, r: R, t: 0, dur: 0.45, col: w.evo ? '170,110,255' : '255,140,50' });
            burst(tx, ty, 18, w.evo ? '#b88cff' : '#ffb04a', 220);
            burst(tx, ty, 14, '#5a4636', 300, 4);
            smoke(tx, ty, 5, R * 0.6); hitstop(0.035);
            G.fx.push({ k: 'ring', x: tx, y: ty, r: R * 1.4, t: 0, dur: 0.35, col: w.evo ? '200,150,255' : '255,200,140' });
            decal('scorch', tx, ty, R * 0.75, 3);
            G.fx.push({ k: 'flash', t: 0, dur: 0.12, col: w.evo ? '180,120,255' : '255,200,140' });
            if (w.evo) G.zones.push({ x: tx, y: ty, r: R * 0.8, t: 0, dur: 2.5 * G.S.dur, dmg: st.dmg * 0.12, tick: 0.3, acc: 0, wid: w.id, col: '150,90,255' });
            G.shake = Math.max(G.shake, 5);
            SND.boom();
          });
        });
      }
      break;
    }
    case 'quake': {
      act(w, p.ax, p.ay, () => {
        for (let k = 0; k < st.waves; k++) later(k * 0.28, () => {
          const P = G.p, R = 120 * st.area * (1 + k * 0.25);
          G.fx.push({ k: 'quake', x: P.x, y: P.y, R, t: 0, dur: 0.45, evo: w.evo });
          decal('crack', P.x, P.y, R * 0.75, 2.2);
          for (const e of G.foes) {
            const dx = e.x - P.x, dy = e.y - P.y, d = Math.hypot(dx, dy) || 1;
            if (d < R + e.r) { hurt(e, st.dmg, w.id, (dx / d) * 220, (dy / d) * 220); if (!e.boss) e.stun = Math.max(e.stun || 0, st.stun); }
          }
          for (let i = 0; i < 18; i++) { const a = Math.random() * TAU, r = rand(0.3, 1) * R; burst(P.x + Math.cos(a) * r, P.y + Math.sin(a) * r * 0.7, 1, pick(['#6b5440', '#8a7058', '#4a3a2c']), 160, 4); }
          G.shake = Math.max(G.shake, 9); hitstop(0.04); smoke(P.x, P.y, 6, R * 0.6);
          SND.quake();
        });
      });
      break;
    }
    case 'phoenix': {
      const tg = nearestFoes(p.x, p.y, 1, 600)[0];
      const base = tg ? Math.atan2(tg.y - p.y, tg.x - p.x) : Math.atan2(p.ay, p.ax);
      for (let i = 0; i < st.amount; i++) later(i * 0.22, () => {
        const P = G.p, a = base + (w.evo ? (i * TAU) / st.amount : (i - (st.amount - 1) / 2) * 0.35);
        const R = Math.hypot(VW, VH) / 2 + 60, spd = 560 * G.S.vel, side = rand(-40, 40);
        shoot({ k: 'phoenix', x: P.x - Math.cos(a) * R - Math.sin(a) * side, y: P.y - 20 - Math.sin(a) * R + Math.cos(a) * side, a, spd, dmg: st.dmg, pierce: 999,
          life: (2 * R) / spd + 0.3, r: 22 * st.area, wid: w.id, kb: 120, burn: st.burn, size: st.area, trailAcc: 0 });
        SND.phoenix();
      });
      break;
    }
    case 'frozenorb': {
      const tgs = nearestFoes(p.x, p.y, 3, 500);
      for (let i = 0; i < st.amount; i++) {
        const tg = tgs[i];
        const a = tg ? Math.atan2(tg.y - p.y, tg.x - p.x) : Math.atan2(p.ay, p.ax) + i * 0.6;
        shoot({ k: 'orb', x: p.x, y: p.y - 22, a, spd: 95 * G.S.vel, dmg: st.dmg, pierce: 999, rehit: 0.5, life: st.life, r: 14 * st.area, wid: w.id, kb: 0,
          emit: 0, ang: Math.random() * TAU, arms: st.arms, big: st.big, evo: w.evo, area: st.area, slow: true });
      }
      SND.ice();
      break;
    }
    case 'flysword': {
      for (let v = 0; v < st.volleys; v++) for (let i = 0; i < st.amount; i++) later(v * 0.45 + i * 0.05, () => {
        const n = st.amount, off = (i - (n - 1) / 2) * Math.min(0.32, 2.4 / n);
        shoot({ k: 'fly', x: G.p.x, y: G.p.y - 30, a: -Math.PI / 2, spd: 0, dmg: st.dmg, pierce: st.pierce, life: 1.6, r: 9, wid: w.id, kb: 70, wait: 0.32, slot: off, idx: i, trail: [] });
        if (i === 0) SND.whoosh();
      });
      break;
    }
    case 'poison': {
      const pool = shuffle(onScreenFoes());
      for (let i = 0; i < st.amount; i++) {
        const e = pool[i];
        const tx = e ? e.x : p.x + rand(-160, 160), ty = e ? e.y : p.y + rand(-120, 120);
        later(i * 0.12, () => shoot({ k: 'flask', x: G.p.x, y: G.p.y - 30, sx: G.p.x, sy: G.p.y - 30, tx, ty: ty - 6, a: 0, spd: 0, lob: true, life: 0.55, dur0: 0.55,
          dmg: st.dmg, pierce: 0, r: 0, wid: w.id, kb: 0, area: st.area, zdur: st.dur, evo: w.evo, spin: 0 }));
      }
      break;
    }
    case 'holy': {
      const cands = shuffle(onScreenFoes()).slice(0, 14);
      const density = new Map(cands.map((e) => [e, nearFoes(e.x, e.y, 70).length]));
      cands.sort((a, b) => density.get(b) - density.get(a));
      for (let i = 0; i < st.amount; i++) {
        const e = cands[i];
        const tx = e ? e.x : p.x + rand(-150, 150), ty = e ? e.y : p.y + rand(-110, 110);
        later(i * 0.2, () => pillar(tx, ty, 62 * st.area, st, w, true));
      }
      break;
    }
  }
}
function pillar(x, y, R, st, w, main) {
  G.fx.push({ k: 'warn', x, y, r: R, t: 0, dur: 0.35, col: '255,225,140' });
  later(0.35, () => {
    G.fx.push({ k: 'pillar', x, y, r: R, t: 0, dur: 0.6 });
    decal('glow', x, y, R, 1.2);
    for (const e of G.foes) {
      const dx = e.x - x, dy = e.y - y;
      if (dx * dx + dy * dy <= (R + e.r) ** 2) { hurt(e, main ? st.dmg : st.dmg * 0.5, w.id, 0, 0); if (!e.boss) e.stun = Math.max(e.stun || 0, st.stun); }
    }
    for (let i = 0; i < 14 && G.fx.length < 700; i++) G.fx.push({ k: 'mote', x: x + rand(-R, R) * 0.8, y: y + rand(-R, R) * 0.5, t: 0, dur: rand(0.6, 1.1) });
    SND.holy();
    if (w.evo && main) {
      G.p.hp = Math.min(G.p.maxhp, G.p.hp + G.p.maxhp * 0.01);
      for (let k = 0; k < 4; k++) { const a = (k / 4) * TAU + Math.random(); later(0.12 * (k + 1), () => pillar(x + Math.cos(a) * R * 1.3, y + Math.sin(a) * R, R * 0.5, st, w, false)); }
    }
  });
}
function decal(k, x, y, r, dur) {
  if (G.decals.length > 150) G.decals.shift();
  G.decals.push({ k, x, y, r, t: 0, dur, seed: Math.floor(Math.random() * 1000) });
}
function bolt(x, y, st, wid) {
  G.fx.push({ k: 'bolt', x, y, t: 0, dur: 0.22, seed: Math.random() * 1000 });
  hitArea(x, y + 10, 30 * st.area, st.dmg, wid, 30);
  burst(x, y + 6, 8, '#bfe3ff', 160);
  decal('scorch', x, y + 10, 20, 1.5);
  G.fx.push({ k: 'ring', x, y: y + 10, r: 46, t: 0, dur: 0.22, col: '170,210,255' });
  if (G.t - G.flashT > 0.18) { G.flashT = G.t; G.fx.push({ k: 'flash', t: 0, dur: 0.08, col: '180,210,255' }); }
  SND.zap();
}
function shoot(o) { o.vx = Math.cos(o.a) * o.spd; o.vy = Math.sin(o.a) * o.spd; o.hit = new Map(); o.t = 0; o.trail = []; G.shots.push(o); }
function hitArea(x, y, R, dmg, wid, kb) {
  for (const e of G.foes) {
    const dx = e.x - x, dy = e.y - 12 - y, rr = R + e.r;
    if (dx * dx + dy * dy <= rr * rr) { const d = Math.hypot(dx, dy) || 1; hurt(e, dmg, wid, (dx / d) * kb, (dy / d) * kb); }
  }
}

function updateWeapons(dt) {
  const p = G.p;
  for (const w of G.weapons) {
    if (w.id === 'frost') {
      const st = wstats(w);
      w.t += dt;
      if (Math.random() < dt * (w.evo ? 26 : 14) && G.fx.length < 700) {
        const a = Math.random() * TAU, r = Math.sqrt(Math.random()) * 52 * st.area;
        G.fx.push({ k: 'snow', x: p.x + Math.cos(a) * r, y: p.y + Math.sin(a) * r * 0.85 - 18, t: 0, dur: 0.9, vx: rand(-12, 12) });
      }
      if (w.t >= st.tick) {
        w.t = 0;
        const R = 52 * st.area;
        for (const e of G.foes) {
          const dx = e.x - p.x, dy = e.y - p.y;
          if (dx * dx + dy * dy <= (R + e.r) ** 2) {
            hurt(e, st.dmg, w.id, 0, 0, true);
            e.slow = Math.max(e.slow, 0.6); e.slowAmt = st.slow;
            if (w.evo && !e.boss && Math.random() < 0.06) e.frozen = 1.2;
          }
        }
      }
      continue;
    }
    if (w.id === 'talisman') {
      const st = wstats(w);
      w.ang += st.rot * dt;
      if (w.on > 0) {
        w.on -= dt;
        const R = 74 * st.area;
        for (let i = 0; i < st.amount; i++) {
          const a = w.ang + (i / st.amount) * TAU, tx = p.x + Math.cos(a) * R, ty = p.y - 16 + Math.sin(a) * R * 0.85;
          for (const e of nearFoes(tx, ty + 12, 40)) {
            const dx = e.x - tx, dy = e.y - 12 - ty, rr = 14 * st.area + e.r;
            if (dx * dx + dy * dy <= rr * rr && (e.tal || 0) <= G.t) { e.tal = G.t + 0.45; hurt(e, st.dmg, w.id, (dx / (Math.hypot(dx, dy) || 1)) * 120, (dy / (Math.hypot(dx, dy) || 1)) * 120); }
          }
        }
        if (w.on <= 0) w.cd = st.cd;
        continue;
      }
    }
    w.cd -= dt;
    if (w.cd <= 0) { const st = wstats(w); w.cd = st.cd; fireWeapon(w); }
  }
}

// ---------------------------------------------------------------- foes
const GRID = 80;
let grid = new Map();
function gkey(cx, cy) { return (cx + 4096) * 8192 + (cy + 4096); }
function buildGrid() {
  grid = new Map();
  for (const e of G.foes) {
    const k = gkey(Math.floor(e.x / GRID), Math.floor(e.y / GRID));
    let b = grid.get(k); if (!b) grid.set(k, (b = [])); b.push(e);
  }
}
function nearFoes(x, y, r) {
  const out = [], x0 = Math.floor((x - r) / GRID), x1 = Math.floor((x + r) / GRID), y0 = Math.floor((y - r) / GRID), y1 = Math.floor((y + r) / GRID);
  for (let cx = x0; cx <= x1; cx++) for (let cy = y0; cy <= y1; cy++) { const b = grid.get(gkey(cx, cy)); if (b) for (const e of b) out.push(e); }
  return out;
}

function spawnFoe(id, x, y, opt = {}) {
  const d = FOES[id], mult = d.boss ? 1 : 1 + G.t / 200;
  const elite = !!opt.elite;
  const e = {
    id, d, x, y, hp: d.hp * mult * (elite ? 14 : 1), maxhp: 0, spd: d.spd * (d.boss ? 1.05 : 1.05 + G.t / 2200) * (elite ? 1.1 : 1) * (opt.spdMul || 1), dmg: d.dmg * (1 + G.t / 600) * (elite ? 1.5 : 1),
    r: d.r * (elite ? 1.35 : 1), s: d.s * (elite ? 1.4 : 1), dir: 2, walkT: Math.random() * 10, flash: 0, kx: 0, ky: 0, slow: 0, slowAmt: 0, frozen: 0,
    elite, boss: !!d.boss, dead: false, vx: opt.vx || 0, vy: opt.vy || 0, rush: opt.rush || 0, skillT: 3, state: '', stT: 0, atk: null, atkCd: Math.random() * 0.5,
    cast: null, chg: '', chgT: 0, chgCd: rand(1, 3),
  };
  e.maxhp = e.hp;
  G.foes.push(e);
  if (e.boss) {
    G.boss = e;
    showBanner(d.name, d.final ? '일식이 완성되었다' : '강대한 기운이 다가온다');
    SND.boss();
    G.zpunch = 0.12; G.shake = 12;
  }
  return e;
}
function edgePoint(pad = 60) {
  const p = G.p, side = Math.floor(Math.random() * 4), hw = VW / 2 + pad, hh = VH / 2 + pad;
  if (side === 0) return { x: p.x + rand(-hw, hw), y: p.y - hh };
  if (side === 1) return { x: p.x + rand(-hw, hw), y: p.y + hh };
  if (side === 2) return { x: p.x - hw, y: p.y + rand(-hh, hh) };
  return { x: p.x + hw, y: p.y + rand(-hh, hh) };
}
function wavePool() {
  const m = Math.floor(G.t / 60);
  let pool = WAVES[0][1];
  for (const [min, pl] of WAVES) if (m >= min) pool = pl;
  return pool;
}
function updateSpawns(dt) {
  const t = G.t, blood = G.blood > 0;
  const target = Math.min(45 + t * 0.42, t >= RUN_LEN ? 140 : 330) * (blood ? 1.25 : 1);
  const rate = (3 + t / 26) * (blood ? 1.7 : 1);
  G.spawnAcc += dt * rate;
  while (G.spawnAcc >= 1) {
    G.spawnAcc -= 1;
    if (G.foes.length >= target) break;
    const pt = edgePoint();
    spawnFoe(pick(wavePool()), pt.x, pt.y);
  }
  if (G.bloodIdx < BLOOD_MOONS.length && t >= BLOOD_MOONS[G.bloodIdx]) {
    G.bloodIdx++; G.blood = BLOOD_LEN;
    showBanner('혈월', `요괴가 날뛴다 · 경험치 1.5배 · ${BLOOD_LEN}초`);
    SND.horn(); G.zpunch = 0.08;
  }
  if (G.blood > 0) G.blood -= dt;
  // telegraph charges and encirclements a couple of seconds ahead
  for (let i = G.evIdx; i < EVENTS.length; i++) {
    const ev = EVENTS[i];
    if (G.warned[i] !== undefined || t < ev.t - 2.2 || (ev.type !== 'swarm' && ev.type !== 'ring')) continue;
    G.warned[i] = Math.random() * TAU;
    G.edgeWarn = { a: ev.type === 'swarm' ? G.warned[i] : null, t: 0, dur: 2.2 };
    if (ev.type === 'swarm') showBanner('요괴 떼 접근', '붉게 빛나는 쪽에서 돌진해 온다');
    else showBanner('포위 직전', '사방이 막힌다 · 빈틈으로 빠져나가라');
    SND.horn();
  }
  if (t >= G.eliteNext) {
    G.eliteNext += 50;
    const pt = edgePoint();
    spawnFoe(pick(wavePool()), pt.x, pt.y, { elite: true });
  }
  while (G.evIdx < EVENTS.length && t >= EVENTS[G.evIdx].t) {
    const ev = EVENTS[G.evIdx++], p = G.p;
    if (ev.type === 'boss') { const pt = edgePoint(40); spawnFoe(ev.foe, pt.x, pt.y); }
    else if (ev.type === 'ring') {
      const R = Math.hypot(VW, VH) / 2 + 30;
      for (let i = 0; i < ev.n; i++) { const a = (i / ev.n) * TAU; spawnFoe(ev.foe, p.x + Math.cos(a) * R, p.y + Math.sin(a) * R); }
      G.shake = Math.max(G.shake, 5);
    } else if (ev.type === 'swarm') {
      const a = G.warned[G.evIdx - 1] ?? Math.random() * TAU, R = Math.hypot(VW, VH) / 2 + 40;
      const sx = p.x + Math.cos(a) * R, sy = p.y + Math.sin(a) * R, vx = -Math.cos(a), vy = -Math.sin(a);
      for (let i = 0; i < ev.n; i++) {
        const off = (i - ev.n / 2) * 22;
        spawnFoe(ev.foe, sx + -vy * off + rand(-20, 20), sy + vx * off + rand(-30, 30), { vx, vy, rush: 9, spdMul: 1.7 });
      }
      G.shake = Math.max(G.shake, 6); SND.boss();
    }
  }
}

function updateFoes(dt) {
  const p = G.p, far = Math.hypot(VW, VH) * 0.85;
  for (const e of G.foes) {
    if (e.dead) continue;
    e.flash = Math.max(0, e.flash - dt);
    if (e.frozen > 0) { e.frozen -= dt; continue; }
    if (e.stun > 0) { e.stun -= dt; e.atk = null; continue; }
    if (e.slow > 0) e.slow -= dt;
    let dx = p.x - e.x, dy = p.y - e.y;
    const dist = Math.hypot(dx, dy) || 1;
    let spd = e.spd * (e.slow > 0 ? 1 - e.slowAmt : 1) * (G.blood > 0 ? 1.15 : 1);
    let mx, my;
    if (e.rush > 0) { e.rush -= dt; mx = e.vx; my = e.vy; }
    else { mx = dx / dist; my = dy / dist; }
    // chargers: lower the head, scrape the ground, then bolt in a straight line
    if (e.d.charge && !e.rush && !e.atk) {
      e.chgCd -= dt;
      if (e.chg === 'wind') {
        e.chgT -= dt; mx = 0; my = 0; e.dir = dir4(e.dx, e.dy);
        if (e.chgT <= 0) { e.chg = 'go'; e.chgT = 0.55; SND.dash(); }
      } else if (e.chg === 'go') {
        e.chgT -= dt; mx = e.dx; my = e.dy; spd = e.spd * 4.2;
        if (Math.random() < 0.5) G.fx.push({ k: 'spark', x: e.x, y: e.y, vx: -e.dx * 60, vy: -30, t: 0, dur: 0.4, col: '#8a7058', sz: 4 });
        if (e.chgT <= 0) { e.chg = ''; e.chgCd = rand(4, 6.5); }
      } else if (e.chgCd <= 0 && dist > 110 && dist < 300) {
        e.chg = 'wind'; e.chgT = 0.8; e.dx = dx / dist; e.dy = dy / dist;
        G.fx.push({ k: 'dashLine', e, t: 0, dur: 0.8, len: 4.2 * e.spd * 0.55 });
      }
    }
    if (e.boss) {
      const r = bossAI(e, dt, dx / dist, dy / dist);
      if (r) { mx = r.mx; my = r.my; spd = r.spd; }
    }
    // casters keep their distance and lob fire at the hero
    e.atkCd -= dt;
    const reach = e.r + 20;
    if (e.d.ranged && !e.rush) {
      if (e.cast) {
        e.cast.t += dt; mx = 0; my = 0;
        const f = Math.floor(e.cast.t / CAST.ft);
        if (!e.cast.hit && f >= CAST.hit) {
          e.cast.hit = true;
          const a = Math.atan2(p.y - 18 - (e.y - 30 * e.s), p.x - e.x), sp = e.d.ranged === 'void' ? 190 : 165;
          const n = e.d.ranged === 'void' ? 3 : 1;
          for (let i = 0; i < n; i++) { const aa = a + (i - (n - 1) / 2) * 0.22; G.ebul.push({ x: e.x, y: e.y - 30 * e.s, vx: Math.cos(aa) * sp, vy: Math.sin(aa) * sp, r: 7, dmg: e.dmg, life: 4, kind: e.d.ranged }); }
          SND.cast();
        }
        if (f >= CAST.frames) e.cast = null;
      } else if (dist < 300 && e.atkCd <= 0) {
        e.cast = { t: 0, hit: false }; e.atkCd = rand(3, 4.2); e.dir = dir4(dx, dy); mx = 0; my = 0;
      } else if (dist < 170) { mx = -mx; my = -my; }
      else if (dist < 240) { mx = 0; my = 0; e.dir = dir4(dx, dy); }
    } else if (e.chg) { /* charging: no club */ } else if (e.atk) {
      e.atk.t += dt;
      const f = Math.floor(e.atk.t / FOE_ATK.ft);
      if (!e.atk.hit && f >= FOE_ATK.hit) {
        e.atk.hit = true;
        G.fx.push({ k: 'claw', x: e.x + Math.cos(e.atk.a) * e.r * 1.2, y: e.y - 18 * e.s + Math.sin(e.atk.a) * e.r * 0.6, a: e.atk.a, s: e.s, t: 0, dur: 0.16 });
        if (dist < reach + 16) hurtPlayer(e.dmg);
        SND.club();
      }
      if (f >= FOE_ATK.frames) e.atk = null;
      mx = 0; my = 0;
    } else if (e.rush <= 0 && dist < reach && e.atkCd <= 0 && (!e.boss || !e.state)) {
      e.atk = { t: 0, hit: false, a: Math.atan2(dy, dx) };
      e.atkCd = e.boss ? 1.3 : rand(0.9, 1.3);
      e.dir = dir4(dx, dy);
      mx = 0; my = 0;
    } else if (e.rush <= 0 && dist < reach * 0.85 && (!e.boss || !e.state)) { mx = 0; my = 0; e.dir = dir4(dx, dy); }
    // separation from close neighbours
    let sx = 0, sy = 0, n = 0;
    for (const o of nearFoes(e.x, e.y, e.r + 14)) {
      if (o === e || n > 6) continue;
      const ox = e.x - o.x, oy = e.y - o.y, rr = e.r + o.r;
      const d2 = ox * ox + oy * oy;
      if (d2 < rr * rr && d2 > 0.01) { const d = Math.sqrt(d2); const f = (rr - d) / rr; sx += (ox / d) * f; sy += (oy / d) * f; n++; }
    }
    e.x += (mx * spd + sx * 60 + e.kx) * dt;
    e.y += (my * spd + sy * 60 + e.ky) * dt;
    const kd = Math.pow(0.0005, dt); e.kx *= kd; e.ky *= kd;
    const moving = Math.abs(mx) > 0.01 || Math.abs(my) > 0.01;
    if (moving) { e.dir = dir4(mx, my); e.walkT += (dt * spd) / (7 * e.s); } // stride: ~7px of ground per frame
    e.moving = moving;
    // charging packs and a dashing reaper hit on contact
    if ((e.rush > 0 || e.state === 'dash' || e.chg === 'go') && dist < e.r + 12 && p.inv <= 0) hurtPlayer(e.dmg);
    // stragglers left far behind come back from the side the player is heading toward
    if (dist > far && !e.boss) {
      if (e.rush > 0) { e.dead = true; e.gone = true; continue; }
      const a = Math.atan2(p.ay, p.ax) + rand(-0.8, 0.8), R = Math.hypot(VW, VH) / 2 + 40;
      e.x = p.x + Math.cos(a) * R; e.y = p.y + Math.sin(a) * R;
    }
  }
}
function bossAI(e, dt, nx, ny) {
  e.skillT -= dt;
  const kind = e.d.boss;
  if (e.state === 'wind') {
    e.stT -= dt;
    if (e.stT <= 0) {
      if (kind === 'dash') { e.state = 'dash'; e.stT = 0.55; }
      else if (kind === 'stomp') {
        e.state = ''; G.fx.push({ k: 'shock', x: e.x, y: e.y, t: 0, dur: 0.9, R: 260, hitDone: false, dmg: e.dmg * 1.2 }); G.shake = 10; SND.boom();
      }
    }
    return { mx: 0, my: 0, spd: 0 };
  }
  if (e.state === 'dash') { e.stT -= dt; if (e.stT <= 0) e.state = ''; return { mx: e.dx, my: e.dy, spd: 540 }; }
  if (e.skillT <= 0) {
    if (kind === 'dash') { e.skillT = 4; e.state = 'wind'; e.stT = 0.7; e.dx = nx; e.dy = ny; G.fx.push({ k: 'dashLine', e, t: 0, dur: 0.7 }); }
    else if (kind === 'stomp') { e.skillT = 5; e.state = 'wind'; e.stT = 0.65; G.fx.push({ k: 'warn', x: e.x, y: e.y, r: 90, t: 0, dur: 0.65, follow: e }); }
    else if (kind === 'nova') {
      e.skillT = 3.2;
      const n = 18, off = Math.random() * TAU;
      for (let i = 0; i < n; i++) { const a = off + (i / n) * TAU; G.ebul.push({ x: e.x, y: e.y - 30, vx: Math.cos(a) * 150, vy: Math.sin(a) * 150, r: 9, dmg: e.dmg * 0.6, life: 5 }); }
      if (Math.random() < 0.5) for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; spawnFoe('voidskel', e.x + Math.cos(a) * 90, e.y + Math.sin(a) * 90); }
      SND.zap();
    }
  }
  return null;
}

function hurt(e, dmg, wid, kx, ky, quiet) {
  if (e.dead) return;
  const crit = Math.random() < G.S.crit;
  const d = Math.max(1, Math.round(dmg * (crit ? 2 : 1) * rand(0.92, 1.08)));
  e.hp -= d; e.flash = 0.12;
  if (!e.boss) { e.kx += kx * (e.elite ? 0.3 : 1); e.ky += ky * (e.elite ? 0.3 : 1); }
  G.dmgBy[wid] = (G.dmgBy[wid] || 0) + Math.min(d, e.hp + d);
  if (G.nums.length < 110) G.nums.push({ x: e.x + rand(-6, 6), y: e.y - 30 * e.s, v: d, t: 0, crit, vx: rand(-20, 20), big: d >= 60 });
  if (!quiet) {
    SND.hit();
    if (G.fx.length < 560) G.fx.push({ k: 'hit', x: e.x + rand(-5, 5), y: e.y - 18 * e.s + rand(-5, 5), t: 0, dur: crit ? 0.2 : 0.14, a: Math.random() * TAU, crit, ka: Math.atan2(ky, kx) });
    if (crit && G.fx.length < 600) burst(e.x, e.y - 18 * e.s, 4, '#ffd27a', 170, 2);
  }
  if (e.hp <= 0) killFoe(e);
}
function killFoe(e) {
  e.dead = true;
  G.kills++;
  SND.kill();
  burst(e.x, e.y - 14, e.boss ? 40 : 8, e.d.tint ? '#a88cff' : '#e8dcc8', e.boss ? 300 : 150);
  const kl = Math.hypot(e.kx, e.ky) || 1, fly = Math.min(260, 90 + kl * 0.6);
  G.fx.push({ k: 'corpse', x: e.x, y: e.y, sheet: e.d.sheet, s: e.s, t: 0, dur: 0.55, dir: e.dir, tint: e.d.tint, vx: (e.kx / kl) * fly, vy: (e.ky / kl) * fly * 0.6, z: 0, vz: 120 + Math.random() * 80, rot: 0, vr: (Math.random() - 0.5) * 10 });
  if (G.fx.length < 640) G.fx.push({ k: 'soul', x: e.x, y: e.y - 20 * e.s, t: 0, dur: 0.8, col: e.d.tint ? '170,120,255' : '140,200,255' });
  if (Math.random() < 0.6) decal('ink', e.x, e.y, 10 * e.s, 4);
  G.combo++; G.comboT = 2.2; G.comboPop = 0.15;
  if (G.combo > G.comboBest) G.comboBest = G.combo;
  if (G.combo >= G.comboNext) { G.comboNext += 100; comboBurst(); }
  if (e.elite) { hitstop(0.09); G.shake = Math.max(G.shake, 8); }
  dropGem(e.x, e.y, e.d.xp * (e.elite ? 6 : 1));
  const greed = G.S.greed;
  if (Math.random() < 0.025 * greed) G.gems.push(pickup('gold', e.x + 8, e.y, randi(1, 3)));
  if (Math.random() < 0.01) G.gems.push(pickup('heal', e.x - 8, e.y, 30));
  if (Math.random() < 0.0015) G.gems.push(pickup('vacuum', e.x, e.y + 8, 0));
  if (e.elite || e.boss) G.gems.push(pickup('chest', e.x, e.y, e.boss ? 3 : 1));
  if (e.boss) {
    for (let i = 0; i < 14; i++) G.gems.push(pickup('gold', e.x + rand(-50, 50), e.y + rand(-40, 40), randi(3, 6)));
    if (G.boss === e) G.boss = null;
    G.shake = 16; hitstop(0.4); G.zpunch = 0.15;
    G.fx.push({ k: 'flash', t: 0, dur: 0.4, col: '255,240,210' });
    if (e.d.final) { G.won = true; later(1.6, () => endRun(true)); showBanner('일식이 걷힌다', '어둠의 군주를 쓰러뜨렸다'); }
  }
}
function hitstop(t) { G.hitstop = Math.max(G.hitstop, t); }
// every 100 kills without letting the chain drop, the hero's spirit bursts outward
function comboBurst() {
  const p = G.p, R = 190;
  showBanner(`${G.comboNext - 100} 연격`, '연격 폭발');
  G.fx.push({ k: 'ring', x: p.x, y: p.y - 14, r: R, t: 0, dur: 0.5, col: '255,207,122' });
  G.fx.push({ k: 'pillar', x: p.x, y: p.y, r: 46, t: 0, dur: 0.5 });
  hitArea(p.x, p.y - 14, R, 40 * G.S.might + G.t * 0.08, 'combo', 260);
  G.gold += 10 * G.S.greed; hitstop(0.08); G.shake = Math.max(G.shake, 8); SND.chest();
}
function pickup(kind, x, y, v) { return { kind, x, y, v, mag: false, vx: 0, vy: 0, bob: Math.random() * TAU }; }
function dropGem(x, y, v) {
  if (G.gems.length > 420) { // too many orbs on the floor: fold this one into an existing far-away orb
    const g = G.gems[Math.floor(Math.random() * G.gems.length)];
    if (g.kind === 'xp') { g.v += v; return; }
  }
  G.gems.push(pickup('xp', x + rand(-4, 4), y + rand(-4, 4), v));
}

// ---------------------------------------------------------------- player
function hurtPlayer(dmg) {
  const p = G.p;
  if (p.inv > 0 || G.won) return;
  const d = Math.max(1, Math.round(dmg - G.S.armor));
  p.hp -= d; p.inv = 0.6; p.hurtT = 0.25;
  G.shake = Math.max(G.shake, 6); hitstop(0.05);
  G.combo = Math.floor(G.combo * 0.7); // getting hit costs part of the chain
  SND.hurt();
  if (G.nums.length < 90) G.nums.push({ x: p.x, y: p.y - 50, v: d, t: 0, crit: false, mine: true });
  if (p.hp <= 0) {
    if (G.revive) {
      G.revive = false; p.hp = p.maxhp * 0.6; p.inv = 2.5;
      hitArea(p.x, p.y, 220, 9999, 'revive', 300);
      G.fx.push({ k: 'ring', x: p.x, y: p.y - 14, r: 220, t: 0, dur: 0.6, col: '255,220,150' });
      showBanner('환생', '부적이 타오르며 다시 일어섰다');
    } else { p.hp = 0; endRun(false); }
  }
}
function updatePlayer(dt) {
  const p = G.p;
  let mx = 0, my = 0;
  if (keys.ArrowLeft || keys.KeyA) mx -= 1;
  if (keys.ArrowRight || keys.KeyD) mx += 1;
  if (keys.ArrowUp || keys.KeyW) my -= 1;
  if (keys.ArrowDown || keys.KeyS) my += 1;
  if (joy.on) {
    const jx = joy.x - joy.ox, jy = joy.y - joy.oy, jl = Math.hypot(jx, jy);
    if (jl > 6) { const k = Math.min(1, jl / 50); mx = (jx / jl) * k; my = (jy / jl) * k; }
  }
  const l = Math.hypot(mx, my);
  if (l > 1) { mx /= l; my /= l; }
  // dash: a short burst with i-frames, leaving afterimages
  p.dashCd = Math.max(0, p.dashCd - dt);
  if (G.wantDash && p.dashCd <= 0) {
    G.wantDash = false;
    if (l > 0.05) { p.ax = mx / l; p.ay = my / l; }
    p.dashT = 0.2; p.dashCd = 1.4; p.inv = Math.max(p.inv, 0.32); p.ddx = p.ax; p.ddy = p.ay;
    SND.dash(); G.fx.push({ k: 'ring', x: p.x, y: p.y - 10, r: 34, t: 0, dur: 0.25, col: '200,230,255' });
  }
  G.wantDash = false;
  if (p.dashT > 0) {
    p.dashT -= dt; mx = p.ddx; my = p.ddy;
    p.ghostT -= dt;
    if (p.ghostT <= 0) { p.ghostT = 0.03; G.fx.push({ k: 'ghost', x: p.x, y: p.y, t: 0, dur: 0.28, ...playerFrame() }); }
  }
  p.moving = l > 0.05 || p.dashT > 0;
  if (p.moving) {
    const slow = p.dashT > 0 ? 3.4 : p.act ? 0.7 : 1; // dash burst / planting the feet for a swing or a shot
    p.x += mx * G.S.speed * slow * dt; p.y += my * G.S.speed * slow * dt;
    const n = Math.hypot(mx, my); p.ax = mx / n; p.ay = my / n;
    if (!p.act) {
      if (Math.abs(mx) > 0.2) p.face = mx < 0 ? -1 : 1;
      p.dir = dir4(mx, my); p.diag = diag4(mx, my);
    }
    p.walkT += dt * (G.S.speed / 125) * (p.dashT > 0 ? 2 : 1);
  }
  updateAct(dt);
  p.inv = Math.max(0, p.inv - dt); p.hurtT = Math.max(0, p.hurtT - dt);
  if (G.S.regen) p.hp = Math.min(p.maxhp, p.hp + G.S.regen * dt);
  // camera leads the run a little so the next threat shows up sooner
  const lead = p.moving ? 46 : 0;
  G.cam.x += (p.x + p.ax * lead - G.cam.x) * Math.min(1, dt * 5);
  G.cam.y += (p.y + p.ay * lead * 0.8 - G.cam.y) * Math.min(1, dt * 5);
  // chain timer, low-health heartbeat
  if (G.comboT > 0) { G.comboT -= dt; if (G.comboT <= 0) { G.combo = 0; G.comboNext = 100; } }
  G.comboPop = Math.max(0, (G.comboPop || 0) - dt);
  G.zpunch *= Math.pow(0.02, dt);
  if (p.hp / p.maxhp < 0.35) { G.heartT -= dt; if (G.heartT <= 0) { G.heartT = 0.75; SND.heart(); } }
  SND.drums(intensity());
}
function intensity() {
  return clamp(G.foes.length / 260, 0, 0.6) + (G.boss ? 0.3 : 0) + (G.blood > 0 ? 0.35 : 0) + (G.edgeWarn ? 0.2 : 0);
}
function playerFrame() {
  const p = G.p, sh = G.hero.sheet, info = sheetInfo(sh);
  let row = 8 + p.dir, col = walkFrame(sh, p.walkT, p.moving);
  if (p.act && info.atk) { row = info.atk.row + p.dir; col = Math.min(info.atk.frames - 1, Math.floor(p.act.t / info.atk.ft)); }
  if (info.diag && p.diag >= 0) row = 21 + Math.floor(row / 4) * 4 + p.diag;
  return { sheet: sh, row, col, s: info.hero || 1 };
}
function updateGems(dt) {
  const p = G.p, M = G.S.magnet;
  for (let i = G.gems.length - 1; i >= 0; i--) {
    const g = G.gems[i];
    const dx = p.x - g.x, dy = p.y - 16 - g.y, d = Math.hypot(dx, dy) || 1;
    if (!g.mag && g.kind !== 'chest' && d < M) g.mag = true;
    if (g.kind === 'chest' && d < 30) g.mag = true;
    if (g.mag) {
      const sp = 380 + (g.sp = (g.sp || 0) + dt * 1500);
      g.x += (dx / d) * sp * dt; g.y += (dy / d) * sp * dt;
      if (d < 16) { collect(g); G.gems[i] = G.gems[G.gems.length - 1]; G.gems.pop(); }
    }
  }
}
function collect(g) {
  if (g.kind === 'xp') { gainXp(g.v); SND.gem(); }
  else if (g.kind === 'gold') { G.gold += g.v * G.S.greed; SND.gold(); }
  else if (g.kind === 'heal') { G.p.hp = Math.min(G.p.maxhp, G.p.hp + g.v); SND.gold(); G.nums.push({ x: G.p.x, y: G.p.y - 50, v: '+' + g.v, t: 0, heal: true }); }
  else if (g.kind === 'vacuum') { for (const o of G.gems) if (o.kind === 'xp') o.mag = true; SND.chest(); }
  else if (g.kind === 'chest') openChest(g.v);
}
function gainXp(v) {
  G.xp += v * G.S.growth * (G.blood > 0 ? 1.5 : 1) * (1 + Math.min(G.combo, 500) / 1000);
  while (G.xp >= G.next) { G.xp -= G.next; G.lvl++; G.next = xpNeed(G.lvl); G.pendingLv++; }
  if (G.pendingLv > 0 && mode === 'play') openLevelUp();
}

// ---------------------------------------------------------------- upgrades
const optKey = (o) => o.type + ':' + o.id;
// level-up hand: always offer a mix (something to grow, something new, a tonic) before filling at random
function dealChoices(n) {
  const pool = shuffle(upgradeOptions().filter((o) => !G.banned.has(optKey(o))));
  const hand = [], take = (pred) => { const i = pool.findIndex(pred); if (i >= 0) hand.push(pool.splice(i, 1)[0]); };
  take((o) => evoHint(o));
  take((o) => o.type === 'w' && !o.isNew);
  take((o) => o.type === 'w' && o.isNew);
  take((o) => o.type === 'p');
  while (hand.length < n && pool.length) hand.push(pool.shift());
  return shuffle(hand.slice(0, n));
}
// true when taking this card brings a weapon to its evolution (Lv.8 + its tonic)
function evoHint(o) {
  if (o.type === 'w' && !o.isNew) { const w = wget(o.id); return !w.evo && w.lv === W_MAX - 1 && (G.passives[WEAPONS[o.id].pair] || 0) > 0; }
  if (o.type === 'p' && o.isNew) return G.weapons.some((w) => !w.evo && w.lv >= W_MAX - 1 && WEAPONS[w.id].pair === o.id);
  return false;
}
function upgradeOptions() {
  const opts = [];
  const full = G.weapons.length >= SLOT_W, pfull = Object.keys(G.passives).length >= SLOT_P;
  for (const w of G.weapons) if (w.lv < W_MAX) opts.push({ type: 'w', id: w.id });
  if (!full) for (const id of Object.keys(WEAPONS)) if (!wget(id)) opts.push({ type: 'w', id, isNew: true });
  for (const [id, d] of Object.entries(PASSIVES)) {
    const lv = G.passives[id] || 0;
    if (lv > 0 && lv < d.max) opts.push({ type: 'p', id });
    else if (lv === 0 && !pfull) opts.push({ type: 'p', id, isNew: true });
  }
  return opts;
}
function applyOption(o) {
  if (o.type === 'w') { const w = wget(o.id); if (w) w.lv++; else addWeapon(o.id); }
  else if (o.type === 'p') G.passives[o.id] = (G.passives[o.id] || 0) + 1;
  else if (o.type === 'evo') { const w = wget(o.id); w.evo = true; G.fx.push({ k: 'ring', x: G.p.x, y: G.p.y - 14, r: 160, t: 0, dur: 0.6, col: '255,207,122' }); }
  else if (o.type === 'heal') G.p.hp = Math.min(G.p.maxhp, G.p.hp + 40);
  else if (o.type === 'gold') G.gold += 25;
  recalc();
}
function optionView(o) {
  if (o.type === 'w') {
    const d = WEAPONS[o.id], w = wget(o.id), lv = w ? w.lv + 1 : 1;
    const pairName = PASSIVES[d.pair].name;
    return { icon: d.icon, name: d.name, lv: `Lv.${lv}`, isNew: !w, desc: d.desc[lv - 1] + (lv === 1 ? ` <span class="pair">진화: Lv.8 + ${pairName}</span>` : ''), evoHint: evoHint(o) };
  }
  if (o.type === 'p') {
    const d = PASSIVES[o.id], lv = (G.passives[o.id] || 0) + 1;
    const pairs = Object.entries(WEAPONS).filter(([, w]) => w.pair === o.id).map(([, w]) => w.name).join('·');
    return { icon: d.icon, name: d.name, lv: `Lv.${lv}`, isNew: lv === 1, desc: d.desc + (lv === 1 && pairs ? ` <span class="pair">진화 짝: ${pairs}</span>` : ''), evoHint: evoHint(o) };
  }
  if (o.type === 'evo') { const d = WEAPONS[o.id]; return { icon: d.evoIcon, name: d.evoName, lv: '진화', evo: true, desc: d.evoDesc }; }
  if (o.type === 'heal') return { icon: 'hp-potion', name: '약과', lv: '', desc: '체력 40 회복' };
  return { icon: 'gold', name: '엽전 꾸러미', lv: '', desc: '엽전 25냥' };
}
function evoReady() {
  return G.weapons.filter((w) => !w.evo && w.lv >= W_MAX && (G.passives[WEAPONS[w.id].pair] || 0) > 0);
}

const screens = ['title', 'select', 'shop', 'levelup', 'pause', 'result'];
function show(id) { for (const s of screens) $(s).hidden = s !== id; $('pauseBtn').hidden = $('dashBtn').hidden = !(id === null && mode === 'play'); }

function cardHTML(v) {
  const tag = v.evo ? '<span class="new evo">진화</span>' : v.evoHint ? '<span class="new evo">진화 가능</span>' : v.isNew ? '<span class="new">새로움</span>' : '';
  return `<img src="${ICON(v.icon)}" alt=""><div class="nm">${v.name} <span class="lv">${v.lv}</span>${tag}</div><div class="ds">${v.desc}</div>`;
}
function openLevelUp() {
  mode = 'levelup';
  SND.level();
  G.sealing = false;
  G.hand = dealChoices(4 + mlv('luck'));
  $('luEyebrow').textContent = `깨달음 · Lv.${G.lvl - G.pendingLv + 1}`;
  renderHand();
  show('levelup');
}
function renderHand() {
  let opts = G.hand;
  if (!opts.length) opts = [{ type: 'heal' }, { type: 'gold' }];
  $('luTitle').textContent = G.sealing ? '봉인할 것을 고른다' : '하나를 고른다';
  const box = $('luCards'); box.innerHTML = '';
  box.classList.toggle('sealing', G.sealing);
  opts.forEach((o, i) => {
    const b = document.createElement('button'); b.className = 'card'; b.innerHTML = cardHTML(optionView(o));
    b.onclick = () => {
      if (G.sealing && (o.type === 'w' || o.type === 'p')) { // seal: never offered again this run; deal a replacement
        G.banned.add(optKey(o)); G.banishes--; G.sealing = false;
        const fresh = dealChoices(8).filter((x) => !G.hand.some((h) => optKey(h) === optKey(x)));
        G.hand.splice(i, 1, ...(fresh.length ? [fresh[0]] : []));
        SND.glass(); renderHand(); return;
      }
      applyOption(o); G.pendingLv--; levelNova(); closeModal();
    };
    box.appendChild(b);
    if (i === 0) setTimeout(() => b.focus(), 30);
  });
  const foot = $('luFoot'); foot.innerHTML = '';
  const mk = (label, title, on, fn, cls = 'btn') => { const b = document.createElement('button'); b.className = cls; b.textContent = label; b.title = title; b.disabled = !on; b.onclick = fn; foot.appendChild(b); };
  mk(`다시 뽑기 ${G.rerolls}`, '선택지를 모두 새로 뽑는다 (R)', G.rerolls > 0, rerollHand);
  mk(G.sealing ? '봉인 취소' : `봉인 ${G.banishes}`, '고른 항목을 이번 판에서 다시 나오지 않게 한다', G.banishes > 0 || G.sealing, () => { G.sealing = !G.sealing; renderHand(); }, G.sealing ? 'btn primary' : 'btn');
  mk('건너뛰기', '체력 25 회복 · 엽전 10냥', true, () => { G.p.hp = Math.min(G.p.maxhp, G.p.hp + 25); G.gold += 10; G.pendingLv--; closeModal(); }, 'btn ghost');
  const hint = document.createElement('span'); hint.className = 'sub'; hint.textContent = `숫자 키 1~${opts.length} 선택 · R 다시 뽑기`; foot.appendChild(hint);
}
function rerollHand() {
  if (G.rerolls <= 0) return;
  G.rerolls--; G.sealing = false;
  G.hand = dealChoices(4 + mlv('luck'));
  SND.gem(); renderHand();
}
function openChest(n) {
  mode = 'levelup';
  SND.chest();
  if (n === 1 && !evoReady().length) {
    const owned = shuffle(upgradeOptions().filter((x) => !x.isNew && !G.banned.has(optKey(x)))).slice(0, 3);
    if (owned.length > 1) {
      const coins = Math.round(randi(10, 25) * G.S.greed);
      G.gold += coins;
      $('luEyebrow').textContent = `보물 상자 · 엽전 ${coins}냥`;
      $('luTitle').textContent = '상자 속 비급 하나를 고른다';
      const box = $('luCards'); box.innerHTML = ''; box.classList.remove('sealing');
      owned.forEach((o, i) => {
        const b = document.createElement('button'); b.className = 'card'; b.innerHTML = cardHTML(optionView(o));
        b.onclick = () => { applyOption(o); closeModal(); };
        box.appendChild(b);
        if (i === 0) setTimeout(() => b.focus(), 30);
      });
      $('luFoot').innerHTML = '<span class="sub">숫자 키로도 고를 수 있다</span>';
      show('levelup');
      return;
    }
  }
  const got = [];
  for (let i = 0; i < n; i++) {
    const evo = evoReady();
    let o;
    if (evo.length && i === 0) o = { type: 'evo', id: evo[0].id };
    else {
      const owned = upgradeOptions().filter((x) => !x.isNew);
      o = owned.length ? pick(owned) : { type: 'gold' };
    }
    got.push(optionView(o));
    applyOption(o);
  }
  const coins = Math.round(randi(10, 25) * n * G.S.greed);
  G.gold += coins;
  $('luEyebrow').textContent = '보물 상자';
  $('luTitle').textContent = got.some((g) => g.evo) ? '무기가 진화했다' : '상자를 열었다';
  $('luCards').innerHTML = got.map((v) => `<div class="card">${cardHTML(v)}</div>`).join('') +
    `<div class="card"><img src="${ICON('gold')}" alt=""><div class="nm">엽전 ${coins}냥</div><div class="ds">상자 바닥에서 엽전을 찾았다.</div></div>`;
  $('luFoot').innerHTML = '';
  const b = document.createElement('button'); b.className = 'btn primary'; b.textContent = '받기';
  b.onclick = closeModal; $('luFoot').appendChild(b);
  setTimeout(() => b.focus(), 30);
  show('levelup');
}
function levelNova() {
  const p = G.p;
  G.fx.push({ k: 'ring', x: p.x, y: p.y - 14, r: 150, t: 0, dur: 0.45, col: '140,200,255' });
  G.fx.push({ k: 'pillar', x: p.x, y: p.y, r: 38, t: 0, dur: 0.45 });
  for (const e of G.foes) { const dx = e.x - p.x, dy = e.y - p.y, d = Math.hypot(dx, dy) || 1; if (d < 150 && !e.boss) { e.kx += (dx / d) * 420; e.ky += (dy / d) * 420; } }
}
function closeModal() {
  mode = 'play'; show(null);
  if (G.pendingLv > 0) openLevelUp();
}

// ---------------------------------------------------------------- run flow
function startRun() {
  SND.init(); SND.music(true);
  newRun(save.hero);
  mode = 'play'; show(null);
  showBanner('일식의 밤', '15분을 버텨라');
  last = performance.now();
}
function endRun(won) {
  if (mode === 'result') return;
  mode = 'result';
  const coins = Math.floor(G.gold + G.kills * 0.05 + (won ? 200 : 0));
  save.gold += coins;
  const rec = { t: Math.floor(G.t), kills: G.kills, won };
  if (!save.best || rec.t > save.best.t || (won && !save.best.won)) save.best = rec;
  persist();
  $('rEyebrow').textContent = won ? '승리' : '결과';
  $('rTitle').textContent = won ? '일식을 걷어냈다' : '어둠에 삼켜졌다';
  $('rSub').textContent = won ? `${G.hero.name}이(가) 어둠의 군주 어둑시니를 쓰러뜨리고 아침을 되찾았다.` : `${G.hero.name}이(가) ${fmtTime(G.t)} 동안 버티다 쓰러졌다.`;
  $('rStats').innerHTML = [['버틴 시간', fmtTime(G.t)], ['처치', fmt(G.kills)], ['레벨', G.lvl], ['얻은 엽전', fmt(coins)]]
    .map(([k, v]) => `<div class="stat"><span>${k}</span><b>${v}</b></div>`).join('');
  $('rDmg').innerHTML = buildTable(true);
  show('result');
}
function buildTable(withDmg) {
  const rows = G.weapons.map((w) => {
    const d = WEAPONS[w.id];
    return `<tr><td><img src="${ICON(w.evo ? d.evoIcon : d.icon)}" alt="">${w.evo ? d.evoName : d.name} <span style="color:var(--muted)">Lv.${w.lv}</span></td><td>${withDmg ? fmt(G.dmgBy[w.id] || 0) + ' 피해' : ''}</td></tr>`;
  });
  for (const [id, lv] of Object.entries(G.passives)) {
    const d = PASSIVES[id];
    rows.push(`<tr><td><img src="${ICON(d.icon)}" alt="">${d.name} <span style="color:var(--muted)">Lv.${lv}</span></td><td>${d.desc}</td></tr>`);
  }
  return rows.join('');
}
function pauseGame() {
  if (mode !== 'play') return;
  mode = 'pause';
  $('pauseBuild').innerHTML = buildTable(true);
  show('pause');
  setTimeout(() => $('resume').focus(), 30);
}

let bannerTimer = 0;
function showBanner(t, sub) {
  const b = $('banner');
  b.innerHTML = `${t}<small>${sub || ''}</small>`;
  b.classList.add('on');
  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => b.classList.remove('on'), 2400);
}

// ---------------------------------------------------------------- effects
function smoke(x, y, n, r) {
  for (let i = 0; i < n && G.fx.length < 680; i++) G.fx.push({ k: 'smoke', x: x + rand(-r, r) * 0.6, y: y + rand(-r, r) * 0.3, r: r * rand(0.4, 0.8), t: 0, dur: rand(0.6, 1.1) });
}
function burst(x, y, n, col, sp, sz = 3) {
  for (let i = 0; i < n && G.fx.length < 700; i++) {
    const a = Math.random() * TAU, v = rand(0.3, 1) * sp;
    G.fx.push({ k: 'spark', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 40, t: 0, dur: rand(0.25, 0.55), col, sz });
  }
}
function updateShots(dt) {
  for (let i = G.shots.length - 1; i >= 0; i--) {
    const s = G.shots[i];
    s.t += dt;
    if (s.home && !s.home.dead) {
      const a = Math.atan2(s.home.y - 14 - s.y, s.home.x - s.x), cur = Math.atan2(s.vy, s.vx);
      let da = a - cur; while (da > Math.PI) da -= TAU; while (da < -Math.PI) da += TAU;
      const na = cur + clamp(da, -4 * dt, 4 * dt);
      s.vx = Math.cos(na) * s.spd; s.vy = Math.sin(na) * s.spd;
    }
    if (s.back) { // boomerang: decelerate, then return to the player
      const p = G.p, k = s.t < 0.55 ? 1 - s.t / 0.55 : 0;
      if (k > 0) { s.vx = Math.cos(s.a) * s.spd * k; s.vy = Math.sin(s.a) * s.spd * k; }
      else {
        const dx = p.x - s.x, dy = p.y - 16 - s.y, d = Math.hypot(dx, dy) || 1, sp = Math.min(600, (s.t - 0.55) * 900);
        s.vx = (dx / d) * sp; s.vy = (dy / d) * sp;
        if (d < 20 && s.t > 0.8) s.life = 0;
      }
      s.spin += dt * 18;
    }
    if (s.k === 'fly' && s.wait > 0) { // hover in a fan above the shoulders, then pick a foe and fly
      const P = G.p;
      s.wait -= dt;
      const hx = P.x + Math.sin(s.slot) * 54, hy = P.y - 44 - Math.cos(s.slot) * 22 + Math.sin(G.t * 8 + s.idx) * 2;
      s.x += (hx - s.x) * Math.min(1, dt * 14); s.y += (hy - s.y) * Math.min(1, dt * 14);
      if (s.wait <= 0) {
        const tgs = nearestFoes(s.x, s.y, 8, 620), tg = tgs[s.idx % Math.max(1, tgs.length)];
        s.a = tg ? Math.atan2(tg.y - 18 - s.y, tg.x - s.x) : -Math.PI / 2 + s.slot;
        s.spd = 760 * G.S.vel; s.vx = Math.cos(s.a) * s.spd; s.vy = Math.sin(s.a) * s.spd;
      }
      continue;
    }
    if (s.lob) { // a thrown gourd: arc to the target, burst into a cloud
      s.life -= dt; s.spin += dt * 12;
      const k = 1 - Math.max(0, s.life) / s.dur0;
      s.x = s.sx + (s.tx - s.sx) * k; s.y = s.sy + (s.ty - s.sy) * k - Math.sin(k * Math.PI) * 90;
      if (s.life <= 0) {
        const R = 56 * s.area;
        G.zones.push({ x: s.tx, y: s.ty + 6, r: R, t: 0, dur: s.zdur, dmg: s.dmg, tick: 0.35, acc: 0, wid: s.wid, col: s.evo ? '150,220,60' : '110,210,90', poison: true, slow: 0.35, seed: Math.random() * 10 });
        G.fx.push({ k: 'boom', x: s.tx, y: s.ty, r: R * 0.8, t: 0, dur: 0.3, col: '130,230,100' });
        burst(s.tx, s.ty, 10, '#bff59a', 160);
        SND.glass();
        G.shots[i] = G.shots[G.shots.length - 1]; G.shots.pop();
      }
      continue;
    }
    s.x += s.vx * dt; s.y += s.vy * dt;
    s.life -= dt;
    if (s.k === 'fly' || s.k === 'arrow') { s.trail.push(s.x, s.y); if (s.trail.length > 12) s.trail.splice(0, 2); }
    if (s.k === 'phoenix') {
      s.trailAcc += dt;
      if (s.trailAcc >= 0.06) {
        s.trailAcc = 0;
        G.zones.push({ x: s.x, y: s.y + 18, r: 24 * s.size, t: 0, dur: 1.2 * s.burn, dmg: s.dmg * 0.08, tick: 0.3, acc: 0, wid: s.wid, col: '255,120,40', fire: true });
      }
      if (G.fx.length < 650) G.fx.push({ k: 'feather', x: s.x + rand(-10, 10), y: s.y + rand(-8, 8), vx: -s.vx * 0.1 + rand(-30, 30), vy: -s.vy * 0.1 + rand(-30, 30), t: 0, dur: rand(0.4, 0.8), r: Math.random() * TAU });
    }
    if (s.k === 'orb') {
      s.emit += dt; s.spin = (s.spin || 0) + dt * 3;
      while (s.emit >= 0.08) {
        s.emit -= 0.08; s.ang += 0.55;
        for (let j = 0; j < s.arms; j++) shard(s, s.ang + j * Math.PI, 1);
      }
      if (s.life <= dt && !s.burst) {
        s.burst = true;
        const n = s.big ? 20 : 12;
        for (let j = 0; j < n; j++) shard(s, (j / n) * TAU, 1.4);
        G.fx.push({ k: 'boom', x: s.x, y: s.y, r: 50 * s.area, t: 0, dur: 0.3, col: '150,210,255' });
        SND.ice();
      }
    }
    if (s.k === 'fox' && Math.random() < 0.6) G.fx.push({ k: 'ember', x: s.x, y: s.y, t: 0, dur: 0.35, col: s.burn ? '255,110,200' : '255,150,60' });
    let spent = false;
    for (const e of nearFoes(s.x, s.y + 12, s.r + 30)) {
      if (e.dead) continue;
      const dx = e.x - s.x, dy = e.y - 14 - s.y, rr = s.r + e.r;
      if (dx * dx + dy * dy > rr * rr) continue;
      const last = s.hit.get(e);
      if (last !== undefined && (!s.rehit || s.t - last < s.rehit)) continue;
      s.hit.set(e, s.t);
      if (s.k === 'fox') { explodeFox(s); spent = true; break; }
      const sp = Math.hypot(s.vx, s.vy) || 1;
      hurt(e, s.dmg, s.wid, (s.vx / sp) * s.kb, (s.vy / sp) * s.kb, s.k === 'shard' || s.k === 'phoenix');
      if (s.slow) { e.slow = Math.max(e.slow, 0.8); e.slowAmt = 0.35; if (s.freeze && !e.boss && Math.random() < 0.08) e.frozen = 1; }
      if (--s.pierce <= 0) { spent = true; break; }
    }
    if (!spent && s.life <= 0 && s.k === 'fox') { explodeFox(s); spent = true; }
    if (spent || s.life <= 0) { G.shots[i] = G.shots[G.shots.length - 1]; G.shots.pop(); }
  }
  for (let i = G.ebul.length - 1; i >= 0; i--) {
    const b = G.ebul[i];
    b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
    const p = G.p;
    if (Math.hypot(p.x - b.x, p.y - 20 - b.y) < b.r + 10) { hurtPlayer(b.dmg); b.life = 0; }
    if (b.life <= 0) { G.ebul[i] = G.ebul[G.ebul.length - 1]; G.ebul.pop(); }
  }
  for (let i = G.zones.length - 1; i >= 0; i--) {
    const z = G.zones[i];
    z.t += dt; z.acc += dt;
    if (z.acc >= z.tick) {
      z.acc = 0;
      for (const e of nearFoes(z.x, z.y, z.r + 20)) {
        if (Math.hypot(e.x - z.x, e.y - z.y) < z.r + e.r) { hurt(e, z.dmg, z.wid, 0, 0, true); if (z.slow) { e.slow = Math.max(e.slow, 0.5); e.slowAmt = z.slow; } }
      }
    }
    if (z.fire && Math.random() < dt * 6 && G.fx.length < 650) G.fx.push({ k: 'ember', x: z.x + rand(-z.r, z.r) * 0.6, y: z.y - rand(0, 14), t: 0, dur: 0.5, col: '255,140,50' });
    if (z.poison && Math.random() < dt * 9 && G.fx.length < 650) G.fx.push({ k: 'bubble', x: z.x + rand(-z.r, z.r) * 0.7, y: z.y + rand(-z.r, z.r) * 0.4, t: 0, dur: 0.7 });
    if (z.t >= z.dur) { G.zones[i] = G.zones[G.zones.length - 1]; G.zones.pop(); }
  }
}
function shard(o, a, k) {
  if (G.shots.length > 600) return;
  shoot({ k: 'shard', x: o.x, y: o.y, a, spd: 300 * k, dmg: o.dmg, pierce: 1, life: 0.5, r: 5, wid: o.wid, kb: 20, slow: true, freeze: o.evo });
}
function explodeFox(s) {
  hitArea(s.x, s.y, s.blast, s.dmg, s.wid, 90);
  G.fx.push({ k: 'boom', x: s.x, y: s.y, r: s.blast, t: 0, dur: 0.3, col: s.burn ? '255,100,190' : '255,150,60' });
  burst(s.x, s.y, 10, s.burn ? '#ff8ad0' : '#ffc070', 200);
  smoke(s.x, s.y, 3, s.blast * 0.5);
  decal('scorch', s.x, s.y + 12, s.blast * 0.55, 2);
  if (s.burn) G.zones.push({ x: s.x, y: s.y + 12, r: s.blast * 0.8, t: 0, dur: 1.6 * G.S.dur, dmg: s.dmg * 0.15, tick: 0.3, acc: 0, wid: s.wid, col: '255,90,170' });
  SND.boom();
}
function updateFx(dt) {
  for (let i = G.fx.length - 1; i >= 0; i--) {
    const f = G.fx[i];
    f.t += dt;
    if (f.k === 'spark') { f.x += f.vx * dt; f.y += f.vy * dt; f.vy += 300 * dt; f.vx *= 0.96; }
    else if (f.k === 'snow') { f.y += 22 * dt; f.x += f.vx * dt; }
    else if (f.k === 'mote') f.y -= 70 * dt;
    else if (f.k === 'bubble') f.y -= 18 * dt;
    else if (f.k === 'ember') f.y -= 20 * dt;
    else if (f.k === 'feather') { f.x += f.vx * dt; f.y += f.vy * dt + 20 * dt; f.r += dt * 6; }
    else if (f.k === 'corpse') { f.x += f.vx * dt; f.y += f.vy * dt; f.vx *= 0.92; f.vy *= 0.92; f.vz -= 600 * dt; f.z = Math.max(0, f.z + f.vz * dt); f.rot += f.vr * dt * (f.z > 0 ? 1 : 0.2); }
    else if (f.k === 'soul') f.y -= 55 * dt;
    else if (f.k === 'smoke') { f.y -= 14 * dt; }
    if (f.k === 'shock' && !f.hitDone) {
      const p = G.p, rr = (f.t / f.dur) * f.R, d = Math.hypot(p.x - f.x, p.y - f.y);
      if (Math.abs(d - rr) < 22) { f.hitDone = true; hurtPlayer(f.dmg); }
    }
    if (f.t >= f.dur) { G.fx[i] = G.fx[G.fx.length - 1]; G.fx.pop(); }
  }
  if (G.edgeWarn) { G.edgeWarn.t += dt; if (G.edgeWarn.t >= G.edgeWarn.dur) G.edgeWarn = null; }
  for (let i = G.nums.length - 1; i >= 0; i--) {
    const n = G.nums[i]; n.t += dt; n.y -= 40 * dt; n.x += (n.vx || 0) * dt;
    if (n.t > 0.7) { G.nums[i] = G.nums[G.nums.length - 1]; G.nums.pop(); }
  }
  for (let i = G.timers.length - 1; i >= 0; i--) {
    const tm = G.timers[i]; tm.t -= dt;
    if (tm.t <= 0) { G.timers.splice(i, 1); tm.fn(); }
  }
  G.shake = Math.max(0, G.shake - dt * 30);
  for (let i = G.decals.length - 1; i >= 0; i--) { const d = G.decals[i]; d.t += dt; if (d.t >= d.dur) G.decals.splice(i, 1); }
}

// ---------------------------------------------------------------- update
function update(dt) {
  G.t += dt;
  updatePlayer(dt);
  buildGrid();
  updateSpawns(dt);
  updateWeapons(dt);
  updateShots(dt);
  updateFoes(dt);
  updateFx(dt);
  updateGems(dt);
  for (let i = G.foes.length - 1; i >= 0; i--) if (G.foes[i].dead) { G.foes[i] = G.foes[G.foes.length - 1]; G.foes.pop(); }
}

// ---------------------------------------------------------------- render
function drawSprite(sheet, x, y, s, row, col, img) {
  const info = sheetInfo(sheet), F = info.F, im = img || IMG[sheet];
  if (!im) return;
  const size = F * s;
  ctx.drawImage(im, col * F, row * F, F, F, Math.round(x - size / 2), Math.round(y - size + info.foot * s), size, size);
}
function walkFrame(sheet, t, moving) {
  const n = sheetInfo(sheet).walk;
  return moving ? 1 + (Math.floor(t * 11) % n) : 0;
}
function shadow(x, y, w) { ctx.fillStyle = 'rgba(0,0,0,0.32)'; ctx.beginPath(); ctx.ellipse(x, y, w, w * 0.38, 0, 0, TAU); ctx.fill(); }

function render() {
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.imageSmoothingEnabled = false;
  if (!G) { ctx.fillStyle = '#0c0b10'; ctx.fillRect(0, 0, SW, SH); drawTitleBackdrop(); return; }
  const p = G.p;
  const shx = G.shake ? rand(-G.shake, G.shake) : 0, shy = G.shake ? rand(-G.shake, G.shake) : 0;
  const Z = ZOOM * (1 + G.zpunch), vw = SW / Z, vh = SH / Z;
  const camX = G.cam.x - vw / 2 + shx, camY = G.cam.y - 20 - vh / 2 + shy;
  ctx.setTransform(DPR * Z, 0, 0, DPR * Z, -camX * DPR * Z, -camY * DPR * Z);
  // ground
  ctx.fillStyle = groundPat; ctx.fillRect(camX - 2, camY - 2, vw + 4, vh + 4);
  const c0x = Math.floor(camX / CHUNK) - 1, c1x = Math.floor((camX + vw) / CHUNK) + 1, c0y = Math.floor(camY / CHUNK) - 1, c1y = Math.floor((camY + vh) / CHUNK) + 1;
  const props = [];
  for (let cx = c0x; cx <= c1x; cx++) for (let cy = c0y; cy <= c1y; cy++) for (const pr of propsIn(cx, cy)) props.push(pr);
  for (const pr of props) if (pr.kind === 0 || pr.kind === 4) drawProp(pr.kind, pr.x, pr.y, pr.s);
  // ground effects
  for (const d of G.decals) drawDecal(d);
  for (const z of G.zones) drawZone(z);
  const frost = wget('frost');
  if (frost) {
    const st = wstats(frost), R = 52 * st.area;
    const gr = ctx.createRadialGradient(p.x, p.y, R * 0.2, p.x, p.y, R);
    gr.addColorStop(0, 'rgba(150,210,255,0.02)'); gr.addColorStop(0.85, `rgba(150,210,255,${frost.evo ? 0.22 : 0.14})`); gr.addColorStop(1, 'rgba(200,235,255,0.35)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(p.x, p.y, R, R * 0.85, 0, 0, TAU); ctx.fill();
  }
  for (const f of G.fx) if (f.k === 'warn') {
    const x = f.follow ? f.follow.x : f.x, y = f.follow ? f.follow.y : f.y;
    const wc = f.col || '255,70,50';
    ctx.strokeStyle = `rgba(${wc},${0.4 + 0.4 * Math.sin(f.t * 30)})`; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(x, y, f.r, f.r * 0.7, 0, 0, TAU); ctx.stroke();
    ctx.fillStyle = `rgba(${wc},${0.12 * f.t / f.dur})`; ctx.fill();
  } else if (f.k === 'shock') {
    const rr = (f.t / f.dur) * f.R;
    ctx.strokeStyle = `rgba(255,190,120,${1 - f.t / f.dur})`; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.ellipse(f.x, f.y, rr, rr * 0.7, 0, 0, TAU); ctx.stroke();
  } else if (f.k === 'dashLine' && !f.e.dead) {
    ctx.strokeStyle = `rgba(255,40,40,${0.25 + 0.3 * (f.t / f.dur)})`; ctx.lineWidth = f.e.r * 1.6;
    ctx.beginPath(); ctx.moveTo(f.e.x, f.e.y); ctx.lineTo(f.e.x + f.e.dx * (f.len || 300), f.e.y + f.e.dy * (f.len || 300)); ctx.stroke();
  }
  // pickups
  for (const g of G.gems) drawPickup(g);
  // y-sorted bodies
  const bodies = [];
  for (const pr of props) if (pr.kind !== 0 && pr.kind !== 4) bodies.push({ y: pr.y, pr });
  for (const e of G.foes) bodies.push({ y: e.y, e });
  for (const f of G.fx) if (f.k === 'corpse' || f.k === 'ghost') bodies.push({ y: f.y - 1, c: f });
  bodies.push({ y: p.y, me: true });
  bodies.sort((a, b) => a.y - b.y);
  for (const b of bodies) {
    if (b.pr) drawProp(b.pr.kind, b.pr.x, b.pr.y, b.pr.s);
    else if (b.e) drawFoe(b.e);
    else if (b.c && b.c.k === 'ghost') { // dash afterimage
      const c = b.c; ctx.globalAlpha = 0.45 * (1 - c.t / c.dur);
      drawSprite(c.sheet, c.x, c.y, c.s, c.row, c.col, variant(c.sheet, 'rgba(140,200,255,0.75)'));
      ctx.globalAlpha = 1;
    } else if (b.c) { // knocked off its feet, tumbling away and fading
      const c = b.c, k = c.t / c.dur;
      ctx.globalAlpha = 1 - k * k;
      ctx.save(); ctx.translate(c.x, c.y - c.z); ctx.rotate(c.rot);
      const img = c.t < 0.07 ? variant(c.sheet, 'rgba(255,255,255,1)') : variant(c.sheet, c.tint ? 'rgba(40,10,60,0.55)' : 'rgba(20,10,30,0.5)');
      drawSprite(c.sheet, 0, 0, c.s, 20, Math.min(5, Math.floor(k * 6)), img);
      ctx.restore(); ctx.globalAlpha = 1;
    } else drawPlayer();
  }
  // projectiles & air effects
  ctx.globalCompositeOperation = 'lighter';
  for (const f of G.fx) if (f.k === 'ember') {
    const a = 1 - f.t / f.dur;
    ctx.fillStyle = `rgba(${f.col},${a * 0.6})`; ctx.beginPath(); ctx.arc(f.x, f.y, 5 * a + 1, 0, TAU); ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
  for (const s of G.shots) drawShot(s);
  drawTalismans();
  for (const f of G.fx) drawFx(f);
  ctx.globalCompositeOperation = 'lighter';
  for (const b of G.ebul) {
    const fire = b.kind === 'fire', pulse = 1 + 0.15 * Math.sin(G.t * 20 + b.x);
    const gr = ctx.createRadialGradient(b.x, b.y, 1, b.x, b.y, b.r * 2.2 * pulse);
    gr.addColorStop(0, fire ? '#fff2d0' : '#f0e0ff'); gr.addColorStop(0.35, fire ? 'rgba(255,110,40,0.95)' : 'rgba(140,76,255,0.95)'); gr.addColorStop(1, fire ? 'rgba(255,40,0,0)' : 'rgba(60,0,140,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(b.x, b.y, b.r * 2.2 * pulse, 0, TAU); ctx.fill();
    ctx.strokeStyle = fire ? 'rgba(255,120,40,0.35)' : 'rgba(150,90,255,0.35)'; ctx.lineWidth = b.r;
    ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(b.x - b.vx * 0.08, b.y - b.vy * 0.08); ctx.stroke();
  }
  ctx.globalCompositeOperation = 'source-over';
  // damage numbers
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (const n of G.nums) {
    const a = 1 - Math.max(0, n.t - 0.4) / 0.3;
    const pop = n.t < 0.09 ? 1.8 - (n.t / 0.09) * 0.8 : 1; // numbers slam in, then settle
    ctx.globalAlpha = a;
    ctx.save(); ctx.translate(n.x, n.y); ctx.scale(pop, pop);
    const size = n.crit ? 19 : n.big ? 16 : n.mine ? 16 : 13;
    ctx.font = `700 ${size}px "Gowun Dodum", sans-serif`;
    const txt = n.crit ? n.v + '!' : n.v;
    ctx.lineWidth = n.crit ? 4 : 3; ctx.strokeStyle = n.crit ? 'rgba(90,20,0,0.95)' : 'rgba(0,0,0,0.85)'; ctx.strokeText(txt, 0, 0);
    ctx.fillStyle = n.mine ? '#ff5a4a' : n.heal ? '#7dffa8' : n.crit ? '#ffb43a' : n.big ? '#ffe9b8' : '#ffffff';
    ctx.fillText(txt, 0, 0);
    ctx.restore();
  }
  ctx.globalAlpha = 1;
  // eclipse darkness: a light pool around the hero, deepening as the night goes on
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  const px = (p.x - camX) * Z, py = (p.y - 20 - camY) * Z;
  const night = 0.35 + 0.35 * Math.min(1, G.t / RUN_LEN);
  const vg = ctx.createRadialGradient(px, py, Math.min(SW, SH) * 0.22, px, py, Math.hypot(SW, SH) * 0.62);
  vg.addColorStop(0, 'rgba(10,4,16,0)'); vg.addColorStop(1, `rgba(10,4,16,${night})`);
  ctx.fillStyle = vg; ctx.fillRect(0, 0, SW, SH);
  if (G.boss) { ctx.fillStyle = `rgba(120,10,20,${0.08 + 0.05 * Math.sin(G.t * 3)})`; ctx.fillRect(0, 0, SW, SH); }
  if (G.blood > 0) { // blood moon: everything soaks red and pulses
    const fade = Math.min(1, G.blood, BLOOD_LEN - G.blood);
    ctx.fillStyle = `rgba(150,0,20,${(0.16 + 0.06 * Math.sin(G.t * 5)) * fade})`; ctx.fillRect(0, 0, SW, SH);
  }
  drawEdgeWarn();
  drawDanger(px, py);
  drawOffscreen(camX, camY, Z);
  for (const f of G.fx) if (f.k === 'flash') { ctx.fillStyle = `rgba(${f.col},${0.18 * (1 - f.t / f.dur)})`; ctx.fillRect(0, 0, SW, SH); }
  if (p.hurtT > 0) { ctx.fillStyle = `rgba(200,20,20,${p.hurtT * 0.6})`; ctx.fillRect(0, 0, SW, SH); }
  drawHUD();
  if (joy.on) {
    ctx.strokeStyle = 'rgba(233,215,168,0.35)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(joy.ox, joy.oy, 50, 0, TAU); ctx.stroke();
    const jx = joy.x - joy.ox, jy = joy.y - joy.oy, l = Math.hypot(jx, jy), k = l > 50 ? 50 / l : 1;
    ctx.fillStyle = 'rgba(233,215,168,0.45)'; ctx.beginPath(); ctx.arc(joy.ox + jx * k, joy.oy + jy * k, 18, 0, TAU); ctx.fill();
  }
}
// red glow on the edge a charge is coming from, or all round for an encirclement
function drawEdgeWarn() {
  const w = G.edgeWarn;
  if (!w) return;
  const pulse = 0.5 + 0.5 * Math.sin(w.t * 18), a = (0.25 + 0.35 * pulse) * Math.min(1, (w.dur - w.t) * 4);
  if (w.a === null) {
    const g = ctx.createRadialGradient(SW / 2, SH / 2, Math.min(SW, SH) * 0.3, SW / 2, SH / 2, Math.hypot(SW, SH) * 0.55);
    g.addColorStop(0, 'rgba(255,30,30,0)'); g.addColorStop(1, `rgba(255,30,30,${a})`);
    ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH);
    return;
  }
  const cx = SW / 2 + Math.cos(w.a) * SW, cy = SH / 2 + Math.sin(w.a) * SH;
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(SW, SH) * 0.95);
  g.addColorStop(0, `rgba(255,30,30,${a * 1.4})`); g.addColorStop(1, 'rgba(255,30,30,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH);
  // chevrons pointing at the threat
  const ex = SW / 2 + Math.cos(w.a) * (SW / 2 - 50), ey = SH / 2 + Math.sin(w.a) * (SH / 2 - 60);
  ctx.save(); ctx.translate(clamp(ex, 40, SW - 40), clamp(ey, 80, SH - 40)); ctx.rotate(w.a);
  ctx.strokeStyle = `rgba(255,220,200,${0.5 + 0.5 * pulse})`; ctx.lineWidth = 4; ctx.lineCap = 'round';
  for (let i = 0; i < 3; i++) { const o = i * 14 - ((w.t * 40) % 14); ctx.beginPath(); ctx.moveTo(o - 8, -12); ctx.lineTo(o + 4, 0); ctx.lineTo(o - 8, 12); ctx.stroke(); }
  ctx.restore();
}
function drawDanger(px, py) {
  const p = G.p, r = p.hp / p.maxhp;
  if (r >= 0.35) return;
  const beat = Math.pow(Math.max(0, Math.sin(G.t * 8.4)), 6), a = (0.35 - r) / 0.35 * (0.35 + 0.35 * beat);
  const g = ctx.createRadialGradient(px, py, Math.min(SW, SH) * 0.25, px, py, Math.hypot(SW, SH) * 0.6);
  g.addColorStop(0, 'rgba(200,0,0,0)'); g.addColorStop(1, `rgba(200,0,0,${a})`);
  ctx.fillStyle = g; ctx.fillRect(0, 0, SW, SH);
}
// arrows on the screen edge for elites, bosses and chests out of view
function drawOffscreen(camX, camY, Z) {
  const marks = [];
  for (const e of G.foes) if (e.elite || e.boss) marks.push([e.x, e.y - 20, e.boss ? '#ff4a3a' : '#ffcf7a', e.boss ? 13 : 9]);
  for (const g of G.gems) if (g.kind === 'chest') marks.push([g.x, g.y, '#7fe0ff', 9]);
  for (const [x, y, col, size] of marks) {
    const sx = (x - camX) * Z, sy = (y - camY) * Z;
    if (sx > 0 && sx < SW && sy > 70 && sy < SH) continue;
    const cx = SW / 2, cy = SH / 2, a = Math.atan2(sy - cy, sx - cx);
    const k = Math.min(Math.abs((SW / 2 - 22) / (Math.cos(a) || 1e-6)), Math.abs((SH / 2 - 30) / (Math.sin(a) || 1e-6)));
    const ex = clamp(cx + Math.cos(a) * k, 22, SW - 22), ey = clamp(cy + Math.sin(a) * k, 84, SH - 22);
    ctx.save(); ctx.translate(ex, ey); ctx.rotate(a);
    ctx.fillStyle = col; ctx.globalAlpha = 0.65 + 0.35 * Math.sin(G.t * 8);
    ctx.beginPath(); ctx.moveTo(size, 0); ctx.lineTo(-size * 0.7, -size * 0.75); ctx.lineTo(-size * 0.7, size * 0.75); ctx.closePath(); ctx.fill();
    ctx.restore(); ctx.globalAlpha = 1;
  }
}
function drawPlayer() {
  const p = G.p, sh = G.hero.sheet;
  shadow(p.x, p.y, 14);
  if (p.inv > 0 && Math.floor(p.inv * 20) % 2 === 0) ctx.globalAlpha = 0.5;
  const info = sheetInfo(sh);
  let row = 8 + p.dir, col = walkFrame(sh, p.walkT, p.moving);
  if (p.act && info.atk) { row = info.atk.row + p.dir; col = Math.min(info.atk.frames - 1, Math.floor(p.act.t / info.atk.ft)); }
  if (info.diag && p.diag >= 0) row = 21 + Math.floor(row / 4) * 4 + p.diag;
  drawSprite(sh, p.x, p.y, info.hero || 1, row, col);
  ctx.globalAlpha = 1;
  // hp bar under the feet
  const w = 36, pct = clamp(p.hp / p.maxhp, 0, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(p.x - w / 2 - 1, p.y + 6, w + 2, 5);
  ctx.fillStyle = pct > 0.3 ? '#c3272b' : '#ff4a3a'; ctx.fillRect(p.x - w / 2, p.y + 7, w * pct, 3);
  const dc = 1 - p.dashCd / 1.4; // dash readiness under the health bar
  ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(p.x - w / 2, p.y + 12, w, 2);
  ctx.fillStyle = dc >= 1 ? '#8ad4ff' : 'rgba(138,212,255,0.45)'; ctx.fillRect(p.x - w / 2, p.y + 12, w * dc, 2);
}
function drawFoe(e) {
  const sh = e.d.sheet;
  shadow(e.x, e.y, e.r * 1.05);
  let img = IMG[sh];
  if (e.d.tint) img = variant(sh, e.d.tint) || img;
  if (e.elite) img = variant(sh, 'rgba(255,200,80,0.35)') || img;
  if (e.frozen > 0) img = variant(sh, 'rgba(170,220,255,0.6)') || img;
  let col = e.frozen > 0 || !e.moving ? 0 : 1 + (Math.floor(e.walkT) % 8), row = 8 + e.dir;
  if (e.atk && !(e.frozen > 0)) { row = FOE_ATK.row + e.dir; col = Math.min(FOE_ATK.frames - 1, Math.floor(e.atk.t / FOE_ATK.ft)); }
  if (e.cast && !(e.frozen > 0)) {
    row = CAST.row + e.dir; col = Math.min(CAST.frames - 1, Math.floor(e.cast.t / CAST.ft));
    const glow = Math.min(1, e.cast.t / (CAST.ft * CAST.hit));
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = e.d.ranged === 'void' ? `rgba(150,80,255,${0.5 * glow})` : `rgba(255,120,40,${0.5 * glow})`;
    ctx.beginPath(); ctx.arc(e.x, e.y - 40 * e.s, 4 + 8 * glow, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }
  if (e.chg === 'wind') { e.x += rand(-1.2, 1.2); col = 0; }
  if (e.elite || e.boss) {
    ctx.globalCompositeOperation = 'lighter';
    const gr = ctx.createRadialGradient(e.x, e.y - 20 * e.s, 2, e.x, e.y - 20 * e.s, 34 * e.s);
    gr.addColorStop(0, e.boss ? 'rgba(200,40,60,0.35)' : 'rgba(255,190,80,0.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(e.x, e.y - 20 * e.s, 34 * e.s, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }
  drawSprite(sh, e.x, e.y, e.s, row, col, img);
  if (e.flash > 0) { ctx.globalAlpha = Math.min(1, e.flash * 8) * 0.8; drawSprite(sh, e.x, e.y, e.s, row, col, variant(sh, 'rgba(255,255,255,1)')); ctx.globalAlpha = 1; }
  if (e.elite && e.hp < e.maxhp) {
    const w = 40; ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(e.x - w / 2, e.y + 6, w, 4);
    ctx.fillStyle = '#ffcf7a'; ctx.fillRect(e.x - w / 2, e.y + 6, w * clamp(e.hp / e.maxhp, 0, 1), 4);
  }
}
function drawPickup(g) {
  const bob = Math.sin(G.t * 4 + g.bob) * 2;
  if (g.kind === 'xp') {
    const big = g.v >= 20, mid = g.v >= 4, r = big ? 6 : mid ? 4.5 : 3.5;
    const core = big ? '#ff8a7a' : mid ? '#8affc4' : '#8ac8ff', glow = big ? '255,80,60' : mid ? '60,220,140' : '70,150,255';
    ctx.fillStyle = `rgba(${glow},0.25)`; ctx.beginPath(); ctx.arc(g.x, g.y + bob, r * 2.2, 0, TAU); ctx.fill();
    ctx.fillStyle = core; ctx.beginPath(); ctx.arc(g.x, g.y + bob, r, 0, TAU); ctx.fill();
    ctx.fillStyle = '#ffffff'; ctx.fillRect(g.x - r * 0.45, g.y + bob - r * 0.5, r * 0.5, r * 0.5);
  } else if (g.kind === 'gold') { // 엽전: round coin with a square hole
    ctx.fillStyle = '#7a5a1c'; ctx.beginPath(); ctx.arc(g.x, g.y + bob + 1, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = '#e8c35a'; ctx.beginPath(); ctx.arc(g.x, g.y + bob, 6, 0, TAU); ctx.fill();
    ctx.fillStyle = '#5c4314'; ctx.fillRect(g.x - 2, g.y + bob - 2, 4, 4);
  } else if (g.kind === 'heal') { // 약과
    ctx.fillStyle = '#7a3c12'; ctx.beginPath(); ctx.arc(g.x, g.y + bob, 8, 0, TAU); ctx.fill();
    ctx.fillStyle = '#c4732a';
    for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; ctx.beginPath(); ctx.arc(g.x + Math.cos(a) * 6, g.y + bob + Math.sin(a) * 6, 3, 0, TAU); ctx.fill(); }
    ctx.fillStyle = '#e8a65a'; ctx.beginPath(); ctx.arc(g.x, g.y + bob, 4, 0, TAU); ctx.fill();
  } else if (g.kind === 'vacuum') {
    ctx.fillStyle = 'rgba(160,120,255,0.35)'; ctx.beginPath(); ctx.arc(g.x, g.y + bob, 14, 0, TAU); ctx.fill();
    const im = icon('sparkles'); if (im.complete) ctx.drawImage(im, g.x - 11, g.y + bob - 11, 22, 22);
  } else if (g.kind === 'chest') {
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = `rgba(255,200,90,${0.25 + 0.15 * Math.sin(G.t * 5)})`; ctx.beginPath(); ctx.arc(g.x, g.y - 6, 26, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    const im = icon('chest'); if (im.complete) ctx.drawImage(im, g.x - 16, g.y - 22 + bob, 32, 32);
  }
}
function drawDecal(d) {
  const k = d.t / d.dur, a = 1 - k * k;
  if (d.k === 'scorch') {
    const gr = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
    gr.addColorStop(0, `rgba(12,8,6,${0.55 * a})`); gr.addColorStop(0.7, `rgba(20,12,8,${0.3 * a})`); gr.addColorStop(1, 'rgba(20,12,8,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(d.x, d.y, d.r, d.r * 0.65, 0, 0, TAU); ctx.fill();
  } else if (d.k === 'crack') { // ground split by the shockwave
    ctx.strokeStyle = `rgba(18,12,8,${0.8 * a})`; ctx.lineWidth = 3; ctx.lineCap = 'round';
    for (let i = 0; i < 9; i++) {
      const base = (i / 9) * TAU + hash(i, 1, d.seed) * 0.5;
      let x = d.x, y = d.y;
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let j = 1; j <= 4; j++) {
        const a2 = base + (hash(i, j, d.seed) - 0.5) * 0.7, r = d.r * (0.2 + 0.2 * j) * (0.7 + 0.5 * hash(i, j + 9, d.seed));
        x = d.x + Math.cos(a2) * r; y = d.y + Math.sin(a2) * r * 0.65; ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.strokeStyle = `rgba(255,170,90,${0.35 * a * (1 - k)})`; ctx.lineWidth = 1; ctx.stroke();
  } else if (d.k === 'glow') {
    ctx.globalCompositeOperation = 'lighter';
    const gr = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
    gr.addColorStop(0, `rgba(255,230,160,${0.35 * a})`); gr.addColorStop(1, 'rgba(255,230,160,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(d.x, d.y, d.r, d.r * 0.65, 0, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }
}
function drawZone(z) {
  const k = z.t / z.dur, a = Math.min(1, z.t * 6) * (1 - k * k);
  if (z.poison) { // a low green fog of drifting puffs
    for (let i = 0; i < 6; i++) {
      const ang = (i / 6) * TAU + G.t * 0.6 + (z.seed || 0), rr = z.r * 0.45;
      const x = z.x + Math.cos(ang) * rr, y = z.y + Math.sin(ang) * rr * 0.6, r = z.r * (0.55 + 0.1 * Math.sin(G.t * 3 + i));
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${z.col},${0.4 * a})`); gr.addColorStop(1, `rgba(${z.col},0)`);
      ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.7, 0, 0, TAU); ctx.fill();
    }
    return;
  }
  const gr = ctx.createRadialGradient(z.x, z.y, 0, z.x, z.y, z.r);
  if (z.fire) {
    ctx.globalCompositeOperation = 'lighter';
    const fl = 0.8 + 0.2 * Math.sin(G.t * 20 + z.x);
    gr.addColorStop(0, `rgba(255,220,120,${0.4 * a * fl})`); gr.addColorStop(0.5, `rgba(${z.col},${0.3 * a * fl})`); gr.addColorStop(1, `rgba(${z.col},0)`);
  } else { gr.addColorStop(0, `rgba(${z.col},${0.35 * a})`); gr.addColorStop(1, `rgba(${z.col},0)`); }
  ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(z.x, z.y, z.r, z.r * 0.7, 0, 0, TAU); ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
}
function drawTrail(s, col, w) {
  const t = s.trail;
  if (!t || t.length < 4) return;
  ctx.globalCompositeOperation = 'lighter'; ctx.lineCap = 'round';
  for (let i = 2; i < t.length; i += 2) {
    ctx.strokeStyle = `rgba(${col},${(i / t.length) * 0.5})`; ctx.lineWidth = w * (i / t.length);
    ctx.beginPath(); ctx.moveTo(t[i - 2], t[i - 1]); ctx.lineTo(t[i], t[i + 1]); ctx.stroke();
  }
  ctx.globalCompositeOperation = 'source-over';
}
function drawShot(s) {
  if (s.k === 'orb') {
    ctx.globalCompositeOperation = 'lighter';
    const R = s.r * (s.evo ? 1.3 : 1);
    const gr = ctx.createRadialGradient(s.x, s.y, 1, s.x, s.y, R * 2.2);
    gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.3, 'rgba(150,215,255,0.9)'); gr.addColorStop(1, 'rgba(60,140,255,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(s.x, s.y, R * 2.2, 0, TAU); ctx.fill();
    ctx.strokeStyle = 'rgba(220,245,255,0.85)'; ctx.lineWidth = 1.5;
    for (let i = 0; i < 6; i++) { const a = s.spin + (i / 6) * TAU; ctx.beginPath(); ctx.moveTo(s.x + Math.cos(a) * R * 0.3, s.y + Math.sin(a) * R * 0.3); ctx.lineTo(s.x + Math.cos(a) * R * 1.3, s.y + Math.sin(a) * R * 1.3); ctx.stroke(); }
    ctx.globalCompositeOperation = 'source-over';
    return;
  }
  if (s.k === 'shard') {
    const a = Math.atan2(s.vy, s.vx);
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(a);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = 'rgba(140,200,255,0.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-14, 0); ctx.lineTo(0, 0); ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#e8f7ff'; ctx.beginPath(); ctx.moveTo(7, 0); ctx.lineTo(0, -2.5); ctx.lineTo(-5, 0); ctx.lineTo(0, 2.5); ctx.fill();
    ctx.restore();
    return;
  }
  if (s.k === 'phoenix') { // body of flame, beating wings, a streaming tail
    const a = Math.atan2(s.vy, s.vx), z = s.size, flap = Math.sin(s.t * 22);
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(a); ctx.scale(z, z);
    ctx.globalCompositeOperation = 'lighter';
    const tail = ctx.createLinearGradient(-90, 0, 0, 0);
    tail.addColorStop(0, 'rgba(255,60,20,0)'); tail.addColorStop(1, 'rgba(255,150,40,0.8)');
    ctx.fillStyle = tail; ctx.beginPath(); ctx.moveTo(0, -6); ctx.quadraticCurveTo(-50, -14 - flap * 4, -95, -4); ctx.quadraticCurveTo(-50, 14 + flap * 4, 0, 6); ctx.fill();
    for (const side of [-1, 1]) {
      const wg = ctx.createLinearGradient(0, 0, -10, side * 40);
      wg.addColorStop(0, 'rgba(255,230,140,0.95)'); wg.addColorStop(1, 'rgba(255,70,20,0.1)');
      ctx.fillStyle = wg; ctx.beginPath(); ctx.moveTo(6, 0);
      ctx.quadraticCurveTo(-4, side * (30 + flap * 14), -26, side * (38 + flap * 18));
      ctx.quadraticCurveTo(-14, side * 12, -16, 0); ctx.fill();
    }
    const body = ctx.createRadialGradient(4, 0, 1, 0, 0, 18);
    body.addColorStop(0, '#fffbe6'); body.addColorStop(0.4, 'rgba(255,190,70,0.95)'); body.addColorStop(1, 'rgba(255,80,20,0)');
    ctx.fillStyle = body; ctx.beginPath(); ctx.ellipse(0, 0, 20, 10, 0, 0, TAU); ctx.fill();
    ctx.restore(); ctx.globalCompositeOperation = 'source-over';
    return;
  }
  if (s.k === 'fly') { // a hovering then darting sword with a pale streak
    drawTrail(s, '170,210,255', 6);
    const a = s.wait > 0 ? -Math.PI / 2 + s.slot * 0.4 : Math.atan2(s.vy, s.vx);
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(a);
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = 'rgba(150,200,255,0.25)'; ctx.beginPath(); ctx.ellipse(2, 0, 20, 6, 0, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#dfe7ee'; ctx.beginPath(); ctx.moveTo(18, 0); ctx.lineTo(-2, -2.6); ctx.lineTo(-2, 2.6); ctx.fill();
    ctx.fillStyle = '#ffffff'; ctx.fillRect(-2, -0.6, 17, 1.2);
    ctx.fillStyle = '#c9a45c'; ctx.fillRect(-4, -5, 2.5, 10);
    ctx.fillStyle = '#3a2a1c'; ctx.fillRect(-11, -1.5, 7, 3);
    ctx.fillStyle = '#b3241c'; ctx.fillRect(-13, -1, 2, 2);
    ctx.restore();
    return;
  }
  if (s.k === 'flask') { // 호리병: a green glass gourd tumbling through the air
    ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.beginPath(); ctx.ellipse(s.sx + (s.tx - s.sx) * (1 - s.life / s.dur0), s.sy + (s.ty - s.sy) * (1 - s.life / s.dur0) + 36, 7, 3, 0, 0, TAU); ctx.fill();
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(s.spin);
    ctx.fillStyle = 'rgba(120,220,100,0.9)'; ctx.beginPath(); ctx.arc(0, 4, 6, 0, TAU); ctx.fill(); ctx.beginPath(); ctx.arc(0, -4, 4, 0, TAU); ctx.fill();
    ctx.fillStyle = '#e8fbd8'; ctx.fillRect(-2, 1, 2, 3);
    ctx.fillStyle = '#8a5a2a'; ctx.fillRect(-1.5, -10, 3, 3);
    ctx.restore();
    return;
  }
  if (s.k === 'arrow') {
    drawTrail(s, '200,255,220', 3);
    const a = Math.atan2(s.vy, s.vx);
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(a);
    ctx.strokeStyle = 'rgba(200,255,220,0.35)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-26, 0); ctx.lineTo(-6, 0); ctx.stroke();
    ctx.fillStyle = '#e9d7a8'; ctx.fillRect(-14, -1, 18, 2);
    ctx.fillStyle = '#e6f6ff'; ctx.beginPath(); ctx.moveTo(9, 0); ctx.lineTo(3, -3.5); ctx.lineTo(3, 3.5); ctx.fill();
    ctx.fillStyle = '#5fbf9a'; ctx.fillRect(-16, -3, 4, 2); ctx.fillRect(-16, 1, 4, 2);
    ctx.restore();
  } else if (s.k === 'fox') {
    ctx.globalCompositeOperation = 'lighter';
    const c = s.burn ? '255,110,200' : '255,150,60';
    const gr = ctx.createRadialGradient(s.x, s.y, 1, s.x, s.y, 16);
    gr.addColorStop(0, '#fff6e0'); gr.addColorStop(0.35, `rgba(${c},0.9)`); gr.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(s.x, s.y, 16, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  } else if (s.k === 'whirl') {
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(s.spin);
    const r = s.r;
    ctx.fillStyle = 'rgba(200,230,255,0.18)'; ctx.beginPath(); ctx.arc(0, 0, r * 1.3, 0, TAU); ctx.fill();
    ctx.fillStyle = '#cfd6dd'; ctx.strokeStyle = '#4b5560'; ctx.lineWidth = 1.5;
    for (let i = 0; i < 4; i++) { ctx.rotate(TAU / 4); ctx.beginPath(); ctx.moveTo(0, -3); ctx.quadraticCurveTo(r * 0.8, -r * 0.6, r, 0); ctx.lineTo(0, 3); ctx.fill(); ctx.stroke(); }
    ctx.fillStyle = '#7a6232'; ctx.beginPath(); ctx.arc(0, 0, 4, 0, TAU); ctx.fill();
    ctx.restore();
  }
}
function drawTalismans() {
  const w = wget('talisman');
  if (!w || w.on <= 0) return;
  const st = wstats(w), p = G.p, R = 74 * st.area;
  for (let i = 0; i < st.amount; i++) {
    const a = w.ang + (i / st.amount) * TAU, x = p.x + Math.cos(a) * R, y = p.y - 16 + Math.sin(a) * R * 0.85;
    const sz = 14 * st.area;
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = w.evo ? (i % 2 ? 'rgba(160,190,255,0.35)' : 'rgba(255,190,90,0.4)') : 'rgba(255,90,60,0.3)';
    ctx.beginPath(); ctx.arc(x, y, sz * 1.4, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    // 부적: yellow paper slip with red brush strokes
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(G.t * 6 + i) * 0.25);
    ctx.fillStyle = '#f2d36b'; ctx.fillRect(-sz * 0.38, -sz * 0.7, sz * 0.76, sz * 1.4);
    ctx.strokeStyle = '#b3241c'; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.moveTo(0, -sz * 0.55); ctx.lineTo(0, sz * 0.5); ctx.moveTo(-sz * 0.22, -sz * 0.25); ctx.lineTo(sz * 0.22, -sz * 0.25);
    ctx.moveTo(-sz * 0.2, sz * 0.05); ctx.lineTo(sz * 0.2, sz * 0.2); ctx.stroke();
    ctx.restore();
  }
}
function drawFx(f) {
  const p = G.p, k = f.t / f.dur;
  switch (f.k) {
    case 'swing': { // sword trail: a crescent that sweeps around the body, thick at the blade, thin at the tail
      const cx = p.x, cy = p.y - 20, sq = 0.78, sweepEnd = 0.55;
      const u = Math.min(1, f.t / (f.dur * sweepEnd)), ease = 1 - (1 - u) * (1 - u) * (1 - u);
      const fade = f.t < f.dur * sweepEnd ? 1 : 1 - (f.t - f.dur * sweepEnd) / (f.dur * (1 - sweepEnd));
      const sgn = f.side, a0 = f.a - f.half * sgn, head = a0 + 2 * f.half * sgn * ease;
      const trail = Math.min(Math.abs(head - a0), f.evo ? 4.2 : 1.9);
      const N = 18, R = f.R * 0.82, col = f.evo ? '255,215,140' : '255,96,52';
      const pt = (s, r) => { const th = head - sgn * trail * (1 - s); return [cx + Math.cos(th) * r, cy + Math.sin(th) * r * sq]; };
      const outer = (s) => R * (0.9 + 0.1 * s), inner = (s) => R * (0.9 - 0.3 * Math.pow(s, 1.6));
      ctx.globalCompositeOperation = 'lighter';
      for (let i = 0; i < N; i++) {
        const s0 = i / N, s1 = (i + 1) / N;
        ctx.fillStyle = `rgba(${col},${fade * s1 * s1 * 0.95})`;
        const [x0, y0] = pt(s0, outer(s0)), [x1, y1] = pt(s1, outer(s1)), [x2, y2] = pt(s1, inner(s1)), [x3, y3] = pt(s0, inner(s0));
        ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.closePath(); ctx.fill();
      }
      ctx.strokeStyle = `rgba(255,244,220,${fade * 0.95})`; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
      ctx.beginPath();
      for (let i = 0; i <= N; i++) { const s = i / N; if (s < 0.35) continue; const [x, y] = pt(s, outer(s)); if (s < 0.36) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'twang': { // bowstring snap at the release point
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `rgba(200,255,230,${1 - k})`; ctx.lineWidth = 2;
      for (const d of [-0.5, 0, 0.5]) {
        const a = f.a + Math.PI + d, r0 = 4 + 10 * k, r1 = 10 + 14 * k;
        ctx.beginPath(); ctx.moveTo(f.x + Math.cos(a) * r0, f.y + Math.sin(a) * r0); ctx.lineTo(f.x + Math.cos(a) * r1, f.y + Math.sin(a) * r1); ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'claw': { // a foe's club/claw connecting
      ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.a); ctx.scale(f.s, f.s);
      ctx.strokeStyle = `rgba(255,235,220,${0.85 * (1 - k)})`; ctx.lineWidth = 2; ctx.lineCap = 'round';
      for (let i = -1; i <= 1; i++) { ctx.beginPath(); ctx.arc(-6, i * 5, 12 + 4 * k, -0.7, 0.7); ctx.stroke(); }
      ctx.restore();
      break;
    }
    case 'ring': {
      const x = f.follow ? p.x : f.x, y = f.follow ? p.y - 14 : f.y;
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `rgba(${f.col},${1 - k})`; ctx.lineWidth = 14 * (1 - k) + 2;
      ctx.beginPath(); ctx.ellipse(x, y, f.r * (0.5 + 0.5 * k), f.r * 0.8 * (0.5 + 0.5 * k), 0, 0, TAU); ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'boom': {
      ctx.globalCompositeOperation = 'lighter';
      const r = f.r * (0.4 + 0.6 * k);
      const gr = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r);
      gr.addColorStop(0, `rgba(255,250,220,${1 - k})`); gr.addColorStop(0.5, `rgba(${f.col},${0.7 * (1 - k)})`); gr.addColorStop(1, `rgba(${f.col},0)`);
      ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(f.x, f.y, r, r * 0.8, 0, 0, TAU); ctx.fill();
      if (k < 0.35) { ctx.fillStyle = `rgba(255,255,255,${0.9 * (1 - k / 0.35)})`; ctx.beginPath(); ctx.ellipse(f.x, f.y, f.r * 0.35, f.r * 0.28, 0, 0, TAU); ctx.fill(); }
      ctx.strokeStyle = `rgba(${f.col},${0.7 * (1 - k)})`; ctx.lineWidth = 3 * (1 - k) + 0.5;
      ctx.beginPath(); ctx.ellipse(f.x, f.y, f.r * (0.6 + 0.7 * k), f.r * 0.8 * (0.6 + 0.7 * k), 0, 0, TAU); ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'bolt': case 'chain': {
      const x1 = f.k === 'bolt' ? f.x + 20 : f.x1, y1 = f.k === 'bolt' ? f.y - 420 : f.y1, x2 = f.k === 'bolt' ? f.x : f.x2, y2 = f.k === 'bolt' ? f.y : f.y2;
      ctx.globalCompositeOperation = 'lighter';
      for (const [w, c] of [[16, `rgba(90,140,255,${0.25 * (1 - k)})`], [8, `rgba(130,180,255,${0.55 * (1 - k)})`], [3, `rgba(245,250,255,${1 - k})`]]) {
        ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x1, y1);
        const n = 9;
        for (let i = 1; i < n; i++) {
          const t = i / n, j = (hash(i, Math.floor(f.t * 30), f.seed | 0 || 3) - 0.5) * 30;
          ctx.lineTo(x1 + (x2 - x1) * t + j, y1 + (y2 - y1) * t + j * 0.3);
        }
        ctx.lineTo(x2, y2); ctx.stroke();
      }
      if (f.k === 'bolt') {
        ctx.fillStyle = `rgba(200,225,255,${0.6 * (1 - k)})`; ctx.beginPath(); ctx.ellipse(x2, y2 + 10, 40, 16, 0, 0, TAU); ctx.fill();
        ctx.strokeStyle = `rgba(200,230,255,${0.7 * (1 - k)})`; ctx.lineWidth = 1.5; // side forks
        for (let b = 0; b < 3; b++) {
          const t0 = 0.3 + b * 0.2, bx = x1 + (x2 - x1) * t0, by = y1 + (y2 - y1) * t0, dir = hash(b, 7, f.seed | 0) < 0.5 ? -1 : 1;
          ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx + dir * 22, by + 26); ctx.lineTo(bx + dir * 30, by + 54); ctx.stroke();
        }
      }
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'meteor': {
      const y = f.y - 520 * (1 - k), x = f.x - 260 * (1 - k);
      ctx.globalCompositeOperation = 'lighter';
      const c = f.evo ? '170,110,255' : '255,140,50';
      ctx.strokeStyle = `rgba(${c},0.5)`; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(x - 120, y - 240); ctx.lineTo(x, y); ctx.stroke();
      const gr = ctx.createRadialGradient(x, y, 1, x, y, 22);
      gr.addColorStop(0, '#fffbe8'); gr.addColorStop(0.4, `rgba(${c},0.9)`); gr.addColorStop(1, `rgba(${c},0)`);
      ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(x, y, 22, 0, TAU); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'rainArrow': {
      const y = f.y - 200 * (1 - k);
      ctx.strokeStyle = 'rgba(220,255,230,0.8)'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(f.x - 30 * (1 - k) - 10, y - 24); ctx.lineTo(f.x - 30 * (1 - k), y); ctx.stroke();
      break;
    }
    case 'spark': {
      const a = 1 - k, sz = f.sz || 3; ctx.fillStyle = f.col; ctx.globalAlpha = a; ctx.fillRect(f.x - sz / 2, f.y - sz / 2, sz, sz); ctx.globalAlpha = 1;
      break;
    }
    case 'hit': { // a quick four-point spark where the blow lands
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = f.crit ? `rgba(255,210,110,${1 - k})` : `rgba(255,255,255,${0.9 * (1 - k)})`; ctx.lineWidth = f.crit ? 2.5 : 1.6;
      const r0 = 2 + 6 * k, r1 = (f.crit ? 20 : 11) + 8 * k;
      if (f.ka !== undefined && !Number.isNaN(f.ka)) { // a slash streak along the blow
        ctx.strokeStyle = `rgba(255,${f.crit ? 200 : 240},${f.crit ? 120 : 230},${0.8 * (1 - k)})`; ctx.lineWidth = (f.crit ? 4 : 2.5) * (1 - k);
        const ca = Math.cos(f.ka + 0.6), sa = Math.sin(f.ka + 0.6), L = f.crit ? 22 : 14;
        ctx.beginPath(); ctx.moveTo(f.x - ca * L, f.y - sa * L); ctx.lineTo(f.x + ca * L, f.y + sa * L); ctx.stroke();
        ctx.strokeStyle = f.crit ? `rgba(255,210,110,${1 - k})` : `rgba(255,255,255,${0.9 * (1 - k)})`; ctx.lineWidth = f.crit ? 2.5 : 1.6;
      }
      ctx.beginPath();
      for (let i = 0; i < 4; i++) { const a = f.a + (i * Math.PI) / 2; ctx.moveTo(f.x + Math.cos(a) * r0, f.y + Math.sin(a) * r0); ctx.lineTo(f.x + Math.cos(a) * r1, f.y + Math.sin(a) * r1); }
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'quake': {
      const r = f.R * (0.15 + 0.85 * (1 - (1 - k) * (1 - k)));
      ctx.strokeStyle = f.evo ? `rgba(255,200,110,${0.8 * (1 - k)})` : `rgba(210,170,120,${0.75 * (1 - k)})`; ctx.lineWidth = 12 * (1 - k) + 2;
      ctx.beginPath(); ctx.ellipse(f.x, f.y, r, r * 0.65, 0, 0, TAU); ctx.stroke();
      ctx.strokeStyle = `rgba(90,70,50,${0.5 * (1 - k)})`; ctx.lineWidth = 20 * (1 - k);
      ctx.beginPath(); ctx.ellipse(f.x, f.y, r * 0.8, r * 0.52, 0, 0, TAU); ctx.stroke();
      break;
    }
    case 'pillar': { // a shaft of light from the sky
      const grow = Math.min(1, k * 6), fade = k < 0.5 ? 1 : 1 - (k - 0.5) / 0.5, w = f.r * 0.75 * (0.6 + 0.4 * grow) * (0.4 + 0.6 * fade);
      ctx.globalCompositeOperation = 'lighter';
      const top = f.y - 720;
      const lg = ctx.createLinearGradient(f.x - w, 0, f.x + w, 0);
      lg.addColorStop(0, 'rgba(255,220,140,0)'); lg.addColorStop(0.35, `rgba(255,230,160,${0.55 * fade})`); lg.addColorStop(0.5, `rgba(255,255,240,${0.95 * fade})`);
      lg.addColorStop(0.65, `rgba(255,230,160,${0.55 * fade})`); lg.addColorStop(1, 'rgba(255,220,140,0)');
      ctx.fillStyle = lg; ctx.fillRect(f.x - w, top, w * 2, (f.y - top) * grow);
      const gr = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 1.2);
      gr.addColorStop(0, `rgba(255,250,220,${0.8 * fade})`); gr.addColorStop(1, 'rgba(255,220,140,0)');
      ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(f.x, f.y, f.r * 1.2, f.r * 0.75, 0, 0, TAU); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'mote': {
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = `rgba(255,235,170,${1 - k})`; ctx.beginPath(); ctx.arc(f.x, f.y, 2.2 * (1 - k) + 0.8, 0, TAU); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'feather': {
      ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.r);
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = `rgba(255,${150 + 80 * (1 - k)},60,${0.8 * (1 - k)})`; ctx.beginPath(); ctx.ellipse(0, 0, 5, 1.8, 0, 0, TAU); ctx.fill();
      ctx.restore(); ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'snow': {
      ctx.strokeStyle = `rgba(235,248,255,${0.9 * Math.sin(k * Math.PI)})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(f.x - 2.5, f.y); ctx.lineTo(f.x + 2.5, f.y); ctx.moveTo(f.x, f.y - 2.5); ctx.lineTo(f.x, f.y + 2.5); ctx.stroke();
      break;
    }
    case 'bubble': {
      ctx.strokeStyle = `rgba(190,250,150,${0.8 * (1 - k)})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(f.x, f.y, 2 + 3 * k, 0, TAU); ctx.stroke();
      break;
    }
    case 'flash': case 'ghost': case 'corpse': break; // drawn elsewhere
    case 'soul': { // a wisp of the spirit leaving the body
      ctx.globalCompositeOperation = 'lighter';
      const a = 1 - k, r = 7 * (1 - k * 0.5);
      const gr = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r * 2);
      gr.addColorStop(0, `rgba(230,245,255,${0.8 * a})`); gr.addColorStop(0.4, `rgba(${f.col},${0.5 * a})`); gr.addColorStop(1, `rgba(${f.col},0)`);
      ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(f.x + Math.sin(f.t * 12) * 3, f.y, r, r * 1.8, 0, 0, TAU); ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'smoke': {
      const r = f.r * (0.6 + 0.8 * k);
      ctx.fillStyle = `rgba(40,34,32,${0.35 * (1 - k)})`; ctx.beginPath(); ctx.arc(f.x, f.y, r, 0, TAU); ctx.fill();
      break;
    }
  }
}

function drawHUD() {
  const top = 0, pad = 10;
  // xp bar across the top
  ctx.fillStyle = 'rgba(8,6,10,0.85)'; ctx.fillRect(0, top, SW, 16);
  const pct = clamp(G.xp / G.next, 0, 1);
  const gr = ctx.createLinearGradient(0, 0, SW, 0); gr.addColorStop(0, '#3a6fd1'); gr.addColorStop(1, '#8ac8ff');
  ctx.fillStyle = gr; ctx.fillRect(0, top + 2, SW * pct, 12);
  ctx.font = '700 12px "Gowun Dodum", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillStyle = '#efe6cf'; ctx.fillText(`Lv.${G.lvl}`, SW - pad, top + 8);
  // timer
  ctx.textAlign = 'center'; ctx.font = '700 26px "Gowun Batang", serif';
  ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(0,0,0,0.8)';
  const tt = fmtTime(Math.min(G.t, 5999));
  ctx.strokeText(tt, SW / 2, 40); ctx.fillStyle = G.t >= RUN_LEN ? '#ff6a5a' : '#e9d7a8'; ctx.fillText(tt, SW / 2, 40);
  // kills & coins
  ctx.font = '13px "Gowun Dodum", sans-serif'; ctx.textAlign = 'right';
  const right = SW - 56;
  const ks = `처치 ${fmt(G.kills)}`, gs = `엽전 ${fmt(G.gold)}`;
  ctx.strokeText(ks, right, 34); ctx.fillStyle = '#efe6cf'; ctx.fillText(ks, right, 34);
  ctx.strokeText(gs, right, 52); ctx.fillStyle = '#e8c35a'; ctx.fillText(gs, right, 52);
  // chain counter
  if (G.combo >= 5) {
    const pop = 1 + (G.comboPop || 0) * 2.2, tier = G.combo >= 200 ? '#ff6a3a' : G.combo >= 100 ? '#ffb43a' : G.combo >= 50 ? '#ffe08a' : '#efe6cf';
    ctx.save(); ctx.translate(SW - 16, 92); ctx.scale(pop, pop);
    ctx.textAlign = 'right'; ctx.font = '700 30px "Gowun Batang", serif'; ctx.lineWidth = 5; ctx.strokeStyle = 'rgba(0,0,0,0.85)';
    ctx.strokeText(G.combo, 0, 0); ctx.fillStyle = tier; ctx.fillText(G.combo, 0, 0);
    ctx.restore();
    ctx.textAlign = 'right'; ctx.font = '700 12px "Gowun Dodum", sans-serif'; ctx.lineWidth = 3;
    const sub = `연격 · 경험치 +${Math.round(Math.min(G.combo, 500) / 10)}%`;
    ctx.strokeText(sub, SW - 16, 114); ctx.fillStyle = '#efe6cf'; ctx.fillText(sub, SW - 16, 114);
    ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(SW - 96, 122, 80, 3);
    ctx.fillStyle = tier; ctx.fillRect(SW - 96, 122, 80 * clamp(G.comboT / 2.2, 0, 1), 3);
  }
  if (G.blood > 0) {
    ctx.textAlign = 'center'; ctx.font = '700 13px "Gowun Batang", serif'; ctx.lineWidth = 3;
    const bt = `혈월 ${Math.ceil(G.blood)}초`;
    ctx.strokeText(bt, SW / 2, G.boss ? 100 : 66); ctx.fillStyle = '#ff6a6a'; ctx.fillText(bt, SW / 2, G.boss ? 100 : 66);
  }
  // weapon & passive slots
  let x = pad, y = 24;
  const sz = SW < 500 ? 24 : 28;
  for (const w of G.weapons) {
    const d = WEAPONS[w.id];
    slot(icon(w.evo ? d.evoIcon : d.icon), x, y, sz, w.evo ? '#ffcf7a' : 'rgba(233,215,168,0.4)', w.lv);
    x += sz + 3;
  }
  x = pad; y += sz + 4;
  for (const [id, lv] of Object.entries(G.passives)) { slot(icon(PASSIVES[id].icon), x, y, sz * 0.8, 'rgba(233,215,168,0.25)', lv); x += sz * 0.8 + 3; }
  // boss bar
  if (G.boss) {
    const b = G.boss, bw = Math.min(420, SW - 40), bx = (SW - bw) / 2, by = 62;
    ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(bx - 2, by - 2, bw + 4, 12);
    ctx.fillStyle = '#c3272b'; ctx.fillRect(bx, by, bw * clamp(b.hp / b.maxhp, 0, 1), 8);
    ctx.font = '700 13px "Gowun Batang", serif'; ctx.textAlign = 'center';
    ctx.strokeText(b.d.name, SW / 2, by + 22); ctx.fillStyle = '#ffd0c0'; ctx.fillText(b.d.name, SW / 2, by + 22);
  }
}
function slot(im, x, y, s, border, lv) {
  ctx.fillStyle = 'rgba(8,6,10,0.75)'; ctx.fillRect(x, y, s, s);
  if (im.complete && im.naturalWidth) ctx.drawImage(im, x + 1, y + 1, s - 2, s - 2);
  ctx.strokeStyle = border; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, y + 0.5, s - 1, s - 1);
  ctx.font = '700 10px "Gowun Dodum", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'bottom';
  ctx.lineWidth = 3; ctx.strokeStyle = '#000'; ctx.strokeText(lv, x + s - 1, y + s); ctx.fillStyle = '#fff'; ctx.fillText(lv, x + s - 1, y + s);
  ctx.textBaseline = 'middle';
}

// title backdrop: a slow parade of the foes under the eclipse
const parade = [];
function drawTitleBackdrop() {
  const t = performance.now() / 1000;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.imageSmoothingEnabled = false;
  if (groundPat) { ctx.save(); ctx.translate(-(t * 20) % 256, 0); ctx.fillStyle = groundPat; ctx.fillRect(0, 0, SW + 256, SH); ctx.restore(); }
  if (!parade.length) {
    const ids = ['imp', 'wolf', 'gangsi', 'skel', 'boar', 'dok', 'liz', 'big', 'wraith'];
    for (let i = 0; i < 26; i++) parade.push({ id: pick(ids), x: Math.random(), y: 0.45 + Math.random() * 0.55, sp: rand(0.02, 0.05) });
    parade.sort((a, b) => a.y - b.y);
  }
  for (const f of parade) {
    const d = FOES[f.id], x = ((f.x + t * f.sp) % 1.2 - 0.1) * SW, y = f.y * SH;
    const img = d.tint ? variant(d.sheet, d.tint) : IMG[d.sheet];
    shadow(x, y, 12 * d.s * 1.4);
    drawSprite(d.sheet, x, y, d.s * 1.4, 11, 1 + Math.floor(t * 8 + f.x * 10) % 8, img);
  }
  const vg = ctx.createRadialGradient(SW / 2, SH * 0.35, 40, SW / 2, SH * 0.5, Math.hypot(SW, SH) * 0.7);
  vg.addColorStop(0, 'rgba(10,4,16,0.35)'); vg.addColorStop(1, 'rgba(10,4,16,0.92)');
  ctx.fillStyle = vg; ctx.fillRect(0, 0, SW, SH);
}

// ---------------------------------------------------------------- menus
function refreshTitle() {
  $('tGold').textContent = fmt(save.gold);
  $('tBest').textContent = save.best ? `${fmtTime(save.best.t)} · ${fmt(save.best.kills)}처치${save.best.won ? ' · 승리' : ''}` : '—';
  const s = save.sound ? '소리 켜짐' : '소리 꺼짐';
  $('sndBtn').textContent = s; $('sndBtn2').textContent = s;
}
function buildHeroes() {
  const box = $('heroes'); box.innerHTML = '';
  for (const h of HEROES) {
    const b = document.createElement('button');
    b.className = 'hero' + (save.hero === h.id ? ' sel' : '');
    const wd = WEAPONS[h.weapon];
    b.innerHTML = `<canvas width="96" height="96" data-sheet="${h.sheet}"></canvas><h3>${h.name}</h3><p>${h.desc}</p><div class="wpn"><img src="${ICON(wd.icon)}" alt="">${wd.name}</div><div class="perk">${h.perk}</div>`;
    b.onclick = () => { save.hero = h.id; persist(); buildHeroes(); };
    b.ondblclick = () => { save.hero = h.id; startRun(); };
    box.appendChild(b);
  }
}
function animateHeroes() {
  if ($('select').hidden) return;
  const t = performance.now() / 1000;
  for (const c of document.querySelectorAll('#heroes canvas')) {
    const g = c.getContext('2d'), sh = c.dataset.sheet, info = sheetInfo(sh), im = IMG[sh];
    g.clearRect(0, 0, 96, 96); g.imageSmoothingEnabled = false;
    if (!im) continue;
    const F = info.F, s = F === 96 ? 1.45 : 1.5;
    const col = 1 + Math.floor(t * 9) % info.walk, size = F * s;
    g.drawImage(im, col * F, 10 * F, F, F, 48 - size / 2, 96 - size + info.foot * s - 4, size, size);
  }
}
function buildShop() {
  $('sGold').textContent = fmt(save.gold);
  const box = $('shopList'); box.innerHTML = '';
  for (const [id, m] of Object.entries(META)) {
    const lv = mlv(id), maxed = lv >= m.max, cost = m.cost * (lv + 1);
    const b = document.createElement('button');
    b.className = 'card'; b.disabled = maxed || save.gold < cost;
    b.innerHTML = `<img src="${ICON(m.icon)}" alt=""><div class="nm">${m.name}</div><div class="cost">${maxed ? '완료' : cost + '냥'}</div><div class="ds">${m.desc}<div class="pips">${Array.from({ length: m.max }, (_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</div></div>`;
    b.onclick = () => { if (save.gold >= cost && !maxed) { save.gold -= cost; save.up[id] = lv + 1; persist(); SND.init(); SND.gold(); buildShop(); } };
    box.appendChild(b);
  }
}
function spentOnMeta() { let s = 0; for (const [id, m] of Object.entries(META)) for (let i = 0; i < mlv(id); i++) s += m.cost * (i + 1); return s; }

$('goSelect').onclick = () => { SND.init(); buildHeroes(); show('select'); setTimeout(() => $('startRun').focus(), 30); };
$('goShop').onclick = () => { buildShop(); show('shop'); };
$('startRun').onclick = startRun;
$('refund').onclick = () => { save.gold += spentOnMeta(); save.up = {}; persist(); buildShop(); };
for (const b of document.querySelectorAll('[data-back]')) b.onclick = () => { refreshTitle(); show('title'); };
function toggleSound() { save.sound = !save.sound; persist(); refreshTitle(); SND.init(); SND.music(save.sound && (mode === 'play' || mode === 'pause' || mode === 'levelup')); }
$('sndBtn').onclick = toggleSound; $('sndBtn2').onclick = toggleSound;
$('resume').onclick = () => { mode = 'play'; show(null); last = performance.now(); };
$('giveUp').onclick = () => { mode = 'play'; endRun(false); };
$('again').onclick = startRun;
$('toTitle').onclick = () => { G = null; mode = 'title'; SND.music(false); refreshTitle(); show('title'); };
$('pauseBtn').onclick = pauseGame;
$('dashBtn').addEventListener('pointerdown', (e) => { e.preventDefault(); if (mode === 'play') G.wantDash = true; });

// ---------------------------------------------------------------- input
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (e.code === 'Escape' || e.code === 'KeyP') { if (mode === 'play') pauseGame(); else if (mode === 'pause') $('resume').click(); }
  if (mode === 'levelup' && /^Digit[1-6]$/.test(e.code)) { const b = $('luCards').querySelectorAll('button.card')[+e.code.slice(5) - 1]; if (b) b.click(); }
  if (mode === 'levelup' && e.code === 'KeyR' && G && G.hand && $('luTitle').textContent !== '상자 속 비급 하나를 고른다') rerollHand();
  if (mode === 'play' && e.code.startsWith('Arrow')) e.preventDefault();
  if (mode === 'play' && (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.repeat) { G.wantDash = true; e.preventDefault(); }
});
window.addEventListener('keyup', (e) => { keys[e.code] = false; });
window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; joy.on = false; pauseGame(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseGame(); });
cv.addEventListener('pointerdown', (e) => {
  if (mode !== 'play') return;
  joy.on = true; joy.id = e.pointerId; joy.ox = joy.x = e.clientX; joy.oy = joy.y = e.clientY;
  try { cv.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
});
cv.addEventListener('pointermove', (e) => { if (joy.on && e.pointerId === joy.id) { joy.x = e.clientX; joy.y = e.clientY; } });
const endJoy = (e) => { if (e.pointerId === joy.id) joy.on = false; };
cv.addEventListener('pointerup', endJoy); cv.addEventListener('pointercancel', endJoy);

// ---------------------------------------------------------------- loop
let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (mode === 'play' && G) {
    let d = dt;
    if (G.hitstop > 0) { G.hitstop -= dt; d = dt * 0.1; } // a beat of near-freeze on heavy blows
    update(d);
  }
  render();
  animateHeroes();
  requestAnimationFrame(frame);
}

async function boot() {
  const sheets = new Set(HEROES.map((h) => h.sheet));
  for (const f of Object.values(FOES)) sheets.add(f.sheet);
  await Promise.all([...sheets].map((s) => loadImg(s, `${BASE}assets/sprites/${s}.png`)));
  const ic = new Set(['chest', 'sparkles', 'gold']);
  for (const w of Object.values(WEAPONS)) { ic.add(w.icon); ic.add(w.evoIcon); }
  for (const p of Object.values(PASSIVES)) ic.add(p.icon);
  ic.forEach(icon);
  buildGround();
  $('loading').hidden = true;
  mode = 'title'; refreshTitle(); show('title');
  requestAnimationFrame(frame);
}
// local testing hook: ?debug exposes the run state
if (/[?&]debug/.test(location.search)) window.__eclipse = { get G() { return G; }, setT(t) { G.t = t; G.evIdx = EVENTS.findIndex((e) => e.t >= t); if (G.evIdx < 0) G.evIdx = EVENTS.length; } };
boot();
})();
