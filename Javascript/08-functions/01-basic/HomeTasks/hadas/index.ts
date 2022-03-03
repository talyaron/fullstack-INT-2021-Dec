//-------------function1------------//
function tellFortune (numChilds:number,partnersName:string,location:string, job:string){
    return(`You will be a ${job} in ${location},and married to ${partnersName} with ${numChilds}kids`)
}
const x = tellFortune(2, 'avihai', 'israel', 'Fullstack')
console.log(x)

//-------------function2------------//
function calculateDogAge (age:number){
    return age*7;
}
const y1 = calculateDogAge (3);
const y2 = calculateDogAge (5);
const y3 = calculateDogAge (13);
console.log(`Your doggie is ${y1} years old in dog years!`);
console.log(`Your doggie is ${y2} years old in dog years!`);
console.log(`Your doggie is ${y3} years old in dog years!`);

//-------------function3------------//
function calculateSupply (age:number, numPerDay:number){
   var maxAge = 100;
   var totalNeeded = (numPerDay*365) * (maxAge-age);
   var outcome = ('You will need ' +  totalNeeded + ' cups of tea to last you until the ripe old age of ' +  maxAge)
   console.log(outcome);
}
calculateSupply (20,10);
calculateSupply (15,15);
calculateSupply (30,200);

//-------------function4------------//
function calcCircumfrence (radius:number){
    console.log (`The circumference is ${Math.floor(2*Math.PI*radius)}`)
}
function calcArea (radius:number){
    console.log (`The area is ${Math.floor(Math.PI*Math.pow(radius,2))}`)
}

 const w1 = calcCircumfrence (4);
 const w2 = calcArea (4);

 //-------------function5------------//
 function celsiusToFahrenheit(cel:number){
   let fahr = (cel*9/5)+32;
    console.log(`${cel} °C is ${fahr} °F` )
 }
 function fahrenheitToCelsius (fahr:number){
     let cel = (fahr-32)*5/9;
     console.log(`${fahr} °F is ${cel} °C `)
 }
 const u1 =celsiusToFahrenheit (7);
 const u2 = fahrenheitToCelsius(41);