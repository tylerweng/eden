// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';

class LoginModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
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
      password: this.state.password
    };
    this.props.processForm({ user })
              .then(this.closeModal());
  }

  demo(event) {
    event.preventDefault();
    const user = {
      username: 'Guest',
      password: 'password'
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
          <button
            onClick={ this.props.logout }
            type='button'
            className="session-button login-button">
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className='auth-modal'>
          <button
            onClick={ this.openModal() }
            type='button'
            className="session-button login-button">
            Login
          </button>
          <Modal
            show={ this.state.open }
            onHide={ this.closeModal() }
            className='login-modal'>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
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
                  className='login-submit'>
                  Login
                </Button>
                <Button
                  onClick={this.demo}
                  type='button'
                  className='login-submit'>
                  Guest
                </Button>
              </Modal.Footer>
            </form>

          </Modal>
        </div>
      );
    }
  }

}

export default LoginModal;
