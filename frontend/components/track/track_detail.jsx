import React from 'react';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const selectedTrack = this.props.selectedTrack;
    this.props.playPauseTrack(selectedTrack);
  }

  render() {
    const selectedTrack = this.props.selectedTrack;
    if (!selectedTrack) return <div></div>;

    const title = selectedTrack.title;
    const artist = selectedTrack.artist;
    const img_url = selectedTrack.img_url;
    const track_url = selectedTrack.track_url;
    const username = selectedTrack.user.username;

    return (
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
    );
  }
};

export default TrackDetail;
