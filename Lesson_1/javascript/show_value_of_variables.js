// 3. a) оголосіть дві змінні;
// b) запишіть у змінні будь-які значення;
// c) виведіть на екран значення змінних;
// d) скопіюйте значення однієї змінної в іншу;
// e) виведіть на екран значення змінних.

window.addEventListener("load", function(){
    let first = 100;
    let second = 200;

    document.write("first = " + first + "<br/>");
    document.write("second = " + second + "<br/>");

    second = first;

    document.write("<br/>after changes<br/><br/>");
    document.write("first = " + first + "<br/>");
    document.write("second = " + second + "<br/>");
});