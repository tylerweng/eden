// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import Homepage from './homepage/homepage';
import LoginModalContainer from './session/login_modal_container';
import SignupModalContainer from './session/signup_modal_container';
import UserDropdownContainer from './user/user_dropdown_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Homepage>
        <SignupModalContainer />
        <LoginModalContainer />
        <UserDropdownContainer />
      </Homepage>
    </HashRouter>
  </Provider>
);

export default Root;
