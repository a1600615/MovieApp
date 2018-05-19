import axios from 'axios';
import {
    FETCH_MOVIES,
    LIKE_MOVIE,
    CLEAR_LIKED_MOVIES
  } from './types';


  export const fetchMovies = () => async (dispatch) => {
    try {
        let { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=cfe422613b250f702980a3bbf9e90716');
        dispatch({ type: FETCH_MOVIES, payload: data });
      } catch(e) {
        console.error(e);
      }
    };
  

  export const likeMovie = (movie) => {
        return {
            payload: movie,
            type: LIKE_MOVIE
        }

  }

