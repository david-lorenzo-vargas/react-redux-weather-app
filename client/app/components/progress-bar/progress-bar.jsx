import React from 'react';
import PropTypes from 'prop-types';
import styles from './progress-bar.scss';

const getWidth = (countdown) => {
  const step = 1;
  const time = 60;
  const percentage = (100 * step) / time;
  const count = time - countdown;
  const width = count * percentage;

  return width;
};

const ProgressBar = ({ countdown }) => {
  const barWidth = {
    width: `${getWidth(countdown)}%`,
  };

  return (
    <div className={styles['progress-bar']}>
      <div className={styles['progress-bar__item']} style={barWidth}/>
    </div>
  );
};

ProgressBar.propTypes = {
  countdown: PropTypes.number,
};

export default ProgressBar;
