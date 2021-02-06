import React from 'react';
import styles from './progress-bar__item.scss';

const ProgressBarItem = (props) => {
  const { seconds } = props;

  const getWidth = () => {
    const step = 1;
    const time = 60;
    const percentage = (100 * step) / time;
    const count = time - seconds;
    const width = count * percentage;

    return width;
  };

  // const barWidth = {
  //   width: `${getWidth()}%`,
  // };

  // style={barWidth}

  return (
    <div className={styles['progress-bar']} />
  );
};

export default ProgressBarItem;
