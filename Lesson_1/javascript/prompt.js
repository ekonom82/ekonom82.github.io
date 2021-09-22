// 7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

window.onload = function() {
    const nameTitle = "Please, fill your name";
    const emailTitle = "Please, fill email";
    const passwordTitle = "Please, fill password";

    let name = prompt(nameTitle);
    let email = prompt(emailTitle);
    let password = prompt(passwordTitle);

    // “Dear User, your email is usermale@gmail.com, your password is qwerty”
    let result = `Dear ${name}, your email is ${email}, your password is ${password}`;
    document.write(result);
};