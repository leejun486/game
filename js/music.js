'use strict';
// Background music: small procedural tracks played with WebAudio, plus recorded tracks (file) for some places.
// Each zone has its own mood; a boss fight switches to the battle track. Tracks crossfade over ~2s.
// A look-ahead scheduler queues 16th-note steps a little ahead of the audio clock. Synth tracks share a reverb bus.
const Music = (() => {
  const KEY = 'eclipse_bgm';
  let cfg = { on: true, vol: 0.6 };
  try { Object.assign(cfg, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* storage unavailable */ }
  const saveCfg = () => { try { localStorage.setItem(KEY, JSON.stringify(cfg)); } catch (e) { /* storage unavailable */ } };

  let ac = null, master = null, synth = null, noiseBuf = null, timer = 0, suppressed = false;
  let cur = null; // { id, def, gain, step, next }
  const fading = [];
  const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

  // ---------------------------------------------------------------- tracks
  // Soft 국악-flavoured tracks: pentatonic scales (평조 bright, 계면조 sad), a plucked 가야금, a breathy 대금 lead,
  // slow pads and a quiet 장구 / 북, all sent through a long reverb so nothing sounds bare.
  // scale: semitones from root; chords: scale degrees per bar (stacked as root + 2 + 3, an open fourth/fifth);
  // arp: 가야금 pattern (degrees above the chord root, -1 = rest) and its step length; lead: how often the 대금 plays;
  // drums: 16-step strings (k 덩/북, t 덕, h soft tap)
  const PYEONG = [0, 2, 5, 7, 9], GYEMYEON = [0, 3, 5, 7, 10], GYEMYEON_DARK = [0, 1, 5, 7, 8];
  const TRACKS = {
    town: { bpm: 66, root: 50, scale: PYEONG, chords: [0, 3, 1, 2], pad: 'warm', arp: [0, 2, 3, 5, 3, 2, 0, -1], arpEvery: 2, bass: true, lead: 0.55, bells: 0.05, drums: 'k.......t.....t.', vol: 1 },
    field: { bpm: 74, root: 55, scale: PYEONG, chords: [0, 3, 2, 0, 1, 3, 2, 2], pad: 'warm', arp: [0, 3, 5, 3, 2, 3, 5, 6], arpEvery: 2, bass: true, lead: 0.6, bells: 0, drums: 'k.....t.k...t.h.', vol: 0.95 },
    forest: { bpm: 60, root: 52, scale: GYEMYEON, chords: [0, 3, 1, 2], pad: 'warm', arp: [0, 2, 3, 5, -1, 3, 2, -1], arpEvery: 4, bass: true, lead: 0.5, bells: 0.08, drums: null, vol: 1 },
    grave: { bpm: 52, root: 45, scale: GYEMYEON, chords: [0, 3, 2, 1], pad: 'choir', arp: [0, -1, 3, -1, 2, -1, 5, -1], arpEvery: 4, bass: true, lead: 0.3, bells: 0.12, drums: 'k...............', vol: 1 },
    orc: { bpm: 88, root: 50, scale: PYEONG, chords: [0, 0, 3, 2], pad: 'warm', arp: [0, 2, 3, 2, 5, 3, 2, 3], arpEvery: 2, bass: true, lead: 0.55, bells: 0, drums: 'k..t..k.t.k.t...', vol: 0.95 },
    snow: { bpm: 56, root: 57, scale: PYEONG, chords: [0, 1, 0, 3], pad: 'glass', arp: [5, -1, 3, -1, 2, -1, 0, -1], arpEvery: 4, bass: false, lead: 0.35, bells: 0.15, drums: null, vol: 0.95 },
    volcano: { bpm: 70, root: 43, scale: GYEMYEON_DARK, chords: [0, 1, 0, 3], pad: 'dark', arp: [0, 2, 3, 2, 0, 2, 3, 5], arpEvery: 2, bass: true, lead: 0.4, bells: 0, drums: 'k..k....k..t..t.', vol: 1 },
    void: { bpm: 50, root: 41, scale: GYEMYEON_DARK, chords: [0, 2, 0, 3], pad: 'choir', arp: [0, -1, -1, 2, -1, -1, 3, -1], arpEvery: 4, bass: true, lead: 0.25, bells: 0.1, drums: 'k.......t.......', vol: 1 },
    dungeon: { file: 'assets/music/cave.mp3', vol: 1.1 }, // 이클립스 균열 (the cave)
    boss: { bpm: 108, root: 45, scale: GYEMYEON, chords: [0, 0, 3, 2, 0, 0, 1, 2], pad: 'dark', arp: [0, 2, 3, 5, 3, 2, 3, 5], arpEvery: 1, bass: 'drive', lead: 0.65, bells: 0, drums: 'k..k..t.k..k.tt.', vol: 1 },
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
  // a gentle vibrato that swells in after `delay` (농현 on the 가야금, breath on the 대금)
  function vibrato(o, f, t, delay, dur, depth, rate) {
    const lfo = ac.createOscillator(), lg = ac.createGain();
    lfo.frequency.value = rate; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(0, t + delay); lg.gain.linearRampToValueAtTime(f * depth, t + delay + dur * 0.5);
    lfo.connect(lg); lg.connect(o.frequency); lfo.start(t); lfo.stop(t + delay + dur + 0.1);
  }
  const INST = {
    pad(out, fs, t, dur, kind) {
      const filt = { warm: ['lowpass', 900], choir: ['bandpass', 650, 0.9], dark: ['lowpass', 420], glass: ['lowpass', 2400] }[kind];
      const vol = { warm: 0.028, choir: 0.026, dark: 0.03, glass: 0.022 }[kind];
      for (const f of fs) {
        const g = voice(out, vol, t, dur * 0.4, dur * 0.3, dur * 0.5, filt);
        osc(g, 'sine', f, t, dur * 1.2, -5); osc(g, 'triangle', f, t, dur * 1.2, 5);
        if (kind === 'glass') osc(g, 'sine', f * 2, t, dur * 1.2, 2);
      }
    },
    // 가야금: a soft pluck with a little downward bend, ringing out
    gayageum(out, f, t, vol = 0.07) {
      const g = voice(out, vol, t, 0.004, 0.03, 1.6, ['lowpass', 1700, 0.5]);
      const o = osc(g, 'triangle', f, t, 1.8); o.frequency.setValueAtTime(f * 1.015, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.07);
      osc(g, 'sine', f, t, 1.8, -4);
      vibrato(o, f, t, 0.35, 1.2, 0.006, 5.5);
    },
    // 대금: a breathy bamboo flute, the vibrato deepening as the note holds
    daegeum(out, f, t, dur, vol = 0.045) {
      const g = voice(out, vol, t, 0.16, dur * 0.65, Math.max(0.4, dur * 0.5), ['lowpass', 2200]);
      const o = osc(g, 'sine', f, t, dur + 0.6); vibrato(o, f, t, dur * 0.25, dur, 0.009, 4.8);
      const h = ac.createGain(); h.gain.value = 0.18; h.connect(g); osc(h, 'sine', f * 2, t, dur + 0.6);
      const s = ac.createBufferSource(); s.buffer = noiseBuf;
      const b = voice(out, vol * 0.22, t, 0.08, dur * 0.4, 0.3, ['bandpass', f * 2, 3]);
      s.connect(b); s.start(t); s.stop(t + dur + 0.6);
    },
    // 풍경: a temple wind-chime, far away
    bell(out, f, t, vol = 0.025) { const g = voice(out, vol, t, 0.004, 0.01, 2.4); osc(g, 'sine', f, t, 2.5); const g2 = voice(out, vol * 0.3, t, 0.004, 0, 0.9); osc(g2, 'sine', f * 2.76, t, 1); },
    bass(out, f, t, dur, vol = 0.07) { const g = voice(out, vol, t, 0.03, dur * 0.5, dur * 0.5, ['lowpass', 260]); osc(g, 'sine', f, t, dur); },
    noise(out, t, vol, dur, type, freq, q = 0.9) {
      const s = ac.createBufferSource(); s.buffer = noiseBuf;
      const g = voice(out, vol, t, 0.002, 0.005, dur, [type, freq, q]);
      s.connect(g); s.start(t); s.stop(t + dur + 0.05);
    },
  };
  // 장구 / 북, kept soft: 덩 (a round low thump), 덕 (a light rim tap), and a whisper of a tap
  const drum = (out, ch, t, battle) => {
    if (ch === 'k') { const g = voice(out, battle ? 0.16 : 0.1, t, 0.004, 0.02, 0.4); const o = osc(g, 'sine', 95, t, 0.45); o.frequency.exponentialRampToValueAtTime(58, t + 0.35); }
    else if (ch === 't') { INST.noise(out, t, 0.03, 0.09, 'bandpass', 1300, 2); const g = voice(out, 0.025, t, 0.002, 0, 0.12); osc(g, 'sine', 330, t, 0.15); }
    else if (ch === 'h') INST.noise(out, t, 0.01, 0.05, 'bandpass', 3500, 1.5);
  };

  // ---------------------------------------------------------------- sequencing
  const noteOf = (d, deg, oct) => { const sc = d.scale, n = sc.length; const o = Math.floor(deg / n); return d.root + sc[((deg % n) + n) % n] + 12 * (o + oct); };
  const chordOf = (d, bar) => { const c = d.chords[bar % d.chords.length]; return [c, c + 2, c + 3]; };
  function playStep(tr, t) {
    const d = tr.def, out = tr.gain, st = tr.step, bar = Math.floor(st / 16), s = st % 16, sp = 60 / d.bpm / 4;
    const ch = chordOf(d, bar);
    if (s === 0 && d.pad) INST.pad(out, ch.map((x) => mtof(noteOf(d, x, 0))), t, sp * 16, d.pad);
    if (d.bass) {
      if (d.bass === 'drive') { if (s % 4 === 0) INST.bass(out, mtof(noteOf(d, ch[0], -1)), t, sp * 3.5, 0.06); }
      else if (s === 0 || (s === 8 && bar % 2)) INST.bass(out, mtof(noteOf(d, s ? ch[1] : ch[0], -1)), t, sp * 8);
    }
    // 가야금 pattern, with a little timing and loudness wobble so it doesn't sound machine-made
    if (d.arp && s % d.arpEvery === 0) {
      const k = (st / d.arpEvery) % d.arp.length, a = d.arp[k];
      if (a >= 0) INST.gayageum(out, mtof(noteOf(d, ch[0] + a, 0)), t + Math.random() * 0.012, 0.05 + Math.random() * 0.025);
    }
    if (d.drums) { const c = d.drums[s]; if (c && c !== '.') drum(out, c, t, d.bass === 'drive'); }
    if (d.bells && s % 4 === 0 && Math.random() < d.bells) INST.bell(out, mtof(noteOf(d, ch[U.randi(0, 2)] + 5, 1)), t);
    // 대금: phrases of held notes moving mostly by step, resting between them; bars begin on a chord tone
    if (s % 2 === 0 && st >= (tr.leadUntil || 0)) {
      if (Math.random() < d.lead) {
        tr.leadDeg = s === 0 || tr.leadDeg == null ? ch[U.randi(0, 2)] + 5 : U.clamp(tr.leadDeg + U.pick([-2, -1, -1, 1, 1, 2]), 2, 12);
        const steps = U.pick([4, 4, 6, 8, 8, 12]);
        INST.daegeum(out, mtof(noteOf(d, tr.leadDeg, 0)), t, sp * steps);
        tr.leadUntil = st + steps;
      } else tr.leadUntil = st + U.pick([2, 4, 8]);
    }
    tr.step++;
  }
  function tick() {
    if (!ac || !cur) return;
    const ahead = ac.currentTime + 0.25;
    for (const tr of [cur, ...fading]) {
      if (tr.def.file) continue; // recorded tracks play themselves
      const sp = 60 / tr.def.bpm / 4;
      if (tr.next < ac.currentTime - 1) tr.next = ac.currentTime + 0.05; // tab was asleep: don't burst-play the backlog
      while (tr.next < ahead) { playStep(tr, tr.next); tr.next += sp; }
    }
    for (let i = fading.length - 1; i >= 0; i--) if (ac.currentTime > fading[i].endAt) { if (fading[i].el) fading[i].el.pause(); fading[i].gain.disconnect(); fading.splice(i, 1); }
  }

  // ---------------------------------------------------------------- control
  function init() {
    if (ac) return true;
    ac = U.audio(); if (!ac) return false;
    master = ac.createGain(); master.gain.value = 0;
    const comp = ac.createDynamicsCompressor(); comp.threshold.value = -20; comp.ratio.value = 3; comp.attack.value = 0.03;
    master.connect(comp); comp.connect(ac.destination);
    noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    const ch = noiseBuf.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    // synth bus: a gentle high cut, then dry + a long hall reverb (decaying noise impulse, 3.2s)
    synth = ac.createBiquadFilter(); synth.type = 'lowpass'; synth.frequency.value = 4200;
    const dry = ac.createGain(); dry.gain.value = 0.75;
    const wet = ac.createGain(); wet.gain.value = 0.55;
    const rev = ac.createConvolver(), len = Math.floor(ac.sampleRate * 3.2), ir = ac.createBuffer(2, len, ac.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    rev.buffer = ir;
    synth.connect(dry); dry.connect(master); synth.connect(rev); rev.connect(wet); wet.connect(master);
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
    const gain = ac.createGain(); gain.gain.value = 0.0001; gain.gain.setTargetAtTime(def.vol, t + 0.2, 0.9); gain.connect(def.file ? master : synth);
    cur = { id, def, gain, step: 0, next: t + 0.1 };
    if (def.file) { // a looping recording routed through the same gain/master chain (volume, mute, crossfade)
      const el = new Audio(def.file); el.loop = true; el.preload = 'auto';
      ac.createMediaElementSource(el).connect(gain);
      el.play().catch(() => {});
      cur.el = el;
    }
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
