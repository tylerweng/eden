// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import HomePage from './home_page';
import LoginModalContainer from './session/login_modal_container';
import SignupModalContainer from './session/signup_modal_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <HomePage>
        <Route path='/' component={ SignupModalContainer } />
        <Route path='/' component={ LoginModalContainer } />
      </HomePage>
    </HashRouter>
  </Provider>
);

export default Root;
