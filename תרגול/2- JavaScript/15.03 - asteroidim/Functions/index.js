// /*
// Read 3 variables from the user: a, b, c. These will be the a, b & c coefficients of a quadratic equation.
// (prompt)
// Print the values of the following calculations to the console:
//  1. -b
//  2. 2*a
//  3. b*b -4*a*c

//  console.log()
// */

const a = +prompt('enter num1')
const b = +prompt('enter num2')
const c = +prompt('enter num3')

function fun1(a, b, c) {
    console.log(-b)
    console.log(2 * a)
    console.log(b * b - 4 * a * c)
}

fun1(a, b, c)

// BONUS
// a=2, b=-5, c=2
// ---------------------------------
// const arr = ["a","b","c","a","c"]