import React, { Fragment } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Routes
import { renderRoutes } from 'react-router-config';

// Redux
import { fetchCurrentUser } from './actions';


const App = ({ route }) => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        {renderRoutes(route.routes)}
      </main>
      <footer>
      </footer>
    </Fragment>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
