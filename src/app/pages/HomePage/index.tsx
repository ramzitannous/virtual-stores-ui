import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Virtual Stores ECommerce App" />
      </Helmet>
      <Header appName={process.env.REACT_APP_NAME} />
    </>
  );
};
