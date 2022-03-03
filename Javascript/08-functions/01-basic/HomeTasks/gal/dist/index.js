// --------------------------------------------------
// function 1
function tellFortune(numKids, partnersName, location, job) {
    return ("you will be a " + job + " in " + location + ", and married to " + partnersName + " with " + numKids + " kids");
}
var function1 = tellFortune(3, 'ofek', 'tlv', 'fullstackdev');
console.log(function1);
// ----------------------------------------------------
// function 2
function calculateDA(dogage) {
    return dogage * 7;
}
var function2A = calculateDA(4);
console.log("Your doggie is " + function2A + " years old in dog years!");
var function2B = calculateDA(8);
console.log("Your doggie is " + function2B + " years old in dog years!");
var function2C = calculateDA(12);
console.log("Your doggie is " + function2C + " years old in dog years!");
// --------------------------------------------------------
// function 3
function calculateSupply(age, ammountPD) {
    var MaxAge = 120;
    var sumAge = (MaxAge - age);
    var total = (ammountPD * 365) * (sumAge);
    var client = ("You will need " + total + " breads to last you until the ripe old age of " + sumAge);
    console.log(client);
}
calculateSupply(24, 100);
calculateSupply(24, 200);
calculateSupply(24, 300);
// ----------------------------------------------------------
// function 4
// -------part1---------------
function calcCircumfrence(radius) {
    var P = Math.round(radius * 2 * 3.14);
    var circle = ("The circumference is " + P);
    console.log(circle);
}
calcCircumfrence(10);
calcCircumfrence(20);
// ------------------------------------------------------------
//---------part2---------------
function calcArea(radius) {
    var r = Math.pow(radius, 2);
    var A = Math.round(r * 3.14);
    var area = ("The area is " + A);
    console.log(area);
}
calcArea(12);
calcArea(17);
// --------------------------------------------------------------
// function 5
function celsiusToFahrenheit(c, _fer) {
    var fer = c * 9 / 5 + 32;
    var temp = (fer + "F is " + c + "C");
    console.log(temp);
}
celsiusToFahrenheit(10, 0);
celsiusToFahrenheit(20, 0);
celsiusToFahrenheit(25, 0);
celsiusToFahrenheit(30, 0);
// ==============================THATS IT============================
