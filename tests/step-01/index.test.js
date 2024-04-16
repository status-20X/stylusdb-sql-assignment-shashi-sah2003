const addNumbers = require('../../src/index');

test('adds 5 + 10 to equal 15', () => {
  expect(addNumbers(5, 10)).toBe(15);
});

test('adds -3 + 7 to equal 4', () => {
  expect(addNumbers(-3, 7)).toBe(4);
});

test('adds 0 + 0 to equal 0', () => {
  expect(addNumbers(0, 0)).toBe(0);
});
