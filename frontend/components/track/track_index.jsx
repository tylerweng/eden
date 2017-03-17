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
    let tracks = nextProps.tracks;
    this.setState({ tracks })
  }

  playTrack(trackUrl) {
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
            playTrack={this.playTrack}/>
        ))}
        <ReactPlayer
          url={this.state.trackUrl}
          playing={this.state.playing}
          className='react-player'/>
      </div>
    );
  }

}

export default TrackIndex;
