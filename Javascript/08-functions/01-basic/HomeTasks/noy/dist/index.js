// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(childrenNumber, partnerName, location, jobTitle) {
    var fortune = ("You will be " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + childrenNumber + " kids.");
    return (fortune);
}
console.log(tellFortune(3, 'Mor', 'Haifa', 'Dancer'));
console.log(tellFortune(5, 'Shay', 'Tel-aviv', 'Singer'));
console.log(tellFortune(2, 'Ben', 'Eilat', 'Chef'));
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(puppyAge, conversionRate) {
    return puppyAge * 7;
}
console.log("Your doggie is " + calculateDogAge(3, 7) + " years old in dog years!");
console.log("Your doggie is " + calculateDogAge(4, 7) + " years old in dog years!");
console.log("Your doggie is " + calculateDogAge(1, 7) + " years old in dog years!");
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number
var maxAge = 120;
function calculateSupply(age, amount) {
    return Math.floor((maxAge - age) * amount);
}
console.log("You will need " + calculateSupply(30, 2) + " to last you until the ripe old age of " + maxAge);
console.log("You will need " + calculateSupply(110, 1) + " to last you until the ripe old age of " + maxAge);
console.log("You will need " + calculateSupply(16, 4) + " to last you until the ripe old age of " + maxAge);
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcCircumfrence(radius) {
    return 2 * radius * Math.PI;
}
function calcArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
var radius = +prompt('Enter circle radius');
console.log("The circumference is " + calcCircumfrence(radius) + " and the area is " + calcArea(radius));
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(celsiusDegree) {
    return (celsiusDegree * 9) / 5 + 32;
}
var celsiusDegree = +prompt('Enter celsius degree');
console.log(celsiusDegree + "\u00B0C is " + celsiusToFahrenheit(celsiusDegree) + "\u00B0F");
function fahrenheitToCelsius(fahrenheitDegree) {
    return ((fahrenheitDegree - 32) * 5) / 9;
}
var fahrenheitDegree = +prompt('Enter farenheit degree');
console.log(fahrenheitDegree + "\u00B0F is " + fahrenheitToCelsius(fahrenheitDegree) + "\u00B0C");
