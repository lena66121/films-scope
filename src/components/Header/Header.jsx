import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleSearch } from '../../redux/moviesActions';
import MovieIconComponent from './MovieIcon/MovieIconComponent';
import Sidebar from './Sidebar/Sidebar';
// import FlatInput from '../FlatInput/FlatInput';

import styles from './Header.module.css';

const Header = ({ history, handleSearch }) => {
  const [isOpenSidebar, setSidebar] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    let { value } = e.target.childNodes[0];
    if (value) {
      history.push('/movies');
      handleSearch(e.target.childNodes[0].value);
    }
    value = '';
    console.log(value);
  };

  const handleSidebarClick = () => {
    setSidebar(true);
  }

  return isOpenSidebar ? (
    <Sidebar isOpen={isOpenSidebar}/>
  ) : (
    <div className={styles.wrapper}>
      <Link to="/">
        <div className={styles.logoWrapper}>
          <MovieIconComponent />
          <h1 className={styles.logo}>MovieScope</h1>
        </div>
      </Link>

      <div className={styles.headerNav}>
        <form action="submit" className={styles.form} onSubmit={handleSubmit}>
          <input type="text" className={styles.input} />
        </form>
        

        {/* <h3 className={styles.headerLibrary}>My Library</h3> */}
        {/* <button onClick={handleSidebarClick}>Hallo</button> */}
      </div>
    </div>
  );
};

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  movies: state.movies,
  currentPage: state.currentPage,
});

const mapDispatchToProps = {
  handleSearch,
};

export default connect(null, mapDispatchToProps)(Header);
