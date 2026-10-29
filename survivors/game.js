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
const SHEETS = {
  knight_px: { F: 96, foot: 8, walk: 6, hero: 1.25 }, mage_px: { F: 96, foot: 8, walk: 8, hero: 1.05 }, elf_px: { F: 64, foot: 5, walk: 8, hero: 1.15 },
};
const sheetInfo = (s) => SHEETS[s] || { F: 64, foot: 3, walk: 8 };

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
};
const SLOT_MAX = 6;

const META = {
  might: { name: '공격 수련', icon: 'sword', desc: '공격력 +5%', max: 5, cost: 60 },
  vigor: { name: '체력 수련', icon: 'heart-drop', desc: '최대 체력 +20', max: 5, cost: 50 },
  haste: { name: '경공술', icon: 'sprint', desc: '이동 속도 +5%', max: 3, cost: 80 },
  magnet: { name: '흡혼술', icon: 'sparkles', desc: '줍는 거리 +15%', max: 3, cost: 50 },
  growth: { name: '참선', icon: 'spellbook', desc: '경험치 +5%', max: 5, cost: 70 },
  greed: { name: '보부상 인연', icon: 'gold', desc: '엽전 +15%', max: 5, cost: 60 },
  revive: { name: '환생 부적', icon: 'heal', desc: '쓰러지면 한 번 되살아난다', max: 1, cost: 400 },
  luck: { name: '길몽', icon: 'star', desc: '레벨업 선택지 +1', max: 1, cost: 500 },
};

// foes: hp/spd/dmg at minute 0; hp scales with time. tint = rgba glaze laid over the sprite
const FOES = {
  imp: { name: '꼬마 도깨비', sheet: 'dokkaebi_small', hp: 7, spd: 40, dmg: 5, xp: 1, r: 11, s: 0.85 },
  wolf: { name: '승냥이 요괴', sheet: 'wolfman', hp: 11, spd: 66, dmg: 6, xp: 1, r: 12, s: 1 },
  gangsi: { name: '굶주린 강시', sheet: 'gangsi', hp: 26, spd: 34, dmg: 8, xp: 2, r: 12, s: 1 },
  skel: { name: '백골 귀병', sheet: 'skeleton', hp: 34, spd: 50, dmg: 9, xp: 2, r: 12, s: 1 },
  boar: { name: '멧돼지 요괴', sheet: 'boarman', hp: 50, spd: 56, dmg: 11, xp: 3, r: 13, s: 1.05 },
  dok: { name: '도깨비 장수', sheet: 'dokkaebi', hp: 75, spd: 48, dmg: 12, xp: 3, r: 13, s: 1.05 },
  liz: { name: '이무기 수졸', sheet: 'lizardman', hp: 95, spd: 58, dmg: 14, xp: 4, r: 13, s: 1.05 },
  big: { name: '산도깨비', sheet: 'dokkaebi_big', hp: 230, spd: 40, dmg: 18, xp: 8, r: 18, s: 1.35 },
  frostwolf: { name: '설원 승냥이', sheet: 'wolfman', tint: 'rgba(120,190,255,0.5)', hp: 70, spd: 78, dmg: 13, xp: 3, r: 12, s: 1.05 },
  wraith: { name: '어둠에 삼켜진 원귀', sheet: 'zombie', tint: 'rgba(130,90,255,0.45)', hp: 170, spd: 44, dmg: 16, xp: 5, r: 13, s: 1.15 },
  voidskel: { name: '그림자 귀병', sheet: 'skeleton', tint: 'rgba(70,30,140,0.6)', hp: 140, spd: 60, dmg: 16, xp: 5, r: 13, s: 1.1 },
  boss1: { name: '저승차사 강림', sheet: 'jeoseung', hp: 2600, spd: 56, dmg: 22, xp: 80, r: 24, s: 1.9, boss: 'dash' },
  boss2: { name: '우두귀왕', sheet: 'minotaur', hp: 9000, spd: 50, dmg: 30, xp: 150, r: 28, s: 2.2, boss: 'stomp' },
  boss3: { name: '어둠의 군주 어둑시니', sheet: 'vampire', tint: 'rgba(90,40,200,0.5)', hp: 30000, spd: 54, dmg: 36, xp: 0, r: 30, s: 2.5, boss: 'nova', final: true },
};
const WAVES = [
  [0, ['imp']], [1, ['imp', 'wolf']], [2, ['wolf', 'gangsi']], [3, ['gangsi', 'skel']], [4, ['skel', 'boar']],
  [5, ['skel', 'boar', 'gangsi']], [6, ['boar', 'dok']], [7, ['dok', 'liz']], [8, ['liz', 'frostwolf']],
  [9, ['liz', 'big', 'dok']], [10, ['wraith', 'big']], [11, ['wraith', 'voidskel', 'frostwolf']],
  [12, ['voidskel', 'big', 'liz']], [13, ['wraith', 'voidskel', 'big']], [14, ['voidskel', 'big', 'frostwolf', 'wraith']],
];
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
    if (!music) { music = new Audio(`${BASE}assets/music/cave.mp3`); music.loop = true; music.volume = 0.32; }
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
  let combo = 0, comboT = 0;
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
    slash() { noise(0.12, 0.07, 2600, 'slash', 0.08); },
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
    p: { x: 0, y: 0, hp: 1, maxhp: 1, dir: 2, face: 1, moving: false, walkT: 0, inv: 0, hurtT: 0, ax: 1, ay: 0 },
    weapons: [], passives: {}, S: {},
    foes: [], shots: [], fx: [], gems: [], nums: [], ebul: [], timers: [], zones: [],
    spawnAcc: 0, evIdx: 0, eliteNext: 50, boss: null, shake: 0, revive: mlv('revive') > 0, won: false,
    dmgBy: {}, banner: null, gemCount: 0,
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
  S.cd = Math.max(0.4, 1 - 0.08 * pv('wisdom') - h.cd);
  S.amount = pv('amount');
  S.speed = 118 * h.spd * (1 + 0.1 * pv('haste') + 0.05 * mlv('haste'));
  S.magnet = 56 * (1 + 0.35 * pv('magnet') + 0.15 * mlv('magnet'));
  S.maxhp = (h.hp + 20 * mlv('vigor')) * (1 + 0.2 * pv('vigor'));
  S.regen = 0.3 * pv('vigor');
  S.armor = pv('armor') + h.armor;
  S.growth = 1 + 0.08 * pv('growth') + 0.05 * mlv('growth');
  S.greed = 1 + 0.15 * mlv('greed');
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
    case 'talisman': return { dmg: [8, 8, 10, 10, 10, 10, 13, 13][L - 1] * m * (w.evo ? 1.5 : 1), cd: 3.2 * S.cd, dur: 3.5 + (L >= 3 ? 0.5 : 0),
      amount: [1, 2, 2, 3, 3, 4, 4, 5][L - 1] + S.amount, area: S.area * (L >= 7 ? 1.15 : 1) * (w.evo ? 1.3 : 1), rot: 3.3 * (L >= 5 ? 1.2 : 1) * (w.evo ? 1.2 : 1) };
    case 'lightning': return { dmg: [20, 20, 24, 24, 24, 24, 30, 30][L - 1] * m, cd: (L >= 8 ? 2.1 : 2.35) * S.cd,
      amount: 1 + (L >= 2 ? 1 : 0) + (L >= 4 ? 1 : 0) + (L >= 6 ? 1 : 0) + (L >= 8 ? 1 : 0) + S.amount, area: S.area * (L >= 5 ? 1.2 : 1) };
    case 'frost': return { dmg: [4, 4, 5, 5, 7, 7, 9, 9][L - 1] * m, tick: w.evo ? 0.4 : 0.55, slow: L >= 7 ? 0.5 : 0.35,
      area: S.area * (1 + 0.12 * ((L >= 2) + (L >= 4) + (L >= 6)) + (L >= 8 ? 0.15 : 0)) * (w.evo ? 1.45 : 1) };
    case 'whirl': return { dmg: [15, 17, 17, 17, 20, 20, 20, 25][L - 1] * m * (w.evo ? 1.4 : 1), cd: (L >= 7 ? 1.35 : 1.5) * S.cd,
      amount: 1 + (L >= 3 ? 1 : 0) + (L >= 6 ? 1 : 0) + S.amount + (w.evo ? 2 : 0), area: S.area * (L >= 4 ? 1.15 : 1) * (w.evo ? 1.6 : 1) };
    case 'meteor': return { dmg: [36, 36, 42, 42, 42, 50, 50, 60][L - 1] * m, cd: (L >= 7 ? 3.1 : 3.4) * S.cd,
      amount: 1 + (L >= 2 ? 1 : 0) + (L >= 5 ? 1 : 0) + (L >= 8 ? 1 : 0) + S.amount + (w.evo ? 3 : 0), area: S.area * (L >= 4 ? 1.15 : 1) * (w.evo ? 1.35 : 1) };
  }
  return {};
}
function later(t, fn) { G.timers.push({ t, fn }); }

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
      if (w.evo) {
        const R = 120 * st.area;
        G.fx.push({ k: 'ring', x: p.x, y: p.y - 14, r: R, t: 0, dur: 0.3, follow: true, col: '255,235,190' });
        hitArea(p.x, p.y - 14, R, st.dmg, w.id, 160);
        SND.slash();
        break;
      }
      for (let i = 0; i < st.amount; i++) {
        const side = i % 2 === 0 ? p.face : -p.face;
        later(i * 0.12, () => {
          const wdt = 116 * st.area, hgt = 56 * st.area, cx = G.p.x + side * wdt * 0.48, cy = G.p.y - 16;
          G.fx.push({ k: 'slash', side, t: 0, dur: 0.22, w: wdt, h: hgt, ox: side * wdt * 0.48, oy: -16, follow: true });
          for (const e of G.foes) {
            const dx = (e.x - cx) / (wdt / 2 + e.r), dy = (e.y - 14 - cy) / (hgt / 2 + e.r);
            if (dx * dx + dy * dy <= 1) hurt(e, st.dmg, w.id, side * 140, 0);
          }
          SND.slash();
        });
      }
      break;
    }
    case 'arrow': {
      const targets = nearestFoes(p.x, p.y, st.amount, 560);
      for (let i = 0; i < st.amount; i++) {
        const tg = targets[i % Math.max(1, targets.length)];
        let a = tg ? Math.atan2(tg.y - 14 - (p.y - 18), tg.x - p.x) : Math.atan2(p.ay, p.ax);
        if (!tg || i >= targets.length) a += (i - st.amount / 2) * 0.18;
        later(i * 0.06, () => shoot({ k: 'arrow', x: G.p.x, y: G.p.y - 18, a, spd: 600, dmg: st.dmg, pierce: st.pierce, life: 1.2, r: 6, wid: w.id, kb: 60 }));
      }
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
      for (let i = 0; i < st.amount; i++) {
        const a = w.evo ? (i / st.amount) * TAU : Math.atan2(p.ay, p.ax) + rand(-0.7, 0.7);
        later(i * 0.08, () => shoot({ k: 'fox', x: G.p.x, y: G.p.y - 20, a, spd: 250, dmg: st.dmg, pierce: 1, life: 2.6, r: 8, wid: w.id, kb: 0,
          home: pool.length ? pick(pool) : null, blast: 48 * st.area, burn: w.evo }));
      }
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
        shoot({ k: 'whirl', x: p.x, y: p.y - 16, a, spd: 430 * (w.evo ? 1.2 : 1), dmg: st.dmg, pierce: 999, life: 2.2, r: 15 * st.area, wid: w.id, kb: 90, back: true, rehit: 0.3, spin: 0 });
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
            if (w.evo) G.zones.push({ x: tx, y: ty, r: R * 0.8, t: 0, dur: 2.5, dmg: st.dmg * 0.12, tick: 0.3, acc: 0, wid: w.id, col: '150,90,255' });
            G.shake = Math.max(G.shake, 5);
            SND.boom();
          });
        });
      }
      break;
    }
  }
}
function bolt(x, y, st, wid) {
  G.fx.push({ k: 'bolt', x, y, t: 0, dur: 0.22, seed: Math.random() * 1000 });
  hitArea(x, y + 10, 30 * st.area, st.dmg, wid, 30);
  burst(x, y + 6, 8, '#bfe3ff', 160);
  SND.zap();
}
function shoot(o) { o.vx = Math.cos(o.a) * o.spd; o.vy = Math.sin(o.a) * o.spd; o.hit = new Map(); o.t = 0; G.shots.push(o); }
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
  const d = FOES[id], mult = d.boss ? 1 : 1 + G.t / 180;
  const elite = !!opt.elite;
  const e = {
    id, d, x, y, hp: d.hp * mult * (elite ? 14 : 1), maxhp: 0, spd: d.spd * (elite ? 1.1 : 1) * (opt.spdMul || 1), dmg: d.dmg * (1 + G.t / 600) * (elite ? 1.5 : 1),
    r: d.r * (elite ? 1.35 : 1), s: d.s * (elite ? 1.4 : 1), dir: 2, walkT: Math.random() * 10, flash: 0, kx: 0, ky: 0, slow: 0, slowAmt: 0, frozen: 0,
    elite, boss: !!d.boss, dead: false, vx: opt.vx || 0, vy: opt.vy || 0, rush: opt.rush || 0, skillT: 3, state: '', stT: 0,
  };
  e.maxhp = e.hp;
  G.foes.push(e);
  if (e.boss) {
    G.boss = e;
    showBanner(d.name, d.final ? '일식이 완성되었다' : '강대한 기운이 다가온다');
    SND.boss();
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
  const t = G.t;
  const target = Math.min(40 + t * 0.42, t >= RUN_LEN ? 140 : 360);
  const rate = 2 + t / 30;
  G.spawnAcc += dt * rate;
  while (G.spawnAcc >= 1) {
    G.spawnAcc -= 1;
    if (G.foes.length >= target) break;
    const pt = edgePoint();
    spawnFoe(pick(wavePool()), pt.x, pt.y);
  }
  if (t >= G.eliteNext) {
    G.eliteNext += 60;
    const pt = edgePoint();
    spawnFoe(pick(wavePool()), pt.x, pt.y, { elite: true });
  }
  while (G.evIdx < EVENTS.length && t >= EVENTS[G.evIdx].t) {
    const ev = EVENTS[G.evIdx++], p = G.p;
    if (ev.type === 'boss') { const pt = edgePoint(40); spawnFoe(ev.foe, pt.x, pt.y); }
    else if (ev.type === 'ring') {
      const R = Math.hypot(VW, VH) / 2 + 30;
      for (let i = 0; i < ev.n; i++) { const a = (i / ev.n) * TAU; spawnFoe(ev.foe, p.x + Math.cos(a) * R, p.y + Math.sin(a) * R); }
      showBanner('포위', '사방에서 요괴가 몰려온다');
    } else if (ev.type === 'swarm') {
      const a = Math.random() * TAU, R = Math.hypot(VW, VH) / 2 + 40;
      const sx = p.x + Math.cos(a) * R, sy = p.y + Math.sin(a) * R, vx = -Math.cos(a), vy = -Math.sin(a);
      for (let i = 0; i < ev.n; i++) {
        const off = (i - ev.n / 2) * 22;
        spawnFoe(ev.foe, sx + -vy * off + rand(-20, 20), sy + vx * off + rand(-30, 30), { vx, vy, rush: 9, spdMul: 1.7 });
      }
      showBanner('요괴 떼 돌진', '옆으로 피하라');
    }
  }
}

function updateFoes(dt) {
  const p = G.p, far = Math.hypot(VW, VH) * 0.85;
  for (const e of G.foes) {
    if (e.dead) continue;
    e.flash = Math.max(0, e.flash - dt);
    if (e.frozen > 0) { e.frozen -= dt; continue; }
    if (e.slow > 0) e.slow -= dt;
    let dx = p.x - e.x, dy = p.y - e.y;
    const dist = Math.hypot(dx, dy) || 1;
    let spd = e.spd * (e.slow > 0 ? 1 - e.slowAmt : 1);
    let mx, my;
    if (e.rush > 0) { e.rush -= dt; mx = e.vx; my = e.vy; }
    else { mx = dx / dist; my = dy / dist; }
    if (e.boss) {
      const r = bossAI(e, dt, dx / dist, dy / dist);
      if (r) { mx = r.mx; my = r.my; spd = r.spd; }
    }
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
    if (Math.abs(mx) > 0.01 || Math.abs(my) > 0.01) e.dir = Math.abs(mx) > Math.abs(my) ? (mx < 0 ? 1 : 3) : (my < 0 ? 0 : 2);
    e.walkT += dt * (spd / 60);
    // contact
    if (dist < e.r + 12 && p.inv <= 0) hurtPlayer(e.dmg);
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
  const crit = Math.random() < 0.06;
  const d = Math.max(1, Math.round(dmg * (crit ? 2 : 1) * rand(0.92, 1.08)));
  e.hp -= d; e.flash = 0.12;
  if (!e.boss) { e.kx += kx * (e.elite ? 0.3 : 1); e.ky += ky * (e.elite ? 0.3 : 1); }
  G.dmgBy[wid] = (G.dmgBy[wid] || 0) + Math.min(d, e.hp + d);
  if (G.nums.length < 90) G.nums.push({ x: e.x + rand(-6, 6), y: e.y - 30 * e.s, v: d, t: 0, crit });
  if (!quiet) SND.hit();
  if (e.hp <= 0) killFoe(e);
}
function killFoe(e) {
  e.dead = true;
  G.kills++;
  SND.kill();
  burst(e.x, e.y - 14, e.boss ? 40 : 6, e.d.tint ? '#a88cff' : '#d8d0c0', e.boss ? 260 : 120);
  G.fx.push({ k: 'corpse', x: e.x, y: e.y, sheet: e.d.sheet, s: e.s, t: 0, dur: 0.5, dir: e.dir });
  dropGem(e.x, e.y, e.d.xp * (e.elite ? 6 : 1));
  const greed = G.S.greed;
  if (Math.random() < 0.025 * greed) G.gems.push(pickup('gold', e.x + 8, e.y, randi(1, 3)));
  if (Math.random() < 0.006) G.gems.push(pickup('heal', e.x - 8, e.y, 30));
  if (Math.random() < 0.0015) G.gems.push(pickup('vacuum', e.x, e.y + 8, 0));
  if (e.elite || e.boss) G.gems.push(pickup('chest', e.x, e.y, e.boss ? 3 : 1));
  if (e.boss) {
    for (let i = 0; i < 14; i++) G.gems.push(pickup('gold', e.x + rand(-50, 50), e.y + rand(-40, 40), randi(3, 6)));
    if (G.boss === e) G.boss = null;
    G.shake = 14;
    if (e.d.final) { G.won = true; later(1.6, () => endRun(true)); showBanner('일식이 걷힌다', '어둠의 군주를 쓰러뜨렸다'); }
  }
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
  p.hp -= d; p.inv = 0.45; p.hurtT = 0.25;
  G.shake = Math.max(G.shake, 4);
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
  p.moving = l > 0.05;
  if (p.moving) {
    p.x += mx * G.S.speed * dt; p.y += my * G.S.speed * dt;
    const n = Math.hypot(mx, my); p.ax = mx / n; p.ay = my / n;
    if (Math.abs(mx) > 0.2) p.face = mx < 0 ? -1 : 1;
    p.dir = Math.abs(mx) > Math.abs(my) * 1.2 ? (mx < 0 ? 1 : 3) : (my < 0 ? 0 : 2);
    p.walkT += dt;
  }
  p.inv = Math.max(0, p.inv - dt); p.hurtT = Math.max(0, p.hurtT - dt);
  if (G.S.regen) p.hp = Math.min(p.maxhp, p.hp + G.S.regen * dt);
}
function updateGems(dt) {
  const p = G.p, M = G.S.magnet;
  for (let i = G.gems.length - 1; i >= 0; i--) {
    const g = G.gems[i];
    const dx = p.x - g.x, dy = p.y - 16 - g.y, d = Math.hypot(dx, dy) || 1;
    if (!g.mag && g.kind !== 'chest' && d < M) g.mag = true;
    if (g.kind === 'chest' && d < 30) g.mag = true;
    if (g.mag) {
      const sp = 260 + (g.sp = (g.sp || 0) + dt * 900);
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
  G.xp += v * G.S.growth;
  while (G.xp >= G.next) { G.xp -= G.next; G.lvl++; G.next = xpNeed(G.lvl); G.pendingLv++; }
  if (G.pendingLv > 0 && mode === 'play') openLevelUp();
}

// ---------------------------------------------------------------- upgrades
function upgradeOptions() {
  const opts = [];
  const full = G.weapons.length >= SLOT_MAX, pfull = Object.keys(G.passives).length >= SLOT_MAX;
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
    return { icon: d.icon, name: d.name, lv: `Lv.${lv}`, isNew: !w, desc: d.desc[lv - 1] };
  }
  if (o.type === 'p') {
    const d = PASSIVES[o.id], lv = (G.passives[o.id] || 0) + 1;
    return { icon: d.icon, name: d.name, lv: `Lv.${lv}`, isNew: lv === 1, desc: d.desc };
  }
  if (o.type === 'evo') { const d = WEAPONS[o.id]; return { icon: d.evoIcon, name: d.evoName, lv: '진화', evo: true, desc: d.evoDesc }; }
  if (o.type === 'heal') return { icon: 'hp-potion', name: '약과', lv: '', desc: '체력 40 회복' };
  return { icon: 'gold', name: '엽전 꾸러미', lv: '', desc: '엽전 25냥' };
}
function evoReady() {
  return G.weapons.filter((w) => !w.evo && w.lv >= W_MAX && (G.passives[WEAPONS[w.id].pair] || 0) > 0);
}

const screens = ['title', 'select', 'shop', 'levelup', 'pause', 'result'];
function show(id) { for (const s of screens) $(s).hidden = s !== id; $('pauseBtn').hidden = !(id === null && mode === 'play'); }

function cardHTML(v) {
  return `<img src="${ICON(v.icon)}" alt=""><div class="nm">${v.name} <span class="lv">${v.lv}</span>${v.evo ? '<span class="new evo">진화</span>' : v.isNew ? '<span class="new">새로움</span>' : ''}</div><div class="ds">${v.desc}</div>`;
}
function openLevelUp() {
  mode = 'levelup';
  SND.level();
  const all = shuffle(upgradeOptions());
  // weight toward what the player already carries so builds grow instead of sprawling
  all.sort((a, b) => (a.isNew ? 1 : 0) + Math.random() * 1.4 - ((b.isNew ? 1 : 0) + Math.random() * 1.4));
  let opts = all.slice(0, 3 + mlv('luck'));
  if (!opts.length) opts = [{ type: 'heal' }, { type: 'gold' }];
  $('luEyebrow').textContent = `깨달음 · Lv.${G.lvl - G.pendingLv + 1}`;
  $('luTitle').textContent = '하나를 고른다';
  const box = $('luCards'); box.innerHTML = '';
  opts.forEach((o, i) => {
    const b = document.createElement('button'); b.className = 'card'; b.innerHTML = cardHTML(optionView(o));
    b.onclick = () => { applyOption(o); G.pendingLv--; closeModal(); };
    box.appendChild(b);
    if (i === 0) setTimeout(() => b.focus(), 30);
  });
  $('luFoot').innerHTML = '<span class="sub">숫자 키 1~4로도 고를 수 있다</span>';
  show('levelup');
}
function openChest(n) {
  mode = 'levelup';
  SND.chest();
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
function burst(x, y, n, col, sp) {
  for (let i = 0; i < n && G.fx.length < 700; i++) {
    const a = Math.random() * TAU, v = rand(0.3, 1) * sp;
    G.fx.push({ k: 'spark', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 40, t: 0, dur: rand(0.25, 0.55), col });
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
    s.x += s.vx * dt; s.y += s.vy * dt;
    s.life -= dt;
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
      hurt(e, s.dmg, s.wid, (s.vx / sp) * s.kb, (s.vy / sp) * s.kb);
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
    if (z.acc >= z.tick) { z.acc = 0; for (const e of nearFoes(z.x, z.y, z.r + 20)) { if (Math.hypot(e.x - z.x, e.y - z.y) < z.r + e.r) hurt(e, z.dmg, z.wid, 0, 0, true); } }
    if (z.t >= z.dur) { G.zones[i] = G.zones[G.zones.length - 1]; G.zones.pop(); }
  }
}
function explodeFox(s) {
  hitArea(s.x, s.y, s.blast, s.dmg, s.wid, 90);
  G.fx.push({ k: 'boom', x: s.x, y: s.y, r: s.blast, t: 0, dur: 0.3, col: s.burn ? '255,100,190' : '255,150,60' });
  if (s.burn) G.zones.push({ x: s.x, y: s.y + 12, r: s.blast * 0.8, t: 0, dur: 1.6, dmg: s.dmg * 0.15, tick: 0.3, acc: 0, wid: s.wid, col: '255,90,170' });
  SND.boom();
}
function updateFx(dt) {
  for (let i = G.fx.length - 1; i >= 0; i--) {
    const f = G.fx[i];
    f.t += dt;
    if (f.k === 'spark') { f.x += f.vx * dt; f.y += f.vy * dt; f.vy += 300 * dt; f.vx *= 0.96; }
    if (f.k === 'shock' && !f.hitDone) {
      const p = G.p, rr = (f.t / f.dur) * f.R, d = Math.hypot(p.x - f.x, p.y - f.y);
      if (Math.abs(d - rr) < 22) { f.hitDone = true; hurtPlayer(f.dmg); }
    }
    if (f.t >= f.dur) { G.fx[i] = G.fx[G.fx.length - 1]; G.fx.pop(); }
  }
  for (let i = G.nums.length - 1; i >= 0; i--) {
    const n = G.nums[i]; n.t += dt; n.y -= 34 * dt;
    if (n.t > 0.7) { G.nums[i] = G.nums[G.nums.length - 1]; G.nums.pop(); }
  }
  for (let i = G.timers.length - 1; i >= 0; i--) {
    const tm = G.timers[i]; tm.t -= dt;
    if (tm.t <= 0) { G.timers.splice(i, 1); tm.fn(); }
  }
  G.shake = Math.max(0, G.shake - dt * 30);
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
  return moving ? 1 + (Math.floor(t * 10) % n) : 0;
}
function shadow(x, y, w) { ctx.fillStyle = 'rgba(0,0,0,0.32)'; ctx.beginPath(); ctx.ellipse(x, y, w, w * 0.38, 0, 0, TAU); ctx.fill(); }

function render() {
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  ctx.imageSmoothingEnabled = false;
  if (!G) { ctx.fillStyle = '#0c0b10'; ctx.fillRect(0, 0, SW, SH); drawTitleBackdrop(); return; }
  const p = G.p;
  const shx = G.shake ? rand(-G.shake, G.shake) : 0, shy = G.shake ? rand(-G.shake, G.shake) : 0;
  const camX = p.x - VW / 2 + shx, camY = p.y - 20 - VH / 2 + shy;
  ctx.setTransform(DPR * ZOOM, 0, 0, DPR * ZOOM, -camX * DPR * ZOOM, -camY * DPR * ZOOM);
  // ground
  ctx.fillStyle = groundPat; ctx.fillRect(camX - 2, camY - 2, VW + 4, VH + 4);
  const c0x = Math.floor(camX / CHUNK) - 1, c1x = Math.floor((camX + VW) / CHUNK) + 1, c0y = Math.floor(camY / CHUNK) - 1, c1y = Math.floor((camY + VH) / CHUNK) + 1;
  const props = [];
  for (let cx = c0x; cx <= c1x; cx++) for (let cy = c0y; cy <= c1y; cy++) for (const pr of propsIn(cx, cy)) props.push(pr);
  for (const pr of props) if (pr.kind === 0 || pr.kind === 4) drawProp(pr.kind, pr.x, pr.y, pr.s);
  // ground effects
  for (const z of G.zones) {
    const a = 0.35 * (1 - z.t / z.dur);
    const gr = ctx.createRadialGradient(z.x, z.y, 0, z.x, z.y, z.r);
    gr.addColorStop(0, `rgba(${z.col},${a})`); gr.addColorStop(1, `rgba(${z.col},0)`);
    ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(z.x, z.y, z.r, z.r * 0.7, 0, 0, TAU); ctx.fill();
  }
  const frost = wget('frost');
  if (frost) {
    const st = wstats(frost), R = 52 * st.area;
    const gr = ctx.createRadialGradient(p.x, p.y, R * 0.2, p.x, p.y, R);
    gr.addColorStop(0, 'rgba(150,210,255,0.02)'); gr.addColorStop(0.85, `rgba(150,210,255,${frost.evo ? 0.22 : 0.14})`); gr.addColorStop(1, 'rgba(200,235,255,0.35)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.ellipse(p.x, p.y, R, R * 0.85, 0, 0, TAU); ctx.fill();
  }
  for (const f of G.fx) if (f.k === 'warn') {
    const x = f.follow ? f.follow.x : f.x, y = f.follow ? f.follow.y : f.y;
    ctx.strokeStyle = `rgba(255,70,50,${0.4 + 0.4 * Math.sin(f.t * 30)})`; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(x, y, f.r, f.r * 0.7, 0, 0, TAU); ctx.stroke();
    ctx.fillStyle = `rgba(255,60,40,${0.12 * f.t / f.dur})`; ctx.fill();
  } else if (f.k === 'shock') {
    const rr = (f.t / f.dur) * f.R;
    ctx.strokeStyle = `rgba(255,190,120,${1 - f.t / f.dur})`; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.ellipse(f.x, f.y, rr, rr * 0.7, 0, 0, TAU); ctx.stroke();
  } else if (f.k === 'dashLine' && !f.e.dead) {
    ctx.strokeStyle = `rgba(255,40,40,${0.25 + 0.3 * (f.t / f.dur)})`; ctx.lineWidth = f.e.r * 1.6;
    ctx.beginPath(); ctx.moveTo(f.e.x, f.e.y); ctx.lineTo(f.e.x + f.e.dx * 300, f.e.y + f.e.dy * 300); ctx.stroke();
  }
  // pickups
  for (const g of G.gems) drawPickup(g);
  // y-sorted bodies
  const bodies = [];
  for (const pr of props) if (pr.kind !== 0 && pr.kind !== 4) bodies.push({ y: pr.y, pr });
  for (const e of G.foes) bodies.push({ y: e.y, e });
  for (const f of G.fx) if (f.k === 'corpse') bodies.push({ y: f.y - 1, c: f });
  bodies.push({ y: p.y, me: true });
  bodies.sort((a, b) => a.y - b.y);
  for (const b of bodies) {
    if (b.pr) drawProp(b.pr.kind, b.pr.x, b.pr.y, b.pr.s);
    else if (b.e) drawFoe(b.e);
    else if (b.c) {
      const c = b.c; ctx.globalAlpha = 1 - c.t / c.dur;
      drawSprite(c.sheet, c.x, c.y, c.s, 20, Math.min(5, Math.floor(c.t / c.dur * 6)), variant(c.sheet, 'rgba(20,10,30,0.5)'));
      ctx.globalAlpha = 1;
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
  for (const b of G.ebul) {
    const gr = ctx.createRadialGradient(b.x, b.y, 1, b.x, b.y, b.r * 1.6);
    gr.addColorStop(0, '#f0e0ff'); gr.addColorStop(0.4, '#8a4cff'); gr.addColorStop(1, 'rgba(60,0,140,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(b.x, b.y, b.r * 1.6, 0, TAU); ctx.fill();
  }
  // damage numbers
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (const n of G.nums) {
    const a = 1 - Math.max(0, n.t - 0.4) / 0.3;
    ctx.globalAlpha = a;
    ctx.font = `700 ${n.crit ? 17 : 13}px "Gowun Dodum", sans-serif`;
    ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(0,0,0,0.85)'; ctx.strokeText(n.v, n.x, n.y);
    ctx.fillStyle = n.mine ? '#ff5a4a' : n.heal ? '#7dffa8' : n.crit ? '#ffcf7a' : '#ffffff';
    ctx.fillText(n.v, n.x, n.y);
  }
  ctx.globalAlpha = 1;
  // eclipse darkness: a light pool around the hero, deepening as the night goes on
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  const px = (p.x - camX) * ZOOM, py = (p.y - 20 - camY) * ZOOM;
  const night = 0.35 + 0.35 * Math.min(1, G.t / RUN_LEN);
  const vg = ctx.createRadialGradient(px, py, Math.min(SW, SH) * 0.22, px, py, Math.hypot(SW, SH) * 0.62);
  vg.addColorStop(0, 'rgba(10,4,16,0)'); vg.addColorStop(1, `rgba(10,4,16,${night})`);
  ctx.fillStyle = vg; ctx.fillRect(0, 0, SW, SH);
  if (G.boss) { ctx.fillStyle = `rgba(120,10,20,${0.08 + 0.05 * Math.sin(G.t * 3)})`; ctx.fillRect(0, 0, SW, SH); }
  if (p.hurtT > 0) { ctx.fillStyle = `rgba(200,20,20,${p.hurtT * 0.6})`; ctx.fillRect(0, 0, SW, SH); }
  drawHUD();
  if (joy.on) {
    ctx.strokeStyle = 'rgba(233,215,168,0.35)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(joy.ox, joy.oy, 50, 0, TAU); ctx.stroke();
    const jx = joy.x - joy.ox, jy = joy.y - joy.oy, l = Math.hypot(jx, jy), k = l > 50 ? 50 / l : 1;
    ctx.fillStyle = 'rgba(233,215,168,0.45)'; ctx.beginPath(); ctx.arc(joy.ox + jx * k, joy.oy + jy * k, 18, 0, TAU); ctx.fill();
  }
}
function drawPlayer() {
  const p = G.p, sh = G.hero.sheet;
  shadow(p.x, p.y, 14);
  if (p.inv > 0 && Math.floor(p.inv * 20) % 2 === 0) ctx.globalAlpha = 0.5;
  drawSprite(sh, p.x, p.y, sheetInfo(sh).hero || 1, 8 + p.dir, walkFrame(sh, p.walkT, p.moving));
  ctx.globalAlpha = 1;
  // hp bar under the feet
  const w = 36, pct = clamp(p.hp / p.maxhp, 0, 1);
  ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(p.x - w / 2 - 1, p.y + 6, w + 2, 5);
  ctx.fillStyle = pct > 0.3 ? '#c3272b' : '#ff4a3a'; ctx.fillRect(p.x - w / 2, p.y + 7, w * pct, 3);
}
function drawFoe(e) {
  const sh = e.d.sheet;
  shadow(e.x, e.y, e.r * 1.05);
  let img = IMG[sh];
  if (e.d.tint) img = variant(sh, e.d.tint) || img;
  if (e.elite) img = variant(sh, 'rgba(255,200,80,0.35)') || img;
  if (e.frozen > 0) img = variant(sh, 'rgba(170,220,255,0.6)') || img;
  const col = e.frozen > 0 ? 0 : 1 + (Math.floor(e.walkT * 1.6) % 8);
  if (e.elite || e.boss) {
    ctx.globalCompositeOperation = 'lighter';
    const gr = ctx.createRadialGradient(e.x, e.y - 20 * e.s, 2, e.x, e.y - 20 * e.s, 34 * e.s);
    gr.addColorStop(0, e.boss ? 'rgba(200,40,60,0.35)' : 'rgba(255,190,80,0.3)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(e.x, e.y - 20 * e.s, 34 * e.s, 0, TAU); ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }
  drawSprite(sh, e.x, e.y, e.s, 8 + e.dir, col, img);
  if (e.flash > 0) { ctx.globalAlpha = Math.min(1, e.flash * 8) * 0.8; drawSprite(sh, e.x, e.y, e.s, 8 + e.dir, col, variant(sh, 'rgba(255,255,255,1)')); ctx.globalAlpha = 1; }
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
function drawShot(s) {
  if (s.k === 'arrow') {
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
    case 'slash': {
      const cx = p.x + f.ox, cy = p.y + f.oy;
      ctx.save(); ctx.translate(cx, cy); ctx.scale(f.side, 1);
      ctx.globalCompositeOperation = 'lighter';
      const a0 = -1.25 + k * 0.4;
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(255,${235 - i * 40},${200 - i * 60},${(1 - k) * (0.9 - i * 0.25)})`;
        ctx.lineWidth = 12 - i * 3;
        ctx.beginPath(); ctx.ellipse(-f.w * 0.2, 0, f.w * (0.6 - i * 0.05), f.h * (0.55 - i * 0.05), 0, a0, a0 + 2.5 * Math.min(1, k * 3)); ctx.stroke();
      }
      ctx.restore(); ctx.globalCompositeOperation = 'source-over';
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
      ctx.globalCompositeOperation = 'source-over';
      break;
    }
    case 'bolt': case 'chain': {
      const x1 = f.k === 'bolt' ? f.x + 20 : f.x1, y1 = f.k === 'bolt' ? f.y - 420 : f.y1, x2 = f.k === 'bolt' ? f.x : f.x2, y2 = f.k === 'bolt' ? f.y : f.y2;
      ctx.globalCompositeOperation = 'lighter';
      for (const [w, c] of [[7, `rgba(120,170,255,${0.5 * (1 - k)})`], [2.5, `rgba(240,250,255,${1 - k})`]]) {
        ctx.strokeStyle = c; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x1, y1);
        const n = 9;
        for (let i = 1; i < n; i++) {
          const t = i / n, j = (hash(i, Math.floor(f.t * 30), f.seed | 0 || 3) - 0.5) * 30;
          ctx.lineTo(x1 + (x2 - x1) * t + j, y1 + (y2 - y1) * t + j * 0.3);
        }
        ctx.lineTo(x2, y2); ctx.stroke();
      }
      if (f.k === 'bolt') { ctx.fillStyle = `rgba(200,225,255,${0.5 * (1 - k)})`; ctx.beginPath(); ctx.ellipse(x2, y2 + 10, 34, 14, 0, 0, TAU); ctx.fill(); }
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
      const a = 1 - k; ctx.fillStyle = f.col; ctx.globalAlpha = a; ctx.fillRect(f.x - 1.5, f.y - 1.5, 3, 3); ctx.globalAlpha = 1;
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

// ---------------------------------------------------------------- input
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (e.code === 'Escape' || e.code === 'KeyP') { if (mode === 'play') pauseGame(); else if (mode === 'pause') $('resume').click(); }
  if (mode === 'levelup' && /^Digit[1-4]$/.test(e.code)) { const b = $('luCards').querySelectorAll('button.card')[+e.code.slice(5) - 1]; if (b) b.click(); }
  if (mode === 'play' && e.code.startsWith('Arrow')) e.preventDefault();
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
  if (mode === 'play' && G) update(dt);
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
