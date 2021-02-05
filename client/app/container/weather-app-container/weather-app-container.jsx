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

  const [countdown, setCountdown] = useState({seconds: 60});

  const minuteCountdown = () => {
    setInterval(() => {
      if (countdown.seconds !== 0) {
        setCountdown({
          seconds: countdown.seconds -1,
        });
      }
      if (countdown.secconds === 0) {
        setCountdown({
          seconds: 60,
        });
      }
    }, 1000);
  };

  console.log(countdown.seconds)

  const timer = () => {
    setInterval(() => {
      actions.fetchFiveDayForecast();
      actions.fetchCurrentForecast();
    }, 1000 * 60);
  };

  useEffect(() => {
    timer();
    minuteCountdown();
    actions.fetchFiveDayForecast();
    actions.fetchCurrentForecast();
  }, []);

  return (
    <WeatherApp
      currentForecast={currentForecast}
      fiveDayForecast={fiveDayForecast}
      fetchFiveDayStatus={fetchFiveDayStatus}
      fetchCurrentStatus={fetchCurrentStatus}
      countdown={countdown.seconds}
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
