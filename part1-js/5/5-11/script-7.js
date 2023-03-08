// Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// Ответ:
function getSecondsToTomorrow() {
  const today = new Date();
  console.log(today.getDate());

  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0);
  const diff = tomorrow - today;

  return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());
