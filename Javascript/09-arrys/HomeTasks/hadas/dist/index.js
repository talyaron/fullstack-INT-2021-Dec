//Array of numbers and strings
var arr = [10, "hadas", 32, "hello", 7, 54, "hi"];
console.log(arr);
var Answer = prompt('Please enter which array  you want: numbers or string?');
var string = "string";
var number = "numbers";
var useranswer = newarr(Answer);
console.log(useranswer);
function newarr(Answer) {
    if (Answer === number) {
        var arrnum = arr.map(function (elm) {
            if (typeof elm === 'number')
                return elm;
        }).filter(function (elm) { return typeof elm === 'number'; });
        console.log(arrnum);
    }
    if (Answer === string) {
        var arrstr = arr.map(function (elm) {
            if (typeof elm === 'string')
                return elm;
        }).filter(function (elm) { return typeof elm === 'string'; });
        console.log(arrstr);
    }
    try {
        if (Answer != number && Answer != string)
            throw 'I did not to accept suitable order';
    }
    catch (error) {
        console.log(error);
    }
}
