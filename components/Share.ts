const Kakao_API_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;
const FB_API_ID = process.env.NEXT_PUBLIC_FB_ID;

export const ShareKakao = (name: string, ctx: string) => {
  const { Kakao }: any = window;
  if (!Kakao.isInitialized()) Kakao.init(Kakao_API_KEY);

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

export const ShareFB = (name: string) => {
  const { FB }: any = window;
  FB.init({
    appId: FB_API_ID,
    status: true,
    xfbml: true,
    version: 'v2.7',
  });
  FB.ui(
    {
      display: 'popup',
      method: 'share',
      href: `https://breed-of-dog.vercel.app/result/${name}`,
    },
    function (response: any) {}
  );
};

export const copyLink = async (name: string) => {
  try {
    await navigator.clipboard.writeText(
      `https://breed-of-dog.vercel.app/result/${name}`
    );
    alert('링크를 복사했습니다.');
  } catch (error) {
    alert('링크 복사에 실패했어요.');
  }
};
