import React, {useEffect, useState} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './state/actions';

import { WeatherApp } from '@components';

const WeatherAppContainer = (props) => {
  const { state, actions } = props;
  const {
    fetchFiveDayStatus,
    fetchCurrentStatus,
    fiveDayForecast,
    currentForecast,
  } = state;

  const [countdown, setCountdown] = useState(59);

  const handleInterval = () => {
    setCountdown((stateCountdown) => {
      if (stateCountdown !== 0) {
        return stateCountdown - 1;
      }

      actions.fetchFiveDayForecast();
      actions.fetchCurrentForecast();
      return 59;
    });
  };

  const startCountdown = () => {
    const intervalId = window.setInterval(handleInterval, 1000);

    return intervalId;
  };

  useEffect(() => {
    const intervalId = startCountdown();
    actions.fetchFiveDayForecast();
    actions.fetchCurrentForecast();

    return () => {
      clearInterval(intervalId);
    };
  }, []);



  return (
    <WeatherApp
      currentForecast={currentForecast}
      fiveDayForecast={fiveDayForecast}
      fetchFiveDayStatus={fetchFiveDayStatus}
      fetchCurrentStatus={fetchCurrentStatus}
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
