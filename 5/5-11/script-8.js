// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
// всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// Ответ:
function formatDate(date) {
  let result = '';
  const diff = Math.floor((Date.now() - date) / 1000);

  if (diff < 1) {
    result = 'прямо сейчас';
  } else if (diff <  60 ) {
    result = `${diff} сек. назад`;
  } else if (diff < 3600) {
    result = `${Math.floor(diff / 60)} мин. назад`;
  } else {
    result = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
  }

  return result;
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // дата, время
