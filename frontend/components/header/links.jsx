import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='links'>
        <Link
          to='/nowplaying'
          className={'header-link now-playing'}>
          Now Playing
        </Link>
        <Link
          to='/mystations'
          className={'header-link my-stations'}>
          My Stations
        </Link>
      </div>
    );
  }
}


export default Links;
