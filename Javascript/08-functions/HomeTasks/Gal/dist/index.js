var array = [1, "a", 2, "b", 3, "c", 4, "d"];
var answer = prompt("pls type \"number\" or \"string\"");
// const number = array.filter(elm => typeof elm === `number`);
// const string= array.filter(elm => typeof elm === `string`);
// const number:number= `numbers` //cannot do number because in the function its string
var number = "number";
var string = "string";
var newarray = homework(answer); //ליצור מערך חדשה
console.log(newarray);
function homework(answer) {
    try {
        if (answer !== number && answer !== string) { //מגדירים מה זו בעצם שגיאה
            throw new Error("Function not implemented"); // שווה ערך לפונקציה שרשומה בקומנטים למטה (קונסול לוג לא עובד)
        }
    }
    catch (erorr) {
        console.log(erorr);
    }
    if (answer === number) { //קופצים למים ומתחילים להגדיר לחלק את המערך הישן וליצור חדש
        console.log("there are numbers");
        var newNumbersArray = array.map(function (elm) {
            if (typeof elm === "number")
                return elm;
        })
            .filter(function (elm) { return typeof elm === 'number'; }); //מפלטרים
        return newNumbersArray;
    }
    else if (answer === string) {
        console.log("These are strings:");
        var newStringArray = array.map(function (elm) {
            if (typeof elm === "string")
                return elm;
        })
            .filter(function (elm) { return typeof elm === 'string'; });
        return newStringArray;
    }
}
// function err(err: any) {
//     throw new Error("Function not implemented.");
// }
