var Quest = +prompt("is it a number or string?");
console.log(Quest);
var ArrAny = [10, 30, 40, 50, "Adam", "Hapoel"];
console.log(ArrAny);
var NumOrStr;
(function (elm) {
    try {
        // if (typeof arrAlltyps!== "number") throw "number is not of type number";
        console.log(elm);
    }
    catch (error) {
        console.error(error);
    }
});
var arrString = arrAlltyps.map(function (elm) {
    if (typeof elm === "string")
        return elm;
}).filter(function (elm) { return typeof elm === "string"; });
console.log(arrString);
var arrNumber = arrAlltyps.map(function (elm) {
    if (typeof elm === "number")
        return elm;
}).filter(function (elm) { return typeof elm === "number"; });
console.log(arrNumber);
