import React from 'react';

class MyLikeItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const track = this.props.like.track;
    this.props.selectPlayPauseTrack(track);
    this.props.fetchNextTrack(track);
  }


  render() {
    if (!this.props.like) return <div></div>;
    const track = this.props.like.track;
    return (
      <button
        onClick={this.handleClick}
        className='my-like-item'>
        <img
          src={track.img_url}
          alt={track.title}
          className='my-like-item-content my-like-item-image' />
        <div className='my-like-item-content my-like-item-text'>{track.title}</div>
        <div className='my-like-item-content my-like-item-text'>{track.artist}</div>
      </button>
    )
  }
}

export default MyLikeItem;
