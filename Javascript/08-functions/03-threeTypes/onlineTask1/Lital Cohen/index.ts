//regular function
console.log(sumReg(8, 2))
function sumReg(a:any, b:any):Number{
    return a+b;
}

//anonymous function
const sumAnn=function(a:any, b:any):any{
    return a+b;

}
console.log(sumAnn(4, 5))

//arrow functions 
const sumArr=(a:any, b:any):any=>{
    return a+b;
}
console.log(sumArr(9, 4))