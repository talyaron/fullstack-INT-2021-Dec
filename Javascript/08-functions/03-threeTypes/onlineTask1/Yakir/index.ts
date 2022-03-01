


console.log(sum1(1,2));



function sum1(a:number, b:number):number{
    return a+b;
}

var sum2 = function(a:number, b:number) :number {
    return a+b;
}

var sum3 = (a: number , b: number) :number => {
    return a+b;
};

console.log(sum1(1,2));
console.log(sum2(2,3));
console.log(sum3(3,4));

