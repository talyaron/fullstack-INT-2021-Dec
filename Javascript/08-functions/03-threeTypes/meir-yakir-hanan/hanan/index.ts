
/////regular
console.log(sum(2, 4));
function sum(a:number, b:number ):number{
    return a*b;
}
console.log(sum(2, 4));

////anonymus
//not working console.sum2(sum2(2, 4));
const sum2 = function (a: number, b: number) : number {return a * b;
};
console.log(sum2(2, 4));

////arrow
console.log(sum2(2, 4));
const sum3 = (a: number, b: number): number => {
    return a * b;
  };
   console.log(sum2(2, 4));

