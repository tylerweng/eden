import React from 'react';
import MyDislikeItem from './my_dislike_item';

class MyDislikes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.dislikes) return <div></div>;
    return (
      <div className='my-dislikes'>
        <span className='my-dislikes-header'>Disliked Stations</span>
        {this.props.dislikes.map(dislike => (
          <MyDislikeItem
            key={dislike.id}
            dislike={dislike}
            selectPlayPauseTrack={this.props.selectPlayPauseTrack}
            fetchNextTrack={this.props.fetchNextTrack} />
        ))}
      </div>
    );
  }

}

export default MyDislikes;
