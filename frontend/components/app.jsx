import React from 'react';
import Header from './header/header';
import PlaybarContainer from './playbar/playbar_container';
import { Redirect } from 'react-router';

const App = ({ children }) => (
  <div>
    {(window.location.hash === "#/") ? (<Redirect to="/homepage"/>) : <div></div>}
    <Header />
    <div className='body-audio'>
      { children }
      <PlaybarContainer />
    </div>
  </div>
);

export default App;
