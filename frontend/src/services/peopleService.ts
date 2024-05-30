export const getPeople = async () => {
  const response = await fetch('http://localhost:3000/people');
  if (!response.ok) {
    throw new Error('Failed to fetch people');
  }
  return response.json();
};

export const createPerson = async (personData: any) => {
  const response = await fetch('http://localhost:3000/people', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(personData)
  });

  if (!response.ok) {
    throw new Error('Failed to create person');
  }

  return response.json();
};

