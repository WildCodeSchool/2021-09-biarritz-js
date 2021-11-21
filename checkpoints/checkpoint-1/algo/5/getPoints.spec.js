const getPoints = require('./getPoints');

const scores = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'];
const otherScores = ['1:0', '2:0', '3:0', '5:4', '1:2', '3:3', '1:4', '2:3', '2:4', '3:4', '1:0', '3:3'];

test('Should return 12', () => {
  expect(getPoints(scores)).toBe(12);
});

test('should return 17', () => {
  expect(getPoints(otherScores)).toBe(17);
});
