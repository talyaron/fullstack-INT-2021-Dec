// create a function that add 2 arguments with three forms of the function (regular, anonymous, arrow)
// 2 try to use them before the defintion and after the defition
// ----regular func---
function multy(a, b) {
    return a + b;
}
console.log(multy(7, 8));
// -----anonymous----
var anon = function (a, b) {
    return a + b;
};
console.log(anon(7, 9));
// -----arrow----
var arrow = function (a, b) {
    return a + b;
};
console.log(arrow(6, 8));
