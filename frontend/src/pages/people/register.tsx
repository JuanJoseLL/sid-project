import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Register.module.css';
import { createPerson } from '../../services/peopleService';

const RegisterPerson: NextPage = () => {
  const [id, setId] = useState('');
  const [nombre_usuario, setNombreUsuario] = useState('');
  const [nombre_completo, setNombreCompleto] = useState('');
  const [tipo_relacion, setTipoRelacion] = useState('');
  const [email, setEmail] = useState('');
  const [nombre_ciudad, setNombreCiudad] = useState('');
  const [departamento_ciudad, setDepartamentoCiudad] = useState('');
  const [pais_ciudad, setPaisCiudad] = useState('');
  const [es_empleado, setEsEmpleado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const datosPersona = {
      id,
      nombre_usuario,
      nombre_completo,
      tipo_relacion,
      email,
      ciudad: {
        nombre: nombre_ciudad,
        departamento: departamento_ciudad,
        pais: pais_ciudad,
      },
      es_empleado,
    };

    try {
      console.log(datosPersona);
      await createPerson(datosPersona);
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
            <input type="text" value={nombre_usuario} onChange={(e) => setNombreUsuario(e.target.value)} required />
          </label>
          <label>
            Nombre Completo:
            <input type="text" value={nombre_completo} onChange={(e) => setNombreCompleto(e.target.value)} required />
          </label>
          <label>
            Tipo de Relación:
            <select value={tipo_relacion} onChange={(e) => setTipoRelacion(e.target.value)} required>
              <option value="">Seleccionar Tipo de Relación</option>
              <option value="Profesor">Profesor</option>
              <option value="Estudiante">Estudiante</option>
              <option value="Graduado">Graduado</option>
              <option value="Empresario">Empresario</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Directivo">Directivo</option>
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
              <input type="text" value={nombre_ciudad} onChange={(e) => setNombreCiudad(e.target.value)} required />
            </label>
            <label>
              Departamento:
              <input type="text" value={departamento_ciudad} onChange={(e) => setDepartamentoCiudad(e.target.value)} required />
            </label>
            <label>
              País:
              <input type="text" value={pais_ciudad} onChange={(e) => setPaisCiudad(e.target.value)} required />
            </label>
          </fieldset>
          <div className={styles.employeeContainer}>
            <label>
              <span>¿Es Empleado? ‎ ‎ ‎
                <input type="checkbox" checked={es_empleado} onChange={(e) => setEsEmpleado(e.target.checked)} />
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
