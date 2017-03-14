// Libraries
import merge from 'lodash/merge';

// Components
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions';

const initialState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, initialState, { currentUser });
    case LOGOUT:
      return merge({}, initialState);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, initialState, { errors });
    default:
      return state;
  }
};

export default sessionReducer;
