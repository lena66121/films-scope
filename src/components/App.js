import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import { fetchMovies } from '../redux/moviesOperations';

const API_KEY = '15891240588cf92d8fa99ed84f62a354';

class App extends Component {
  // componentDidMount() {
  //   const { fetchTrendMovies, currentPage } = this.props;
  //   fetchTrendMovies(
  //     `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`,
  //   );
  // }

  // componentDidUpdate(prevProps) {
  //   const { fetchTrendMovies, currentPage } = this.props;
  //   if (prevProps.currentPage !== currentPage) {
  //     fetchTrendMovies(
  //       `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`,
  //     );
  //   }
  // }




  render() {
    return (
      <div>
        {/* <Header /> */}
        <Route path="/" render={props => <Header {...props} />} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route
            path="/movies/:movieId"
            render={props => <MovieDetailsPage {...props}/>}
          /> */}
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  fetchTrendMovies: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
  currentPage: state.currentPage,
});

const mapDispatchToProps = {
  fetchTrendMovies: fetchMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
