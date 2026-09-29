'use strict';
// Summon reveal cinematic: a hammer strikes a sword on an anvil before the cards show.
// The outcome tells the best grade in the pull: a dull clang (일반/고급), the sword cracks and
// shatters (희귀), cracks then seals with red light (영웅), glows gold and ascends to the sky (전설).
// 희귀+ pulls build tension first: heartbeat, the room darkens and closes in, the hammer hangs.
// Click anywhere to skip.
const Forge = (() => {
  const TAU = Math.PI * 2;
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const ease = (t) => 1 - Math.pow(1 - clamp01(t), 3);
  const easeIn = (t) => Math.pow(clamp01(t), 3);

  // ---------------------------------------------------------------- sounds (WebAudio, via U.audio)
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
    clang: (k = 1) => { noise(0.18, 0.12 * k, 1500); tone(1320, 0.5, 'triangle', 0.05 * k); tone(2640, 0.35, 'sine', 0.03 * k); tone(990, 0.6, 'sine', 0.03 * k); },
    dull: () => { noise(0.12, 0.1, 300, 2000); tone(180, 0.2, 'triangle', 0.05, -40); },
    beat: () => { tone(58, 0.22, 'sine', 0.22, -18); tone(52, 0.22, 'sine', 0.16, -14, 0.24); },
    crack: () => { noise(0.08, 0.1, 3000); noise(0.06, 0.07, 2500); },
    shatter: () => { noise(0.9, 0.16, 1800); [1600, 2100, 2800, 3300].forEach((f, i) => tone(f, 0.4, 'sine', 0.03, -300, i * 0.05)); },
    rise: () => { tone(220, 1.2, 'sawtooth', 0.025, 660); tone(330, 1.2, 'sine', 0.04, 990); },
    chord: (fs) => fs.forEach((f, i) => tone(f, 1.4, 'triangle', 0.05, 0, i * 0.06)),
    whoosh: () => { noise(1.1, 0.1, 400, 3000); tone(300, 1.1, 'sine', 0.05, 1500); },
  };

  // ---------------------------------------------------------------- drawing helpers
  function drawAnvil(g, x, y, s) {
    g.save(); g.translate(x, y); g.scale(s, s);
    g.fillStyle = 'rgba(0,0,0,0.5)'; g.beginPath(); g.ellipse(0, 70, 150, 18, 0, 0, TAU); g.fill();
    const gr = g.createLinearGradient(0, -20, 0, 70); gr.addColorStop(0, '#6c6f78'); gr.addColorStop(0.2, '#44464e'); gr.addColorStop(1, '#1c1d22');
    g.fillStyle = gr;
    g.beginPath(); g.moveTo(-150, -20); g.lineTo(110, -20); g.quadraticCurveTo(190, -18, 210, -2); g.quadraticCurveTo(160, 6, 100, 8);
    g.lineTo(60, 12); g.lineTo(40, 40); g.lineTo(90, 70); g.lineTo(-100, 70); g.lineTo(-60, 40); g.lineTo(-80, 12); g.lineTo(-150, 8); g.closePath(); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(-150, -20, 260, 4);
    g.restore();
  }
  // sword lying on the anvil (or standing when rot = -PI/2); returns nothing
  function drawSword(g, x, y, s, rot, o = {}) {
    g.save(); g.translate(x, y); g.rotate(rot); g.scale(s, s);
    if (o.glow) {
      g.globalCompositeOperation = 'lighter';
      const gr = g.createRadialGradient(40, 0, 10, 40, 0, 260);
      gr.addColorStop(0, hexA(o.glowCol, 0.55 * o.glow)); gr.addColorStop(1, hexA(o.glowCol, 0));
      g.fillStyle = gr; g.fillRect(-240, -260, 560, 520);
      g.globalCompositeOperation = 'source-over';
    }
    // hilt & guard
    g.fillStyle = '#3a2418'; g.fillRect(-150, -7, 70, 14);
    g.fillStyle = '#c9a24a'; g.beginPath(); g.arc(-158, 0, 11, 0, TAU); g.fill();
    g.fillStyle = '#d8b454'; g.fillRect(-84, -34, 16, 68);
    // blade
    const bl = g.createLinearGradient(0, -16, 0, 16);
    const tint = o.tint || null;
    bl.addColorStop(0, tint ? mixHex('#ffffff', tint, 0.35) : '#ffffff'); bl.addColorStop(0.45, tint ? mixHex('#cfd6e0', tint, 0.5) : '#cfd6e0'); bl.addColorStop(1, tint ? mixHex('#6d7686', tint, 0.5) : '#6d7686');
    g.fillStyle = bl;
    g.beginPath(); g.moveTo(-68, -16); g.lineTo(210, -12); g.lineTo(250, 0); g.lineTo(210, 12); g.lineTo(-68, 16); g.closePath(); g.fill();
    g.strokeStyle = 'rgba(40,50,70,0.55)'; g.lineWidth = 2; g.beginPath(); g.moveTo(-60, 0); g.lineTo(215, 0); g.stroke();
    // cracks with light behind them
    if (o.cracks && o.crackK > 0) {
      for (const c of o.cracks) {
        const k = clamp01((o.crackK - c.delay) / 0.35);
        if (k <= 0) continue;
        g.strokeStyle = o.crackCol || '#111'; g.lineWidth = o.crackLight ? 3.5 : 2;
        if (o.crackLight) { g.shadowColor = o.crackLight; g.shadowBlur = 18; g.strokeStyle = o.crackLight; }
        g.beginPath(); g.moveTo(c.pts[0][0], c.pts[0][1]);
        const n = Math.max(1, Math.floor(c.pts.length * k));
        for (let i = 1; i <= n && i < c.pts.length; i++) g.lineTo(c.pts[i][0], c.pts[i][1]);
        g.stroke(); g.shadowBlur = 0;
      }
    }
    if (o.white) { g.globalCompositeOperation = 'lighter'; g.fillStyle = `rgba(255,255,255,${o.white})`; g.beginPath(); g.moveTo(-68, -16); g.lineTo(210, -12); g.lineTo(250, 0); g.lineTo(210, 12); g.lineTo(-68, 16); g.closePath(); g.fill(); }
    g.restore();
  }
  function drawHammer(g, x, y, s, ang) {
    g.save(); g.translate(x, y); g.rotate(ang); g.scale(s, s);
    // pivot at the hand; head at -Y
    g.fillStyle = '#5a3a22'; g.fillRect(-7, -250, 14, 250);
    const gr = g.createLinearGradient(-60, 0, 60, 0); gr.addColorStop(0, '#9aa0aa'); gr.addColorStop(0.5, '#5a5e68'); gr.addColorStop(1, '#2c2e34');
    g.fillStyle = gr; g.fillRect(-62, -300, 124, 62);
    g.fillStyle = 'rgba(255,255,255,0.2)'; g.fillRect(-62, -300, 124, 8);
    g.restore();
  }
  function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; }
  function mixHex(a, b, k) {
    const A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16);
    const c = (s) => Math.round(((A >> s) & 255) + (((B >> s) & 255) - ((A >> s) & 255)) * k);
    return `rgb(${c(16)},${c(8)},${c(0)})`;
  }
  function makeCracks() {
    const out = [];
    for (let i = 0; i < 7; i++) {
      let x = -40 + Math.random() * 250, y = (Math.random() - 0.5) * 20;
      const pts = [[x, y]];
      for (let j = 0; j < 6; j++) { x += (Math.random() - 0.5) * 34; y += (Math.random() - 0.5) * 14; pts.push([x, Math.max(-14, Math.min(14, y))]); }
      out.push({ pts, delay: i * 0.08 });
    }
    return out;
  }
  function makeShards() {
    const out = [];
    for (let i = 0; i < 16; i++) {
      const x0 = -60 + (i / 16) * 300, w = 20 + Math.random() * 12;
      out.push({ x: x0, y: (Math.random() - 0.5) * 12, w, vx: (Math.random() - 0.3) * 520, vy: -250 - Math.random() * 420, vr: (Math.random() - 0.5) * 14, r: 0 });
    }
    return out;
  }

  // ---------------------------------------------------------------- the show
  // pre-rendered clips per result tier; a tier without a clip (or a clip that fails to load) uses the canvas show
  const VIDEOS = { 1: 'assets/forge/g1.mp4', 2: 'assets/forge/g2.mp4', 3: 'assets/forge/g3.mp4' };
  const tier = (grade) => Math.max(1, grade); // 일반 and 고급 share one clip

  // host: element to cover (the summon stage); grade: best grade in the pull; onDone after it ends
  function play(host, grade, onDone) {
    const src = VIDEOS[tier(grade)];
    if (!src) return playCanvas(host, grade, onDone);
    const wrap = document.createElement('div');
    wrap.className = 'forge-fx forge-video';
    wrap.innerHTML = '<video playsinline preload="auto"></video><div class="forge-skip">클릭하여 건너뛰기</div><div class="forge-title"></div>';
    host.appendChild(wrap);
    const v = wrap.querySelector('video');
    let done = false, started = false;
    const finish = () => {
      if (done) return; done = true;
      v.pause();
      wrap.classList.add('out');
      setTimeout(() => { wrap.remove(); onDone && onDone(); }, 350);
    };
    const fallback = () => {
      if (done || started) return finish();
      done = true; wrap.remove(); playCanvas(host, grade, onDone);
    };
    wrap.onclick = (e) => { e.stopPropagation(); finish(); };
    v.onplaying = () => { started = true; };
    v.onended = () => setTimeout(finish, grade >= 2 ? 1300 : 0); // hold the final frame so the title reads
    v.onerror = fallback;
    v.ontimeupdate = () => {
      if (grade >= 2 && v.duration && v.currentTime > v.duration - 1.2 && !wrap.querySelector('.forge-title.show')) {
        const title = wrap.querySelector('.forge-title');
        title.textContent = D.GRADES[grade].name + '!'.repeat(grade - 1);
        title.style.color = D.GRADES[grade].color; title.className = 'forge-title show g' + grade;
      }
    };
    v.muted = !!(window.Game && Game.muted);
    v.src = src;
    const p = v.play();
    // autoplay with sound can be refused; retry muted rather than skipping the show
    if (p && p.catch) p.catch(() => { if (done) return; v.muted = true; v.play().catch(fallback); });
    setTimeout(() => { if (!started) fallback(); }, 4000); // never leave the stage stuck behind a stalled clip
  }

  function playCanvas(host, grade, onDone) {
    const wrap = document.createElement('div');
    wrap.className = 'forge-fx';
    wrap.innerHTML = '<canvas></canvas><div class="forge-skip">클릭하여 건너뛰기</div><div class="forge-title"></div>';
    host.appendChild(wrap);
    const cv = wrap.querySelector('canvas'), g = cv.getContext('2d');
    const title = wrap.querySelector('.forge-title');
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const resize = () => { cv.width = wrap.clientWidth * dpr; cv.height = wrap.clientHeight * dpr; };
    resize();
    const tense = grade >= 2;
    // timeline (seconds)
    const S1 = 0.9, S2 = 1.8, S3 = tense ? 4.2 : 2.7; // strike times; the last one hangs for 희귀+
    const END = { 0: S3 + 1.0, 1: S3 + 1.0, 2: S3 + 2.2, 3: S3 + 2.8, 4: S3 + 4.4 }[grade];
    const col = D.GRADES[grade].color;
    const cracks = makeCracks();
    let shards = null, sparks = [], rings = [];
    const fired = new Set();
    const once = (k, fn) => { if (!fired.has(k)) { fired.add(k); fn(); } };
    let t0 = performance.now(), raf = 0, done = false, shake = 0;
    const finish = () => {
      if (done) return; done = true; cancelAnimationFrame(raf);
      wrap.classList.add('out');
      setTimeout(() => { wrap.remove(); onDone && onDone(); }, 350);
    };
    wrap.onclick = (e) => { e.stopPropagation(); finish(); };
    const spark = (x, y, n, c, speed = 1) => { for (let i = 0; i < n; i++) { const a = -Math.PI * (0.1 + Math.random() * 0.8); const v = (200 + Math.random() * 500) * speed; sparks.push({ x, y, vx: Math.cos(a) * v * (Math.random() < 0.5 ? -1 : 1), vy: Math.sin(a) * v, life: 0.5 + Math.random() * 0.5, t: 0, c }); } };
    let last = t0;
    const frame = (now) => {
      if (done) return;
      const t = (now - t0) / 1000, dt = Math.min(0.05, (now - last) / 1000); last = now;
      const W = cv.width / dpr, H = cv.height / dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      // camera: slow push-in while tension builds
      const zoom = 1 + (tense ? 0.18 * ease((t - S2) / (S3 - S2)) : 0) - (grade >= 4 ? 0.12 * ease((t - S3 - 1.4) / 1.5) : 0);
      const sc = Math.min(W / 900, H / 620) * zoom;
      const cx = W / 2, cy = H * 0.58;
      shake = Math.max(0, shake - dt * 40);
      // background: darkens with tension, then the grade colour floods in
      const dark = tense ? 0.55 + 0.35 * ease((t - S2) / (S3 - S2)) : 0.55;
      g.fillStyle = `rgba(6,4,10,${Math.min(1, dark + 0.1)})`; g.fillRect(0, 0, W, H);
      const bg = g.createRadialGradient(cx, cy, 20, cx, cy, Math.max(W, H) * 0.7);
      const heat = t > S3 && grade >= 2 ? ease((t - S3) / 0.8) : 0;
      bg.addColorStop(0, heat ? hexA(col, 0.35 * heat) : 'rgba(255,140,60,0.12)'); bg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = bg; g.fillRect(0, 0, W, H);
      // heartbeat before the last strike
      if (tense && t > S2 + 0.3 && t < S3) {
        const beatN = Math.floor((t - S2 - 0.3) / 0.8);
        once('beat' + beatN, SND.beat);
        const bp = ((t - S2 - 0.3) % 0.8) / 0.8;
        const pulse = bp < 0.15 ? bp / 0.15 : Math.max(0, 1 - (bp - 0.15) / 0.3);
        g.fillStyle = `rgba(120,0,0,${0.12 * pulse})`; g.fillRect(0, 0, W, H);
      }
      g.save();
      g.translate(cx + (Math.random() - 0.5) * shake, cy + (Math.random() - 0.5) * shake); g.scale(sc, sc);
      drawAnvil(g, 0, 40, 1);
      // ---- hammer: rise, strike at S1/S2/S3
      let ham = null;
      const strikes = [S1, S2, S3];
      for (let i = 0; i < 3; i++) {
        const st = strikes[i], prev = i ? strikes[i - 1] : 0.1;
        if (t >= prev && t < st + 0.25) {
          const up = i === 2 && tense ? 1.2 : 0.55; // the last swing hangs high
          const raise = ease((t - prev) / Math.max(0.2, st - prev - 0.12));
          let a = -1.25 * raise;
          if (t > st - 0.12) a = -1.25 + 1.4 * easeIn((t - (st - 0.12)) / 0.12);
          if (t >= st) a = 0.15 - 0.25 * ease((t - st) / 0.25);
          const tremble = i === 2 && tense && t < st - 0.12 && t > prev + up ? Math.sin(t * 60) * 0.02 : 0;
          ham = a + tremble;
        }
      }
      if (ham !== null) drawHammer(g, 240, -30, 0.9, ham - 0.35);
      // strike moments
      strikes.forEach((st, i) => {
        if (t >= st) once('hit' + i, () => {
          shake = i === 2 ? 26 : 14;
          if (i === 2 && grade <= 1) SND.dull(); else SND.clang(i === 2 ? 1.4 : 1);
          spark(40, 0, i === 2 ? 60 : 30, i === 2 && grade >= 2 ? col : '#ffcf7a', i === 2 ? 1.4 : 1);
          rings.push({ x: 40, y: 0, t: 0, c: i === 2 && grade >= 2 ? col : '#ffd9a0' });
        });
      });
      // ---- sword by outcome
      const after = t - S3;
      const flashW = t >= S1 && t < S1 + 0.08 || t >= S2 && t < S2 + 0.08 || t >= S3 && t < S3 + 0.1 ? 0.7 : 0;
      if (grade === 2 && after > 0) {
        // crack, then shatter
        if (after < 0.9) {
          drawSword(g, 0, 0, 1, 0, { cracks, crackK: after / 0.5 + 0.2, crackLight: col, white: flashW });
          if (after > 0.1) once('crack', SND.crack);
          if (after > 0.45) once('crack2', SND.crack);
        } else {
          once('shatter', () => { shards = makeShards(); SND.shatter(); shake = 30; spark(40, 0, 80, col, 1.6); rings.push({ x: 40, y: 0, t: 0, c: col, big: true }); });
          for (const s of shards) {
            s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 900 * dt; s.r += s.vr * dt;
            g.save(); g.translate(s.x, s.y); g.rotate(s.r);
            const gr2 = g.createLinearGradient(0, -14, 0, 14); gr2.addColorStop(0, '#ffffff'); gr2.addColorStop(1, col);
            g.fillStyle = gr2; g.beginPath(); g.moveTo(-s.w / 2, -12); g.lineTo(s.w / 2, -9); g.lineTo(s.w / 3, 12); g.lineTo(-s.w / 2, 10); g.closePath(); g.fill();
            g.restore();
          }
        }
      } else if (grade >= 3 && after > 0) {
        // fake-out cracks, then light pours through and seals them
        const glowK = ease((after - 0.7) / 0.8);
        const lc = grade >= 4 ? '#ffd76a' : col;
        const crackK = after < 0.9 ? after / 0.5 + 0.2 : Math.max(0, 2 - (after - 0.9) * 2);
        if (after > 0.1) once('crack', SND.crack);
        if (after > 0.7) once('glow', () => { SND.rise(); rings.push({ x: 40, y: 0, t: 0, c: lc, big: true }); });
        if (after > 1.4) once('chord', () => SND.chord(grade >= 4 ? [523, 659, 784, 1046] : [392, 494, 587, 784]));
        let rot = 0, lift = 0, sx = 0;
        if (grade >= 4) {
          // stand up, then ascend with a pillar of light
          const standK = ease((after - 1.5) / 0.6), riseK = easeIn((after - 2.2) / 1.6);
          rot = -Math.PI / 2 * standK; sx = 40 * standK; lift = -60 * standK - 900 * riseK;
          if (after > 2.2) once('whoosh', SND.whoosh);
          if (after > 2.0) {
            const pk = ease((after - 2.0) / 0.6);
            const pg = g.createLinearGradient(-90, 0, 90, 0);
            pg.addColorStop(0, 'rgba(255,215,106,0)'); pg.addColorStop(0.5, `rgba(255,240,190,${0.75 * pk})`); pg.addColorStop(1, 'rgba(255,215,106,0)');
            g.globalCompositeOperation = 'lighter'; g.fillStyle = pg; g.fillRect(-90 * pk + 40, -2000, 180 * pk, 2080);
            // rotating god rays
            for (let i = 0; i < 12; i++) {
              const a = (i / 12) * TAU + after * 0.6;
              g.fillStyle = `rgba(255,220,120,${0.08 * pk})`;
              g.beginPath(); g.moveTo(40, lift); g.lineTo(40 + Math.cos(a - 0.08) * 1400, lift + Math.sin(a - 0.08) * 1400); g.lineTo(40 + Math.cos(a + 0.08) * 1400, lift + Math.sin(a + 0.08) * 1400); g.closePath(); g.fill();
            }
            g.globalCompositeOperation = 'source-over';
            if (Math.random() < 0.6) sparks.push({ x: 40 + (Math.random() - 0.5) * 140, y: 60, vx: 0, vy: -500 - Math.random() * 500, life: 1.2, t: 0, c: '#ffe9a8' });
          }
        }
        drawSword(g, sx, lift, 1, rot, { cracks, crackK, crackLight: lc, glow: glowK * (1 + Math.sin(t * 10) * 0.15), glowCol: lc, tint: glowK > 0.2 ? lc : null, white: flashW + glowK * 0.25 });
      } else {
        drawSword(g, 0, 0, 1, 0, { white: flashW });
      }
      // sparks and shock rings
      for (const p of sparks) {
        p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 1200 * dt * (p.vx ? 1 : -0.2);
        const k = 1 - p.t / p.life; if (k <= 0) continue;
        g.globalCompositeOperation = 'lighter'; g.strokeStyle = hexA(p.c.startsWith('#') ? p.c : '#ffffff', k); g.lineWidth = 2.5;
        g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(p.x - p.vx * 0.02, p.y - p.vy * 0.02); g.stroke(); g.globalCompositeOperation = 'source-over';
      }
      sparks = sparks.filter((p) => p.t < p.life);
      for (const r of rings) {
        r.t += dt; const k = r.t / (r.big ? 0.9 : 0.5); if (k >= 1) continue;
        g.strokeStyle = hexA(r.c, 1 - k); g.lineWidth = (r.big ? 10 : 5) * (1 - k);
        g.beginPath(); g.ellipse(r.x, r.y, (r.big ? 520 : 220) * ease(k), (r.big ? 200 : 80) * ease(k), 0, 0, TAU); g.stroke();
      }
      g.restore();
      // full-screen flash of the grade colour at the reveal, whiteout for 전설
      if (grade >= 2) {
        const fk = grade === 2 ? Math.max(0, 1 - Math.abs(after - 0.95) / 0.35) : grade === 3 ? Math.max(0, 1 - Math.abs(after - 1.4) / 0.5) * 0.8 : Math.max(0, 1 - Math.abs(after - 3.4) / 0.9);
        if (fk > 0) { g.fillStyle = grade >= 4 ? `rgba(255,248,220,${fk})` : hexA(col, fk * 0.55); g.fillRect(0, 0, W, H); }
      }
      // title
      const showAt = { 0: 0.3, 1: 0.3, 2: 1.1, 3: 1.5, 4: 3.2 }[grade];
      if (after > showAt) {
        title.textContent = grade >= 4 ? '전설!!!' : grade === 3 ? '영웅!!' : grade === 2 ? '희귀!' : '';
        title.style.color = col; title.className = 'forge-title show g' + grade;
      }
      if (t > END) return finish();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
  }
  return { play };
})();
