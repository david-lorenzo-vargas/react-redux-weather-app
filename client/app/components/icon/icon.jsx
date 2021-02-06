import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './icon.scss';

const cx = classnames.bind(styles);

const Icon = ({icon, countdown}) => (
  <div className={cx('icon', {
    'icon--animated': countdown === 60,
  })}>
    <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
  </div>
);

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
