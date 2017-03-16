import React from 'react';
import ReactPlayer from 'react-player';

class TrackIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  play(event) {
    const togglePlay = !this.state.playing;
    return event => this.setState({playing: togglePlay})
  }



  render() {
    if (!this.props.track) return <div></div>;
    const track = this.props.track;
    return (
      <button
        onClick={this.play()}
        className='track-item'>
        <img
          src={`${track.img_url}`}
          alt={`${track.title}`}
          className='track-item-image' />
        <ReactPlayer
          url={track.track_url}
          playing={this.state.playing}/>
        <span className='track-item-title'>{track.title}</span>
      </button>
    )
  }
}

export default TrackIndexItem;
