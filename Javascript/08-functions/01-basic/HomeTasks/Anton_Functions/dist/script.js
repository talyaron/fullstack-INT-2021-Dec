/* Number array of a children */
/* function maxChildren(n) {
    return Array(n).fill(0).map((_, idx) => idx + 1);
} */
/* Number array of a children */
/*  console.log("You'll get: " + children + " children"); */
var kids = document.getElementById("children");
var someLocation = document.getElementById("location");
var wife = document.getElementById("wife");
var job = document.getElementById("job");
function getRandomChildren(max) {
    return Math.floor(Math.random() * max); /* The Math.floor() function returns the largest integer less than or equal to a given number. */
}
function getRandomLocation() {
    var randomLocation = ['Siberia', 'Afghanistan', 'Belarus', 'Pakistan', 'Norway', 'USA', 'Israel'];
    var random = Math.floor(Math.random() * randomLocation.length);
    return randomLocation[random];
}
function getRandomWife() {
    var randomWife = ['Boris', 'Alisa', 'Mahmud', 'Fatima', 'Marina', 'Schneider', 'Yael'];
    var random = Math.floor(Math.random() * randomWife.length);
    return randomWife[random];
}
function getRandomJob() {
    var randomJob = ['Electrician', 'Web-Developer', 'Fisher men', 'Gold Digger', 'Miner', 'Beggar', 'Veteran'];
    var random = Math.floor(Math.random() * randomJob.length);
    return randomJob[random];
}
/* Box Rotation Animation */
var rotateS = 1485;
var box = document.getElementById("red_box");
box.addEventListener('click', function () {
    box.style.transform = "rotate(" + rotateS + "deg)";
});
/* Main Function */
function tellFortune() {
    var children = getRandomChildren(10);
    kids.innerHTML = 'You will have: ' + children + ' children';
    var location = getRandomLocation();
    someLocation.innerHTML = "You'll live in " + location;
    var women = getRandomWife();
    wife.innerHTML = "Your wife name is: " + women;
    var occupation = getRandomJob();
    job.innerHTML = "You'll work as: " + occupation;
}
//////////////////////////////////////////////////////////////////////
/* The Puppy Age Calculator */
function calculateDogAge(dogAge) {
    var dogAge = dogAge * 7;
    return 'Your doggie is ' + dogAge + ' years old in dog years!';
}
console.log(calculateDogAge(5));
console.log(calculateDogAge(120));
console.log(calculateDogAge(0.5));
//////////////////////////////////////////////////////////////////////
/* The Lifetime Supply Calculator */
function calculateSupply(age, amount) {
    var age;
    var amount;
    var supply = Math.floor(age * amount);
    return "You will need " + supply + " to last you until the ripe old age of " + age;
}
console.log(calculateSupply(17.3, 98));
//////////////////////////////////////////////////////////////////////
/* Celcius Converter */
function celsiusToFahrenheit(userInput) {
    var convert = ((userInput * 9) / 5) + 32;
    return "You Temp in Fahrenheit: " + convert;
}
/* Fahrenheit Converter */
function fahrenheitToCelcius(userInput) {
    var convert = (userInput - 32) * (5 / 9);
    return "Your Temp in Celcius: " + convert;
}
console.log(celsiusToFahrenheit(50));
console.log(fahrenheitToCelcius(160));
//////////////////////////////////////////////////////////////////////
/* Circumference */
function calcCircumfrence(radius) {
    var radius;
    var circumference = 2 * Math.PI * radius;
    return "the Circumference is: " + circumference;
}
console.log(calcCircumfrence(6));
/* Area of Circle */
function circleArea(radius) {
    var radius;
    var area = Math.PI * (Math.pow(radius, 2));
    return "Your circle area is: " + area;
}
console.log(circleArea(50));
