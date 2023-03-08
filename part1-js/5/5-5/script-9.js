// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// теперь: [vasya, masha, petya]


// Ответ:
const sortByAge = (users) => users.sort((a, b) => a.age - b.age);
sortByAge(arr);
console.log(arr); // [vasya, masha, petya]
