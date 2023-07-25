const { sum, substract } = require('./math')

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
})
