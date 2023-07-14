class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hola, soy ${this.name}`)
  }
}

//instancia
// const maria = new Person('Maria Lopez', 25)

// console.log(maria.name)
// console.log(maria.age)
// maria.sayHello()

// Herencia
class User extends Person {
  constructor(name, age, email, password) {
    super(name, age)
    this.email = email
    this.password = password
  }

  register() {
    console.log(`El usuario ${this.name} se ha registrado con el email ${this.email} y la contraseña ${this.password}`)
  }
}

const users1= new User('Maria Lopez', 25, 'maria@test.com', '123456')

users1.register()
users1.sayHello()

console.log(users1)
