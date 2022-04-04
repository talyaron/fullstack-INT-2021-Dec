function tellFortune(Title, Location, partner, Kids) {
    var future = "You will be a " + Title + " in " + Location + " and married to " + partner + " with " + Kids + " kids.";
    console.log(future);
}
tellFortune('Socer Player', 'Spain', 'Nelson', 3);
tellFortune('Actor', 'Japan', 'Ron', 5);
tellFortune('Cat Walker', 'Russia', 'Frank', 0);
//------------------
function calculateDogAge(age) {
    var dogYears = age * 7 * age;
    console.log("Your doggie is " + dogYears + " years old in dog years");
}
calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);
//------------------
function calculateSupply(age, numDay) {
    var maxAge = 120;
    var totalNeeded = (numDay * 365) * (maxAge - age);
    var message = "You will need " + totalNeeded + " joints to last you until the age of " + maxAge;
    console.log(message);
}
calculateSupply(26, 36);
calculateSupply(26, 2.5);
calculateSupply(26, 400);
//-------------------
function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius * 9) / 5 + 32;
    console.log(celsius + " \u00B0C is " + celsiusInF + " \u00B0F");
}
function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
    console.log(fahrenheit + " \u00B0F is " + fahrenheitInC + " \u00B0C");
}
celsiusToFahrenheit(10);
celsiusToFahrenheit(36);
fahrenheitToCelsius(36);
fahrenheitToCelsius(10);
//==========================================================
function add(a, b) {
    return a + b;
}
var result = add(10, 50) * add(1, 1); // result == 120
var result2 = add(add(2, 3), add(1, 4)); // resukt2 == 10
function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
    return a;
}
var maxNum = max(9, 8);
