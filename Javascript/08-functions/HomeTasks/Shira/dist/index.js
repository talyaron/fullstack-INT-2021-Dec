var myArr = [1, 2, 3, 'Shira', 'Hello', '12121212', 5, 6, 7];
var emptyArr = [];
var answer = prompt("Please enter which kind of array you want: numbers or string.");
var str = "string";
var num = "numbers";
var userAnswer = newArray(answer);
console.log(userAnswer);
function newArray(answer) {
    try {
        if (answer !== num && answer !== str)
            throw new Error('Not a correct command!! you need ask number or string ');
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
    else
        return emptyArr;
}
