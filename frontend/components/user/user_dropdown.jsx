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
      <div className='dropdown-form'>
        <div className='dropdown-content'>
          <Link to='myprofile'>
            <span
              onClick={this.closeForm()}
              className='link'>
              my profile
            </span>
          </Link>
          <div>
            <Link to='/'>
              <span
                onClick={this.handleLogout()}
                className='link'>
                log out
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }


  render() {
    if (!this.props.currentUser) return <div></div>;
    return (
      <div className='session-button dropdown-button'>
        <button onClick={this.openProfile}>
          <div className="fa-container"><i className="fa fa-user" aria-hidden="true"></i></div>
        </button>
        {this.displayForm()}
      </div>
    );
  }
};

export default UserDropdown;
