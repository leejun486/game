import { padGlyph, padMode } from './glyph.js';
import { item, itemDesc, drawItemIcon, RARITY, WEAPONS, OUTFITS, ULTS } from './items.js';
import { tr } from './i18n.js';
import { DYES, HAIRS, unlocked } from './looks.js';
import { ACHIEVEMENTS } from './records.js';
import { EVOS, RUNES, branchOf, rankOf, runeOf, freePoints, RANK_NAME, MAX_RANK } from './evolve.js';
import { drawGearIcon, gearLines, gearScore, SLOT_NAME, STATS, BAG_MAX, salvageExp, GEAR_SLOTS, rarityOf, SETS, setBonuses } from './gear.js';
import { expNeed, SKILL_LEVEL } from './entities.js';

// HTML HUD: 체력, 스킬, 임무, 배너, 대화창, 보스 체력, 적 체력바, 상호작용 표시
export class UI {
  constructor(game) {
    this.game = game;
    const $ = (id) => document.getElementById(id);
    this.el = {
      hud: $('hud'), hpFill: $('hp-fill'), hpLag: $('hp-lag'), hpText: $('hp-text'),
      
      quest: $('quest-text'), questTitle: $('quest-title'),
      banner: $('banner'), bannerMain: $('banner-main'), bannerSub: $('banner-sub'),
      dialog: $('dialog'), dName: $('dialog-name'), dText: $('dialog-text'),
      prompt: $('prompt'), boss: $('boss'), bossFill: $('boss-fill'), bossLag: $('boss-lag'), bossName: $('boss-name'),
      bars: $('hpbars'), title: $('title'), over: $('gameover'), combo: $('combo'), comboN: $('combo-n'),
      kills: $('kills'), best: $('best'), toast: $('toast'), flash: $('flash'),
    };
    this.hpLag = 1;
    this.bossLag = 1;
    this.dialogState = null;
    this.bars = new Map();
    this.bannerT = 0;
    this.toastT = 0;
  }

  showHud(v) { this.el.hud.classList.toggle('hidden', !v); }

  // 직업에 맞게 이름·초상화·버튼 이름을 바꿈
  setClass(cfg, pl = this.game.player) {
    drawPortrait(document.getElementById('portrait-cv'), cfg.id);
    document.getElementById('hero-name').innerHTML = `${cfg.title} <b>${cfg.name}</b><span class="lv">Lv.${pl?.level ?? 1}</span>`;
    this.refreshBag();
    const pr = this.game.progressOf ? this.game.progressOf(cfg.id) : null;
    for (const k of ['atk', 'dash', 'skill', 'skill2', 'skill3']) {
      // 파생 기술을 수련했으면 그 이름으로
      const slot = { skill: 1, skill2: 2, skill3: 3 }[k];
      const br = slot && pr ? branchOf(pr, cfg.id, pl?.level ?? 1, slot) : null;
      const t = br ? EVOS[cfg.id][slot][br].short + RANK_NAME[rankOf(pr, cfg.id, pl?.level ?? 1, slot)] : cfg.labels[k];
      document.getElementById('sk-' + k).textContent = t;
      document.querySelectorAll('.lbl-' + k).forEach((el) => (el.textContent = t));
    }
    document.querySelector('#combo span').textContent = cfg.hitWord;
  }

  setQuest(title, text) {
    const key = title + '|' + text;
    if (key === this.questKey) return;
    const titleChanged = !this.questKey || this.questKey.split('|')[0] !== title;
    this.questKey = key;
    this.el.questTitle.textContent = title;
    if (!titleChanged) { this.el.quest.innerHTML = text; return; }
    this.el.quest.innerHTML = text;
    this.el.quest.parentElement.classList.remove('pulse');
    void this.el.quest.parentElement.offsetWidth;
    this.el.quest.parentElement.classList.add('pulse');
  }

  banner(main, sub = '', dur = 2.6, cls = '') {
    this.el.bannerMain.textContent = main;
    this.el.bannerSub.textContent = sub;
    this.el.banner.className = 'show ' + cls;
    this.bannerT = dur;
  }

  // 쿨타임 표시: HUD 칸과 터치 버튼 모두
  slots(key) {
    this.slotCache = this.slotCache || {};
    if (!this.slotCache[key]) {
      this.slotCache[key] = [...document.querySelectorAll(`[data-slot="${key}"]`)].map((el) => ({ el, cd: el.querySelector('.cd'), t: el.querySelector('.cdt') }));
    }
    return this.slotCache[key];
  }

  setCd(key, remain, max) {
    this.cdState = this.cdState || {};
    const cooling = remain > 0.02;
    const txt = !cooling ? '' : remain >= 1 ? String(Math.ceil(remain)) : remain.toFixed(1);
    const pct = cooling ? ((remain / max) * 100).toFixed(1) + '%' : '0%';
    const prev = this.cdState[key];
    for (const s of this.slots(key)) {
      s.cd.style.setProperty('--p', pct);
      if (s.t.textContent !== txt) s.t.textContent = txt;
      s.el.classList.toggle('cooling', cooling);
      if (prev && !cooling) { s.el.classList.remove('ready'); void s.el.offsetWidth; s.el.classList.add('ready'); }
    }
    this.cdState[key] = cooling;
  }

  // 레벨이 모자라 잠긴 스킬 칸: 흑백 + 필요 레벨
  setLock(key, lv) {
    for (const s of this.slots(key)) {
      s.el.classList.toggle('locked', !!lv);
      if (lv) { s.cd.style.setProperty('--p', '0%'); const t = `Lv${lv}`; if (s.t.textContent !== t) s.t.textContent = t; s.el.classList.remove('cooling'); }
      else if (s.t.textContent.startsWith('Lv')) s.t.textContent = '';
    }
  }

  // ---------- 기술 수련 ----------
  showSkills(open) {
    document.getElementById('skills').classList.toggle('show', open);
    if (open) this.refreshSkills();
  }

  refreshSkills() {
    const g = this.game, p = g.player;
    const body = document.getElementById('skills-body');
    if (!body || !document.getElementById('skills').classList.contains('show')) return;
    const pr = g.progressOf(p.cls);
    const pts = freePoints(pr, p.level);
    body.innerHTML = `<div class="evo-pts">수련점 <b>${pts}</b> <small>레벨이 오를 때마다 1점 · 단계마다 1점 · Ⅱ~Ⅴ단계마다 각인을 골라 효과를 바꿔요</small></div>`;
    const keys = { 1: 'K', 2: 'L', 3: 'I' };
    for (const slot of [1, 2, 3]) {
      const E = EVOS[p.cls][slot];
      const r = pr.rank?.[slot] || (pr.evo?.[slot] ? 1 : 0);
      const br = pr.evo?.[slot];
      const next = r < MAX_RANK ? E.lv[r] : null;
      const canTrain = br && next && p.level >= next && pts > 0;
      const row = document.createElement('div');
      row.className = 'evo-row' + (p.level < E.lv[0] ? ' locked' : '');
      const pips = Array.from({ length: MAX_RANK }, (_, i) => `<i class="${i < r ? 'on' : ''}">${RANK_NAME[i + 1]}</i>`).join('');
      let status;
      if (p.level < E.lv[0]) status = `Lv.${E.lv[0]}에 수련 가능 (지금 Lv.${p.level})`;
      else if (!br) status = pts > 0 ? '<b style="color:#ffd76a">수련 가능!</b> 갈래를 고르세요' : '수련점이 없어요';
      else if (!next) status = '<b style="color:#ffd76a">각성 완료</b>';
      else status = `다음 단계 ${RANK_NAME[r + 1]}: Lv.${next}`;
      row.innerHTML = `<div class="evo-head"><span class="key">${keys[slot]}</span>${E.base}<span class="pips">${pips}</span><small>${status}</small></div>`;
      const opts = document.createElement('div');
      opts.className = 'evo-opts';
      for (const b of ['a', 'b']) {
        const B = E[b];
        const o = document.createElement('div');
        const mine = br === b;
        o.className = 'evo-opt' + (mine ? ' on' : '');
        o.innerHTML = `<b>${B.name}</b><span>${B.desc}</span>`;
        if (p.level >= E.lv[0]) o.addEventListener('click', (e) => { e.stopPropagation(); g.chooseEvo(slot, b); });
        opts.append(o);
      }
      row.append(opts);
      // Ⅱ~Ⅴ 각인: 단계마다 하나를 고름 (수련한 단계만, 언제든 바꿀 수 있음)
      if (br) {
        const rr = rankOf(pr, p.cls, p.level, slot);
        const runes = document.createElement('div');
        runes.className = 'evo-runes';
        for (let k = 2; k <= MAX_RANK; k++) {
          const R = RUNES[k], cur = runeOf(pr, p.cls, p.level, slot, k), open = rr >= k;
          const line = document.createElement('div');
          line.className = 'rune-line' + (open ? '' : ' locked') + (open && !cur ? ' pick' : '');
          line.innerHTML = `<em>${RANK_NAME[k]}</em><span class="rt">${R.title}</span>`;
          for (const [key, o] of Object.entries(R.opts)) {
            const desc = o.desc ?? (key === 'r3' ? E[br].r3 : E[br].r5.replace(/^각성:\s*/, ''));
            const bt = document.createElement('button');
            bt.className = 'rune' + (cur === key ? ' on' : '');
            bt.innerHTML = `<b>${o.name}</b><small>${desc}</small>`;
            bt.title = desc;
            if (open) bt.addEventListener('click', (e) => { e.stopPropagation(); g.chooseRune(slot, k, key); });
            else bt.disabled = true;
            line.append(bt);
          }
          runes.append(line);
        }
        row.append(runes);
      }
      if (br && next) {
        const btn = document.createElement('button');
        btn.className = 'evo-train' + (canTrain ? '' : ' off');
        btn.textContent = canTrain ? `${E[br].name} ${RANK_NAME[r + 1]}단계 수련 (수련점 1)` : p.level < next ? `${RANK_NAME[r + 1]}단계는 Lv.${next}부터` : '수련점이 부족해요';
        if (canTrain) btn.addEventListener('click', (e) => { e.stopPropagation(); g.trainEvo(slot); });
        row.append(btn);
      }
      body.append(row);
    }
  }

  // ---------- 가방 ----------
  showBag(open) {
    document.getElementById('bag').classList.toggle('show', open);
    if (open) this.refreshBag();
  }

  itemRow(id, cls, onClick) {
    const it = item(id);
    const row = document.createElement('div');
    row.className = 'it ' + cls;
    const cv = document.createElement('canvas');
    cv.width = cv.height = 16;
    drawItemIcon(cv, id);
    const txt = document.createElement('div');
    txt.innerHTML = `<span style="color:${RARITY[it.tier].color}">${it.name}</span><small>${RARITY[it.tier].name} · ${itemDesc(it, !cls.includes('locked-it'))}</small>`;
    row.append(cv, txt);
    if (onClick) row.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
    return row;
  }

  refreshBag() {
    const g = this.game;
    if (!g || !g.player || !document.getElementById('bag').classList.contains('show')) return;
    const p = g.player;
    const pr = g.progressOf(p.cls);
    const G = p.gear || {};
    const pct = (v) => `${((v || 0) * 100).toFixed(1)}%`;
    const st = [
      ['레벨', `Lv.${p.level} (${Math.floor(p.exp)}/${expNeed(p.level)})`], ['최대 체력', p.maxHp], ['공격력', `×${p.atkMul.toFixed(2)}`],
      ['받는 피해', `-${Math.round(p.def * 100)}%`], ['치명타 확률', `+${pct(G.crit)}`], ['치명타 피해', `+${Math.round((G.critDmg || 0) * 100)}%`],
      ['이동 속도', `+${pct(G.spd)}`], ['스킬 재사용', `-${pct(G.cdr)}`], ['흡혈', pct(G.ls)], ['체력 회복', `+${(G.regen || 0).toFixed(1)}/초`], ['경험치', `+${Math.round((G.exp || 0) * 100)}%`],
    ];
    document.getElementById('bag-stats').innerHTML = `<div style="color:#ffd76a;margin-bottom:2px">${p.cfg.title} ${p.cfg.name}</div>` + st.map(([k, v]) => `<div class="st"><span>${k}</span><b>${v}</b></div>`).join('');
    // 장비 칸 7개
    const eqEl = document.getElementById('bag-eq');
    eqEl.innerHTML = '';
    const slotRow = (label, icon, name, color, onClick, sel) => {
      const d = document.createElement('div');
      d.className = 'eqs' + (sel ? ' sel' : '');
      const cv = document.createElement('canvas'); cv.width = cv.height = 16;
      if (icon) icon(cv);
      d.append(cv);
      d.insertAdjacentHTML('beforeend', `<span class="sl">${label}</span>` + (name ? `<span style="color:${color}">${name}</span>` : '<span class="empty">비어 있음</span>'));
      if (onClick) d.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
      eqEl.append(d);
    };
    for (const [slot, id] of [['무기', pr.weapon], ['갑옷', pr.outfit]]) {
      const it = item(id);
      slotRow(slot, (cv) => drawItemIcon(cv, id), it?.name, RARITY[it?.tier ?? 0].color, () => { this.tab('main'); });
    }
    for (const slot of GEAR_SLOTS) {
      const it = g.gearInSlot(slot);
      slotRow(SLOT_NAME[slot], it ? (cv) => drawGearIcon(cv, it) : null, it?.name, it ? rarityOf(it).color : '', it ? () => { this.pick = it.uid; this.pickSlot = slot; this.tab('gear'); this.refreshBag(); } : null, it && this.pick === it.uid);
    }
    // 켜진 세트 효과
    const sb = setBonuses(g.equippedGear(p.cls));
    for (const { id, n } of sb.active) {
      const S = SETS[id];
      eqEl.insertAdjacentHTML('beforeend', `<div class="setbox"><b>${S.name} (${n}/4)</b><div class="${n >= 2 ? 'on' : ''}">2세트: ${S.b2.text}</div><div class="${n >= 4 ? 'on' : ''}">4세트: ${S.b4.text}</div></div>`);
    }
    // 방어구·장신구 목록 (착용한 것 먼저, 등급 높은 순)
    const free = g.gear.filter((x) => !CLASS_ORDER_EQ(g, x));
    document.getElementById('gear-count').textContent = `${free.length}/${BAG_MAX}`;
    const gl = document.getElementById('bag-gear');
    gl.innerHTML = '';
    const list = [...g.gear].sort((a, b) => (g.isEquipped(b) - g.isEquipped(a)) || (!!b.set - !!a.set) || b.tier - a.tier || gearScore(b) - gearScore(a));
    for (const it of list) {
      const row = document.createElement('div');
      const worn = g.isEquipped(it);
      const other = !worn && CLASS_ORDER_EQ(g, it);
      row.className = 'it' + (worn ? ' worn' : '') + (this.pick === it.uid ? ' pick' : '');
      const cv = document.createElement('canvas'); cv.width = cv.height = 16;
      drawGearIcon(cv, it);
      const cur = g.gearInSlot(it.kind === 'ring' ? g.worseRingSlot() : it.kind);
      const better = !worn && gearScore(it) > gearScore(cur);
      const txt = document.createElement('div');
      txt.innerHTML = `<span style="color:${rarityOf(it).color}">${it.name}</span><small>${it.set ? SETS[it.set].name : rarityOf(it).name} ${SLOT_NAME[it.kind]}${other ? ' · 다른 직업 착용' : ''}</small>`;
      row.append(cv, txt);
      if (better) row.insertAdjacentHTML('beforeend', '<span class="better">▲</span>');
      row.addEventListener('click', (e) => { e.stopPropagation(); this.pick = it.uid; this.pickSlot = null; this.refreshBag(); });
      gl.append(row);
    }
    this.gearDetail();
    // 무기·갑옷 (예전 목록)
    const wl = document.getElementById('bag-weapons'), ol = document.getElementById('bag-outfits');
    wl.innerHTML = ''; ol.innerHTML = '';
    for (const cls of [p.cls, ...Object.keys(WEAPONS).filter((c) => c !== p.cls)]) {
      for (const w of WEAPONS[cls]) {
        if (!g.inv.has(w.id)) { if (cls === p.cls) wl.append(this.itemRow(w.id, 'locked-it')); continue; }
        const mine = cls === p.cls;
        wl.append(this.itemRow(w.id, (pr.weapon === w.id ? 'on' : '') + (mine ? '' : ' other'), mine ? () => g.equipItem(w.id) : null));
      }
    }
    for (const o of [...OUTFITS].sort((a, b) => a.tier - b.tier)) {
      if (!g.inv.has(o.id)) { ol.append(this.itemRow(o.id, 'locked-it')); continue; }
      ol.append(this.itemRow(o.id, pr.outfit === o.id ? 'on' : '', () => g.equipItem(o.id)));
    }
    this.renderLook();
  }

  // 외형 탭: 겉모습만 바꿈 (능력치는 입은 장비 그대로)
  renderLook() {
    const g = this.game, p = g.player, pr = g.progressOf(p.cls);
    const L = (pr.look ||= {});
    const el = document.getElementById('tab-look');
    const achName = (id) => ACHIEVEMENTS.find((a) => a.id === id)?.name || id;
    const chip = (k, v, label, on, extra = '') => `<button class="lk-chip${on ? ' on' : ''}" data-lk="${k}" data-v="${v}"${extra}>${label}</button>`;
    const sw = (k, x, cols, on) => {
      const open = unlocked(g, x);
      const box = cols.map((c) => `<i style="background:${c}"></i>`).join('');
      return `<button class="lk-sw${on ? ' on' : ''}${open ? '' : ' locked'}" data-lk="${k}" data-v="${x.id}"${open ? '' : ' disabled'}><span class="lk-box">${box}</span><span class="lk-n">${x.name}</span>${open ? '' : `<small>🔒 ${achName(x.ach)}</small>`}</button>`;
    };
    const outfits = OUTFITS.filter((o) => g.inv.has(o.id));
    const weapons = WEAPONS[p.cls].filter((w) => g.inv.has(w.id));
    el.innerHTML = `<div class="pz-note" style="margin:0 0 6px">겉모습만 바뀌고 능력치·고유 효과는 입은 장비 그대로예요. 직업마다 따로 기억해요.</div>
      <div class="bag-sec">겉옷 모양</div><div class="lk-row">${chip('outfit', '', '입은 옷 그대로', !L.outfit)}${outfits.map((o) => chip('outfit', o.id, `<span style="color:${RARITY[o.tier].color}">${o.name}</span>`, L.outfit === o.id)).join('')}</div>
      <div class="bag-sec">무기 모양</div><div class="lk-row">${chip('weapon', '', '든 무기 그대로', !L.weapon)}${weapons.map((w) => chip('weapon', w.id, `<span style="color:${RARITY[w.tier].color}">${w.name}</span>`, L.weapon === w.id)).join('')}</div>
      <div class="bag-sec">염색</div><div class="lk-row">${chip('dye', '', '원래 색', !L.dye)}${DYES.map((d) => sw('dye', d, [d.pal.main, d.pal.accent, d.pal.trim], L.dye === d.id)).join('')}</div>
      <div class="bag-sec">머리색</div><div class="lk-row">${chip('hair', '', '원래 색', !L.hair)}${HAIRS.map((h) => sw('hair', h, [h.c], L.hair === h.id)).join('')}</div>
      <div class="bag-sec">방어구 색 (장갑·바지·띠)</div><div class="lk-row">${chip('gearHide', '', '보이기', !L.gearHide)}${chip('gearHide', '1', '숨기기', !!L.gearHide)}</div>`;
    el.onclick = (e) => {
      const b = e.target.closest('[data-lk]');
      if (!b || b.disabled) return;
      e.stopPropagation();
      const k = b.dataset.lk, v = b.dataset.v;
      if (k === 'gearHide') L.gearHide = v === '1'; else if (v) L[k] = v; else delete L[k];
      p.buildRig();
      g.preview?.rebuild();
      g.audio.play('talk');
      g.save(false);
      this.renderLook();
    };
  }

  tab(name) {
    document.querySelectorAll('.bag-tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === name));
    document.getElementById('tab-gear').classList.toggle('hidden', name !== 'gear');
    document.getElementById('tab-main').classList.toggle('hidden', name !== 'main');
    document.getElementById('tab-look').classList.toggle('hidden', name !== 'look');
    document.getElementById('gear-detail').classList.toggle('hidden', name !== 'gear');
  }

  // 고른 장비의 옵션과, 지금 그 칸에 낀 것과의 비교
  gearDetail() {
    const g = this.game;
    const el = document.getElementById('gear-detail');
    const it = this.pick && g.gearByUid(this.pick);
    if (!it) { el.innerHTML = ''; return; }
    const worn = g.isEquipped(it);
    const slot = worn ? Object.entries(g.eqOf()).find(([, u]) => u === it.uid)[0] : it.kind === 'ring' ? g.worseRingSlot() : it.kind;
    const cur = worn ? null : g.gearInSlot(slot);
    const lines = (x) => gearLines(x).join('<br>');
    let cmp = '';
    if (cur) {
      // 옵션별 차이 (새 것 - 지금 것)
      const keys = new Set([...Object.keys(it.stats), ...Object.keys(cur.stats)]);
      cmp = [...keys].map((k) => {
        const d = (it.stats[k] || 0) - (cur.stats[k] || 0);
        if (Math.abs(d) < 1e-6) return '';
        const cls = d > 0 ? 'up' : 'down'; // 모든 옵션은 클수록 좋음
        return `<span class="${cls}">${STATS[k].name} ${d > 0 ? '▲' : '▼'} ${STATS[k].fmt(Math.abs(d)).replace(/^[+-]/, '')}</span>`;
      }).filter(Boolean).join('<br>');
    }
    // 세트 조각이면 세트 효과와 지금 몇 개 끼고 있는지
    let setInfo = '';
    if (it.set) {
      const S = SETS[it.set];
      const n = setBonuses(g.equippedGear(g.player.cls)).cnt[it.set] || 0;
      setInfo = `<div class="setbox"><b>${S.name} (착용 ${n}/4)</b><div class="${n >= 2 ? 'on' : ''}">2세트: ${S.b2.text}</div><div class="${n >= 4 ? 'on' : ''}">4세트: ${S.b4.text}</div></div>`;
    }
    el.innerHTML = `<div class="gd"><div class="gd-top"><canvas width="16" height="16"></canvas><div><div class="gd-name" style="color:${rarityOf(it).color}">${it.name}</div><small>${it.set ? '세트' : rarityOf(it).name} ${SLOT_NAME[it.kind]} · 아이템 레벨 ${it.lv}${worn ? ' · 착용 중' : ''}</small></div></div>` + setInfo +
      `<div class="cmp"><div>${lines(it)}</div>${cur ? `<div><small>지금 낀 ${cur.name}과 비교</small><br>${cmp || '<small>차이 없음</small>'}</div>` : ''}</div>` +
      `<div class="btns">${worn ? '<button data-a="off" class="sub">벗기</button>' : `<button data-a="on">${cur ? '바꿔 끼기' : '착용'}</button>`}${worn ? '' : `<button data-a="salvage" class="sub">분해 (경험치 +${salvageExp(it)})</button>`}</div></div>`;
    drawGearIcon(el.querySelector('canvas'), it);
    el.querySelectorAll('button').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation();
      const a = b.dataset.a;
      if (a === 'on') g.equipGear(it.uid, it.kind === 'ring' ? slot : null);
      else if (a === 'off') { g.unequipGear(slot); }
      else if (a === 'salvage') { this.pick = null; g.salvageGear([it.uid]); }
    }));
  }

  // 쿨타임 중에 누르면 칸이 붉게 흔들림
  denied(key) {
    for (const s of this.slots(key)) { s.el.classList.remove('denied'); void s.el.offsetWidth; s.el.classList.add('denied'); }
  }

  // 오른쪽 아래 작은 저장 표시
  saveMark() {
    const el = document.getElementById('savemark');
    if (!el) return;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
  }

  toast(text, dur = 2.2) {
    this.el.toast.textContent = text;
    this.el.toast.classList.add('show');
    this.toastT = dur;
  }

  flash(color, strength) {
    const f = this.el.flash;
    f.style.transition = 'none';
    f.style.background = color;
    f.style.opacity = String(strength);
    requestAnimationFrame(() => { f.style.transition = 'opacity 0.35s'; f.style.opacity = '0'; });
  }

  dialog(name, lines, onDone) {
    // 한 글자씩 찍히므로 화면 자동 번역 대신 넘겨받을 때 번역
    name = tr(name); lines = lines.map((l) => tr(l));
    this.dialogState = { name, lines, i: 0, shown: 0, onDone, acc: 0 };
    this.el.dialog.classList.add('show');
    this.el.dName.textContent = name;
    this.el.dText.textContent = '';
  }

  get inDialog() { return !!this.dialogState; }

  advance() {
    const d = this.dialogState;
    if (!d) return;
    const line = d.lines[d.i];
    if (d.shown < line.length) { d.shown = line.length; this.el.dText.textContent = line; return; }
    d.i++;
    d.shown = 0;
    d.acc = 0;
    if (d.i >= d.lines.length) {
      this.el.dialog.classList.remove('show');
      this.dialogState = null;
      d.onDone && d.onDone();
    }
  }

  setBoss(enemy, keepLag = false) {
    this.bossEnemy = enemy;
    this.el.boss.classList.toggle('show', !!enemy);
    if (enemy) { this.el.bossName.textContent = (enemy.name || '도깨비 대왕') + (enemy.phase > 1 ? ` · ${enemy.phase}단계` : ''); if (!keepLag) this.bossLag = 1; }
    this.el.boss.dataset.phase = enemy?.phase || 1;
  }

  update(dt) {
    const g = this.game, p = g.player, el = this.el;
    // 체력
    const hp = p.hp / p.maxHp;
    this.hpLag = Math.max(hp, this.hpLag - dt * 0.5);
    el.hpFill.style.width = (hp * 100).toFixed(1) + '%';
    el.hpLag.style.width = (this.hpLag * 100).toFixed(1) + '%';
    el.hpText.textContent = `${Math.ceil(p.hp)} / ${p.maxHp}`;
    el.hpFill.classList.toggle('low', hp < 0.3);
    // 경험치
    const need = expNeed(p.level);
    document.getElementById('exp-fill').style.width = ((p.exp / need) * 100).toFixed(1) + '%';
    const et = `EXP ${Math.floor(p.exp)} / ${need}`;
    const etEl = document.getElementById('exp-text');
    if (etEl.textContent !== et) etEl.textContent = et;
    document.getElementById('bag-dot').classList.toggle('hidden', !this.newItem);
    this.setCd('dash', p.dashCd, p.dashMax || 0.5);
    this.setCd('skill', p.skillCd, p.skillMax * g.skillCdMul(p, 1));
    for (const slot of [2, 3]) {
      const key = 'skill' + slot;
      if (p.level < SKILL_LEVEL[slot]) this.setLock(key, SKILL_LEVEL[slot]);
      else { this.setLock(key, 0); this.setCd(key, (slot === 2 ? p.cd2 : p.cd3) || 0, (slot === 2 ? p.cd2Max : p.cd3Max) * g.skillCdMul(p, slot)); }
    }
    // 보스 무기 고유 기술 칸: 보스 무기를 들었을 때만
    if (this.ultShown !== p.ult) {
      this.ultShown = p.ult;
      for (const u of document.querySelectorAll('.ult')) if (!u.matches('em')) u.classList.toggle('hidden', !p.ult);
      for (const l of document.querySelectorAll('.lbl-ult')) l.textContent = p.ult ? ULTS[p.ult].short : '고유';
    }
    if (p.ult) this.setCd('ult', p.ultCd || 0, p.ultMax);
    el.kills.textContent = g.kills;
    if (el.best) el.best.textContent = g.bestCombo;

    // 보스
    if (this.bossEnemy) {
      const b = this.bossEnemy;
      const k = Math.max(0, b.hp / b.maxHp);
      this.bossLag = Math.max(k, this.bossLag - dt * 0.4);
      el.bossFill.style.width = (k * 100).toFixed(1) + '%';
      el.bossLag.style.width = (this.bossLag * 100).toFixed(1) + '%';
      if (b.dead && this.bossLag <= 0.001) this.setBoss(null);
    }

    // 배너, 토스트
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) el.banner.classList.remove('show'); }
    if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) el.toast.classList.remove('show'); }

    // 연속 베기
    if (g.hitCombo >= 2 && g.time - g.lastHitTime < 2) {
      el.combo.classList.add('show');
      el.comboN.textContent = g.hitCombo;
    } else el.combo.classList.remove('show');

    // 대화 타자 효과
    const d = this.dialogState;
    if (d) {
      const line = d.lines[d.i];
      if (d.shown < line.length) {
        d.acc += dt * 38;
        const before = d.shown;
        d.shown = Math.min(line.length, Math.floor(d.acc));
        if (d.shown > before && d.shown % 2 === 0) g.audio.play('talk');
        el.dText.textContent = line.slice(0, d.shown);
      }
      el.dialog.classList.toggle('done', d.shown >= line.length);
    }

    // 적 체력바
    const ps = g.pixel.pixelSize;
    const live = new Set();
    for (const e of g.enemies) {
      if (e.type === 'boss' || e.dead || e.spawning || e.hp >= e.maxHp) continue;
      live.add(e);
      let bar = this.bars.get(e);
      if (!bar) {
        bar = document.createElement('div');
        bar.className = 'ebar';
        bar.innerHTML = '<i></i>';
        el.bars.appendChild(bar);
        this.bars.set(e, bar);
      }
      const top = e.type === 'wisp' ? 2.0 : 1.75;
      const s = g.pixel.project({ x: e.pos.x, y: e.y + top, z: e.pos.z, isVector3: true, clone() { return this; } });
      bar.style.transform = `translate(${Math.round(s.x / ps) * ps}px, ${Math.round(s.y / ps) * ps}px)`;
      bar.firstChild.style.width = (e.hp / e.maxHp) * 100 + '%';
    }
    for (const [e, bar] of this.bars) if (!live.has(e)) { bar.remove(); this.bars.delete(e); }

    // 상호작용 표시
    const it = g.nearInteract;
    if (it && !this.inDialog && g.state === 'play') {
      const s = g.pixel.project(it.promptPos);
      el.prompt.style.transform = `translate(${Math.round(s.x / ps) * ps}px, ${Math.round(s.y / ps) * ps}px)`;
      el.prompt.innerHTML = `${padMode() ? padGlyph('LB') : '<b>E</b>'}${it.label}`;
      el.prompt.classList.add('show');
    } else el.prompt.classList.remove('show');
  }
}

// 20x20 도트 초상화 (직업별)
const PORTRAITS = {
  sword: {
    bg: '#3a4878',
    rows: [
      '....................',
      '.......hhhhhh.......',
      '.....hhhhhhhhhh.....',
      '....hhhhhhhhhhhh....',
      '...hhhhhhhhhhhhhh...',
      '...rrrrrrrrrrrrrr...',
      '...hhhhsssshhhhhh...',
      '...hhsssssssssshh...',
      '...hssssssssssssh...',
      '...hsseessssseessh..',
      '...hsseWsssseeWsh...',
      '...hsseessssseessh..',
      '...hspssssssssspsh..',
      '....ssssssmmsssss...',
      '.....ssssssssssss...',
      '......ssssssssss....',
      '.......cwwwwwwc.....',
      '.....wwwcwwwwcwww...',
      '....wwwwwcwwcwwwwww.',
      '...wwwwwwwccwwwwwwww',
    ],
    col: { h: '#2a2024', r: '#c8302c', s: '#f6d6b6', e: '#1b1416', W: '#ffffff', p: '#f0a0a0', m: '#b85a50', w: '#eeeae0', c: '#2e4f8f' },
  },
  mage: {
    bg: '#4a3a78',
    rows: [
      '.......kkkkkk.......',
      '.......kkkkkk.......',
      '.......kkkkkk.......',
      '.......vvvvvv.......',
      'kkkkkkkkkkkkkkkkkkkk',
      '...hhhhhhhhhhhhhh...',
      '...hhhhsssshhhhhh...',
      '...hhsssssssssshh...',
      '...hssssssssssssh...',
      '..bhsseessssseesshb.',
      '...hsseWsssseeWsh...',
      '..bhsseessssseesshb.',
      '...hspssssssssspsh..',
      '..b.ssssssmmsssss.b.',
      '.....ssssssssssss...',
      '......ssssssssss....',
      '.......gnnnnnng.....',
      '.....nnngnnnngnnn...',
      '....nnnnngnngnnnnnn.',
      '...nnnnnnnggnnnnnnnn',
    ],
    col: { k: '#16141c', v: '#6a5ad8', h: '#1e1a24', s: '#f4d4b2', e: '#1b1416', W: '#ffffff', p: '#f0a0a0', m: '#b85a50', n: '#3a3a7a', g: '#e0b040', b: '#e0a84a' },
  },
  elf: {
    bg: '#2e5a3a',
    rows: [
      '....................',
      '.......hhhhhh.......',
      '.....hhhhhhhhhhff...',
      '....hhhhhhhhhhhfFf..',
      '...hhhhhhhhhhhhhf...',
      '...hhhhhhhhhhhhhh...',
      '...hhhhsssshhhhhh...',
      '..hhhsssssssssshhh..',
      's.hhssssssssssssh.s.',
      'sshhsseessssseesshss',
      '..hhsseWsssseeWshh..',
      '..hhsseessssseesshh.',
      '..hhspssssssssspshh.',
      '..hh.ssssssmmssss.hh',
      '..hh..ssssssssss..hh',
      '..hh...ssssssss...hh',
      '..hh...lgggggl....hh',
      '..h..gggglgglggg...h',
      '....ggggggllgggggg..',
      '...gggggggggggggggg.',
    ],
    col: { h: '#e8e4c8', s: '#fbe2cc', e: '#2a6a4a', W: '#ffffff', p: '#f8a8b8', m: '#c86a60', g: '#5aa84e', l: '#bfe07a', f: '#ff9ac0', F: '#fff0a0' },
  },
  lancer: {
    bg: '#6a2a2e',
    rows: [
      '..........hhh.......',
      '.......hhhhhhhh.....',
      '.....hhhhhhhhhhh....',
      '....hhhhhhhhhhhhh...',
      '...hhhhhhhhhhhhhh...',
      '...wwwwwwRwwwwwww...',
      '...hhhhsssshhhhhh...',
      '...hhsssssssssshh...',
      '...hssssssssssssh...',
      '...hsseessssseessh..',
      '...hsseWsssseeWsh...',
      '...hsseessssseessh..',
      '...hspssssssssspsh..',
      '....ssssssmmsssss...',
      '.....ssssssssssss...',
      '......ssssssssss....',
      '.......grrrrrrg.....',
      '.....rrrgrrrrgrrr...',
      '....rrrrrgrrgrrrrrr.',
      '...rrrrrrrggrrrrrrrr',
    ],
    col: { h: '#16121a', w: '#f2ece0', R: '#d8283a', s: '#f4d0b0', e: '#3a1a14', W: '#ffffff', p: '#f0a0a0', m: '#b85a50', r: '#7a1e26', g: '#e0b040' },
  },
};

// 어느 직업이든 끼고 있는지
function CLASS_ORDER_EQ(g, x) { return ['sword', 'mage', 'elf', 'lancer'].some((c) => g.isEquipped(x, c)); }

export function drawPortrait(cv, cls = 'sword') {
  if (!cv) return;
  const P = PORTRAITS[cls] || PORTRAITS.sword;
  const g = cv.getContext('2d');
  g.fillStyle = P.bg;
  g.fillRect(0, 0, 20, 20);
  P.rows.forEach((row, y) => [...row].forEach((ch, x) => { if (P.col[ch]) { g.fillStyle = P.col[ch]; g.fillRect(x, y, 1, 1); } }));
}
