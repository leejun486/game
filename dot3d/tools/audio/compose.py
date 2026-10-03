# 국악풍 배경음악 작곡·렌더
#  장단(굿거리·세마치·중모리·자진모리·휘모리) 위에 선율을 짓고,
#  여러 악기가 같은 선율을 저마다 꾸며 연주하는 헤테로포니(국악 합주 방식)로 엮음.
#  선율은 A A' B A'' 형식 (두 장단씩 묻고 답하기) 으로 만들어 귀에 남게 함.
#  루프: 끝부분의 잔향·끌리는 음을 앞부분에 겹쳐 넣어 이음매 없이 반복됨
import numpy as np
from synth import *

PYEONG = [0, 2, 5, 7, 9]      # 평조: 솔 라 도 레 미 (밝고 점잖음)
GYEMYEON = [0, 3, 5, 7, 10]   # 계면조: 라 도 레 미 솔 (슬프고 서늘함)

# 장단: 한 장단의 칸 수, 칸 길이(초), 장구 가락 [(칸, 소리, 세기)]
JANGDAN = {
    'gutgeori': (12, None, [(0, 'deong', 1.0), (2, 'gideok', 0.7), (3, 'kung', 0.8), (5, 'roll', 0.55), (6, 'kung', 0.8), (8, 'gideok', 0.7), (9, 'kung', 0.8), (11, 'roll', 0.5)]),
    'semachi': (9, None, [(0, 'deong', 1.0), (3, 'deong', 0.8), (5, 'deok', 0.6), (6, 'kung', 0.8), (7, 'deok', 0.6)]),
    'jungmori': (12, None, [(0, 'deong', 0.9), (3, 'kung', 0.5), (5, 'tick', 0.5), (6, 'kung', 0.6), (8, 'deok', 0.6), (9, 'kung', 0.7), (10, 'deok', 0.5)]),
    'jajinmori': (12, None, [(0, 'deong', 1.0), (2, 'deok', 0.7), (3, 'kung', 0.8), (5, 'deok', 0.6), (6, 'kung', 0.85), (8, 'deok', 0.7), (9, 'kung', 0.8), (10, 'deok', 0.5), (11, 'deok', 0.6)]),
    'hwimori': (8, None, [(0, 'deong', 1.0), (2, 'deok', 0.7), (3, 'kung', 0.8), (4, 'deong', 0.9), (6, 'deok', 0.7), (7, 'kung', 0.8)]),
}

# 장단별 선율 리듬 틀 [(시작칸, 길이칸)]
RHYTHMS = {
    12: [[(0, 3), (3, 3), (6, 3), (9, 3)], [(0, 6), (6, 2), (8, 1), (9, 3)], [(0, 2), (2, 1), (3, 3), (6, 4), (10, 2)],
         [(0, 3), (3, 2), (5, 1), (6, 6)], [(0, 4), (4, 2), (6, 3), (9, 2), (11, 1)]],
    9: [[(0, 3), (3, 3), (6, 3)], [(0, 6), (6, 3)], [(0, 2), (2, 1), (3, 3), (6, 2), (8, 1)], [(0, 3), (3, 2), (5, 1), (6, 3)]],
    8: [[(0, 2), (2, 2), (4, 2), (6, 2)], [(0, 1), (1, 1), (2, 2), (4, 4)], [(0, 3), (3, 1), (4, 2), (6, 2)], [(0, 2), (2, 1), (3, 1), (4, 4)]],
}
CADENCE = {12: [(0, 6), (6, 6)], 9: [(0, 9)], 8: [(0, 8)]}


class Track:
    def __init__(self, name, length, seed):
        self.name = name
        self.L = length
        self.n = int(length * SR)
        self.bus = {'dry': np.zeros((self.n + int(12 * SR), 2)), 'wet': np.zeros((self.n + int(12 * SR), 2))}
        self.rng = np.random.default_rng(seed)

    def add(self, x, at, pan=0.0, gain=1.0, send=0.35):
        """소리 x를 at초에 놓음 (사람이 치는 듯 몇 ms 흔들림)"""
        at = max(0.0, at + self.rng.normal(0, 0.004))
        st = pan_st(x * gain, pan)
        i = int(at * SR)
        e = min(len(self.bus['dry']), i + len(st))
        self.bus['dry'][i:e] += st[:e - i] * (1 - send * 0.5)
        self.bus['wet'][i:e] += st[:e - i] * send

    def render(self, ir, wet=0.9):
        rev = np.zeros_like(self.bus['dry'])
        for c in range(2):
            rev[:, c] = signal.fftconvolve(self.bus['wet'][:, c] + self.bus['wet'][:, 1 - c] * 0.2, ir[:, c])[:len(rev)]
        mix = self.bus['dry'] + rev * wet
        # 고리 잇기: 루프 길이를 넘어간 꼬리를 앞으로 겹침
        out = mix[:self.n].copy()
        tail = mix[self.n:]
        k = 0
        while k < len(tail):
            seg = tail[k:k + self.n]
            out[:len(seg)] += seg
            k += self.n
        # 저역 정리 + 음량 맞추기 + 부드러운 제한
        for c in range(2):
            out[:, c] = highpass(out[:, c], 45)
        target = -17.5
        g = 10 ** ((target - rms_db(out)) / 20)
        out *= g
        out = soft_limit(out, 0.92)
        return out


def freq(tonic, scale, deg):
    o, d = divmod(deg, 5)
    return tonic * 2 ** ((o * 12 + scale[d]) / 12)


def walk(rng, n, start, end, lo, hi):
    """끝음(end)으로 자연스럽게 내려앉는 선율 보행"""
    if n == 1:
        return [end]
    seq = [start]
    for i in range(1, n - 1):
        remain = n - 1 - i
        pull = (end - seq[-1]) / (remain + 1)
        step = int(np.round(pull + rng.choice([-2, -1, -1, 0, 1, 1, 2], p=[0.1, 0.22, 0.13, 0.1, 0.22, 0.13, 0.1])))
        step = max(-3, min(3, step))
        nxt = max(lo, min(hi, seq[-1] + step))
        if nxt == seq[-1] and rng.random() < 0.6:
            nxt = max(lo, min(hi, nxt + rng.choice([-1, 1])))
        seq.append(nxt)
    seq.append(end)
    return seq


def make_tune(rng, subs, cycles, goals, lo, hi, cadence_last=True):
    """A A' B A'' 형식의 선율. goals: 장단마다 끝음(도수). 돌려받는 값: 장단별 [(칸, 길이칸, 도수)]"""
    R = RHYTHMS[subs]
    tune = []
    for c in range(cycles):
        # 형식: 0,1 = A / 2,3 = A' (2는 0을 그대로, 3은 1을 변주) / 4,5 = B / 6,7 = A'' (6은 0을, 7은 마침)
        k = c % 8
        if k in (2, 6) and len(tune) >= c - k + 1:
            tune.append(list(tune[c - k]))
            continue
        if k == 3:
            src = tune[c - 2]
            rh = [(s, l) for (s, l, _) in src]
            degs = walk(rng, len(rh), src[0][2], goals[k], lo, hi)
            tune.append([(s, l, d) for (s, l), d in zip(rh, degs)])
            continue
        if k == 7 and cadence_last:
            rh = CADENCE[subs]
        else:
            rh = R[rng.integers(len(R))]
        prev = tune[-1][-1][2] if tune else goals[-1]
        start = max(lo, min(hi, prev + rng.choice([-1, 0, 1, 2]) if k != 4 else prev + 3))
        degs = walk(rng, len(rh), start, goals[k], lo, hi)
        tune.append([(s, l, d) for (s, l), d in zip(rh, degs)])
    return tune


# ---------- 악기 감싸기 (꾸밈 인자 통일) ----------

def I_daegeum(f, dur, vel=0.8, bend=None, vib_deep=False):
    return daegeum(f, dur, vel, vib=dur > 0.45, bend=bend, scoop=-0.035 if dur > 0.3 else -0.015) * (1.15 if vib_deep else 1)


def I_danso(f, dur, vel=0.7, bend=None, vib_deep=False):
    return danso(f, dur, vel, vib=dur > 0.4)


def I_haegeum(f, dur, vel=0.8, bend=None, vib_deep=False):
    return haegeum(f, dur, vel, vib=dur > 0.25, bend=bend)


def I_piri(f, dur, vel=0.8, bend=None, vib_deep=False):
    return piri(f, dur, vel, vib=dur > 0.3, bend=bend)


def I_taep(f, dur, vel=0.9, bend=None, vib_deep=False):
    return piri(f, dur, vel, vib=dur > 0.25, bend=bend, taepyeongso=True)


def gayageum_hetero(T, tune, t0, sub, subs, tonic, scale, mode, gain=1.0, pan=-0.35, busy=1.0, octave=1):
    """가야금: 같은 선율을 잘게 쪼개 뜯고, 긴 음은 다시 퉁기거나 윗음을 스쳐 꾸밈"""
    rng = T.rng
    for c, cyc in enumerate(tune):
        for (s, l, d) in cyc:
            at = t0 + (c * subs + s) * sub
            f = freq(tonic * octave, scale, d)
            vib = None
            if l * sub > 0.7 and rng.random() < 0.7:
                deep = 0.05 if (mode == 'gyemyeon' and d % 5 == 3) else 0.03
                vib = (0.18, deep, 5.5, 0.25)  # 농현
            T.add(gayageum(f, max(0.5, l * sub * 1.1), 0.75, vib=vib), at, pan, gain, 0.35)
            # 긴 음: 반쯤에서 다시 뜯거나 윗음으로 꾸밈
            if l >= 3 and rng.random() < 0.75 * busy:
                h = (l // 2) if l >= 4 else 2
                if rng.random() < 0.5:
                    T.add(gayageum(freq(tonic * octave, scale, d + 1), sub * 0.9, 0.45), at + h * sub - sub * 0.5, pan, gain * 0.8, 0.35)
                T.add(gayageum(f, (l - h) * sub, 0.55), at + h * sub, pan, gain * 0.9, 0.35)
            # 장단 첫 박에 아래 옥타브를 함께 (쌍성)
            if s == 0 and rng.random() < 0.6:
                T.add(gayageum(f / 2, l * sub, 0.5), at, pan, gain * 0.7, 0.3)


def janggu_part(T, jd, t0, sub, cycles, gain=1.0, pan=0.12, vary=True, sparse=False):
    subs, _, pat = JANGDAN[jd]
    rng = T.rng
    for c in range(cycles):
        for (s, k, v) in pat:
            if sparse and k in ('roll', 'gideok', 'tick') and rng.random() < 0.5:
                continue
            kk = k
            if vary and k == 'roll' and rng.random() < 0.3:
                kk = 'gideok'
            T.add(janggu(kk, v * (0.85 + 0.25 * rng.random())), t0 + (c * subs + s) * sub, pan, gain, 0.2)


def bass_part(T, tune, t0, sub, subs, tonic, scale, gain=1.0, every=1):
    """거문고: 장단 머리에 으뜸음·딸림음을 '둥'"""
    for c, cyc in enumerate(tune):
        if c % every:
            continue
        d0 = cyc[0][2]
        root = 0 if d0 % 5 in (0, 1, 4) else 3
        T.add(geomungo(freq(tonic / 2, scale, root), subs * sub * 0.9, 0.8), t0 + c * subs * sub, -0.1, gain, 0.3)
        if subs >= 9 and T.rng.random() < 0.6:
            T.add(geomungo(freq(tonic / 2, scale, (root + 3) % 5 if root else 3), subs * sub * 0.4, 0.55), t0 + (c * subs + subs // 2) * sub, -0.1, gain * 0.8, 0.3)


def lead(T, tune, t0, sub, subs, inst, tonic, scale, mode, pan=0.15, gain=1.0, send=0.45, octave=2, vel=0.8):
    for c, cyc in enumerate(tune):
        for j, (s, l, d) in enumerate(cyc):
            at = t0 + (c * subs + s) * sub
            dur = l * sub * 0.97
            f = freq(tonic * octave, scale, d)
            nxt = cyc[j + 1][2] if j + 1 < len(cyc) else (tune[c + 1][0][2] if c + 1 < len(tune) else None)
            bend = None
            if mode == 'gyemyeon' and d % 5 == 2 and nxt is not None and nxt < d and dur > 0.45:
                bend = (dur * 0.62, 2 ** (-2 / 12), min(0.22, dur * 0.3))
            elif nxt is not None and nxt != d and dur > 0.9 and T.rng.random() < 0.35:
                # 다음 음으로 미끄러지는 흘림
                bend = (dur * 0.85, freq(1, scale, nxt) / freq(1, scale, d), dur * 0.12)
            T.add(inst(f, dur, vel=vel, bend=bend, vib_deep=(mode == 'gyemyeon' and d % 5 == 3)), at, pan, gain, send)
