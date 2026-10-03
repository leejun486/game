// 직업 설정
import { makeHero, makeMage, makeElf, makeLancer } from './character.js';

export const CLASSES = {
  sword: {
    id: 'sword', title: '검객', name: '이랑', make: makeHero,
    hp: 120, skillCd: 2.6, dashCd: 0.5, skill2Cd: 6, skill3Cd: 8,
    role: '발도술 · 근접', bars: { 체력: 4, 공격: 4, 사거리: 1, 기동: 4, 난이도: 2 }, desc: '발도술, 검기, 순간 돌진 일섬, 회오리베기',
    labels: { atk: '베기', dash: '회피', skill: '검기', skill2: '일섬', skill3: '회오리' }, hitWord: '연속 베기',
  },
  mage: {
    id: 'mage', title: '도사', name: '청운', make: makeMage,
    hp: 100, skillCd: 4.2, dashCd: 0.8, skill2Cd: 6.5, skill3Cd: 9,
    role: '부적술 · 원거리 광역', bars: { 체력: 2, 공격: 5, 사거리: 4, 기동: 2, 난이도: 3 }, desc: '불부적, 낙뢰, 불뱀을 부르는 화룡부, 얼음 가시 빙결진',
    labels: { atk: '불부적', dash: '축지', skill: '낙뢰', skill2: '화룡부', skill3: '빙결진' }, hitWord: '연속 타격',
  },
  elf: {
    id: 'elf', title: '요정', name: '하늬', make: makeElf,
    hp: 100, skillCd: 3.2, dashCd: 0.45, skill2Cd: 6, skill3Cd: 9,
    role: '활 · 원거리 연사', bars: { 체력: 3, 공격: 3, 사거리: 5, 기동: 5, 난이도: 2 }, desc: '바람화살, 하늘에서 쏟아지는 화살비, 적을 빨아들이는 회오리 정령',
    labels: { atk: '사격', dash: '구르기', skill: '바람화살', skill2: '화살비', skill3: '회오리 정령' }, hitWord: '연속 명중',
  },
  lancer: {
    id: 'lancer', title: '창술사', name: '한결', make: makeLancer,
    hp: 110, skillCd: 3.0, dashCd: 0.55, skill2Cd: 7, skill3Cd: 9,
    role: '창술 · 중거리 관통', bars: { 체력: 3, 공격: 4, 사거리: 2, 기동: 3, 난이도: 3 }, desc: '길게 꿰뚫는 찌르기, 용아창, 뛰어올라 내려찍는 낙화창, 하늘에서 창이 쏟아지는 천창우',
    labels: { atk: '찌르기', dash: '회피', skill: '용아창', skill2: '낙화창', skill3: '천창우' }, hitWord: '연속 찌르기',
  },
};

export const CLASS_ORDER = ['sword', 'mage', 'elf', 'lancer'];
