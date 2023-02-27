// Сумма введённых чисел
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// Ответ:
function sumInput() {
  let input = 0;
  let sum = 0;
  const numbers = [];
  while (input !== null && input !== '' && isFinite(input)) {
    input = prompt('Введите число');
    numbers.push(Number(input));
    console.log(typeof input)
  }

  for (let item of numbers) {
    sum += item;
  }

  console.log(sum);
}

sumInput();
