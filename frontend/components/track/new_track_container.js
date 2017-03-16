import { connect } from 'react-redux';
import { upload } from '../../actions/track_actions';
import NewTrack from './new_track';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser,
  currentUser: session.currentUser,
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  upload: track => dispatch(upload(track))
});


const TrackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrack);

export default NewTrackContainer;
