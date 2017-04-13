// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

class SignupModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    return () => this.setState({ open: true });
  }

  closeModal() {
    return () => {
      this.props.resetErrors();
      return this.setState({ open: false });
    };
  }

  update(field) {
    return event => this.setState({[field]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    this.props.processForm({ user })
              .then(this.closeModal());
  }

  render() {
    const errorList = (
      <ul>
        {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    if (this.props.currentUser) {
      return (
        <div className='auth-modal'>
          <Link to='/myprofile' >
            <button
              className="session-button signup-button">
              My Profile
            </button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className='auth-modal'>
          <button
            onClick={ this.openModal() }
            type='button'
            className="session-button signup-button">
            Sign Up
          </button>
          <Modal
            show={ this.state.open }
            onHide={ this.closeModal() }
            className='signup-modal'>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
              {errorList}
            </Modal.Header>

            <form onSubmit = {this.handleSubmit} className='session-form'>
              <Modal.Body>
                <label>
                  Username
                  <input
                    type='text'
                    placeholder='Username'
                    onChange={this.update('username')}
                    className='auth-input'/>
                </label>
                <label>
                  Email
                  <input
                    type='text'
                    placeholder='Email'
                    onChange={this.update('email')}
                    className='auth-input'/>
                </label>
                <label>
                  Password
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={this.update('password')}
                    className='auth-input'/>
                </label>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type='submit'
                  className='signup-submit'>
                  Sign Up
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      );
    }
  }

}

export default SignupModal;
