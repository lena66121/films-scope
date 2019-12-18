import {
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMovieSuccess
} from './moviesActions';

// const API_KEY = '15891240588cf92d8fa99ed84f62a354';
const API =
  'https://api.themoviedb.org/3/trending/all/day?api_key=15891240588cf92d8fa99ed84f62a354';

export const fetchMovies = url => dispatch => {
  dispatch(fetchMoviesStart());

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch(fetchMoviesSuccess(response.results));
    })
    .catch(err => dispatch(fetchMoviesError(err)));
};

export const fetchMovie = url => dispatch => {
  dispatch(fetchMoviesStart());

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch(fetchMovieSuccess(response));
    })
    .catch(err => dispatch(fetchMoviesError(err)));
};

export const deleteMovies = dispatch => {
  dispatch(fetchMoviesStart);

  fetch(API)
    .then(response => dispatch(fetchMoviesSuccess(response.results)))
    .catch(err => dispatch(fetchMoviesError(err)));
};
