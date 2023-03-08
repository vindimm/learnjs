// Изменяем "prototype"
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// alert( rabbit.eats ); // true

// 1)
// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// Rabbit.prototype = {};
// alert( rabbit.eats ); // ?

// 2)
// …А если код такой (заменили одну строчку)?
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// Rabbit.prototype.eats = false;
// alert( rabbit.eats ); // ?
// Или такой (заменили одну строчку)?

// 3)
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// delete rabbit.eats;
// alert( rabbit.eats ); // ?

// 4)
// Или, наконец, такой:
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// alert( rabbit.eats ); // ?

// Ответ:
// 1) true
// 2) false
// 3) true
// 4) undefined
