import React from 'react';
import Head from 'next/head';

const Seo = ({ title }: { title: string }) => (
  <Head>
    <title> {title} | 나에게 어울리는 견종은?</title>
  </Head>
);

export default Seo;
