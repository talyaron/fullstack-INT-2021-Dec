console.log(multi(3, 6));
//regular function
function multi(a, b) {
    return a * b;
} //regular functions are unhosited
//in global scope we will prefer regular function
//anonymous function
var multi2 = function (a, b) {
    return a * b;
};
console.log(multi2(3, 6)); //varaibles are hoisted
//es6+ (javascript 2016+) ECMAscript6
//arrow function
var multi3 = function (a, b) {
    return a * b;
};
//arrow functions and anonymous functions are good for local usage
console.log(multi3(6, 7));
var y = 99;
for (var i = 0; i < 10; i++) {
    var x = 2;
}
var arr = [1, 5, 7, 8];
// arr.forEach((elm) => {
//   console.log(elm);
// });
