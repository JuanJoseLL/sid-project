// src/pages/index.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { useMyContext } from '../src/components/context/MyContext';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { value, setValue } = useMyContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>EventosU</title>
        <meta name="description" content="Gestión de eventos para la universidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="#">EventosU</a>
        </h1>

        <p className={styles.description}>
          Gestiona tus eventos universitarios de forma sencilla
        </p>

        <div className={styles.grid}>
          <a href="/events" className={styles.card}>
            <h2>Ver Eventos &rarr;</h2>
            <p>Explora los eventos organizados por la universidad.</p>
          </a>

          <a href="/attendees" className={styles.card}>
            <h2>Asistentes &rarr;</h2>
            <p>Gestiona la lista de asistentes.</p>
          </a>

          <a href="/facilitators" className={styles.card}>
            <h2>Facilitadores &rarr;</h2>
            <p>Gestiona la lista de facilitadores.</p>
          </a>
        </div>

        <div className={styles.context}>
          <h1>Current Value: {value}</h1>
          <button onClick={() => setValue('new value')}>Change Value</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/nextjs.svg" alt="Next.js Logo" />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
