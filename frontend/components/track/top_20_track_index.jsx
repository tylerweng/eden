import React from 'react';
import TrackIndexItem from './track_index_item';

class Top20TrackIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks
    };

  }

  componentWillMount() {
    this.props.fetchTop20Tracks();
  }

  componentWillReceiveProps(nextProps) {
    const tracks = nextProps.tracks;
    this.setState({ tracks })
  }

  render() {
    if(!this.state.tracks) return <div></div>;
    return (
      <div className='body track-index'>
        {this.state.tracks.map(track => (
          <TrackIndexItem
            key={track.id}
            track={track}
            selectPlayPauseTrack={this.props.selectPlayPauseTrack}
            selectTrack={this.props.selectTrack} />
        ))}
      </div>
    );
  }

}

export default Top20TrackIndex;
