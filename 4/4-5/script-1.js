// Две функции - один объект
// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// console.log( a == b ); // true
// Если да – приведите пример вашего кода.

// Ответ:
const obj = {};

function A() {
  const objA = obj;
  return objA;
}

function B() {
  const objB = obj;
  return objB;
}

let a = new A();
let b = new B();

console.log( a === b ); // true
