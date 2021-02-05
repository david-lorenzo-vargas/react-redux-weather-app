import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';

import { roundNumbers } from '../../utilities/round-numbers';
import { Row, Column, Time, Text, ProgressBar } from '@components';

const Header = (props) => {
  const { temperature, city, countdown, width } = props;


  return (
    <div className={styles['header']}>
      <Column>
        <Row between>
          <Column>
            <Text text={city} size="large" color="white" />
          </Column>
          <Column>
            <Time />
          </Column>
          <Column>
            <Text text={`${roundNumbers(temperature.temp)} °C`} size="medium" color="white" />
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
