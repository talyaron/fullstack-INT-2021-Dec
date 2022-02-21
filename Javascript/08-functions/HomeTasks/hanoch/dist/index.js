var try1 = +prompt("give me number or string");
console.log(try1);
var babi = [5, 10, 'baba', 'hanoch'];
var chek = babi.map(function (e) {
    if (isNaN(try1))
        return e;
});
console.log(chek);
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
