import React from 'react';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const track = this.props.track;
    this.props.selectPlayPauseTrack(track);
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
          className='track-item-content track-item-image' />
        <div className='track-item-content track-item-text'>{track.title}</div>
        <div className='track-item-content track-item-text'>{track.artist}</div>
      </button>
    )
  }
}

export default TrackIndexItem;
