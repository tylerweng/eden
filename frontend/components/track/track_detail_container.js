import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { selectPlayPauseTrack, fetchNextTrack } from '../../actions/track_actions';

const mapStateToProps = ({ tracks }) => ({
  selectedTrack: tracks.selectedTrack,
  profileTrack: tracks.profileTrack
});

const mapDispatchToProps = dispatch => ({
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack))
});

const TrackDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail);

export default TrackDetailContainer;
