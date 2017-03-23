import { connect } from 'react-redux';
import Playbar from './playbar';
import _ from 'lodash';
import { playPauseTrack, selectPlayPauseTrack, fetchNextTrack } from '../../actions/track_actions';
import { likeTrack, unlikeTrack, fetchUserLikes } from '../../actions/like_actions';
import { dislikeTrack, undislikeTrack, fetchUserDislikes } from '../../actions/dislike_actions';

const mapStateToProps = ({ tracks, session, likes, dislikes }) => ({
  selectedTrack: tracks.selectedTrack,
  nextTrack: tracks.nextTrack,
  playing: tracks.playing,
  currentUser: session.currentUser,
  likes: _.values(likes.likes),
  dislikes: _.values(dislikes.dislikes),
  likeStatus: tracks.likeStatus
});

const mapDispatchToProps = dispatch => ({
  playPauseTrack: track => dispatch(playPauseTrack(track)),
  selectPlayPauseTrack: track => dispatch(selectPlayPauseTrack(track)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack)),
  likeTrack: track_id => dispatch(likeTrack(track_id)),
  unlikeTrack: id => dispatch(unlikeTrack(id)),
  fetchUserLikes: user_id => dispatch(fetchUserLikes(user_id)),
  dislikeTrack: track_id => dispatch(dislikeTrack(track_id)),
  undislikeTrack: id => dispatch(undislikeTrack(id)),
  fetchUserDislikes: user_id => dispatch(fetchUserDislikes(user_id))
});

const PlaybarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);

export default PlaybarContainer;
