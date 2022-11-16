import React from 'react';
import styled from 'styled-components';

interface BarWidth {
  barWidth: number;
}

const ProgressBar = ({ sequence }: { sequence: number }) => {
  const barWidth = (sequence * 100) / 10;

  return (
    <Container>
      <p>{sequence}/10</p>
      <Bar>
        <Progress barWidth={barWidth}></Progress>
      </Bar>
    </Container>
  );
};
const Container = styled.div`
  p {
    margin: 3% 3% 0% 3%;
  }
`;
const Bar = styled.div`
  margin: 3% 5% 5% 5%;
  background-color: #dcdcde;
  width: 90%;
  height: 15px;
`;

const Progress = styled.div<BarWidth>`
  background-color: orange;
  width: ${(props) => props.barWidth}%;
  height: 100%;
`;

export default ProgressBar;
