var array100 = [0, 5, 900, 800, 551, 52, 36, 100, 254, 93];
console.log(array100);
array100.forEach(function (elm) {
    try {
        console.log(elm);
    }
    catch (error) {
        console.error(error);
    }
});
var newarray100 = array100.map(function (elm) {
    if (elm > 100)
        return elm;
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(newarray100);
