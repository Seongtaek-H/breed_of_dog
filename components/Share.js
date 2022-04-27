export const ShareKakao = () => {
  Kakao.Link.sendCustom({
    templateId: 3135,
    templateArgs: {
      title:
        "판교 맛집에 들르다. 다양하고 풍부한 퓨전 한정식. 깔끔한 내부 인테리어 라이언",
      description:
        "부담없는 가격에 푸짐하게 즐기는 점심메뉴 런치한정식, 불고기정식, 돼지 김치찌개 등",
    },
  });
};
