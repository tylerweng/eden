import React from 'react';
import TrackSidebarItem from './track_sidebar_item';

class TopNTrackIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks
    };
  }

  componentWillMount() {
    this.props.fetchTopNTracks(20);
  }

  componentWillReceiveProps(nextProps) {
    this.state.tracks = nextProps.tracks
  }



  render() {
    if (!this.state.tracks) this.forceUpdate(() => this.props.fetchTopNTracks(20));
    return (
      <div className='homepage-sidebar'>
        <div className='homepage-sidebar-header'>Latest Hits</div>
        {this.state.tracks.map(track => (
          <TrackSidebarItem
            key={track.id}
            track={track}
            selectPlayPauseTrack={this.props.selectPlayPauseTrack}
            selectTrack={this.props.selectTrack}
            fetchNextTrack={this.props.fetchNextTrack}
            className='homepage-sidebar-item'/>
        ))}
      </div>
    );
  }

}

export default TopNTrackIndex;
