// 메인 퀘스트: 순서대로 진행. type
//  talk  : npc에게 말 걸기 (lines를 듣고 나면 완료)
//  wave  : 그 지역의 북·방울·범종을 울려 밤 싸움에서 이기기
//  kill  : 몬스터 처치 (need: {종류: 수})
//  collect: 몬스터가 떨어뜨리는 퀘스트 물건 모으기 (from 종류, chance 확률)
//  light : 그 지역(region)의 꺼진 석등 밝히기 (E 키)
// gate: 이 단계가 시작될 때 열리는 문, reward: 완료 보상 (exp, item: 'cls:티어' 또는 아이템 id)
export const QUESTS = [
  { title: '수문장을 찾아서', type: 'talk', npc: 'guard', desc: '왼쪽 북 옆의 <b>수문장</b>에게 말을 걸자',
    lines: (g) => [
      `어이, 거기 젊은 ${g.player.cfg.title}! 마침 잘 왔소.`,
      '해만 지면 이 궁궐 마당에 도깨비 놈들이 떼로 몰려와 난장판을 친다오.',
      '저기 저 큰 북이 보이시오? 북을 둥— 하고 울리면 숨어 있던 놈들이 죄다 튀어나올 게요.',
      '놈들을 모조리 혼쭐내 주시오! 마지막엔 도깨비 대왕이 나온다는 소문이 있으니 조심하고.',
      '(북 앞에서 E 키, 혹은 검으로 북을 베어 울리세요)',
    ] },
  { title: '도깨비 야행', type: 'wave', region: 'palace', desc: '<b>큰 북</b>을 울려 도깨비들을 물리치자', reward: { exp: 60 } },
  { title: '남문이 열리다', type: 'talk', npc: 'guard', desc: '<b>수문장</b>에게 돌아가 알리자',
    lines: () => [
      '허허, 대왕까지 쫓아내다니! 이 궁의 은인이시구려.',
      '실은 부탁이 하나 더 있소. 남문 밖 대숲에서 요즘 여우들이 사람을 홀린다 하오.',
      '남문을 열어 드리리다. 죽림 어귀에 약초꾼 분이가 있으니 사정을 들어 보시오.',
      '이건 고마움의 표시요. 색동 저고리인데, 입으면 몸이 한결 가벼울 게요.',
    ], gateAfter: 'south', reward: { exp: 40, item: 'ot5' } },
  { title: '죽림 어귀', type: 'talk', npc: 'herb', desc: '남문 밖 <b>죽림 어귀</b>의 약초꾼 <b>분이</b>를 찾아가자',
    lines: () => [
      '어머나, 궁에서 오셨어요? 수문장 어르신이 보내셨구나!',
      '요즘 숲에 여우들이 들끓어서 약초를 캘 수가 없어요.',
      '숲을 어슬렁거리는 여우들을 좀 쫓아 주실래요? 가까이 가면 달려드니 조심하세요.',
    ] },
  { title: '여우 사냥', type: 'kill', need: { fox: 6 }, desc: '죽림을 돌아다니는 <b>여우</b>를 사냥하자', reward: { exp: 90 } },
  { title: '여우불 구슬', type: 'collect', item: '여우구슬', from: ['foxfire'], chance: 0.6, n: 4, desc: '<b>여우불</b>을 쓰러뜨려 <b>여우구슬</b>을 모으자', reward: { exp: 90, item: 'cls:2' },
    startLines: ['분이: 여우불이 품은 구슬이 있으면 서낭당의 부정을 씻을 수 있대요.', '분이: 숲속 주황 불덩이들을 쓰러뜨려 구슬을 네 개만 모아 주세요!'] },
  { title: '서낭당의 방울', type: 'wave', region: 'bamboo', desc: '숲 한가운데 <b>서낭당 방울</b>을 울려 <b>구미호</b>를 불러내자', reward: { exp: 180 },
    startLines: ['분이: 구슬을 서낭당에 바쳤더니 방울이 울릴 준비가 됐어요.', '분이: 방울을 흔들면 천년 묵은 구미호가 나타날 거예요… 부디 조심하세요!'] },
  { title: '대숲 너머', type: 'talk', npc: 'hermit', desc: '죽림 남쪽 끝, 폐사찰 일주문 앞의 <b>떠돌이 도사</b>를 찾아가자',
    lines: () => [
      '허허, 구미호를 물리친 이가 자네로군. 기다리고 있었네.',
      '이 일주문 너머는 버려진 옛 절터일세. 저승사자가 망자들을 풀어놓고 있지.',
      '금줄을 걷어 주겠네. 들어가거든 떠도는 망자들부터 잠재우게.',
    ], gateAfter: 'temple', reward: { exp: 60 } },
  { title: '떠도는 망자', type: 'kill', need: { jiangshi: 5, ghost: 3 }, desc: '눈밭의 <b>강시</b>와 <b>원귀</b>를 잠재우자', reward: { exp: 160 } },
  { title: '꺼진 석등', type: 'light', n: 4, desc: '폐사찰의 꺼진 <b>석등</b>에 불을 밝히자 (석등 앞에서 E)', reward: { exp: 120, item: 'ot8' },
    startLines: ['청허: 망자들이 잠잠해졌군. 이제 꺼진 석등에 불을 밝혀 길을 비추게.', '청허: 불이 넷 켜지면 저승의 문이 드러날 걸세.'] },
  { title: '저승의 문', type: 'wave', region: 'temple', desc: '종각의 <b>범종</b>을 울려 <b>저승사자</b>와 맞서자', reward: { exp: 300 },
    startLines: ['청허: 석등이 모두 밝았네. 종각의 범종을 울리면 저승사자가 명부를 들고 올 걸세.'] },
  { title: '뒷문 너머', type: 'talk', npc: 'hermit', desc: '폐사찰 입구의 <b>떠돌이 도사 청허</b>와 이야기하자',
    lines: () => [
      '저승사자가 물러갔구먼. 헌데 명부가 흩어지며 남쪽 늪의 물안개가 짙어졌다네.',
      '절 뒤편 쪽문 너머는 물안개 늪일세. 천 년 동안 용이 되기를 기다린 이무기가 잠들어 있지.',
      '쪽문의 부적을 떼어 주겠네. 늪 어귀의 사공 영감이 길을 알 걸세.',
      '(물에 들어가면 걸음이 느려집니다. 나무 다리를 따라가세요)',
    ], gateAfter: 'swamp', reward: { exp: 150 } },
  { title: '늪의 사공', type: 'talk', npc: 'ferry', desc: '폐사찰 뒷문 너머 <b>물안개 늪</b>의 <b>사공 영감</b>을 찾아가자',
    lines: () => [
      '허, 이런 데까지 사람이 다 오는구먼. 난 이 늪에서 나룻배를 젓는 늙은이요.',
      '요새 물귀신들이 사람 발목을 잡아끌고, 두꺼비 요괴가 독을 뱉어 배를 띄울 수가 없소.',
      '물귀신은 물속에선 빨라지니 뭍이나 다리 위에서 상대하시오.',
    ] },
  { title: '물귀신 소동', type: 'kill', region: 'swamp', need: { waterghost: 6, toad: 3 }, desc: '늪의 <b>물귀신</b>과 <b>두꺼비 요괴</b>를 물리치자', reward: { exp: 260, item: 'cls:3' } },
  { title: '연꽃 등불', type: 'light', region: 'swamp', n: 3, desc: '늪 작은 섬들의 <b>석등</b>에 불을 밝히자 (석등 앞에서 E)', reward: { exp: 220 },
    startLines: ['사공: 고맙소! 물안개를 걷으려면 섬마다 있는 석등에 불을 켜야 하오.', '사공: 셋이 다 켜지면 제단의 징을 울릴 수 있을 게요.'] },
  { title: '이무기의 징', type: 'wave', region: 'swamp', desc: '용왕 제단의 <b>징</b>을 울려 <b>천년 이무기</b>와 맞서자', reward: { exp: 500 },
    startLines: ['사공: 징을 치면 이무기가 깨어날 거요. 놈은 물속으로 숨었다가 발밑에서 솟구치니, 바닥의 푸른 원을 보면 피하시오!'] },
  { title: '막힌 길', type: 'talk', npc: 'ferry', desc: '늪 어귀의 <b>사공 영감</b>에게 돌아가자',
    lines: () => [
      '이무기가 잠잠해지니 늪에 햇살이 다 드는구려! 정말 고맙소.',
      '헌데 그놈이 날뛰는 통에 남쪽 협곡 길이 바위로 막혔다오. 내가 장정들을 불러 치워 두리다.',
      '협곡엔 옛 대장간이 있소. 쇠를 먹는 괴물 불가사리가 깨어났다는 흉흉한 소문이…',
    ], gateAfter: 'canyon', reward: { exp: 200 } },
  { title: '대장장이', type: 'talk', npc: 'smith', desc: '늪 남동쪽 길 너머 <b>불가사리 협곡</b>의 <b>대장장이</b>를 찾아가자',
    lines: () => [
      '여기까지 왔으면 보통 솜씨가 아니구먼. 난 이 대장간을 지키던 쇠돌이요.',
      '불가사리가 쇠를 먹어 치우더니 가마의 불이 화염 도깨비가 되고, 장승들이 돌덩이 병사가 됐소.',
      '놈들부터 정리해 주시오. 분화구가 벌겋게 달아오르면 피하고!',
    ] },
  { title: '불씨 사냥', type: 'kill', region: 'canyon', need: { firedok: 6, stonegolem: 2 }, desc: '협곡의 <b>화염 도깨비</b>와 <b>돌장승</b>을 물리치자', reward: { exp: 380 } },
  { title: '검은 쇳조각', type: 'collect', region: 'canyon', item: '검은 쇳조각', from: ['firedok', 'stonegolem'], chance: 0.5, n: 5, desc: '쓰러뜨린 적에게서 <b>검은 쇳조각</b>을 모으자', reward: { exp: 300, item: 'cls:4' },
    startLines: ['쇠돌이: 불가사리를 불러내려면 놈이 좋아하는 검은 쇳조각이 있어야 하오.', '쇠돌이: 협곡의 놈들이 품고 있으니 다섯 개만 모아 오시오.'] },
  { title: '불가사리의 풀무', type: 'wave', region: 'canyon', desc: '대장간의 <b>풀무</b>를 밟아 <b>불가사리</b>를 불러내자', reward: { exp: 700 },
    startLines: ['쇠돌이: 쇳조각을 가마에 넣었소. 풀무를 밟으면 냄새를 맡고 불가사리가 올 거요.', '쇠돌이: 놈이 쇳조각을 뿜으면 붉은 원을 피하시오. 다치면 몸이 달아올라 더 사나워지오!'] },
  { title: '귀환', type: 'talk', npc: 'guard', desc: '월하궁의 <b>수문장</b>에게 돌아가 소식을 전하자',
    lines: (g) => [
      `${g.player.cfg.title} 나리! 저승사자에 이무기, 불가사리까지 물리치셨다고요? 소문이 궁 안까지 퍼졌소!`,
      '이제 궁도, 대숲도, 옛 절터도, 늪과 협곡도 모두 평안하오. 참으로 고맙소.',
      '앞으로도 이 땅을 지켜 주시오. 현상수배가 붙으면 내게 오시오.',
      '(메인 퀘스트 완료! 수문장에게 현상수배를 받거나, 북·방울·범종을 다시 울려 회차를 올릴 수 있습니다)',
    ], reward: { exp: 400, item: 'cls:3' } },
];

// 메인 퀘스트 이후: 수문장이 주는 현상수배 (반복)
export const BOUNTIES = [
  { region: 'bamboo', title: '현상수배: 죽림 여우 떼', need: { fox: 8, foxfire: 3 } },
  { region: 'temple', title: '현상수배: 설원의 망자', need: { jiangshi: 6, ghost: 4 } },
  { region: 'bamboo', title: '현상수배: 여우불 소탕', need: { foxfire: 6 } },
  { region: 'temple', title: '현상수배: 강시 무리', need: { jiangshi: 10 } },
  { region: 'swamp', title: '현상수배: 늪의 물귀신', need: { waterghost: 8 } },
  { region: 'swamp', title: '현상수배: 독두꺼비', need: { toad: 6 } },
  { region: 'canyon', title: '현상수배: 화염 도깨비', need: { firedok: 8 } },
  { region: 'canyon', title: '현상수배: 걸어 다니는 장승', need: { stonegolem: 4 } },
];

export const KILL_NAME = { fox: '여우', foxfire: '여우불', jiangshi: '강시', ghost: '원귀', waterghost: '물귀신', toad: '두꺼비 요괴', firedok: '화염 도깨비', stonegolem: '돌장승', blue: '꼬마 도깨비', red: '붉은 도깨비', wisp: '도깨비불' };
