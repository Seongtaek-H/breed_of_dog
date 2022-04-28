import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Seo from "../../components/Seo";
import { ShareKakao } from "../../components/Share";
import { BREED_DETAIL } from "../../constants/BREED_DETAIL";

export default function Result({ name }) {
  const result = BREED_DETAIL[name] || "";
  const API_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

  useEffect(() => {
    initKakaoSdk();
  }, []);

  const initKakaoSdk = () => {
    const { Kakao } = window;
    if (!Kakao.isInitialized()) Kakao.init(API_KEY);
    console.log(window.Kakao);
  };

  return (
    <div>
      <Seo title={name} />
      <div className="container">
        <div className="img">
          <img src={`/dog_image/${name}.png`} width={300} />
        </div>
        <div className="name">{name} 💖</div>
        <div className="ctx">{result.context}</div>
        <div className="btn">
          <Link href="/">
            <a>다시하기</a>
          </Link>
        </div>
        <button
          className="kakao_btn"
          onClick={() => {
            ShareKakao(name, result.context);
          }}
        >
          <img
            width={30}
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          />
          <p>카카오톡 공유하기</p>
        </button>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5%;
          }

          .name {
            font-size: 1.5rem;
            font-weight: bold;
          }
          .ctx {
            margin-top: 2%;
            width: 380px;
            padding: 30px 10px;
            background-color: whitesmoke;
            font-size: 1.4rem;
            border: 2px cornflowerblue solid;
            border-radius: 10px;
          }
          .btn {
            background-color: plum;
            margin-top: 5%;
            padding: 3% 5%;
            cursor: pointer;
            border-radius: 10px;
            font-size: 1.5rem;
            font-weight: bolder;
          }
          .btn:hover {
            background-color: orange;
            transform: scale(1.2);
          }
          .kakao_btn {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 5%;
            width: 200px;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 10px;
            padding: ;
            background-color: #f9e000;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
}

export function getServerSideProps({ params: { name } }) {
  return {
    props: { name },
  };
}
