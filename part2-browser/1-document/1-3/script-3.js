// Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
// Должно получиться так:

// Ответ:
const tbodyElement = document.body.children[2].children[0];
const trElements = tbodyElement.children; 

for (let i = 0; i < trElements.length; i++) {
  tbodyElement.children[i].children[i].style.backgroundColor = 'red';
}
