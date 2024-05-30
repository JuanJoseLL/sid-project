export const fetchCommentsByEvent = async (eventId: string) => {
    const response = await fetch(`http://localhost:3000/comments/event/${eventId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    return response.json();
  };
  
  export const createComment = async (commentData: any) => {
    const response = await fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });
  
    if (!response.ok) {
      throw new Error('Error al agregar comentario.');
    }
    return response.json();
  };
  
  export const fetchEvents = async () => {
    const response = await fetch('http://localhost:3000/events');
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return response.json();
  };
  