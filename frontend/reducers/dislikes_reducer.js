// Libraries
import merge from 'lodash/merge';
// Components
import {
  RECEIVE_TRACK_DISLIKE,
  RECEIVE_TRACK_UNDISLIKE,
  RECEIVE_USER_DISLIKES
} from '../actions/dislike_actions';

const _nullDislikes = Object.freeze({
  dislikes: {}
});

const dislikesReducer = (state = _nullDislikes, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TRACK_DISLIKE:
      newState.dislikes = merge(newState.dislikes, {[action.dislike.dislike.id]: action.dislike.dislike });
      return newState;
    case RECEIVE_TRACK_UNDISLIKE:
      delete newState.dislikes[action.dislike.dislike.id];
      return newState;
    case RECEIVE_USER_DISLIKES:
      newState.dislikes = action.dislikes;
      return newState;
    default:
      return state;
  }
};

export default dislikesReducer;
