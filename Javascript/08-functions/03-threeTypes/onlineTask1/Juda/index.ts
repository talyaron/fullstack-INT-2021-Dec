//Regular function


console.log(sum(5,7))

function sum (a:number, b:number) :number {
    return a*b;
}

//Anonymous function


const sumAno = function (a:number, b:number):number {
    return a*b;
   
}

console.log(sumAno(6,8))

//Arrow function

const subArrow = function ( a:number, b:number) :number {
    return a*b;
}

console.log(subArrow(6,4));