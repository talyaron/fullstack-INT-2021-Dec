//first function
function tellMyFortune(jobTitle, geoLocation, partner, numKids) {
    return ("you will be a " + jobTitle + " in " + geoLocation + " and married to " + partner + " with " + numKids + " kids");
}
var functionA = tellMyFortune("Head of Product Design", "Israel", "Tomer Ben Johnathan", 1);
console.log(functionA);
//second function
function calculateDogAge(dogYears) {
    return dogYears * 7;
}
var functionB = calculateDogAge(4);
console.log("Your dooggie is " + functionB + " years old in dog years!");
//third function 
function calculateSupply(age, numPerDay) {
    var maxAge = 80;
    var ageDif = (maxAge - age);
    var totalSupply = (numPerDay * 365) * (ageDif);
    console.log("you will need " + totalSupply + " bottles of wine to last you until the ripe old age " + maxAge);
}
calculateSupply(27, 0.2);
//forth function 
function CelTOFahr(celsius, CeltoFahr) {
    var CelConvertFahr = (celsius * 9) / 5 + 32;
    console.log(celsius + " \u00B0C is " + CelConvertFahr + "\u00B0F");
}
//fifth function 
function circumference(radius) {
    var circle = radius * Math.PI;
    var area = Math.pow(radius, 2) * Math.PI;
    return ("the size of the circle is " + circle + " and the area is " + area);
}
console.log(circumference(5));
//sixth function 
function tmperature(celsius) {
    var convertA = celsius / 5 * 9 + 32;
    return ("the temp in ferenhiet is " + convertA);
}
console.log(tmperature(4));
function temperature1(ferenhiet) {
    var convertB = ((ferenhiet - 32) * 5) / 9;
    return ("the temp in celsius is " + convertB);
}
console.log(temperature1(28));
