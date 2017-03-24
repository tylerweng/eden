import React from 'react';

class SimilarTrackItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const track = this.props.track;
    this.props.selectPlayPauseTrack(track);
    this.props.fetchNextTrack(track);
  }


  render() {
    if (!this.props.track) return <div></div>;
    const track = this.props.track;
    return (
      <button
        onClick={this.handleClick}
        className='similar-track-item'>
        <img
          src={track.img_url}
          alt={track.title}
          className='track-item-content track-item-image' />
        <div>          
          <div className='track-item-content track-item-text'>{track.title}</div>
          <div className='track-item-content track-item-text'>{track.artist}</div>
        </div>
      </button>
    )
  }
}

export default SimilarTrackItem;
