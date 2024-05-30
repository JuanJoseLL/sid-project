import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMyContext } from '../components/context/MyContext';
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
          <Link href="/events" legacyBehavior>
            <a className={styles.card}>
              <h2>Eventos &rarr;</h2>
              <p>Explora los eventos organizados por la universidad.</p>
            </a>
          </Link>

          <Link href="/people" legacyBehavior>
            <a className={styles.card}>
              <h2>Asistentes &rarr;</h2>
              <p>Gestiona la lista de asistentes.</p>
            </a>
          </Link>

          <Link href="/comment" legacyBehavior>
            <a className={styles.card}>
              <h2>Comentarios &rarr;</h2>
              <p>Realiza un comentario sobre un evento.</p>
            </a>
          </Link>
          <Link href="/suggestions" legacyBehavior>
            <a className={styles.card}>
              <h2>Recomendaciones de Eventos &rarr;</h2>
              <p>Accede para mirar los eventos sugeridos para una persona.</p>
            </a>
          </Link>
        </div>

        
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  );
};

export default Home;
