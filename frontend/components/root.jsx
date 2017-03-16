// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import App from './app';
import Homepage from './homepage/homepage';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App>
        <Route path='/' component={Homepage} />
      </App>
    </HashRouter>
  </Provider>
);

export default Root;
