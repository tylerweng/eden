import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { selectPlayPauseTrack, fetchNextTrack, showProfile } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  selectedTrack: state.tracks.selectedTrack,
  profileTrack: state.tracks.profileTrack
});

const mapDispatchToProps = dispatch => ({
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack)),
  showProfile: id => dispatch(showProfile(id))
});

const TrackDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail);

export default TrackDetailContainer;
