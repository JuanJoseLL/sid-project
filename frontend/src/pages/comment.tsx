import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { NextPage } from 'next';
import styles from '../styles/Register.module.css';
import { fetchCommentsByEvent, createComment, fetchEvents } from '../services/commentServive';

interface Event {
  _id: string;
  titulo: string;
}

interface Comment {
  _id: string;
  texto: string;
}

const Comments: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [texto, setTexto] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [personId, setPersonId] = useState<string>('');

  useEffect(() => {
    if (selectedEvent) {
      fetchCommentsByEvent(selectedEvent).then(setComments).catch(console.error);
    }
  }, [selectedEvent]);

  useEffect(() => {
    fetchEvents().then(setEvents).catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const commentData = {
      texto,
      evento: selectedEvent,
      persona: personId,
    };

    try {
      await createComment(commentData);
      alert('Comentario agregado exitosamente.');
      setTexto('');
      if (selectedEvent) {
        fetchCommentsByEvent(selectedEvent).then(setComments).catch(console.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al agregar comentario');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Comentarios</title>
        <meta name="description" content="Ver y agregar comentarios a un evento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Comentarios</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Comentario:
            <textarea value={texto} onChange={(e) => setTexto(e.target.value)} required className={styles.textarea} />
          </label>
          <label>
            ID de la Persona:
            <input type="text" value={personId} onChange={(e) => setPersonId(e.target.value)} required className={styles.input} />
          </label>
          <label>
            Seleccionar Evento:
            <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)} required className={styles.select}>
              <option value="">Seleccionar Evento</option>
              {events.map(event => (
                <option key={event._id} value={event._id}>{event.titulo}</option>
              ))}
            </select>
          </label>
          <button type="submit" className={styles.button}>Agregar Comentario</button>
        </form>

        <div className={styles.comments}>
          {comments.map(comment => (
            <div key={comment._id} className={styles.comment}>
              <p>{comment.texto}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Comments;
