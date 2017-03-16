import { connect } from 'react-redux';
import { upload, resetErrors } from '../../actions/track_actions';
import NewTrack from './new_track';

const mapStateToProps = ({ tracks, session }) => ({
  currentUser: session.currentUser,
  errors: tracks.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: track => dispatch(upload(track)),
  resetErrors: () => dispatch(resetErrors())
});


const NewTrackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrack);

export default NewTrackContainer;
