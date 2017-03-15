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
  }

  redirect(path) {
    const history = createHistory();
    history.push(path);
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
    let errorList;
    if (this.props.errors) {
      errorList = (
        <ul>
          {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
        </ul>
      );
    } else {
      errorList = <div></div>;
    }

    if (localStorage.user) return <div></div>;

    return (
      <div className='auth-modal'>
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
            <Modal.Title>sign up</Modal.Title>
            {errorList}
          </Modal.Header>

          <form onSubmit = {this.handleSubmit} className='session-form'>
            <Modal.Body>
              <label>
                username
                <input
                  type='text'
                  placeholder='username'
                  onChange={this.update('username')}
                  className='auth-input'/>
              </label>
              <label>
                email
                <input
                  type='text'
                  placeholder='email'
                  onChange={this.update('email')}
                  className='auth-input'/>
              </label>
              <label>
                password
                <input
                  type='password'
                  placeholder='password'
                  onChange={this.update('password')}
                  className='auth-input'/>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <input type='submit' value="sign up" className='signup-submit'></input>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
