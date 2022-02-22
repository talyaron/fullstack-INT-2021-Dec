// pt 1: -------------------------------------------------------------------------------------------------------
var arr = [88, "Wacom Cintiq", 8, 120, 144, "Photoshop", null, true];
// back log ----------------------------------------------------------------------------------------------------
// const userInput:any = prompt("Enter string or number below")
// arr.push(`${userInput}`);
// pt 2: -------------------------------------------------------------------------------------------------------
//info: New "string" array out of arr
var arrStr = arr.map(function (elm) {
    if (typeof elm === "string")
        return elm;
}).filter(function (elm) { return typeof elm === "string"; });
console.log(arrStr);
// pt 3: -------------------------------------------------------------------------------------------------------
//info: New "numbers" array out of arr
var arrNum = arr.map(function (elm) {
    if (typeof elm === "number")
        return elm;
}).filter(function (elm) { return typeof elm === "number"; });
console.log(arrNum);
// pt 4: -------------------------------------------------------------------------------------------------------
//info: New "syntaxError" array out of arr
var arrError = arr.map(function (elm) {
    if (typeof elm !== "number" && elm !== "string")
        throw "syntaxError";
});
