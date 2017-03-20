// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        localStorage.setItem('user', action.currentUser.username);
        localStorage.setItem('id', action.currentUser.id);
      } else {
        localStorage.clear();
      }
      return merge({}, state, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
