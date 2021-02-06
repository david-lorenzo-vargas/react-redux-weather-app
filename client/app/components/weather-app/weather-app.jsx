import React from 'react';
import PropTypes from 'prop-types';
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

WeatherApp.propTypes = {
  fiveDayForecast: PropTypes.object,
  fetchFiveDayStatus: PropTypes.string,
  currentForecast: PropTypes.object,
  fetchCurrentStatus: PropTypes.string,
  countdown: PropTypes.number,
}

export default WeatherApp;
