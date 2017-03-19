// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import upload from 'superagent';

class FileUpload extends React.Component{

  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }
   onDrop(files) {
     superagent.post('/upload')
     .attach('theseNamesMustMatch', files[0])
     .end((err, res) => {
       if (err) console.log(err);
       alert('File uploaded!');
     })
   }

   render(){
     return (
         <div>
           <Dropzone onDrop={this.onDrop} multiple={false}>
             <div>Try dropping a file here, or click to select a file to upload.</div>
           </Dropzone>
         </div>
     );
   }
};

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
          upload
        </Button>
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
              <FileUpload />
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
              <Button
                type='submit'
                className='upload-submit'>
                upload
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default NewTrack;
