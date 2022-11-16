import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Start from '../components/Start';

export default function Home() {
  const [goTest, setGoTest] = useState(false);
  console.log(goTest);
  return (
    <Background>
      <Context>
        <Header />
        {goTest ? '' : <Start setGoTest={setGoTest} />}
      </Context>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c5d9ed;
  width: 100%;
  height: 100%;
`;

const Context = styled.div`
  background-color: beige;
  width: 425px;
  height: 100%;
  min-height: 100vh;
`;
