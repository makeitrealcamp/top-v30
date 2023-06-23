// PROGRAMACIÓN FUNCIONAL

// paradigmas de la progración
// programación orientada a objetos - programació orientada a prototipos
// programación funcional

//// 1. funciones - ciudadanos de primera clase
// Podemos asignar una función a una variable
// Podemos pasar una función como parámetro de otra función
// Podemos retornar una función como resultado de otra función


//// 2. PRINCIPIOS
// Inmutabilidad

/* const inmutabilidad = function() {
  console.log('Soy un afunción inmutable')
}

const myFunction = freeze(inmutabilidad)

myFunction = function() {
  console.log('ya soy mutable');
} */

// Funciones puras

/* let initValue = 10

const pureFunction = function(a, b, c) {
  return a + b + c; // No podemos usar variables externas
}

console.log(pureFunction(1, 3, initValue));

initValue = 20;

console.log(pureFunction(1, 3, initValue));
 */
// Composición de funciones
/* const sum = function(a, b) {
  return a + b;
}

const resta = function(a, b) {
  return a - b;
}

const calculadora = function(a, b, operacion) {
  return operacion(a, b);
}

console.log(calculadora(1, 2, sum));
console.log(calculadora(1, 2, resta)); */

// Funciones de orden superior
// Funciones que reciben como parámetro otra función


//// 3. TRATAMIENTO DE LISTAS  Ó ARRAYS Ó COLLECIONES
/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Es imperativo
let result = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    result.push(array[i]);
  }
}
console.log(result);

// Es declarativo
const _result = array.filter(item => item % 2 === 0)
console.log(_result); */


//// 4. COMO SE PUEDE ESCRIBIR UNA FUNCIÓN
// Anonima
/* const myFunction = function () {}
// Nombrada
function myFunction2() {}
myFunction2()
// Autoejecutable
(function() {
  return console.log('Hola Top 30')
})()
// Flecha
const myFunction3 = () => {} */


// Reduce

/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const callback = function (total, item, index) {
  return total + item;
}

const value = array.reduce(callback, 0)

console.log(value); */

//// 5. ¿QUE ES UN METODO?

const obj = {
  myFunction: function() {
    return console.log('Hola Top 30')
  }
}

obj.myFunction()