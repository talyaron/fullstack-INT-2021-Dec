//first function
function tellMyFortune(jobTitle: any, geoLocation: string, partner: string, numKids: number, ) {
    return (`you will be a ${jobTitle} in ${geoLocation} and married to ${partner} with ${numKids} kids`);
}
const functionA = tellMyFortune(`Head of Product Design`, `Israel`, `Tomer Ben Johnathan`, 1)
console.log(functionA)

//second function
function calculateDogAge(dogYears: number) {
    return dogYears * 7;
}
const functionB = calculateDogAge(4);
console.log(`Your dooggie is ${functionB} years old in dog years!`);

//third function 
function calculateSupply(age: number, numPerDay: number) {
    let maxAge = 80;
    let ageDif = (maxAge - age);
    let totalSupply = (numPerDay * 365) * (ageDif);
    console.log(`you will need ${totalSupply} bottles of wine to last you until the ripe old age ${maxAge}`);

}
calculateSupply(27, 0.2)

//forth function 
function CelTOFahr(celsius: number, CeltoFahr: Number) {
    let CelConvertFahr = (celsius * 9) / 5 + 32;
    console.log(`${celsius} °C is ${CelConvertFahr}°F`)
}

//fifth function 
function circumference(radius: number) {
    const circle = radius * Math.PI
    const area = Math.pow(radius, 2) * Math.PI
    return (`the size of the circle is ${circle} and the area is ${area}`)
}
console.log(circumference(5))

//sixth function 
function tmperature(celsius: number) {
    const convertA = celsius / 5 * 9 + 32;
    return (`the temp in ferenhiet is ${convertA}`)
}
console.log(tmperature(4))

function temperature1(ferenhiet: number) {
    const convertB = ((ferenhiet - 32) * 5) / 9;
    return (`the temp in celsius is ${convertB}`)
}
console.log(temperature1(28))
