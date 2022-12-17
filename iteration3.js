//**Iteración #3: Calcular la suma**

//? Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arrayNums) {
  let sum = 0

  for (const number of arrayNums) {
    sum += number
  }

  return sum
}

console.log(sumAll(numbers))