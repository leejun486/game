'use strict';
// Background music: small procedural tracks played with WebAudio (no audio files).
// Each zone has its own mood; a boss fight switches to the battle track. Tracks crossfade over ~2s.
// A look-ahead scheduler queues 16th-note steps a little ahead of the audio clock.
const Music = (() => {
  const KEY = 'eclipse_bgm';
  let cfg = { on: true, vol: 0.6 };
  try { Object.assign(cfg, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* storage unavailable */ }
  const saveCfg = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) { /* storage unavailable */ } };

  let ac = null, master = null, noiseBuf = null, timer = 0, suppressed = false;
  let cur = null; // { id, def, gain, step, next }
  const fading = [];
  const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

  // ---------------------------------------------------------------- tracks
  // scale: semitones from root; chords: scale degrees per bar (0-based, stacked in thirds);
  // lead: chance of a melody note per 8th; drums: 16-step strings (k kick, s snare, h hat, t tom)
  const MAJ = [0, 2, 4, 5, 7, 9, 11], MIN = [0, 2, 3, 5, 7, 8, 10], HARM = [0, 2, 3, 5, 7, 8, 11];
  const LYD = [0, 2, 4, 6, 7, 9, 11], PHRY = [0, 1, 3, 5, 7, 8, 10], DIM = [0, 2, 3, 5, 6, 8, 9, 11];
  const TRACKS = {
    town: { bpm: 84, root: 50, scale: MAJ, chords: [0, 4, 5, 3], pad: 'warm', arp: 'pluck', bass: true, lead: 0.45, leadInst: 'flute', drums: null, vol: 0.9 },
    field: { bpm: 100, root: 55, scale: MAJ, chords: [0, 3, 4, 0, 5, 3, 4, 4], pad: 'warm', arp: 'pluck', bass: true, lead: 0.55, leadInst: 'flute', drums: '....h...h...h.h.', vol: 0.85 },
    forest: { bpm: 88, root: 52, scale: MIN, chords: [0, 5, 2, 6], pad: 'warm', arp: 'pluck', bass: true, lead: 0.4, leadInst: 'flute', drums: null, vol: 0.85 },
    grave: { bpm: 64, root: 45, scale: HARM, chords: [0, 5, 3, 4], pad: 'choir', arp: 'bell', bass: true, lead: 0.25, leadInst: 'bell', drums: 'k...............', vol: 0.9 },
    orc: { bpm: 104, root: 43, scale: MIN, chords: [0, 0, 5, 6], pad: 'dark', arp: null, bass: 'riff', lead: 0.3, leadInst: 'horn', drums: 'k..tk.t.k..tk.tt', vol: 0.9 },
    snow: { bpm: 70, root: 57, scale: LYD, chords: [0, 1, 0, 4], pad: 'glass', arp: 'bell', bass: false, lead: 0.3, leadInst: 'bell', drums: null, vol: 0.8 },
    volcano: { bpm: 92, root: 40, scale: PHRY, chords: [0, 1, 0, 6], pad: 'dark', arp: null, bass: 'riff', lead: 0.25, leadInst: 'horn', drums: 'k.k.s..kk.k.s.t.', vol: 0.95 },
    void: { bpm: 60, root: 41, scale: DIM, chords: [0, 2, 0, 5], pad: 'choir', arp: 'bell', bass: true, lead: 0.2, leadInst: 'bell', drums: 'k.......t.......', vol: 0.95 },
    dungeon: { bpm: 96, root: 45, scale: HARM, chords: [0, 5, 6, 4], pad: 'dark', arp: 'pluck', bass: 'riff', lead: 0.3, leadInst: 'horn', drums: 'k...s...k.k.s...', vol: 0.9 },
    boss: { bpm: 138, root: 45, scale: HARM, chords: [0, 0, 5, 4, 0, 0, 6, 4], pad: 'dark', arp: 'saw', bass: 'drive', lead: 0.6, leadInst: 'horn', drums: 'k.hsk.hsk.hsk.ss', vol: 1 },
  };

  // ---------------------------------------------------------------- instruments
  function env(g, t, a, peak, hold, rel) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.setValueAtTime(peak, t + a + hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + rel);
  }
  function osc(out, type, f, t, dur, detune = 0) {
    const o = ac.createOscillator(); o.type = type; o.frequency.value = f; o.detune.value = detune;
    o.connect(out); o.start(t); o.stop(t + dur + 0.05);
    return o;
  }
  function voice(out, vol, t, a, hold, rel, filt) {
    const g = ac.createGain(); env(g, t, a, vol, hold, rel);
    if (filt) { const f = ac.createBiquadFilter(); f.type = filt[0]; f.frequency.value = filt[1]; f.Q.value = filt[2] || 0.7; g.connect(f); f.connect(out); } else g.connect(out);
    return g;
  }
  const INST = {
    pad(out, fs, t, dur, kind) {
      const type = { warm: 'triangle', choir: 'sawtooth', dark: 'sawtooth', glass: 'sine' }[kind];
      const filt = { warm: ['lowpass', 1400], choir: ['bandpass', 900, 1.2], dark: ['lowpass', 520], glass: null }[kind];
      const vol = { warm: 0.05, choir: 0.035, dark: 0.045, glass: 0.05 }[kind];
      for (const f of fs) {
        const g = voice(out, vol, t, dur * 0.3, dur * 0.4, dur * 0.4, filt);
        osc(g, type, f, t, dur, -7); osc(g, type, f, t, dur, 7);
      }
    },
    pluck(out, f, t, vol = 0.06) { const g = voice(out, vol, t, 0.005, 0.02, 0.35, ['lowpass', 2400]); osc(g, 'triangle', f, t, 0.4); osc(g, 'square', f * 2, t, 0.1).detune.value = 3; },
    bell(out, f, t, vol = 0.05) { const g = voice(out, vol, t, 0.004, 0.01, 1.4); osc(g, 'sine', f, t, 1.5); const g2 = voice(out, vol * 0.4, t, 0.004, 0, 0.6); osc(g2, 'sine', f * 2.76, t, 0.7); },
    saw(out, f, t, vol = 0.03) { const g = voice(out, vol, t, 0.005, 0.03, 0.12, ['lowpass', 1800]); osc(g, 'sawtooth', f, t, 0.2); },
    flute(out, f, t, dur, vol = 0.05) { const g = voice(out, vol, t, 0.06, dur * 0.6, dur * 0.4, ['lowpass', 2600]); const o = osc(g, 'sine', f, t, dur); const lfo = ac.createOscillator(), lg = ac.createGain(); lfo.frequency.value = 5; lg.gain.value = f * 0.006; lfo.connect(lg); lg.connect(o.frequency); lfo.start(t); lfo.stop(t + dur + 0.05); osc(g, 'triangle', f * 2, t, dur).detune.value = 4; },
    horn(out, f, t, dur, vol = 0.045) { const g = voice(out, vol, t, 0.04, dur * 0.5, dur * 0.5, ['lowpass', 1200]); osc(g, 'sawtooth', f, t, dur, -5); osc(g, 'sawtooth', f, t, dur, 5); },
    bass(out, f, t, dur, vol = 0.09) { const g = voice(out, vol, t, 0.01, dur * 0.5, dur * 0.5, ['lowpass', 380]); osc(g, 'triangle', f, t, dur); osc(g, 'sine', f / 2, t, dur); },
    kick(out, t, vol = 0.22) { const g = voice(out, vol, t, 0.002, 0.02, 0.25); const o = osc(g, 'sine', 120, t, 0.3); o.frequency.exponentialRampToValueAtTime(38, t + 0.25); },
    noise(out, t, vol, dur, type, freq) {
      const s = ac.createBufferSource(); s.buffer = noiseBuf;
      const g = voice(out, vol, t, 0.002, 0.005, dur, [type, freq, 0.9]);
      s.connect(g); s.start(t); s.stop(t + dur + 0.05);
    },
  };
  const drum = (out, ch, t) => {
    if (ch === 'k') INST.kick(out, t);
    else if (ch === 's') INST.noise(out, t, 0.08, 0.16, 'bandpass', 1800);
    else if (ch === 'h') INST.noise(out, t, 0.03, 0.05, 'highpass', 7000);
    else if (ch === 't') { const g = voice(out, 0.12, t, 0.003, 0.02, 0.3); const o = osc(g, 'sine', 180, t, 0.35); o.frequency.exponentialRampToValueAtTime(90, t + 0.3); }
  };

  // ---------------------------------------------------------------- sequencing
  const noteOf = (d, deg, oct) => { const sc = d.scale, n = sc.length; const o = Math.floor(deg / n); return d.root + sc[((deg % n) + n) % n] + 12 * (o + oct); };
  const chordOf = (d, bar) => { const c = d.chords[bar % d.chords.length]; return [c, c + 2, c + 4]; };
  function playStep(tr, t) {
    const d = tr.def, out = tr.gain, st = tr.step, bar = Math.floor(st / 16), s = st % 16, sp = 60 / d.bpm / 4;
    const ch = chordOf(d, bar);
    if (s === 0 && d.pad) INST.pad(out, ch.map((x) => mtof(noteOf(d, x, 0))), t, sp * 16, d.pad);
    if (d.bass) {
      if (d.bass === 'drive') { if (s % 2 === 0) INST.bass(out, mtof(noteOf(d, ch[0], -1)), t, sp * 1.6, 0.07); }
      else if (d.bass === 'riff') { if ([0, 3, 6, 10, 12].includes(s)) INST.bass(out, mtof(noteOf(d, ch[0] + (s === 10 ? 4 : 0), -1)), t, sp * 2.5); }
      else if (s === 0 || s === 8) INST.bass(out, mtof(noteOf(d, s ? ch[2] - 7 : ch[0], -1)), t, sp * 7);
    }
    if (d.arp) {
      const every = d.arp === 'saw' ? 1 : d.arp === 'bell' ? 4 : 2;
      if (s % every === 0) { const k = (s / every) % 4; const f = mtof(noteOf(d, ch[[0, 1, 2, 1][k]] + (k === 2 && d.arp === 'saw' ? 7 : 0), 1)); INST[d.arp](out, f, t); }
    }
    if (d.drums) { const c = d.drums[s]; if (c && c !== '.') drum(out, c, t); }
    // lead: a wandering melody over the chord tones, phrased in 8ths
    if (s % 2 === 0 && Math.random() < d.lead * (s % 8 === 0 ? 1.4 : 0.8)) {
      tr.leadDeg = s % 8 === 0 ? ch[U.randi(0, 2)] + 7 : U.clamp((tr.leadDeg ?? ch[0] + 7) + U.pick([-2, -1, -1, 1, 1, 2]), 3, 15);
      const f = mtof(noteOf(d, tr.leadDeg, 1)), dur = sp * U.pick([2, 2, 4, 6]);
      if (d.leadInst === 'bell') INST.bell(out, f, t, 0.04); else INST[d.leadInst](out, f, t, dur);
    }
    tr.step++;
  }
  function tick() {
    if (!ac || !cur) return;
    const ahead = ac.currentTime + 0.25;
    for (const tr of [cur, ...fading]) {
      const sp = 60 / tr.def.bpm / 4;
      if (tr.next < ac.currentTime - 1) tr.next = ac.currentTime + 0.05; // tab was asleep: don't burst-play the backlog
      while (tr.next < ahead) { playStep(tr, tr.next); tr.next += sp; }
    }
    for (let i = fading.length - 1; i >= 0; i--) if (ac.currentTime > fading[i].endAt) { fading[i].gain.disconnect(); fading.splice(i, 1); }
  }

  // ---------------------------------------------------------------- control
  function init() {
    if (ac) return true;
    ac = U.audio(); if (!ac) return false;
    master = ac.createGain(); master.gain.value = 0;
    const comp = ac.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 4;
    master.connect(comp); comp.connect(ac.destination);
    noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    const ch = noiseBuf.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    timer = setInterval(tick, 90);
    applyVol();
    return true;
  }
  function applyVol() {
    if (!master) return;
    const v = cfg.on && !suppressed ? cfg.vol * 0.5 : 0;
    master.gain.cancelScheduledValues(ac.currentTime);
    master.gain.setTargetAtTime(v, ac.currentTime, 0.4);
  }
  function play(id) {
    if (!init() || (cur && cur.id === id)) return;
    if (ac.state === 'suspended') ac.resume();
    const t = ac.currentTime;
    if (cur) { cur.gain.gain.setTargetAtTime(0.0001, t, 0.6); cur.endAt = t + 3; fading.push(cur); }
    const def = TRACKS[id] || TRACKS.field;
    const gain = ac.createGain(); gain.gain.value = 0.0001; gain.gain.setTargetAtTime(def.vol, t + 0.2, 0.7); gain.connect(master);
    cur = { id, def, gain, step: 0, next: t + 0.1 };
  }
  // pick the track for where the player is; a boss fighting the player (or targeted by them) wins
  let checkT = 0;
  function update(game, dt) {
    if (!ac || !game.player) return;
    checkT -= dt; if (checkT > 0) return; checkT = 0.5;
    const p = game.player;
    const bossFight = game.monsters.some((m) => m.def.boss && !m.dead && (m.target === p || p.target === m) && U.dist(m, p) < 900);
    play(bossFight ? 'boss' : World.zoneAt(p.x, p.y).id);
  }
  // audio needs a user gesture: the first click/key starts the context
  const kick = () => { if (init() && ac.state === 'suspended') ac.resume(); };
  addEventListener('pointerdown', kick, { passive: true });
  addEventListener('keydown', kick);

  return {
    update, play,
    suppress(v) { suppressed = v; applyVol(); }, // films have their own sound
    get on() { return cfg.on; }, get vol() { return cfg.vol; },
    set(o) { Object.assign(cfg, o); saveCfg(); applyVol(); },
    get current() { return cur && cur.id; },
  };
})();
