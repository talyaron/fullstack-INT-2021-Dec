
//Tell Fortune!---//
function tellFortune(jobTitle: string, loction: string, partnerName: string, childrenNumber: string) {
    return `You will be ${jobTitle} in ${loction} married to ${partnerName} with ${childrenNumber} kids`
}

const x = tellFortune('a lawyer', 'Tel Aviv', 'Leo', '3',)
const y = tellFortune('a gamer', 'LA', 'Ella', '4',)
const z = tellFortune('a dancer', 'London', 'Ben', '2',)
console.log(`Your future prediction: ${y}`)


//Dog Age!---//
function calculateDogAge(puppyAge: number) {
    return `Your doggie is ${puppyAge * 7} years old in human years!`
}

const e = calculateDogAge(3);
const r = calculateDogAge(1);
const q = calculateDogAge(10);
console.log(e)

function calculateHumnaAge(humanAge: number) {
    return `You are ${humanAge / 7} years old in dog years!`
}

const u = calculateHumnaAge(50);
const i = calculateHumnaAge(21);
const a = calculateHumnaAge(24);
console.log(a)

//Lifetime Supply---//
function calculateSupply(age: number, amountPerDay: number) {
    const maxAge: number = 80;
    const supply: number = amountPerDay * 365;
    const years: number = maxAge - age;
    return `You will need ${supply * years} snacks to last you until the ripe old age of 80`
}
const v = calculateSupply(24, 2);
const b = calculateSupply(12, 3);
const n = calculateSupply(3, 1);
console.log(v)

//The Geometrizer---//
function calcCircumfrence(radius: number) {
    const circumference: number = Math.PI * 2 * radius;
    return `The circumference is ${circumference}`
}
const l = calcCircumfrence(5);
console.log(l)

function calcArea(radius: number) {
    const area: number = Math.PI * Math.pow(radius, 2);
    return `The area is ${area}`
}
const k = calcArea(5);
console.log(k)

//The Temperature Converter---//
function celsiusToFahrenheit(celsius: number) {
    return `${celsius}°C is ${((celsius / 5) * 9) + 32}°F`

}
const g = celsiusToFahrenheit(32);
console.log(g)

function fahrenheitToCelsius(fahrenheit: number) {
    return `${fahrenheit}°F is ${((fahrenheit - 30) * 5) / 9}°C`

}
const p = fahrenheitToCelsius(68);
console.log(p)