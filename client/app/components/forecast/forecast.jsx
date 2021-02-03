import React from 'react';
import styles from './forecast.scss';

import { ForecastItem } from '@components';

const Forecast = (props) => {
  const {} = props;

  return (
    <div className={styles['forecast']}>
      <ForecastItem />
    </div>
  );
};

export default Forecast;
