'use strict';
// 소환 (gacha): one summon screen for 초월 / 무기 외형 / 펫 / 탈것, and the slot-machine reveal every
// pull goes through. Reels spin through the pool and stop one by one; a 희귀+ reel keeps spinning,
// charges up, and a bolt of lightning in its grade colour (blue / red / gold) slams it onto the card.
// Each collection module exposes a `gacha` spec: { title, noun, icon, desc, pool(p), grant(p, items),
// thumb(canvas96x128, item), view(best), price | pay(p, n) + costLabel(p, n) }.
const Gacha = (() => {
  const { esc, ico } = UI;
  const KINDS = ['transcend', 'weaponlook', 'pet', 'mount'];
  const spec = (k) => ({ transcend: Transcend, weaponlook: Looks, pet: Pets, mount: Mounts })[k].gacha;
  const BOLT = { 2: '#4fa3ff', 3: '#ff3b30', 4: '#ffd23a' };
  const TITLE = { 2: '희귀!', 3: '영웅!!', 4: '전설!!!' };
  const CHARGE = { 2: 0.9, 3: 1.4, 4: 2.1 }; // seconds a 희귀+ reel spins alone before the strike
  const TAU = Math.PI * 2;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const easeOutBack = (t) => { const c = 1.9; t = clamp01(t) - 1; return 1 + (c + 1) * t * t * t + c * t * t; };

  // ---------------------------------------------------------------- sounds
  function tone(freq, dur, type, vol, slide = 0, delay = 0) {
    const a = U.audio(); if (!a || Game.muted) return;
    const t0 = a.currentTime + delay;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t0 + dur);
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(a.destination); o.start(t0); o.stop(t0 + dur + 0.05);
  }
  function noise(dur, vol, hp, lp = 16000) {
    const a = U.audio(); if (!a || Game.muted) return;
    const len = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
    const s = a.createBufferSource(); s.buffer = buf;
    const f1 = a.createBiquadFilter(); f1.type = 'highpass'; f1.frequency.value = hp;
    const f2 = a.createBiquadFilter(); f2.type = 'lowpass'; f2.frequency.value = lp;
    const g = a.createGain(); g.gain.value = vol;
    s.connect(f1); f1.connect(f2); f2.connect(g); g.connect(a.destination); s.start();
  }
  const SND = {
    tick: () => tone(1500 + Math.random() * 500, 0.025, 'square', 0.01),
    stop: () => { tone(380, 0.08, 'square', 0.03, -120); noise(0.05, 0.04, 1200); },
    charge: (d) => { tone(90, d, 'sawtooth', 0.035, 420); tone(180, d, 'sine', 0.03, 900); noise(d, 0.03, 200, 900); },
    crackle: () => noise(0.04, 0.035, 3500),
    thunder: (k) => { noise(0.14, 0.2 * k, 2200); noise(1.2, 0.22 * k, 40, 900); tone(52, 0.9, 'sine', 0.22 * k, -18); },
    rare: () => [880, 1175, 1568].forEach((f, i) => tone(f, 0.3, 'triangle', 0.04, 0, i * 0.07)),
  };

  // ---------------------------------------------------------------- pulls
  function roll(sp, p, n) {
    const pool = sp.pool(p);
    const byGrade = (g) => { const c = pool.filter((x) => x.grade === g); return c.length ? c : pool; };
    const res = [];
    for (let i = 0; i < n; i++) res.push(U.pick(byGrade(Transcend.rollGrade())));
    if (n === 11 && !res.some((x) => x.grade >= 2)) res[U.randi(0, 10)] = U.pick(byGrade(2));
    return res;
  }
  const cost = (sp, n) => (n === 1 ? sp.price.one : sp.price.eleven);
  function pay(sp, p, n) {
    if (sp.pay) return sp.pay(p, n);
    if (p.s.dia < cost(sp, n)) { UI.toast('다이아가 부족합니다.', '#ff8a80'); return false; }
    p.s.dia -= cost(sp, n);
    return true;
  }
  const costLabel = (sp, p, n) => (sp.costLabel ? sp.costLabel(p, n) : `${ico('diamond', 'dia')} ${U.fmt(cost(sp, n))}`);

  // panelEl: the panel the pull came from (the reveal covers the whole panel layer); back re-renders it
  function run(kind, n, panelEl, back) {
    const sp = spec(kind), p = Game.player;
    if (!pay(sp, p, n)) return false;
    const res = roll(sp, p, n);
    sp.grant(p, res);
    UI.refreshHud();
    reveal(kind, n, res, panelEl.closest('#panel-layer') || panelEl, back);
    return true;
  }

  // ---------------------------------------------------------------- lightning
  function bolt(x0, y0, x1, y1, rough) {
    let pts = [[x0, y0], [x1, y1]];
    for (let lv = 0; lv < 6; lv++) {
      const out = [pts[0]];
      for (let i = 1; i < pts.length; i++) {
        const [ax, ay] = pts[i - 1], [bx, by] = pts[i];
        const len = Math.hypot(bx - ax, by - ay), off = (Math.random() - 0.5) * len * rough;
        out.push([(ax + bx) / 2 + ((by - ay) / len) * off, (ay + by) / 2 - ((bx - ax) / len) * off], [bx, by]);
      }
      pts = out;
    }
    return pts;
  }
  function strikeShape(tx, ty, H) {
    const x0 = tx + (Math.random() - 0.5) * 260;
    const main = bolt(x0, -20, tx, ty, 0.55);
    const branches = [];
    for (let b = 0; b < 3; b++) {
      const [sx, sy] = main[8 + Math.floor(Math.random() * (main.length - 20))];
      branches.push(bolt(sx, sy, sx + (Math.random() - 0.5) * 220, sy + 60 + Math.random() * H * 0.25, 0.6));
    }
    return { main, branches };
  }
  function strokePath(g, pts) { g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (const q of pts) g.lineTo(q[0], q[1]); g.stroke(); }
  function drawBolt(g, s, col, a) {
    g.save(); g.globalCompositeOperation = 'lighter'; g.lineJoin = 'round'; g.lineCap = 'round';
    for (const [w, c, al] of [[16, col, 0.18], [7, col, 0.55], [2.4, '#ffffff', 1]]) {
      g.strokeStyle = c; g.globalAlpha = al * a; g.lineWidth = w;
      strokePath(g, s.main);
      g.lineWidth = w * 0.5; s.branches.forEach((b) => strokePath(g, b));
    }
    g.restore();
  }

  // ---------------------------------------------------------------- reveal
  function reveal(kind, n, res, host, back) {
    const sp = spec(kind), p = Game.player;
    const big = res.length === 1, k = big ? 2 : 1, CW = 96 * k, CH = 128 * k;
    const stage = document.createElement('div');
    stage.className = 'summon-stage gacha' + (big ? ' big' : '');
    stage.innerHTML = `<div class="reels">${res.map((x, i) => `<div class="reel" data-i="${i}"><canvas width="${CW}" height="${CH}"></canvas><div class="nm">&nbsp;</div></div>`).join('')}</div>
      <canvas class="bolt-fx"></canvas><div class="gacha-title"></div>
      <div class="summon-btns"><button class="dark-btn" data-skip>건너뛰기</button></div>`;
    host.appendChild(stage);
    const fx = stage.querySelector('.bolt-fx'), fg = fx.getContext('2d');
    const titleEl = stage.querySelector('.gacha-title');

    // thumbnails: every result plus a shuffled handful of the pool to spin past
    const cache = new Map();
    const tex = (x) => {
      let c = cache.get(x);
      if (!c) { c = document.createElement('canvas'); c.width = 96; c.height = 128; try { sp.thumb(c, x); } catch (e) { /* a missing sprite just spins blank */ } cache.set(x, c); }
      return c;
    };
    const pool = sp.pool(p).slice().sort(() => Math.random() - 0.5);
    const fillers = pool.slice(0, Math.min(pool.length, 16)).map(tex);
    res.forEach(tex);

    const reels = res.map((x, i) => {
      const el = stage.querySelector(`.reel[data-i="${i}"]`), cv = el.querySelector('canvas');
      return { i, x, el, cv, g: cv.getContext('2d'), pos: Math.random() * 50, v: 0, state: 'spin', F: 0, seed: i * 5 + U.randi(0, 97) };
    });
    reels.forEach((r) => { r.g.imageSmoothingEnabled = false; });
    const itemAt = (r, idx) => (idx === r.F && r.state !== 'spin' && r.state !== 'charge' ? tex(r.x) : fillers[((idx * 7 + r.seed) % fillers.length + fillers.length) % fillers.length]);

    // timeline: plain reels stop left to right, then each 희귀+ reel gets its own charge + strike
    const VMAX = 16;
    const commons = reels.filter((r) => r.x.grade < 2), rares = reels.filter((r) => r.x.grade >= 2).sort((a, b) => a.x.grade - b.x.grade || a.i - b.i);
    const first = big ? 1.3 : 0.9;
    commons.forEach((r, o) => { r.stopAt = first + o * 0.14; });
    let cursor = Math.max(first + 0.35, commons.length ? commons[commons.length - 1].stopAt + 0.75 : 0);
    rares.forEach((r) => { r.chargeAt = cursor; r.strikeAt = cursor + CHARGE[r.x.grade]; cursor = r.strikeAt + (r.x.grade >= 4 ? 1.6 : r.x.grade >= 3 ? 1.0 : 0.7); });

    let t0 = performance.now(), last = t0, raf = 0, tickT = 0, crackT = 0, flash = null, strikes = [], shake = 0, rays = null, finished = false, skipped = false;
    let charging = null;

    const rectOf = (r) => {
      const sr = stage.getBoundingClientRect(), rr = r.cv.getBoundingClientRect();
      return { x: rr.left - sr.left, y: rr.top - sr.top, w: rr.width, h: rr.height, cx: rr.left - sr.left + rr.width / 2, cy: rr.top - sr.top + rr.height / 2 };
    };
    const announce = (x) => {
      if (x.grade < 3) return;
      const html = `<b>${esc(p.name)}</b>님이 <em class="${x.grade >= 4 ? 'legend' : ''}">${esc(x.name)}</em> ${sp.noun}을(를) 획득했습니다.`;
      UI.announce(html);
      if (kind === 'transcend') Game.lastCardNotice = html;
    };
    const land = (r, quiet) => {
      r.state = 'done'; r.pos = r.F; r.v = 0;
      r.el.classList.remove('charging');
      r.el.classList.add('done', 'g' + r.x.grade);
      const nm = r.el.querySelector('.nm');
      nm.textContent = r.x.name; nm.className = 'nm ' + D.GRADES[r.x.grade].cls;
      if (!quiet) {
        if (r.x.grade < 2) SND.stop();
        else if (r.x.grade >= 4) U.sfx.legend(); else if (r.x.grade >= 3) U.sfx.success(); else SND.rare();
      }
      announce(r.x);
    };
    const showTitle = (g) => {
      titleEl.textContent = TITLE[g]; titleEl.style.color = D.GRADES[g].color;
      titleEl.className = 'gacha-title'; void titleEl.offsetWidth; titleEl.className = 'gacha-title show g' + g;
    };
    // pick the landing index a little ahead so the reel eases onto it
    const planStop = (r, dur) => {
      r.F = Math.ceil(r.pos + (r.v * dur) / 2);
      r.stop = { p0: r.pos, v0: r.v, d: (2 * (r.F - r.pos)) / Math.max(1, r.v), t: 0 };
      r.state = 'stop';
    };
    const strike = (r) => {
      const g = r.x.grade, rc = rectOf(r);
      r.F = Math.ceil(r.pos) + 1;
      r.snap = { p0: r.pos, t: 0 }; r.state = 'snap';
      const shapes = [strikeShape(rc.cx, rc.cy, fx.height)];
      if (g >= 3) shapes.push(strikeShape(rc.cx, rc.cy, fx.height));
      if (g >= 4) shapes.push(strikeShape(rc.cx, rc.cy, fx.height), strikeShape(rc.cx, rc.cy, fx.height));
      strikes.push({ shapes, col: BOLT[g], t: 0, life: g >= 4 ? 0.8 : 0.5, tx: rc.cx, ty: rc.cy, g });
      flash = { col: BOLT[g], t: 0, life: g >= 4 ? 1.1 : 0.5, a: g >= 4 ? 0.85 : g >= 3 ? 0.6 : 0.45 };
      shake = g >= 4 ? 1 : g >= 3 ? 0.6 : 0.35;
      if (g >= 4) rays = { x: rc.cx, y: rc.cy, t: 0 };
      SND.thunder(g >= 4 ? 1.3 : g >= 3 ? 1 : 0.75);
      stage.classList.remove('tension'); charging = null;
      if (big || g >= 3) showTitle(g);
    };
    const finish = () => {
      if (finished) return; finished = true;
      const best = res.slice().sort((a, b) => b.grade - a.grade)[0];
      stage.querySelector('.summon-btns').innerHTML = `<button class="gold-btn" data-ok>확인</button><button class="dark-btn" data-again>${ico('diamond', 'dia')} 다시 ${n}회</button><button class="dark-btn" data-view>${esc(sp.title)} 보기</button>`;
      stage.querySelectorAll('.summon-btns img').forEach((i) => { i.style.width = '16px'; i.style.verticalAlign = '-3px'; });
      stage.onclick = (e) => {
        if (e.target.closest('[data-ok]')) { close(); back && back(); }
        else if (e.target.closest('[data-again]')) { close(); back && back(); run(kind, n, host, back); }
        else if (e.target.closest('[data-view]')) { close(); sp.view(best); }
      };
    };
    const close = () => { cancelAnimationFrame(raf); stage.remove(); };
    const skip = () => {
      if (skipped || finished) return; skipped = true;
      let best = null;
      for (const r of reels) if (r.state !== 'done') { r.F = Math.ceil(r.pos) + 1; land(r, true); if (!best || r.x.grade > best.x.grade) best = r; }
      stage.classList.remove('tension'); charging = null;
      if (best && best.x.grade >= 2) { if (best.x.grade >= 4) U.sfx.legend(); else if (best.x.grade >= 3) U.sfx.success(); else SND.rare(); showTitle(best.x.grade); }
      else SND.stop();
      finish();
    };
    stage.onclick = (e) => { if (e.target.closest('[data-skip]')) skip(); };

    const frame = (now) => {
      if (!stage.isConnected) return;
      const t = (now - t0) / 1000, dt = Math.min(0.05, (now - last) / 1000); last = now;
      // canvas overlay sized to the stage
      const dpr = Math.min(2, window.devicePixelRatio || 1), W = stage.clientWidth, H = stage.clientHeight;
      if (fx.width !== Math.round(W * dpr) || fx.height !== Math.round(H * dpr)) { fx.width = Math.round(W * dpr); fx.height = Math.round(H * dpr); }

      // reel motion
      let spinning = 0;
      for (const r of reels) {
        if (r.state === 'spin' || r.state === 'charge') {
          const vt = r.state === 'charge' ? VMAX * 1.35 : VMAX;
          r.v = Math.min(vt, r.v + dt * 40);
          r.pos += r.v * dt; spinning++;
          if (r.stopAt !== undefined && t >= r.stopAt && r.state === 'spin') planStop(r, 0.55);
          if (r.chargeAt !== undefined && t >= r.chargeAt && r.state === 'spin') {
            r.state = 'charge'; charging = r; r.el.classList.add('charging'); stage.classList.add('tension');
            SND.charge(CHARGE[r.x.grade]);
          }
          if (r.state === 'charge' && t >= r.strikeAt) strike(r);
        } else if (r.state === 'stop') {
          const s = r.stop; s.t += dt;
          if (s.t >= s.d) land(r);
          else { r.pos = s.p0 + s.v0 * s.t - (s.v0 * s.t * s.t) / (2 * s.d); r.v = s.v0 * (1 - s.t / s.d); spinning++; }
        } else if (r.state === 'snap') {
          const s = r.snap; s.t += dt;
          const k2 = s.t / 0.22;
          if (k2 >= 1) land(r);
          else r.pos = s.p0 + (r.F - s.p0) * easeOutBack(k2);
        }
        drawReel(r);
      }
      if (spinning && (tickT -= dt) <= 0) { SND.tick(); tickT = 0.075; }
      if (!finished && !skipped && reels.every((r) => r.state === 'done')) finish();

      // overlay: charge crackle, bolts, flash, legend rays
      fg.setTransform(dpr, 0, 0, dpr, 0, 0);
      fg.clearRect(0, 0, W, H);
      if (charging) {
        const rc = rectOf(charging), k3 = clamp01((t - charging.chargeAt) / CHARGE[charging.x.grade]);
        if ((crackT -= dt) <= 0) { crackT = 0.16 - k3 * 0.1; if (Math.random() < 0.6) SND.crackle(); }
        fg.save(); fg.globalCompositeOperation = 'lighter'; fg.strokeStyle = '#e8f0ff'; fg.lineCap = 'round';
        const arcs = 2 + Math.floor(k3 * 6);
        for (let a = 0; a < arcs; a++) {
          const ang = Math.random() * TAU, R0 = Math.max(rc.w, rc.h) * 0.55, R1 = R0 + 10 + Math.random() * 30 * (0.5 + k3);
          fg.globalAlpha = 0.4 + Math.random() * 0.5; fg.lineWidth = 1 + Math.random() * 1.5;
          strokePath(fg, bolt(rc.cx + Math.cos(ang) * R0 * 0.7, rc.cy + Math.sin(ang) * R0 * 0.8, rc.cx + Math.cos(ang + 0.4) * R1, rc.cy + Math.sin(ang + 0.4) * R1, 0.7).slice(0, 40));
        }
        fg.restore();
        charging.el.style.transform = `translate(${(Math.random() - 0.5) * 6 * k3}px,${(Math.random() - 0.5) * 6 * k3}px)`;
      }
      if (rays) {
        rays.t += dt;
        const a = clamp01(rays.t / 0.3) * (1 - clamp01((rays.t - 1.4) / 0.8));
        if (a > 0) {
          fg.save(); fg.globalCompositeOperation = 'lighter'; fg.translate(rays.x, rays.y); fg.rotate(rays.t * 0.5);
          for (let i = 0; i < 14; i++) {
            fg.rotate(TAU / 14); fg.globalAlpha = 0.16 * a; fg.fillStyle = '#ffd86a';
            fg.beginPath(); fg.moveTo(0, 0); fg.lineTo(-40, -Math.max(W, H)); fg.lineTo(40, -Math.max(W, H)); fg.closePath(); fg.fill();
          }
          fg.restore();
        } else if (rays.t > 2.2) rays = null;
      }
      for (const s of strikes) {
        s.t += dt;
        if (s.t < s.life) {
          if (Math.random() < 0.35) s.shapes = s.shapes.map(() => strikeShape(s.tx, s.ty, H)); // flicker
          const a = (1 - s.t / s.life) * (Math.random() < 0.2 ? 0.4 : 1);
          s.shapes.forEach((sh) => drawBolt(fg, sh, s.col, a));
          // impact bloom
          const bl = fg.createRadialGradient(s.tx, s.ty, 0, s.tx, s.ty, 160);
          bl.addColorStop(0, s.col); bl.addColorStop(1, 'rgba(0,0,0,0)');
          fg.save(); fg.globalCompositeOperation = 'lighter'; fg.globalAlpha = a * 0.7; fg.fillStyle = bl; fg.fillRect(s.tx - 160, s.ty - 160, 320, 320); fg.restore();
        }
      }
      strikes = strikes.filter((s) => s.t < s.life);
      if (flash) {
        flash.t += dt;
        const a = flash.a * Math.pow(1 - clamp01(flash.t / flash.life), 2);
        fg.save(); fg.globalAlpha = a; fg.fillStyle = flash.col; fg.fillRect(0, 0, W, H);
        fg.globalAlpha = a * 0.6; fg.fillStyle = '#fff'; fg.fillRect(0, 0, W, H); fg.restore();
        if (flash.t >= flash.life) flash = null;
      }
      shake = Math.max(0, shake - dt * 1.6);
      stage.style.transform = shake > 0.01 ? `translate(${(Math.random() - 0.5) * 18 * shake}px,${(Math.random() - 0.5) * 18 * shake}px)` : '';
      raf = requestAnimationFrame(frame);
    };
    function drawReel(r) {
      const g = r.g, w = r.cv.width, h = r.cv.height;
      g.clearRect(0, 0, w, h);
      g.fillStyle = '#120e1a'; g.fillRect(0, 0, w, h);
      const base = Math.floor(r.pos), frac = r.pos - base;
      const blur = r.state === 'done' ? 0 : clamp01(Math.abs(r.v) / VMAX);
      for (const [idx, y] of [[base, frac * h], [base + 1, (frac - 1) * h]]) {
        const img = itemAt(r, idx);
        if (blur > 0.3) {
          g.globalAlpha = 0.35; g.drawImage(img, 0, y - h * 0.12 * blur, w, h); g.drawImage(img, 0, y + h * 0.12 * blur, w, h);
          g.globalAlpha = 0.6;
        }
        g.drawImage(img, 0, y, w, h); g.globalAlpha = 1;
      }
      if (r.state !== 'done') {
        // reel glass: dark top and bottom edges
        const sh = g.createLinearGradient(0, 0, 0, h);
        sh.addColorStop(0, 'rgba(0,0,0,0.75)'); sh.addColorStop(0.22, 'rgba(0,0,0,0)'); sh.addColorStop(0.78, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(0,0,0,0.75)');
        g.fillStyle = sh; g.fillRect(0, 0, w, h);
      }
    }
    raf = requestAnimationFrame(frame);
  }

  // ---------------------------------------------------------------- summon screen
  let curTab = 'transcend';
  function open(arg) {
    if (KINDS.includes(arg)) curTab = arg;
    const p = Game.player;
    const { el, body } = UI.makePanel('소환');
    el.style.width = 'min(700px, 96vw)';
    const render = () => {
      if (!el.isConnected) return;
      const sp = spec(curTab);
      const pool = sp.pool(p);
      const show = pool.filter((x) => x.grade >= 4).concat(pool.filter((x) => x.grade === 3));
      body.innerHTML = `<div class="gacha-tabs">${KINDS.map((k) => `<button data-tab="${k}" class="${k === curTab ? 'on' : ''}">${ico(spec(k).icon)}<span>${spec(k).title}</span></button>`).join('')}</div>
        <div class="summon-shop">
          <div class="summon-box"><h4>${esc(sp.title)} 소환 1회</h4><canvas width="96" height="128"></canvas><p>${esc(sp.desc)}</p>
            <button class="gold-btn" data-pull="1">${costLabel(sp, p, 1)}</button></div>
          <div class="summon-box" style="background:linear-gradient(#3a1c16,#140a08)"><h4>${esc(sp.title)} 소환 11회</h4><canvas width="96" height="128"></canvas><p>11회 소환 시 <b style="color:#3f8cff">희귀</b> 이상 1개 확정!</p>
            <button class="gold-btn" data-pull="11">${costLabel(sp, p, 11)}</button></div>
        </div>
        <div class="rates">보유: 다이아 <b style="color:#9fe0ff">${U.fmt(p.s.dia)}</b>${curTab === 'transcend' ? ` · 소환권 <b style="color:#c79cff">${p.count('ticket')}</b>` : ''}<br>
        확률 — ${D.GRADES.map((g, i) => `<span class="${g.cls}">${g.name} ${(D.SUMMON_RATES[i] * 100).toFixed(1)}%</span>`).join(' · ')}</div>`;
      body.querySelectorAll('.summon-box canvas').forEach((cv, i) => { const x = show[i % Math.max(1, show.length)] || pool[0]; if (x) try { sp.thumb(cv, x); } catch (e) { /* preview only */ } });
      body.querySelectorAll('button img').forEach((i) => { i.style.width = '16px'; i.style.verticalAlign = '-3px'; });
    };
    body.onclick = (e) => {
      const tb = e.target.closest('[data-tab]'); if (tb) { curTab = tb.dataset.tab; U.sfx.ui(); return render(); }
      const b = e.target.closest('[data-pull]'); if (b) run(curTab, +b.dataset.pull, el, render);
    };
    render();
    return { name: 'summon', rerender: render };
  }

  UI.OPENERS.summon = open;
  return { run, open, KINDS };
})();
