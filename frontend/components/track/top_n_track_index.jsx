import React from 'react';
import TrackSidebarItem from './track_sidebar_item';

class TopNTrackIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTopNTracks(20);
  }

  render() {
    if(!this.props.tracks) return <div></div>;
    return (
      <div className='homepage-sidebar'>
        <div className='homepage-sidebar-header'>Latest Hits</div>
        {this.props.tracks.map(track => (
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
