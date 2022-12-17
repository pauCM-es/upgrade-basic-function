//**Iteración #2: Buscar la palabra más larga**

//? Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//? en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


//uso una variable donde guardo el elemento mas largo. 
//Hago comparaciones por parejas. Comparo el guardado con los elementosdel array uno por uno. 
//Cada vez que haya uno mas largo, sustituyo este nuevo en la variable longerElement.
function findLongestWord(array) {
  let longerElement = array[0] //Uso el primer elemento del array de forma inicial para las comparaciones.

  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    if (element.length > longerElement.length) {
      longerElement = element
    }
  }

  return longerElement
}

console.log(findLongestWord(avengers))