const isLeapYear = require('./isLeapYear');

test('1900 should return false', () => {
  expect(isLeapYear(1900)).toBe(false);
});
test('2000 should return true', () => {
  expect(isLeapYear(2000)).toBe(true);
});
test('2004 should return true', () => {
  expect(isLeapYear(2004)).toBe(true);
});
test('2019 should return false', () => {
  expect(isLeapYear(2019)).toBe(false);
});
test('2020 should return true', () => {
  expect(isLeapYear(2020)).toBe(true);
});
