// Вывод каждую секунду
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

// Ответ:
function printNumbers1(from, to) {
  let counter = from;

  const timerId = setInterval(() => {
    console.log(current);
    if (counter === to) {
      clearInterval(timerId);
    }
    counter++;
  }, 1000);
}

function printNumbers2(from, to) {
  let counter = from;

  let timerId = setTimeout(function tick() {
    console.log(counter);
    if (counter === to) {
      clearTimeout(timerId);
    } else {
      counter++;
      timerId = setTimeout(tick, 1000);
    }
  }, 1000);
}

// printNumbers1(1, 5);
printNumbers2(1, 5);
