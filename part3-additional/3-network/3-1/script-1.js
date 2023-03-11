// Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub,
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.
// В песочнице есть тестовый пример.
// Важные детали:

// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет,
// то функция должна возвращать null в массиве результатов.

// Ответ:
async function getUsers(names) {
  const requests = [];

  for (let name of names) {
    let request = fetch(`https://api.github.com/users/${name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return null;
      })
      .catch(() =>{
        return null;
      });

    requests.push(request);
  }

  let results = await Promise.all(requests);

  return results;
}
