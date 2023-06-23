//// 1. PLANTILLAS

/* const top = 'top 30'

console.log('Hola ' + top);
console.log(`Hola ${top}`); */

//// 2. LET y CONST 

//AMBITO DE VARIABLES (scope)

/* if(true) {
  const a = 1;
}

console.log('Este es mi resultado:', a); */

// hoisting

/* 
const b = 1
console.log('Este es mi resultado:', b); */

//// == vs === Comparación

/* // == Comparación sencilla
/* tipo == tipo ? no
string == number
string == string
string == string ? */

// === Comparación estricta
// tipo == tipo ? si
// verdadero

// if('1' === 1) {
//   console.log('verdadero')
// } */

//// 3. OPERADORES TERNARIOS
const a = 1;
const b = 1;

const _myFunction = () => {
  if(a === b) {
    return 'verdadero'
  } else {
    return 'falso'
  }

}

// comparación ? verdadero : falso

function myFunction() {
  return a === b ? 'verdadero' : 'falso'
}


//// 5. SPREAD OPERATOR
/* const name = 'Jhon'
const lastName = 'Doe'
const student = { name, lastName }

const sesion = {
  mentor: 'Sergio',
  class: 'Es6',
  ...student,
  name: 'Andry'
}

console.log(sesion);

const array = [1, 2, 3, 4, 5]
console.log([...array, 6, 7, 8, 9]) */

//// 6. DESTRUCTURING

const person = {
  name: 'Jhon',
  lastName: 'Doe',
  age: 30,
  greet: () => 'Hola mundo',
  hobbies: {
    hobbie1: 'Correr',
    hobbie2: 'Caminar',
  }
}

// const name = person.name
// const lastName = person.lastName

const { name, lastName, hobbies: { hobbie1, hobbie2 } } = person

console.log(name, lastName, hobbie1, hobbie2);


const students = ['erick', 'andry', 'sergio', 'jose']

const [student1, student2, student3, student4] = students


console.log(student1)