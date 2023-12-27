/*
 * Методы push/pop выполняются быстро, а методы shift/unshift – медленно!
 *
 * push(...items) - добавляет items в конец массива.
 * pop() - удаляет элемент в конце массива и возвращает его.
 *
 * shift() - удаляет элемент в начале массива и возвращает его.
 * unshift(...items) - добавляет items в начало массива.
*/

let arr = [15, 45, 45, 233, 12, 0];

console.log(arr);

arr.push(1920, 200);

console.log(arr);

arr.unshift(0, 200);

console.log(arr);

