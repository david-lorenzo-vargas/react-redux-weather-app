export const fetchFiveDayForecastData = (payload) => {
  const options = {
    method: 'GET',
  };

  return fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=77c759a539a8027e8d610da397bec1a5', options);
};

export const fetchCurrentForecastData = (payload) => {
  const options = {
    method: 'GET',
  };

  return fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=77c759a539a8027e8d610da397bec1a5', options);
};
