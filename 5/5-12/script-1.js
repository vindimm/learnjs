// Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

// Ответ:
const json = JSON.stringify(user);
const obj = JSON.parse(json);

console.log(json);
console.log(obj);
