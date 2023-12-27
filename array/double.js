// Variation 1 (better):
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map((element) => element * 2);

console.log(doubledArray); // [2, 4, 6, 8, 10]


// Variation 2:

const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;

for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}

console.log(numbers) // [2, 4, 6, 8, 10]

