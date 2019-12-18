import {
  TO_PREV_PAGE,
  FETCH_MOVIES_SUCCESS,
  TO_NEXT_PAGE,
  RESET_PAGE,
  DO_SEARCH,
  DELETE_MOVIES,
  FETCH_MOVIE_SUCCESS,
} from './moviesActions';

export const moviesReducers = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_SUCCESS:
      return payload;
    case DELETE_MOVIES:
      return payload;  
    default:
      return state;
  }
};

export const movieReducers = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export const currentPageReducer = (state = 1, { type }) => {
  switch (type) {
    case TO_NEXT_PAGE:
      return state + 1;
    case TO_PREV_PAGE:
      return state - 1;
    case RESET_PAGE:
      return 1;
    default:
      return state;
  }
};

export const queryReducers = (state = '', { type, payload }) => {
  switch (type) {
    case DO_SEARCH:
      return payload;
    default:
      return state;
  }
};
