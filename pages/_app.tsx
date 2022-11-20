import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Background>
      <Context>
        <Script src='https://developers.kakao.com/sdk/js/kakao.js' />
        <Script src='https://connect.facebook.net/en_US/sdk.js' />
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
