// Почему не работает return false?

// Почему в коде ниже return false не работает?

// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>

// Ответ:
// Заменить 'return false' на 'evt.preventDefault()';
