// reg
function one(a: number, b: number): Number {
    return a + b;
}

// random
const two = function(a: number, b: number): Number {
    return a + b;
}
console.log(two(3, 2));

// arrow
const three = (a: number, b: number): Number => {
    return a + b;

}
console.log(three(3, 4));