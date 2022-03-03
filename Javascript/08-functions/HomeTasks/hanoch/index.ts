var try1 = prompt("give me number or string")
console.log(try1)
const babi:Array<any> = [5, 10, 'baba', 'hanoch']
const a = babi.filter(e => typeof e === 'number')
const b = babi.filter(e => typeof e === 'string')
try{ if ( try1 === 'string' ){
    console.log(b)
}
else if( try1 === 'number'){
    console.log(a)
}
else{
    console.log(`you enter a wrong content!!`)
}
}catch(error){
    console.error(error);
    
}









// var x = 0;
// const chek = babi.map(e => 
// {
//     if(typeof try1 === "string") 
//     // x = babi.map(y => typeof y === 'string')
//     return  e

// })
// console.log(chek)


// const chek1 = babi.map(g =>{
//     if(typeof +try1 === 'number') 
//     return g

// }).filter(g => typeof g === 'number')
// console.log(chek1)

// const chek2 = babi.map(f =>{
//     if(typeof try1 === null) 
//     return f

// }).filter(f => typeof f === 'number')
// console.log(chek2)











// var number1 = babi.map(Number);
// var string1 = babi.forEach(String);
// if (typeof(try1) === 'number'){
//     console.log (number1)
// }


