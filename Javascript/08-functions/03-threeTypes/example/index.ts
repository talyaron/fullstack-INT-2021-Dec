console.log(multi(3, 6));

//regular function
function multi(a: number, b: number): number {
  return a * b;
} //regular functions are unhosited
//in global scope we will prefer regular function

//anonymous function
const multi2 = function (a: number, b: number): number {
  return a * b;
};

console.log(multi2(3, 6)); //varaibles are hoisted

//es6+ (javascript 2016+) ECMAscript6
//arrow function

const multi3 = (a: number, b: number): number => {
  return a * b;
};
//arrow functions and anonymous functions are good for local usage

console.log(multi3(6, 7));
let y = 99;
for (let i = 0; i < 10; i++) {
  let x = 2;
}

let arr: Array<number> = [1, 5, 7, 8];
// arr.forEach((elm) => {
//   console.log(elm);
// });

