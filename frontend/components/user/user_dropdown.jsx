import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';

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

  handleLogout() {
    return () => (
      this.props.logout()
                .then(this.setState({ open: false}))
    )
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
      <div className='dropdown-content'>
        <MenuItem>
          <Link to='/myprofile'>
            <span
              onClick={this.closeForm()}
              className='link'>
              My Profile
            </span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/homepage'>
            <span
              onClick={this.handleLogout()}
              className='link'>
              Log Out
            </span>
          </Link>
        </MenuItem>
      </div>
    );
  }


  render() {
    if (!this.props.currentUser) return <div></div>;
    return (
      <DropdownButton
         title={<img
           src='https://s3-us-west-1.amazonaws.com/eden-audio/application_images/user_profile_icon.png'
           className='user-profile-icon img-circle'>
         </img>}
         id='dropdown'
         onClick={this.openProfile}
         noCaret
         className='session-button dropdown-button'>
        {this.displayForm()}
      </DropdownButton>
    );
  }
};

export default UserDropdown;
