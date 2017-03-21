import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedTrack = this.props.selectedTrack;
    const trackId = selectedTrack ? selectedTrack.id : 0;
    return (
      <div className='links'>
        <Link
          to='nowplaying'
          className={'header-link now-playing'}>
          now playing
        </Link>
        <span className='header-link my-stations'>my stations</span>
      </div>
    );
  }
}


export default Links;
