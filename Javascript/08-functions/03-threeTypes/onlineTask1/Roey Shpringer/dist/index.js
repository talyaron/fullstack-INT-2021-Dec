//regular function
console.log(regularFun(1, 2));
function regularFun(a, b) {
    return a + b;
}
//anonymous function
var anonymousFun = function (a, b) {
    return a + b;
};
//arrow function
var arrowFun = function (a, b) {
    return a + b;
};
console.log(arrowFun(1, 2));
console.log(anonymousFun(1, 2));
