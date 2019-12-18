import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  moviesReducers,
  currentPageReducer,
  queryMoviesReducers,
  queryReducers,
  movieReducers
} from './moviesReducers';

const rootReducer = combineReducers({
  movies: moviesReducers,
  movie: movieReducers,
  currentPage: currentPageReducer,
  query: queryReducers,
});

const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
