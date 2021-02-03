import React from 'react';

import { Row, Column, Text, Icon } from '@components';

import styles from './forecast-item.scss';

const ForecastItem = (props) => {
  const { week } = props;

  return (
    <div className={styles['body-item']}>
      {week.map((day) => (
        <Row between>
          <Column>
            <Row between>
              <Column>
                <Text text={day.day} color="white" size="medium" />
              </Column>
              <Column>
                <Text text={day.temperature} color="white" size="medium" />
              </Column>
            </Row>
          </Column>
          <Column>
            <Icon name={day.weather} />
          </Column>
        </Row>
      ))}
    </div>
  );
};

export default ForecastItem;