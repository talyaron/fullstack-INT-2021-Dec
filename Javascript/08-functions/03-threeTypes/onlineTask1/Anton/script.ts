console.log(add(5,7));

//regular function
function add (a: number, b: number):number {
    return a + b;
}

// anonymous function
const add2 = function (a:number, b:number):number {
    return a*b;
}
console.log(add2(5,7));


//arrow function
const add3 = (a: number, b:number):number => {
    return a+b;
}
console.log(add3(5,7));