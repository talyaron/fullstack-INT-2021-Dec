// --------------------------------------------------
// function 1

function tellFortune (numKids:number, partnersName: string, location: string, job: string){
    return (`you will be a ${job} in ${location}, and married to ${partnersName} with ${numKids} kids`);
}

const function1= tellFortune(3,'ofek','tlv','fullstackdev');
console.log(function1);

// ----------------------------------------------------
// function 2

function calculateDA (dogage:number){
    return dogage*7;
}

const function2A= calculateDA (4);
console.log(`Your doggie is ${function2A} years old in dog years!`);

const function2B= calculateDA (8);
console.log(`Your doggie is ${function2B} years old in dog years!`);

const function2C= calculateDA (12);
console.log(`Your doggie is ${function2C} years old in dog years!`);
    
// --------------------------------------------------------
// function 3

function calculateSupply (age:number, ammountPD:number){
    const MaxAge=120;
    let sumAge =(MaxAge-age);
    let total =(ammountPD*365)*(sumAge);
    let client = (`You will need ${total} breads to last you until the ripe old age of ${sumAge}`);
    console.log(client);
}

calculateSupply(24,100);
calculateSupply(24,200);
calculateSupply(24,300);

// ----------------------------------------------------------
// function 4
// -------part1---------------

function calcCircumfrence (radius:number){
    let P=Math.round (radius*2*3.14);
    let circle = (`The circumference is ${P}`);
    console.log (circle)
}

calcCircumfrence (10);
calcCircumfrence (20)

// ------------------------------------------------------------
//---------part2---------------

function calcArea (radius:number){
    let r=Math.pow(radius,2);
    let A=Math.round (r*3.14);
    let area= (`The area is ${A}`);
    console.log (area)
}

calcArea (12);
calcArea (17);

// --------------------------------------------------------------
// function 5
function celsiusToFahrenheit (c:number,_fer:number){
    let fer =c*9/5+32;
    let temp= (`${fer}F is ${c}C`);
    console.log (temp)
}

celsiusToFahrenheit (10,0)
celsiusToFahrenheit (20,0)
celsiusToFahrenheit (25,0)
celsiusToFahrenheit (30,0)

// ==============================THATS IT============================
