function checkValueOfTriangleSide(sideOfTriangle) {
    if (!isNaN(sideOfTriangle) && sideOfTriangle != 0) {
        triangleSideA = parseFloat(sideOfTriangle);
    } else {
        alert("You have entered incorrect value of tringle side");
    }


    let number = prompt("Enter any number");

    if (isNaN(number)) {
        alert("You entered Not number. Please, enter any number!")
        enterNumber();
    }else {
        return number;
    }
}

function getStringFromArreyElements(array) {
    return getStringFromArreyElements;
}

window.onload = function() {
// 3. Створіть порожній масив;
// 1) У перший елемент масиву запишіть будь-яке число;
// 2) У другий елемент масиву запишіть будь-який рядок;
// 3) У третій елемент масиву запишіть будь-яке логічне значення;
// 4) У четвертий елемент масиву запишіть значення null;
// 5) Виведіть на екран число елементів, яке зберігається в масиві;
// 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
// 7) Виведіть на екран п'ятий елемент масиву.
// 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.

    document.write(`TASK 3<br/><br/>`);
    let array = [];

    array.push(45);
    array.push("Hello world");
    array.push(false);
    array.push(null);
    document.write(`array length: ${array.length}<br/>`);

    array.push(prompt("Enter any value!"));
    document.write(`5th element of array is: ${array[4]}<br/>`);

    array.shift();
    document.write(`array: ${array}<br/>`);


    document.write(`<br/><br/>TASK 4<br/><br/>`);
    // 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
    // Початковий масив:
    // let cities = ["Rome", "Lviv", "Warsaw"];
    // Результуючий масив:
    // "Rome*Lviv*Warsaw"

    let cities = ["Rome", "Lviv", "Warsaw"];
    let resultString = cities.join('*');
    document.write(`resultString: ${resultString}<br/>`);

    let resultStringTwo = getStringFromArreyElements()(cities);

    document.write(`<br/><br/>TASK 5<br/><br/>`);

    // 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
    // Результат запишіть в змінну isAdult.
    // В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
    // Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”.
    // Якщо вік менше 18 років вивести “Ви ще надто молоді”,

    const isAdult = prompt("You have already reached the age of 18? (Y/N)", "N");
    const alreadyAdult = "y";
    const notAlreadyAdult = "n";
    const answerForAlreadyAdult = "You are already adult";
    const answerForNotAlreadyAdult = "You are still too young";

    let resultOfAdult = (isAdult.toLowerCase() === alreadyAdult) ? answerForAlreadyAdult : answerForNotAlreadyAdult;
    document.write(`result adult string: ${resultOfAdult}<br/>`);


    document.write(`<br/><br/>TASK 6<br/><br/>`);

    // 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
    // Необхідно
    // a) визначити і вивести в консоль площу трикутника
    // b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
    //     Здійснювати перевірку чи введені користувачем значення коректні,
    //     в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

    let sideA = prompt("Enter side A of triangle");
    checkValueOfTriangleSide(sideA);

    let sideB = prompt("Enter triangle side B");
    checkValueOfTriangleSide(sideB);

    let sideC = prompt("Enter triangle side C");
    checkValueOfTriangleSide(sideC);


};