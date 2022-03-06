var _a;
function tellfortune(children, parentsName, location, job) {
    var future = "You will have " + children + " kids, you will live in " + location + " and work at " + job + " your parents name is " + parentsName;
    console.log(future);
}
tellfortune("3", "David and Tikva", "Ashkelon", "IDF");
//The Puppy age calcilator//
function calculateDogAge(puppyAge) {
    var dogYears = puppyAge * 7;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}
calculateDogAge(5);
///////  The Lifetime Supply Calculator ///////////
function calculateSupply(age, amountPerDay) {
    var lifetimeSupply = (80 - age) * (365 * amountPerDay);
    console.log("You will need " + lifetimeSupply + " bags of bamba to last you until the ripe old age of 80");
}
calculateSupply(28, 2);
//////  The Geometrizer  //////////////
function calcCircumfrence(radius) {
    var circumference = Math.round(Math.PI * (radius * 2));
    console.log("The circumference is " + circumference);
}
calcCircumfrence(5);
//// The Temperature Converter ////
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 1.8) + 32;
    console.log(" " + celsius + " celsius is " + fahrenheit + " fahrenheit");
}
celsiusToFahrenheit(25);
function fahrenheitToCelsius(fahrenheit) {
    var celsius = ((fahrenheit - 32) / 1.8);
    console.log(fahrenheit + " fahrenheit is " + celsius + " celsius");
}
fahrenheitToCelsius(77);
/// Arrey ////
var friends = ["David", "Eli", "Dudu", "Avi"];
for (var i = 0; i < friends.length; i++) {
    console.log("Welcome " + friends[i]);
}
///// Objects /////
var Juda = (_a = {
        firstName: "Juda",
        lastName: "Golan",
        location: "Azor",
        friends: Array
    },
    _a[("dudu", "Eli", "Shmulik")] = ,
    _a);
