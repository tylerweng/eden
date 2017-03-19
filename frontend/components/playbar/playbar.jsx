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
      loop: false,
      volume: 0.5,
      played: 0,
      loaded: 0,
      duration: 0,
    };
    this.back = this.back.bind(this);
    this.forward = this.forward.bind(this);
    this.playPause = this.playPause.bind(this);
    this.repeat = this.repeat.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onEnded = this.onEnded.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.selectedTrack) return;
    const selectedTrack = nextProps.selectedTrack;
    const url = selectedTrack.track_url;
    const playing = nextProps.playing;
    this.setState({ url, playing })
  }

  load(e) {
    this.setState({
      url: (this.props.selectedTrack ? this.props.selectedTrack.track_url : ''),
      played: 0,
      loaded: 0
    });
  }

  back(e) {
    this.player.seekTo(0);
  }

  forward(e) {

  }

  repeat(e) {
    debugger;
    this.setState({ loop: !this.state.loop })
  }

  playPause() {
    this.props.playPauseTrack(this.props.selectedTrack);
  }

  setVolume(e, volume) {
    this.setState({ volume });
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  }

  onSeekChange(e, percent) {
    this.setState({ played: percent });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(this.state.played);
  }

  onProgress(state) {
    if (!this.state.seeking) this.setState(state);
  }

  onEnded() {
    if (this.state.loop) {
      this.player.seekTo(0);
    } else {
      this.setState({playing: false})
    }
  }

  render() {
    const {
       url, playing, seeking, loop,
       volume, played, loaded, duration
     } = this.state;

    const faPlayPause = this.state.playing
                        ? 'fa fa-pause'
                        : 'fa fa-play';
    const faRepeat = this.state.loop
                     ? 'fa fa-repeat repeat-on'
                     : 'fa fa-repeat repeat-off'
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
            loop={loop}
            volume={volume}
            played={played}
            loaded={loaded}
            duration={duration}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={() => this.setState({ playing: true })}
            onPause={() => this.setState({ playing: false })}
            onBuffer={() => console.log('onBuffer')}
            onEnded={() => this.onEnded()}
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
            <button onClick={this.repeat}>
              <i className={faRepeat} aria-hidden='true'></i>
            </button>
          </div>
          <div className='slider progressbar'>
            <MuiThemeProvider>
              <Slider
                defaultValue={0}
                min={0}
                max={1}
                value={played}
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}
              />
            </MuiThemeProvider>
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
