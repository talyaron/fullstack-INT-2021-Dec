var RandomArray = [6, 11, 13, 10, "Me", "You", "Us", "True"];
console.log(RandomArray);
var newnumber = RandomArray.map(function (elm) {
    if (typeof elm === 'number') {
        return elm;
    }
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(newnumber);
var newstring = RandomArray.map(function (elm) {
    if (typeof elm === 'string') {
        return elm;
    }
}).filter(function (elm) { return typeof elm === 'string'; });
console.log(newstring);
var unacceptable = RandomArray.map(function (elm) {
    if (typeof elm !== 'number' && typeof elm !== 'string') {
        return;
    }
}).filter(function (elm) { return typeof elm === 'string' && elm === 'number'; });
console.log(unacceptable, "Unacceptable Output");
