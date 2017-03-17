// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Root from './components/root';
import configureStore from './store/store';

let preloadedState = {};

if (localStorage.user) {
  preloadedState = {
    session: {
      currentUser: {
        username: localStorage.user,
        id: localStorage.id
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore(preloadedState);
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
