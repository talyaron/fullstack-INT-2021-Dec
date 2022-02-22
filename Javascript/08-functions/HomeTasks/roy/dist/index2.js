var arr = ["a", "b", "c", "d", 1, 2, 3, 4];
var arrString = arr.map(function (elm) {
    if (typeof elm === "string")
        return elm;
}).filter(function (elm) { return typeof elm === 'string'; });
var arrNumber = arr.map(function (elm) {
    if (typeof elm === "number")
        return elm;
}).filter(function (elm) { return typeof elm === "number"; });
var enter1 = +prompt("enter number or a word");
function answer(enter1) {
    if (typeof enter1 == "string") {
        console.log(arrString);
    }
    else if (typeof enter1 == "number") {
        console.log(arrNumber);
    }
}
