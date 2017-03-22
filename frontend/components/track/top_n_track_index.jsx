import React from 'react';
import TrackIndexItem from './track_index_item';

class TopNTrackIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks
    };

  }

  componentWillMount() {
    this.props.fetchTopNTracks(8);
  }

  componentWillReceiveProps(nextProps) {
    const tracks = nextProps.tracks;
    this.setState({ tracks })
  }

  render() {
    if(!this.state.tracks) return <div></div>;
    return (
      <div className='homepage-sidebar'>
        {this.state.tracks.map(track => (
          <TrackIndexItem
            key={track.id}
            track={track}
            selectPlayPauseTrack={this.props.selectPlayPauseTrack}
            selectTrack={this.props.selectTrack}
            className='homepage-sidebar-item'/>
        ))}
      </div>
    );
  }

}

export default TopNTrackIndex;
