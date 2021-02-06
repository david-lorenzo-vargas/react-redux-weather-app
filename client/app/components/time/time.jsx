import React from 'react';
import Clock from 'react-live-clock';
import styles from './time.scss';

import { Row, Column, Text, Dots } from '@components';

const Time = () => (
  <div className={styles['time-box']}>
    <Row between>
      <Column>
        <Dots dots={['three', 'two', 'one']} />
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
        <Dots dots={['one', 'two', 'three']} />
      </Column>
    </Row>
  </div>
);

export default Time;
