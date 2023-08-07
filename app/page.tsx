
"use client"

import Image from 'next/image'
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '../app/styles/globalStyle'; // adjust the path based on your project structure
import SyncLoader from "react-spinners/SyncLoader"; // Importing the spinner

const Nefertiti = dynamic(() => import('../components/Nefertiti'), {
  ssr: false,
  loading: ({ isLoading, error }) => {
    if (isLoading) {
      return (
        <div className="loader-container">
          <SyncLoader color="#ff0000" size={10} />
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
