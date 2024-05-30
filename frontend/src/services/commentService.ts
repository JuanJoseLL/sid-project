const API_URL = 'http://localhost:4000';

export const fetchCommentsByEvent = async (eventId: string) => {
  const response = await fetch(`${API_URL}/comments?event=${eventId}`);
  if (!response.ok) {
    throw new Error('Error fetching comments');
  }
  return response.json();
};

export const createComment = async (eventId: string, commentData: any) => {
  const response = await fetch(`${API_URL}/comments/${eventId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });

  if (!response.ok) {
    throw new Error('Error creating comment');
  }

  return response.json();
};


export const fetchEvents = async () => {
  const response = await fetch(`${API_URL}/events`);
  if (!response.ok) {
    throw new Error('Error fetching events');
  }
  return response.json();
};

export const fetchPeople = async () => {
  const response = await fetch(`${API_URL}/people`);
  if (!response.ok) {
    throw new Error('Error fetching people');
  }
  return response.json();
};
