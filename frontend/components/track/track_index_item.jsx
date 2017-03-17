import React from 'react';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.playTrack(this.props.track.track_url);
  }


  render() {
    if (!this.props.track) return <div></div>;
    const track = this.props.track;
    return (
      <button
        onClick={this.handleClick}
        className='track-item'>
        <img
          src={track.img_url}
          alt={track.title}
          className='track-item-image' />
        <div className='track-item-title'>{track.title}</div>
        <div className='track-item-artist'>{track.artist}</div>
      </button>
    )
  }
}

export default TrackIndexItem;
