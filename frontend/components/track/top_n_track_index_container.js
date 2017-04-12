import { connect } from 'react-redux';
import TopNTrackIndex from './top_n_track_index';
import { fetchTopNTracks, selectPlayPauseTrack, fetchNextTrack } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = ({ tracks }) => ({
  tracks: _.values(tracks.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchTopNTracks: (num_tracks) => dispatch(fetchTopNTracks(num_tracks)),
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack))
});

const TopNTrackIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNTrackIndex);

export default TopNTrackIndexContainer;
