//-------------function1------------//
function tellFortune(numChilds, partnersName, location, job) {
    return ("You will be a " + job + " in " + location + ",and married to " + partnersName + " with " + numChilds + "kids");
}
var x = tellFortune(2, 'avihai', 'israel', 'Fullstack');
console.log(x);
//-------------function2------------//
function calculateDogAge(age) {
    return age * 7;
}
var y1 = calculateDogAge(3);
var y2 = calculateDogAge(5);
var y3 = calculateDogAge(13);
console.log("Your doggie is " + y1 + " years old in dog years!");
console.log("Your doggie is " + y2 + " years old in dog years!");
console.log("Your doggie is " + y3 + " years old in dog years!");
//-------------function3------------//
function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var outcome = ('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);
    console.log(outcome);
}
calculateSupply(20, 10);
calculateSupply(15, 15);
calculateSupply(30, 200);
//-------------function4------------//
function calcCircumfrence(radius) {
    console.log("The circumference is " + Math.floor(2 * Math.PI * radius));
}
function calcArea(radius) {
    console.log("The area is " + Math.floor(Math.PI * Math.pow(radius, 2)));
}
var w1 = calcCircumfrence(4);
var w2 = calcArea(4);
//-------------function5------------//
function celsiusToFahrenheit(cel) {
    var fahr = (cel * 9 / 5) + 32;
    console.log(cel + " \u00B0C is " + fahr + " \u00B0F");
}
function fahrenheitToCelsius(fahr) {
    var cel = (fahr - 32) * 5 / 9;
    console.log(fahr + " \u00B0F is " + cel + " \u00B0C ");
}
var u1 = celsiusToFahrenheit(7);
var u2 = fahrenheitToCelsius(41);
