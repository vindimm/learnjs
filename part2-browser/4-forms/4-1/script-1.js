// Добавьте пункт к выпадающему списку

// Имеется <select>:

// <select id="genres">
//   <option value="rock">Рок</option>
//   <option value="blues" selected>Блюз</option>
// </select>

// Используя JavaScript:
// 1) Выведите значение и текст выбранного пункта.
// 2) Добавьте пункт: <option value="classic">Классика</option>.
// 3) Сделайте его выбранным.

// Ответ:
const select = document.querySelector('#genres');
const selectedOption = select.options[genres.selectedIndex];
console.log(selectedOption.value);
console.log(selectedOption.text);

const newOption = new Option('Классика', 'classic');
select.append(newOption);

newOption.selected = true;
