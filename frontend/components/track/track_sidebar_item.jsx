import React from 'react';

class TrackSidebarItem extends React.Component {

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
        className='track-sitem'>
        <img
          src={track.img_url}
          alt={track.title}
          className='track-sitem-content track-sitem-image' />
        <div className='track-sitem-content track-sitem-text'>{track.title}</div>
        <div className='track-sitem-content track-sitem-text'>{track.artist}</div>
      </button>
    )
  }
}

export default TrackSidebarItem;
