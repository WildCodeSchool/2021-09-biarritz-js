const theaterSieges = require('./theaterSieges');

test('Length should be 26', () => {
  expect(theaterSieges().length).toBe(26);
});

test('1st element in 1st element should be "1-1"', () => {
  expect(theaterSieges()[0][0]).toBe('1-1');
});

test('10th element in 25th element should be "26-11"', () => {
  expect(theaterSieges()[25][10]).toBe('26-11');
});
