const array: Array<any> = [1, `a`, 2, `b`, 3, `c`, 4, `d`]

// const ans1:any=prompt(`pls type number or something else`);
const answer:any = prompt (`pls type "number" or "string"`)
const number = array.filter(elm => typeof elm === `number`);
const string= array.filter(elm => typeof elm === `string`);

array.forEach(elm => {
    try {
        if (typeof elm === "number") {
            console.log(num1)
        }
        else if (typeof elm === "string") { 
            console.log(stri1) 
        }
    } 
    catch (error) {
        console.log(error)}
})