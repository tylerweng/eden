// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import App from './app';
import Header from './header/header';
import Homepage from './homepage/homepage';
import UserProfile from './user/user_profile';
import Footer from './footer/footer';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App>
        <Route path='/' component={ Header } />
        <Route path='/homepage' component={ Homepage } />
        <Route path='/myprofile' component={ UserProfile } />
        <Route path='/' component={ Footer } />
      </App>
    </HashRouter>
  </Provider>
);

export default Root;
