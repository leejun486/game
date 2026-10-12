// 엽전 · 장터(상점) · 공방(옵션 다시 굴리기 · 등급 올리기)
//  엽전: 몬스터·보스·임무·현상수배·오늘의 목표·분해로 얻음. 장터에서 주문서·혼석·장신구 꾸러미를 삼
//  도깨비 가루: 방어구·장신구를 분해하면 나옴. 공방에서 옵션을 다시 굴릴 때 씀
//  혼석은 하루에 정해진 만큼만 살 수 있음 (보스를 잡는 게 여전히 주된 길)
//  상태는 game.ext (저장됨): { coins, day, bought: {상품: 오늘 산 수} }
import { MATS } from './enhance.js';
import { makeGear, rollGearTier, rerollGear, rarityOf, drawGearIcon, gearLines, SLOT_NAME } from './gear.js';
import { RARITY } from './items.js';
import { PETS, petOwned, renderPets } from './pet.js';

export const today = () => { const d = new Date(); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; };

// 상품: [아이디, 이름, 값, 하루 한도(없으면 무제한), 사면 할 일]
export const GOODS = [
  { id: 'scrollW', price: 150, give: { scrollW: 1 } },
  { id: 'scrollA', price: 150, give: { scrollA: 1 } },
  { id: 'scrollG', price: 150, give: { scrollG: 1 } },
  { id: 'bless', price: 1200, give: { bless: 1 } },
  { id: 'soul', price: 2000, give: { soul: 1 }, limit: 1 },
  { id: 'dust2soul', name: '혼석 바꾸기 (도깨비 가루 30)', dust: 30, price: 0, give: { soul: 1 }, limit: 1 },
  { id: 'box', name: '장신구 꾸러미', price: 400, box: true, desc: '무작위 방어구·장신구 하나 (레벨에 맞게)' },
];

// 몬스터를 쓰러뜨리면 얻는 엽전 (보스는 많이)
export function coinsFor(e, round = 0) {
  const lv = Math.max(1, e.lvl || 1);
  const base = (2 + lv * 0.6) * (e.elite ? 4 : 1) * (e.isBoss ? 30 : 1) * (1 + round * 0.15);
  return Math.max(1, Math.round(base * (0.75 + Math.random() * 0.5)));
}
// 분해하면 얻는 엽전·가루
export const salvageCoins = (g) => 5 + g.tier * g.tier * 6 + g.lv;
export const salvageDust = (g) => (g.set ? 3 : 1) + g.tier;
// 공방 값
export const rerollCost = (g) => ({ dust: 2 + g.tier * 2, coins: 50 * (g.tier + 1) });
export const upgradeCost = (tier) => 150 * (tier + 1);

export class Shop {
  constructor(game) { this.game = game; this.sub = 'buy'; this.pick = null; }
  get ext() { return this.game.ext; }
  get coins() { return this.ext.coins || 0; }

  // 날이 바뀌면 오늘 산 수를 비움
  roll() { const E = this.ext; if (E.day !== today()) { E.day = today(); E.bought = {}; } return E.bought; }
  left(G) { return G.limit ? Math.max(0, G.limit - (this.roll()[G.id] || 0)) : Infinity; }

  gain(n, at) {
    if (!n) return;
    const g = this.game;
    this.ext.coins = this.coins + n;
    g.stats.coins = (g.stats.coins || 0) + n;
    if (at) g.fx.number(at, `+${n} 엽전`, 'coin');
    if (this.coins >= 200) g.coach.tip('shop', 1.5);
  }
  spend(n) { if (this.coins < n) return false; this.ext.coins = this.coins - n; return true; }

  buy(id) {
    const g = this.game, G = GOODS.find((x) => x.id === id);
    if (!G) return '없는 물건이에요';
    if (!this.left(G)) return '오늘은 더 살 수 없어요 (내일 다시)';
    if (G.dust && (g.mats.dust || 0) < G.dust) return `${MATS.dust.name}가 모자라요`;
    if (this.coins < G.price) return '엽전이 모자라요';
    if (G.box && g.gear.filter((x) => !g.isEquippedAny(x)).length >= 40) return '가방이 가득 찼어요';
    this.spend(G.price);
    if (G.dust) g.mats.dust -= G.dust;
    if (G.limit) this.roll()[G.id] = (this.roll()[G.id] || 0) + 1;
    if (G.give) g.gainMats(G.give);
    if (G.box) g.pickupGear(makeGear(Math.max(1, g.player.level), rollGearTier(0.25, g.round)));
    g.stats.bought = (g.stats.bought || 0) + 1;
    g.records?.check?.();
    g.save(false);
    return '';
  }

  // 공방: 옵션 다시 굴리기 (주 옵션·등급·레벨·강화·고유 효과는 그대로)
  reroll(uid) {
    const g = this.game, it = g.gearByUid(uid);
    if (!it) return '장비를 고르세요';
    if (it.set) return '세트 장비는 옵션을 바꿀 수 없어요';
    const c = rerollCost(it);
    if ((g.mats.dust || 0) < c.dust) return `${MATS.dust.name}가 모자라요 (${c.dust}개 필요)`;
    if (this.coins < c.coins) return `엽전이 모자라요 (${c.coins} 필요)`;
    g.mats.dust -= c.dust; this.spend(c.coins);
    rerollGear(it);
    g.stats.rerolls = (g.stats.rerolls || 0) + 1;
    if (g.isEquipped(it)) g.player.recalc();
    g.save(false);
    return '';
  }

  // 공방: 같은 종류·같은 등급 셋을 바쳐 한 등급 높은 것 하나 (잠근 것·착용한 것·세트는 빼고)
  upgradeSet(kind, tier) {
    const g = this.game;
    return g.gear.filter((x) => x.kind === kind && x.tier === tier && !x.set && !x.lock && !g.isEquippedAny(x)).sort((a, b) => (a.enh || 0) - (b.enh || 0) || a.lv - b.lv).slice(0, 3);
  }
  upgrade(kind, tier) {
    const g = this.game;
    if (tier >= 4) return '전설은 더 올릴 수 없어요';
    const three = this.upgradeSet(kind, tier);
    if (three.length < 3) return '같은 종류·같은 등급이 셋 있어야 해요';
    const cost = upgradeCost(tier);
    if (this.coins < cost) return `엽전이 모자라요 (${cost} 필요)`;
    this.spend(cost);
    for (const x of three) g.gear.splice(g.gear.indexOf(x), 1);
    const lv = Math.max(...three.map((x) => x.lv));
    const out = makeGear(lv, tier + 1, kind);
    g.gear.push(out);
    g.stats.crafted = (g.stats.crafted || 0) + 1;
    g.records?.check?.();
    g.ui.refreshBag();
    g.save(false);
    this.pick = out.uid;
    return '';
  }
}

const matIcon = (k) => `<i class="mat-ic" style="background:linear-gradient(180deg, ${MATS[k].icon[0]} 0 62%, ${MATS[k].icon[1]} 62%)"></i>`;
export const coinIcon = () => '<i class="coin-ic"></i>';

// 장터 창 (일시정지 창 안): 사기 / 공방 / 수호령
export function renderShop(game, el, sub = game.shop.sub || 'buy', msg = '') {
  const g = game, S = g.shop, M = g.mats;
  S.sub = sub;
  const tabs = [['buy', '사기'], ['craft', '공방'], ['pet', '수호령']];
  let body = '';
  if (sub === 'buy') {
    body = '<div class="shop-list">' + GOODS.map((G) => {
      const name = G.name || MATS[G.id]?.name;
      const left = S.left(G);
      const can = left > 0 && S.coins >= G.price && (!G.dust || (M.dust || 0) >= G.dust);
      const ic = G.box ? '<i class="mat-ic box-ic"></i>' : matIcon(G.id === 'dust2soul' ? 'soul' : G.id);
      return `<div class="shop-row${can ? '' : ' off'}">${ic}<div class="sr-t"><b>${name}</b><small>${G.desc || (G.id === 'dust2soul' ? `${MATS.dust.name} ${G.dust}개 → ${MATS.soul.name} 1개` : '')}${G.limit ? ` · ${left === Infinity ? '' : `오늘 남은 수 ${left}`}` : ''}</small></div>
        <div class="sr-p">${G.price ? `${coinIcon()}${G.price}` : `${matIcon('dust')}${G.dust}`}</div><button data-buy="${G.id}" ${can ? '' : 'disabled'}>사기</button></div>`;
    }).join('') + '</div><div class="pz-note">엽전은 몬스터·보스·임무·현상수배·오늘의 목표, 그리고 방어구·장신구를 분해해서 얻어요. 혼석은 하루에 하나씩만 살 수 있어요 — 보스 도전에서 더 많이 얻을 수 있어요.</div>';
  } else if (sub === 'craft') {
    const free = g.gear.filter((x) => !x.set);
    if (!S.pick || !g.gearByUid(S.pick)) S.pick = free[0]?.uid || null;
    const it = S.pick && g.gearByUid(S.pick);
    const c = it && rerollCost(it);
    body = `<h4 class="cx-h">옵션 다시 굴리기</h4><div class="pz-note" style="margin-top:0">주 옵션·등급·강화 단계는 그대로 두고 나머지 옵션을 새로 뽑아요. 세트 장비는 안 돼요.</div>`;
    if (it) {
      body += `<div class="craft-pick"><canvas width="12" height="12" class="cp-ic"></canvas><div><b style="color:${rarityOf(it).color}">${it.name}</b>${g.isEquipped(it) ? ' <small>(착용 중)</small>' : ''}<div class="cp-lines">${gearLines(it).map((l) => `<span>${l}</span>`).join('')}</div></div></div>
        <div class="craft-cost">${matIcon('dust')} ${MATS.dust.name} ${c.dust} <small>(${M.dust || 0})</small> · ${coinIcon()} ${c.coins} <small>(${S.coins})</small></div>
        <button class="pz-btn main" data-reroll="${it.uid}" ${(M.dust || 0) >= c.dust && S.coins >= c.coins ? '' : 'disabled'}>다시 굴리기</button>`;
    } else body += '<div class="pz-note">바꿀 수 있는 장비가 없어요.</div>';
    body += `<div class="grid craft-grid">${free.map((x) => `<div class="row craft-it${x.uid === S.pick ? ' on' : ''}" data-pick="${x.uid}"><canvas width="12" height="12" data-g="${x.uid}"></canvas><span style="color:${rarityOf(x).color}">${x.enh ? '+' + x.enh + ' ' : ''}${x.name}</span>${x.lock ? '🔒' : ''}</div>`).join('')}</div>`;
    // 등급 올리기
    const TIER = ['일반', '고급', '희귀', '영웅'];
    body += `<h4 class="cx-h">등급 올리기</h4><div class="pz-note" style="margin-top:0">끼지 않은 같은 종류·같은 등급 셋을 바쳐 한 등급 높은 것 하나를 만들어요 (잠근 것은 빼고). 레벨은 셋 중 가장 높은 것을 따라요.</div><div class="craft-up">`;
    for (const kind of ['gloves', 'legs', 'belt', 'ring']) for (let t = 0; t < 4; t++) {
      const n = g.gear.filter((x) => x.kind === kind && x.tier === t && !x.set && !x.lock && !g.isEquippedAny(x)).length;
      if (!n) continue;
      const ok = n >= 3 && S.coins >= upgradeCost(t);
      body += `<div class="up-row${ok ? '' : ' off'}"><span><b style="color:${RARITY[t].color}">${TIER[t]}</b> ${SLOT_NAME[kind]} ${n}/3 → <b style="color:${RARITY[t + 1].color}">${['고급', '희귀', '영웅', '전설'][t]}</b></span><span>${coinIcon()}${upgradeCost(t)}</span><button data-up="${kind}:${t}" ${ok ? '' : 'disabled'}>만들기</button></div>`;
    }
    body += '</div>';
  } else {
    body = renderPets(g);
  }
  el.innerHTML = `<h3>장터</h3><div class="cx-sum shop-sum">${coinIcon()} 엽전 <b>${S.coins}</b> · ${matIcon('dust')} ${MATS.dust.name} <b>${M.dust || 0}</b></div>
    <div class="pz-seg" style="margin-bottom:8px">${tabs.map(([k, n]) => `<button data-sh="${k}" class="${k === sub ? 'on' : ''}">${n}</button>`).join('')}</div>${msg ? `<div class="enh-msg shop-msg">${msg}</div>` : ''}${body}`;
  for (const b of el.querySelectorAll('[data-sh]')) b.addEventListener('click', () => renderShop(g, el, b.dataset.sh));
  for (const b of el.querySelectorAll('[data-buy]')) b.addEventListener('click', () => {
    const err = S.buy(b.dataset.buy);
    g.audio.play(err ? 'denied' : 'coin');
    renderShop(g, el, sub, err || '샀어요!');
  });
  for (const cv of el.querySelectorAll('canvas[data-g]')) { const x = g.gearByUid(cv.dataset.g); if (x) drawGearIcon(cv, x); }
  const cp = el.querySelector('.cp-ic'); if (cp && S.pick) drawGearIcon(cp, g.gearByUid(S.pick));
  for (const r of el.querySelectorAll('[data-pick]')) r.addEventListener('click', () => { S.pick = r.dataset.pick; renderShop(g, el, 'craft'); });
  el.querySelector('[data-reroll]')?.addEventListener('click', (e) => {
    const err = S.reroll(e.target.dataset.reroll);
    g.audio.play(err ? 'denied' : 'levelup');
    renderShop(g, el, 'craft', err || '옵션이 바뀌었어요!');
  });
  for (const b of el.querySelectorAll('[data-up]')) b.addEventListener('click', () => {
    const [kind, t] = b.dataset.up.split(':');
    const err = S.upgrade(kind, +t);
    g.audio.play(err ? 'denied' : 'levelup');
    renderShop(g, el, 'craft', err || '새 장비를 만들었어요! 가방에 들어갔어요');
  });
  for (const b of el.querySelectorAll('[data-pet]')) b.addEventListener('click', () => {
    const id = b.dataset.pet, P = PETS[id];
    let err = '';
    if (!petOwned(g, id)) {
      if (P.price && S.spend(P.price)) { (g.ext.pets ||= []).push(id); g.stats.pets = g.ext.pets.length; g.records?.check?.(); }
      else err = P.price ? '엽전이 모자라요' : '아직 얻지 못했어요';
    }
    if (!err) { g.ext.pet = g.ext.pet === id ? null : id; g.pet.set(g.ext.pet); g.player.recalc(); g.save(false); }
    g.audio.play(err ? 'denied' : 'coin');
    renderShop(g, el, 'pet', err);
  });
}
