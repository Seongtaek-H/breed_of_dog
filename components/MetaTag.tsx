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
      <meta title='나에게 어울리는 견종은?' />
      <meta name='description' content='나에게 어울리는 견종은' />
      <meta
        property='og:url'
        content={`https://breed-of-dog.vercel.app/result/${name}`}
      />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={`나에게 어울리는 견종은? ${name}`} />
      <meta property='og:description' content={context} />
      <meta
        property='og:image'
        content={`https://raw.githubusercontent.com/Seongtaek-H/breed_of_dog/master/public/dog_image/${name}.png`}
      />
    </Head>
  );
}

export default Metatag;
