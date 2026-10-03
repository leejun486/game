# 국악기 음원 합성기 (오프라인 렌더용)
#  - 가야금·거문고: 부분음 가산 합성 + 농현(떨기)·꺾기 + 뜯는 소리
#  - 대금·단소: 숨소리 + 청 울림 + 늦게 시작하는 깊은 농음
#  - 해금·아쟁: 활 긋는 비음(포먼트 필터)
#  - 피리·태평소: 날카로운 겹서 비음
#  - 장구·북·꽹과리·징·목탁·풍경·범종: 막·금속 모드 합성
# 모든 함수는 float64 모노 배열(SR=44100)을 돌려줌
import numpy as np
from scipy import signal

SR = 44100
rng = np.random.default_rng(7)


def t_axis(dur):
    return np.arange(int(dur * SR)) / SR


def exp_env(n, tau):
    return np.exp(-np.arange(n) / (tau * SR))


def adsr(n, a, d, s, r):
    """선형 ADSR (초 단위). 길이 n 안에 release 포함"""
    a_n, d_n, r_n = int(a * SR), int(d * SR), int(r * SR)
    s_n = max(0, n - a_n - d_n - r_n)
    e = np.concatenate([
        np.linspace(0, 1, max(1, a_n), endpoint=False),
        np.linspace(1, s, max(1, d_n), endpoint=False),
        np.full(s_n, s),
        np.linspace(s, 0, max(1, r_n)),
    ])
    if len(e) < n:
        e = np.pad(e, (0, n - len(e)))
    return e[:n]


def noise(n):
    return rng.standard_normal(n)


def bandpass(x, f0, q=1.0):
    b, a = signal.iirpeak(min(f0, SR / 2 - 100) / (SR / 2), q)
    return signal.lfilter(b, a, x)


def lowpass(x, fc, order=2):
    sos = signal.butter(order, min(fc, SR / 2 - 100) / (SR / 2), 'low', output='sos')
    return signal.sosfilt(sos, x)


def highpass(x, fc, order=2):
    sos = signal.butter(order, fc / (SR / 2), 'high', output='sos')
    return signal.sosfilt(sos, x)


def peaking(x, f0, gain_db, q=1.0):
    A = 10 ** (gain_db / 40)
    w = 2 * np.pi * f0 / SR
    al = np.sin(w) / (2 * q)
    b = np.array([1 + al * A, -2 * np.cos(w), 1 - al * A])
    a = np.array([1 + al / A, -2 * np.cos(w), 1 - al / A])
    return signal.lfilter(b / a[0], a / a[0], x)


def pitch_curve(f, n, vib=None, bend=None, scoop=0.0, scoop_t=0.04):
    """순간 주파수 곡선
    vib = (시작초, 깊이(비율), 빠르기Hz, 차오르는 시간)
    bend = (시작초, 끝 주파수 비율, 걸리는 시간)  # 꺾는 소리·흘러내림
    scoop = 시작할 때 아래(음수)·위(양수)에서 미끄러져 들어오는 비율"""
    t = np.arange(n) / SR
    fr = np.ones(n)
    if scoop:
        fr *= 1 + scoop * np.exp(-t / scoop_t)
    if bend:
        b0, ratio, bt = bend
        k = np.clip((t - b0) / bt, 0, 1)
        k = k * k * (3 - 2 * k)
        fr *= 1 + (ratio - 1) * k
    if vib:
        v0, depth, rate, rise = vib
        amt = np.clip((t - v0) / max(rise, 1e-3), 0, 1) * depth
        # 국악 농현은 아래로 눌렀다 돌아오는 모양이 많음 → 위상 조정한 비대칭 파형
        ph = 2 * np.pi * rate * np.maximum(0, t - v0)
        fr *= 1 + amt * (np.sin(ph) - 0.35 * np.sin(2 * ph)) * 0.8
    return f * fr


def phase_of(freq_curve):
    return 2 * np.pi * np.cumsum(freq_curve) / SR


# ---------------- 현악기 ----------------

def gayageum(f, dur=1.6, vel=0.8, vib=None, bend=None, bright=1.0):
    """가야금: 명주실 현을 손가락으로 퉁김. 부드럽고 둥근 소리, 높은 부분음은 빨리 사라짐"""
    n = int((dur + 0.6) * SR)
    fc = pitch_curve(f, n, vib=vib, bend=bend, scoop=0.006, scoop_t=0.02)
    ph = phase_of(fc)
    out = np.zeros(n)
    tau0 = 1.5 * (196 / f) ** 0.35 * (0.8 + 0.4 * vel)
    pos = 0.19 + 0.04 * rng.random()  # 퉁기는 위치
    B = 0.00008
    for k in range(1, 16):
        stretch = np.sqrt(1 + B * k * k)
        if f * k * stretch > 9000:
            break
        amp = abs(np.sin(np.pi * k * pos)) / k ** (1.05 - 0.25 * (bright - 1)) * (0.6 + 0.4 * vel)
        tau = tau0 / (1 + 0.55 * (k - 1) ** 1.1)
        out += amp * np.sin(k * stretch * ph + rng.random() * 0.3) * exp_env(n, tau)
    # 손가락이 현을 스치는 소리
    tn = int(0.018 * SR)
    pick = bandpass(noise(tn), 2400 + 600 * rng.random(), 1.2) * np.linspace(1, 0, tn) ** 2
    out[:tn] += pick * 0.18 * vel
    out = peaking(out, 280, 3, 1.2)  # 오동나무 울림통
    out = peaking(out, 950, 2, 1.5)
    out = lowpass(out, 5200 * bright)
    out *= np.minimum(1, np.arange(n) / (0.002 * SR))
    return out * 0.55 * vel


def geomungo(f, dur=1.8, vel=0.8, vib=None, bend=None):
    """거문고: 술대로 내리쳐 뜯는 굵은 소리 + 괘(棵)에 부딪는 '퉁' 하는 타음"""
    n = int((dur + 0.6) * SR)
    fc = pitch_curve(f, n, vib=vib, bend=bend, scoop=0.01, scoop_t=0.015)
    ph = phase_of(fc)
    out = np.zeros(n)
    tau0 = 1.3 * (98 / f) ** 0.25
    for k in range(1, 14):
        if f * k > 5000:
            break
        amp = abs(np.sin(np.pi * k * 0.12)) / k ** 0.9
        out += amp * np.sin(k * ph) * exp_env(n, tau0 / (1 + 0.7 * (k - 1)))
    tn = int(0.05 * SR)
    thump = lowpass(noise(tn), 700) * exp_env(tn, 0.01)
    click = highpass(noise(int(0.006 * SR)), 2500) * 0.5
    out[:tn] += thump * 0.6 * vel
    out[:len(click)] += click * vel
    out = peaking(out, 180, 4, 1.0)
    out = lowpass(out, 3800)
    return out * 0.6 * vel


# ---------------- 관악기 ----------------

def daegeum(f, dur=1.2, vel=0.8, vib=True, scoop=-0.03, bend=None, breath=1.0, tone=1.0):
    """대금: 바람 소리가 섞인 굵은 저음, 세게 불면 청(갈대막)이 '지잉' 하고 울림"""
    n = int((dur + 0.25) * SR)
    v = (min(0.45, dur * 0.35), 0.022 if vib else 0.0, 4.6 + 0.6 * rng.random(), min(0.6, dur * 0.4)) if vib else None
    fc = pitch_curve(f, n, vib=v, bend=bend, scoop=scoop, scoop_t=0.05)
    ph = phase_of(fc)
    env = adsr(n, min(0.12, dur * 0.3), 0.1, 0.85, 0.18)
    # 길게 끌면 점점 세지는 숨 (cresc)
    env *= 0.85 + 0.15 * np.minimum(1, np.arange(n) / (dur * SR + 1))
    amps = [1.0, 0.42, 0.22, 0.12, 0.07, 0.05]
    out = np.zeros(n)
    for k, a in enumerate(amps, 1):
        out += a * np.sin(k * ph + 0.3 * k)
    # 청 울림: 세기에 따라 높은 부분음이 지글거림
    buzz = np.zeros(n)
    for k in range(5, 16):
        if f * k > 8000:
            break
        buzz += np.sin(k * ph) / k ** 0.6
    out += buzz * 0.05 * (vel ** 2) * tone
    # 숨소리
    br = highpass(noise(n), 1400)
    br = bandpass(br, f * 3.2, 0.7) * 0.5 + br * 0.12
    out += br * 0.09 * breath * (env ** 0.5)
    out *= env
    # 입김 '후' 하는 시작음
    cn = int(0.07 * SR)
    out[:cn] += bandpass(noise(cn), f * 2, 2) * np.hanning(cn) * 0.12 * breath
    out = lowpass(out, 6500)
    return out * 0.42 * vel


def danso(f, dur=1.0, vel=0.7, vib=True):
    """단소: 대금보다 맑고 가는 고음, 청 없음"""
    return daegeum(f, dur, vel, vib=vib, scoop=-0.02, breath=0.7, tone=0.0) * 0.8


def formant_reed(f, n, ph, formants, nparts=40):
    out = np.zeros(n)
    for k in range(1, nparts):
        fk = f * k
        if fk > 11000:
            break
        g = 0.0
        for (ff, bw, gg) in formants:
            g += gg / (1 + ((fk - ff) / bw) ** 2)
        g += 0.25 / k
        out += g * np.sin(k * ph + 0.17 * k * k)
    return out


def haegeum(f, dur=1.2, vel=0.8, vib=True, scoop=-0.025, bend=None):
    """해금: 두 줄 사이를 말총 활로 그음. 코맹맹이 같은 비음, 손으로 눌러 음을 흔듦"""
    n = int((dur + 0.2) * SR)
    v = (0.12, 0.028, 5.2 + rng.random() * 0.8, 0.3) if vib else None
    fc = pitch_curve(f, n, vib=v, bend=bend, scoop=scoop, scoop_t=0.06)
    ph = phase_of(fc)
    out = formant_reed(f, n, ph, [(950, 260, 1.0), (2300, 500, 0.55), (3600, 700, 0.2)])
    env = adsr(n, 0.07, 0.08, 0.8, 0.12)
    bow = bandpass(noise(n), 3000, 0.8) * 0.06
    out = (out + bow) * env
    out = lowpass(out, 7000)
    return out * 0.13 * vel


def ajaeng(f, dur=2.5, vel=0.7, vib=True):
    """아쟁: 개나리 활대로 긁는 낮고 거친 소리 (어둡고 무거운 분위기)"""
    n = int((dur + 0.4) * SR)
    v = (0.3, 0.02, 4.2, 0.8) if vib else None
    fc = pitch_curve(f, n, vib=v, scoop=-0.02, scoop_t=0.1)
    ph = phase_of(fc)
    out = formant_reed(f, n, ph, [(420, 160, 1.0), (1150, 300, 0.5)], 30)
    rough = lowpass(noise(n), 2000) * 0.12
    env = adsr(n, 0.35, 0.2, 0.85, 0.4)
    out = (out + rough) * env
    out = lowpass(out, 3500)
    return out * 0.14 * vel


def piri(f, dur=1.0, vel=0.8, vib=True, bend=None, scoop=-0.04, taepyeongso=False):
    """피리 / 태평소(호적): 겹서로 부는 크고 날카로운 비음"""
    n = int((dur + 0.15) * SR)
    v = (0.15, 0.03 if taepyeongso else 0.025, 5.5, 0.25) if vib else None
    fc = pitch_curve(f, n, vib=v, bend=bend, scoop=scoop, scoop_t=0.04)
    ph = phase_of(fc)
    F = [(1300, 350, 1.0), (2700, 600, 0.8), (4200, 900, 0.35)] if taepyeongso else [(1100, 300, 1.0), (2400, 500, 0.5)]
    out = formant_reed(f, n, ph, F)
    out = np.tanh(out * (1.6 if taepyeongso else 1.2))
    env = adsr(n, 0.03, 0.06, 0.9, 0.08)
    out = out * env + highpass(noise(n), 3000) * 0.025 * env
    out = lowpass(out, 9000)
    return out * (0.17 if taepyeongso else 0.15) * vel


# ---------------- 타악기 ----------------

def membrane(f0, f1, tau, modes=((1, 1.0), (1.59, 0.45), (2.14, 0.25), (2.3, 0.18)), drop_t=0.08, dur=None):
    dur = dur or tau * 6
    n = int(dur * SR)
    t = np.arange(n) / SR
    fc = f1 + (f0 - f1) * np.exp(-t / drop_t)
    ph = phase_of(fc)
    out = np.zeros(n)
    for i, (m, a) in enumerate(modes):
        out += a * np.sin(m * ph) * exp_env(n, tau / (1 + i * 0.8))
    return out


def janggu(kind, vel=0.8):
    """장구: 쿵(왼손 궁편, 낮음) · 덕(오른손 열채, 채편의 날카로운 소리) · 덩(둘 다) · 기덕(꾸밈음+덕) · 더러러(굴림)"""
    def kung(v):
        x = membrane(115, 82, 0.22, drop_t=0.05, dur=0.9)
        tn = int(0.02 * SR)
        x[:tn] += highpass(lowpass(noise(tn), 500), 60) * np.linspace(1, 0, tn) * 0.5
        return x * 0.9 * v

    def deok(v):
        n = int(0.35 * SR)
        x = np.zeros(n)
        for f, a, tau in ((330, 1.0, 0.06), (520, 0.6, 0.04), (780, 0.4, 0.03), (1150, 0.25, 0.02)):
            x += a * np.sin(2 * np.pi * f * (1 + 0.04 * rng.random()) * np.arange(n) / SR) * exp_env(n, tau)
        cn = int(0.012 * SR)
        x[:cn] += highpass(noise(cn), 2200) * np.linspace(1, 0, cn) * 1.4
        return x * 0.55 * v

    def place(dst, src, at):
        i = int(at * SR)
        e = min(len(dst), i + len(src))
        dst[i:e] += src[:e - i]

    out = np.zeros(int(1.0 * SR))
    if kind == 'kung':
        place(out, kung(vel), 0)
    elif kind == 'deok':
        place(out, deok(vel), 0)
    elif kind == 'deong':
        place(out, kung(vel), 0)
        place(out, deok(vel * 0.9), 0.004)
    elif kind == 'gideok':
        place(out, deok(vel * 0.45), 0)
        place(out, deok(vel), 0.07)
    elif kind == 'roll':  # 더러러러
        for i in range(4):
            place(out, deok(vel * (0.5 + 0.12 * i)), i * 0.045)
    elif kind == 'tick':  # 채편 가볍게
        place(out, deok(vel * 0.35), 0)
    return out


def buk(vel=0.8, low=False):
    """소리북·모둠북: 낮고 둥근 울림 + 북채가 가죽 치는 소리"""
    x = membrane(95 if not low else 70, 62 if not low else 48, 0.45, drop_t=0.06, dur=1.6)
    tn = int(0.03 * SR)
    x[:tn] += lowpass(noise(tn), 900) * np.linspace(1, 0, tn) * 0.6
    return lowpass(x, 3000) * 1.1 * vel


def bukrim(vel=0.6):
    """북 테 치는 소리 (딱)"""
    n = int(0.2 * SR)
    x = np.sin(2 * np.pi * 1350 * np.arange(n) / SR) * exp_env(n, 0.012) + highpass(noise(n), 1800) * exp_env(n, 0.006) * 0.8
    return x * 0.4 * vel


def kkwaenggwari(vel=0.8, damped=False):
    """꽹과리: 쨍한 놋쇠. 손으로 막으면 '깽' 짧게"""
    dur = 0.18 if damped else 1.4
    n = int(dur * SR)
    t = np.arange(n) / SR
    base = 1180 + 60 * rng.random()
    out = np.zeros(n)
    for m, a, tau in ((1.0, 1.0, 0.5), (1.47, 0.8, 0.35), (1.95, 0.6, 0.3), (2.63, 0.5, 0.22), (3.31, 0.35, 0.18), (4.12, 0.25, 0.12), (5.2, 0.18, 0.08)):
        tt = tau * (0.12 if damped else 1)
        out += a * np.sin(2 * np.pi * base * m * t + rng.random() * 6) * exp_env(n, tt)
    cn = int(0.006 * SR)
    out[:cn] += highpass(noise(cn), 3000) * 1.2
    out = np.tanh(out * 1.3)
    return out * 0.16 * vel


def jing(vel=0.8, dur=5.0):
    """징: 천으로 감싼 채로 쳐서 '징~' 하고 길게 울리며 소리가 살짝 올라감(우는 소리)"""
    n = int(dur * SR)
    t = np.arange(n) / SR
    f = 132 * (1 + 0.015 * (1 - np.exp(-t / 0.6)))  # 치고 나서 음이 살짝 올라가는 징 특유의 울음
    ph = phase_of(f)
    out = np.zeros(n)
    for m, a, tau in ((1.0, 1.0, 3.5), (1.012, 0.7, 3.2), (2.04, 0.45, 2.2), (2.79, 0.3, 1.6), (3.62, 0.22, 1.2), (4.95, 0.12, 0.8), (6.1, 0.06, 0.5)):
        out += a * np.sin(m * ph + rng.random() * 6) * exp_env(n, tau)
    swell = np.minimum(1, t / 0.12) * (1 + 0.25 * np.exp(-((t - 0.5) / 0.4) ** 2))
    out *= swell
    tn = int(0.05 * SR)
    out[:tn] += lowpass(noise(tn), 400) * np.linspace(1, 0, tn) * 0.4
    return out * 0.38 * vel


def moktak(vel=0.8):
    """목탁: 속이 빈 나무 '똑'"""
    n = int(0.35 * SR)
    t = np.arange(n) / SR
    out = np.sin(2 * np.pi * 690 * t) * exp_env(n, 0.05) + 0.4 * np.sin(2 * np.pi * 1840 * t) * exp_env(n, 0.018)
    cn = int(0.004 * SR)
    out[:cn] += highpass(noise(cn), 2500)
    return out * 0.5 * vel


def pungyeong(vel=0.5):
    """풍경: 처마 끝 물고기 방울. 맑고 길게"""
    n = int(3.5 * SR)
    t = np.arange(n) / SR
    base = 1760 * (1 + 0.03 * rng.standard_normal())
    out = np.zeros(n)
    for m, a, tau in ((1.0, 1.0, 1.4), (2.76, 0.5, 0.7), (5.4, 0.25, 0.35), (8.93, 0.12, 0.2)):
        out += a * np.sin(2 * np.pi * base * m * t) * exp_env(n, tau)
    out *= 1 + 0.15 * np.sin(2 * np.pi * 3.1 * t)
    return out * 0.12 * vel


def beomjong(vel=0.9, dur=9.0):
    """범종: '데엥~' 낮은 울림과 웅웅 맥놀이(두 소리가 겹쳐 출렁임)"""
    n = int(dur * SR)
    t = np.arange(n) / SR
    out = np.zeros(n)
    for f, a, tau in ((64.0, 1.0, 6.0), (64.45, 0.9, 6.0), (128.6, 0.45, 4.0), (171, 0.35, 3.0), (226, 0.3, 2.2), (318, 0.18, 1.4), (432, 0.12, 0.9), (590, 0.07, 0.6)):
        out += a * np.sin(2 * np.pi * f * t + rng.random() * 6) * exp_env(n, tau)
    tn = int(0.08 * SR)
    out[:tn] += lowpass(noise(tn), 600) * np.linspace(1, 0, tn) * 0.5
    return out * 0.45 * vel


def bara(vel=0.7):
    """바라(자바라): 쏴 하고 퍼지는 심벌"""
    n = int(2.2 * SR)
    x = highpass(noise(n), 3000) * exp_env(n, 0.5)
    x = bandpass(x, 6500, 0.6) * 0.6 + x * 0.3
    return x * 0.25 * vel


# ---------------- 공간 (잔향) ----------------

def make_ir(length=2.6, decay=0.9, damp=6000, damp_end=1800, pre=0.012, er=True, seed=1):
    """합성 공간 응답 (스테레오). 시간이 갈수록 높은 소리가 먼저 사라짐"""
    r = np.random.default_rng(seed)
    n = int(length * SR)
    t = np.arange(n) / SR
    ir = np.zeros((n, 2))
    for c in range(2):
        x = r.standard_normal(n) * np.exp(-t / decay * 3)
        # 블록마다 점점 어두워지는 저역통과
        out = np.zeros(n)
        blk = 2048
        zi = None
        for i in range(0, n, blk):
            fc = damp * (damp_end / damp) ** min(1, t[i] / length)
            b, a = signal.butter(1, fc / (SR / 2))
            if zi is None:
                zi = signal.lfilter_zi(b, a) * 0
            seg, zi = signal.lfilter(b, a, x[i:i + blk], zi=zi)
            out[i:i + blk] = seg
        out *= np.minimum(1, t / 0.02)
        p = int(pre * SR)
        ir[p:, c] = out[:n - p]
        if er:
            for k in range(6):
                d = int((0.008 + r.random() * 0.045) * SR)
                ir[d, c] += (0.5 - k * 0.06) * (1 if r.random() < 0.5 else -1)
    ir /= np.sqrt((ir ** 2).sum(axis=0, keepdims=True))
    return ir


def reverb(x_st, ir, wet=0.25):
    """x_st: (n,2) 스테레오, ir: (m,2)"""
    out = np.zeros((len(x_st) + len(ir) - 1, 2))
    mono = x_st.mean(axis=1)
    for c in range(2):
        out[:, c] = signal.fftconvolve(mono, ir[:, c])
    out *= wet
    out[:len(x_st)] += x_st * (1 - wet * 0.3)
    return out


def pan_st(x, pan=0.0, width=0.0):
    """등전력 패닝 (-1 왼쪽 ~ 1 오른쪽)"""
    a = (pan + 1) * np.pi / 4
    st = np.stack([x * np.cos(a), x * np.sin(a)], axis=1)
    return st


def soft_limit(x, ceiling=0.93):
    peak = np.max(np.abs(x))
    if peak <= ceiling:
        return x
    # 위쪽만 부드럽게 눌러 줌
    k = ceiling
    y = np.where(np.abs(x) < k * 0.8, x, np.sign(x) * (k * 0.8 + (k * 0.2) * np.tanh((np.abs(x) - k * 0.8) / (k * 0.2))))
    return y


def rms_db(x):
    return 20 * np.log10(np.sqrt(np.mean(x ** 2)) + 1e-12)
