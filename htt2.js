// Показывает детали продукта
function showDetails(title, description) {
    alert(`Название: ${title}\nОписание: ${description}`);
}

// Обработчик отправки формы
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Спасибо за ваше сообщение, ${name}!\nМы свяжемся с вами по адресу: ${email}`);
    this.reset();
});
