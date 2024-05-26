import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

interface Event {
  _id: string;
  titulo: string;
  fecha: string;
  lugar: string;
}

const Events: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eventos</title>
        <meta name="description" content="Lista de eventos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Eventos</h1>

        <p className={styles.description}>
          Aquí puedes ver todos los eventos organizados por la universidad.
        </p>

        <Link href="/events/register">
          <button className={styles.button}>Registrar Nuevo Evento</button>
        </Link>

        <ul className={styles.list}>
          {events.map((event) => (
            <li key={event._id} className={styles.listItem}>
              <Link href={`/events/${event._id}`}>
                <div className={styles.card}>
                  <h2>{event.titulo}</h2>
                  <p>{event.fecha}</p>
                  <p>{event.lugar}</p>
                </div>
              </Link>
              <Link href={`/comments/${event._id}`}>
                <button className={styles.button}>Agregar Comentario</button>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Events;
