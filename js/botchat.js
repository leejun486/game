'use strict';
// Bot chat: other players talk to each other and to you.
//  - AI mode: when the page runs inside claude.ai (the `sample` capability) and the viewer allows it,
//    Claude writes short multi-bot conversations from the live game state. Calls happen only on the
//    viewer's own actions — sending a chat line, the 💬 button, or their level-ups / boss kills /
//    enchants — never on a timer, and at most one at a time.
//  - Local mode (always on): threaded conversations built from real game data (boss timers, hunting
//    grounds, levels, zones) with replies by name, reactions to events and to your messages.
const BotChat = (() => {
  let sample = null, aiState = 'off'; // off | ready | busy | denied
  let lastAi = -1e9, lastEventAi = -1e9;
  const queue = []; // {bot, text, at}
  const log = []; // recent lines {who, text}
  const recent = new Set(); // lines said lately (no repeats)
  let localT = 8, now = 0;

  const PERSONA = ['뉴비라 모르는 게 많고 질문을 자주 함', '만렙 고인물, 말투가 시크하고 짧음', '장사꾼, 뭐든 팔려고 함', '허세가 심하고 자랑을 좋아함',
    '드립을 잘 치는 유쾌한 성격', '혈맹 모집에 열심인 혈맹장', '친절하게 공략을 알려주는 성격', '운이 나빠서 늘 한탄함', '보스 레이드에 진심인 성격'];
  const persona = (b) => b.persona || (b.persona = PERSONA[(b.name.length * 7 + b.name.charCodeAt(0)) % PERSONA.length]);
  const CLS = { knight: '기사', elf: '요정', mage: '마법사' };

  function init() {
    if (window.claude && claude.use) {
      claude.use('sample').then((s) => {
        if (!s) return;
        sample = s; aiState = 'ready'; updateBtn();
      }).catch(() => {});
    }
    const btn = document.getElementById('chat-ai');
    if (btn) btn.onclick = () => { if (aiState === 'ready') aiScene('free'); else if (aiState === 'denied') UI.toast('AI 대화가 허용되지 않아 기본 대화로 진행합니다.'); else localScene(); };
    updateBtn();
  }
  function updateBtn() {
    const btn = document.getElementById('chat-ai');
    if (!btn) return;
    btn.classList.toggle('on', aiState === 'ready' || aiState === 'busy');
    btn.classList.toggle('busy', aiState === 'busy');
    btn.title = aiState === 'busy' ? 'AI가 대화를 쓰는 중...' : aiState === 'ready' ? 'AI 대화 시작 (Claude)' : '봇 대화 시작';
  }

  // ---------------------------------------------------------------- world facts
  const bots = () => Game.bots.filter((b) => !b.dead);
  const nearBots = (n) => {
    const p = Game.player;
    return bots().sort((a, b) => U.dist(a, p) - U.dist(b, p)).slice(0, n);
  };
  const zoneOf = (e) => World.zoneAt(e.x, e.y).name;
  function bossInfo() {
    return D.SPAWNS.filter((s) => D.MONSTERS[s.m].boss).map((s) => {
      const d = D.MONSTERS[s.m];
      const alive = Game.monsters.some((m) => m.spawn === s && !m.dead);
      const r = Game.respawns.find((x) => x.spawn === s);
      return { name: d.name, lv: d.lv, zone: World.zoneAt(s.x * 64, s.y * 64).name, alive, left: r ? Math.max(0, Math.round(r.t)) : 0 };
    });
  }
  const mmss = (s) => (s >= 60 ? `${Math.floor(s / 60)}분 ${s % 60}초` : `${s}초`);
  function huntFor(lv) {
    const ok = D.SPAWNS.filter((s) => !D.MONSTERS[s.m].boss && D.MONSTERS[s.m].lv <= lv + 2);
    const s = ok.sort((a, b) => D.MONSTERS[b.m].lv - D.MONSTERS[a.m].lv)[0] || D.SPAWNS[0];
    return { mob: D.MONSTERS[s.m].name, lv: D.MONSTERS[s.m].lv, zone: World.zoneAt(s.x * 64, s.y * 64).name };
  }
  function facts() {
    const p = Game.player;
    const b = bossInfo().map((x) => `${x.name}(Lv.${x.lv}, ${x.zone}): ${x.alive ? '지금 출현 중' : `${mmss(x.left)} 후 출현`}`).join('; ');
    const hunts = [...new Set(D.SPAWNS.filter((s) => !D.MONSTERS[s.m].boss).map((s) => `${D.MONSTERS[s.m].name} Lv.${D.MONSTERS[s.m].lv} @${World.zoneAt(s.x * 64, s.y * 64).name}`))].join(', ');
    return `게임: '이클립스: 어웨이크닝' (리니지 같은 한국 MMORPG). 마을: 라스카노. 사냥터: ${hunts}. 보스 현황: ${b}. ` +
      `플레이어 '${p.name}' (${CLS[p.cls]}, Lv.${p.s.lv}, 현재 위치 ${zoneOf(p)}). 게임 요소: 무기 강화(+9 이상은 증발 위험), 초월 카드 소환, 탈것, 펫, 혈맹, 던전 '이클립스 균열'.`;
  }
  const botLine = (b) => `${b.name} (${CLS[b.cls]} Lv.${b.lv}${b.guild ? `, 혈맹 ${b.guild}` : ''}, ${b.state === 'hunt' ? '사냥 중' : '마을'} ${zoneOf(b)}, 성격: ${persona(b)})`;

  // ---------------------------------------------------------------- AI scenes
  function canAi(isEvent) {
    if (aiState !== 'ready') return false;
    if (now - lastAi < 6) return false;
    if (isEvent && now - lastEventAi < 45) return false;
    return true;
  }
  // kind: 'free' | 'reply' | 'event'; extra: the player's line or the event description
  function aiScene(kind, extra) {
    if (!canAi(kind === 'event')) return false;
    const cast = nearBots(6).sort(() => Math.random() - 0.5).slice(0, kind === 'reply' ? 3 : 4);
    if (cast.length < 2) return false;
    aiState = 'busy'; updateBtn(); lastAi = now; if (kind === 'event') lastEventAi = now;
    const recentLog = log.slice(-12).map((l) => `${l.who}: ${l.text}`).join('\n') || '(아직 대화 없음)';
    const task = kind === 'reply'
      ? `플레이어 '${Game.player.name}'가 방금 채팅에 "${extra}"라고 말했다. 등장인물들이 이 말에 자연스럽게 반응하며 서로도 주고받는 대화를 3~5줄 써라. 질문이면 위의 게임 정보로 정확히 답하라.`
      : kind === 'event'
        ? `방금 일어난 일: ${extra}. 등장인물들이 이 일에 반응하고 서로 이어서 이야기하는 대화를 3~5줄 써라.`
        : '등장인물들이 지금 게임 상황(보스 시간, 사냥터, 강화, 파티, 거래, 혈맹 등 중 하나)을 주제로 자연스럽게 주고받는 대화를 5~7줄 써라. 최근 대화가 있으면 이어가도 된다.';
    const prompt = `너는 MMORPG 속 다른 유저들의 채팅을 쓰는 작가다.\n${facts()}\n\n등장인물(이 이름들만 사용):\n${cast.map(botLine).join('\n')}\n\n최근 채팅:\n${recentLog}\n\n${task}\n` +
      '규칙: 실제 한국 게임 유저 말투(반말/존댓말 섞임, ㅋㅋ, ㅠㅠ, ㄱㄱ, 줄임말), 한 줄은 25자 이내, 서로 이름을 부르거나 앞 말에 답하기, 같은 말 반복 금지, 게임 정보와 모순 금지, 욕설·실존 인물 금지.\n' +
      '출력: JSON 배열만. 예: [{"who":"이름","text":"대사"}]';
    sample.json(prompt, { modelTier: 'quick', cache: false }).then((lines) => {
      aiState = 'ready'; updateBtn();
      if (!Array.isArray(lines)) return;
      const byName = Object.fromEntries(cast.map((b) => [b.name, b]));
      let at = now + 0.8;
      for (const l of lines.slice(0, 8)) {
        const b = byName[String(l && l.who)];
        const text = String((l && l.text) || '').trim().slice(0, 60);
        if (!b || !text) continue;
        queue.push({ bot: b, text, at }); at += U.rand(2.2, 4.5);
      }
      localT = Math.max(localT, at - now + 12); // let the AI scene breathe before local chatter resumes
    }).catch((e) => {
      const code = e && e.code;
      aiState = ['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'].includes(code) ? 'denied' : 'ready';
      if (code === 'rate_limited') lastAi = now + 60;
      updateBtn();
      if (kind !== 'free') localReply(kind === 'reply' ? extra : null);
    });
    return true;
  }

  // ---------------------------------------------------------------- local scenes
  const pick = U.pick;
  const say = (bot, text, delay) => queue.push({ bot, text, at: now + delay });
  const ends = ['', '', '~', 'ㅋㅋ', '!', '..', 'ㅎㅎ'];
  const tail = (s) => s + pick(ends);
  function freshen(lines) { // avoid repeating the exact same wording within a while
    return lines.map((t) => { let s = t; for (let i = 0; i < 3 && recent.has(s); i++) s = tail(t); return s; });
  }
  function scene(cast, lines) {
    let at = 0.6;
    freshen(lines.map((l) => l[1])).forEach((text, i) => { say(cast[lines[i][0]], text, at); at += U.rand(2.4, 5); });
  }
  const TOPICS = {
    boss(c) {
      const bs = bossInfo(); const b = pick(bs);
      const ask = pick([`${b.name} 언제 젠이에요?`, `혹시 ${b.name} 시간 아시는분`, `${b.name} 잡으러 갈사람`]);
      const ans = b.alive ? pick([`지금 떠있어요 ${b.zone}`, `아까 떴던데 ${b.zone} 가보셈`, `떠있음 ㄱㄱ`]) : pick([`${mmss(b.left)} 남았어요`, `${mmss(b.left)} 뒤 ${b.zone}`, `대충 ${Math.max(1, Math.round(b.left / 60))}분 남음`]);
      const lines = [[0, ask], [1, ans]];
      if (c[0].lv < b.lv - 5) lines.push([1, pick([`근데 ${c[0].name}님 레벨로는 좀 빡셀듯`, `Lv.${b.lv}이라 파티 필수에요`])], [0, pick(['ㅠㅠ 렙업부터 해야겠네', '그럼 구경만 할게요ㅋㅋ']) ]);
      else lines.push([2, pick(['저도 감', '같이 가요 파티 초대좀', `${c[0].name}님 파티 ㄱ?`])], [0, pick(['ㄱㄱ 초대보냄', '좋아요 마을에서 모여요', 'ㅇㅋ 물약 사고 갈게요'])]);
      scene(c, lines);
    },
    party(c) {
      const h = huntFor(c[0].lv);
      scene(c, [[0, pick([`${h.mob} 파티 구해요 ${U.randi(1, 3)}/4`, `${h.zone} ${h.mob} 같이 잡으실분`])],
        [1, pick([`${CLS[c[1].cls]} ${c[1].lv}인데 가능?`, `저 ${c[1].lv}렙 ${CLS[c[1].cls]}요`])],
        [0, c[1].lv + 3 < h.lv ? pick([`${h.mob}은 ${h.lv}렙부터라 좀 힘들듯요`, '레벨이 조금 낮은데 괜찮으시면 ㄱㄱ']) : pick(['ㄱㄱ 초대드림', '환영합니다 ㅎㅎ', `오 ${CLS[c[1].cls]} 필요했는데`])],
        [2, pick(['자리 남으면 저도요', '나도 끼워줘요', `${c[0].name}님 저도 가능?`])]]);
    },
    enchant(c) {
      const n = U.randi(5, 10), ok = Math.random() < 0.55;
      const lines = ok ? [[0, pick([`+${n} 떴다!!!`, `와 +${n} 성공`, `무기 +${n} 됐어요 ㄷㄷ`])], [1, pick(['ㅊㅋㅊㅋ', '와 부럽다', `${c[0].name} 운 미쳤네`])], [2, pick(['주문서 몇장 썼어요?', '저도 도전해볼까'])], [0, pick([`${U.randi(3, 20)}장이요ㅋㅋ`, '첫트에 됐어요'])]]
        : [[0, pick([`+${n} 증발... 접습니다`, `+${n}에서 날아감ㅠㅠ`])], [1, pick(['ㅠㅠ 힘내세요', `헐 ${c[0].name}님 괜찮아요?`, '그래서 안전강화까지만 함'])], [2, pick([`+${n}은 원래 도박이죠`, '다음엔 뜰거에요'])]];
      scene(c, lines);
    },
    trade(c) {
      const it = pick(['강력 체력 회복제', '무기 마법 주문서', '갑옷 마법 주문서', '초월 소환권', '속도 향상 물약']);
      const price = U.randi(2, 40) * 1000;
      const haggle = Math.random() < 0.5;
      scene(c, [[0, `${it} 팝니다 개당 ${U.fmt(price)}`],
        haggle ? [1, `${U.fmt(Math.round(price * 0.8 / 100) * 100)}에 안돼요?`] : [1, '몇개 있어요?'],
        haggle ? [0, pick(['ㄴㄴ 그가격엔 안됨', 'ㅇㅋ 그럼 귓주세요', '10개 이상 사면 해드림'])] : [0, pick([`${U.randi(3, 30)}개요`, '넉넉해요 귓주세요'])],
        [2, pick(['저도 몇개만요', '시세보다 싸네', `${c[0].name}님 저도 귓할게요`])]]);
    },
    newbie(c) {
      const lvq = Math.max(1, c[0].lv); const h = huntFor(lvq);
      const tp = D.TELEPORTS.find((t) => t.name.includes(h.zone.split(' ')[0])) || D.TELEPORTS[1];
      scene(c, [[0, pick([`${lvq}렙인데 어디서 사냥해요?`, `Lv.${lvq} 사냥터 추천좀요`])], [1, `${h.zone} ${h.mob} 추천`], [1, pick([`마을 순간이동사한테 '${tp.name}' 타세요`, '퀘스트창 누르면 알아서 가요'])], [0, pick(['감사합니다!!', '오 ㄳㄳ', '친절하시네요 ㅎㅎ'])]]);
    },
    guild(c) {
      if (!c[0].guild) c[0].guild = pick(D.GUILDS.filter(Boolean));
      scene(c, [[0, `${c[0].guild} 혈맹 모집해요 매일 보스레이드`], [1, pick(['조건 있어요?', `${c[1].lv}렙도 되나요?`])], [0, pick(['출석만 잘하면 돼요', `${Math.max(10, c[1].lv - 5)}렙 이상이면 ok`])], [2, pick(['저도 가입할래요', '혈맹버프 있음?'])]]);
    },
    mount(c) {
      const m = pick(Mounts.LIST.filter((x) => x.grade >= 3));
      scene(c, [[0, pick([`${m.name} 뽑았다!!`, `드디어 ${m.name} 탈것 획득`])], [1, pick(['ㄷㄷ 전설이네', '와 그거 속도 몇이에요?'])], [0, `이동속도 +${m.spd}%요`], [2, pick(['부럽다ㅠ 난 아직 조랑말', '마을에서 한번 타고 돌아봐요ㅋㅋ'])]]);
    },
  };
  const lastTopics = [];
  function localScene() {
    const cast = nearBots(8).sort(() => Math.random() - 0.5).slice(0, 3);
    if (cast.length < 3) return;
    const k = pick(Object.keys(TOPICS).filter((x) => !lastTopics.includes(x)));
    lastTopics.push(k); if (lastTopics.length > 3) lastTopics.shift();
    TOPICS[k](cast);
  }
  // quick keyword replies to the player's own chat (used when AI is not available)
  function localReply(msg) {
    const p = Game.player, c = nearBots(4).sort(() => Math.random() - 0.5);
    if (!c.length) return;
    const m = msg || '';
    const b0 = c[0], b1 = c[1] || c[0];
    let lines;
    if (/보스|젠|언제/.test(m)) {
      const b = bossInfo().sort((a, b2) => a.left - b2.left)[0];
      lines = [[b0, b.alive ? `${b.name} 지금 ${b.zone}에 떠있어요` : `${b.name} ${mmss(b.left)} 남았어요`]];
    } else if (/어디|사냥|추천|렙업/.test(m)) {
      const h = huntFor(p.s.lv);
      lines = [[b0, `${p.name}님 ${p.s.lv}렙이면 ${h.zone} ${h.mob} 추천요`], [b1, '퀘스트창 누르면 바로 가요']];
    } else if (/파티|같이/.test(m)) {
      lines = [[b0, pick(['저 가능요', `${CLS[b0.cls]} ${b0.lv}렙 ㄱㄱ?`])], [b1, pick(['저도요', '자리 있어요?'])]];
    } else if (/안녕|ㅎㅇ|하이|반가/.test(m)) {
      lines = [[b0, pick([`${p.name}님 ㅎㅇ`, '안녕하세요~', '반가워요 ㅎㅎ'])], [b1, pick(['어서오세요', 'ㅎㅇㅎㅇ'])]];
    } else if (/팔|구매|삽니다|팝니다/.test(m)) {
      lines = [[b0, pick(['얼마에요?', '귓 드려도 돼요?', '저 살래요'])]];
    } else if (/ㅋ|ㅎ/.test(m)) {
      lines = [[b0, pick(['ㅋㅋㅋㅋ', 'ㅋㅋ 인정', '웃기네ㅋㅋ'])]];
    } else if (/\?/.test(m)) {
      lines = [[b0, pick(['음 잘 모르겠어요', `${b1.name}님이 잘 알걸요?`])], [b1, pick(['저도 그거 궁금', '퀘스트 따라가면 다 나와요'])]];
    } else {
      lines = [[b0, pick([`${p.name}님 ㅇㅈ`, '그니까요', '오 그래요?', 'ㅋㅋ 맞아요'])]];
    }
    let at = 1.2;
    for (const [b, t] of lines) { say(b, t, at); at += U.rand(1.8, 3.2); }
  }

  // ---------------------------------------------------------------- hooks
  function onPlayerSay(text) {
    log.push({ who: Game.player.name, text });
    if (!aiScene('reply', text)) localReply(text);
  }
  // notable things the player did (their own action, so an AI call is allowed)
  function onEvent(desc, localLines) {
    if (aiScene('event', desc)) return;
    const c = nearBots(5).sort(() => Math.random() - 0.5);
    if (!c.length) return;
    let at = 1;
    for (const t of localLines || []) { say(c[Math.min(c.length - 1, Math.floor(Math.random() * 3))], t, at); at += U.rand(1.5, 3); }
  }
  function update(dt) {
    now += dt;
    for (let i = queue.length - 1; i >= 0; i--) {
      const q = queue[i];
      if (q.at > now) continue;
      queue.splice(i, 1);
      if (q.bot.dead) continue;
      Game.say(q.bot, q.text);
      log.push({ who: q.bot.name, text: q.text }); if (log.length > 30) log.shift();
      recent.add(q.text); if (recent.size > 80) recent.delete(recent.values().next().value);
    }
    localT -= dt;
    if (localT <= 0 && !queue.length && Game.started) {
      localT = U.rand(14, 28);
      localScene();
    }
  }
  return { init, update, onPlayerSay, onEvent, get mode() { return aiState; } };
})();
