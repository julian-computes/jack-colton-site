import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>julian-computes</title>
        <meta name="description" content="julian-computes neocities site"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>

        </div>
      </main>
    </>
  )
}
