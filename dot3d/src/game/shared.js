// Game과 떼어 낸 부분(src/game/*.js)이 함께 쓰는 것
import * as THREE from 'three';
import { QUESTS } from '../quests.js';

export const V = (x, y, z) => new THREE.Vector3(x, y, z);

// 난이도 설명 (화면 설정·선택 화면)
export const DIFF_NOTE = {
  easy: '몬스터 체력 75% · 받는 피해 절반쯤 — 이야기와 탐험을 편하게',
  normal: '처음 하는 분께 알맞은 기본 난이도 — 남쪽 지역일수록 우두머리가 세짐',
  hard: '몬스터 체력 130% · 받는 피해와 우두머리가 더 셈 · 경험치 125% · 장비 140%',
};

// 체험판의 마지막 메인 퀘스트 단계 (늪 문을 여는 단계)
export const DEMO_END = QUESTS.findIndex((q) => q.gateAfter === 'swamp');
