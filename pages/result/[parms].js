import { useRouter } from "next/router";
import { useEffect } from "react";
import Seo from "../../components/Seo";
import { BREED_DETAIL } from "../../constants/BREED_DETAIL";

export default function Result() {
  const router = useRouter();

  const result = BREED_DETAIL[router.query.parms] || "";

  return (
    <div>
      <Seo title="result" />
      <div className="container">
        <div className="img"></div>
        <div className="name">{router.query.parms}💖</div>
        <div className="ctx">{result.context}</div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10%;
          }
          .img {
            background-color: blue;
            width: 350px;
            height: 350px;
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
        `}</style>
      </div>
    </div>
  );
}
