// Хранение времени прочтения
// Есть массив сообщений такой же, как и в предыдущем задании.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том,
// когда сообщение было прочитано?
// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет».
// Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

// Ответ:
// Можно использовать WeakMap

const readingTimes = new WeakMap();

readingTimes.set(messages[0], new Date()); // запись даты прочтения 
console.log(readingTimes.get(messages[0])); // просмотр даты прочтения
readingTimes.delete(messages[0]); // удаление даты для сообщения messages[0]
console.log(readingTimes.get(messages[0])); // undefined
console.log(readingTimes.has(messages[0])); // false
