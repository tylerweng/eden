// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/session_actions';

const initialState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      newState.errors = [];
      action.user
        ? localStorage.setItem('user', action.user.username)
        : localStorage.setItem('user', '');
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

export default sessionReducer;
