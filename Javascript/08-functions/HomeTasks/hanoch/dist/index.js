var chois = prompt("give me number or string");
console.log(chois);
var babi = [5, 10, 'baba', 'hanoch'];
var number = babi.map(function (elm) {
    if (typeof chois === 'number') {
        return (elm);
    }
});
console.log(babi);
