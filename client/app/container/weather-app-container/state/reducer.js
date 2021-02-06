import * as CONSTANTS from './constants';
import { createReducer } from '../../../state/utilities';

const initialState = {
  fetchFiveDayStatus: '',
  fetchCurrentWeatherStatus: '',
  fiveDayForecast: undefined,
  currentWeather: undefined,
};

const fetchFiveDayForecastDataSuccess  = (state, payload) => {
  return {
    fetchFiveDayStatus: 'success',
    fiveDayForecast: payload,
  }
};

const fetchCurrentWeatherDataSuccess = (state, payload) => {
  return {
    fetchCurrentWeatherStatus: 'success',
    currentWeather: payload,
  }
};

const fetchFiveDayForecastDataPending = (state) => {
  return {
    fetchFiveDayStatus: 'pending',
  }
};

const fetcCurrentWeatherPending = (state) => {
  return {
    fetchCurrentWeatherStatus: 'pending',
  }
};

const fetchFiveDayForecastDataReject = (state) => {
  return {
    fetchFiveDayStatus: 'rejected',
  }
};

const fetchCurrentWeatherDataReject = (state) => {
  return {
    fetchCurrentWeatherStatus: 'reject',
  }
};

const atoms = {
  [CONSTANTS.FETCH_FIVE_DAY_DATA_SUCCESS]: fetchFiveDayForecastDataSuccess,
  [CONSTANTS.FETCH_FIVE_DAY_DATA_PENDING]: fetchFiveDayForecastDataPending,
  [CONSTANTS.FETCH_FIVE_DAY_DATA_REJECT]: fetchFiveDayForecastDataReject,
  [CONSTANTS.FETCH_CURRENT_WEATHER_DATA_SUCCESS]: fetchCurrentWeatherDataSuccess,
  [CONSTANTS.FETCH_CURRENT_WEATHER_DATA_PENDING]: fetcCurrentWeatherPending,
  [CONSTANTS.FETCH_CURRENT_WEATHER_DATA_REJECT]: fetchCurrentWeatherDataReject,
};

const reducer = createReducer({
  initialState, atoms
});

export default reducer;
