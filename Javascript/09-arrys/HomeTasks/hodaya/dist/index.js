var last = function (a, b) {
    return a * b;
};
var arrAlltyps = ["dog", "mom", "card", 35, "n", 70, 19, 80, "am", 6, "hello"];
console.log(arrAlltyps);
arrAlltyps.forEach(function (elm) {
    try {
        if (typeof arrAlltyps !== "function")
            throw "function is not of type number";
    }
    catch (error) {
        console.error(error);
        return "sorry couldnt get that";
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
var unKnown = arrAllTypes.map(function (elm) {
    if (typeof elm === 'function')
        return console.log('I do not have any command for that statement');
}).filter(function (elm) { return typeof elm === 'function'; });
console.log(unKnown);
