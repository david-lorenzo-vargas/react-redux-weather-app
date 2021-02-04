import React from 'react';
import styles from './forecast.scss';

import { ForecastItem } from '@components';

const Forecast = (props) => {
  const { weekForecast, icon } = props;

  const hasData = weekForecast && !!weekForecast.length

  return (
    <div className={styles['forecast']}>
      {hasData && (
        weekForecast.map((item, index) => (
          <ForecastItem
            key={index}
            timestamp={item.dt}
            temperature={item.main.temp}
            icon={icon}
          />
        ))
      )}
    </div>
  );
};

export default Forecast;
