// Свойство функции после bind
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?

// Ответ:
// bound.test выведет undefined, так как функция sayHi вызывается в контексте нового объекта и у нее нет свойства test
