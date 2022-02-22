
// pt 1: -------------------------------------------------------------------------------------------------------
//info: Define array with different types of variables.
const arr: Array<any> = [88, "Wacom Cintiq", 8, 120, 144, "Photoshop", null, true];
// back log ----------------------------------------------------------------------------------------------------
// const userInput:any = prompt("Enter string or number below")
// arr.push(`${userInput}`);


// pt 2: -------------------------------------------------------------------------------------------------------
//info: New "string" array out of arr
const arrStr = arr.map(elm => {
    if (typeof elm === "string") return elm

}).filter(elm => typeof elm === "string");
console.log(arrStr)

// pt 3: -------------------------------------------------------------------------------------------------------
//info: New "numbers" array out of arr
const arrNum = arr.map(elm => {
    if (typeof elm === "number") return elm
  
}).filter(elm => typeof elm === "number");
console.log(arrNum)

// pt 4: -------------------------------------------------------------------------------------------------------
//info: New "syntaxError" array out of arr
const arrError = arr.map(elm => {
    if (typeof elm !== "number" && elm !== "string") 
    throw "syntaxError";
})

