import React from 'react';
import PropTypes from 'prop-types';
import { Header, Forecast } from '@components';

const WeatherApp = (props) => {
  const {
    fiveDayForecast,
    fetchFiveDayStatus,
    currentWeather,
    fetchCurrentWeatherStatus,
    countdown,
  } = props;

  const fiveDayHasData = fiveDayForecast && fetchFiveDayStatus === 'success' && !!fiveDayForecast.list.length;

  const currentHasData = currentWeather && fetchCurrentWeatherStatus === 'success';

  return (
    <>
      <Header
        temperature={currentHasData? currentWeather.main : ''}
        city={currentHasData? currentWeather.name : ''}
        countdown={countdown}
      />
      <Forecast
        weekForecast={fiveDayHasData? fiveDayForecast.list : []}
        countdown={countdown}
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
