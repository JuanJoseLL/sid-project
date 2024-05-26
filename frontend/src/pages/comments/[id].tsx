import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { NextPage } from 'next';  // Correctly import NextPage
import styles from '../../styles/Home.module.css';  // Adjust the path as needed

const Comment: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [texto, setTexto] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const commentData = {
      texto,
      evento: id,
    };

    try {
      const response = await fetch(`http://localhost:4000/comments/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error('Failed to add comment');
      }

      alert('Comment added successfully');
      setTexto('');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add comment');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Agregar Comentario</title>
        <meta name="description" content="Agregar un comentario a un evento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Agregar Comentario</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Comentario:
            <textarea value={texto} onChange={(e) => setTexto(e.target.value)} />
          </label>
          <button type="submit" className={styles.button}>Agregar Comentario</button>
        </form>
      </main>
    </div>
  );
};

export default Comment;
