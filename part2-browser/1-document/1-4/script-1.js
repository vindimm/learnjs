// Поиск элементов
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.

// Ответ:
// 1) const table = document.querySelector('#age-table');
// 2) const labels = table.getElementsByTagName('label');
// 3) const td = table.getElementsByTagName('td')[0];
// 4) const form = document.querySelector('form[name="search"]');
// 5) const firstInput = form.querySelectorAll('input')[0];
// 6) const inputs = form.querySelectorAll('input');
//    const lastInput = inputs[inputs.length - 1];
