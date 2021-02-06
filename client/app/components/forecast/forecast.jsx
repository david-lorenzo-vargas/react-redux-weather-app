import React from 'react';
import PropTypes from 'prop-types';
import { getDay } from '../../utilities/get-day';
import styles from './forecast.scss';

import { ForecastItem } from '@components';

const weekReduce = (weekForecast) => {
  return weekForecast.reduce((acc, currentValue) => {
    if (acc.length !== 0 ) {
      if (getDay(acc[acc.length -1].dt) === getDay(currentValue.dt)) {
        return acc;
      }
    }
    acc = [...acc, currentValue];
    return acc;
  }, []);
};

const Forecast = (props) => {
  const { weekForecast, countdown } = props;

  const hasData = weekForecast && !!weekForecast.length;

  const weekDays = hasData ? weekReduce(weekForecast) : [];

  return (
    <div className={styles['forecast']}>
      {weekDays.map((item, index) => (
        <ForecastItem
          key={index}
          timestamp={item.dt}
          temperature={item.main.temp}
          icon={item.weather[0].icon}
          countdown={countdown}
        />
      ))}
    </div>
  );
};

Forecast.propTypes = {
  weekForecast: PropTypes.arrayOf(PropTypes.object),
};

export default Forecast;
