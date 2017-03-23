// Components
import {
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/error_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors === undefined ? state : action.errors;
    case RESET_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
