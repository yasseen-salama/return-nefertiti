"use client"

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import {GlobalStyle} from '../app/styles/globalStyle'; 

const Nefertiti = dynamic(() => import('../components/Nefertiti'), {
  ssr: false,
  loading: ({ isLoading, error }) => {
    if (isLoading) {
      return (
        <div>
        </div>
      );
    }
    if (error) {
      return <p>Sorry, there was a problem loading the page. Please retry again.</p>;
    }
    return null;
  },
});

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>return nefertiti</title>
      </Head>
      <Nefertiti />
    </div>

  )
}
