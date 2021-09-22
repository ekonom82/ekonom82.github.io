/*
* 1.   Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().
* 2.  Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.
      Підключіть створений файл до HTML-документу.
* */


function showName() {
    alert('Andrey');
};

window.addEventListener('load', function () {
    button_3.addEventListener("click", handler);
});

function handler() {
    alert('Andrey');
};

