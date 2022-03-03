//--1--//
function tellFortune(jobTitle, loction, partner, childrenNumber) {
    return "You will be " + jobTitle + " in " + loction + " married to " + partner + " with " + childrenNumber + "kids ";
}
var x = tellFortune("hairdresser", "Petah Tikva", "David", "5 ");
var y = tellFortune("singer", "Tel Aviv", "Moshe", "7 ");
var z = tellFortune("actor", "Nofech", "Yair", "3 ");
console.log(x);
//--2--//
function calculateDogAge(puppyAge) {
    return "Your doggie is " + puppyAge + " years old in dog years";
}
var t = calculateDogAge(6);
var e = calculateDogAge(4);
var v = calculateDogAge(2);
console.log(t);
//--3--//
function calculateSupply(age, amountPerDay) {
    var maxAge = 90;
    var Supply = amountPerDay * 365;
    var years = maxAge - age;
    return "You will need " + Supply * years + "  to last you until the ripe old age of 90";
}
var r = calculateSupply(18, 2);
var f = calculateSupply(30, 4);
var u = calculateSupply(10, 1);
console.log(r);
//--4--//
function calcCircumfrence(radius) {
    var PI = 3.141592 * 2;
    var total = 3.141592 * 2;
    return "The circumference is " + radius * total + ".";
}
var q = calcCircumfrence(3);
console.log(q);
//--5--//
function celsiusToFahrenheit(celsius) {
    return celsius + "\u00B0C is " + (((celsius / 5) * 9) + 32) + "\u00B0F";
}
var k = celsiusToFahrenheit(32);
console.log(k);
function fahrenheitToCelsius(fahrenheit) {
    return fahrenheit + "\u00B0F is " + ((fahrenheit - 30) * 5) / 9 + "\u00B0C";
}
var b = fahrenheitToCelsius(68);
console.log(b);
