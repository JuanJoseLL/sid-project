// src/pages/events.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Events: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eventos</title>
        <meta name="description" content="Lista de eventos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Eventos
        </h1>

        <p className={styles.description}>
          Aquí puedes ver todos los eventos organizados por la universidad.
        </p>
      </main>
    </div>
  );
};

export default Events;
