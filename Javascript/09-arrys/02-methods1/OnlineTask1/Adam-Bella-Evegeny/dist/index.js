var arr = [10, 2, 34, 6, 120, 130, 99, 10000000, 200];
var newArr = arr.map(function (elm) {
    if (elm >= 100)
        return elm;
    else
        return "This number smaller than 100!";
}).filter(function (elm) { return elm >= 100; });
console.log(newArr);
console.log(arr.indexOf[1]);
