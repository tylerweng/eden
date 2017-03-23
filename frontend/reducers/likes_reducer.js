// Libraries
import merge from 'lodash/merge';
// Components
import {
  RECEIVE_TRACK_LIKE,
  RECEIVE_TRACK_UNLIKE,
  RECEIVE_USER_LIKES
} from '../actions/like_actions';

const _nullLikes = Object.freeze({
  likes: {}
});

const likesReducer = (state = _nullLikes, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TRACK_LIKE:
      if (action.like === undefined) return newState;
      newState.likes = merge(newState.likes, {[action.like.like.id]: action.like.like });
      return newState;
    case RECEIVE_TRACK_UNLIKE:
      if (action.like === undefined) return newState;
      delete newState.likes[action.like.like.id];
      return newState;
    case RECEIVE_USER_LIKES:
      newState.likes = action.likes;
      return newState;
    default:
      return state;
  }
};

export default likesReducer;
