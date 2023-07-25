const { sum, substract } = require('./math')

let expected, result

expected = 10
result = sum(3, 7)
expect(result).toBe(expected)

expected = 4
result = substract(7, 3)
expect(result).toBe(expected)


function expect(actual) {
  return {
    toBe(expected) {
      if(actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }      
    },
    //toMatch: () => {}
  }
}