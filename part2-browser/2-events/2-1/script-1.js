// Скрыть элемент по нажатию кнопки

// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

// Ответ:
const button = document.querySelector('button');
const text = document.querySelector('#text');

button.addEventListener('click', () => {
  text.style.display = 'none';
});
