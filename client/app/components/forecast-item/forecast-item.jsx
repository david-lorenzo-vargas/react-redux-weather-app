import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { getDay } from '../../utilities/get-day';
import { roundNumbers } from '../../utilities/round-numbers';

import { Row, Column, Text, Icon } from '@components';

import styles from './forecast-item.scss';

const cx = classnames.bind(styles);

const ForecastItem = (props) => {
  const { timestamp, temperature, icon, countdown } = props;

  return (
    <div className={styles['weather-container']}>
      <div className={cx('weather-container__item', {
        'weather-container__item--animated': countdown === 60,
      })}>
        <Row between>
          <Column grow>
            <div className={styles['weather']}>
              <Row between>
                <Column>
                  <Text
                    text={getDay(timestamp)}
                    color="white"
                    size="large"
                    uppercase
                    margin
                    type="day"
                    countdown={countdown}
                  />
                </Column>
                <Column>
                  <Text
                    text={`${roundNumbers(temperature)}°C`}
                    color="white"
                    size="large"
                    margin
                    type="temperature"
                    countdown={countdown}
                  />
                </Column>
              </Row>
            </div>
          </Column>
          <Column shrink>
            <div className={styles['icon']}>
              <Icon icon={icon} countdown={countdown} />
            </div>
          </Column>
        </Row>
      </div>
    </div>
  );
};

ForecastItem.propTypes = {
  timestamp: PropTypes.number,
  temperature: PropTypes.number,
  icon: PropTypes.string,
}

export default ForecastItem;
