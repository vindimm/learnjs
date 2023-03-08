// Дочерние элементы в DOM
// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

// Ответ:
const divElement = document.body.firstElementChild;
const ulElement = divElement.nextElementSibling;
const secondLiElement = ulElement.lastElementChild;

console.log(divElement);
console.log(ulElement);
console.log(secondLiElement);
