import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { NextPage } from 'next';
import styles from '../styles/Register.module.css';
import { fetchCommentsByEvent, createComment, fetchEvents, fetchPeople } from '../services/commentService';

interface Event {
  _id: string;
  titulo: string;
}

interface Person {
  _id: string;
  nombre_completo: string;
}

const Comments: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [texto, setTexto] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedEventId, setSelectedEventId] = useState<string>('');
  const [selectedPersonId, setSelectedPersonId] = useState<string>('');

  useEffect(() => {
    if (selectedEventId) {
      fetchCommentsByEvent(selectedEventId).then(setComments).catch(console.error);
    }
  }, [selectedEventId]);

  useEffect(() => {
    fetchEvents().then(setEvents).catch(console.error);
    fetchPeople().then(setPeople).catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const commentData = {
      texto,
      evento: selectedEventId,
      persona: selectedPersonId,
    };

    try {
      await createComment(selectedEventId, commentData);
      alert('Comentario agregado exitosamente.');
      setTexto('');
      if (selectedEventId) {
        fetchCommentsByEvent(selectedEventId).then(setComments).catch(console.error);
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
            Seleccionar Persona:
            <select value={selectedPersonId} onChange={(e) => setSelectedPersonId(e.target.value)} required className={styles.select}>
              <option value="">Seleccionar Persona</option>
              {people.map(person => (
                <option key={person._id} value={person._id}>{person.nombre_completo}</option>
              ))}
            </select>
          </label>
          <label>
            Seleccionar Evento:
            <select value={selectedEventId} onChange={(e) => setSelectedEventId(e.target.value)} required className={styles.select}>
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
