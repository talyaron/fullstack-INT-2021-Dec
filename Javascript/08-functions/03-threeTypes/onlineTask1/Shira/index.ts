// create a function that add 2 arguments with three forms of the function (regular, anonymous, arrow)
// 2 try to use them before the defintion and after the defition

// 1: regular function

console.log(sumNumbers(5, 6));
function sumNumbers(a: number, b: number): number {
    return a + b;
}

// 2: anonymous function


// console.log(sumNumbers2(5,7));
const sumNumbers2 = function (a: number, b: number): number {
    return a + b;
}
console.log(sumNumbers2(5, 7));


// 3: arrow function

// console.log(sumNumbers3(5,8));
const sumNumbers3 = (a: number, b: number): number => {
    return a + b;
}
console.log(sumNumbers3(5, 8));
