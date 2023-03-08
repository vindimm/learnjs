// Спрячьте сообщения с помощью делегирования

// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

// Ответ:
document.addEventListener('click', (evt) => {
  let card = evt.target.closest('.card');
  card.remove();
});
