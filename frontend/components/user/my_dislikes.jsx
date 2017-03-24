import React from 'react';
import MyDislikeItem from './my_dislike_item';

class MyDislikes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.dislikes) return <div></div>;
    return (
      <div>
        <div className='track-index -header'>Disliked Stations</div>
        <div className='track-index '>
          {this.props.dislikes.map(dislike => (
            <MyDislikeItem
              key={dislike.id}
              dislike={dislike}
              selectPlayPauseTrack={this.props.selectPlayPauseTrack}
              fetchNextTrack={this.props.fetchNextTrack} />
          ))}
        </div>
      </div>
    );
  }

}

export default MyDislikes;
