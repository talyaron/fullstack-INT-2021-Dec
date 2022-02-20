//Tell Fortune
function tellFortune(jobTitle, geoLoc, parName, numkids) {
    return ("You will be a " + jobTitle + " in " + geoLoc + " married in " + parName + " with " + numkids + " childrens");
}
var time1 = tellFortune("optician", "Israel", "Meiital", 5);
console.log(time1);
var time2 = tellFortune("doctor", "Argentine", "Laura", 2);
console.log(time2);
var time3 = tellFortune("artist", "Peru", "Jenny", 3);
console.log(time3);
//Puppy Age Calculator
function caculateDogAge(puppysAge) {
    return puppysAge * 7;
}
var age = caculateDogAge(2);
console.log("Your doggie is " + age + " years old in in dog years!");
var age = caculateDogAge(3);
console.log("Your doggie is " + age + " years old in in dog years!");
var age = caculateDogAge(4);
console.log("Your doggie is " + age + " years old in in dog years!");
//Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
    var maxAge = 120;
    return (amountPerDay * 365) * (maxAge - age);
}
var snacks = calculateSupply(45, 52);
console.log("You will need " + snacks + "  to last you until the ripe old age of 120 years old");
var snacks = calculateSupply(37, 48.5);
console.log("You will need " + snacks + "  to last you until the ripe old age of 120 years old");
var snacks = calculateSupply(12, 18);
console.log("You will need " + snacks + "  to last you until the ripe old age of 120 years old");
//The Geometrizer
