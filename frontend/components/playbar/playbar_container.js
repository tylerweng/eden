import { connect } from 'react-redux';
import Playbar from './playbar';
import _ from 'lodash';

const mapStateToProps = ({ tracks }) => ({
  selectedTrack: tracks.selectedTrack,
  playing: tracks.playing
});

const mapDispatchToProps = dispatch => ({
});

const PlaybarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);

export default PlaybarContainer;
