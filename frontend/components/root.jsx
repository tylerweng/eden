// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import App from './app';
import LoginModalContainer from './session/login_modal_container';
import SignupModalContainer from './session/signup_modal_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <App>
        <Route path='/' component={ LoginModalContainer } />
        <Route path='/' component={ SignupModalContainer } />
      </App>
    </HashRouter>
  </Provider>
);

export default Root;
