// Objetos literales

/* const pedro = {
  name: 'Pedro Perez',
  age: 30,
  // Metodos concisos (ES6)
  sayHello() {
    console.log(`Hola, soy ${this.name}`)
  }
}

const maria = {
  name: 'Maria Lopez',
  age: 25,
  sayHello() {
    console.log(`Hola, soy ${this.name}`)
  }
} */



/* const person = {
  isHuman: true,
  sayHello() {
    console.log(`Hola, soy ${this.name}`)
  }
} */

// Object.create()

/* const pedro = Object.create(person, { name: { value: 'Pedro perez' }, age: { value: 30 } })

console.log(pedro.name)
console.log(pedro.age)
console.log(pedro.isHuman)
pedro.sayHello()
console.log(pedro.toString()) */


// Funcion constructora

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype = {
  isHuman: true,
  married: false,
  sayHello() {
    console.log(`Hola, soy ${this.name}`)
  },
  toString() {
    console.log('Estoy en el toString')
  }
}

const maria = new Person('Maria Lopez', 25)

console.log(maria.name)
console.log(maria.age)
console.log(maria.isHuman)
console.log(maria.toString())

// Ejemplos

/* new String('Hola')
new Number(1)
new Boolean(true)
new Array(1, 2, 3)
new Object({ name: 'Pedro' }) */

Array.prototype.sum = function () {
  let count = 0
  for (let i = 0; i < this.length; i++) {
    count += this[i]
  }

  return count
}


console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].sum())
console.log([1, 2, 3, 4, 5, 6, 100, 90].sum())


String.prototype.formatCurrency = function () {}


console.log('429990'.formatCurrency()) // $ 429.990