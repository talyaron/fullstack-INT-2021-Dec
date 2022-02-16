//---------------------------------------------------------------------------------------------------
function tellFortune(childrenNo, partnerName, location, jobTitle) {
    console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + childrenNo + " kids.");
}
//--------------- TEST tellFortune-----------
tellFortune(3, "Maya", "Israel", "Web Developer");
tellFortune(4, "Hadas", "USA", "Interior Designer");
tellFortune(2, "Hadar", "CANADA", "Electrician");
//---------------------------------------------------------------------------------------------------
function calculateDogAge(puppysAge, humanAgeRate) {
    puppysAge = puppysAge * humanAgeRate;
    console.log("Your doggie is " + puppysAge + " years old in dog years!");
}
//--------------- TEST calculateDogAge-----------
calculateDogAge(1, 7);
calculateDogAge(2, 7);
calculateDogAge(2.5, 7);
//---------------------------------------------------------------------------------------------------
function calculateSupply(age, amountDaily) {
    var maxAge = 120;
    var supplyNeeded = Math.round((120 - age) * 365 * amountDaily);
    console.log("You will need " + supplyNeeded + " to last you until the ripe old age of " + maxAge);
}
//--------------- TEST calculateSupply-----------
calculateSupply(29, 2);
calculateSupply(29, 2.5);
calculateSupply(29, 3.5);
//---------------------------------------------------------------------------------------------------
function calcCircumfrence(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference  is " + circumference);
}
//--------------- TEST calcCircumfrence-----------
calcCircumfrence(2);
calcCircumfrence(9);
calcCircumfrence(123);
//---------------------------------------------------------------------------------------------------
function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area);
}
//--------------- TEST calcArea-----------
calcArea(2);
calcArea(9);
calcArea(123);
//---------------------------------------------------------------------------------------------------
function celsiusToFahrenheit(celsius) {
    var Fahrenheit = (celsius / 5 * 9) + 32;
    console.log(celsius + "\u00B0C is " + Fahrenheit + "\u00B0F");
}
//--------------- TEST celsiusToFahrenheit-----------
celsiusToFahrenheit(20);
celsiusToFahrenheit(25);
celsiusToFahrenheit(31);
//---------------------------------------------------------------------------------------------------
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    console.log(fahrenheit + "\u00B0F is " + celsius + "\u00B0C.");
}
fahrenheitToCelsius(68);
fahrenheitToCelsius(77);
fahrenheitToCelsius(87.8);
//---------------------------------------------------------------------------------------------------
