var last = function (a, b) {
    return a * b;
};
var arrAllTypes = [last, 10, 40, 'this', 'is', 'a', 70, 30, 60, 15, 25, 'string'];
console.log(arrAllTypes);
arrAllTypes.forEach(function (elm) {
    try {
        if (typeof elm === "function")
            throw "Error! function is not of type number or string";
    }
    catch (error) {
        console.error(error);
        return 'sorry couldnt get that';
    }
});
var arrString = arrAllTypes.map(function (elm) {
    if (typeof elm === 'string')
        return elm;
}).filter(function (elm) { return typeof elm === 'string'; });
console.log(arrString);
var arrNumber = arrAllTypes.map(function (elm) {
    if (typeof elm === 'number')
        return elm;
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(arrNumber);
var unKnown = arrAllTypes.map(function (elm) {
    if (typeof elm === 'function')
        return console.log('I do not have any command for that statement');
}).filter(function (elm) { return typeof elm === 'function'; });
console.log(unKnown);
