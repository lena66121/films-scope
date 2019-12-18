import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { fetchMovie } from '../../redux/moviesOperations';
// import { Test } from './MovieDetailsPage.styles';

// const MovieDetailsPage = ({ movies, location, match }) => {
//   //const { movieId } = match.params;

//   // const getId = moviesArr => {
//   //   if (moviesArr) moviesArr.find(movie => movie.id === movieId);
//   // };
//   // const currentMovie = getId(movies);
//   // setTimeout(() => {
//   //   console.log(movies[0]);
//   // }, 1000)
//   console.log(movies[0].id);

//   return (
//    <div>

//    </div>
//   )

//   // return {
//   //   return <p></p>
//   //   // if(movies) {
//   //   //   return <p>Hallo</p>;
//   //   // }
//   // };
// };

const API_KEY = '15891240588cf92d8fa99ed84f62a354';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const { fetchMovie } = this.props;
    fetchMovie(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  }

  handleClick = () => {
    const {history, location, match} = this.props;

    history.goBack();
    if(localStorage.scrollPosition) {
      const height = Number(localStorage.getItem("scrollPosition"));
      console.log(Number(height.toFixed()));
      document.body.scrollTo(0, height);
   }
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Return</button>
      <p>{this.props.movie.original_title}</p>
      </div>
    );
  }
}

MovieDetailsPage.propTypes = {
  // bla: PropTypes.string,
};

MovieDetailsPage.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  movies: state.movies,
  movie: state.movie,
});

const mapDispatchToProps = {
  fetchMovie,
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
