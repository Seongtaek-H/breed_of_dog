import Image from "next/image";
import Link from "next/link";
import Seo from "../../components/Seo";
import { BREED_DETAIL } from "../../constants/BREED_DETAIL";

export default function Result({ name }) {
  const result = BREED_DETAIL[name] || "";

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
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10%;
          }

          .name {
            margin-top: 5%;
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
            margin-top: 1%;
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
    </div>
  );
}

export function getServerSideProps({ params: { name } }) {
  return {
    props: { name },
  };
}
