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

