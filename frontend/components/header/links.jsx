import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nowPlaying;
    if (this.props.selectedTrack) {
      nowPlaying = (
          <Link
            to={`/tracks/${this.props.selectedTrack.id}`}
            className={'header-link now-playing'}>
            Now Playing
          </Link>
      );
    } else {
      nowPlaying = <div className={'hidden'}>Now Playing</div>;
    }

    let myStations;
    if (this.props.currentUser) {
      myStations = (
          <Link
            to={`/mystations`}
            className={'header-link my-stations'}>
            My Stations
          </Link>
      );
    } else {
      myStations = <div className={'hidden'}>My Stations</div>;
    }
    return (
      <div className='links'>
        { nowPlaying }
        { myStations }
      </div>
    );
  }
}


export default Links;
