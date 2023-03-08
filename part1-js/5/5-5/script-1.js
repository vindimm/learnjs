// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно
// и методом join соедините обратно.

// Ответ:
// function capitalize(word) {
//   return `${word[0].toUpperCase()}${word.slice(1)}`;
// }

const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

function camelize(str) {
  const words = str.split('-');
  for(let i = 1; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }

  return words.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
