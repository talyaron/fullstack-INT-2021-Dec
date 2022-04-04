function tellFortune(Title:string, Location:string, partner:string, Kids:number) {
  let future:string = `You will be a ${Title} in ${Location} and married to ${partner} with ${Kids} kids.`;
  console.log(future);
}

tellFortune('Socer Player', 'Spain', 'Nelson', 3);
tellFortune('Actor', 'Japan', 'Ron', 5);
tellFortune('Cat Walker', 'Russia', 'Frank', 0);

//------------------

function calculateDogAge(age:number) {
  let dogYears:number = age*7 * age;
  console.log(`Your doggie is ${dogYears} years old in dog years`);
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);

//------------------

function calculateSupply(age:number, numDay:number) {
  let maxAge:number = 120;
  let totalNeeded:number = (numDay * 365) * (maxAge - age);
  let message:string = `You will need ${totalNeeded} joints to last you until the age of ${maxAge}`;
  console.log(message);
}

calculateSupply(26, 36);
calculateSupply(26, 2.5);
calculateSupply(26, 400);

//-------------------

function celsiusToFahrenheit(celsius:number) {
  let celsiusInF:number = (celsius * 9) / 5 + 32;
  console.log(`${celsius} °C is ${celsiusInF} °F`);
}

function fahrenheitToCelsius(fahrenheit:number) {
  var fahrenheitInC:number = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit} °F is ${fahrenheitInC} °C`);
}

celsiusToFahrenheit(10)
celsiusToFahrenheit(36)
fahrenheitToCelsius(36)
fahrenheitToCelsius(10)


//==========================================================

function add(a: number, b: number) {
  return a + b;
}

let result = add(10, 50) * add(1, 1);  // result == 120
let result2 = add(add(2, 3), add(1, 4));  // resukt2 == 10


function max(a: number, b: number) {
  if (a > b) {
    return a
  }
  else {
    return b
  }
  return a;
}
let maxNum = max(9, 8)


// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids." 
// Call that function 3 times with 3 different values for the arguments. 


// function tellFortune(children:number, partnerName:string,location: string,job: string){
  // console.log(`you will be a ${job} in ${location} and married to ${partnerName} with ${children} kids`);


