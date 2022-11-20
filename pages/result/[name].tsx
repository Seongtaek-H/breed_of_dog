import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../../components/Seo';
import { ShareKakao } from '../../components/Share';
import { BREED_DETAIL } from '../../constants/BREED_DETAIL';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';
import Header from '../../components/Header';

const Result = () => {
  const router = useRouter();
  const name = router.query.name as string;
  const result = BREED_DETAIL[name];

  if (name) {
    return (
      <>
        <Seo title={name} />
        <Header />
        <Container>
          <DogImage>
            <Image
              src={`/dog_image/${name}.png`}
              width={300}
              height={300}
              alt='Loading'
              placeholder='blur'
              blurDataURL={`/dog_image/${name}.png`}
            />
            <Name>{name} 💖</Name>
          </DogImage>
          <Context>{result.context}</Context>
          <KaKaoShareBtn
            onClick={() => {
              ShareKakao(name, result.context);
            }}
          >
            <Image width={30} height={30} src='/kakao_btn.png' alt='' />
            <p>카카오톡 공유하기</p>
          </KaKaoShareBtn>
          <ReplayBtn>
            <Link href='/'>다시하기</Link>
          </ReplayBtn>
        </Container>
      </>
    );
  }
  return <Loading />;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;
const DogImage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  border: 2px solid grey;
  border-radius: 20px;
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Context = styled.div`
  margin-top: 2%;
  width: 380px;
  padding: 12px;
  background-color: whitesmoke;
  font-size: 1.2rem;
  border: 2px cornflowerblue solid;
  border-radius: 10px;
`;

const ReplayBtn = styled.div`
  background-color: black;
  color: white;
  width: 80%;
  text-align: center;
  margin-top: 5%;
  padding: 3% 5%;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: bolder;
  :hover {
    background-color: orange;
    transform: scale(1.1);
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

export default Result;
