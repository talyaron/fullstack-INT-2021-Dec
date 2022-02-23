var arrayNumbers = [10, 15, 60, 80, 90, 100, 101, 110, 200, 300];
console.log(arrayNumbers);
var newArr = arrayNumbers.map(function (elm) {
    if (typeof elm === 'number') {
        if (elm > 100) {
            return elm;
        }
    }
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(newArr);
