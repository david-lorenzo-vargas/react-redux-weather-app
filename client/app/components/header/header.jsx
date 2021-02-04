import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';

import Text from '../text';
import ProgressBar from '../progress-bar';
import { Row, Column, Time } from '@components';

const Header = (props) => {
  const { temperature, city, countdown, width, currentTime } = props;


  return (
    <div className={styles['header']}>
      <Column>
        <Row between>
          <Column>
            <Text text={city} size="large" color="white" />
          </Column>
          <Column>
            <Time time={currentTime} />
          </Column>
          <Column>
            <Text text={`${temperature.temp} °C`} size="large" color="white" />
          </Column>
        </Row>
      </Column>
      <Column>
        <Text text={`reloading in ${countdown}s`} size="small" color="white" />
        <ProgressBar width={width} />
      </Column>
    </div>
  );
};

Header.propTypes = {
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  timeLeft: PropTypes.number,
  width: PropTypes.number,
};

export default Header;
