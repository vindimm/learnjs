// Куда будет произведена запись?
// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Ответ:
// При вызове rabbit.eat() свойство full получит объект rabbit, так как важно кто вызывает метод.

console.log(animal);
console.log(rabbit);
