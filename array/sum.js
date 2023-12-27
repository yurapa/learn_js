/* напишите функцию, которая принимает массив чисел в качестве аргумента
* и возвращает их сумму.
* */

const numbersArray = [1, 2, 3, 4, 5];


// Method 1 (better): Reduce
function sumArrayReduce(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumArrayReduce(numbersArray))


// Method 2: For ... in
function sumArray(el) {
  let i,
    sumResult = 0;
  for (i in el) {
    sumResult += el[i];
  }
  console.log(sumResult);
}

sumArray(numbersArray);
