import dayjs from 'dayjs';

const weekReduce = (weekForecast) => {
  return weekForecast.reduce((acc, currentValue) => {
    if (acc.length !== 0 ) {
      if (getDay(acc[acc.length -1].dt) === getDay(currentValue.dt)) {
        return acc;
      }
    }
    acc = [...acc, currentValue];
    return acc;
  }, []);
};

const getDay = (timestamp) => {
  return dayjs.unix(timestamp).format('ddd');
};

describe('splitMomentsIntoDays', () => {
  describe('when called', () => {
    it('shoudl return the correct data', () => {
      const moments = [
        { "dt": 1612386000 },
        { "dt": 1612396800 },
        { "dt": 1612407600 },
        { "dt": 1612418400 },
        { "dt": 1612429200 },
        { "dt": 1612440000 },
        { "dt": 1612450800 },
        { "dt": 1612461600 },
        { "dt": 1612472400 },
        { "dt": 1612483200 },
        { "dt": 1612494000 },
        { "dt": 1612504800 },
        { "dt": 1612515600 },
        { "dt": 1612526400 },
        { "dt": 1612537200 },
        { "dt": 1612548000 },
        { "dt": 1612558800 },
        { "dt": 1612569600 },
        { "dt": 1612580400 },
        { "dt": 1612591200 },
        { "dt": 1612602000 },
        { "dt": 1612612800 },
        { "dt": 1612623600 },
        { "dt": 1612634400 },
        { "dt": 1612645200 },
        { "dt": 1612656000 },
        { "dt": 1612666800 },
        { "dt": 1612677600 },
        { "dt": 1612688400 },
        { "dt": 1612699200 },
        { "dt": 1612710000 },
        { "dt": 1612720800 },
        { "dt": 1612731600 },
        { "dt": 1612742400 },
        { "dt": 1612753200 },
        { "dt": 1612764000 },
        { "dt": 1612774800 },
        { "dt": 1612785600 },
        { "dt": 1612796400 },
        { "dt": 1612807200 },
      ];

      const received = weekReduce(moments);

      const expected = [
        { "dt": 1612386000 },
        { "dt": 1612396800 },
        { "dt": 1612483200 },
        { "dt": 1612569600 },
        { "dt": 1612656000 },
        { "dt": 1612742400 },
      ];

      expect(received).toEqual(expected);
    });
  });
});
