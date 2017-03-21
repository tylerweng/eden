import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { selectPlayPauseTrack, fetchTrack } from '../../actions/track_actions';

const mapStateToProps = ({ tracks }) => ({
  selectedTrack: tracks.selectedTrack,
  profileTrack: tracks.profileTrack
});

const mapDispatchToProps = dispatch => ({
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track))
});

const TrackDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail);

export default TrackDetailContainer;
