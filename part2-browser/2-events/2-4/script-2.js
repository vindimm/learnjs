// Поймайте переход по ссылке

// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том,
// действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

// Ответ:
contents.onclick = function(evt) {
  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }
  let target = evt.target.closest('a');
  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }
};
