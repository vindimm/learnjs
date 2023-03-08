// Создать раскрывающееся меню

// Создать меню, которое по нажатию открывается либо закрывается:

// Ответ:
const button = document.querySelector('button');
const menu = document.querySelector('menu');

button.addEventListener('click', () => {
  menu.classList.toggle('opened');
});
