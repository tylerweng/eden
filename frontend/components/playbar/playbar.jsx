import React from 'react';
import ReactPlayer from 'react-player';
import { Progress } from 'react-bootstrap';

import Duration from './duration';

class Playbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      playing: this.props.playing,
      seeking: false,
      volume: 0.8,
      played: 0,
      loaded: 0,
      duration: 0,
    };
    this.back = this.back.bind(this);
    this.forward = this.forward.bind(this);
    this.playPause = this.playPause.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.selectedTrack) return;
    const selectedTrack = nextProps.selectedTrack;
    const url = selectedTrack.track_url;
    const playing = nextProps.playing;
    this.setState({ url, playing })
  }

  load() {
    this.setState({
      url: (this.props.selectedTrack ? this.props.selectedTrack.track_url : ''),
      played: 0,
      loaded: 0
    });
  }

  back() {

  }

  forward() {

  }

  playPause() {
    this.setState({ playing: !this.state.playing });
  }

  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  onProgress(state) {
    if (!this.state.seeking) this.setState(state);
  }

  render() {
    const {
       url, playing, seeking,
       volume, played, loaded, duration
     } = this.state;

    const faPlayPause = !!this.state.playing
                        ? 'fa fa-pause'
                        : 'fa fa-play';
    return (
      <div className='playbar container'>
        <div className='react-player-container'>
          <ReactPlayer
            ref={player => { this.player = player }}
            className='react-player'
            width='100%'
            height='100%'
            url={url}
            playing={playing}
            seeking={seeking}
            volume={volume}
            played={played}
            loaded={loaded}
            duration={duration}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={() => this.setState({ playing: true })}
            onPause={() => this.setState({ playing: false })}
            onBuffer={() => console.log('onBuffer')}
            onEnded={() => this.setState({ playing: false })}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress}
            onDuration={duration => this.setState({ duration })}
          />
        </div>
        <div className='controls'>
          <div className='controls-button controls-back'>
            <button onClick={this.back}>
              <i className='fa fa-backward' aria-hidden='true'></i>
            </button>
          </div>
          <div className='controls-button controls-play-pause'>
            <button onClick={this.playPause}>
              <i className={faPlayPause} aria-hidden='true'></i>
            </button>
          </div>
          <div className='controls-button controls-forward'>
            <button onClick={this.forward}>
              <i className='fa fa-forward' aria-hidden='true'></i>
            </button>
          </div>
        </div>
        <div className='progressbar'>
          <input
            type='range' min={0} max={1} step='any'
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
        </div>
        <div className='volume'>
          <input
            type='range' min={0} max={1} step='any'
            value={volume}
            onChange={this.setVolume}
          />
        </div>
        <div className='time-elapsed'>
          <span> <Duration seconds={duration * played} /> : <Duration seconds={duration} /> </span>
        </div>
      </div>
    );
  }

}

export default Playbar;
