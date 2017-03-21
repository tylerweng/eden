import { connect } from 'react-redux';
import TrackDetail from './track_detail';

const mapStateToProps = ({ tracks }) => ({
  selectedTrack: tracks.selectedTrack
});

const mapDispatchToProps = dispatch => ({
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track))
});

const TrackDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail);

export default TrackDetailContainer;
