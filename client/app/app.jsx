import React from 'react';
import { Provider } from 'react-redux';
import styles from './reset.scss';
import WeatherAppContainer from './container';

import store from './state';

const App = () => (
  <div className={styles}>
    <Provider store={store}>
      <WeatherAppContainer />
    </Provider>
  </div>
);

export default App;
