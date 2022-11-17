import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => (
  <Wrapper>
    <LoadingIcon></LoadingIcon>
    <LoadingText>LOADING</LoadingText>
  </Wrapper>
);

const rotateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingIcon = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  border: 3px solid transparent;
  border-color: transparent #e45635 transparent #e45635;
  animation: ${rotateLoading} 1s linear 0s infinite normal;
  transform-origin: 50% 50%;
`;

const LoadingText = styled.div`
  color: black;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  text-align: center;
  width: 100px;
`;

export default Loading;
