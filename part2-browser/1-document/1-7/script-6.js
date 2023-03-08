// Выведите список потомков в дереве
// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов.
// Узлы нижнего уровня, без детей – пропускайте.

// Ответ:
let list = document.getElementsByTagName('li');

for (let item of list) {
  // получить количество всех <li> ниже этого <li>
  let descendantsCount = item.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  // добавить непосредственно к текстовому узлу (добавить к тексту)
  li.firstChild.data += ' [' + descendantsCount + ']';
}
