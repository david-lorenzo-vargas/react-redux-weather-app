import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarItem } from '@components'
import styles from './progress-bar.scss';

const ProgressBar = (props) => {
  const { countdown } = props;

  return (
    <div className={styles['progress-bar']}>
      <ProgressBarItem seconds={countdown} />
    </div>
  );
};

ProgressBar.propTypes = {
  width: PropTypes.number,
};

export default ProgressBar;
