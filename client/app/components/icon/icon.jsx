import React from 'react';
import PropTypes from 'prop-types';

import styles from './icon.scss';

const Icon = (props) => {
  const {name} = props;

  return (
    <div className={styles['icon']}>
      <img src={`http://openweathermap.org/img/wn/${name}.png`} />
    </div>
  )
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
