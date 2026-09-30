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

  // ---- tiny WebAudio sfx ----
  let ac = null, muted = false;
  function audio() {
    if (!ac) {
      try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; }
    }
    return ac;
  }
  function tone(freq, dur, type = 'square', vol = 0.05, slide = 0) {
    if (muted) return;
    const a = audio(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.value = freq;
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), a.currentTime + dur);
    g.gain.value = vol;
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + dur);
    o.connect(g); g.connect(a.destination);
    o.start(); o.stop(a.currentTime + dur);
  }
  function noiseBurst(dur, vol = 0.06, hp = 800) {
    if (muted) return;
    const a = audio(); if (!a) return;
    const len = Math.floor(a.sampleRate * dur);
    const buf = a.createBuffer(1, len, a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = a.createBufferSource(); src.buffer = buf;
    const f = a.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
    const g = a.createGain(); g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(a.destination); src.start();
  }
  // filtered noise (bandpass / lowpass / highpass) with an optional delay, for textured hits
  function nz(dur, vol, type, freq, q = 1, delay = 0) {
    if (muted) return;
    const a = audio(); if (!a) return;
    const len = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.6);
    const src = a.createBufferSource(); src.buffer = buf;
    const f = a.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = a.createGain(); g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(a.destination); src.start(a.currentTime + delay);
  }
  const later = (ms, fn) => (ms ? setTimeout(fn, ms) : fn());
  const J = (v, k = 0.12) => v * (1 + (Math.random() * 2 - 1) * k); // pitch jitter so repeats never sound identical
  // at most one play per name per window: area skills hit many monsters in the same frame
  const lastPlay = {};
  const gate = (name, ms) => { const t = performance.now(); if (t - (lastPlay[name] || 0) < ms) return false; lastPlay[name] = t; return true; };
  const sfx = {
    swing: () => noiseBurst(0.12, 0.05, 2500),
    // ---- basic attacks and hits, per class (random variants + jitter)
    slash: () => {
      const v = Math.floor(Math.random() * 3);
      nz(0.13, 0.07, 'bandpass', J([2200, 1700, 2800][v]), 1.2);
      if (v === 1) tone(J(260), 0.1, 'sawtooth', 0.015, -120);
    },
    slashHit: () => { if (!gate('slashHit', 45)) return; nz(0.07, 0.09, 'bandpass', J(900), 1.5); tone(J(180, 0.2), 0.07, 'square', 0.025, -70); tone(J(1600, 0.15), 0.09, 'triangle', 0.012, -300); },
    heavyHit: () => { if (!gate('heavyHit', 60)) return; nz(0.18, 0.13, 'lowpass', 700); tone(J(80), 0.2, 'sawtooth', 0.05, -35); tone(J(1300), 0.25, 'triangle', 0.02, -500); },
    pluck: () => { tone(J(300, 0.15), 0.12, 'triangle', 0.045, -110); nz(0.04, 0.03, 'highpass', 4000); later(40, () => nz(0.12, 0.025, 'bandpass', J(3200), 2)); },
    arrowHit: () => { if (!gate('arrowHit', 40)) return; tone(J(230, 0.2), 0.08, 'triangle', 0.04, -140); nz(0.06, 0.06, 'bandpass', J(1300), 1.4); },
    boltCast: () => { tone(J(620), 0.18, 'sine', 0.04, 700); tone(J(930), 0.14, 'triangle', 0.015, 900); },
    boltHit: () => { if (!gate('boltHit', 45)) return; tone(J(1400), 0.16, 'sine', 0.035, -900); nz(0.12, 0.03, 'highpass', 6000); },
    fireHit: () => { if (!gate('fireHit', 50)) return; nz(0.22, 0.09, 'lowpass', J(900)); for (let i = 0; i < 3; i++) later(30 + i * 45, () => nz(0.03, 0.05, 'highpass', 3000)); },
    iceHit: () => { if (!gate('iceHit', 50)) return; tone(J(2300, 0.1), 0.18, 'triangle', 0.02); tone(J(3100, 0.1), 0.12, 'sine', 0.015); nz(0.06, 0.06, 'highpass', 5000); },
    zapHit: () => { if (!gate('zapHit', 50)) return; tone(J(1200), 0.09, 'square', 0.025, -900); nz(0.08, 0.05, 'bandpass', J(3000), 2); },
    // ---- skill casts
    fireCast: () => { nz(0.45, 0.07, 'lowpass', 600); tone(J(140), 0.4, 'sawtooth', 0.025, 300); later(120, () => nz(0.25, 0.05, 'bandpass', 1500, 0.8)); },
    iceCast: () => [1600, 2000, 2400, 3000].forEach((f, i) => later(i * 55, () => tone(J(f, 0.05), 0.22, 'triangle', 0.022))),
    zapCast: () => { for (let i = 0; i < 4; i++) later(i * 40, () => { tone(J(900 + i * 300), 0.05, 'square', 0.02, -400); nz(0.04, 0.04, 'bandpass', 3500, 3); }); },
    volley: (n = 4) => { for (let i = 0; i < n; i++) later(i * 55, () => tone(J(300 + i * 25, 0.1), 0.1, 'triangle', 0.03, -100)); },
    bladeStorm: () => { nz(0.35, 0.08, 'bandpass', 700, 0.7); later(90, () => nz(0.2, 0.06, 'bandpass', 2000, 1)); tone(J(1100), 0.35, 'triangle', 0.018, -400); },
    powerUp: () => { tone(200, 0.5, 'sine', 0.05, 700); tone(300, 0.5, 'triangle', 0.02, 1000); later(250, () => nz(0.2, 0.04, 'highpass', 3000)); },
    healChime: () => [660, 880, 1100, 1320].forEach((f, i) => later(i * 70, () => tone(f, 0.35, 'sine', 0.035))),
    hit: () => { noiseBurst(0.08, 0.08, 400); tone(140, 0.08, 'square', 0.03, -60); },
    crit: () => { noiseBurst(0.14, 0.1, 300); tone(90, 0.18, 'sawtooth', 0.05, -40); },
    bow: () => tone(600, 0.1, 'triangle', 0.04, -350),
    charge: () => { tone(300, 0.7, 'sine', 0.04, 900); tone(450, 0.6, 'triangle', 0.02, 1200); },
    magic: () => { tone(500, 0.25, 'sine', 0.05, 700); tone(760, 0.2, 'triangle', 0.02, 300); },
    boom: () => { noiseBurst(0.4, 0.12, 120); tone(70, 0.4, 'sawtooth', 0.06, -40); },
    coin: () => { tone(1200, 0.06, 'square', 0.03); setTimeout(() => tone(1600, 0.1, 'square', 0.03), 60); },
    potion: () => tone(420, 0.18, 'sine', 0.05, 380),
    level: () => [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => tone(f, 0.25, 'triangle', 0.06), i * 110)),
    ui: () => tone(880, 0.04, 'square', 0.02),
    fail: () => tone(200, 0.3, 'sawtooth', 0.05, -120),
    success: () => [660, 880, 1320].forEach((f, i) => setTimeout(() => tone(f, 0.18, 'triangle', 0.05), i * 90)),
    legend: () => [523, 784, 1046, 1318, 1568].forEach((f, i) => setTimeout(() => tone(f, 0.35, 'triangle', 0.06), i * 120)),
    die: () => tone(300, 0.6, 'sawtooth', 0.05, -250),
  };
  const setMuted = (m) => { muted = m; };

  return { clamp, lerp, dist, rand, randi, pick, chance, fmt, hash, vnoise, fbm, rng, sfx, audio, setMuted };
})();
