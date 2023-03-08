// Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// Ответ:

const filterRangeInPlace = (arr, a, b) => {
  debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

const testArr = [5, 3, 8, 1];
filterRangeInPlace(testArr, 1, 4);
console.log(testArr); // [3, 1]

const testArr2 = [0, 1, 2, 3, 4, 5];
filterRangeInPlace(testArr2, 2, 4);
console.log(testArr2); // [2, 3, 4]