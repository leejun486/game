'use strict';
// Shared helpers: math, noise, formatting, sound.
const U = (() => {
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const lerp = (a, b, t) => a + (b - a) * t;
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const rand = (a, b) => a + Math.random() * (b - a);
  const randi = (a, b) => Math.floor(rand(a, b + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const chance = (p) => Math.random() < p;
  const fmt = (n) => Math.floor(n).toLocaleString('en-US');

  // deterministic hash-based value noise (for terrain)
  function hash(x, y, seed) {
    let h = (x * 374761393 + y * 668265263 + seed * 1442695041) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  }
  function smooth(t) { return t * t * (3 - 2 * t); }
  function vnoise(x, y, seed) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = smooth(x - xi), yf = smooth(y - yi);
    const a = hash(xi, yi, seed), b = hash(xi + 1, yi, seed);
    const c = hash(xi, yi + 1, seed), d = hash(xi + 1, yi + 1, seed);
    return lerp(lerp(a, b, xf), lerp(c, d, xf), yf);
  }
  function fbm(x, y, seed, oct = 4) {
    let v = 0, amp = 0.5, f = 1, norm = 0;
    for (let i = 0; i < oct; i++) {
      v += vnoise(x * f, y * f, seed + i * 17) * amp;
      norm += amp; amp *= 0.5; f *= 2;
    }
    return v / norm;
  }
  // seeded PRNG for reproducible world props
  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // ---- WebAudio sfx ----
  // Every sound is layered from a few soft parts (a pitched thump for weight, a swept noise "whoosh", a metallic
  // ring of inharmonic sine partials, glassy pings) with click-free envelopes, and all of it goes through one bus:
  // a gentle compressor plus a short room reverb, so hits feel solid and spells shimmer instead of beeping.
  let ac = null, muted = false, bus = null, noiseBuf = null;
  function audio() {
    if (!ac) {
      try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; }
    }
    return ac;
  }
  function out() {
    const a = audio(); if (!a) return null;
    if (!bus) {
      const comp = a.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.18;
      const sum = a.createGain(); sum.gain.value = 0.9;
      const rev = a.createConvolver(), len = Math.floor(a.sampleRate * 1.1), ir = a.createBuffer(2, len, a.sampleRate);
      for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let k = 0; k < len; k++) d[k] = (Math.random() * 2 - 1) * Math.pow(1 - k / len, 3.2); }
      rev.buffer = ir;
      const wet = a.createGain(); wet.gain.value = 0.28;
      bus = a.createGain();
      bus.connect(comp); bus.connect(rev); rev.connect(wet); wet.connect(comp); comp.connect(sum); sum.connect(a.destination);
      noiseBuf = a.createBuffer(1, a.sampleRate * 2, a.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let k = 0; k < d.length; k++) d[k] = Math.random() * 2 - 1;
    }
    return bus;
  }
  // a gain node with a click-free attack and an exponential tail, starting `delay` seconds from now
  function envGain(vol, dur, attack = 0.004, delay = 0) {
    const a = audio(), g = a.createGain(), t = a.currentTime + delay;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + dur);
    g.connect(out());
    return [g, t];
  }
  function tone(freq, dur, type = 'sine', vol = 0.05, slide = 0, delay = 0, attack = 0.004) {
    if (muted || !out()) return;
    const [g, t] = envGain(vol, dur, attack, delay);
    const o = ac.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + attack + dur);
    o.connect(g); o.start(t); o.stop(t + attack + dur + 0.05);
  }
  // filtered noise; `sweep` glides the filter to that frequency (a whoosh), q shapes how tonal it is
  function nz(dur, vol, type, freq, q = 1, delay = 0, sweep = 0, attack = 0.003) {
    if (muted || !out()) return;
    const [g, t] = envGain(vol, dur, attack, delay);
    const src = ac.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
    const f = ac.createBiquadFilter(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(freq, t);
    if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, t + attack + dur);
    src.connect(f); f.connect(g); src.start(t, Math.random()); src.stop(t + attack + dur + 0.05);
  }
  const later = (ms, fn) => (ms ? setTimeout(fn, ms) : fn());
  const J = (v, k = 0.12) => v * (1 + (Math.random() * 2 - 1) * k); // pitch jitter so repeats never sound identical
  // building blocks
  const thump = (f, dur, vol, delay = 0) => tone(f, dur, 'sine', vol, -f * 0.6, delay, 0.003); // weight under a hit
  const whoosh = (dur, vol, f0, f1, delay = 0) => nz(dur, vol, 'bandpass', f0, 1.6, delay, f1, dur * 0.35); // a swing through the air
  const ring = (f, dur, vol, delay = 0) => { // struck metal: inharmonic partials fading at different rates
    [[1, 1, 1], [2.76, 0.45, 0.7], [5.4, 0.22, 0.45], [8.93, 0.1, 0.3]].forEach(([r, a, d]) => tone(f * r, dur * d, 'sine', vol * a, 0, delay, 0.002));
  };
  const bell = (f, dur, vol, delay = 0) => { tone(f, dur, 'sine', vol, 0, delay, 0.003); tone(f * 2, dur * 0.6, 'sine', vol * 0.35, 0, delay, 0.003); tone(f * 3.01, dur * 0.35, 'sine', vol * 0.15, 0, delay, 0.003); };
  const sparkle = (n, base, vol, gap = 45) => { for (let i = 0; i < n; i++) later(i * gap, () => tone(J(base * [1, 1.25, 1.5, 2, 2.5][i % 5], 0.03), 0.25, 'sine', vol, 0, 0, 0.002)); };
  const PENTA = [523, 587, 698, 784, 880, 1046, 1175, 1397, 1568];
  // at most one play per name per window: area skills hit many monsters in the same frame
  const lastPlay = {};
  const gate = (name, ms) => { const t = performance.now(); if (t - (lastPlay[name] || 0) < ms) return false; lastPlay[name] = t; return true; };
  const sfx = {
    swing: () => whoosh(0.16, 0.07, J(500), J(2600)),
    // ---- basic attacks and hits, per class (random variants + jitter)
    slash: () => {
      const v = Math.floor(Math.random() * 3);
      whoosh(0.15, 0.08, J([600, 450, 800][v]), J([3200, 2400, 4200][v]));
      if (v === 1) ring(J(2400, 0.08), 0.35, 0.006, 0.05);
    },
    slashHit: () => { if (!gate('slashHit', 45)) return; thump(J(150, 0.1), 0.13, 0.16); nz(0.07, 0.07, 'bandpass', J(1400), 1.2); ring(J(1900, 0.1), 0.3, 0.012); },
    heavyHit: () => { if (!gate('heavyHit', 60)) return; thump(J(110, 0.08), 0.32, 0.24); nz(0.28, 0.1, 'lowpass', 900, 0.8, 0, 200); ring(J(820, 0.08), 0.6, 0.016); whoosh(0.12, 0.05, 2000, 500); },
    pluck: () => { tone(J(340, 0.08), 0.18, 'triangle', 0.05, -70); tone(J(680, 0.08), 0.1, 'sine', 0.02, -120); whoosh(0.12, 0.04, 1500, 5000, 0.02); },
    arrowHit: () => { if (!gate('arrowHit', 40)) return; thump(J(200, 0.15), 0.09, 0.11); nz(0.06, 0.05, 'bandpass', J(2200), 1.4); },
    boltCast: () => { tone(J(480), 0.25, 'sine', 0.035, 700, 0, 0.03); tone(J(720), 0.2, 'triangle', 0.012, 900, 0, 0.03); sparkle(3, 1046, 0.012, 50); },
    boltHit: () => { if (!gate('boltHit', 45)) return; tone(J(1500), 0.22, 'sine', 0.03, -1000); bell(J(2093, 0.05), 0.4, 0.01); thump(180, 0.1, 0.06); },
    fireHit: () => { if (!gate('fireHit', 50)) return; nz(0.32, 0.12, 'lowpass', J(1600), 0.9, 0, 260); thump(J(90), 0.25, 0.14); for (let i = 0; i < 3; i++) nz(0.03, 0.035, 'bandpass', J(3500, 0.3), 3, 0.05 + i * 0.05); },
    iceHit: () => { if (!gate('iceHit', 50)) return; ring(J(2600, 0.06), 0.45, 0.011); nz(0.05, 0.05, 'highpass', 6000); thump(160, 0.08, 0.06); },
    zapHit: () => { if (!gate('zapHit', 50)) return; nz(0.1, 0.06, 'bandpass', J(3200), 2.5, 0, 1200); tone(J(1600), 0.12, 'triangle', 0.02, -1100); },
    // ---- skill casts
    fireCast: () => { nz(0.5, 0.1, 'lowpass', 300, 0.8, 0, 2200); thump(70, 0.45, 0.12, 0.08); for (let i = 0; i < 5; i++) nz(0.03, 0.03, 'bandpass', J(3000, 0.4), 3, 0.08 + i * 0.07); },
    iceCast: () => { [1568, 1760, 2093, 2349, 3136].forEach((f, i) => bell(J(f, 0.02), 0.5, 0.012, i * 0.055)); nz(0.4, 0.03, 'highpass', 5000, 0.7, 0, 9000, 0.1); },
    zapCast: () => { for (let i = 0; i < 5; i++) nz(0.05, 0.05, 'bandpass', J(2800, 0.3), 3, i * 0.04); tone(J(220), 0.3, 'triangle', 0.025, 600, 0, 0.02); },
    volley: (n = 4) => { for (let i = 0; i < n; i++) { whoosh(0.1, 0.045, J(900), J(4200), i * 0.05); tone(J(320 + i * 20, 0.08), 0.12, 'triangle', 0.025, -60, i * 0.05); } },
    bladeStorm: () => { whoosh(0.45, 0.1, 300, 3000); whoosh(0.35, 0.07, 2600, 600, 0.12); ring(J(1500), 0.6, 0.012, 0.1); thump(90, 0.3, 0.12); },
    powerUp: () => { tone(220, 0.7, 'sine', 0.05, 440, 0, 0.25); tone(330, 0.7, 'triangle', 0.02, 660, 0, 0.25); later(300, () => sparkle(5, 1046, 0.014)); nz(0.6, 0.025, 'highpass', 2000, 0.7, 0, 8000, 0.3); },
    healChime: () => [784, 1046, 1175, 1568].forEach((f, i) => bell(f, 0.9, 0.022, i * 0.08)),
    hit: () => { thump(J(140), 0.14, 0.15); nz(0.1, 0.06, 'lowpass', 1200, 0.8); },
    crit: () => { thump(J(100), 0.28, 0.22); nz(0.18, 0.09, 'lowpass', 1500, 0.8, 0, 250); ring(J(2200, 0.05), 0.5, 0.014); whoosh(0.1, 0.05, 3000, 8000); },
    bow: () => { tone(J(420, 0.06), 0.2, 'triangle', 0.045, -160); whoosh(0.12, 0.035, 1200, 4000, 0.02); },
    charge: () => { tone(260, 0.8, 'sine', 0.045, 780, 0, 0.3); tone(390, 0.7, 'triangle', 0.018, 1170, 0, 0.3); nz(0.8, 0.025, 'bandpass', 600, 1.2, 0, 4000, 0.3); },
    magic: () => { tone(J(600, 0.05), 0.35, 'sine', 0.04, 500, 0, 0.02); sparkle(3, 1318, 0.012, 60); },
    boom: () => { thump(65, 0.55, 0.26); nz(0.6, 0.14, 'lowpass', 1400, 0.7, 0, 120); nz(0.12, 0.06, 'highpass', 2500); },
    coin: () => { bell(J(1976, 0.02), 0.25, 0.022); bell(J(2637, 0.02), 0.35, 0.022, 0.06); },
    potion: () => { for (let i = 0; i < 3; i++) tone(J(380 + i * 140, 0.06), 0.12, 'sine', 0.035, 260, i * 0.06, 0.01); },
    level: () => { [523, 659, 784, 1046].forEach((f, i) => bell(f, 0.8, 0.035, i * 0.11)); later(450, () => sparkle(5, 1568, 0.012)); },
    ui: () => bell(J(1318, 0.02), 0.08, 0.014),
    fail: () => { tone(330, 0.35, 'triangle', 0.035, -110, 0, 0.01); tone(247, 0.4, 'sine', 0.03, -60, 0.12, 0.01); },
    success: () => [1046, 1318, 1568].forEach((f, i) => bell(f, 0.5, 0.025, i * 0.08)),
    legend: () => { PENTA.slice(0, 7).forEach((f, i) => bell(f, 1.1, 0.03, i * 0.1)); thump(80, 0.6, 0.12); later(700, () => sparkle(6, 2093, 0.014)); },
    die: () => { tone(300, 0.9, 'triangle', 0.04, -180, 0, 0.02); tone(225, 1.1, 'sine', 0.04, -120, 0.15, 0.02); thump(90, 0.5, 0.12); },
  };
  const setMuted = (m) => { muted = m; };

  return { clamp, lerp, dist, rand, randi, pick, chance, fmt, hash, vnoise, fbm, rng, sfx, audio, setMuted };
})();
