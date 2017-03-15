// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import createHistory from 'history/createBrowserHistory';

class LoginModal extends React.Component {

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
      email: ''
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
    return () => this.setState(this.initialState());
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
              .then(this.closeModal())
              .then(localStorage.setItem('currentUser', user.username));
  }

  render() {
    const errorList = (
      <ul>
        {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    if (localStorage.currentUser) return <div></div>;
      
    return (
      <div className='login-modal'>
        <button
          onClick={ this.openModal() }
          type='button'
          className="session-button login-button">
          login
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
                  className='login-username'/>
              </label>
              <label>
                Password
                <input
                  type='password'
                  placeholder='Password'
                  onChange={this.update('password')}
                  className='login-password'/>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <input type='submit' value="Login"></input>
            </Modal.Footer>
          </form>

        </Modal>
      </div>
    );
  }
}

export default LoginModal;
