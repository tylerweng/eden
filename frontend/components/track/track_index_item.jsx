import React from 'react';
import ReactPlayer from 'react-player';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };

    this.playStatus = this.playStatus.bind(this);
  }

  playStatus() {
    return this.state.playing;
  }

  play(event) {
    return event => this.setState({playing: true})
  }

  render() {
    if (!this.props.track) return <div></div>;
    const track = this.props.track;
    let playStatus = this.playStatus();
    return (
      <li className='track-list-item'>
        <div
          onClick={this.play}
          className='track-item'>
          <img
            src={`${track.img_url}`}
            alt={`${track.title}`}
            className='track-item-image' />
          <ReactPlayer
            url={track.track_url}
            playing={playStatus}/>
        </div>
        <span className='track-title'>{track.title}</span>
      </li>
    )
  }
}

export default TrackIndexItem;
