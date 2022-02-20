console.log(regularFunction(4, 9));

function regularFunction(a: number, b: number): number {
  return a + b;
} 

const anonimusFunction = function (a: number, b: number): number {
  return a + b;
};
console.log(anonimusFunction(4, 8)); 


const arrowFunction = (a: number, b: number): number => {
  return a + b;
};

console.log(arrowFunction(4, 6));
let i = 45;
for (let i = 0; i < 10; i++) {
  let x = 8;
}

let arr: Array<number> = [1, 4, 7, 9];


// create a function that add 2 arguments with three forms of the function (regular, anonymous, arrow)
// 2 try to use them before the defintion and after the defition


