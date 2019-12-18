import React from 'react';
import PropTypes from 'prop-types';
import './FlatInput.css';

const FlatInput = () => (
  <form action="submit">
    <input type="text" placeholder="Search" className="input" />
  </form>
);

FlatInput.propTypes = {
  // bla: PropTypes.string,
};

FlatInput.defaultProps = {
  // bla: 'test',
};

export default FlatInput;
