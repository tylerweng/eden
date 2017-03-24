import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { selectPlayPauseTrack, fetchNextTrack, showProfile, fetchSimilarTracks } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = (state) => ({
  selectedTrack: state.tracks.selectedTrack,
  profileTrack: state.tracks.profileTrack,
  similarTracks: state.tracks.similarTracks
});

const mapDispatchToProps = dispatch => ({
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack)),
  showProfile: id => dispatch(showProfile(id)),
  fetchSimilarTracks: similarTrack => dispatch(fetchSimilarTracks(similarTrack))
});

const TrackDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackDetail);

export default TrackDetailContainer;
