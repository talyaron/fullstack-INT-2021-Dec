


function tellFortune(childrenNum:number, partnersName:string, location:string, job:string){
    let x = `you have ${childrenNum} childrens, your partners name is ${partnersName}, you live in ${location} and your job is ${job}`
    console.log(x)
}

tellFortune(2, 'jhon', 'israel', 'novel writer');

tellFortune(2, 'paul', 'dubai', 'chef');

tellFortune(2, 'kai', 'japan', 'teacher');


function calculateDogAge(dogAge:number){
    let dogHumanAge = dogAge * 7
    console.log(dogHumanAge);
}

calculateDogAge(10);


function calculateSupply(maxAge:number){
    let yourAge = 23;
    let yearsLeft = maxAge - yourAge;
    console.log(`you are ${yourAge} years old, you have ${yearsLeft} to get to ${maxAge}`);
}

calculateSupply(100);

function calcCircumfrence(radius:number){
    let c = Math.PI * 2 * radius;
    console.log(Math.round(c));
}

calcCircumfrence(10);
calcCircumfrence(8);
calcCircumfrence(6);

function celsiusToFahrenheit(celsiusDeg){
    let celsiusToFar = (celsiusDeg * 1.8) +32;
    console.log(celsiusToFar);
}

celsiusToFahrenheit(10)
celsiusToFahrenheit(20)
celsiusToFahrenheit(36)