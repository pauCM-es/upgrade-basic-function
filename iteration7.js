//** Iteración #7: Buscador de nombres**

//Crea una función que reciba por parámetro un array y el valor que desea comprobar que 
//existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve la 
//posición de dicho elemento y por la contra un false.


const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];


function finderName(array, value) {
    
  if (array.includes(value)) {
    return array.indexOf(value)
  } else {
    return false
  }
  
}

console.log(finderName(nameFinder, "Xabiedddd"))
console.log(finderName(nameFinder, "Xabier"))