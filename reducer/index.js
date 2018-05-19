import { combineReducers } from 'redux';
import movies from './movie_reducer';
import likedMovies from './like_reducer';

export default combineReducers({
   movies, likedMovies
});