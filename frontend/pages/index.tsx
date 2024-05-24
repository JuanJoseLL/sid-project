
import React from 'react';
import { useMyContext } from '../src/components/context/MyContext';

const Home = () => {
  const { value, setValue } = useMyContext();
  return (
    <div>
      <h1>Current Value: {value}</h1>
      <button onClick={() => setValue('new value')}>Change Value</button>
    </div>
  );
};

export default Home;
