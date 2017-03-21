// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';

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

    if (!this.props.currentUser) return <div></div>;

    return (
      <div className='auth-modal'>
        <Button
          onClick={ this.openModal() }
          type='button'
          className="upload-button">
          Upload
        </Button>
        <Modal
          show={ this.state.open }
          onHide={ this.closeModal() }
          className='upload-modal'>
          <Modal.Header closeButton>
            <Modal.Title>Upload</Modal.Title>
            {errorList}
          </Modal.Header>
          <form onSubmit = {this.handleSubmit} className='session-form'>
            <Modal.Body>
              <label>
                Title
                <input
                  type='text'
                  placeholder='Title'
                  onChange={this.update('title')}
                  className='auth-input'/>
              </label>
              <label>
                Artist
                <input
                  type='text'
                  placeholder='Artist'
                  onChange={this.update('artist')}
                  className='auth-input'/>
              </label>
              <label>
                Track Url
                <input
                  type='text'
                  placeholder='Track Url'
                  onChange={this.update('track_url')}
                  className='auth-input'/>
              </label>
              <label>
                Img Url
                <input
                  type='text'
                  placeholder='Optional'
                  onChange={this.update('img_url')}
                  className='auth-input'/>
              </label>
              <label>
                Description
                <textarea
                  rows='4'
                  cols='50'
                  placeholder='Optional'
                  onChange={this.update('description')}
                  className='auth-input'/>
              </label>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type='submit'
                className='upload-submit'>
                Upload
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default NewTrack;
