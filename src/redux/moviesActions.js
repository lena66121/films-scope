export const FETCH_MOVIES_START = 'FETCH_MOVIES_START';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const TO_NEXT_PAGE = 'TO_NEXT_PAGE';
export const TO_PREV_PAGE = 'TO_PREV_PAGE';
export const RESET_PAGE = 'RESET_PAGE';
export const DO_SEARCH = 'DO_SEARCH';
export const DELETE_MOVIES = 'DELETE_MOVIES';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';

export const fetchMoviesStart = () => ({
  type: FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_ERROR,
  payload: error,
});

export const deleteAllMovies = () => ({
  type: DELETE_MOVIES,
  payload: [],
});

// current page actions

export const toNextPage = () => ({
  type: TO_NEXT_PAGE,
});

export const toPreviousPage = () => ({
  type: TO_PREV_PAGE,
});

export const resetCurrentPage = () => ({
  type: RESET_PAGE,
});

// search actions

export const handleSearch = query => ({
  type: DO_SEARCH,
  payload: query,
});

// fetch movie action 

export const fetchMovieSuccess = movies => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movies,
});


