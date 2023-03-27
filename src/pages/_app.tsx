import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jack Colton Art</title>
        <meta name="description" content="Jack Colton Art neocities site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="md:flex">
        <Navbar />
        <div className="border-slate-300 border-l max-w-4xl">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
