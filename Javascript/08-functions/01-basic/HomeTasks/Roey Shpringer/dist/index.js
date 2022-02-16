function tellFortune(childrenNum, partnersName, location, job) {
    var x = "you have " + childrenNum + " childrens, your partners name is " + partnersName + ", you live in " + location + " and your job is " + job;
    console.log(x);
}
tellFortune(2, 'jhon', 'israel', 'novel writer');
tellFortune(2, 'paul', 'dubai', 'chef');
tellFortune(2, 'kai', 'japan', 'teacher');
function calculateDogAge(dogAge) {
    var dogHumanAge = dogAge * 7;
    console.log(dogHumanAge);
}
calculateDogAge(10);
function calculateSupply(maxAge) {
    var yourAge = 23;
    var yearsLeft = maxAge - yourAge;
    console.log("you are " + yourAge + " years old, you have " + yearsLeft + " to get to " + maxAge);
}
calculateSupply(100);
function calcCircumfrence(radius) {
    var c = Math.PI * 2 * radius;
    console.log(Math.round(c));
}
calcCircumfrence(10);
calcCircumfrence(8);
calcCircumfrence(6);
function celsiusToFahrenheit(celsiusDeg) {
    var celsiusToFar = (celsiusDeg * 1.8) + 32;
    console.log(celsiusToFar);
}
celsiusToFahrenheit(10);
celsiusToFahrenheit(20);
celsiusToFahrenheit(36);
