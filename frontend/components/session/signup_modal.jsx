// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap-modal';
import createHistory from 'history/createBrowserHistory';
import merge from 'lodash/merge';

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
                     email: this.state.email
                   }
                 );
    this.props.processForm({ user })
              .then(this.setState(this.initialState()))
              .then(this.redirect('/'));
  }

  openModal() {
    this.redirect('/api/users')
  }

  render() {
    const openModal = () => this.setState({ open: true });
    const closeModal = () => this.setState(this.initialState());
    return (
      <div className='signup-modal'>
        <button
          onClick={ openModal }
          type='button'
          value='Sign Up' />
        <Modal
          show={ this.state.open }
          onHide={ closeModal }>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
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
              <label className='session-form-email'>
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
              <input type='submit' value="Submit"></input>
            </Modal.Body>
          </form>

        </Modal>
      </div>
    );
  }
}

export default SignupModal;
