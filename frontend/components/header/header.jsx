import React from 'react';
import Auth from './auth';
import LinksContainer from './links_container';
import UserDropdownContainer from '../user/user_dropdown_container';
import SearchbarContainer from '../search/searchbar_container';

const Header = () => (
  <div className='header'>
    <LinksContainer />
    <SearchbarContainer />
    <div><font color='white'>eden</font></div>
    <div>
      <Auth />
      <UserDropdownContainer />
    </div>
  </div>
);

export default Header;
