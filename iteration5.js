//* Iteración #5: Calcular promedio de strings**

//? Crea una función que reciba por parámetro un array y cuando es un valor number 
//? lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(array) {
  let sum = 0

  for (const element of array) {
    switch (typeof element) {
      case "number":
        sum += element
        break;
    
      case "string":
        sum += element.length
        break;
    }
    console.log(sum);
  }

  return sum
}

console.log(averageWord(mixedElements))