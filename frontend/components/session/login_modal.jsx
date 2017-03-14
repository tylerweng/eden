// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap-modal';
import createHistory from 'history/createBrowserHistory';
import merge from 'lodash/merge';

class LoginModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  initialState() {
    return {
      open: false,
      username: '',
      password: ''
    };
  }

  redirect(path) {
    const history = createHistory();
    history.push(path);
  }

  update(field) {
    return event => this.setState({[field]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = merge(
                   {},
                   {
                     username: this.state.username,
                     password: this.state.password,
                   }
                 );
    debugger;
    this.props.processForm({ user })
              .then(this.redirect('/'));
  }

  render() {
    const openModal = () => this.setState({ open: true });
    const closeModal = () => this.setState(this.initialState());
    return (
      <div className='login-modal'>
        <button
          onClick={ openModal }
          type='button'
          value='Login'
          className='login-button'>
          Login
        </button>
        <Modal
          show={ this.state.open }
          onHide={ closeModal }>
          <Modal.Header closeButton>Login
            <Modal.Title>Login</Modal.Title>
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
                  className='login-username'/>
              </label>
              <label>
                Password
                <input
                  type='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.update('password')}
                  className='login-password'/>
              </label>
              <input type='submit' value="Submit"></input>
            </Modal.Body>
          </form>

        </Modal>
      </div>
    );
  }
}

export default LoginModal;
