// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import App from './app';
import Homepage from './homepage/homepage';
import UserProfile from './user/user_profile';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App>
        <Route path='/homepage' component={ Homepage } />
        <Route path='/myprofile' component={ UserProfile } />
      </App>
    </HashRouter>
  </Provider>
);

export default Root;
