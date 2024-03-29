import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from "../components/Footer";
import "../styles/styles.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const title = "アイカツ格言ボタン！";
  const description = "アイカツ格言が再生されるボタン置き場";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <meta name="theme-color" content="#087da1" key="themeColor" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aikatsu.odayaka.work/" />
        <meta property="og:site_name" content={title} />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/CHCyzlqdkS0q16jZmhWYPCWTCOIaMBxjwGm3UVJx4S8123m9A22_vDHIHGmclIcADnIhjHHPChQMTU58qiwoEFFneLHbbVf7bhKUTY90l4b0D033MguOc1JoVVexrtbtEA17tZ7GdA=w1200"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <main className="root">
          <Component {...pageProps} />
        </main>
        <Footer />
      </RecoilRoot>
    </>
  );
};

export default App;
