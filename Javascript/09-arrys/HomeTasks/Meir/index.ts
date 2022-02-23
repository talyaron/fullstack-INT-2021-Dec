const  arr: Array<any> = [4,14,18,41,45, "Cacho", "time", "majashaba", "true"]

const newArr = arr.map(elm => {
    if(typeof elm === 'number') return elm;
}).filter(elm => elm !== undefined)
console.log(newArr)


const newArr = arr.map(elm => {
    if(typeof elm === 'string') return elm;
}).filter(elm => elm !== undefined)
console.log(newArr)

try{

    const newArr = arr.map(elm => {
    if(typeof elm !== 'number' && elm !=='string') 
}).filter(elm => elm !== undefined)
console.log(newArr) throw "לא קיבלתי פקודה מתאימה"


} catch(err){
    console.error(err);
   
}
