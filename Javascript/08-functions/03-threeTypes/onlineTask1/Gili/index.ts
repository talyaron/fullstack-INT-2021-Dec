console.log(sum(3, 6));
console.log(sum2(5, 5));
console.log(sum3(3, 3));

function sum(a: number, b: number): number {
  return a + b;
} 
const sum2 = function (a: number, b: number): number {
  return a + b;
};

const sum3 = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(3, 7));
console.log(sum2(3, 7));
console.log(sum3(3, 7));



