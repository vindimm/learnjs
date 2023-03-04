// Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

// Ответ:
function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
}

function sumToProgression(n) {
  const d = 1;
  const a = 1;
  return result = (2 * a + d * (n - 1)) * n / 2; 
}

console.log((sumToLoop(100))); //5050
console.log((sumToProgression(100))); //5050
console.log((sumToRecursion(100))); //5050

// Самый быстрый вариант - используя формулу (одна итерация), самый медленный - используя рекурсию (n итераций).
// Посчитать sumToRecursion(10000) не получится - переполнится стэк выполнения (stack overflow).
