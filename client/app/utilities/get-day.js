import dayjs from 'dayjs';

export const getDay = (timestamp) => {
  return dayjs.unix(timestamp).format('ddd');
};
