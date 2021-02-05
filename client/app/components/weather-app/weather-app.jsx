import React from 'react';
import { Header, Forecast } from '@components';

const WeatherApp = (props) => {
  const {
    fiveDayForecast,
    fetchFiveDayStatus,
    currentForecast,
    fetchCurrentStatus,
    countdown,
  } = props;

  const fiveDayHasData = fiveDayForecast && fetchFiveDayStatus === 'success' && !!fiveDayForecast.list.length;

  const currentHasData = currentForecast && fetchCurrentStatus === 'success';

  return (
    <>
      <Header
        temperature={currentHasData? currentForecast.main : ''}
        city={currentHasData? currentForecast.name : ''}
        countdown={countdown}
      />
      <Forecast
        weekForecast={fiveDayHasData? fiveDayForecast.list : []}
      />
    </>
  )
};

export default WeatherApp;