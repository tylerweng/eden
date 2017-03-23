import { connect } from 'react-redux';
import MyLikes from './my_likes';
import { selectPlayPauseTrack, fetchNextTrack } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = ({ session, likes }) => ({
  currentUser: session.currentUser,
  likes: _.values(likes.likes)
});

const mapDispatchToProps = dispatch => ({
  selectPlayPauseTrack: selectedTrack => dispatch(selectPlayPauseTrack(selectedTrack)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack))
});

const MyLikesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyLikes);

export default MyLikesContainer;
