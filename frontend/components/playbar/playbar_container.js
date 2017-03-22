import { connect } from 'react-redux';
import Playbar from './playbar';
import _ from 'lodash';
import { playPauseTrack } from '../../actions/track_actions';
import { likeTrack, fetchUserLikes } from '../../actions/like_actions';

const mapStateToProps = ({ tracks, session, likes }) => ({
  selectedTrack: tracks.selectedTrack,
  playing: tracks.playing,
  currentUser: session.currentUser,
  likes: _.values(likes.likes)
});

const mapDispatchToProps = dispatch => ({
  playPauseTrack: track => dispatch(playPauseTrack(track)),
  likeTrack: track_id => dispatch(likeTrack(track_id)),
  fetchUserLikes: user_id => dispatch(fetchUserLikes(user_id))
});

const PlaybarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);

export default PlaybarContainer;
