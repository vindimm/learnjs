// Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// Ответ:

function Calculator() {
  this.read = function() {
    this.num1 = Number(prompt('Первое число', 0));
    this.num2 = Number(prompt('Второе число', 0));
  };

  this.sum = function() {
    return this.num1 + this.num2;
  }

  this.mul = function() {
    return this.num1 * this.num2;
  }
}

const calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
