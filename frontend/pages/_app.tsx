
import React from 'react';
import { AppProps } from 'next/app';
import { MyContextProvider } from '../src/components/context/MyContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
};

export default MyApp;
