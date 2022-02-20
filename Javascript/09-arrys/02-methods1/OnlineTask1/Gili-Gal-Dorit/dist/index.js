console.log("hi");
var numArry = [4, 17, 50, 52, 106, 108, 127, 132, 135, 146, 149, 162, 163, 166, 191, 215, 216, 254, 255, 271];
console.log(numArry);
var newArry = numArry.map(function (elm) {
    if (elm > 100)
        return elm;
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(newArry);
var index = numArry.findIndex(function (elm) { return elm > 100; });
console.log("index:", index);
console.log(numArry[index]);
