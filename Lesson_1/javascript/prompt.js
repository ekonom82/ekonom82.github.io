window.onload = function() {
    const nameTitle = "Please, fill your name";
    const emailTitle = "Please, fill email";
    const passwordTitle = "Please, fill password";

    let name = prompt(nameTitle);
    let email = prompt(emailTitle);
    let password = prompt(passwordTitle);

    // “Dear User, your email is usermale@gmail.com, your password is qwerty”
    document.write("Dear {0}, your email is {1}, your password is {2}", name, email, password);
};