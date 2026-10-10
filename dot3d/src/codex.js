// 도감: 채울수록 능력치가 오름 (모든 직업에 함께 적용)
//  - 요괴 도감: 몬스터를 쓰러뜨리면 저절로 등록. 처치 수에 따라 ★1(1마리) ★2(50) ★3(300)
//               몬스터마다 오르는 능력치가 정해져 있고, 한 지역 몬스터를 모두 등록하면 지역 효과
//  - 장비 도감: 무기·갑옷을 얻으면 저절로 등록 (등급이 높을수록 많이)
//  - 장신구 도감: 방어구·장신구를 하나씩 '등록'(그 장비는 사라짐) — 종류 넷 × 등급 다섯 + 세트 여덟
//                 한 종류의 다섯 등급을 모두 채우면 줄 효과
import { MONSTERS } from './records.js';
import { WEAPONS, OUTFITS } from './items.js';
import { SETS, STATS } from './gear.js';

export const CODEX_KINDS = ['gloves', 'legs', 'belt', 'ring'];
export const KIND_NAME = { gloves: '장갑', legs: '각반', belt: '허리띠', ring: '반지' };
export const MON_STAR = [1, 50, 300];
// 몬스터 칸마다 오르는 능력치 (차례로 돌아감), 보스는 3배
const MON_STAT = [['hp', 5], ['atk', 0.003], ['def', 0.002], ['crit', 0.002], ['critDmg', 0.008]];
const KIND_STAT = { gloves: ['crit', 0.003], legs: ['hp', 8], belt: ['def', 0.003], ring: ['atk', 0.004] };
const ROW_BONUS = { gloves: { critDmg: 0.06 }, legs: { spd: 0.03 }, belt: { hp: 40 }, ring: { atk: 0.02 } };
const SET_STAT = { atk: 0.006, hp: 12 };
const REGION_BONUS = { hp: 15, atk: 0.006 };

export const monStars = (kills = 0) => MON_STAR.filter((n) => kills >= n).length;
export const monStat = (i, boss) => { const [k, v] = MON_STAT[i % MON_STAT.length]; return [k, v * (boss ? 3 : 1)]; };
export const gearKey = (kind, tier) => `${kind}${tier}`;
export const kindStat = (kind, tier) => { const [k, v] = KIND_STAT[kind]; return [k, v * (tier + 1)]; };
export { ROW_BONUS, SET_STAT, REGION_BONUS };

export const fmtStat = (k, v) => `${STATS[k].name} ${STATS[k].fmt(v)}`;
export const fmtStats = (o) => Object.entries(o).filter(([, v]) => v).map(([k, v]) => fmtStat(k, v)).join(', ');

// 지역별 몬스터 묶음 (도감 지역 효과용)
export function regionsOf() {
  const R = {};
  for (const m of MONSTERS) (R[m.region] ||= []).push(m);
  return R;
}

export class Codex {
  constructor(game) { this.game = game; this.cache = null; }
  get reg() { return (this.game.codexReg ||= {}); }
  dirty() { this.cache = null; }

  // 모든 도감 효과의 합
  stats() {
    if (this.cache) return this.cache;
    const g = this.game, S = g.stats, t = {};
    const add = (k, v) => { t[k] = (t[k] || 0) + v; };
    MONSTERS.forEach((m, i) => { const n = monStars(S.killsBy?.[m.type]); if (n) { const [k, v] = monStat(i, m.boss); add(k, v * n); } });
    for (const list of Object.values(regionsOf())) if (list.every((m) => S.killsBy?.[m.type])) for (const [k, v] of Object.entries(REGION_BONUS)) add(k, v);
    for (const list of Object.values(WEAPONS)) for (const w of list) if (w.tier && g.inv.has(w.id)) add('atk', 0.0015 * w.tier);
    for (const o of OUTFITS) if (o.tier && g.inv.has(o.id)) add('hp', 3 * o.tier);
    for (const kind of CODEX_KINDS) {
      let full = true;
      for (let tier = 0; tier < 5; tier++) { if (this.reg[gearKey(kind, tier)]) { const [k, v] = kindStat(kind, tier); add(k, v); } else full = false; }
      if (full) for (const [k, v] of Object.entries(ROW_BONUS[kind])) add(k, v);
    }
    for (const id of Object.keys(SETS)) if (this.reg['set_' + id]) for (const [k, v] of Object.entries(SET_STAT)) add(k, v);
    for (const k of Object.keys(t)) t[k] = k === 'hp' ? Math.round(t[k]) : +t[k].toFixed(4);
    return (this.cache = t);
  }

  // 등록할 수 있는 장비 (착용하지 않은 것 중 가장 안 좋은 것부터)
  candidate(key) {
    const g = this.game;
    const free = g.gear.filter((x) => !g.isEquippedAny(x));
    if (key.startsWith('set_')) return free.filter((x) => x.set === key.slice(4)).sort((a, b) => (a.enh || 0) - (b.enh || 0))[0] || null;
    const kind = key.replace(/\d$/, ''), tier = +key.slice(-1);
    return free.filter((x) => !x.set && x.kind === kind && x.tier === tier).sort((a, b) => (a.enh || 0) - (b.enh || 0) || a.lv - b.lv)[0] || null;
  }

  register(key) {
    const g = this.game;
    if (this.reg[key]) return false;
    const it = this.candidate(key);
    if (!it) return false;
    g.gear.splice(g.gear.indexOf(it), 1);
    this.reg[key] = 1;
    this.dirty();
    g.player.recalc();
    g.save(false);
    return true;
  }
}

// 도감 창 (일시정지 창 안): 요괴 / 장비 / 장신구 등록
export function renderCodex(game, el, sub = 'mon') {
  const g = game, C = g.codex, S = g.stats;
  C.sub = sub;
  const tot = C.stats();
  const nMon = MONSTERS.filter((m) => S.killsBy?.[m.type]).length;
  const nReg = Object.keys(C.reg).length;
  const nGearAll = CODEX_KINDS.length * 5 + Object.keys(SETS).length;
  const tabs = [['mon', `요괴 ${nMon}/${MONSTERS.length}`], ['item', '장비'], ['gear', `장신구 등록 ${nReg}/${nGearAll}`]];
  let body = '';
  if (sub === 'mon') {
    const R = regionsOf();
    for (const [region, list] of Object.entries(R)) {
      const done = list.every((m) => S.killsBy?.[m.type]);
      body += `<div class="cx-region"><span>${region}</span><span class="${done ? 'done' : ''}">${done ? '✔ ' : ''}지역 효과: ${fmtStats(REGION_BONUS)}</span></div><div class="cx-grid">`;
      for (const m of list) {
        const i = MONSTERS.indexOf(m), k = S.killsBy?.[m.type] || 0, n = monStars(k);
        const [sk, sv] = monStat(i, m.boss);
        body += n
          ? `<div class="cx-card on"><b>${m.name}</b><span class="stars">${'★'.repeat(n)}<i>${'★'.repeat(3 - n)}</i></span> <small>처치 ${k}${n < 3 ? ` · 다음 ★ ${MON_STAR[n]}` : ''}</small><br><span class="eff">${fmtStat(sk, sv * n)}</span> <small>(★마다 ${fmtStat(sk, sv)})</small></div>`
          : `<div class="cx-card lock"><b>???</b><small>아직 만나지 못함 · ★마다 ${fmtStat(sk, sv)}</small></div>`;
      }
      body += '</div>';
    }
  } else if (sub === 'item') {
    body += '<div class="pz-note" style="margin-top:0">무기·갑옷은 얻는 순간 등록돼요. 등급이 높을수록 많이 올라요 (모든 직업 무기 포함).</div><div class="cx-grid">';
    for (const [cls, list] of Object.entries(WEAPONS)) for (const w of list) if (w.tier) body += g.inv.has(w.id) ? `<div class="cx-card on"><b>${w.name}</b><span class="eff">${fmtStat('atk', 0.0015 * w.tier)}</span></div>` : `<div class="cx-card lock"><b>???</b><small>${fmtStat('atk', 0.0015 * w.tier)}</small></div>`;
    for (const o of OUTFITS) if (o.tier) body += g.inv.has(o.id) ? `<div class="cx-card on"><b>${o.name}</b><span class="eff">${fmtStat('hp', 3 * o.tier)}</span></div>` : `<div class="cx-card lock"><b>???</b><small>${fmtStat('hp', 3 * o.tier)}</small></div>`;
    body += '</div>';
  } else {
    body += '<div class="pz-note" style="margin-top:0">끼지 않은 방어구·장신구를 하나 바쳐 칸을 채워요 (바친 장비는 사라져요). 한 줄 다섯 칸을 모두 채우면 줄 효과가 더 붙어요.</div>';
    const TIER = ['일반', '고급', '희귀', '영웅', '전설'];
    for (const kind of CODEX_KINDS) {
      const full = [0, 1, 2, 3, 4].every((t) => C.reg[gearKey(kind, t)]);
      body += `<div class="cx-region"><span>${KIND_NAME[kind]}</span><span class="${full ? 'done' : ''}">${full ? '✔ ' : ''}줄 효과: ${fmtStats(ROW_BONUS[kind])}</span></div><div class="cx-row">`;
      for (let t = 0; t < 5; t++) {
        const key = gearKey(kind, t), [sk, sv] = kindStat(kind, t), on = C.reg[key], cand = !on && C.candidate(key);
        body += `<div class="cx-slot${on ? ' on' : ''}">${TIER[t]}<br><small>${fmtStat(sk, sv)}</small>${on ? '<br>✔' : cand ? `<br><button data-reg="${key}">등록</button>` : ''}</div>`;
      }
      body += '</div>';
    }
    body += `<div class="cx-region"><span>세트 (조각 아무거나 하나)</span><span>칸마다 ${fmtStats(SET_STAT)}</span></div><div class="cx-grid">`;
    for (const [id, Sx] of Object.entries(SETS)) {
      const key = 'set_' + id, on = C.reg[key], cand = !on && C.candidate(key);
      body += `<div class="cx-card${on ? ' on' : ' lock'}" style="opacity:1"><b style="color:${Sx.color}">${Sx.name}</b>${on ? '<span class="eff">✔ 등록</span>' : cand ? `<button data-reg="${key}" class="pz-btn">등록 (${cand.name})</button>` : '<small>조각이 없어요</small>'}</div>`;
    }
    body += '</div>';
  }
  el.innerHTML = `<h3>도감</h3><div class="cx-sum"><b>도감 효과 합계</b> (모든 직업): ${fmtStats(tot) || '아직 없음'}</div>
    <div class="pz-seg" style="margin-bottom:8px">${tabs.map(([k, n]) => `<button data-cx="${k}" class="${k === sub ? 'on' : ''}">${n}</button>`).join('')}</div>${body}`;
  for (const b of el.querySelectorAll('[data-cx]')) b.addEventListener('click', () => renderCodex(g, el, b.dataset.cx));
  for (const b of el.querySelectorAll('[data-reg]')) b.addEventListener('click', () => {
    if (C.register(b.dataset.reg)) { g.audio.play('levelup'); g.ui.toast('도감 등록! 능력치가 올랐어요', 1.8); }
    renderCodex(g, el, sub);
  });
}
