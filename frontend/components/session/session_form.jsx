import React from 'react';
import createHistory from 'history/createBrowserHistory';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const user = merge({}, this.state);
    this.props.processForm({ user })
              .then(this.redirect('/'));
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit} className='session-form'>
        <h2>{this.props.formHeader}</h2>
        <label className='session-form-username'>
          Username
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
            className='login-input'/>
        </label>
        <label>
          Password
          <input
            type='password'
            value={this.state.password}
            onChange={this.update('password')}
            className='login-input'/>
        </label>
        <input type='submit' value="Submit"></input>
      </form>
    );
  }
}

export default SessionForm;
