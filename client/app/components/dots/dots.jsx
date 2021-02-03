import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Row } from '@components';

import styles from './dots.scss';

const cx = classnames.bind(styles);

const Dots = (props) => {
  const { number } = props;

  return (
    <div className={styles['dots']}>
      <Row between>
        <div className={cx('dot', {
          [`dot--number-${number[0]}`]: number,
        })}
        />
        <div className={cx('dot', {
          [`dot--number-${number[1]}`]: number,
        })}
        />
        <div className={cx('dot', {
          [`dot--number-${number[2]}`]: number,
        })}
        />
      </Row>
    </div>
  );
};

Dots.propTypes = {
  number: PropTypes.arrayOf(PropTypes.string),
};

export default Dots;
