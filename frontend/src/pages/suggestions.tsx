import { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import styles from '../styles/Register.module.css';
import { fetchEvents, fetchPeople } from '../services/commentService';

interface Person {
    _id: string;
    nombre_completo: string;
  }

const SuggestionsForm: NextPage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [texto, setTexto] = useState('');
  const [selectedPersonId, setSelectedPersonId] = useState<string>('');

  useEffect(() => {
    fetchPeople().then(setPeople).catch(console.error);
  }, []);

    const fetchEvents = async () => {
    const response = await fetch(`localhost:4000/events`);
    if (!response.ok) {
      throw new Error('Error fetching events');
    }
    return response.json();
  };

  const handleSuggestion = async () => {
    console.log(selectedPersonId)
    var events = fetchEvents();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sugerencias</title>
        <meta name="description" content="Ver y enviar sugerencias a una persona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sugerencias</h1>
          <label>
            Seleccionar Persona:
            <select value={selectedPersonId} onChange={(e) => setSelectedPersonId(e.target.value)} required className={styles.select}>
              <option value="">Seleccionar Persona</option>
              {people.map(person => (
                <option key={person._id} value={person.nombre_completo}>{person.nombre_completo}</option>
              ))}
            </select>
          </label>
          <button type="submit" className={styles.button} onClick={handleSuggestion}>Enviar Sugerencia</button>
      </main>
    </div>
  );
};

export default SuggestionsForm;
