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
    return (`Your doggie is `+ puppysAge +` years old in in dog years!`)
    

}
