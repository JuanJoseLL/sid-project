import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Register.module.css';
import { createEvent, getPeople } from '../../services/eventService'; // Asumiendo que tienes funciones para obtener la lista de asistentes y facilitadores desde el backend

const Register: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [date, setDate] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationAddress, setLocationAddress] = useState('');
  const [cityName, setCityName] = useState('');
  const [cityDepartment, setCityDepartment] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [selectedAttendees, setSelectedAttendees] = useState<string[]>([]);
  const [selectedFacilitators, setSelectedFacilitators] = useState<string[]>([]);
  const [organizingFaculties, setOrganizingFaculties] = useState<string[]>([]);
  const [attendees, setAttendees] = useState<string[]>([]);
  const [facilitators, setFacilitators] = useState<string[]>([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const attendeesList = await getPeople();
        setAttendees(attendeesList);
      } catch (error) {
        console.error('Error fetching attendees:', error);
      }
    };

    const fetchFacilitators = async () => {
      try {
        const facilitatorsList = await getPeople();
        setFacilitators(facilitatorsList);
      } catch (error) {
        console.error('Error fetching facilitators:', error);
      }
    };

    fetchAttendees();
    fetchFacilitators();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      titulo: title,
      descripcion: description,
      categorias: categories,
      fecha: date,
      lugar: {
        nombre: locationName,
        direccion: locationAddress,
        ciudad: {
          nombre: cityName,
          departamento: cityDepartment,
          pais: cityCountry,
        },
      },
      asistentes: selectedAttendees,
      conferencistas: selectedFacilitators,
      facultades_organizadoras: organizingFaculties,
    };
    try {
      console.log(eventData);
      await createEvent(eventData);
      alert('Event registered successfully');
    } catch (error) {
      console.error('Error:', error);
      if (error.message.includes('Event with the same title already exists')) {
        alert('An event with the same title already exists. Please choose a different title.');
      } else {
        alert('Failed to register event');
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Registrar Evento</title>
        <meta name="description" content="Registrar un nuevo evento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registrar Nuevo Evento</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Título:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
          </label>
          <label>
            Descripción:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.textarea} />
          </label>
          <label>
            Categorías:
            <select
              value={categories}
              onChange={(e) => setCategories(Array.from(e.target.selectedOptions, option => option.value))}
              multiple
              className={styles.select}
            >
              <option value="artistico">Artístico</option>
              <option value="informativo">Informativo</option>
              <option value="laboral">Laboral</option>
            </select>
          </label>
          <label>
            Fecha:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.input} />
          </label>
          <fieldset>
            <legend>Lugar</legend>
            <label>
              Nombre:
              <input type="text" value={locationName} onChange={(e) => setLocationName(e.target.value)} className={styles.input} />
            </label>
            <label>
              Dirección:
              <input type="text" value={locationAddress} onChange={(e) => setLocationAddress(e.target.value)} className={styles.input} />
            </label>
            <fieldset>
              <legend>Ciudad</legend>
              <label>
                Nombre:
                <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} className={styles.input} />
              </label>
              <label>
                Departamento:
                <input type="text" value={cityDepartment} onChange={(e) => setCityDepartment(e.target.value)} className={styles.input} />
              </label>
              <label>
                País:
                <input type="text" value={cityCountry} onChange={(e) => setCityCountry(e.target.value)} className={styles.input} />
              </label>
            </fieldset>
          </fieldset>
          <label>
            Asistentes:
            <select
              value={selectedAttendees}
              onChange={(e) => setSelectedAttendees(Array.from(e.target.selectedOptions, option => option.value))}
              multiple
              className={styles.select}
            >
              {attendees.map(attendee => (
                <option key={attendee} value={attendee}>
                  {attendee}
                </option>
              ))}
            </select>
          </label>
          <label>
            Facilitadores:
            <select
              value={selectedFacilitators}
              onChange={(e) => setSelectedFacilitators(Array.from(e.target.selectedOptions, option => option.value))}
              multiple
              className={styles.select}
            >
              {facilitators.map(facilitator => (
                <option key={facilitator} value={facilitator}>
                  {facilitator}
                </option>
              ))}
            </select>
          </label>
          <label>
            Facultades Organizadoras:
            <select
              value={organizingFaculties}
              onChange={(e) => setOrganizingFaculties(Array.from(e.target.selectedOptions, option => option.value))}
              multiple
              className={styles.select}
            >
              <option value="INGENIERIA">INGENIERIA</option>
              <option value="NEGOCIOS Y ECONOMIA">NEGOCIOS Y ECONOMÍA</option>
              <option value="CIENCIAS DE LA SALUD">CIENCIAS DE LA SALUD</option>
              <option value="CIENCIAS HUMANAS">CIENCIAS HUMANAS</option>
            </select>
          </label>
          <button type="submit" className={styles.button}>Registrar Evento</button>
        </form>
        <Link href="/events">
          <button className={styles.backButton}>Volver</button>
        </Link>
      </main>
    </div>
  );
};

export default Register;

