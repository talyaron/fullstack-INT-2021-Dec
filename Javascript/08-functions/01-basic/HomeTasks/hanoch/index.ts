function tellfuture(JobTitle:string, GeoLocation:string, Partner:string, NumKids:number){
    return (`I will be ${JobTitle} in ${GeoLocation} marrid to ${Partner} with ${NumKids} kids`)
}
console.log(tellfuture("analyst", 'new york', 'stav',3))
console.log(tellfuture("singer", 'jerusalem', 'nitzan',4))
console.log(tellfuture("developer", 'rome', 'ruth',5))

function dogage(Humanyears:number){
    return Humanyears*7;
}
console.log(dogage(3))
console.log(dogage(5))
console.log(dogage(7))

function supply(age:number, amount:number){
   const bamba:number= age * amount * 365;
   return (`you will need ${bamba} bamba until ${age} age, ${amount} times for a day`)
}
console.log(supply(3,3))
console.log(supply(84,2))
console.log(supply(90,1))



function circumference(radius:number){
    const circle = radius * Math.PI
    const area = Math.pow(radius,2) * Math.PI
    return (`the size of the circle is ${circle} and the area is ${area}`)
}
console.log(circumference(5))

function tmperature(celsius:number){
    const convert1 = celsius / 5 * 9 + 32;
    return (`the temp in ferenhiet is ${convert1}`) 
}
console.log(tmperature(10))

function temperature1(ferenhiet:number){
    const convert2 = ((ferenhiet - 32) * 5) /9;
    return (`the temp in celsius is ${convert2}`)   
}
console.log(temperature1(50))