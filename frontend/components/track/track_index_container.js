import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = state => {
  return {
  currentUser: state.session.currentUser,
  tracks: _.values(state.tracks.tracks)
}};

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: user_id => dispatch(fetchAllTracks(user_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
