// create an array with numbers (only numbers)
// with map, return only numbers bigger than 100;
// after that, find the first number which is bigger than 100;
var arr1 = [10, 20, 16, 200, 9007, 5, 310];
var mappedArr = arr1.map(function (elm) {
    if (elm > 100)
        return elm;
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(mappedArr);
var found = arr1.find(function (elm) { return elm > 100; });
console.log(found);
