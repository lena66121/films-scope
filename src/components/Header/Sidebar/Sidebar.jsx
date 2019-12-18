import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

const Sidebar = (props) => (
  <div className={styles.SidebarWrapper}>
    Test content
  </div>
);

Sidebar.propTypes = {
  // bla: PropTypes.string,
};

Sidebar.defaultProps = {
  // bla: 'test',
};

export default Sidebar;
