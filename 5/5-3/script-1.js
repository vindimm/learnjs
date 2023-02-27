// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

// Ответ:
function ucFirst(str) {
  if (!str) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('вася'));
console.log(ucFirst(''));
console.log(ucFirst('hello world'));
