import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Background>
      <Context>
        <Component {...pageProps} />
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
