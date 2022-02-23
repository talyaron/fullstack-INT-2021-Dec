var Shira = [90, 105, 200, 20, 30];
console.log(Shira);
var newShira = Shira.map(function (elm) {
    if (elm > 100)
        return elm;
});
console.log(newShira);
var newhanoch = newShira.sort(function (elm) {
    if (elm > 100)
        return elm;
});
console.log(newhanoch);
