// Добавить кнопку закрытия

// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

// Ответ:
const messages = document.querySelectorAll('message');

for (let message of messages) {
  const closeButton = message.querySelector('close-button');
  closeButton.addEventListener = ('click', () => {
    message.remove();
  });
}
