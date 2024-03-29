type BREEDType = {
  [key: string]: {
    [key: string]: string;
    INF: string;
    INT: string;
    IST: string;
    ISF: string;
    ENF: string;
    ENT: string;
    EST: string;
    ESF: string;
  };
};
export const BREED: BREEDType = {
  BIG: {
    INF: '풍산개',
    INT: '아프간하운드',
    IST: '말라뮤트',
    ISF: '불테리어',
    ENF: '골든리트리버',
    ENT: '저먼셰퍼드',
    EST: '보더콜리',
    ESF: '도베르만',
  },
  MIDDLE: {
    INF: '진돗개',
    INT: '비글',
    IST: '시베리안허스키',
    ISF: '시바',
    ENF: '코카스패니얼',
    ENT: '바셋하운드',
    EST: '셔틀랜드쉽독',
    ESF: '웰시코기',
  },
  SMALL: {
    INF: '토이푸들',
    INT: '잭러셀테리어',
    IST: '비숑',
    ISF: '미니어쳐슈나우저',
    ENF: '퍼그',
    ENT: '프렌치불독',
    EST: '파피용',
    ESF: '닥스훈트',
  },
};
