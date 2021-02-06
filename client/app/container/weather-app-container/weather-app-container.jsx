import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './state/actions';

import { WeatherApp } from '@components';

const WeatherAppContainer = ({ state, actions }) => {
  const {
    fetchFiveDayStatus,
    fetchCurrentWeatherStatus,
    fiveDayForecast,
    currentWeather,
  } = state;

  const [countdown, setCountdown] = useState(60);

  const handleInterval = () => {
    setCountdown((stateCountdown) => {
      if (stateCountdown !== 1) {
        return stateCountdown - 1;
      }

      actions.fetchFiveDayForecast();
      actions.fetchCurrentWeather();
      return 60;
    });
  };

  const startCountdown = () => {
    const intervalId = window.setInterval(handleInterval, 1000);

    return intervalId;
  };

  useEffect(() => {
    const intervalId = startCountdown();
    actions.fetchFiveDayForecast();
    actions.fetchCurrentWeather();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <WeatherApp
      currentWeather={currentWeather}
      fiveDayForecast={fiveDayForecast}
      fetchFiveDayStatus={fetchFiveDayStatus}
      fetchCurrentWeatherStatus={fetchCurrentWeatherStatus}
      countdown={countdown}
    />
  );
};

const mapStateToProps = (store) => ({
  state: {
    ...store.weatherApp,
  },
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherAppContainer);
