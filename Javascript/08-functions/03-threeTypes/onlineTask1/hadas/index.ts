//regular function

console.log(sum(5,9));

function sum (a:number, b:number):number{
    return a+b;
}


//anonymous function

const sum2= function (a:number, b:number):number{
    return a+b;
}
console.log(sum2(5,9));

//arrow function

const sum3= (a:number, b:number):number =>{
    return a+b;
}
console.log(sum3(5,9))