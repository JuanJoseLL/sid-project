import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { createAttendee } from '../../services/attendeeService';

const RegisterAttendee: NextPage = () => {
  const [identifier, setIdentifier] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [relationshipType, setRelationshipType] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const attendeeData = {
      identifier,
      username,
      fullName,
      relationshipType,
      email,
      city
    };

    try {
      await createAttendee(attendeeData);
      alert('Attendee registered successfully');
    } catch (error) {
      console.error('Failed to create attendee', error);
      alert('Failed to create attendee');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Registrar Asistente</title>
        <meta name="description" content="Registrar un nuevo asistente o conferencista" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registrar Nuevo Asistente o Conferencista</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Identificador:
            <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
          </label>
          <label>
            Nombre de Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Nombre Completo:
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>
          <label>
            Tipo de Relación:
            <input type="text" value={relationshipType} onChange={(e) => setRelationshipType(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Ciudad:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          </label>
          <button type="submit" className={styles.button}>Registrar Asistente</button>
        </form>
      </main>
    </div>
  );
};

export default RegisterAttendee;
