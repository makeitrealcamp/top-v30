const { sum, substract } = require('./math')

/* function sumTest() {
  const expected = 10
  const result = sum(3, 7)
  expect(result).toBe(expected)
} */

test('Sum two numbers', () => {
  const expected = 10
  const result = sum(3, 7)
  expect(result).toBe(expected)
})

/* function substractTest() {
  const expected = 4
  const result = substract(7, 3)
  expect(result).toBe(expected)
} */

test('substract two numbers', () => {
  const expected = 4
  const result = substract(7, 3)
  expect(result).toBe(expected)
})

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

function test(title, callback) {
  try {
    callback()
    console.log(`✅ ${title}`);
  } catch(error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}