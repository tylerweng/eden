// Components
import {
  RECEIVE_QUERY_RESULTS
} from '../actions/session_actions';

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUERY_RESULTS:
      return action.queryResults;
    default:
      return state;
  }
};

export default searchReducer;
