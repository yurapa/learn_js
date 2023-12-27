/* Реализуйте функцию reverse, которая переворачивает строку.
 * Например:
 * reverse('hello, world!'); // !dlrow ,olleh
 *
 * Подсказки:
 * Не забудьте: индексы начинаются с 0, но длина — это реальная длина.
 * Так что индекс последнего символа не совпадает с длиной строки
 */

// Method 1 (better):
const reverse1 = (str) => {
  return str.split('').reverse().join('');
}


// Method 2:
const reverse = (str) => {
  let item = str.length - 1,
    newStr = '';

  for (item; item >= 0; item--) {
    //console.log( str[item], item );
    newStr += str[item];
  }

  return newStr;
}

console.log(reverse('cat'), reverse1('cat'));
console.log(reverse('tac'), reverse1('tac'));
console.log(reverse('hello, world!'), reverse1('hello, world!'));
console.log(reverse(''), reverse1(''));
console.log(reverse('aaaa'), reverse1('aaaa'));
