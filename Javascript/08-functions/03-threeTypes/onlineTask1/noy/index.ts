
function sum (a:number, b:number):number{
    return a+b;
}

const sum2 = function(a:number, b:number):number{
    return a+b;
}

const sum3 = (a:number, b:number):number =>{
    return a+b;
}

console.log(sum(2,1));
console.log(sum2(2,1));
console.log(sum3(2,1));
