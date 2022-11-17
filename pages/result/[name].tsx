import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../../components/Seo';
import { ShareKakao } from '../../components/Share';
import { BREED_DETAIL } from '../../constants/BREED_DETAIL';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const API_KEY = process.env.NEXT_PUBLIC_KAKAO_KEY;

export default function Result() {
  const router = useRouter();
  const { name }: string = router.query;
  console.log(name);
  const result = BREED_DETAIL[name] || '';

  useEffect(() => {
    initKakaoSdk();
  }, []);

  const initKakaoSdk = () => {
    const { Kakao }: any = window;
    if (!Kakao.isInitialized()) Kakao.init(API_KEY);
  };

  return (
    <>
      <Seo title={name} />
      <Container>
        <div>
          <Image
            src={`/dog_image/${name}.png`}
            width={300}
            height={300}
            alt='Loading'
            priority
          />
        </div>
        <Name>{name} 💖</Name>
        <Context>{result.context}</Context>
        <ReplayBtn>
          <Link href='/'>다시하기</Link>
        </ReplayBtn>
        <KaKaoShareBtn
          onClick={() => {
            ShareKakao(name, result.context);
          }}
        >
          <Image width={30} height={30} src='/kakao_btn.png' alt='' />
          <p>카카오톡 공유하기</p>
        </KaKaoShareBtn>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Context = styled.div`
  margin-top: 2%;
  width: 380px;
  padding: 30px 10px;
  background-color: whitesmoke;
  font-size: 1.4rem;
  border: 2px cornflowerblue solid;
  border-radius: 10px;
`;

const ReplayBtn = styled.div`
  background-color: plum;
  margin-top: 5%;
  padding: 3% 5%;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bolder;
  :hover {
    background-color: orange;
    transform: scale(1.2);
  }
`;
const KaKaoShareBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: 200px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px;
  background-color: #f9e000;
  border: none;
  cursor: pointer;
`;
