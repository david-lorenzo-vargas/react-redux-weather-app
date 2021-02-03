import React from 'react';
import PropTypes from 'prop-types';
import styles from './time.scss';

import { Row, Column, Text, Dots } from '@components';

const Time = (props) => {
  const { time } = props;

  return (
    <div className={styles['time-box']}>
      <Row between>
        <Column>
          <Dots number={['three', 'two', 'one']} />
        </Column>
        <Column>
          <Text text={time} color="white" size="medium" />
        </Column>
        <Column>
          <Text text="gmt" uppercase color="white" size="medium" />
        </Column>
        <Column>
          <Dots number={['one', 'two', 'three']} />
        </Column>
      </Row>
    </div>
  );
};

Time.propTypes = {
  time: PropTypes.number,
};

export default Time;
