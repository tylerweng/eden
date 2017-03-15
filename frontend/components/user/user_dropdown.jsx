import React from 'react';
import { Link } from 'react-router';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const userId = this.props.userId;
    return (
      <div className='user-dropdown'>
        <button onClick={this.handleClick}>sign out</button>
      </div>
    );
  }
};

export default UserDropdown;
