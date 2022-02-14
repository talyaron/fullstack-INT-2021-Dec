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
