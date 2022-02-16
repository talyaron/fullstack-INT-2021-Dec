
//---------------------------------------------------------------------------------------------------
function tellFortune(childrenNo:number, partnerName:String, location:string, jobTitle:String){

    console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${childrenNo} kids.`);

}

//--------------- TEST tellFortune-----------
tellFortune(3,"Maya","Israel", "Web Developer");
tellFortune(4,"Hadas","USA", "Interior Designer");
tellFortune(2,"Hadar","CANADA", "Electrician");

//---------------------------------------------------------------------------------------------------

function calculateDogAge(puppysAge:number, humanAgeRate:number){

    puppysAge = puppysAge*humanAgeRate;
    console.log(`Your doggie is ${puppysAge} years old in dog years!`);

}
//--------------- TEST calculateDogAge-----------

calculateDogAge(1, 7);
calculateDogAge(2, 7);
calculateDogAge(2.5, 7);
//---------------------------------------------------------------------------------------------------

function calculateSupply(age:number, amountDaily:number){

    const maxAge:number = 120
    var supplyNeeded:number = Math.round((120-age)*365*amountDaily)

    console.log(`You will need ${supplyNeeded} to last you until the ripe old age of ${maxAge}`;

}
//--------------- TEST calculateSupply-----------

calculateSupply(29,2)
calculateSupply(29,2.5)
calculateSupply(29,3.5)

//---------------------------------------------------------------------------------------------------

function calcCircumfrence(radius:number){
    
    var circumference :number = 2*Math.PI*radius
console.log(`The circumference  is ${circumference}`)

}
//--------------- TEST calcCircumfrence-----------

calcCircumfrence(2)
calcCircumfrence(9)
calcCircumfrence(123)


//---------------------------------------------------------------------------------------------------
function calcArea(radius:number){

var area:number = Math.PI*Math.pow(radius, 2)
console.log(`The area is ${area}`)

}
//--------------- TEST calcArea-----------

calcArea(2)
calcArea(9)
calcArea(123)

//---------------------------------------------------------------------------------------------------
function celsiusToFahrenheit(celsius:number){

    var Fahrenheit:number = (celsius/5*9)+32;
    console.log(`${celsius}°C is ${Fahrenheit}°F`);
}
//--------------- TEST celsiusToFahrenheit-----------
celsiusToFahrenheit(20);
celsiusToFahrenheit(25);
celsiusToFahrenheit(31);

//---------------------------------------------------------------------------------------------------
function fahrenheitToCelsius(fahrenheit:number){

    var celsius:number = (fahrenheit-32)*5/9
    console.log(`${fahrenheit}°F is ${celsius}°C.`);
}

fahrenheitToCelsius(68)
fahrenheitToCelsius(77)
fahrenheitToCelsius(87.8)
//---------------------------------------------------------------------------------------------------
    
