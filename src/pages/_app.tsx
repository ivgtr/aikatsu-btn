import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../assets/style.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
      </Head>
      <main className="root">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
