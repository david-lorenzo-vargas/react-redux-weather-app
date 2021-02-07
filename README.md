
# Weather App

## Table of Contents
1. [Description](#description)
2. [Technologies](#technologies)
3. [Demo](#demo)
4. [Installation, viewing and testing](#installation-viewing-and-testing)
5. [Implementation, observations, other notes](#implementation-observations-other-notes)


## Description:
This application consists on a weather app which shows the current weater and the next five day forecast for London. Once the application is rendered for the first time, the information is fetched from two different API endpoints:
1. Current weather: `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
2. Five day forecast: `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`
if the API call is "success" the information is displayed and a minute countdown starts together with a progress bar.
</br>
</br>
Five day forecast endpoint, provides an "object" with an "array" of "objects" with the forecast informaton for the next five days. For each day, the API provides the information for every 3 hours, which means that the response provides an "array" of 40 "objects" where it is posible to find:

1. Day: `"dt":1487246400`
2. Temperature `"temp": 8.7`
3. Icon `"icon":"01d"`

The "array" needs to be filtered to display just five day forecast with the Day, Temperature and Icon.
As the days are received in `timestamps`, **Dayjs** library has been used to convert them into days.
The temperature is posible to receive it in **Celcius** by adding to the API call `units=metric` or in **Fahrenheit** by adding to the API call `units=imperial`. Temperature in **Kelvin** is used by default, no need to use units parameter in API call.
The icon is received by an ID that needs to be coverted into an image by using `http://openweathermap.org/img/wn/10d.png` where “10d” is the icon id.

For the clock that is displayed, **react-live-clock** has been used and formated with **moment.js**

## Technologies:
React, React Hooks, Redux state management, JavaScript, APIs, Async promises and fetch, TDD Testing(Jest), SCSS and CSS modules, CSS Animation (@keyframes), Dayjs, React-Live-Clock, Webpack, Babel, Eslint, Stylelint.

## Demo:
1. First render: The current weather and the next five days forecast data fetched and displayed. A minute countdown starts together with the progress bar

2. After one minute: The information is refreshed and the countdown is reseted together with the progress bar

## Installation, viewing and testing
1. Clone the repo in your code editor
`git clone https://github.com/david-lorenzo-vargas/weather-app.git`
2. Install NPM packages `npm install`
3. View the project in the browser: `npm run start`
4. Testing: `npm run test`

## Implementation, observations, other notes

### Structure
As the app is built with React and the state is managed with Redux, I have split the logic between **Components** and **Containers**.
</br>
</br>
The first category contains components with their contents and styles rendered on the page (e.g Text, Icon, Progress bar components) and the second category contains components that communicate with Redux store (e.g. WeatherAppContainer).</br></br>
**State** contains logic related to Redux store.

### API calls
API enpoints are called with fetch() function GET method.

### Testing
TDD Testing has been implemented with **Jest** for testing a complex functionality inside Forecast component that needs to reduce a 40 item "array" into a 5 item "array" to display just the next five day forecast.</br></br>
</br></br>

### Additional implementations
In addition to current code of the app, I believe the following implementations would be beneficial:</br>
- Local storage: save the data received in the local storage, in case the user refrehes the page and the API call is "rejected", it would be posible to display the last data fetched succesfully.
- Direferent cities: to get the weather of the user by using the geo location of the user and use it for calling the API.
- Search input: an input where the user would be able to search the current weather and the forecast by city name.

### Time
Approximate time for implementation and tests: 4-5 days.
