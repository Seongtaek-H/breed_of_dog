import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Seo from './Seo';

const Start = (): JSX.Element => (
  <Container>
    <Seo title='나에게 어울리는 견종은?' />
    <div className='home_img'>
      <Image src='/poster.png' width={360} height={500} alt='Loading' />
    </div>
    <Context>
      <p>1500만 반려동물 시대! </p>
      <p>우리에게 가장 친숙하고 이젠 가족이 된 강아지</p>
      <p>나에게 어울리는 견종은 어떤 견종일까?</p>
    </Context>
    <StartBtn href='/test'>시작하기</StartBtn>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
const Context = styled.div`
  margin-top: 1%;
  font-size: 1.1rem;
  font-weight: bold;
  p {
    margin: 12px;
  }
`;
const StartBtn = styled(Link)`
  background-color: black;
  color: white;
  margin-top: 3%;
  padding: 3% 5%;
  cursor: pointer;
  border-radius: 5%;
  font-size: 1.5rem;
  font-weight: bolder;
  :hover {
    background-color: orange;
    transform: scale(1.1);
  }
`;

export default Start;
