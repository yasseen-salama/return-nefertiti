
"use client"

import Image from 'next/image'
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '../app/styles/globalStyle'; // adjust the path based on your project structure


const Nefertiti = dynamic(() => import('../components/Nefertiti'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Hello World!</title>
      </Head>
      <Nefertiti />
    </div>

  )
}
