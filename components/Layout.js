import { useEffect } from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="background">
      <div className="container">
        <Header />
        {children}
      </div>
      <style jsx>{`
        .background {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #c5d9ed;
          height: 100%;
        }
        .container {
          background-color: beige;
          width: 425px;
          height: 100%;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
