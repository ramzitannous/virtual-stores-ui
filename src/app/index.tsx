/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ProductsList } from './pages/Products/Loadable';
import { ProductDetails } from './pages/Products/ProductDetails/Loadable';

export const App = () => {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Virtual Stores"
        defaultTitle="Virtual Stores"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Ecommerce App" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};
