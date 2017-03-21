import React from 'react';
import Auth from './auth';
import Links from './links';
import UserDropdownContainer from '../user/user_dropdown_container';
import SearchbarContainer from '../search/searchbar_container';

const Header = () => (
  <div className='header'>
    <Links />
    <div><font color='white'>eden</font></div>
    <SearchbarContainer />
    <div>
      <Auth />
      <UserDropdownContainer />
    </div>
  </div>
);

export default Header;
