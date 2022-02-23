
// The Fortune Teller //

function tellFortune (numChildren: number, partnersName: string, geoLoc: string, job: string): string{
    return(`You will be a ${job} in ${geoLoc}, and married to ${partnersName} with ${numChildren} children`);
}
const fortuneOne = tellFortune (3, 'Michael', 'Canada', 'Developer');
console.log(fortuneOne);

// The Puppy Age Calculator //

function calcLife(puppyAge:number){
    return puppyAge*7;
}

const dogCalOne = calcLife(4);
const dogCalTwo = calcLife(12);
const dogCalThree = calcLife(8);
console.log(`Your dog is ${dogCalOne} years old in human years!`);
console.log(`Your dog is ${dogCalTwo} years old in human years!`);
console.log(`Your dog is ${dogCalThree} years old in human years!`);


//The Lifetime Supply Calculator//

function calcSupply(age:number, numPerDay:number){
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = ('You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge);
    console.log(message);
} 
calcSupply(28, 36);
calcSupply(28, 2.5);
calcSupply(28, 400);


//The Geometrizer//
function calcCircumference(radius:number){
    console.log(`The circumference of the circle is ${Math.floor(2*Math.PI*radius)}`);
}
function calcArea(radius:number){
    console.log(`The area of the circle is ${Math.floor(Math.PI*Math.pow(radius,2))}`);
}
const funCirc1 = calcCircumference(5);
const funCirc2 = calcArea(5);


//The Temperature Converter//
function cToF(cel:number){
    let fahr = (cel * 9/5) +32;
    console.log(`${cel}°C is ${fahr}°F`);
}
function fToC(fahr:number){
    let cel = (fahr - 32) * 5/9;
    console.log(`${fahr}°F is ${cel}°C`)
}
const cel2Fahr = cToF(5);
const fahar2Cel = fToC(36);

