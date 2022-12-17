//** Iteración #6: Valores únicos**

//? Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//? en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'pasta',
  'soda'
];


function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);

    while (array.indexOf(element) !== array.lastIndexOf(element)) {
      array.splice(array.lastIndexOf(element), 1)
    } 

  }

  return array

}

console.log(removeDuplicates(duplicates));