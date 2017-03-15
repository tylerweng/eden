// Libraries
import React from 'react';

const HomePage = ({ children }) => (
  <div>
    <div className='col homepage-main'>
      <h1 className='homepage-header'>eden</h1>
      <div className='auth-modals'>
        {children}
      </div>
    </div>
  </div>
);

export default HomePage;
