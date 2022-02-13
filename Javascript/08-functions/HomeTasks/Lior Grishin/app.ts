//-------------EX1----------//
function tellFortune (numChilds:number, partnersName:string, geoLoc:string, job:string){
    return(`You will be a ${job} in ${geoLoc}, and marrid to ${partnersName} with ${numChilds} kids`);
}
const fun1 = tellFortune(5, 'Shilat', 'Israel', 'fullstack');
console.log(fun1);




//-------------EX2----------//
function calculateDogAge(puppyAge:number){
    return puppyAge*7;
}

const fun2one = calculateDogAge(7);
const fun2two = calculateDogAge(5);
const fun2three = calculateDogAge(11);
console.log(`Your dog is ${fun2one} years old in human years!`);
console.log(`Your dog is ${fun2two} years old in human years!`);
console.log(`Your dog is ${fun2three} years old in human years!`);


//-------------EX3----------//
function calculateSupply(age:number){
// Excuse me they can't expalin them self, so I won't build  a function for them, Sorry <3!
}


//-------------EX4----------//
function calcCircumfrence(radius:number){
    console.log(`The circumference is ${Math.floor(2*Math.PI*radius)}`);
}
function calcArea(radius:number){
    console.log(`The area is ${Math.floor(Math.PI*Math.pow(radius,2))}`);
}
const fun4one = calcCircumfrence(5);
const fun4two = calcArea(5);


//-------------EX5----------//
function celsiusToFahrenheit(cel:number){
    let fahr = (cel * 9/5) +32;
    console.log(`${cel}°C is ${fahr}°F`);
}
function fahrenheitToCelsius(fahr:number){
    let cel = (fahr - 32) * 5/9;
    console.log(`${fahr}°F is ${cel}°C`)
}
const fun5one = celsiusToFahrenheit(5);
const fun5two = fahrenheitToCelsius(41);

