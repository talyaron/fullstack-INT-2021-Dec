var arr = [4, 14, 18, 41, 45, "Cacho", "time", "majashaba", "true"];
var newArr = arr.map(function (elm) {
    if (typeof elm === 'number')
        return elm;
}).filter(function (elm) { return elm !== undefined; });
console.log(newArr);
var newArr = arr.map(function (elm) {
    if (typeof elm === 'string')
        return elm;
}).filter(function (elm) { return elm !== undefined; });
console.log(newArr);
try {
    var newArr_1 = arr.map(function (elm) {
        if (typeof elm !== 'number' && elm !== 'string')
            ;
    }).filter(function (elm) { return elm !== undefined; });
    console.log(newArr_1);
    throw "לא קיבלתי פקודה מתאימה";
}
catch (err) {
    console.error(err);
}
