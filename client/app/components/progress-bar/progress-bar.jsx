import React from 'react';
import PropTypes from 'prop-types';
import styles from './progress-bar.scss';

const ProgressBar = (props) => {
  const { width } = props;

  const barWidth = {
    width: `${width}%`,
  };

  return (
    <div className={styles['progress-bar']}>
      <div className={styles['progress-bar__item']} style={barWidth} />
    </div>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number,
};

export default ProgressBar;
