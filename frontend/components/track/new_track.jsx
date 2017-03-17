// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';
import createHistory from 'history/createBrowserHistory';

class NewTrack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user_id: this.props.currentUser.id,
      title: '',
      artist: '',
      track_url: '',
      img_url: '',
      description: ''
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
    const track = {
      user_id: this.state.user_id,
      title: this.state.title,
      artist: this.state.artist,
      track_url: this.state.track_url,
      img_url: this.state.img_url,
      description: this.state.description
    };
    this.props.processForm({ track })
              .then(this.closeModal());
  }

  render() {
    const errorList = (
      <ul>
        {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    if (!localStorage.user) return <div></div>;

    return (
      <div className='auth-modal'>
        <button
          onClick={ this.openModal() }
          type='button'
          className="session-button upload-button">
          upload
        </button>
        <Modal
          show={ this.state.open }
          onHide={ this.closeModal() }
          className='upload-modal'>
          <Modal.Header closeButton>
            <Modal.Title>upload</Modal.Title>
            {errorList}
          </Modal.Header>
          <form onSubmit = {this.handleSubmit} className='session-form'>
            <Modal.Body>
              <label>
                title
                <input
                  type='text'
                  placeholder='title'
                  onChange={this.update('title')}
                  className='auth-input'/>
              </label>
              <label>
                artist
                <input
                  type='text'
                  placeholder='artist'
                  onChange={this.update('artist')}
                  className='auth-input'/>
              </label>
              <label>
                track url
                <input
                  type='text'
                  placeholder='track url'
                  onChange={this.update('track_url')}
                  className='auth-input'/>
              </label>
              <label>
                img url
                <input
                  type='text'
                  placeholder='optional'
                  onChange={this.update('img_url')}
                  className='auth-input'/>
              </label>
              <label>
                description
                <textarea
                  rows='4'
                  cols='50'
                  placeholder='optional'
                  onChange={this.update('description')}
                  className='auth-input'/>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <input type='submit' value="upload" className='upload-submit'></input>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default NewTrack;
