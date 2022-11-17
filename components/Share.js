export const ShareKakao = (name, ctx) => {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: `나에게 어울리는 견종은? <${name}>`,
      description: `${ctx}`,
      imageUrl: `https://raw.githubusercontent.com/Seongtaek-H/breed_of_dog/master/public/dog_image/${name}.png`,
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        androidExecutionParams: 'test',
      },
    },

    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: `https://breed-of-dog.vercel.app/result/${name}`,
          webUrl: `https://breed-of-dog.vercel.app/result/${name}`,
        },
      },
    ],
  });
};
