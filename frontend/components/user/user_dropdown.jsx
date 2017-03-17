import React from 'react';
import { Link } from 'react-router-dom';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleMyProfile = this.handleMyProfile.bind(this);
    this.displayForm = this.displayForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.openProfile = this.openProfile.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout()
              .then(this.setState({ open: false}))
              .then(localStorage.clear());
  }


  handleMyProfile(event) {
    event.preventDefault();
    this.setState({ open: false});
  }

  openProfile() {
    const newOpen = !this.state.open;
    this.setState({ open: newOpen});
  }

  closeForm() {
    return () => this.setState({open: false})
  }

  displayForm(){
    if (!this.state.open) return <div></div>;
    return(
      <div className='dropdown-form'>
        <div className='dropdown-content'>
          <Link to='/myprofile'>
            <span
              onClick={this.closeForm()}
              className='link'>
              my profile
            </span>
          </Link>
          <div>
            <button onClick={this.handleLogout} className='logout-button'>log out</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // const userId = this.props.userId;
    if (!this.props.userId) return <div></div>;
    return (
      <div className='session-button dropdown-button'>
        <button onClick={this.openProfile}>
          <i className="fa fa-user user-profile-icon" aria-hidden="true"></i>
        </button>
        {this.displayForm()}
      </div>
    );
  }
};

export default UserDropdown;
