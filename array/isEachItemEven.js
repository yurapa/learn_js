/* Напишите функцию, которая принимает массив чисел,
 * а затем возвращает true, если каждое число в массиве четное,
 * и false — в противном случае.
 */


const arr = [12, 42, 10, 12, 2, 4];

function isEachItemEven(numbers) {
  let i,
    result,
    counter = 0;

  for (i in numbers) {
    if (numbers[i] % 2 === 0 && numbers[i] !== 0) {
      counter += 1;
    }
  }

  result = counter === numbers.length;

  return result;
}

console.log(isEachItemEven(arr));
