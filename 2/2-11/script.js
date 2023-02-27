// Что выведет код ниже?

alert( null || 2 || undefined );    // 2
alert( alert(1) || 2 || alert(3) ); // 1, 2
alert( 1 && null && 2 );            // null
alert( alert(1) && alert(2) );      // 1, undefined
alert( null || 2 && 3 || 4 );       // 3

/*===========================*/

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

if (age <= 90 && age >= 14) {}

/*===========================*/

// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

if (age < 14 || age > 90) {}
if (!(age >= 14 && age <= 90)) {}

/*===========================*/

// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );          // выполнится, -1
if (-1 && 0) alert( 'second' );         // не выполнится, 0
if (null || -1 && 1) alert( 'third' );  // выполнится, 1

/*===========================*/

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата
// клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

const login = prompt('Введите логин');

if (login === 'Админ') {
  const password = prompt('Введите пароль');

  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (password === null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }

} else if (login === '' || login === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
