import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

interface Event {
  id: number;
  title: string;
  description: string;
  categories: string;
  date: string;
  location: string;
  attendees: string;
  facilitators: string;
  organizingFaculties: string;
  comments: string;
}

const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      // Aquí se hace la llamada a la API para obtener los detalles del evento
      fetch(`/api/events/${id}`)
        .then((response) => response.json())
        .then((data) => setEvent(data));
    }
  }, [id]);

  if (!event) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.description}>{event.description}</p>
        <p><strong>Categorías:</strong> {event.categories}</p>
        <p><strong>Fecha:</strong> {event.date}</p>
        <p><strong>Lugar:</strong> {event.location}</p>
        <p><strong>Asistentes:</strong> {event.attendees}</p>
        <p><strong>Facilitadores:</strong> {event.facilitators}</p>
        <p><strong>Facultades Organizadoras:</strong> {event.organizingFaculties}</p>
        <p><strong>Comentarios:</strong> {event.comments}</p>
      </main>
    </div>
  );
};

export default EventDetail;
