import React from 'react';
import SignupModalContainer from '../session/signup_modal_container';
import LoginModalContainer from '../session/login_modal_container';

const Auth = () => (
  <div className='auth'>
    <SignupModalContainer />
    <LoginModalContainer />
  </div>
);

export default Auth;
