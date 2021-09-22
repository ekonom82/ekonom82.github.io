//Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран. 

window.onload = function() {
    const secInHour = calculateSecondsInHour();
    const secInDay = calculateSecondsInDay();
    const secInManth = calculateSecondsInManth();

    document.write("seconds in hour: " + secInHour + "<br>");
    document.write("seconds in day: " + secInDay + "<br>");
    document.write("seconds in manth: " + secInManth + "<br>");
};

function calculateSecondsInHour() {
    // 60 seconds in 1 min * 60 min in 1 hour
    return 60 * 60;
}

function calculateSecondsInDay() {
    // 24 hours in 1 day
    return calculateSecondsInHour() * 24;
}

function calculateSecondsInManth() {
    // 30 days in 1 manth
    return calculateSecondsInDay() * 30;
}
