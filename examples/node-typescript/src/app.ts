// Asignación
// acesso | nombre | tipo | valor
//let userName: string = "John";

// Números
let numeroEntero: number = 6;
let numeroDecimal: number = 6.5;
let numeroHexadecimal: number = 0xf00d;

// Cadena de texto
let cadena: string = "Hello, world!";

// Arreglos 
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["John", "Jane", "Doe"];

//Tuplas
let tupla: [string, number] =  ["nombre", 1]

// Enumeraciones
enum Color {
  Red,
  Green,
  Blue,
  Purple
}

let colorFavorite: Color = Color.Blue;

// Any
let variable: any = "Hello, world!";
let variable2: any = 4;
let variable3: any = true;

// Uniones
let union: string | number = "Hello, world!";

// objetos
type Persona = {
  nombre: string,
  apellido: string,
  edad: number,
  alive: boolean
}

interface Persona2 {
  nombre: string,
  apellido: string,
  edad: number,
  alive: boolean
}

let objeto: Persona2 = {
  nombre: "John",
  apellido: "Doe",
  edad: 32,
  alive: true,
}

// intersecciones
type Coordenada = { x: number, y: number };
type Punto3D = Coordenada & { z: number };
let punto: Punto3D = { x: 1, y: 2, z: 3 };

// Bolleanos
let booleano: boolean = true;
let booleano2: boolean = false;

// Funciones
function suma(a: number, b: number): number {
  return (a + b);
}

const suma2 = (a: number, b: number): void => {
  console.log(a + b);
}

// Tipo 'null' y 'undefined'
let nulo: null = null;
let indefinido: undefined = undefined;

// never
// unknown

// As
// const [number, function] = useState(50)
// const [data, setData] = useState(undefined)
// petición para traer data // asincrono
// tamaño = data.length

// let length: number = (data as string).length

// <> angle brackets
// let length: number = (<string>data).length