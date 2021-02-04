import React from 'react';
import Clock from 'react-live-clock';
import PropTypes from 'prop-types';
import styles from './time.scss';

import { Row, Column, Text, Dots } from '@components';

const Time = () => (
    <div className={styles['time-box']}>
      <Row between>
        <Column>
          <Dots number={['three', 'two', 'one']} />
        </Column>
        <Column>
          <Clock
            format={'HH:mm'}
            ticking={true}
            timezone={'Etc/GMT0'}
            className={styles['time-box__clock']}
          />
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

Time.propTypes = {
  time: PropTypes.number,
};

export default Time;
