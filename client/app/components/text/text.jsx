import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './text.scss';

const cx = classnames.bind(styles);

const Text = (props) => {
  const {
    text,
    size,
    color,
    uppercase,
  } = props;

  return (
    <span className={cx('text', {
      [`text--size-${size}`]: size,
      [`text--color-${color}`]: color,
      'text--uppercase': uppercase,
    })}
    >
      {text}
    </span>
  );
};

Text.propTypes = {
  text: PropTypes.oneOfType(
    [
    PropTypes.string,
    PropTypes.number,
    PropTypes.func
  ]
  ),
  size: PropTypes.string,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
};

export default Text;
