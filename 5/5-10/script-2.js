// Максимальная зарплата
// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// Ответ:
function topSalary(salaries) {
  let maxSalary = 0;
  let richestName = null;

  for (let item of Object.entries(salaries)) {
    const [userName, salary] = item;

    if (salary > maxSalary) {
      richestName = userName;
      maxSalary = salary;
    }
  }

  return richestName;
}

console.log(topSalary(salaries));
