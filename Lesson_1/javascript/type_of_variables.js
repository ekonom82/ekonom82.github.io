// 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
//     - ваше ім’я
// - ваше прізвище
// - навчальна група
// - ваш рік народження.
//     Присвойте змінним відповідні значення.
//     Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
//     Визначте тип кожної змінної.
//     Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
//     Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.


window.addEventListener("load", function(){
    let name;
    let surname;
    let birthday;
    let studyGroup;

    const typesOfValue =  [`string`, `number`, `boolean`];

    name = "Andrey";
    surname = "Dorokhin";
    birthday = "10/12/1982"
    studyGroup = 13;

    let isMaried = false;

    console.log("type of name: " + typeof name);
    console.log("type of surname: " + typeof surname);
    console.log("type of birthday: " + typeof birthday);
    console.log("type of studyGroup: " + typeof studyGroup);
    console.log("type of isMaried: " + typeof isMaried);

    let arrayElements = [];
    arrayElements.push(name,surname,birthday,studyGroup,isMaried);

    printElementsOfType(arrayElements, typesOfValue);

    // printElementsOfType(arrayElements, TypeValue.Number);
    // printElementsOfType(arrayElements, TypeValue.Boolean);
    // printElementsOfType(arrayElements, TypeValue.String);

    let nullValue = null;
    let undefinedValue;

    console.log("type of nullValue: " + typeof nullValue);
    console.log("type of undefinedValue: " + typeof undefinedValue);
})

function printElementsOfType(arrayOfElements, arrayOfTypes) {
    console.log("Begin showing elements in some order");
    console.log("arrayOfElements: " + arrayOfElements);
    console.log("arrayOfTypes: " + arrayOfTypes);

    for (let i = 0; i < arrayOfTypes.length; i++) {
        console.log("i: " + i);

        for (let j = 0; j < arrayOfElements.length; j++) {
            console.log("j: " + j);

            if (typeof(arrayOfElements[j]) === arrayOfTypes[i]) {
                // console.log("index i: "+ i + " / index j: " + j + " / typeof element j: " + typeof arrayOfElements[j] + " / expected type: " + arrayOfTypes[i]);

                console.log(arrayOfElements[j]);
            }

        }
    }

    console.log("End showing elements in some order");
}

/*
* enum is absent in JS. Only in TypeScript
* */
// function printElementsOfType(array, TypeValue) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === TypeValue)
//             console.log(typeof array[i]);
//     }
// }
//
// // Number, Boolean, String
// enum TypeValue {
//     String,
//         Number,
//         Boolean
// }
