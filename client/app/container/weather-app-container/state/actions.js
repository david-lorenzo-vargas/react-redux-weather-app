import * as CONSTANTS from './constants';
import {
  fetchFiveDayForecastData,
  fetchCurrentForecastData,
} from './api';

export const fetchFiveDayForecastDataSuccess = (data) => ({
  type: CONSTANTS.FETCH_FIVE_DAY_DATA_SUCCESS,
  payload: data,
});

export const fetchCurrentForecastDataSuccess = (data) => ({
  type: CONSTANTS.FETCH_CURRENT_FORECAST_DATA_SUCCESS,
  payload: data,
});

export const fetchFiveDayForecastDataPending = () => ({
  type: CONSTANTS.FETCH_FIVE_DAY_DATA_PENDING,
});

export const fetchCurrentForecastPending = () => ({
  type: CONSTANTS.FETCH_CURRENT_FORECAST_DATA_PENDING,
});

export const fetchFiveDayForecastDataReject = () => ({
  type: CONSTANTS.FETCH_FIVE_DAY_DATA_REJECT,
});

export const fetchCurrentForecastDataReject = () => ({
  type: CONSTANTS.FETCH_CURRENT_FORECAST_DATA_REJECT,
});

export const fetchFiveDayForecast = (payload) => (dispatch) => {
  fetchFiveDayForecastDataPending()
  fetchFiveDayForecastData(payload)
    .then(response => response.json())
    .then(data => dispatch(fetchFiveDayForecastDataSuccess(data)))
    .catch((e) => dispatch(fetchFiveDayForecastDataReject(e)))
};

export const fetchCurrentForecast = (payload) => (dispatch) => {
  fetchCurrentForecastPending();
  fetchCurrentForecastData(payload)
  .then(response => response.json())
  .then(data => dispatch(fetchCurrentForecastDataSuccess(data)))
  .catch((e) => dispatch(fetchCurrentForecastDataReject(e)))
};
