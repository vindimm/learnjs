// Спрятать себя

// Создайте кнопку, которая будет скрывать себя по нажатию.

// Ответ:
const button = document.querySelector('button');

button.addEventListener('click', function() {
  this.style.display = 'none';
});
