import React from 'react';
import Auth from './auth';
import LinksContainer from './links_container';
import UserDropdownContainer from '../user/user_dropdown_container';
import SearchbarContainer from '../search/searchbar_container';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <LinksContainer />
    <SearchbarContainer />
    <div className="header-auth-buttons">
      <Link
        to={`/homepage`}
        className={'header-link eden'}>
        eden
      </Link>
      <Auth />
      <UserDropdownContainer />
    </div>
  </div>
);

export default Header;
