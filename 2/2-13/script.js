// Какое последнее значение выведет этот код? Почему?

// let i = 3;
// while (i) {
//   alert( i-- );
// }

// Ответ: 1

/************************************************************/

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) alert( i );
// Ответ: 1, 2, 3, 4

// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i );
// Ответ: 1, 2, 3, 4, 5

/************************************************************/

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:
// for (let i = 0; i < 5; i++) alert( i );
// Ответ: 0, 1, 2, 3, 4

// Префиксная форма:
// for (let i = 0; i < 5; ++i) alert( i );
// Ответ: 0, 1, 2, 3, 4

/************************************************************/

// При помощи цикла for выведите чётные числа от 2 до 10.

// Ответ:
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

/************************************************************/

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// Ответ:
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i = i + 1;
// }

/************************************************************/

// Напишите цикл, который предлагает prompt ввести число, большее 100.
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// Ответ:
// let value = -Infinity;

// while (value <= 100 && value !== null) {
//   value = prompt('Введите число большее 100');
// }

/************************************************************/

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

// Ответ:
// function getPrimeNumbers(num) {
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// function isPrime(num) {
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
