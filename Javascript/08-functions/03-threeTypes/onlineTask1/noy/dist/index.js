function sum(a, b) {
    return a + b;
}
var sum2 = function (a, b) {
    return a + b;
};
var sum3 = function (a, b) {
    return a + b;
};
var num1 = +prompt('please enter a number');
var num2 = +prompt('please enter a number');
console.log(sum(num1, num2));
console.log(sum2(num1, num2));
console.log(sum3(num1, num2));
