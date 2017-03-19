import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks, selectTrack } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = ({session, tracks}) => ({
  currentUser: session.currentUser,
  tracks: _.values(tracks.tracks),
  selectedTrack: tracks.selectedTrack
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: user_id => dispatch(fetchAllTracks(user_id)),
  selectTrack: track => dispatch(selectTrack(track))
});

const TrackIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);

export default TrackIndexContainer;
