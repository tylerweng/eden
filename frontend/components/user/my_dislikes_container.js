import { connect } from 'react-redux';
import MyDislikes from './my_dislikes';
import { selectPlayPauseTrack, fetchNextTrack } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = ({ session, dislikes }) => ({
  currentUser: session.currentUser,
  dislikes: _.values(dislikes.dislikes)
});

const mapDispatchToProps = dispatch => ({
  selectPlayPauseTrack: selectedTrack => dispatch(selectPlayPauseTrack(selectedTrack)),
  fetchNextTrack: selectedTrack => dispatch(fetchNextTrack(selectedTrack))
});

const MyDislikesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDislikes);

export default MyDislikesContainer;
