import * as CONSTANTS from './constants';
import { createReducer } from '../../../state/utilities';

const initialState = {
  fetchFiveDayStatus: '',
  fetchCurrentStatus: '',
  fiveDayForecast: undefined,
  currentForecast: undefined,
};

const fetchFiveDayForecastDataSuccess  = (state, payload) => {
  return {
    fetchFiveDayStatus: 'success',
    fiveDayForecast: payload,
  }
};

const fetchCurrentForecastDataSuccess = (state, payload) => {
  return {
    fetchCurrentStatus: 'success',
    currentForecast: payload,
  }
};

const fetchFiveDayForecastDataPending = (state) => {
  return {
    fetchFiveDayStatus: 'pending',
  }
};

const fetcCurrentForecastPending = (state) => {
  return {
    fetchCurrentStatus: 'pending',
  }
};

const fetchFiveDayForecastDataReject = (state) => {
  return {
    fetchFiveDayStatus: 'rejected',
  }
};

const fetchCurrentForecastDataReject = (state) => {
  return {
    fetchCurrentStatus: 'reject',
  }
};


const atoms = {
  [CONSTANTS.FETCH_FIVE_DAY_DATA_SUCCESS]: fetchFiveDayForecastDataSuccess,
  [CONSTANTS.FETCH_FIVE_DAY_DATA_PENDING]: fetchFiveDayForecastDataPending,
  [CONSTANTS.FETCH_FIVE_DAY_DATA_REJECT]: fetchFiveDayForecastDataReject,
  [CONSTANTS.FETCH_CURRENT_FORECAST_DATA_SUCCESS]: fetchCurrentForecastDataSuccess,
  [CONSTANTS.FETCH_CURRENT_FORECAST_DATA_PENDING]: fetcCurrentForecastPending,
  [CONSTANTS.FETCH_CURRENT_FORECAST_DATA_REJECT]: fetchCurrentForecastDataReject,
};

const reducer = createReducer({
  initialState, atoms
});

export default reducer;
