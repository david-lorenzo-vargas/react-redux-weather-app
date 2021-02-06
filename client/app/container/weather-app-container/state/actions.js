import * as CONSTANTS from './constants';
import {
  fetchFiveDayForecastData,
  fetchCurrentWeatherData,
} from './api';

export const fetchFiveDayForecastDataSuccess = (data) => ({
  type: CONSTANTS.FETCH_FIVE_DAY_DATA_SUCCESS,
  payload: data,
});

export const fetchCurrentWeatherDataSuccess = (data) => ({
  type: CONSTANTS.FETCH_CURRENT_WEATHER_DATA_SUCCESS,
  payload: data,
});

export const fetchFiveDayForecastDataPending = () => ({
  type: CONSTANTS.FETCH_FIVE_DAY_DATA_PENDING,
});

export const fetchCurrentWeatherPending = () => ({
  type: CONSTANTS.FETCH_CURRENT_WEATHER_DATA_PENDING,
});

export const fetchFiveDayForecastDataReject = () => ({
  type: CONSTANTS.FETCH_FIVE_DAY_DATA_REJECT,
});

export const fetchCurrentWeatherDataReject = () => ({
  type: CONSTANTS.FETCH_CURRENT_WEATHER_DATA_REJECT,
});

export const fetchFiveDayForecast = (payload) => (dispatch) => {
  fetchFiveDayForecastDataPending()
  fetchFiveDayForecastData(payload)
    .then(response => response.json())
    .then(data => dispatch(fetchFiveDayForecastDataSuccess(data)))
    .catch((e) => dispatch(fetchFiveDayForecastDataReject(e)))
};

export const fetchCurrentWeather = (payload) => (dispatch) => {
  fetchCurrentWeatherPending();
  fetchCurrentWeatherData(payload)
  .then(response => response.json())
  .then(data => dispatch(fetchCurrentWeatherDataSuccess(data)))
  .catch((e) => dispatch(fetchCurrentWeatherDataReject(e)))
};
