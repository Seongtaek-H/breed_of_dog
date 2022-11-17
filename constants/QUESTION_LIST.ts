export type MbtiType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F';
export type Sizetype = 'BIG' | 'MIDDLE' | 'SMALL';
type QUESTION_LIST_type = {
  question: string;
  options: {
    answer: string;
    result: { type: 'size' | 'mbti'; value: Sizetype | MbtiType };
  }[];
}[];

export const QUESTION_LIST: QUESTION_LIST_type = [
  {
    question: '내가 원하는 강아지의 사이즈는?',
    options: [
      {
        answer: '왕 크니까 왕 귀여운 대형견',
        result: { type: 'size', value: 'BIG' },
      },
      {
        answer: '뭐든지 적당한게 좋지. 중형견',
        result: { type: 'size', value: 'MIDDLE' },
      },
      {
        answer: '작고 소중해... 소형견',
        result: { type: 'size', value: 'SMALL' },
      },
    ],
  },

  {
    question: '내가 강아지에게 애정 표현을 하는 방법은?',
    options: [
      {
        answer: '너무 너무 사랑하니까 뽀뽀 백번~❤️',
        result: { type: 'mbti', value: 'F' },
      },
      {
        answer: '우리 강아지 맛있는 간식 많이 많이 사준다.',
        result: { type: 'mbti', value: 'T' },
      },
    ],
  },
  {
    question:
      '우리 강아지와 산책 중 저 멀리서 산책 중인 다른 집 강아지를 발견했다! 나는...',
    options: [
      {
        answer: '주인이랑 인사하기 어색하니까 살짝 돌아간다.',
        result: { type: 'mbti', value: 'I' },
      },
      {
        answer: '우리 애기 자랑도 하고 친구 냄새도 맡게 할 생각에 신이 난다.',
        result: { type: 'mbti', value: 'E' },
      },
    ],
  },
  {
    question: '요즘 우리 강아지가 힘이 없는 것 같아서 나는...',
    options: [
      {
        answer: '어디 이상이라도 생겼나? 빨리 병원부터 가본다.',
        result: { type: 'mbti', value: 'T' },
      },
      {
        answer: '기운이 팍팍 나도록 특식을 준비한다.',
        result: { type: 'mbti', value: 'F' },
      },
    ],
  },
  {
    question: '우리 강아지랑 여행을 갈 꺼야! 어디로 갈까?',
    options: [
      { answer: '애견 동반 카페', result: { type: 'mbti', value: 'I' } },
      { answer: '해수욕장', result: { type: 'mbti', value: 'E' } },
    ],
  },
  {
    question:
      '퇴근하고 돌아오니까 강아지가 집이 엉망진창으로 어지럽혀 놓았다...',
    options: [
      {
        answer: '확실하게 훈육해야지. 따끔하게 혼낸다.',
        result: { type: 'mbti', value: 'S' },
      },
      {
        answer: '강아지가 그럴 수도 있지.. 빨리 치우기나 하자.',
        result: { type: 'mbti', value: 'N' },
      },
    ],
  },
  {
    question: '우리 귀여운 내 새꾸 사진이 너무 이쁘게 잘 나왔다! 나는...',
    options: [
      {
        answer: '동네 사람들 우리 강아지 좀 보세요~ 인스타에 바로 업뎃.',
        result: { type: 'mbti', value: 'E' },
      },
      {
        answer: '귀여운 건 나만 볼거야. 내적으로 포효한다. 광광',
        result: { type: 'mbti', value: 'I' },
      },
    ],
  },
  {
    question:
      '강아지와 산책 중 이상한 사람이 어딜 강아지를 끌고 나오냐며 시비를 건다.',
    options: [
      {
        answer:
          '이상한 사람은 피하는게 상책이지. 죄송하다고 하면서 자리를 피한다.',
        result: { type: 'mbti', value: 'T' },
      },
      {
        answer: '우리 강아지가 뭘 했다고 시비세요. 확실히 말한다.',
        result: { type: 'mbti', value: 'F' },
      },
    ],
  },
  {
    question: '내가 키우고 싶어하는 강아지는?',
    options: [
      {
        answer: '스테디한 인기는 이유가 있다. 잘 알려진 품종',
        result: { type: 'mbti', value: 'S' },
      },
      {
        answer: '특별한 강아지가 좋아. 잘 알려지지 않은 특이한 품종',
        result: { type: 'mbti', value: 'N' },
      },
    ],
  },
  {
    question: '둘 중에 내가 더 원하는 것이 있다면?',
    options: [
      {
        answer: '우리 강아지 건강하게만 자라다오~',
        result: { type: 'mbti', value: 'S' },
      },
      {
        answer: '우리 강아지랑 대화해보고 싶어!',
        result: { type: 'mbti', value: 'N' },
      },
    ],
  },
];
