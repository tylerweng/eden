import React from 'react';
import ReactPlayer from 'react-player';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Duration from './duration';

class Playbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      playing: this.props.playing,
      seeking: false,
      volume: 0,
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
    this.props.playPauseTrack(this.props.selectedTrack);
  }

  // setVolume(e) {
  //   this.setState({ volume: parseFloat(e.target.value) });
  // }

  setVolume(e, volume) {
    this.setState({ volume });
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
        <div className='playbar'>
          <div className='controls'>
            <button onClick={this.back}>
              <i className='fa fa-backward' aria-hidden='true'></i>
            </button>
            <button onClick={this.playPause}>
              <i className={faPlayPause} aria-hidden='true'></i>
            </button>
            <button onClick={this.forward}>
              <i className='fa fa-forward' aria-hidden='true'></i>
            </button>
          </div>
          <div className='slider progressbar'>
            <input
              type='range' min={0} max={1} step='any'
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
          </div>
          <div className='volume-container'>
            <div className='slider volume'>
              <MuiThemeProvider>
                <Slider
                  defaultValue={0.5}
                  min={0}
                  max={1}
                  value={volume}
                  onChange={this.setVolume}
                />
              </MuiThemeProvider>
            </div>
          </div>
          <div className='time-elapsed'>
            <Duration seconds={duration * played} /> | <Duration seconds={duration} />
          </div>
        </div>
      </div>
    );
  }

}

export default Playbar;