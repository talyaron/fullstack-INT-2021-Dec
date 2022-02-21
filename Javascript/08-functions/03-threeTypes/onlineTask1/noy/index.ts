
function sum (a:number, b:number):number{
    return a+b;
}

const sum2 = function(a:number, b:number):number{
    return a+b;
}

const sum3 = (a:number, b:number):number =>{
    return a+b;
}

let num1:number = +prompt('please enter a number');
let num2:number = +prompt('please enter a number');
console.log(sum(num1,num2));
console.log(sum2(num1,num2));
console.log(sum3(num1,num2));
