/////regular
console.log(sum(2, 4));
function sum(a, b) {
    return a * b;
}
console.log(sum(2, 4));
////anonymus
//not working console.sum2(sum2(2, 4));
var sum2 = function (a, b) {
    return a * b;
};
console.log(sum2(2, 4));
////arrow
console.log(sum2(2, 4));
var sum3 = function (a, b) {
    return a * b;
};
console.log(sum2(2, 4));
