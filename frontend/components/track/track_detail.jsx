import React from 'react';

class TrackDetail extends React.Component {

  constructor(props) {
    super(props);
    debugger;
    this.state = {
      profileTrack: null,
      pageId: this.props.match.params.id
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const profileTrack = this.props.profileTrack;
    this.setState({ profileTrack });
    this.props.showProfile(this.state.pageId);
  }

  componentWillReceiveProps(nextProps) {
    const profileTrack = nextProps.profileTrack;
    this.setState({ profileTrack });
    this.setState({ pageId: nextProps.match.params.id});
    this.props.showProfile(this.state.pageId);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.selectPlayPauseTrack(this.props.profileTrack);
    this.props.fetchNextTrack(this.props.profileTrack);
  }

  render() {
    const profileTrack = this.props.profileTrack;
    if (!profileTrack) return <div></div>;

    const title = profileTrack.title;
    const artist = profileTrack.artist;
    const img_url = profileTrack.img_url;
    const track_url = profileTrack.track_url;
    const username = profileTrack.user.username;

    return (
      <button
        onClick={this.handleClick}
        className='track-detail'>
        <img
          src={img_url}
          alt={title}
          className='track-detail-img'
        />
        <span className='track-detail-title'>{title}</span>
        <span className='track-detail-artist'>{artist}</span>
        <span className='track-detail-user'>{`Shared By: ${username}`}</span>
      </button>
    );
  }
};

export default TrackDetail;
