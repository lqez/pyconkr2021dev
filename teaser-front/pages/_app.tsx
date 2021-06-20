import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>파이콘 한국 2021</title>
        <link rel="icon" href="/img/profile_wht.png" />
      </Head>
      <Component {...pageProps} />
    </>
  ) 
}
export default MyApp