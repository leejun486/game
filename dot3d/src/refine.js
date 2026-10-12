// 세공: 무기에 옵션 줄을 새기는 일 (달빛 광맥에서 나오는 세공석으로)
//  - 거친 세공석: 옵션 두 줄을 새로 (낮은~중간 값)
//  - 맑은 세공석: 옵션 세 줄을 새로 (중간~높은 값)
//  - 달빛 세공석: 고른 한 줄만 다시 (높은 값, 가끔 한계를 넘음) — 나머지 줄은 그대로
//  줄마다 다른 옵션 (같은 옵션이 두 번 나오지 않음). 무기 등급이 높을수록 값이 큼(등급마다 +15%)
//  세공은 무기마다 따로 (game.ext.refine[무기 id] = [{ k, v }…]), 끼고 있는 무기의 줄만 능력치에 붙음
import { item, WEAPONS, RARITY } from './items.js';
import { STATS } from './gear.js';
import { MATS } from './enhance.js';

// 줄에 붙을 수 있는 옵션과 값 범위 [낮음, 높음]
export const REFINE_OPTS = {
  atk: [0.02, 0.06],
  crit: [0.015, 0.04],
  critDmg: [0.06, 0.15],
  cdr: [0.015, 0.04],
  boss: [0.04, 0.1],
  ls: [0.005, 0.012],
  spd: [0.02, 0.05],
  hp: [15, 45],
  regen: [0.4, 1.2],
  exp: [0.04, 0.1],
};
export const STONES = {
  stoneR: { lines: 2, lo: 0, hi: 0.7 },
  stoneC: { lines: 3, lo: 0.3, hi: 1 },
  stoneM: { one: true, lo: 0.5, hi: 1.25 },
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
function rollValue(k, q, tier) {
  const [a, b] = REFINE_OPTS[k];
  const t = q.lo + Math.random() * (q.hi - q.lo);
  const v = (a + (b - a) * t) * (1 + (tier || 0) * 0.15);
  return k === 'hp' ? Math.round(v) : +v.toFixed(4);
}

export const linesOf = (g, id) => g.ext.refine?.[id] || [];

// 세공석 쓰기 → '' (성공) 또는 막힌 까닭
export function applyStone(g, id, stone, lineIdx = -1) {
  const it = item(id), q = STONES[stone];
  if (!it || it.kind !== 'weapon' || !g.inv.has(id)) return '무기를 고르세요';
  if (!q) return '세공석을 고르세요';
  if ((g.mats[stone] || 0) < 1) return `${MATS[stone].name}이 없어요 (달빛 광맥에서 나와요)`;
  const R = (g.ext.refine ||= {});
  const cur = R[id] || [];
  if (q.one) {
    if (!cur.length) return '먼저 거친·맑은 세공석으로 옵션을 새기세요';
    if (lineIdx < 0 || lineIdx >= cur.length) return '다시 새길 줄을 고르세요';
    const others = new Set(cur.filter((_, i) => i !== lineIdx).map((l) => l.k));
    const k = pick(Object.keys(REFINE_OPTS).filter((x) => !others.has(x)));
    cur[lineIdx] = { k, v: rollValue(k, q, it.tier) };
    R[id] = cur;
  } else {
    const keys = Object.keys(REFINE_OPTS), out = [];
    for (let i = 0; i < q.lines; i++) {
      const k = keys.splice(Math.floor(Math.random() * keys.length), 1)[0];
      out.push({ k, v: rollValue(k, q, it.tier) });
    }
    R[id] = out;
  }
  g.mats[stone]--;
  g.stats.refines = (g.stats.refines || 0) + 1;
  return '';
}

// 지금 직업이 낀 무기의 세공 옵션 합 (Player.recalc가 더함)
export function refineStats(g, cls) {
  const id = g.progressOf(cls).weapon, t = {};
  for (const l of linesOf(g, id)) t[l.k] = (t[l.k] || 0) + l.v;
  return t;
}

// 값이 범위의 어디쯤인지 (색: 낮음 회색 → 높음 금색 → 한계 넘음 무지개)
function grade(l, tier) {
  const [a, b] = REFINE_OPTS[l.k];
  const r = (l.v / (1 + (tier || 0) * 0.15) - a) / (b - a);
  return r > 1.02 ? 'over' : r > 0.75 ? 'hi' : r > 0.4 ? 'mid' : 'lo';
}

// 가방 → 세공 탭
export function renderRefine(g, el, msg = '') {
  const p = g.player, pr = g.progressOf(p.cls);
  const owned = WEAPONS[p.cls].filter((w) => g.inv.has(w.id));
  const ui = g.ui;
  if (!ui.refPick || !owned.some((w) => w.id === ui.refPick)) ui.refPick = pr.weapon || owned[0]?.id;
  const it = item(ui.refPick);
  const lines = linesOf(g, ui.refPick);
  if (ui.refLine >= lines.length) ui.refLine = -1;
  const icon = (k) => `<i class="mat-ic" style="background:linear-gradient(180deg, ${MATS[k].icon[0]} 0 62%, ${MATS[k].icon[1]} 62%)"></i>`;
  const stoneBtn = (k, label) => `<button data-stone="${k}" ${(g.mats[k] || 0) > 0 && (k !== 'stoneM' || (lines.length && ui.refLine >= 0)) ? '' : 'disabled'}>${icon(k)} ${label} <small>(${g.mats[k] || 0})</small></button>`;
  el.innerHTML = `<div class="mats">${['stoneR', 'stoneC', 'stoneM'].map((k) => `<span class="mat">${icon(k)}<em style="color:${MATS[k].color}">${MATS[k].name}</em><b>${g.mats[k] || 0}</b></span>`).join('')}</div>
    <div class="enh-box ref-box">
      <div class="enh-name" style="color:${RARITY[it?.tier ?? 0].color}">${it ? it.name : '무기 없음'}${pr.weapon === ui.refPick ? ' <small>(착용 중)</small>' : ''}</div>
      <div class="ref-lines">${lines.length ? lines.map((l, i) => `<button class="ref-line ${grade(l, it?.tier)}${ui.refLine === i ? ' on' : ''}" data-line="${i}">${STATS[l.k].name} ${STATS[l.k].fmt(l.v)}</button>`).join('') : '<div class="pz-note" style="margin:0">아직 새긴 옵션이 없어요</div>'}</div>
      <div class="ref-btns">${stoneBtn('stoneR', '두 줄 새기기')}${stoneBtn('stoneC', '세 줄 새기기')}${stoneBtn('stoneM', '고른 줄만 다시')}</div>
      <div class="enh-msg">${msg}</div>
    </div>
    <div class="bag-sec">세공할 무기</div><div class="grid ref-list">${owned.map((w) => `<div class="row ref-w${w.id === ui.refPick ? ' on' : ''}" data-w="${w.id}"><span style="color:${RARITY[w.tier].color}">${w.name}</span><small>${linesOf(g, w.id).length ? linesOf(g, w.id).map((l) => STATS[l.k].name).join(' · ') : '세공 없음'}</small></div>`).join('')}</div>
    <div class="pz-note">세공석은 <b>달빛 광맥</b>(메뉴 → 시간 던전)에서 나와요. 거친 세공석은 두 줄, 맑은 세공석은 세 줄을 새로 새기고(있던 줄은 사라져요), 달빛 세공석은 고른 한 줄만 더 좋은 값으로 다시 새겨요. 옵션은 끼고 있는 무기의 것만 붙고, 무기를 바꿔도 새긴 줄은 그 무기에 남아요.</div>`;
  for (const b of el.querySelectorAll('[data-w]')) b.addEventListener('click', (e) => { e.stopPropagation(); ui.refPick = b.dataset.w; ui.refLine = -1; renderRefine(g, el); });
  for (const b of el.querySelectorAll('[data-line]')) b.addEventListener('click', (e) => { e.stopPropagation(); ui.refLine = ui.refLine === +b.dataset.line ? -1 : +b.dataset.line; renderRefine(g, el); });
  for (const b of el.querySelectorAll('[data-stone]')) b.addEventListener('click', (e) => {
    e.stopPropagation();
    const err = applyStone(g, ui.refPick, b.dataset.stone, ui.refLine);
    if (err) { g.audio.play('denied'); renderRefine(g, el, err); return; }
    g.audio.play(b.dataset.stone === 'stoneM' ? 'levelup' : 'coin');
    g.ui.flash('#bfe8ff', 0.12);
    p.recalc(); g.records?.check?.(); g.save(false);
    renderRefine(g, el, '새겼어요!');
  });
}
