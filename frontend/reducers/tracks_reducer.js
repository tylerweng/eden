// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_TRACK,
  RECEIVE_ALL_TRACKS,
  UPLOAD_TRACK,
  SELECT_TRACK
} from '../actions/track_actions';

const _nullTracks = Object.freeze({
  tracks: {},
  selectedTrack: null
})
const tracksReducer = (state = _nullTracks, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TRACK:
      newState.tracks = action.track;
      return newState;
    case UPLOAD_TRACK:
      newState.tracks = merge(newState.tracks, action.track);
      return newState;
    case RECEIVE_ALL_TRACKS:
      newState.tracks = action.tracks;
      return newState;
    case SELECT_TRACK:
      newState.selectedTrack = action.selectedTrack;
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
