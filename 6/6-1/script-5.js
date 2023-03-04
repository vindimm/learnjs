// Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Ответ:
function printReverseListLoop(list) {
  const results = [];
  let current = list;
  results.push(current.value);

  while (current.next !== null) {
    current = current.next;
    results.push(current.value);
  }

  for (let i = 1; i <= results.length; i++) {
    console.log(results.at(-i));
  }
}

function printReverseListRecursion(list) {
  if (list.next) {
    printReverseListRecursion(list.next);
  }

  console.log(list.value);
}

printReverseListLoop(list);
printReverseListRecursion(list);
