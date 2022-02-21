var myArr = [1, 2, 3, 'Shira', 'Hello', '12121212', 5, 6, 7];
var answer = prompt("please enter numbers or string");
var str = "string";
var num = "numbers";
var ans = newArray(answer);
console.log(ans);
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
function newArray(answer) {
    try {
        if (answer !== num && answer !== str)
            throw new SyntaxError('Not a correct command!!');
    }
    catch (err) {
        console.log(err);
    }
    if (answer === num) {
        var numbersArr = myArr.map(function (elm) {
            if (typeof elm === "number")
                return elm;
        }).filter(function (elm) { return typeof elm === 'number'; });
        return numbersArr;
    }
    else if (answer === str) {
        var stringsArr = myArr.map(function (elm) {
            if (typeof elm === "string")
                return elm;
        }).filter(function (elm) { return typeof elm === 'string'; });
        return stringsArr;
    }
}
