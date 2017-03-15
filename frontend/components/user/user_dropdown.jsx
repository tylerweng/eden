import React from 'react';
import { Link } from 'react-router';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.logout()
              .then(localStorage.setItem('currentUser', ''));
  }

  render() {
    const userId = this.props.userId;
    if (!localStorage.currentUser) return <div></div>;
    return (
      <div>
        <div className='user-profile-icon'>

        </div>
        <div className='user-dropdown'>
          <button onClick={this.handleClick} className='logout-button'>sign out</button>
        </div>
      </div>
    );
  }
};

export default UserDropdown;
