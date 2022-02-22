var arr = [5, 'Hello World', null, NaN, Math.pow, 18, "Hey"];
var define = function (list, value) {
    if (typeof value !== "string" || typeof value !== "number") {
        console.log("not a value");
    }
    for (var i = 0; i < list.length; i++) {
        if (typeof list[i] == "number" && value == "number") {
            console.log(list[i]);
        }
        if (typeof list[i] == "string" && value == "string") {
            console.log(list[i]);
        }
    }
};
console.log(define(arr, "string"));
//regular function
/*   function multi(a: number, b: number): number {
    return a * b;
  } */ //regular functions are unhosited
//in global scope we will prefer regular function
//anonymous function
/*   const multi2 = function (a: number, b: number): number {
    return a * b;
  }; */
/*   console.log(multi2(3, 6)); //varaibles are hoisted
 */
//es6+ (javascript 2016+) ECMAscript6
//arrow function
/*   const multi3 = (a: number, b: number): number => {
    return a * b;
  }; */
//arrow functions and anonymous functions are good for local usage
/* const arr: Array<any> = [10, 2, 34, 6, "b", "a", "B", "A"];
console.log(arr);
//methods are function of an object (in our case Array)

arr.forEach((elm) => {
  try {
    console.log(elm);
  } catch (error) {
    console.error(error);
  }
});

// const index = arr.findIndex(elm=>{return elm === 6});
const index = arr.findIndex((elm) => elm === 6);
console.log("index:", index);
console.log(arr);
const sortedArray = arr;

sortedArray.sort((a, b) =>{
    return a - b
});


console.log(sortedArray);

// if(2 === '2') console.log('2 == "2"')
// else console.log('2 != "2"')

//map build a new array from previous array
const newArr = arr.map(elm=>{
    if(typeof elm === 'number') return elm*100
    else return "This wasnt a number!";
}).filter(elm=>typeof elm === 'number');

console.log (newArr);
console.log(arr)
 */
/* const numbers:Array<number> = [-10, 1, -1, 2, 5];
const filtered = numbers.filter(n => n >=0);
console.log(filtered); */
