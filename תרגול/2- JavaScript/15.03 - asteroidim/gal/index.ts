/*
// Read 3 variables from the user: a, b, c. These will be the a, b & c coefficients of a quadratic equation.
// (prompt)
// Print the values of the following calculations to the console:
//  1. -b
//  2. 2*a
//  3. b*b -4*a*c

//  console.log()
// */

// const a= +prompt(`enter num1`)
// const b= +prompt(`enter num2`)
// const c= +prompt(`enter num3`)

// function fun1(a,b,c){
//     console.log (-b)
//     console.log (2*a)
//     console.log (b*b-4*a*c)
// }

// fun1(a,b,c)



let root1, root2;

let a = +prompt("Enter the first number: ");
let b = +prompt("Enter the second number: ");
let c = +prompt("Enter the third number: ");

function QuadraticFun(a,b,c){
    
let Quadratic = b * b - 4 * a * c;
if (Quadratic > 0) {
    root1 = (-b + Math.sqrt(Quadratic)) / (2 * a);
    root2 = (-b - Math.sqrt(Quadratic)) / (2 * a);
    console.log(`The roots of Quadratic equation are ${root1} and ${root2}`);
}

else if (Quadratic == 0) {
    root1 = root2 = -b / (2 * a);

    console.log(`The roots of Quadratic equation are ${root1} and ${root2}`);
}

else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-Quadratic) / (2 * a)).toFixed(2);

    console.log(
    `The roots of Quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
}

QuadraticFun(a,b,c)