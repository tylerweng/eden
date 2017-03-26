import React from 'react';
import SimilarTrackItem from './similar_track_item';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageId: this.props.match.params.id
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if (this.props.profileTrack) this.props.fetchSimilarTracks(this.props.profileTrack);
    this.props.showProfile(this.state.pageId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.pageId === nextProps.match.params.id) return;
    this.props.fetchSimilarTracks(nextProps.profileTrack)
    this.setState({ pageId: nextProps.match.params.id});
    this.props.showProfile(this.state.pageId);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.selectPlayPauseTrack(this.props.profileTrack);
    this.props.fetchNextTrack(this.props.profileTrack);
  }

  render() {

    const profileTrack = this.props.profileTrack;
    if (!profileTrack) return <div></div>;

    const title = profileTrack.title;
    const artist = profileTrack.artist;
    const img_url = profileTrack.img_url;
    const track_url = profileTrack.track_url;
    const username = profileTrack.user.username;

    let similarTracks;

    if (this.props.similarTracks) {
      similarTracks = (
        <div className="similar-tracks-column">

          <div className='similar-tracks-body'>
            { this.props.similarTracks.map(track => (
              <SimilarTrackItem
                track={track}
                key={track.id}
                selectPlayPauseTrack={this.props.selectPlayPauseTrack}
                fetchNextTrack={this.props.fetchNextTrack} />
            ))}
          </div>
        </div>

      );
    } else {
      similarTracks = (
        <div></div>
      );
    }

    return (
      <div className='track-profile'>
        { similarTracks }
        <div className='track-detail-container'>
          <button
            onClick={this.handleClick}
            className='track-detail'>
            <img
              src={img_url}
              alt={title}
              className='track-detail-img'
            />
            <span className='track-detail-title'>{title}</span>
            <span className='track-detail-artist'>{artist}</span>
            <span className='track-detail-user'>{`Shared By: ${username}`}</span>
          </button>
        </div>
      </div>
    );
  }
};

export default TrackDetail;
