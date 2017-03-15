// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import createHistory from 'history/createBrowserHistory';

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
    this.initialState = this.initialState.bind(this);
  }

  initialState() {
    return {
      open: false,
      username: '',
      email: '',
      password: ''
    };
  }

  redirect(path) {
    const history = createHistory();
    history.push(path);
  }

  openModal() {
    return () => this.setState({ open: true });
  }

  closeModal() {
    return () => this.setState({ open: false });
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
    return (
      <div className='signup-modal'>
        <button
          onClick={ this.openModal() }
          type='button'
          className="session-button signup-button">
          sign up
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
                  value={this.state.username}
                  onChange={this.update('username')}
                  className='signup-username'/>
              </label>
              <label>
                Email
                <input
                  type='text'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.update('email')}
                  className='signup-email'/>
              </label>
              <label>
                Password
                <input
                  type='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.update('password')}
                  className='signup-password'/>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <input type='submit' value="Sign Up"></input>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
