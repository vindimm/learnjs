// Связанная функция как метод
// Что выведет функция?
'use strict';

function f() {
  console.log(this); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

// Ответ:
// в strict mode будет null, без него - будет глобальный объект
