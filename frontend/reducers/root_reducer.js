// Libraries
import { combineReducers } from 'redux';

// Components
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: sessionReducer
});

export default rootReducer;
