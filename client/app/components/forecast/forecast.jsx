import React from 'react';
import styles from './forecast.scss';

import { ForecastItem } from '@components';

const Forecast = (props) => {
  const {} = props;

  const weekdForecast = [
    {
      day: 'Mon',
      temperature: '12C',
    },
    {
      day: 'Tue',
      temperature: '15C',
    },
    {
      day: 'Wed',
      temperature: '20C',
    },
    {
      day: 'Thu',
      temperature: '22C',
    },
    {
      day: 'Fri',
      temperature: '19C',
    },
  ];

  return (
    <div className={styles['forecast']}>
      <ForecastItem week={weekdForecast} />
    </div>
  );
};

export default Forecast;
