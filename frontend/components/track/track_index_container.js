import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchAllTracks } from '../../actions/track_actions';
import _ from 'lodash';

const mapStateToProps = state => ({
  tracks: _.values(state.tracks)
});

const mapDispatchToProps = dispatch => ({
  fetchAllTracks: () => dispatch(fetchAllTracks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
