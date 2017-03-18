import React from 'react';
import ReactPlayer from 'react-player';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks,
      playing: false,
      trackUrl: ''
    };

    this.playTrack = this.playTrack.bind(this);

  }

  componentWillMount() {
    this.props.fetchAllTracks(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    const tracks = nextProps.tracks;
    const selectedTrack = nextProps.selectedTrack;
    this.setState({ tracks, selectedTrack })
  }

  playTrack(track) {
    const trackUrl = track.track_url
    const playing = (trackUrl === this.state.trackUrl
                                       ? !this.state.playing
                                       : true);
    this.setState({ playing, trackUrl });
  }

  render() {
    if(!this.state.tracks) return <div></div>;
    return (
      <div className='track-index'>
        {this.state.tracks.map(track => (
          <TrackIndexItem
            key={track.id}
            track={track}
            playTrack={this.playTrack}
            selectTrack={this.props.selectTrack} />
        ))}
        <div className='react-player-container'>
          <ReactPlayer
            url={this.state.trackUrl}
            playing={this.state.playing}
            className='react-player'
            controls={true} />
        </div>
      </div>
    );
  }

}

export default TrackIndex;
