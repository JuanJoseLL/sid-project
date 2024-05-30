import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
import { getPeople } from '../services/peopleService';

interface Person {
  id: number;
  username: string;
  fullName: string;
  relationType: string;
  email: string;
  city: {
    name: string;
    department: string;
    country: string;
  };
  isEmployee: boolean;
}

const People: NextPage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPeople()
      .then((data) => setPeople(data))
      .catch((error) => console.error('Failed to fetch people', error));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Personas</title>
        <meta name="description" content="Lista de personas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Asistentes y Conferencistas</h1>

        <p className={styles.description}>
          Aquí puedes ver la lista de Asistentes o Conferencistas.
        </p>

        <Link href="/people/register">
          <button className={styles.button}>Registrar Nueva Asistente o Conferencista</button>
        </Link>

        <ul className={styles.list}>
          {people.map((person) => (
            <li key={person.id} className={styles.listItem}>
              <Link href={`/people/${person.id}`}>
                <div className={styles.card}>
                  <h2>{person.username}</h2>
                  <p>{person.fullName}</p>
                  <p>{person.relationType}</p>
                  <p>{person.email}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/">
          <button className={styles.backButton}>Volver</button>
        </Link>
      </main>
    </div>
    
  );
};

export default People;
