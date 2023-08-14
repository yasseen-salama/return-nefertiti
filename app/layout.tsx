"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import {Footer, Header} from './styles/globalStyle';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header>
        <h1>
          <span>return nefertiti  </span> 
        </h1>
      </Header>
      <body className={inter.className}>{children}</body>
      <Footer>© 2023 Yasseen Salama. All rights reserved.</Footer>
    </html>
  )
}
