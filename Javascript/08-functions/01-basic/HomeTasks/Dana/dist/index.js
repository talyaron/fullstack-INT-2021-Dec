// Fortune Teller Exercise 1 //
function tellFortune(numChildren, partnersName, geoLoc, job) {
    return ("You will be a " + job + " in " + geoLoc + ", and married to " + partnersName + " with " + numChildren + " children");
}
var fortuneOne = tellFortune(3, 'Michael', 'Canada', 'Developer');
console.log(fortuneOne);
//Dog life Exercise//
function calculateDogLife(puppyAge) {
    return puppyAge * 7;
}
var dogCalOne = calculateDogLife(4);
var dogCalTwo = calculateDogLife(12);
var dogCalThree = calculateDogLife(8);
console.log("Your dog is " + dogCalOne + " years old in human years!");
console.log("Your dog is " + dogCalTwo + " years old in human years!");
console.log("Your dog is " + dogCalThree + " years old in human years!");
//Life Span Exercise 4//
function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = ('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);
    console.log(message);
}
calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);
//Circumference exercise 5//
function calcCircumference(radius) {
    console.log("The circumference of the circle is " + Math.floor(2 * Math.PI * radius));
}
function calcArea(radius) {
    console.log("The area of the circle is " + Math.floor(Math.PI * Math.pow(radius, 2)));
}
var funCirc1 = calcCircumference(5);
var funCirc2 = calcArea(5);
//Celcius to Fahrenheit Conversion//
function celsiusToFahrenheit(cel) {
    var fahr = (cel * 9 / 5) + 32;
    console.log(cel + "\u00B0C is " + fahr + "\u00B0F");
}
function fahrenheitToCelsius(fahr) {
    var cel = (fahr - 32) * 5 / 9;
    console.log(fahr + "\u00B0F is " + cel + "\u00B0C");
}
var cel2Fahr = celsiusToFahrenheit(5);
var fahar2Cel = fahrenheitToCelsius(36);
