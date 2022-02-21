//regular
console.log(sum1(2,3));
function sum1(a: number, b: number): number {
    return a+b;
} 
//anonymous
console.log(sum1(5,3));
const sum2 = function (a: number, b: number): number {
    return a+b;
}
///aroow
console.log(sum2(7,3));
const sum3 = (a: number, b: number): number => {
    return a+b;
}
console.log(sum2(7,3));