import React from 'react';

class Playbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isPaused: false,
      percent: 0,
      volume: 75
    };

    this.back = this.back.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.forward = this.forward.bind(this);
  }

  back() {

  }

  togglePlay() {

  }

  forward() {

  }

  render() {
    const faPlayPause = this.state.playing
                        ? 'fa fa-play'
                        : 'fa fa-pause';
    return (
      <div className='playbar container'>
        <div className='playbar'>
          <div className='playbar-button playbar-back'>
            <button onClick={this.back}>
              <i className='fa fa-backward' aria-hidden='true'></i>
            </button>
          </div>
          <div className='playbar-button playbar-play-pause'>
            <button onClick={this.togglePlay}>
              <i className={faPlayPause} aria-hidden='true'></i>
            </button>
          </div>
          <div className='playbar-button playbar-forward'>
            <button onClick={this.forward}>
              <i className='fa fa-forward' aria-hidden='true'></i>
            </button>
          </div>
        </div>
        <div className='progressbar'>
          <span className='time-elapsed'>{this.props.elapsed}</span>
          <progress
            value={this.props.position}
            max="1" />
          <span className='time-total'>{this.props.total}</span>
        </div>
      </div>
    );
  }

}

export default Playbar;
