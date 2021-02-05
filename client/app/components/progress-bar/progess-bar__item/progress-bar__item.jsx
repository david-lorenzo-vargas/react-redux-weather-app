import React from 'react';
import styles from './progress-bar__item.scss';

const ProgressBarItem = (props) => {
  const { width } = props;

  const barWidth = {
    width: `${width}%`,
  };

  return (
    <div className={styles['progress-bar']} style={barWidth} />
  );
};

export default ProgressBarItem;
