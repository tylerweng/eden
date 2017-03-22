// Libraries
import merge from 'lodash/merge';
// Components
import {
  RECEIVE_TRACK_LIKE,
  RECEIVE_USER_LIKES
} from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK_LIKE:
      return merge({}, state, {likes: action.like} )
    case RECEIVE_USER_LIKES:
      return merge({}, state, {likes: action.likes} )
    default:
      return state;
  }
};

export default likesReducer;
