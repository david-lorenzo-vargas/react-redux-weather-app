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

  const [seconds, setCountdown] = useState(60);

  const minuteCountdown = () => {
    setInterval(() => {
      setCountdown( seconds -1)
    }, 1000);
  };

  // console.log(seconds)

  const timer = () => {
    setInterval(() => {
      actions.fetchFiveDayForecast();
      actions.fetchCurrentForecast();
    }, 1000 * 60);
  }

  useEffect(() => {
    actions.fetchFiveDayForecast();
    actions.fetchCurrentForecast();
    timer();
  }, []);

  return (
    <WeatherApp
      currentForecast={currentForecast}
      fiveDayForecast={fiveDayForecast}
      fetchFiveDayStatus={fetchFiveDayStatus}
      fetchCurrentStatus={fetchCurrentStatus}
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
