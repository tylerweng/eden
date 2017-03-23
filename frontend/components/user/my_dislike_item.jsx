import React from 'react';

class MyDislikeItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const track = this.props.dislike.track;
    this.props.selectPlayPauseTrack(track);
    this.props.fetchNextTrack(track);
  }


  render() {
    if (!this.props.dislike) return <div></div>;
    const track = this.props.dislike.track;
    return (
      <button
        onClick={this.handleClick}
        className='my-dislike-item'>
        <img
          src={track.img_url}
          alt={track.title}
          className='my-dislike-item-content my-dislike-item-image' />
        <div className='my-dislike-item-content my-dislike-item-text'>{track.title}</div>
        <div className='my-dislike-item-content my-dislike-item-text'>{track.artist}</div>
      </button>
    )
  }
}

export default MyDislikeItem;
