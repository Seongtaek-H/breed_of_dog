import React, { useState, useEffect } from 'react';
import ProgressBar from '../components/ProgressBar';
import { MbtiType, QUESTION_LIST, SizeType } from '../constants/QUESTION_LIST';
import { BREED } from '../constants/BREED';
import { useRouter } from 'next/router';
import Seo from '../components/Seo';
import styled from 'styled-components';
import Header from '../components/Header';

type Mbti = {
  [key: string]: number;
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
};

const Test = () => {
  const router = useRouter();

  const [sequence, setSequence] = useState(1);
  const [finish, setFinish] = useState(false);
  const { question, options } = QUESTION_LIST[sequence - 1];
  const [size, setSize] = useState('');
  const [mbti, setMbti] = useState<Mbti>({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
  });

  const typeDefine = (mbti: Mbti) => {
    let res = '';
    if (mbti.E > mbti.I) {
      res += 'E';
    } else {
      res += 'I';
    }
    if (mbti.S > mbti.N) {
      res += 'S';
    } else {
      res += 'N';
    }
    if (mbti.T > mbti.F) {
      res += 'T';
    } else {
      res += 'F';
    }
    return res;
  };

  const handleOnclick = (result: {
    type: 'size' | 'mbti';
    value: SizeType | MbtiType;
  }) => {
    if (result.type === 'size') {
      setSize(result.value);
    } else if (result.type === 'mbti') {
      setMbti({
        ...mbti,
        [result.value]: mbti[result.value] + 1,
      });
    }
    if (sequence < 10) setSequence(sequence + 1);
    else setFinish(true);
  };

  useEffect(() => {
    if (!finish) return;
    const type = typeDefine(mbti);
    const res = BREED[size][type];
    router.push(`/result/${res}`);
  }, [finish]);

  return (
    <>
      <Seo title='Testing...' />
      <Header />
      <ProgressBar sequence={sequence}></ProgressBar>
      <Container>
        <Question>{question}</Question>
        <OptionContainer>
          {options.map((option) => (
            <Option
              key={option.answer}
              onClick={() => handleOnclick(option.result)}
            >
              {option.answer}
            </Option>
          ))}
        </OptionContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const Question = styled.div`
  width: 380px;
  padding: 30px 10px;
  background-color: aliceblue;
  font-size: 1.3rem;
  font-weight: bolder;
  border: 2px cornflowerblue solid;
  border-radius: 15px;
`;

const OptionContainer = styled.div`
  font-size: 1.2rem;
`;
const Option = styled.div`
  width: 350px;
  cursor: pointer;
  border: 1.5px palevioletred solid;
  border-radius: 10px;
  margin-top: 5%;
  padding: 4%;
  background-color: whitesmoke;
  :hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;

export default Test;
