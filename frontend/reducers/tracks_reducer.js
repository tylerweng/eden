// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_TRACK,
  RECEIVE_ALL_TRACKS
} from '../actions/track_actions';

const _nullTracks = Object.freeze({
  tracks: {}
})
const tracksReducer = (state = _nullTracks, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK:
      return merge({}, state, { tracks: action.track });
    case RECEIVE_ALL_TRACKS:
      return merge({}, { tracks: action.tracks });
    default:
      return state;
  }
};

export default tracksReducer;
