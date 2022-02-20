const Shira:Array<number> = [90, 105, 200, 20, 30]

console.log(Shira)
const newShira = Shira.map(elm =>{
    if (elm > 100)
    return elm;
})
console.log(newShira)
 
const newhanoch = newShira.sort(elm =>{
    if (elm > 100)
    return elm;
})
console.log(newhanoch)