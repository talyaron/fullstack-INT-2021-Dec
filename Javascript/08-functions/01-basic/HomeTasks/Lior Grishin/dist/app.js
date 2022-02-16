//-------------EX1----------//
function tellFortune(numChilds, partnersName, geoLoc, job) {
    return ("You will be a " + job + " in " + geoLoc + ", and marrid to " + partnersName + " with " + numChilds + " kids");
}
var fun1 = tellFortune(5, 'Shilat', 'Israel', 'fullstack');
console.log(fun1);
//-------------EX2----------//
function calculateDogAge(puppyAge) {
    return puppyAge * 7;
}
var fun2one = calculateDogAge(7);
var fun2two = calculateDogAge(5);
var fun2three = calculateDogAge(11);
console.log("Your dog is " + fun2one + " years old in human years!");
console.log("Your dog is " + fun2two + " years old in human years!");
console.log("Your dog is " + fun2three + " years old in human years!");
//-------------EX3----------//
function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = ('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);
    console.log(message);
}
calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);
//-------------EX4----------//
function calcCircumfrence(radius) {
    console.log("The circumference is " + Math.floor(2 * Math.PI * radius));
}
function calcArea(radius) {
    console.log("The area is " + Math.floor(Math.PI * Math.pow(radius, 2)));
}
var fun4one = calcCircumfrence(5);
var fun4two = calcArea(5);
//-------------EX5----------//
function celsiusToFahrenheit(cel) {
    var fahr = (cel * 9 / 5) + 32;
    console.log(cel + "\u00B0C is " + fahr + "\u00B0F");
}
function fahrenheitToCelsius(fahr) {
    var cel = (fahr - 32) * 5 / 9;
    console.log(fahr + "\u00B0F is " + cel + "\u00B0C");
}
var fun5one = celsiusToFahrenheit(5);
var fun5two = fahrenheitToCelsius(41);
