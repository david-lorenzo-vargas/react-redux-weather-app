import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarItem } from '@components'
import styles from './progress-bar.scss';

const ProgressBar = (props) => {
  const { width } = props;

  return (
    <div className={styles['progress-bar']}>
      <ProgressBarItem width={width} />
    </div>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number,
};

export default ProgressBar;
