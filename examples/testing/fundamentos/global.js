const { sum, substract } = require('./math')

test('Sum two numbers', () => {
  const expected = 10
  const result = sum(3, 7)
  expect(result).toBe(expected)
})

test('substract two numbers', () => {
  const expected = 4
  const result = substract(7, 3)
  expect(result).toBe(expected)
})