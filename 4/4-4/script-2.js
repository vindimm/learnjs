// Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
  read() {
    this.num1 = Number(prompt('Введите первое число'));
    this.num2 = Number(prompt('Введите второе число'));
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
