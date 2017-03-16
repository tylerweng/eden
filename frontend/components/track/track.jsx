import React from 'react';
import ReactPlayer from 'react-player';

class Track extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  handleClick(event) {
    event.preventDefault();
    this.props.logout();
  }

  // render() {
  //   const userId = this.props.userId;
  //   if (!localStorage.user) return <div></div>;
  //   return (
  //     <div>
  //       <div className='user-profile-icon'>
  //
  //       </div>
  //       <div className='user-dropdown'>
  //         <button onClick={this.handleClick} className='logout-button'>sign out</button>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <ReactPlayer
        url='https://s3-us-west-1.amazonaws.com/eden-audio/tracks/01+All+We+Know+(feat.+Phoebe+Ryan).m4a'
        playing/>
    );
  }
};

export default Track;
