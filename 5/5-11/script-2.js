// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

// Ответ:
function getWeekDay(date) {
  const day = date.getDay();
  
  switch (day) {
    case 0:
      result = 'ВС';
      break;
    case 1:
      result = 'ПН';
      break;
    case 2:
      result = 'ВТ';
      break;
    case 3:
      result = 'СР';
      break;
    case 4:
      result = 'ЧТ';
      break;
    case 5:
      result = 'ПТ';
      break;
    case 6:
      result = 'СБ';
      break;
  
    default:
      result = 'Ошибка';
      break;
  }

  return result;
}

console.log(getWeekDay(date));
