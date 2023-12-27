/*
* Напишите функцию, которая принимает в качестве аргумента массив чисел,
* а затем возвращает их среднее.
* */

const arr = [12, 44, 15, 17, 0];


// Method 1 (better): Reduce

const average = array => array.reduce((a, b) => a + b) / array.length;

console.log(average(arr));


// Method 2: For .. in
function sumArray(el) {
  let i,
    sumResult = 0;

  for (i in el) {
    sumResult += el[i];
  }

  return sumResult / el.length;
}

console.log(sumArray(arr));
