window.addEventListener("load", function(){
    let name;
    let surname;
    let birthday;
    let studyGroup;

    name = "Andrey";
    surname = "Dorokhin";
    birthday = "10/12/1982"
    studyGroup = 13;

    let isMaried = false;

    console.log(typeof name);
    console.log(typeof surname);
    console.log(typeof birthday);
    console.log(typeof studyGroup);
    console.log(typeof isMaried);

    let arr = [];
    arr.push(name,surname,birthday,studyGroup,isMaried);

    printElementsOfType(arr, TypeValue.Number);
    printElementsOfType(arr, TypeValue.Boolean);
    printElementsOfType(arr, TypeValue.String);

    let nullValue = null;
    let undefinedValue;

    console.log(typeof nullValue);
    console.log(typeof undefinedValue);
})

function printElementsOfType(array, TypeValue) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === TypeValue)
            console.log(typeof array[i]);
    }
}

// Number, Boolean, String
enum TypeValue {
    String,
    Number,
    Boolean
}