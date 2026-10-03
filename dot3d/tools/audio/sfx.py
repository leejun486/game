# 효과음 렌더 → dot3d/audio/sfx/*.ogg|mp3  (자주 나는 소리는 여러 벌을 만들어 번갈아 씀)
import json
import os
import subprocess
import wave
import numpy as np
from synth import *

OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'audio', 'sfx')
TMP = os.environ.get('AUDIO_TMP', '/tmp/dot3d-audio')
os.makedirs(OUT, exist_ok=True)
os.makedirs(TMP, exist_ok=True)
R = np.random.default_rng(5)


def N(d):
    return int(d * SR)


def env_bell(n, peak=0.3):
    t = np.linspace(0, 1, n)
    return np.where(t < peak, (t / peak) ** 1.5, ((1 - t) / (1 - peak)) ** 2)


def sweep_noise(d, f0, f1, q=2.0, curve='exp'):
    """주파수가 움직이는 대역 잡음 (블록 단위 필터)"""
    n = N(d)
    x = noise(n)
    out = np.zeros(n)
    blk = 256
    for i in range(0, n, blk):
        k = i / n
        f = f0 * (f1 / f0) ** k if curve == 'exp' else f0 + (f1 - f0) * k
        b, a = signal.iirpeak(min(f, SR / 2 - 200) / (SR / 2), q)
        out[i:i + blk] = signal.lfilter(b, a, x[max(0, i - 512):i + blk])[-len(x[i:i + blk]):]
    return out


def sine_sweep(d, f0, f1, tau=None):
    n = N(d)
    t = np.arange(n) / SR
    f = f0 * (f1 / f0) ** (t / d)
    x = np.sin(phase_of(f))
    return x * (exp_env(n, tau) if tau else 1)


def thump(d=0.25, f0=140, f1=50, tau=0.07):
    return sine_sweep(d, f0, f1, tau)


def metal(d, base, ratios=(1, 1.52, 2.17, 2.79, 3.6, 4.4), tau=0.3):
    n = N(d)
    t = np.arange(n) / SR
    x = np.zeros(n)
    for i, m in enumerate(ratios):
        x += np.sin(2 * np.pi * base * m * (1 + 0.01 * R.standard_normal()) * t + R.random() * 6) * exp_env(n, tau / (1 + i * 0.35)) / (1 + i * 0.4)
    return x


def mix(*parts):
    n = max(len(p[1]) + N(p[0]) for p in parts)
    out = np.zeros(n)
    for at, x, g in parts:
        i = N(at)
        out[i:i + len(x)] += x * g
    return out


def room(x, size=0.6, wet=0.18, seed=2):
    ir = make_ir(size, size * 0.4, 7000, 2500, er=True, seed=seed)[:, 0]
    y = signal.fftconvolve(x, ir)[:len(x) + len(ir) - 1]
    y[:len(x)] = y[:len(x)] * wet + x
    y[len(x):] *= wet
    return y


def fade(x, ms=8):
    k = N(ms / 1000)
    x[-k:] *= np.linspace(1, 0, k)
    return x


def trim(x, thresh=1e-4):
    idx = np.where(np.abs(x) > thresh)[0]
    return x[:idx[-1] + 1] if len(idx) else x


# ---------- 소리 설계 ----------

def s_swing(v):
    d = 0.2 + 0.04 * v
    x = sweep_noise(d, 500 + 150 * v, 3200 + 400 * v, 1.8) * env_bell(N(d), 0.55)
    x += highpass(noise(N(d)), 4000) * env_bell(N(d), 0.6) * 0.15
    return x


def s_swing3(v):
    d = 0.32
    x = sweep_noise(d, 350, 3800, 1.6) * env_bell(N(d), 0.5) * 1.1
    x = x + metal(0.4, 3200 + 200 * v, tau=0.12)[:N(d)] * 0.04
    return x


def s_hit(v):
    return mix((0, thump(0.22, 150 + 20 * v, 52, 0.06), 1.0),
               (0, bandpass(noise(N(0.05)), 1300 + 400 * v, 1.0) * exp_env(N(0.05), 0.012), 0.9),
               (0, highpass(noise(N(0.015)), 3000) * np.linspace(1, 0, N(0.015)), 0.6))


def s_crit(v):
    return mix((0, thump(0.35, 180, 40, 0.09), 1.2),
               (0, bandpass(noise(N(0.06)), 1600, 0.9) * exp_env(N(0.06), 0.015), 1.0),
               (0.005, metal(0.5, 2800 + 300 * v, tau=0.18), 0.22),
               (0, highpass(noise(N(0.02)), 3500) * np.linspace(1, 0, N(0.02)), 0.8))


def s_drum(v):
    x = buk(1.0, low=True) * 1.2
    x = mix((0, x, 1.0), (0, thump(1.4, 75, 42, 0.5), 0.8), (0, bukrim(0.4), 0.3))
    return room(x, 1.4, 0.3)


def s_draw(v):
    d = 0.42
    n = N(d)
    scrape = sweep_noise(d, 2500, 6500, 5) * np.linspace(0.3, 1, n) * env_bell(n, 0.8)
    ring = metal(0.6, 3100, tau=0.25)
    return mix((0, scrape, 0.8), (0.33, ring, 0.18), (0.33, highpass(noise(N(0.01)), 4000), 0.3))


def s_sheathe(v):
    click = lambda: metal(0.08, 2400, tau=0.02) * 0.4 + highpass(noise(N(0.08)), 3000) * exp_env(N(0.08), 0.006)
    return mix((0, sweep_noise(0.12, 4500, 2500, 4) * env_bell(N(0.12), 0.3), 0.3), (0.1, click(), 0.9), (0.115, thump(0.1, 400, 200, 0.02), 0.4))


def s_bowdraw(v):
    d = 0.3
    n = N(d)
    creak = bandpass(noise(n), 420, 6) * np.linspace(0.2, 1, n) + bandpass(noise(n), 900, 8) * 0.5
    return creak * env_bell(n, 0.85) * 0.8


def s_bow(v):
    n = N(0.4)
    t = np.arange(n) / SR
    twang = np.sin(2 * np.pi * (175 + 25 * v) * t * (1 - 0.06 * t)) * exp_env(n, 0.06) + 0.4 * np.sin(2 * np.pi * 352 * t) * exp_env(n, 0.035)
    whoosh = sweep_noise(0.22, 3000, 900, 2) * env_bell(N(0.22), 0.2)
    return mix((0, twang, 0.7), (0.01, whoosh, 0.5))


def s_bowskill(v):
    parts = [(i * 0.04, s_bow(i), 0.5) for i in range(4)]
    parts.append((0.03, sweep_noise(0.6, 500, 4500, 1.4) * env_bell(N(0.6), 0.4), 0.7))
    return mix(*parts)


def s_arrowhit(v):
    return mix((0, thump(0.12, 260, 110, 0.03), 0.8), (0, bandpass(noise(N(0.04)), 2400, 1.5) * exp_env(N(0.04), 0.008), 0.8))


def s_cast(v):
    d = 0.3
    flutter = bandpass(noise(N(d)), 2200, 1.0) * (0.5 + 0.5 * np.sign(np.sin(2 * np.pi * 34 * np.arange(N(d)) / SR))) * env_bell(N(d), 0.3)
    chime = mix(*[(i * 0.045, metal(0.5, f, ratios=(1, 2.76, 5.4), tau=0.25), 0.18) for i, f in enumerate((1568, 1760, 2093))])
    return mix((0, flutter, 0.6), (0.02, chime, 1.0))


def s_fire(v):
    d = 0.7
    n = N(d)
    roar = lowpass(noise(n), 1800) * exp_env(n, 0.18)
    crack = np.zeros(n)
    for _ in range(40):
        i = R.integers(0, n // 2)
        crack[i:i + 40] += highpass(noise(40), 2500) * R.uniform(0.2, 1)
    return room(mix((0, roar, 0.9), (0, crack * exp_env(n, 0.25), 0.5), (0, thump(0.35, 120, 45, 0.1), 0.9)), 0.8, 0.2)


def s_chant(v):
    # 싱잉볼처럼 맑게 '우웅'
    n = N(1.1)
    t = np.arange(n) / SR
    x = np.zeros(n)
    for m, a in ((1, 1), (2.71, 0.5), (5.12, 0.25)):
        x += a * np.sin(2 * np.pi * 523 * m * t) * exp_env(n, 0.6 / m)
    x *= 1 + 0.2 * np.sin(2 * np.pi * 4.5 * t)
    return mix((0, x, 0.35), (0, moktak(0.5), 0.5))


def s_charge(v):
    d = 0.45
    return sweep_noise(d, 200, 3200, 4) * np.linspace(0, 1, N(d)) ** 1.5 + sine_sweep(d, 220, 880) * np.linspace(0, 1, N(d)) ** 2 * 0.12


def s_thunder(v):
    n = N(2.6)
    crack = np.zeros(n)
    for k in range(6):
        i = N(k * 0.025 + R.uniform(0, 0.01))
        m = N(0.03)
        crack[i:i + m] += highpass(noise(m), 1800) * np.linspace(1, 0, m) * (1 - k * 0.12)
    rumble = lowpass(noise(n), 260) * exp_env(n, 0.9) * (1 + 0.5 * np.sin(2 * np.pi * 3.3 * np.arange(n) / SR))
    body = lowpass(noise(n), 1200) * exp_env(n, 0.25)
    return room(mix((0, crack, 1.0), (0.02, rumble, 1.6), (0.01, body, 0.6), (0, thump(1.0, 90, 30, 0.35), 0.8)), 1.6, 0.25)


def s_blink(v):
    d = 0.35
    w = sweep_noise(d, 5000, 700, 3) * env_bell(N(d), 0.7)
    sh = metal(0.4, 2093, ratios=(1, 1.5, 2), tau=0.15)
    return mix((0, w, 0.8), (0.12, sh, 0.12))


def s_freeze(v):
    n = N(0.9)
    cr = np.zeros(n)
    for _ in range(70):
        i = R.integers(0, N(0.45))
        m = 60
        cr[i:i + m] += highpass(noise(m), 4500) * R.uniform(0.2, 1) * np.linspace(1, 0, m)
    glass = mix(*[(i * 0.04, metal(0.8, f, ratios=(1, 2.3, 3.9), tau=0.3), 0.15) for i, f in enumerate((1568, 2093, 2637, 3136))])
    return mix((0, cr, 0.7), (0, glass, 1.0), (0, thump(0.4, 160, 60, 0.1), 0.6))


def s_tornado(v):
    d = 1.7
    n = N(d)
    a = sweep_noise(d, 300, 1400, 3, 'lin') * env_bell(n, 0.3)
    b = sweep_noise(d, 700, 2200, 5, 'lin') * env_bell(n, 0.45)
    return a * 0.9 + b * 0.5 + lowpass(noise(n), 400) * env_bell(n, 0.4) * 0.5


def s_levelup(v):
    # 가야금 훑어 올리기 + 방울
    sc = [0, 2, 5, 7, 9]
    parts = []
    for i in range(8):
        o, d = divmod(i, 5)
        f = 392 * 2 ** ((o * 12 + sc[d]) / 12)
        parts.append((i * 0.045, gayageum(f, 0.8, 0.8, bright=1.2), 0.6))
    parts.append((0.36, metal(1.4, 1760, ratios=(1, 2.76, 5.4), tau=0.6), 0.2))
    parts.append((0.36, metal(1.4, 2637, ratios=(1, 2.76), tau=0.5), 0.12))
    return room(mix(*parts), 1.4, 0.3)


def s_howl(v):
    d = 0.9
    n = N(d)
    t = np.arange(n) / SR
    f = 520 + 600 * np.sin(np.pi * np.minimum(1, t / 0.6)) ** 0.7 - 200 * np.maximum(0, t - 0.6) / 0.3
    f *= 1 + 0.02 * np.sin(2 * np.pi * 7 * t)
    ph = phase_of(f)
    x = formant_reed(800, n, ph, [(1100, 300, 1.0), (2600, 500, 0.5)], 12)
    return room(lowpass(x * env_bell(n, 0.35), 5000), 1.0, 0.3)


def s_wail(v):
    d = 1.4
    n = N(d)
    t = np.arange(n) / SR
    f = 620 - 220 * (t / d) ** 1.4
    a = np.sin(phase_of(f * (1 + 0.012 * np.sin(2 * np.pi * 5 * t)))) + 0.7 * np.sin(phase_of(f * 1.021))
    breath = bandpass(noise(n), 700, 3) * 0.3
    return room((a * 0.5 + breath) * env_bell(n, 0.3), 2.0, 0.45)


def s_bell(v):
    parts = []
    for k in range(6):
        for b in (2600, 3300):
            parts.append((k * 0.07 + R.uniform(0, 0.02), metal(0.45, b * R.uniform(0.97, 1.03), ratios=(1, 1.7, 2.6), tau=0.12), 0.25 * (1 - k * 0.1)))
    return room(mix(*parts), 0.9, 0.25)


def s_bigbell(v):
    return room(beomjong(1.0, 6.0), 2.5, 0.3)


def s_portal(v):
    d = 1.1
    return mix((0, sweep_noise(d, 300, 3500, 2) * env_bell(N(d), 0.6), 0.6), (0.2, sine_sweep(0.9, 300, 1300) * env_bell(N(0.9), 0.5), 0.15))


def s_denied(v):
    return mix((0, moktak(0.5) * 0.6, 1.0), (0.09, moktak(0.4) * 0.5, 0.8))[:N(0.3)]


def s_skill(v):
    d = 0.55
    return room(mix((0, sweep_noise(d, 300, 5000, 1.6) * env_bell(N(d), 0.4), 0.9), (0.02, thump(0.4, 130, 45, 0.1), 0.9),
                    (0.05, metal(0.6, 1320, ratios=(1, 2, 3.01), tau=0.25), 0.12)), 0.8, 0.2)


def s_skillhit(v):
    return mix((0, metal(0.3, 1900 + 300 * v, tau=0.08), 0.35), (0, highpass(noise(N(0.05)), 3500) * exp_env(N(0.05), 0.012), 0.8), (0, thump(0.15, 200, 80, 0.04), 0.6))


def s_burst(v):
    d = 0.6
    return mix((0, lowpass(noise(N(d)), 3000) * exp_env(N(d), 0.12), 0.8), (0, metal(0.6, 1760, ratios=(1, 2.4), tau=0.15), 0.12), (0, thump(0.3, 140, 60, 0.08), 0.6))


def s_impact(v):
    return mix((0, thump(0.45, 110, 38, 0.12), 1.2), (0, lowpass(noise(N(0.25)), 1100) * exp_env(N(0.25), 0.05), 0.8))


def s_dash(v):
    d = 0.28
    return sweep_noise(d, 2400, 500, 1.5) * env_bell(N(d), 0.25) + lowpass(noise(N(d)), 600) * env_bell(N(d), 0.3) * 0.4


def s_wave(v):
    # 나발: 놋쇠 긴 나팔 '뿌우~'
    d = 1.6
    n = N(d)
    f = 233 * (1 + 0.03 * (1 - np.exp(-np.arange(n) / SR / 0.15)))
    x = formant_reed(233, n, phase_of(f), [(700, 250, 1.0), (1400, 400, 0.6)], 24)
    x = np.tanh(x * 1.5) * adsr(n, 0.12, 0.2, 0.85, 0.35)
    return room(lowpass(x, 4000), 1.8, 0.35)


def s_hurt(v):
    return mix((0, thump(0.3, 120, 45, 0.08), 1.2), (0, bandpass(noise(N(0.12)), 900, 1.2) * exp_env(N(0.12), 0.03), 1.0))


def s_poof(v):
    d = 0.5
    return lowpass(noise(N(d)), 1600) * env_bell(N(d), 0.08) + sine_sweep(d, 400, 1200) * env_bell(N(d), 0.1) * 0.08


def s_spawn(v):
    d = 0.7
    return mix((0, sine_sweep(d, 220, 660) * env_bell(N(d), 0.5) * 0.25, 1.0), (0.1, lowpass(noise(N(0.5)), 1400) * env_bell(N(0.5), 0.2), 0.6))


def s_laugh(v):
    # 도깨비 '히히히': 성대 펄스 + '이' 포먼트
    parts = []
    for i in range(3):
        d = 0.1
        n = N(d)
        f0 = 300 - i * 18
        t = np.arange(n) / SR
        x = formant_reed(f0, n, phase_of(f0 * (1 - 0.15 * t / d) * np.ones(n)), [(320, 90, 1.0), (2300, 250, 0.7), (3000, 300, 0.3)], 30)
        parts.append((i * 0.12, x * env_bell(n, 0.2), 0.8))
    return room(mix(*parts), 0.8, 0.2)


def s_slam(v):
    n = N(1.2)
    rattle = np.zeros(n)
    for _ in range(30):
        i = R.integers(N(0.05), N(0.6))
        m = 200
        rattle[i:i + m] += bandpass(noise(m), R.uniform(800, 2500), 3) * np.linspace(1, 0, m) * R.uniform(0.2, 1)
    return room(mix((0, thump(1.0, 75, 26, 0.3), 1.6), (0, lowpass(noise(n), 500) * exp_env(n, 0.2), 1.0), (0, rattle, 0.5)), 1.4, 0.2)


def s_orb(v):
    return mix((0, sine_sweep(0.3, 1100, 380, 0.12), 0.5), (0, highpass(noise(N(0.25)), 3000) * exp_env(N(0.25), 0.05), 0.2))


def s_talk(v):
    sc = [0, 2, 5, 7, 9]
    f = 587 * 2 ** (sc[v % 5] / 12)
    return gayageum(f, 0.25, 0.5, bright=1.1)[:N(0.35)]


def s_coin(v):
    return mix((0, metal(0.4, 2093, ratios=(1, 2.76), tau=0.12), 0.35), (0.07, metal(0.5, 2637, ratios=(1, 2.76), tau=0.15), 0.35))


def s_victory(v):
    sc = [0, 2, 5, 7, 9, 12]
    parts = [(0, jing(0.9, 3.0), 0.8)]
    for i, d in enumerate([0, 2, 4, 5, 4, 5]):
        f = 392 * 2 ** (sc[d] / 12)
        parts.append((0.25 + i * 0.12, gayageum(f, 0.9, 0.85, bright=1.1), 0.6))
    for i in range(6):
        parts.append((0.25 + i * 0.12, kkwaenggwari(0.5 + 0.08 * i, damped=i < 5), 0.5))
    return room(mix(*parts), 1.6, 0.3)


def s_gong(v):
    # 용왕 제단의 큰 징: 낮고 길게 '징~' 우는 소리
    return room(mix((0, jing(1.0, 5.5), 1.2), (0, thump(0.6, 90, 60, 0.2), 0.4)), 2.2, 0.35)


def s_block(v):
    return mix((0, kkwaenggwari(0.9, damped=True), 1.4), (0, metal(0.35, 2400, tau=0.1), 0.2))


SFX = {
    'swing': (s_swing, 3, -15), 'swing3': (s_swing3, 2, -14), 'hit': (s_hit, 3, -13), 'crit': (s_crit, 2, -11),
    'drum': (s_drum, 1, -12), 'draw': (s_draw, 1, -18), 'sheathe': (s_sheathe, 1, -18), 'bowdraw': (s_bowdraw, 1, -22),
    'bow': (s_bow, 2, -16), 'bowskill': (s_bowskill, 1, -14), 'arrowhit': (s_arrowhit, 2, -16), 'cast': (s_cast, 2, -17),
    'fire': (s_fire, 1, -13), 'chant': (s_chant, 1, -20), 'charge': (s_charge, 1, -19), 'thunder': (s_thunder, 1, -11),
    'blink': (s_blink, 1, -17), 'freeze': (s_freeze, 1, -14), 'tornado': (s_tornado, 1, -15), 'levelup': (s_levelup, 1, -15),
    'howl': (s_howl, 1, -17), 'wail': (s_wail, 1, -17), 'bell': (s_bell, 1, -16), 'bigbell': (s_bigbell, 1, -13),
    'portal': (s_portal, 1, -18), 'denied': (s_denied, 1, -22), 'skill': (s_skill, 1, -13), 'skillhit': (s_skillhit, 2, -16),
    'burst': (s_burst, 1, -15), 'impact': (s_impact, 1, -13), 'dash': (s_dash, 2, -18), 'wave': (s_wave, 1, -14),
    'hurt': (s_hurt, 2, -13), 'poof': (s_poof, 1, -18), 'spawn': (s_spawn, 1, -20), 'laugh': (s_laugh, 1, -18),
    'slam': (s_slam, 1, -11), 'orb': (s_orb, 2, -20), 'talk': (s_talk, 5, -26), 'coin': (s_coin, 1, -20),
    'victory': (s_victory, 1, -14), 'block': (s_block, 1, -15), 'gong': (s_gong, 1, -13),
}


def write(name, x):
    path = os.path.join(TMP, name + '.wav')
    pcm = (np.clip(x, -1, 1) * 32767).astype('<i2')
    with wave.open(path, 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', path, '-c:a', 'libvorbis', '-q:a', '3', os.path.join(OUT, name + '.ogg')], check=True)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', path, '-c:a', 'libmp3lame', '-b:a', '80k', os.path.join(OUT, name + '.mp3')], check=True)


if __name__ == '__main__':
    man = {}
    for name, (fn, count, level) in SFX.items():
        for v in range(count):
            x = fn(v).astype(np.float64)
            x = highpass(x, 30)
            x = trim(x)
            x = fade(x)
            # 소리가 실제로 나는 부분의 세기로 맞춤 (짧은 소리도 같은 기준)
            act = x[np.abs(x) > np.abs(x).max() * 0.05]
            g = 10 ** ((level - rms_db(act)) / 20)
            x = x * g
            if np.abs(x).max() > 0.95:
                x *= 0.95 / np.abs(x).max()
            write(f'{name}_{v}', x)
        man[name] = count
        print(name, count, 'peak', round(float(np.abs(x).max()), 2), 'dur', round(len(x) / SR, 2))
    json.dump(man, open(os.path.join(OUT, 'manifest.json'), 'w'), indent=0)
