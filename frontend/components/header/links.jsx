import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedTrack = this.props.selectedTrack;
    const nowPlayingKlass = (selectedTrack
                            ? 'header-link now-playing'
                            : 'header-link now-playing disabled');
    const trackId = selectedTrack ? selectedTrack.id : 0;
    return (
      <div className='links'>
        <Link
          to='nowplaying'
          className={nowPlayingKlass}>
          now playing
        </Link>
        <span>my stations</span>
      </div>
    );
  }
}


export default Links;
