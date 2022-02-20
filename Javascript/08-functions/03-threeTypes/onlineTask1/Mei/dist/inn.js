//regular
console.log(sum1(2, 3));
function sum1(a, b) {
    return a + b;
}
//anonymous
console.log(sum1(5, 3));
var sum2 = function (a, b) {
    return a + b;
};
///aroow
console.log(sum2(7, 3));
var sum3 = function (a, b) {
    return a + b;
};
console.log(sum2(7, 3));
