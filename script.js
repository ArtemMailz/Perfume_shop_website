// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling; // Находим следующий элемент (подробности)
            details.classList.toggle('hidden'); // Переключаем класс hidden
        });
    });
});