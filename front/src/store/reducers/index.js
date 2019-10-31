import { combineReducers } from 'redux';
import moviesAndShowsReducer from './moviesAndShowsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    moviesAndShows: moviesAndShowsReducer,
    users: usersReducer
  });