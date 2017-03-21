import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { playPauseTrack } from '../../actions/track_actions';

const mapStateToProps = ({ tracks }) => ({
  selectedTrack: tracks.selectedTrack
});

const mapDispatchToProps = dispatch => ({
  playPauseTrack: track => dispatch(playPauseTrack(track))
});

const TrackDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail);

export default TrackDetailContainer;
