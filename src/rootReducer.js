import { combineReducers } from 'redux';
import postsReducer from './reducers/postsReducer'; // Adjust if necessary

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
