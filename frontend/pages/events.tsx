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
    // Ejemplo: fetch('/api/events').then(response => response.json()).then(data => setEvents(data));
    setEvents([
      { id: 1, title: 'Evento 1', date: '2024-05-01', location: 'Aula Magna' },
      { id: 2, title: 'Evento 2', date: '2024-06-01', location: 'Auditorio' }
    ]);
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

        <Link href="/events/register" passHref>
          <button className={styles.button}>Registrar Nuevo Evento</button>
        </Link>


        <ul className={styles.list}>
          {events.map((event) => (
            <li key={event.id} className={styles.listItem}>
              <Link href={`/events/${event.id}`} passHref>
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
