// ex 1
// Define array
var arr = ['gili', 1, 'is', 2, 'awasome', 3, 'gils', 4, 'giltch'];
// Ask for strings or numbers
var answer = prompt('Please enter either strings or numbers, please remmber that the answer is case sensitive, so be precise.');
var num = "numbers";
var stri = "strings";
// Run and log function
var newarr = stringOrNumbers(answer);
console.log(newarr);
// Function
function stringOrNumbers(answer) {
    try {
        if (answer !== num && answer !== stri) {
            throw new SyntaxError("Not a Valid Answer");
        }
    }
    catch (e) {
        console.log(e);
    }
    if (answer === num) {
        console.log("These are numbers:");
        var newNumArry = arr.map(function (elm) {
            if (typeof elm === "number")
                return elm;
        }).filter(function (elm) { return typeof elm === 'number'; });
        return newNumArry;
    }
    else if (answer === stri) {
        console.log("These are strings:");
        var newStringArry = arr.map(function (elm) {
            if (typeof elm === "string")
                return elm;
        }).filter(function (elm) { return typeof elm === 'string'; });
        return newStringArry;
    }
}
