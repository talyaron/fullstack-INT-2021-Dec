
//function A: The Fortune Teller:
function tellFortune(children:number, partnerName:string,location:string,job:string){
    const userFortune = `You will be a ${job} in ${location} ,and married to ${partnerName} with ${children} kids`;
    console.log(userFortune);
}
tellFortune(3,'Ran','California','FS developer');
tellFortune(5,'Ofek','Paris','Chef');
tellFortune(6,'Shir','NY','pilot');


// function B: The Puppy Age Calculator: + Bonus
function calculateDogAge(puppyAge:number , humanToDog:number){
    const dogAge = (`Your doggie is: ${puppyAge*7}  years old in dog years! and your age is: ${humanToDog/7} years old in dog years`) ;
    console.log(dogAge);
}
calculateDogAge(1 , 14);


//function C: The Lifetime Supply Calculator: + Bonus
function calculateSupply( age:number, amountPerDay:number){
    const snackAmount = (`you will need amount of: ${(age*365) * (Math.ceil(amountPerDay))} to last you until the ripe old age of 120`)
    console.log(snackAmount);
 
}
calculateSupply(20,2.288);



//function D: The Geometrizer:
function calcCircumfrence(radius:number){
const circumference = (`The circumference is: ${2 * (Math.PI) * radius}`)
console.log(circumference);
}
calcCircumfrence(5);

function calcArea(radius:number){
const areaOfCircle = (`The circle area is: ${(Math.PI)*(Math.pow(radius,2))} `)
console.log(areaOfCircle);
}
calcArea(5);

// function E: The Temperature Converter:
function celsiusToFahrenheit(celsiusTemp:number){
    const ConvertTemp = (`${celsiusTemp} in Celsius is: ${(((celsiusTemp)/5)*9)+32} in Fahrenheit`)
    console.log(ConvertTemp);
}
celsiusToFahrenheit(0);


function fahrenheitToCelsius(FahrenheitTemp:number){
    const ConvertTemp = (`FahrenheitTemp in Fehr is: ${((FahrenheitTemp-32)*5)/9} in celsius `)
    console.log(ConvertTemp);
}

fahrenheitToCelsius(230);

