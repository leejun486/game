// 직업 설정
import { makeHero, makeMage, makeElf } from './character.js';

export const CLASSES = {
  sword: {
    id: 'sword', title: '검객', name: '이랑', make: makeHero,
    hp: 120, skillCd: 2.6, dashCd: 0.5,
    role: '발도술 · 근접', desc: '칼집에서 뽑으며 베는 발도술, 날아가는 검기',
    labels: { atk: '베기', dash: '회피', skill: '검기' }, hitWord: '연속 베기',
  },
  mage: {
    id: 'mage', title: '도사', name: '청운', make: makeMage,
    hp: 90, skillCd: 4.2, dashCd: 0.8,
    role: '부적술 · 원거리 광역', desc: '터지는 불부적, 하늘에서 내리치는 낙뢰, 축지법',
    labels: { atk: '불부적', dash: '축지', skill: '낙뢰' }, hitWord: '연속 타격',
  },
  elf: {
    id: 'elf', title: '요정', name: '하늬', make: makeElf,
    hp: 100, skillCd: 3.2, dashCd: 0.45,
    role: '활 · 원거리 연사', desc: '빠른 화살, 부채꼴로 쏟아지는 바람화살',
    labels: { atk: '사격', dash: '구르기', skill: '바람화살' }, hitWord: '연속 명중',
  },
};

export const CLASS_ORDER = ['sword', 'mage', 'elf'];
