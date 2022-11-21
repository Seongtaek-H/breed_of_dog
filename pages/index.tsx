import React, { useState } from 'react';
import Header from '../components/Header';
import Metatag from '../components/MetaTag';
import Start from '../components/Start';

export default function Home() {
  return (
    <>
      <Metatag />
      <Header />
      <Start />
    </>
  );
}
