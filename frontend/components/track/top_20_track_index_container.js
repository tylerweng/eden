import { connect } from 'react-redux';
import Top20TrackIndex from './top_20_track_index';
import { fetchTop20Tracks, selectPlayPauseTrack } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = ({ tracks }) => ({
  tracks: _.values(tracks.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchTop20Tracks: () => dispatch(fetchTop20Tracks()),
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track))
});

const Top20TrackIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Top20TrackIndex);

export default Top20TrackIndexContainer;
