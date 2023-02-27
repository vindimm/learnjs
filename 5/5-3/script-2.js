// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// Ответ:
function checkSpam(str) {
  const newStr = str.toLowerCase();
  if (newStr.includes('viagra') || newStr.includes('xxx')) {
    return true;
  }

  return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
