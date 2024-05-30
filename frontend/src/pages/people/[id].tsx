import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

interface City {
  name: string;
  department: string;
  country: string;
}

interface Person {
  id: string;
  username: string;
  fullName: string;
  relationType: string;
  email: string;
  city: City;
  isEmployee: boolean;
}

const PersonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/people/${id}`)
        .then((response) => response.json())
        .then((data) => setPerson(data));
    }
  }, [id]);

  if (!person) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>{person.fullName}</title>
        <meta name="description" content={`Detalles de ${person.fullName}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{person.fullName}</h1>
        <p className={styles.description}><strong>Nombre de Usuario:</strong> {person.username}</p>
        <p className={styles.description}><strong>Tipo de Relación:</strong> {person.relationType}</p>
        <p className={styles.description}><strong>Email:</strong> {person.email}</p>
        <p className={styles.description}><strong>Ciudad:</strong> {person.city.name}, {person.city.department}, {person.city.country}</p>
        <p className={styles.description}><strong>Es Empleado:</strong> {person.isEmployee ? 'Sí' : 'No'}</p>
      </main>
    </div>
  );
};

export default PersonDetail;
