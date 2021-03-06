import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks, selectPlayPauseTrack, fetchNextTrack } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = ({session, tracks}) => ({
  currentUser: session.currentUser,
  tracks: _.values(tracks.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: user_id => dispatch(fetchAllTracks(user_id)),
  selectPlayPauseTrack: selectedTrack => dispatch(selectPlayPauseTrack(selectedTrack)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack))
});

const TrackIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);

export default TrackIndexContainer;
