
// Fortune Teller Exercise 1 //

function tellFortune (numChildren:number, partnersName:string, geoLoc:string, job:string){
    return(`You will be a ${job} in ${geoLoc}, and married to ${partnersName} with ${numChildren} children`);
}
const fortuneOne = tellFortune (3, 'Michael', 'Canada', 'Developer');
console.log(fortuneOne);

//Dog life Exercise//

function calculateDogLife(puppyAge:number){
    return puppyAge*7;
}

const dogCalOne = calculateDogLife(4);
const dogCalTwo = calculateDogLife(12);
const dogCalThree = calculateDogLife(8);
console.log(`Your dog is ${dogCalOne} years old in human years!`);
console.log(`Your dog is ${dogCalTwo} years old in human years!`);
console.log(`Your dog is ${dogCalThree} years old in human years!`);


//Life Span Exercise 4//

function calculateSupply(age:number, numPerDay:number){
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = ('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);
    console.log(message);
} 
calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);


//Circumference exercise 5//
function calcCircumference(radius:number){
    console.log(`The circumference of the circle is ${Math.floor(2*Math.PI*radius)}`);
}
function calcArea(radius:number){
    console.log(`The area of the circle is ${Math.floor(Math.PI*Math.pow(radius,2))}`);
}
const funCirc1 = calcCircumference(5);
const funCirc2 = calcArea(5);


//Celcius to Fahrenheit Conversion//
function celsiusToFahrenheit(cel:number){
    let fahr = (cel * 9/5) +32;
    console.log(`${cel}°C is ${fahr}°F`);
}
function fahrenheitToCelsius(fahr:number){
    let cel = (fahr - 32) * 5/9;
    console.log(`${fahr}°F is ${cel}°C`)
}
const cel2Fahr = celsiusToFahrenheit(5);
const fahar2Cel = fahrenheitToCelsius(36);

