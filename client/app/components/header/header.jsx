import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.scss';

import { roundNumbers } from '../../utilities/round-numbers';
import { Row, Column, Time, Text, ProgressBar } from '@components';

const Header = (props) => {
  const { temperature, city, countdown } = props;

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
            <Text text={`${roundNumbers(temperature.temp)} °C`} size="large" color="white" type="temperature" />
          </Column>
        </Row>
      </Column>
      <Column>
        <Text text={`reloading in ${countdown}s`} size="small" color="white" />
        <ProgressBar />
      </Column>
    </div>
  );
};

Header.propTypes = {
  temperature: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  city: PropTypes.string,
  countdown: PropTypes.number,
};

export default Header;
