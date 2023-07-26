const sum = (a, b) => a + b

const substract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b 

module.exports = {
  sum,
  substract,
  multiply,
  divide
}


//// Tipos de pruebas que existen 
// Test unitario - jest
// Test de integración - jest
// Test end to end - cypress


//// Formas de escribir pruebas 
// Orientada al código (primetro funcionalidad luego test)
// TDD -> Test driven development (primero test y luego funcionalidad)
// BDD -> Behavior-driven development (escribirlas en lenguje humano)