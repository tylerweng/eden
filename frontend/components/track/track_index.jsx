import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks
    };

  }

  componentWillMount() {
    this.props.fetchAllTracks(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    const tracks = nextProps.tracks;
    this.setState({ tracks })
  }

  render() {
    if(!this.state.tracks) return <div></div>;
    return (
      <div className='track-index'>
        {this.state.tracks.map(track => (
          <TrackIndexItem
            key={track.id}
            track={track}
            playPauseTrack={this.props.playPauseTrack}
            selectTrack={this.props.selectTrack} />
        ))}
      </div>
    );
  }

}

export default TrackIndex;
