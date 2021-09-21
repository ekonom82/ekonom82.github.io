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