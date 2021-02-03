import React from 'react';

import { Row, Column, Text, Icon } from '@components';

import styles from './forecast-item.scss';

const ForecastItem = (props) => {
  const { day, temperature, icon } = props;

  return (
    <div className={styles['body']}>
      <div className={styles['body__item']}>
        <Row between>
          <Column grow>
            <Row between>
              <Column>
                <Text text={day} color="white" size="large" uppercase />
              </Column>
              <Column>
                <Text text={`${temperature}°C`} color="white" size="medium" />
              </Column>
            </Row>
          </Column>
          <Column>
            <Icon name={icon} />
          </Column>
        </Row>
      </div>
    </div>
  );
};

export default ForecastItem;
