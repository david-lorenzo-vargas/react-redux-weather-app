import React from 'react';
import styles from './forecast.scss';

import { ForecastItem } from '@components';

const Forecast = (props) => {
  const { weekForecast, icon } = props;

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const hasData = weekForecast && !!weekForecast.length

  return (
    <div className={styles['forecast']}>
      {hasData && (
        weekForecast.map((day, index) => (
          <ForecastItem
            key={index}
            day={weekDays[index]}
            temperature={day.main.temp}
            icon={icon}
          />
        ))
      )}
    </div>
  );
};

export default Forecast;
