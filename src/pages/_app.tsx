import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import Control from '../components/Control'
import Footer from '../components/Footer'
import '../styles/styles.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
      </Head>
      <RecoilRoot>
        <Control />
        <main className="root">
          <Component {...pageProps} />
        </main>
        <Footer />
      </RecoilRoot>
    </>
  )
}

export default App
