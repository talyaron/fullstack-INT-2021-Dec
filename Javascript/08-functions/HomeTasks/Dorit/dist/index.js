var babi = [5, 10, 'baba', 'hanoch'];
console.log(babi);
var babu = [];
function strOrNumber(action) {
    try {
        if (action = "strings") {
            babu = babi.map(function (e) { if (typeof e === "string")
                return e; }).filter(function (e) { typeof e === "string"; });
            console.log('in case of string', babu);
        }
        else if (action === "number") {
            babu = babi.map(function (e) { if (typeof e === "number")
                return e; }).filter(function (e) { typeof e === "number"; });
            console.log('in case of number', babu);
        }
        else {
            console.error("you gave a wrong action");
        }
        return babu;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(strOrNumber("string"));
