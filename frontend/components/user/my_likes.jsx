import React from 'react';
import MyLikeItem from './my_like_item';

class MyLikes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.likes) return <div></div>;
    return (
      <div>
        <div className='track-index-header'>Liked Stations</div>
        <div className='track-index '>
          {this.props.likes.map(like => (
            <MyLikeItem
              key={like.id}
              like={like}
              selectPlayPauseTrack={this.props.selectPlayPauseTrack}
              fetchNextTrack={this.props.fetchNextTrack} />
          ))}
        </div>
      </div>
    );
  }

}

export default MyLikes;
