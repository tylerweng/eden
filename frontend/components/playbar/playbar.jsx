import React from 'react';
import ReactPlayer from 'react-player';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';

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
      priorVolume: 0.5,
      played: 0,
      loaded: 0,
      duration: 0
    };
    this.dislike = this.dislike.bind(this);
    this.back = this.back.bind(this);
    this.forward = this.forward.bind(this);
    this.playPause = this.playPause.bind(this);
    this.repeat = this.repeat.bind(this);
    this.like = this.like.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.muteUnmute = this.muteUnmute.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onEnded = this.onEnded.bind(this);
  }

  componentWillMount() {
    const currentUser = this.props.currentUser;
    if (!currentUser) return;
    this.props.fetchUserLikes(currentUser.id);
    this.props.fetchUserDislikes(currentUser.id);
    if (!this.props.selectedTrack) return;
    this.props.fetchLikeStatus(this.props.selectedTrack.id);
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.selectedTrack) return;
    const selectedTrack = nextProps.selectedTrack;
    const url = selectedTrack.track_url;
    const playing = nextProps.playing;
    this.setState({ url, playing });
  }

  load(e) {
    this.setState({
      url: (this.props.selectedTrack ? this.props.selectedTrack.track_url : ''),
      played: 0,
      loaded: 0
    });
  }

  like() {
    if (!this.props.currentUser) return;

    if (this.props.likeStatus === 'neutral') {
      this.props.likeTrack(this.props.selectedTrack.id);
    } else if (this.props.likeStatus === 'disliked') {
      for (let i = 0; i < this.props.dislikes.length; i++) {
        let dislike = this.props.dislikes[i];
        if (dislike === undefined) continue;
        if (dislike.track_id == this.props.selectedTrack.id
             && dislike.user_id == this.props.currentUser.id) {
          this.props.undislikeTrack(dislike.id);
          this.props.likeTrack(this.props.selectedTrack.id);
        }
      }
    } else {
      for (let j = 0; j < this.props.likes.length; j++) {
        let like = this.props.likes[j];
        if (like === undefined) continue;
        if (like.track_id == this.props.selectedTrack.id
             && like.user_id == this.props.currentUser.id) {
          this.props.unlikeTrack(like.id);
        }
      }
    }
  }

  dislike() {
    if (!this.props.currentUser) return;

    if (this.props.likeStatus === 'neutral') {
      this.props.dislikeTrack(this.props.selectedTrack.id);
    } else if (this.props.likeStatus === 'liked') {
      for (let i = 0; i < this.props.likes.length; i++) {
        let like = this.props.likes[i];
        if (like === undefined) continue;
        if (like.track_id == this.props.selectedTrack.id
             && like.user_id == this.props.currentUser.id) {
          this.props.unlikeTrack(like.id);
          this.props.dislikeTrack(this.props.selectedTrack.id);
        }
      }
    } else {
      for (let j = 0; j < this.props.dislikes.length; j++) {
        let dislike = this.props.dislikes[j];
        if (dislike === undefined) continue;
        if (dislike.track_id == this.props.selectedTrack.id
             && dislike.user_id == this.props.currentUser.id) {
          this.props.undislikeTrack(dislike.id);
        }
      }
    }
  }

  back(e) {
    this.player.seekTo(0);
  }

  forward(e) {
    this.onEnded();
  }

  repeat(e) {
    this.setState({ loop: !this.state.loop })
  }

  playPause() {
    this.props.playPauseTrack(this.props.selectedTrack);
  }

  setVolume(e, volume) {
    this.setState({ priorVolume: this.state.volume, volume});
  }

  muteUnmute() {
    const volume = (this.state.volume ? 0 : this.state.priorVolume );
    this.setState({ priorVolume: this.state.volume, volume });
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
      if (this.props.currentUser) this.props.fetchLikeStatus(this.props.nextTrack.id);
      this.props.selectPlayPauseTrack(this.props.nextTrack);
      this.props.fetchNextTrack(this.props.nextTrack);
    }
  }

  render() {
    const {
       url, playing, seeking, loop,
       volume, played, loaded, duration
     } = this.state;

    const selectedTrack = this.props.selectedTrack;

    const faPlayPause = this.state.playing
                        ? 'fa fa-pause'
                        : 'fa fa-play';
    const faRepeat = this.state.loop
                     ? 'fa fa-repeat repeat-on'
                     : 'fa fa-repeat repeat-off';
    const faVolume = (this.state.volume
                       ? (this.state.volume > 0.5 ? 'fa fa-volume-up' : 'fa fa-volume-down')
                       : 'fa fa-volume-off') + ' volume-button';
    const playbarKlass = (selectedTrack ? 'playbar' : 'playbar hidden');

    let likeKlass = 'fa fa-thumbs-up like-button';
    if (this.props.likeStatus === 'liked') likeKlass += ' like-dislike-highlight';
    let dislikeKlass = 'fa fa-thumbs-down dislike-button';
    if (this.props.likeStatus === 'disliked') dislikeKlass += ' like-dislike-highlight';

    let trackDetail;
    if (selectedTrack) {
      trackDetail = (
        <div className='playbar-track-detail'>
          <img
            src={selectedTrack.img_url}
            alt={selectedTrack.title}
            className='playbar-track-image'
          />
          <div className='playbar-track-text'>
            <div className='playbar-track-title'>{selectedTrack.title}</div>
            <div className='playbar-track-artist'>{selectedTrack.artist}</div>
          </div>
        </div>
      );
    } else {
      trackDetail = <div></div>;
    }

    return (
      <div className={playbarKlass}>
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
        { trackDetail }
        <div className='controls-progress-container'>
          <div className='controls'>
            <button onClick={this.dislike}>
              <i className={dislikeKlass} aria-hidden='true'></i>
            </button>
            <button onClick={this.back}>
              <i className='fa fa-undo' aria-hidden='true'></i>
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
            <button onClick={this.like}>
              <i className={likeKlass} aria-hidden='true'></i>
            </button>
          </div>
          <div className='progress-container'>
            <Duration seconds={duration * played} className='time' />
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
            <Duration seconds={duration} className='time' />
          </div>
        </div>
        <div className='volume-container'>
          <i onClick={this.muteUnmute} className={faVolume} aria-hidden='true'></i>
          <MuiThemeProvider className='mui-theme'>
            <Slider
              defaultValue={0.5}
              min={0}
              max={1}
              value={volume}
              onChange={this.setVolume}
              className='slider volume-slider'
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }

}

export default Playbar;
