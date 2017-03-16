// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_TRACK,
  RECEIVE_ALL_TRACKS,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/track_actions';

const initialState = Object.freeze({
  tracks: [],
  errors: []
});

const trackReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TRACK:
      newState.tracks = [action.track];
      newState.errors = [];
      return newState;
    case RECEIVE_ALL_TRACKS:
      newState.tracks = action.tracks;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case RESET_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default trackReducer;
