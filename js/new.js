// Получаем все элементы, которые мы будем отслеживать
const filterParams = document.querySelectorAll('.filter-param');

filterParams.forEach((param) => {
  param.addEventListener('input', function (event) {
    // Удаляем старые блоки уведомления
    const oldNotification = document.querySelector('.notification');
    if (oldNotification) {
      oldNotification.remove();
    }

    // Создаем новую кнопку уведомления
    const notification = document.createElement('button');
    notification.className = 'notification button';
    notification.type = 'submit';
    notification.textContent = 'Показать 11'; // замените это на свое значение

    // Добавляем событие клика
    notification.addEventListener('click', function() {
      // Здесь добавьте ваш код для фильтрации товаров
      console.log('Фильтрация товаров...');
    });

    // Добавляем кнопку уведомления после измененного параметра фильтра
    this.parentNode.appendChild(notification);
  });
});
