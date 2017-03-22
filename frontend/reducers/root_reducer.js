// Libraries
import { combineReducers } from 'redux';

// Components
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import tracksReducer from './tracks_reducer';
import searchReducer from './search_reducer';
import likesReducer from './likes_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tracks: tracksReducer,
  search: searchReducer,
  likes: likesReducer
});

export default rootReducer;
