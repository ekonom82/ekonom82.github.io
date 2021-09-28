// 2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// a) парним додатним;
// b) кратним числу 7.
// Результат перевірки вивести в консоль.

window.onload = function() {
    let number = enterNumber();
    let isEvenNumber = isMultipleOfSameNumber(number, 2);
    let isPositiveNumber = number >= 0;
    let isMultipleOfSeven = isMultipleOfSameNumber(number, 7);

    console.log("Number %s is \npositive: %s \neven: %s \nmultiple of seven: %s", number, isPositiveNumber, isEvenNumber, isMultipleOfSeven);
};

function isMultipleOfSameNumber(number, multipleOfSameNumber) {
    return number%multipleOfSameNumber == 0;
}

function enterNumber() {
    let number = prompt("Enter any number");

    if (isNaN(number)) {
        alert("You entered Not number. Please, enter any number!")
        enterNumber();
    }else {
        return number;
    }
}