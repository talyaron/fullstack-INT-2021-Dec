console.log('hi');
// First Exercise - The Fortune Teller
function tellFortune(children, partnerName, where, job) {
    console.log("You will be a " + job + " in " + where + ", and married to " + partnerName + " with " + children + " kids.");
}
var try1 = tellFortune(4, "Sami", "Ashdod", "Doctor");
var try2 = tellFortune(2, "Benji", "Ashdod", "Fullstack Developer");
var try3 = tellFortune(4, "Yoav", "Ashdod", "Firefighter");
// Second Exercise - The Puppy Age Calculator
function calculateDogAge(pupAge) {
    var dogYears = pupAge * 7;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}
var dog1 = calculateDogAge(4);
var dog2 = calculateDogAge(7);
var dog3 = calculateDogAge(18);
// Third Exercise - The Lifetime Supply Calculator
function calculateSupply(ageOfPerson, amountPerDay) {
    var maxAge = 100;
    var total = (amountPerDay * 365) * (maxAge - ageOfPerson);
    var message = "You will need " + total + " cinnamon Buns to last you until the ripe old age of " + maxAge;
    console.log(message);
}
calculateSupply(5, 6);
calculateSupply(4, 7);
calculateSupply(40, 90);
// Fourth Exercise - The Geometrizer
function calcCircumfrence(radius) {
    var circum = Math.PI * radius * 2;
    console.log("The circumference is " + circum + " cm");
}
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log(area);
}
var circum1 = calcCircumfrence(3);
var area1 = calcArea(3);
// Fifth Exercise - The Temperature Converter
function celsiusToFahrenheit(degressCel) {
    var tempFer = (degressCel / 5 * 9) + 32;
    console.log(degressCel + "\u00B0C is " + tempFer + "\u00B0F");
}
function fahrenheitToCelsius(degressFer) {
    var tempCel = (degressFer - 32) * 5 / 9;
    console.log(degressFer + "\u00B0F is " + tempCel + "\u00B0C");
}
var tempcalc1 = celsiusToFahrenheit(15);
var tempcalc2 = fahrenheitToCelsius(32);
