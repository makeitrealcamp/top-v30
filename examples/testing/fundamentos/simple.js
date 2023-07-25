// 1. Darle calidad a nuestro código
// 2. Defender nuestro código 

const sum = (a, b) => a - b
const substract = (a, b) => a - b


let expected, result

expected = 10
result = sum(3, 7)
if(result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

expected = 4
result = substract(7, 3)
if(result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}