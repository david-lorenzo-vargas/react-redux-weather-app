import React from 'react';
import { getDay } from '../../utilities/get-day';
import { roundNumbers } from '../../utilities/round-numbers';

import { Row, Column, Text, Icon } from '@components';

import styles from './forecast-item.scss';

const ForecastItem = (props) => {
  const { timestamp, temperature, icon } = props;


  return (
    <div className={styles['weather-container']}>
      <div className={styles['weather-container__item']}>
        <Row between>
          <Column>
            <div className={styles['weather']}>
              <Row between>
                <Column>
                  <Text
                    text={getDay(timestamp)}
                    color="white"
                    size="large"
                    uppercase
                    margin
                  />
                </Column>
                <Column>
                  <Text
                    text={`${roundNumbers(temperature)}°C`}
                    color="white"
                    size="large"
                    margin
                  />
                </Column>
              </Row>
            </div>
          </Column>
          <Icon name={icon} />
        </Row>
      </div>
    </div>
  );
};

export default ForecastItem;
