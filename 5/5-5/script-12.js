// Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// // alert( unique(strings) ); // кришна, харе, :-O

// Ответ:
function unique(arr) {
  return new Set(arr);
}
