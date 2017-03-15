// Libraries
import React from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';

// Components
import Header from './header/header';
import UserDropdownContainer from './user/user_dropdown_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Header />
    </HashRouter>
  </Provider>
);

export default Root;
