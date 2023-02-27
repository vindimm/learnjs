// Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// Ответ:
function aclean(words) {
  const map = new Map();

  words.forEach((word) => {
    const sortedWord = word.toLowerCase().split('').sort().join('');
    map.set(sortedWord, word);
  });

  return Array.from(map.values());
}

console.log(aclean(arr));
