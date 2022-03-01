// The Fortune Teller //
function tellFortune(numChildren, partnersName, geoLoc, job) {
    return ("You will be a " + job + " in " + geoLoc + ", and married to " + partnersName + " with " + numChildren + " children");
}
var fortuneOne = tellFortune(3, 'Michael', 'Canada', 'Developer');
console.log(fortuneOne);
// The Puppy Age Calculator //
function calcLife(puppyAge) {
    return puppyAge * 7;
}
var dogCalOne = calcLife(4);
var dogCalTwo = calcLife(12);
var dogCalThree = calcLife(8);
console.log("Your dog is " + dogCalOne + " years old in human years!");
console.log("Your dog is " + dogCalTwo + " years old in human years!");
console.log("Your dog is " + dogCalThree + " years old in human years!");
//The Lifetime Supply Calculator//
function calcSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = ('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);
    console.log(message);
}
calcSupply(28, 36);
calcSupply(28, 2.5);
calcSupply(28, 400);
//The Geometrizer//
function calcCircumference(radius) {
    console.log("The circumference of the circle is " + Math.floor(2 * Math.PI * radius));
}
function calcArea(radius) {
    console.log("The area of the circle is " + Math.floor(Math.PI * Math.pow(radius, 2)));
}
var funCirc1 = calcCircumference(5);
var funCirc2 = calcArea(5);
//The Temperature Converter//
function cToF(cel) {
    var fahr = (cel * 9 / 5) + 32;
    console.log(cel + "\u00B0C is " + fahr + "\u00B0F");
}
function fToC(fahr) {
    var cel = (fahr - 32) * 5 / 9;
    console.log(fahr + "\u00B0F is " + cel + "\u00B0C");
}
var cel2Fahr = cToF(5);
var fahar2Cel = fToC(36);
