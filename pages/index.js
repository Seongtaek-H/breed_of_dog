import Link from "next/link";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div className="home">
      <Seo title="Start" />
      <div className="home_img"></div>
      <div className="home_context">
        <p>1500만 반려동물 시대! </p>
        <p>우리에게 가장 친숙하고 이젠 가족이 된 강아지</p>
        <p>나에게 어울리는 견종은 어떤 견종일까?</p>
      </div>
      <div className="btn">
        <Link href="/test">
          <a>시작하기</a>
        </Link>
      </div>

      <style jsx>{`
        .home {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10%;
        }
        .home_img {
          background-color: blue;
          width: 350px;
          height: 350px;
        }
        .home_context {
          margin-top: 5%;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .btn {
          background-color: plum;
          margin-top: 3%;
          padding: 3% 5%;
          cursor: pointer;
          border-radius: 5%;
          font-size: 1.5rem;
          font-weight: bolder;
        }
        .btn:hover {
          background-color: orange;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
