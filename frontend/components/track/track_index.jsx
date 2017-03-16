import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllTracks();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.tracks.map(track => (
            <TrackIndexItem
              key={track.id}
              track={track} />
          ))}
        </ul>
      </div>
    );
  }

}

export default TrackIndex;
