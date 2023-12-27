/*
* Напишите функцию, которая принимает в качестве аргумента массив чисел,
* а затем возвращает наибольшее число в массиве
* */

const numbers = [12, 44, 15, 17, 0];


// Method 1 (better): Math.max + ...spread operator
const maxNumber = Math.max(...numbers);
console.log(maxNumber);


// Method 2: Math.max + apply
const getMaxOfArray = (el) => {
  console.log(Math.max.apply(null, el));
};
getMaxOfArray(numbers);


// Method 3: Reduce
const maxNumberReduce = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0]
);
console.log(maxNumberReduce);
