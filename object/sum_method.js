/*
* метод, который выводит сумму чисел
*
* Создайте ассоциативный массив свойство mas которое содержит массив чисел (любого количества),
* добавьте метод, который выводит сумму чисел содержащихся в mas.
* */

let arraySumMethod = {
  "mas": [5, 6, 34, 12, 45],
  "sum": function () {
    let total = 0;

    for (let i = 0; i < this.mas.length; i++) {
      total += this.mas[i];
    }

    return total;
  },
  "sumReduce": function () {
    return this.mas.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }
}
// return numbers


console.log(arraySumMethod.sum());
console.log(arraySumMethod.sumReduce());
