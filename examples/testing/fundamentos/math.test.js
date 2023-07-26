const { sum, substract, multiply, divide } = require('./math')

xdescribe('others tests', () => {

  test('testing boollean', () => {
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
  })
  
  test('testing string', () => {
    expect('jhon doe').toMatch(/Jhon/i)
  })
}) 

describe('module math', () => {
  test('Sum two numbers', () => {
    const expected = 30
    const result = sum(25, 5)
    expect(result).toBe(expected)
  })
  
  test('Substract two numbers', () => {
    const expected = 20
    const result = substract(25, 5)
    expect(result).toBe(expected)
  })

  test('Multiply two numbers', () => {
    const expected = 10
    const result = multiply(5, 2)
    expect(result).toBe(expected)
  })

  test('divide two number', () => {
    const expected = 5
    const result = divide(15, 3)
    expect(result).toBe(expected)
  })
})