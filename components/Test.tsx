import ProgressBar from './ProgressBar';
import { useState, useEffect, useCallback } from 'react';
import { QUESTION_LIST } from '../constants/QUESTION_LIST';
import { BREED } from '../constants/BREED';
import { useRouter } from 'next/router';
import Seo from './Seo';
import styled from 'styled-components';

const Test = () => {
  const router = useRouter();

  const [sequence, setSequence] = useState(1);
  const [finish, setFinish] = useState(false);
  const question = QUESTION_LIST[sequence - 1];

  const [size, setSize] = useState('');
  const [성격, set성격] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
  });

  const typeDefine = useCallback((성격) => {
    let res = '';
    if (성격.E > 성격.I) {
      res += 'E';
    } else {
      res += 'I';
    }
    if (성격.S > 성격.N) {
      res += 'S';
    } else {
      res += 'N';
    }
    if (성격.T > 성격.F) {
      res += 'T';
    } else {
      res += 'F';
    }
    return res;
  }, []);

  const handleOnclick = (option) => {
    if (option.type.type === 'size') {
      setSize(option.type.value);
    } else {
      set성격({ ...성격, [option.type.value]: 성격[option.type.value] + 1 });
    }
    if (sequence < 10) setSequence(sequence + 1);
    else setFinish(true);
  };

  useEffect(() => {
    if (!finish) return;
    const type = typeDefine(성격);
    const res = BREED[size][type];
    router.push(`/result/${res}`);
  }, [finish]);

  return (
    <>
      <Seo title='Test' />
      <ProgressBar sequence={sequence}></ProgressBar>
      <Container>
        <Question>{question.q}</Question>
        <OptionContainer>
          {question.options.map((option) => (
            <Option key={option.ans} onClick={() => handleOnclick(option)}>
              {option.ans}
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
  border-radius: 10px;
`;

const OptionContainer = styled.div`
  font-size: 1.2rem;
`;
const Option = styled.div`
  width: 350px;
  cursor: pointer;
  border: 1px palevioletred solid;
  margin-top: 5%;
  padding: 4%;
  background-color: whitesmoke;
  :hover {
    background-color: pink;
    transform: scale(1.1);
  }
`;

export default Test;
