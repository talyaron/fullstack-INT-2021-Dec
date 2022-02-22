// ex 1

// Define array
const arr: Array<any> = ['gili', 1, 'is', 2, 'awasome', 3, 'gils', 4, 'giltch'];

// Ask for strings or numbers
const answer: any = prompt('Please enter strings or numbers')
const num: string = "numbers"
const stri: string = "strings"

// Run and log function
const newarr = stringOrNumbers(answer)
console.log(newarr)

// Function
function stringOrNumbers(answer: string) {

    try {
        if (answer !== num && answer !== stri) {
            throw new SyntaxError("Not a Valid Answer")
        }
    }
    catch (e) {
        console.log(e)
    }

    if (answer === num) {
        console.log(`These are numbers:`)
        const newNumArry = arr.map(elm => {
            if (typeof elm === "number") return elm
        }).filter(elm => typeof elm === 'number');
        return newNumArry
    }
    else if (answer === stri) {
        console.log(`These are strings:`)
        const newStringArry = arr.map(elm => {
            if (typeof elm === "string") return elm
        }).filter(elm => typeof elm === 'string');
        return newStringArry
    }
}
