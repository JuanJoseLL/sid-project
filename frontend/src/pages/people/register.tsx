import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Register.module.css';
import { createPerson } from '../../services/peopleService';

const RegisterPerson: NextPage = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [relationType, setRelationType] = useState('');
  const [email, setEmail] = useState('');
  const [cityName, setCityName] = useState('');
  const [cityDepartment, setCityDepartment] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [isEmployee, setIsEmployee] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const personData = {
      id,
      username,
      fullName,
      relationType,
      email,
      city: {
        name: cityName,
        department: cityDepartment,
        country: cityCountry,
      },
      isEmployee,
    };

    try {
      await createPerson(personData);
      alert('Persona registrada exitosamente');
    } catch (error) {
      console.error('Error al registrar la persona', error);
      alert('Error al registrar la persona');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Registrar Asistente o Conferencista</title>
        <meta name="description" content="Registrar una nueva persona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registrar Nuevo Asistente o Conferencista</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Cédula de Ciudadanía:
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} required />
          </label>
          <label>
            Nombre de Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </label>
          <label>
            Nombre Completo:
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
          </label>
          <label>
            Tipo de Relación:
            <select value={relationType} onChange={(e) => setRelationType(e.target.value)} required>
              <option value="">Seleccionar Tipo de Relación</option>
              <option value="student">Profesor</option>
              <option value="faculty">Estudiante</option>
              <option value="staff">Graduado</option>
              <option value="staff">Empresario</option>
              <option value="staff">Administrativo</option>
              <option value="staff">Directivo</option>
            </select>
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <fieldset>
            <legend>Ciudad:</legend>
            <label>
              Nombre:
              <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} required />
            </label>
            <label>
              Departamento:
              <input type="text" value={cityDepartment} onChange={(e) => setCityDepartment(e.target.value)} required />
            </label>
            <label>
              País:
              <input type="text" value={cityCountry} onChange={(e) => setCityCountry(e.target.value)} required />
            </label>
          </fieldset>
          <div className={styles.employeeContainer}>
            <label>
              <span>¿Es Empleado? ‎ ‎ ‎
                <input type="checkbox" checked={isEmployee} onChange={(e) => setIsEmployee(e.target.checked)} />
              </span>
            </label>
          </div>
          <button type="submit" className={styles.button}>Registrar Persona</button>
        </form>
        <Link href="/">
          <button className={styles.backButton}>Volver</button>
        </Link>
      </main>
    </div>
  );
};

export default RegisterPerson;