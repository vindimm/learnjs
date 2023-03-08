// Установка и уменьшение значения счётчика
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции.
// Или сделать два варианта решения: и так, и так.

// Ответ:
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = ((value) => count = value);
  counter.decrease = (() => count--);

  return counter;
}


let counter = makeCounter();
counter();
counter();
console.log(counter()); // 2
counter.set(42);
console.log(counter()); // 42
