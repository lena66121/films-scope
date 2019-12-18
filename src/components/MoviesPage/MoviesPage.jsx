import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../redux/moviesOperations';
import { deleteAllMovies } from '../../redux/moviesActions';
import styles from './MoviesPage.module.css';

const API_KEY = '15891240588cf92d8fa99ed84f62a354';

class MoviesPage extends Component {
  componentDidMount() {
    const { fetchMoviesByQuery, movies, query, history } = this.props;
    if (query) {
      fetchMoviesByQuery(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
      );
    } else {
      history.push('/');
    }
  }

  componentDidUpdate(prevProps) {
    const { fetchMoviesByQuery, movies, query } = this.props;
    if (prevProps.query !== query) {
      fetchMoviesByQuery(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
      );
    }
  }

  componentWillUnmount() {
    this.props.deleteAllMovies();
  }

  // useEffect(() => fetchMoviesByQuery(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`))
  render() {
    const { fetchMoviesByQuery, movies, query } = this.props;
    return (
      <div className={styles.movieWrapper}>
        <ul className={styles.movies}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movie}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                  alt="poster"
                  className={styles.movieImg}
                />
                <h2 className={styles.movieName}>
                  {movie.title ? movie.title : movie.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  // bla: PropTypes.string,
};

MoviesPage.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  movies: state.movies,
  currentPage: state.currentPage,
  query: state.query,
});

const mapDispatchToProps = {
  fetchMoviesByQuery: fetchMovies,
  deleteAllMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
