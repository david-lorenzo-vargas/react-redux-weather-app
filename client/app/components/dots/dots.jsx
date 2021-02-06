import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Row } from '@components';

import styles from './dots.scss';

const cx = classnames.bind(styles);

const Dots = (props) => {
  const { dots } = props;

  return (
    <div className={styles['dots']}>
      <Row between>
        <div className={cx('dot', {
          [`dot--number-${dots[0]}`]: dots,
        })}
        />
        <div className={cx('dot', {
          [`dot--number-${dots[1]}`]: dots,
        })}
        />
        <div className={cx('dot', {
          [`dot--number-${dots[2]}`]: dots,
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
