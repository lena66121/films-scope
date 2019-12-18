import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../redux/moviesOperations';
import {
  toNextPage,
  toPreviousPage,
  deleteAllMovies,
} from '../../redux/moviesActions';
import styles from './HomePage.module.css';

const API_KEY = '15891240588cf92d8fa99ed84f62a354';

class HomePage extends Component {
  componentDidMount() {
    console.log('jfsdfnsjns');

    const { fetchMovies, currentPage, movies } = this.props;
    console.log('jfdkf');
    fetchMovies(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`,
    );
  }

  componentDidUpdate(prevProps) {
    const { fetchTrendMovies, currentPage } = this.props;
    if (prevProps.currentPage !== currentPage) {
      fetchTrendMovies(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`,
      );
    }
  }

  componentWillUnmount() {
    this.scrollTo();
    console.log(window.pageYOffset);
    this.props.deleteAllMovies();
  }

  scrollTo = () => {
    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPosition', scrollPosition);
  };

  handleClick = ({ target }) => {
    const { handlePrevClick, handleNextClick } = this.props;
    if (target.name === 'prev') {
      handlePrevClick();
    } else {
      handleNextClick();
    }
  };

  render() {
    const {
      movies,
      handlePrevClick,
      handleNextClick,
      currentPage,
    } = this.props;
    return (
      <div className={styles.movieWrapper}>
        <ul className={styles.movies}>
          {movies.map(movie => (
            <li key={movie.id} className={styles.movie}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
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
        <button
        className={styles.prevButton}
        // className={styles.button}
          name="prev"
          type="button"
          // style={{ display: currentPage === 1 ? 'none' : null }}
          disabled={currentPage === 1}
          onClick={this.handleClick}
        >
          previous
        </button>
        <button className={styles.nextButton} name="next" type="button" onClick={this.handleClick}>
          Next
        </button>
      </div>
    );
  }
}

// const HomePage = ({
//   movies,
//   handlePrevClick,
//   handleNextClick,
//   currentPage,
//   fetchTrendMovies
// }) => {
//   const handleClick = ({ target }) => {
//     if (target.name === 'prev') {
//       handlePrevClick();
//     } else {
//       handleNextClick();
//     }
//   };

// useEffect(() =>     fetchTrendMovies(
//   `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`,
// ), [])

// useEffect(() =>     fetchTrendMovies(
//   `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`,
// ), [movies])

//   return (
//     <div>
//       <ul className="movies">
//         {movies.map(movie => (
//           <li key={movie.id} className="movie">
//             <img
//               src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//               alt="poster"
//               className="movie__img"
//             />
//             <h2 className="movie__name">
//               {movie.title ? movie.title : movie.name}
//             </h2>
//           </li>
//         ))}
//       </ul>
//       <button
//         name="prev"
//         type="button"
//         style={{ display: currentPage === 1 ? 'none' : null }}
//         onClick={handleClick}
//       >
//         previous
//       </button>
//       <button name="next" type="button" onClick={handleClick}>
//         Next
//       </button>
//     </div>
//   );
// };

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
  currentPage: state.currentPage,
});

const mapDispatchToProps = {
  fetchMovies,
  handlePrevClick: toPreviousPage,
  handleNextClick: toNextPage,
  fetchTrendMovies: fetchMovies,
  deleteAllMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
