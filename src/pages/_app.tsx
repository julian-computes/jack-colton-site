import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>Jack Colton Art</title>
      <meta name='description' content='Jack Colton Art neocities site'/>
      <meta name='viewport' content='width=device-width, initial-scale=1'/>
    </Head>
    <main className='flex'>
      <Navbar />
      <Component {...pageProps} />
    </main>
  </>
}
