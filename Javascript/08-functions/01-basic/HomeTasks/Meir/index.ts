//Tell Fortune
function tellFortune (jobTitle:string, geoLoc:string, parName:string, numkids:number) {
    
    return (`You will be a `+ jobTitle +` in `+ geoLoc +` married in `+ parName +` with `+ numkids +` childrens`)
    
}
const time1 = tellFortune(`optician`, `Israel`, `Meiital`, 5 )
console.log(time1)
const time2 = tellFortune(`doctor`, `Argentine`, `Laura`, 2 )
console.log(time2)
const time3 = tellFortune(`artist`, `Peru`, `Jenny`, 3 )
console.log(time3)

//Puppy Age Calculator
function caculateDogAge(puppysAge:number) {
    return puppysAge*7
}  

const age = caculateDogAge(2)
console.log(`Your doggie is `+ age +` years old in in dog years!`)
const age = caculateDogAge(3)
console.log(`Your doggie is `+ age +` years old in in dog years!`)
const age = caculateDogAge(4)
console.log(`Your doggie is `+ age +` years old in in dog years!`)

//Lifetime Supply Calculator
function calculateSupply (age:number, amountPerDay:number) {
   const maxAge = 120;
   return (amountPerDay * 365) * (maxAge - age)
}
const snacks = calculateSupply(45, 52)
console.log(`You will need `+ snacks +`  to last you until the ripe old age of 120 years old`)
const snacks = calculateSupply(37, 48.5)
console.log(`You will need `+ snacks +`  to last you until the ripe old age of 120 years old`)
const snacks = calculateSupply(12, 18)
console.log(`You will need `+ snacks +`  to last you until the ripe old age of 120 years old`)
 
//The Geometrizer
