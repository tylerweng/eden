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
          to='nowplaying'
          className={'header-link now-playing'}>
          Now Playing
        </Link>
        <div className='header-link my-stations'>My Stations</div>
      </div>
    );
  }
}


export default Links;
