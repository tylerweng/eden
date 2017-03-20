import React from 'react';
import Header from './header/header';
import PlaybarContainer from './playbar/playbar_container';

const App = ({ children }) => (
  <div>
    <Header />
    <div className='body-audio'>
      { children }
      <PlaybarContainer />
    </div>
  </div>
);

export default App;
