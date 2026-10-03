# 배경음악 7곡 + 지역 환경음 4개 렌더 → dot3d/audio/music/*.ogg|mp3
#  python3 tracks.py            모두
#  python3 tracks.py palace     한 곡만
import json
import os
import subprocess
import sys
import numpy as np
from synth import *
from compose import *

OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'audio', 'music')
TMP = os.environ.get('AUDIO_TMP', '/tmp/dot3d-audio')
os.makedirs(OUT, exist_ok=True)
os.makedirs(TMP, exist_ok=True)

LONG_ONLY = {12: [[(0, 6), (6, 6)], [(0, 9), (9, 3)], [(0, 4), (4, 8)], [(0, 3), (3, 3), (6, 6)]]}


def title():
    """달빛 아래 궁궐: 느린 굿거리, 대금이 이끌고 가야금이 따라감. 징으로 문을 엶"""
    sub, subs, cyc = 60 / 54 / 3, 12, 8
    T = Track('title', sub * subs * cyc, 11)
    tonic, sc = 196.0, PYEONG
    tune = make_tune(T.rng, subs, cyc, [3, 0, 3, 0, 7, 5, 3, 0], -2, 8)
    T.add(jing(0.7), 0, 0.0, 0.8, 0.5)
    lead(T, tune, 0, sub, subs, I_daegeum, tonic, sc, 'pyeong', pan=0.18, gain=1.1, send=0.5, octave=2, vel=0.75)
    gayageum_hetero(T, tune, 0, sub, subs, tonic, sc, 'pyeong', gain=0.85, pan=-0.35, busy=0.7)
    bass_part(T, tune, 0, sub, subs, tonic, sc, gain=0.8)
    janggu_part(T, 'gutgeori', 0, sub, cyc, gain=0.45, sparse=True)
    for c in (2, 6):
        T.add(pungyeong(0.6), (c * subs + 7) * sub, 0.6, 0.6, 0.6)
    return T, make_ir(3.0, 1.1, 5500, 1500, seed=3), 0.8


def palace():
    """궁궐 낮: 굿거리. 첫 번째는 대금, 두 번째는 해금이 같은 가락을 이어받음"""
    sub, subs, cyc = 60 / 66 / 3, 12, 8
    T = Track('palace', sub * subs * cyc * 2, 21)
    tonic, sc = 196.0, PYEONG
    tune = make_tune(T.rng, subs, cyc, [3, 0, 3, 0, 7, 5, 3, 0], -2, 8)
    P = sub * subs * cyc
    lead(T, tune, 0, sub, subs, I_daegeum, tonic, sc, 'pyeong', pan=0.2, gain=1.05, octave=2)
    lead(T, tune, P, sub, subs, I_haegeum, tonic, sc, 'pyeong', pan=0.25, gain=1.0, octave=2)
    lead(T, tune, P, sub, subs, I_daegeum, tonic, sc, 'pyeong', pan=-0.1, gain=0.45, octave=1, vel=0.55)
    for k in (0, 1):
        gayageum_hetero(T, tune, k * P, sub, subs, tonic, sc, 'pyeong', gain=0.9, busy=0.7 + 0.3 * k)
        bass_part(T, tune, k * P, sub, subs, tonic, sc, gain=0.75)
    janggu_part(T, 'gutgeori', 0, sub, cyc * 2, gain=0.7)
    return T, make_ir(2.4, 0.9, 6500, 1800, seed=5), 0.65


def night():
    """궁궐 밤: 중모리, 계면조. 해금이 흐느끼고 아쟁이 낮게 깔림"""
    sub, subs, cyc = 0.5, 12, 8
    T = Track('night', sub * subs * cyc, 31)
    tonic, sc = 146.83, GYEMYEON
    tune = make_tune(T.rng, subs, cyc, [3, 0, 3, 0, 7, 5, 3, 0], -1, 8)
    lead(T, tune, 0, sub, subs, I_haegeum, tonic, sc, 'gyemyeon', pan=0.2, gain=1.0, send=0.55, octave=2, vel=0.75)
    gayageum_hetero(T, tune, 0, sub, subs, tonic, sc, 'gyemyeon', gain=0.8, busy=0.6)
    for c in range(cyc):
        root = 0 if c % 4 != 2 else 3
        T.add(ajaeng(freq(tonic / 2, sc, root), subs * sub * 0.95, 0.55), c * subs * sub, -0.25, 0.8, 0.5)
    janggu_part(T, 'jungmori', 0, sub, cyc, gain=0.5, sparse=True)
    return T, make_ir(3.4, 1.3, 4800, 1200, seed=7), 0.85


def bamboo():
    """죽림: 세마치, 단소가 맑게 노래하고 두 번째엔 대금이 받음"""
    sub, subs = 0.6 / 3, 9
    cyc = 16
    T = Track('bamboo', sub * subs * cyc * 2, 41)
    tonic, sc = 220.0, PYEONG
    tune = make_tune(T.rng, subs, cyc, [3, 0, 3, 0, 7, 5, 3, 0], -1, 8)
    P = sub * subs * cyc
    lead(T, tune, 0, sub, subs, I_danso, tonic, sc, 'pyeong', pan=0.2, gain=1.0, octave=2, vel=0.7)
    lead(T, tune, P, sub, subs, I_daegeum, tonic, sc, 'pyeong', pan=0.2, gain=1.0, octave=2, vel=0.75)
    for k in (0, 1):
        gayageum_hetero(T, tune, k * P, sub, subs, tonic, sc, 'pyeong', gain=0.85, busy=0.8)
        bass_part(T, tune, k * P, sub, subs, tonic, sc, gain=0.6, every=2)
    janggu_part(T, 'semachi', 0, sub, cyc * 2, gain=0.6)
    return T, make_ir(1.7, 0.6, 7500, 2500, seed=9), 0.55


def temple():
    """폐사찰: 장단 없이 느리게. 범종·목탁·풍경, 아쟁 지속음 위로 대금이 띄엄띄엄"""
    sub, subs, cyc = 0.55, 12, 8
    T = Track('temple', sub * subs * cyc, 51)
    tonic, sc = 164.81, GYEMYEON
    saved = RHYTHMS[12]
    RHYTHMS[12] = LONG_ONLY[12]
    tune = make_tune(T.rng, subs, cyc, [3, 0, 2, 0, 5, 3, 2, 0], -1, 6)
    RHYTHMS[12] = saved
    T.add(beomjong(0.9), 0.0, 0.0, 1.0, 0.6)
    T.add(beomjong(0.7), 4 * subs * sub, 0.0, 0.8, 0.6)
    lead(T, tune, 0, sub, subs, I_daegeum, tonic, sc, 'gyemyeon', pan=0.15, gain=0.85, send=0.65, octave=2, vel=0.6)
    for c in range(cyc):
        T.add(ajaeng(freq(tonic / 2, sc, 0 if c % 2 == 0 else 3), subs * sub * 1.02, 0.5), c * subs * sub, -0.2, 0.75, 0.55)
        # 목탁: 똑… 똑… 네 장단마다 점점 빨라지는 '또르르'
        for s in (0, 6):
            T.add(moktak(0.6), (c * subs + s) * sub, 0.3, 0.7, 0.35)
        if c % 4 == 3:
            for i, dt in enumerate([0, 0.42, 0.78, 1.06, 1.28, 1.44, 1.56, 1.65]):
                T.add(moktak(0.35 + 0.05 * i), (c * subs + 8) * sub + dt, 0.3, 0.6, 0.35)
    for at in (3.1, 13.7, 22.4, 31.9, 44.0):
        T.add(pungyeong(0.5), at, -0.6 + 1.2 * T.rng.random(), 0.55, 0.7)
    return T, make_ir(4.6, 1.8, 4500, 1000, seed=11), 0.95


def battle():
    """전투: 자진모리. 가야금 잔가락이 몰아치고 해금→피리가 앞장섬, 북·꽹과리·징"""
    sub, subs = 0.4 / 3, 12
    cyc = 16
    T = Track('battle', sub * subs * cyc * 2, 61)
    tonic, sc = 146.83, GYEMYEON
    tune = make_tune(T.rng, subs, cyc, [3, 0, 3, 0, 7, 5, 3, 0], -1, 8, cadence_last=False)
    P = sub * subs * cyc
    lead(T, tune, 0, sub, subs, I_haegeum, tonic, sc, 'gyemyeon', pan=0.22, gain=1.0, send=0.3, octave=2, vel=0.85)
    lead(T, tune, P, sub, subs, I_piri, tonic, sc, 'gyemyeon', pan=0.22, gain=1.0, send=0.3, octave=2, vel=0.85)
    lead(T, tune, P, sub, subs, I_haegeum, tonic, sc, 'gyemyeon', pan=-0.3, gain=0.5, send=0.3, octave=1, vel=0.7)
    riffs = [[(0, 0), (2, 3), (3, 2), (5, 0), (6, 1), (8, 2), (9, 3), (11, 2)],
             [(0, 0), (1, 2), (3, 3), (5, 2), (6, 0), (7, 1), (9, 2), (10, 0)]]
    for c in range(cyc * 2):
        shift = 3 if (c % 8) in (4, 5) else 0
        for (s, d) in riffs[c % 2]:
            T.add(gayageum(freq(tonic, sc, d + shift), sub * 1.6, 0.8, bright=1.15), (c * subs + s) * sub, -0.35, 0.8, 0.25)
        T.add(geomungo(freq(tonic / 2, sc, shift), subs * sub * 0.6, 0.85), c * subs * sub, -0.05, 0.85, 0.25)
        for s in (0, 6):
            T.add(buk(0.9 if s == 0 else 0.7), (c * subs + s) * sub, 0.0, 0.65, 0.25)
        for s in (3, 9):
            T.add(bukrim(0.6), (c * subs + s) * sub, 0.05, 0.7, 0.2)
        if c >= cyc:  # 두 번째 바퀴는 꽹과리가 몰아침
            for s in range(0, 12, 3):
                T.add(kkwaenggwari(0.8 if s == 0 else 0.55, damped=s not in (0, 6)), (c * subs + s) * sub, 0.4, 0.75, 0.25)
        if c % 8 == 0:
            T.add(jing(0.75, 4.0), c * subs * sub, 0.0, 0.85, 0.4)
    janggu_part(T, 'jajinmori', 0, sub, cyc * 2, gain=0.75)
    return T, make_ir(1.8, 0.65, 7000, 2200, seed=13), 0.55


def boss():
    """보스: 휘모리. 태평소가 찢어지게 울고 사물(꽹과리·장구·북·징)이 몰아침"""
    sub, subs = 0.15, 8
    T = Track('boss', sub * subs * 40, 71)
    tonic, sc = 164.81, GYEMYEON
    tune = make_tune(T.rng, subs, 16, [3, 0, 3, 0, 7, 5, 3, 0], 0, 9, cadence_last=False)
    for start in (8, 24):
        lead(T, tune, start * subs * sub, sub, subs, I_taep, tonic, sc, 'gyemyeon', pan=0.15, gain=1.05, send=0.3, octave=2, vel=0.9)
    lead(T, tune, 24 * subs * sub, sub, subs, I_haegeum, tonic, sc, 'gyemyeon', pan=-0.3, gain=0.55, send=0.3, octave=1, vel=0.8)
    riff = [0, 0, 3, 0, 2, 0, 3, 4]
    kk = ['o', 'd', 'd', 'o', 'd', 'o', 'o', 'd']  # 갠 지 지 갠 지 갠 갠 지
    for c in range(40):
        shift = 2 if (c // 4) % 4 == 2 else 0
        for s in range(8):
            if s % 2 == 0 or c >= 8:
                T.add(gayageum(freq(tonic / 2, sc, riff[s] + shift), sub * 1.3, 0.75 if s % 2 == 0 else 0.55, bright=1.2), (c * subs + s) * sub, -0.35, 0.75, 0.2)
            T.add(kkwaenggwari(0.85 if kk[s] == 'o' else 0.5, damped=kk[s] == 'd'), (c * subs + s) * sub, 0.4, 0.7 if c >= 4 else 0.45, 0.2)
        for s in (0, 2, 4, 6):
            T.add(buk(1.0 if s == 0 else 0.75, low=s == 0 and c % 2 == 0), (c * subs + s) * sub, 0.0, 0.6, 0.2)
        if c % 2 == 0:
            T.add(jing(0.8, 3.0), c * subs * sub, 0.0, 0.8, 0.35)
        if c in (0, 8, 24):
            T.add(bara(0.9), c * subs * sub, 0.0, 0.8, 0.3)
    janggu_part(T, 'hwimori', 0, sub, 40, gain=0.8)
    return T, make_ir(2.0, 0.8, 7000, 2000, seed=17), 0.5


def swamp():
    """물안개 늪: 느린 중모리, 계면조. 낮은 대금과 아쟁 위로 물방울 같은 가야금, 멀리서 징"""
    sub, subs, cyc = 0.55, 12, 8
    T = Track('swamp', sub * subs * cyc, 81)
    tonic, sc = 130.81, GYEMYEON
    tune = make_tune(T.rng, subs, cyc, [3, 0, 2, 0, 5, 3, 2, 0], -1, 7)
    lead(T, tune, 0, sub, subs, I_daegeum, tonic, sc, 'gyemyeon', pan=0.15, gain=0.95, send=0.55, octave=2, vel=0.65)
    for c in range(cyc):
        T.add(ajaeng(freq(tonic / 2, sc, 0 if c % 4 != 2 else 3), subs * sub * 1.02, 0.5), c * subs * sub, -0.25, 0.8, 0.5)
        T.add(geomungo(freq(tonic / 2, sc, 0), 3.0, 0.75), c * subs * sub, -0.05, 0.8, 0.35)
        # 물방울: 높은 가야금 음이 띄엄띄엄 떨어짐
        for k in range(3):
            s0 = int(T.rng.integers(0, subs))
            d = int(T.rng.choice([5, 6, 7, 8]))
            T.add(gayageum(freq(tonic * 2, sc, d), 0.8, 0.45, bright=1.2), (c * subs + s0) * sub + T.rng.random() * 0.2, 0.5 - T.rng.random(), 0.55, 0.6)
    T.add(jing(0.5, 5.0), 0.0, 0.0, 0.55, 0.7)
    T.add(jing(0.4, 5.0), 4 * subs * sub, 0.0, 0.45, 0.7)
    janggu_part(T, 'jungmori', 0, sub, cyc, gain=0.4, sparse=True)
    return T, make_ir(3.8, 1.4, 4600, 1100, seed=19), 0.9


def anvil(vel=0.8):
    """모루: 망치로 쇠를 두드리는 '땡'"""
    n = int(1.2 * SR)
    t = np.arange(n) / SR
    out = np.zeros(n)
    for m, a, tau in ((1.0, 1.0, 0.35), (2.71, 0.6, 0.22), (4.1, 0.4, 0.15), (5.9, 0.25, 0.09)):
        out += a * np.sin(2 * np.pi * 980 * m * t) * exp_env(n, tau)
    out[:200] += highpass(noise(200), 2500)
    return out * 0.14 * vel


def canyon():
    """불가사리 협곡: 자진모리, 계면조. 피리가 앞장서고 모루 소리가 장단을 두드림"""
    sub, subs = 0.5 / 3, 12
    cyc = 12
    T = Track('canyon', sub * subs * cyc * 2, 91)
    tonic, sc = 146.83, GYEMYEON
    tune = make_tune(T.rng, subs, cyc, [3, 0, 3, 0, 7, 5, 3, 0], -1, 8)
    P = sub * subs * cyc
    lead(T, tune, 0, sub, subs, I_piri, tonic, sc, 'gyemyeon', pan=0.2, gain=0.9, send=0.35, octave=2, vel=0.8)
    lead(T, tune, P, sub, subs, I_haegeum, tonic, sc, 'gyemyeon', pan=0.2, gain=0.95, send=0.35, octave=2, vel=0.8)
    lead(T, tune, P, sub, subs, I_piri, tonic, sc, 'gyemyeon', pan=-0.25, gain=0.5, send=0.35, octave=1, vel=0.7)
    for c in range(cyc * 2):
        T.add(geomungo(freq(tonic / 2, sc, 0 if c % 4 < 2 else 3), subs * sub * 0.7, 0.85), c * subs * sub, -0.1, 0.85, 0.3)
        for s0, v in ((0, 0.9), (6, 0.7)):
            T.add(buk(v, low=s0 == 0), (c * subs + s0) * sub, 0.0, 0.6, 0.25)
        # 모루: 땡— 땡 땡
        for s0, v in ((3, 0.8), (9, 0.6), (10, 0.5)):
            if c % 2 or s0 == 3:
                T.add(anvil(v), (c * subs + s0) * sub, 0.45, 0.8, 0.3)
        if c % 8 == 0:
            T.add(jing(0.7, 4.0), c * subs * sub, 0.0, 0.7, 0.4)
    gayageum_hetero(T, tune, 0, sub, subs, tonic, sc, 'gyemyeon', gain=0.7, busy=0.6)
    janggu_part(T, 'jajinmori', 0, sub, cyc * 2, gain=0.6)
    return T, make_ir(2.4, 0.9, 6000, 1600, seed=23), 0.6


# ---------- 환경음 (지역 분위기) ----------

def amb(name, L=32.0, seed=1):
    r = np.random.default_rng(seed)
    n = int(L * SR)
    t = np.arange(n) / SR
    out = np.zeros((n, 2))

    def wind(level, lo, hi, speed):
        for c in range(2):
            x = noise(n)
            x = lowpass(highpass(x, lo), hi)
            # 고리 모양으로 이어지는 바람 세기 (루프 끝과 처음이 맞도록 sin 합)
            g = 0.6 + 0.4 * (0.6 * np.sin(2 * np.pi * t / L * 2 + c + r.random()) + 0.4 * np.sin(2 * np.pi * t / L * 5 + r.random() * 6))
            out[:, c] += x * g * level * speed

    def drop(x, at, pan, gain):
        st = pan_st(x * gain, pan)
        i = int(at * SR) % n
        e = min(n, i + len(st))
        out[i:e] += st[:e - i]
        if i + len(st) > n:  # 루프 넘어가면 앞으로
            out[:i + len(st) - n] += st[n - i:]

    if name == 'amb_day':
        wind(0.05, 150, 1200, 1.0)
        # 참새·까치 지저귐
        for k in range(26):
            at = r.random() * L
            base = r.uniform(2800, 4800)
            m = int(r.integers(2, 6))
            for j in range(m):
                d = r.uniform(0.04, 0.09)
                tt = np.arange(int(d * SR)) / SR
                fc = base * (1 + 0.25 * np.sin(np.pi * tt / d)) * (1 + r.uniform(-0.05, 0.05))
                ch = np.sin(phase_of(fc)) * np.hanning(len(tt))
                drop(ch, at + j * r.uniform(0.08, 0.14), r.uniform(-0.8, 0.8), r.uniform(0.02, 0.05))
    elif name == 'amb_night':
        wind(0.035, 100, 700, 1.0)
        # 귀뚜라미: 4.6kHz 짧은 떨림 묶음
        for c, (f, rate) in enumerate([(4600, 0.9), (4200, 1.15), (5100, 0.7)]):
            k = 0.0
            while k < L:
                d = 0.16
                tt = np.arange(int(d * SR)) / SR
                ch = np.sin(2 * np.pi * f * tt) * (0.5 + 0.5 * np.sign(np.sin(2 * np.pi * 38 * tt))) * np.hanning(len(tt))
                drop(ch, k, -0.7 + c * 0.7, 0.012)
                k += rate * r.uniform(0.85, 1.15)
        # 멀리서 소쩍새 '소쩍'
        for at in (7.0, 21.5):
            for j, f in enumerate((1250, 1080)):
                d = 0.22
                tt = np.arange(int(d * SR)) / SR
                ch = np.sin(2 * np.pi * f * (1 - 0.04 * tt / d) * tt) * np.hanning(len(tt))
                drop(lowpass(ch, 2500), at + j * 0.35, 0.5, 0.03)
    elif name == 'amb_bamboo':
        wind(0.07, 300, 4000, 1.0)
        # 댓잎 서걱임
        for k in range(60):
            at = r.random() * L
            d = r.uniform(0.3, 1.0)
            x = bandpass(noise(int(d * SR)), r.uniform(3000, 6000), 0.8) * np.hanning(int(d * SR))
            drop(x, at, r.uniform(-0.9, 0.9), 0.015)
        # 대나무끼리 부딪는 '똑'
        for k in range(8):
            at = r.random() * L
            m = int(0.15 * SR)
            tt = np.arange(m) / SR
            x = np.sin(2 * np.pi * r.uniform(500, 900) * tt) * exp_env(m, 0.03)
            drop(x, at, r.uniform(-0.8, 0.8), 0.05)
    elif name == 'amb_swamp':
        wind(0.03, 80, 600, 1.0)
        # 개구리 '개굴개굴': 낮은 펄스 묶음
        for k in range(22):
            at = r.random() * L
            f = r.uniform(160, 320)
            reps = int(r.integers(2, 5))
            pan = r.uniform(-0.9, 0.9)
            for j in range(reps):
                d = 0.11
                tt = np.arange(int(d * SR)) / SR
                x = np.sign(np.sin(2 * np.pi * f * tt)) * (0.5 + 0.5 * np.sin(2 * np.pi * 28 * tt)) * np.hanning(len(tt))
                drop(lowpass(x, 1400), at + j * 0.16, pan, 0.03)
        # 물 찰랑임과 물방울
        for k in range(40):
            at = r.random() * L
            m = int(0.12 * SR)
            tt = np.arange(m) / SR
            x = np.sin(2 * np.pi * r.uniform(700, 1400) * (1 + 2 * tt) * tt) * exp_env(m, 0.03)
            drop(x, at, r.uniform(-0.8, 0.8), 0.02)
        for c in range(2):
            out[:, c] += lowpass(noise(n), 300) * 0.02 * (0.7 + 0.3 * np.sin(2 * np.pi * t / L * 3 + c))
    elif name == 'amb_canyon':
        wind(0.04, 60, 400, 1.0)
        # 용암 끓는 소리: 낮은 부글거림 + 톡톡 터지는 기포
        for c in range(2):
            out[:, c] += lowpass(noise(n), 160) * 0.05 * (0.7 + 0.3 * np.sin(2 * np.pi * t / L * 4 + c * 2))
        for k in range(70):
            at = r.random() * L
            m = int(0.06 * SR)
            tt = np.arange(m) / SR
            x = np.sin(2 * np.pi * r.uniform(150, 420) * (1 + 3 * tt) * tt) * exp_env(m, 0.015)
            drop(x, at, r.uniform(-0.8, 0.8), 0.04)
        # 먼 땅울림
        for at in (5.0, 19.0):
            m = int(2.5 * SR)
            drop(lowpass(noise(m), 90) * np.hanning(m), at, 0.0, 0.25)
    elif name == 'amb_temple':
        wind(0.06, 80, 900, 1.0)
        for at in (4.0, 15.0, 26.0):
            drop(pungyeong(0.5), at, r.uniform(-0.6, 0.6), 0.5)
        # 까마귀
        for at in (11.0,):
            for j in range(2):
                d = 0.25
                tt = np.arange(int(d * SR)) / SR
                x = np.tanh(3 * np.sin(phase_of(620 * (1 - 0.2 * tt / d)))) * np.hanning(len(tt))
                drop(lowpass(x, 2200), at + j * 0.4, -0.5, 0.025)
    # 이음매 부드럽게: 끝 0.5초와 처음 0.5초를 겹쳐 섞음
    f = int(0.5 * SR)
    w = np.linspace(0, 1, f)[:, None]
    head = out[:f].copy()
    out[:f] = head * w + out[-f:] * (1 - w)
    out = out[:-f]
    g = 10 ** ((-30 - rms_db(out)) / 20)
    return out * g


# ---------- 저장 ----------

def write(name, data, kbps_ogg_q=3, mp3='112k'):
    import wave
    wav = os.path.join(TMP, name + '.wav')
    pcm = (np.clip(data, -1, 1) * 32767).astype('<i2')
    with wave.open(wav, 'wb') as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-c:a', 'libvorbis', '-q:a', str(kbps_ogg_q), os.path.join(OUT, name + '.ogg')], check=True)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-c:a', 'libmp3lame', '-b:a', mp3, os.path.join(OUT, name + '.mp3')], check=True)
    return {'samples': len(data), 'rate': SR, 'dur': round(len(data) / SR, 4)}


TRACKS = {'title': title, 'palace': palace, 'night': night, 'bamboo': bamboo, 'temple': temple, 'swamp': swamp, 'canyon': canyon, 'battle': battle, 'boss': boss}
AMBS = ['amb_day', 'amb_night', 'amb_bamboo', 'amb_temple', 'amb_swamp', 'amb_canyon']

if __name__ == '__main__':
    want = sys.argv[1:]
    man_path = os.path.join(OUT, 'manifest.json')
    man = json.load(open(man_path)) if os.path.exists(man_path) else {}
    for name, fn in TRACKS.items():
        if want and name not in want:
            continue
        T, ir, wet = fn()
        data = T.render(ir, wet)
        man[name] = write(name, data)
        print(name, man[name], 'peak', round(float(np.abs(data).max()), 3), 'rms', round(rms_db(data), 1))
    for i, name in enumerate(AMBS):
        if want and name not in want:
            continue
        data = amb(name, seed=i + 3)
        man[name] = write(name, data, 1, '64k')
        print(name, man[name])
    json.dump(man, open(man_path, 'w'), indent=1)
