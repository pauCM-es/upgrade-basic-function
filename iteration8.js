//**Iteration #8: Contador de repeticiones**

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];


function repeatCounter(array) {
  let wordsRepetitions = {}

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let counter = 0

    for (let j = 0; j < array.length; j++) {
      const element2 = array[j];
      
      element === element2 && counter ++

    }
    wordsRepetitions[element] = counter
  }

  return wordsRepetitions
}

console.log (repeatCounter(counterWords))