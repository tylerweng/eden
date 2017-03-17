import { connect } from 'react-redux';
import { upload } from '../../actions/track_actions';
import { resetErrors } from '../../actions/error_actions';
import NewTrack from './new_track';


const mapStateToProps = ({ session, errors}) => ({
  currentUser: session.currentUser,
  errors
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
