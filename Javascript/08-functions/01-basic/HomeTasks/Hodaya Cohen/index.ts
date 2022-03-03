//--1--//

function tellFortune(jobTitle:string,loction:string,partner:string,childrenNumber:string){
    return `You will be ${jobTitle} in ${loction} married to ${partner} with ${childrenNumber}kids `
}
const x= tellFortune(`hairdresser` ,`Petah Tikva` ,`David`,`5 `)
const y= tellFortune(`singer` ,`Tel Aviv` ,`Moshe`,`7 `)
const z= tellFortune(`actor` ,`Nofech` ,`Yair`,`3 `)
console.log(x)

//--2--//

function calculateDogAge(puppyAge:number){
    return `Your doggie is ${puppyAge} years old in dog years`
}
const t = calculateDogAge(6);
const e = calculateDogAge(4);
const v = calculateDogAge(2);
console.log(t)
//--3--//
function calculateSupply(age:number,amountPerDay:number){
const maxAge:number=90;
const Supply:number=amountPerDay*365;
const years:number=maxAge-age;
return `You will need ${Supply*years}  to last you until the ripe old age of 90`
}
const r=calculateSupply(18,2);
const f=calculateSupply(30,4);
const u=calculateSupply(10,1);
console.log(r)

//--4--//
function calcCircumfrence(radius:number){
    const PI:number=3.141592*2;
    const total:number=3.141592*2;
    return `The circumference is ${radius*total}.`
}
const q=calcCircumfrence(3)
console.log(q)

//--5--//
function celsiusToFahrenheit(celsius: number) {
    return `${celsius}°C is ${((celsius / 5) * 9) + 32}°F`

}
const k = celsiusToFahrenheit(32);
console.log(k)

function fahrenheitToCelsius(fahrenheit: number) {
    return `${fahrenheit}°F is ${((fahrenheit - 30) * 5) / 9}°C`

}
const b = fahrenheitToCelsius(68);
console.log(b)