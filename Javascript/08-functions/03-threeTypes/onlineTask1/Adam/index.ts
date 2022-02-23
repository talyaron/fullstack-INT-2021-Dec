//regular
function Num(a:number, b:number): number{
return a*b;
};
console.log(Num(2,5));


//anonymous

const Num2 = function (a:number,b:number):number{
    return a*b
}
console.log(Num2(3,6));

//arrow


const Num3 = (a: number, b: number): number => {
    return a * b;
  };
  
  console.log(Num2(5,7));