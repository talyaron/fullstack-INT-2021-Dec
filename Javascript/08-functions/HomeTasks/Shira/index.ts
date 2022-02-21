const myArr: Array<any> = [1, 2, 3, 'Shira', 'Hello', '12121212', 5, 6, 7];


const answer: any = prompt(`please enter numbers or string`)
const str: string = "string"
const num: string = "numbers"

const ans = newArray(answer)
console.log(ans)



//String Array:
// const stringsArr = myArr.map(elm => {
//     if (typeof elm === 'string')
//         return elm
// })

//     .filter(elm => typeof elm === 'string')
// console.log(stringsArr)


// //Numbers Array:
// const numbersArr = myArr.map(elm => {
//     if (typeof elm === 'number')
//         return elm
// })
//     .filter(elm => typeof elm === 'number')
// console.log(numbersArr)


function newArray(answer: string) {
    try {
        if (answer !== num && answer !== str)
            throw new SyntaxError('Not a correct command!!')
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
}





