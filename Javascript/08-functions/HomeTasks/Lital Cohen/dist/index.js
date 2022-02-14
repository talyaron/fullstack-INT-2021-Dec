//Tell Fortune!---//
function tellFortune(jobTitle, loction, partnerName, childrenNumber) {
    return "You will be " + jobTitle + " in " + loction + " married to " + partnerName + " with " + childrenNumber + " kids";
}
var x = tellFortune('a lawyer', 'Tel Aviv', 'Leo', '3');
var y = tellFortune('a gamer', 'LA', 'Ella', '4');
var z = tellFortune('a dancer', 'London', 'Ben', '2');
console.log("Your future prediction: " + y);
//Dog Age!---//
function calculateDogAge(puppyAge) {
    return "Your doggie is " + puppyAge * 7 + " years old in human years!";
}
var e = calculateDogAge(3);
var r = calculateDogAge(1);
var q = calculateDogAge(10);
console.log(e);
function calculateHumnaAge(humanAge) {
    return "You are " + humanAge / 7 + " years old in dog years!";
}
var u = calculateHumnaAge(50);
var i = calculateHumnaAge(21);
var a = calculateHumnaAge(24);
console.log(a);
//Lifetime Supply---//
function calculateSupply(age, amountPerDay) {
    var maxAge = 80;
    var supply = amountPerDay * 365;
    var years = maxAge - age;
    return "You will need " + supply * years + " snacks to last you until the ripe old age of 80";
}
var v = calculateSupply(24, 2);
var b = calculateSupply(12, 3);
var n = calculateSupply(3, 1);
console.log(v);
//The Geometrizer---//
function calcCircumfrence(radius) {
    var circumference = Math.PI * 2 * radius;
    return "The circumference is " + circumference;
}
var l = calcCircumfrence(5);
console.log(l);
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return "The area is " + area;
}
var k = calcArea(5);
console.log(k);
//The Temperature Converter---//
function celsiusToFahrenheit(celsius) {
    return celsius + "\u00B0C is " + (((celsius / 5) * 9) + 32) + "\u00B0F";
}
var g = celsiusToFahrenheit(32);
console.log(g);
function fahrenheitToCelsius(fahrenheit) {
    return fahrenheit + "\u00B0F is " + ((fahrenheit - 30) * 5) / 9 + "\u00B0C";
}
var p = fahrenheitToCelsius(68);
console.log(p);
