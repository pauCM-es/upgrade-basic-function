//**Iteración #4: Calcular el promedio**

//?Calcular un promedio es una tarea extremadamente común.

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(arrayNums) {
  let sum = 0
  let counter = 0

  for (const number of arrayNums) {
    sum += number
    counter++
  }

  return sum / counter
}

console.log(average(numbers));