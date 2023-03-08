// Галерея изображений

// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

// Ответ:
thumbs.onclick = function(evt) {
  let thumbnail = evt.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  evt.preventDefault();
}

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}
