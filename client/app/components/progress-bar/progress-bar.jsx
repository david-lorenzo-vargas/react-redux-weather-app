import React from 'react';
import { ProgressBarItem } from '@components'
import styles from './progress-bar.scss';

const ProgressBar = () => (
  <div className={styles['progress-bar']}>
    <ProgressBarItem />
  </div>
);

export default ProgressBar;
