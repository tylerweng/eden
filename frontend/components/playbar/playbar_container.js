import { connect } from 'react-redux';
import Playbar from './playbar';
import _ from 'lodash';
import { playPauseTrack } from '../../actions/track_actions';

const mapStateToProps = ({ tracks }) => ({
  selectedTrack: tracks.selectedTrack,
  playing: tracks.playing
});

const mapDispatchToProps = dispatch => ({
  playPauseTrack: track => dispatch(playPauseTrack(track))
});

const PlaybarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);

export default PlaybarContainer;
