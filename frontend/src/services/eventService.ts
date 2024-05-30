  export const createEvent = async (eventData: any) => {
    const response = await fetch('http://localhost:4000/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData)
    });

    if (!response.ok) {
      throw new Error('Failed to create event');
    }

    return response.json();
  };

  export const getPeople = async (): Promise<string[]> => {
    try {
      const response = await fetch('http://localhost:4000/people');
      if (!response.ok) {
        throw new Error('Failed to fetch attendees');
      }
      const data = await response.json();
      const attendees = data.map((person: { nombre_completo: string }) => person.nombre_completo);
      return attendees;
    } catch (error) {
      console.error('Error fetching attendees:', error);
      throw new Error('Failed to fetch attendees');
    }
  };
  
  
  