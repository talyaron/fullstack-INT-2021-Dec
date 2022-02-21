const myArr: Array<any> = [1, 2, 3, 'Shira', 'Hello', '12121212', 5, 6, 7];
const emptyArr:Array<any> = [];


const answer: any = prompt(`Please enter which kind of array you want: numbers or string.`)
const str: string = "string"
const num: string = "numbers"

const userAnswer = newArray(answer)
console.log(userAnswer)


function newArray(answer: string) {
    try {
        if (answer !== num && answer !== str)
            throw new Error ('Not a correct command!! you need ask number or string ')
    }
    catch (err) {
        console.log(err)
    }


     if (answer === num) {
    const numbersArr = myArr.map(elm => {
        if (typeof elm === "number") return elm
    }).filter(elm => typeof elm === 'number');
    return numbersArr
}
else if (answer === str) {
    const stringsArr = myArr.map(elm => {
        if (typeof elm === "string") return elm
    }).filter(elm => typeof elm === 'string');
    return stringsArr
}
else 
return emptyArr
}