import React from 'react';
import Head from 'next/head';

interface MetatagProps {
  name?: string;
  context?: string;
}

function Metatag({ name, context = '나에게 어울리는 견종은?' }: MetatagProps) {
  return (
    <Head>
      <title>나에게 어울리는 견종은?</title>
      <link rel='icon' href='/favicon.ico' />
      <meta property='og:type' content='article' />
      {name ? (
        <meta property='og:title' content={`나에게 어울리는 견종은? ${name}`} />
      ) : (
        <meta property='og:title' content={'나에게 어울리는 견종은?'} />
      )}
      {name ? (
        <meta
          property='og:url'
          content={`https://breed-of-dog.vercel.app/result/${name}`}
        />
      ) : (
        <meta property='og:url' content={`https://breed-of-dog.vercel.app`} />
      )}
      {context ? (
        <meta property='og:description' content={context} />
      ) : (
        <meta
          property='og:description'
          content='1500만 반려동물 시대! 나에게 가장 어울리는 견종은 어떤 견종일까?'
        />
      )}
      {name ? (
        <meta
          property='image'
          content={`https://raw.githubusercontent.com/Seongtaek-H/breed_of_dog/master/public/dog_image/${name}.png`}
        />
      ) : (
        <meta
          property='image'
          content={`https://raw.githubusercontent.com/Seongtaek-H/breed_of_dog/master/public/poster.png`}
        />
      )}
    </Head>
  );
}

export default Metatag;
