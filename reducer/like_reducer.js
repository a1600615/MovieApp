import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_MOVIE,
  CLEAR_LIKED_MOVIES
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likedMovies || [];
    case CLEAR_LIKED_MOVIES:
      return [];
    case LIKE_MOVIE:
      return _.uniqBy([
        action.payload, ...state
      ], 'id');
    default:
      return state;
  }
}