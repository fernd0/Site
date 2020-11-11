import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CT Cursos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://urlgeni.us/instagram/VUFU">CT Cursos</a>
        </h1>
        <h2>Lançamento de produtos digitais.</h2>
      </main>
    </div>
  )
}
