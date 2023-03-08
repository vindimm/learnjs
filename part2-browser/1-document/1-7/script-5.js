// Создайте дерево из объекта
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

// Ответ:
function createTree(container, obj) {
  container.innerHTML = createTreeText(obj);
}

function createTreeText(obj) { // отдельная рекурсивная функция
  let li = '';
  let ul;
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>';
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || '';
}

createTree(container, data);
