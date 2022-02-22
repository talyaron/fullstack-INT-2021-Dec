var arrAlltyps = ["dog", "mom", "card", 35, "n", 70, 19, 80, "am", 6, "hello"];
console.log(arrAlltyps);
arrAlltyps.forEach(function (elm) {
    try {
        // if (typeof arrAlltyps!== "string") throw "number is not of type number";
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
