// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// Ответ:

function isEmpty(obj) {
  for (key in obj) {
    return true;
  }

  return false;
}
