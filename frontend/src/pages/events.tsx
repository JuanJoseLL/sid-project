import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

const Events: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Aquí se debería hacer la llamada a la API para obtener la lista de eventos
    fetch('/api/events')
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
            <li key={event.id} className={styles.listItem}>
              <Link href={`/events/${event.id}`}>
                <div className={styles.card}>
                  <h2>{event.title}</h2>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Events;
