var array = [1, "a", 2, "b", 3, "c", 4, "d"];
var answer = prompt("pls type \"number\" or \"string\"");
var number = array.filter(function (elm) { return typeof elm === "number"; });
var string = array.filter(function (elm) { return typeof elm === "string"; });
var newarray = homework(answer); //ליצור מערך חדשה
console.log(newarray);
function homework(answer) {
    try {
        if (answer !== number && answer !== string) { //מגדירים מה זו בעצם שגיאה
            throw new Error("Function not implemented");
        }
    }
    catch (erorr) {
        console.log(erorr);
    }
    if (answer === number) { //קופצים למים ומתחילים להגדיר לחלק את המערך הישן וליצור חדש
        console.log("there are numbers");
        var newNumbersArry = array.map(function (elm) {
            if (typeof elm === "number")
                return elm;
        })
            .filter(function (elm) { return typeof elm === 'number'; }); //מפלטרים
        return newNumbersArry;
    }
    else if (answer === string) {
        console.log("These are strings:");
        var newStringArry = array.map(function (elm) {
            if (typeof elm === "string")
                return elm;
        })
            .filter(function (elm) { return typeof elm === 'string'; });
        return newStringArry;
    }
}
// function err(err: any) {
//     throw new Error("Function not implemented.");
// }
