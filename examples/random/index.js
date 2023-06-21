const makersName = [
  'Camilo Suarez',
  'Juan Felipe Gomez',
  'Andrea Vargas',
  'Stephanie Ariza',
  'Edwin Vasquez',
  'Victor Mazo',
  'Jhon Cuervo',
  'Natalia Chavarria',
  'Jesus Bravo',
  'Rodrigo Bonilla',
  'Daniel hincapie',
  'Juan Camilo Clement',
  'Fabian Mendoza',
  'Shannen Jimenez',
  'Erick Carrasco',
  'Juan Villegas',
  'Cristian Jimenez',
  'Leidy Tatiana',
  'Andry Peña',
  'Carlos Mendoza'
];

function randomMaker() {
  return makersName[Math.floor(Math.random() * makersName.length)];
}

console.log('El turno es para: ', randomMaker());
