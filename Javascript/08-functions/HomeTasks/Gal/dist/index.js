var array = [1, "a", 2, "b", 3, "c", 4, "d"]; // create array
console.log(array);
var answer = prompt("pls type \"number\" or \"string\""); //print an order to the user for typing number or string 
// const number = array.filter(elm => typeof elm === `number`); // i will do the filter in the function so this sentence is wrong
// const string= array.filter(elm => typeof elm === `string`); //  i will do the filter in the function so this sentence is wrong
// const number:number= `numbers` //cannot do number because in the function its string
var number = "number";
var string = "string";
// ---first way to do that (function 1)---
var newarray = homework(answer); //ניצור מערך חדשה
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
    if (answer === number) { // קופצים למים ומתחילים להגדיר (לחלק) את המערך הישן וליצור חדש-נתחיל במערך המספרים
        console.log("there are numbers");
        var NumbersArray = array.map(function (elm) {
            if (typeof elm === "number")
                return elm;
        })
            .filter(function (elm) { return typeof elm === 'number'; }); //מפלטרים
        return NumbersArray;
    }
    else if (answer === string) { //מערך הסטרינגים
        console.log("there are strings");
        var StringArray = array.map(function (elm) {
            if (typeof elm === "string")
                return elm;
        })
            .filter(function (elm) { return typeof elm === 'string'; }); //מפלטרים
        return StringArray;
    }
}
// ---error function---
// function err(err: any) {
//     throw new Error("Function not implemented.");
// }
// // ---second way to do that (function 2)---
// array.forEach((elm) => {
//     try{
//         if (answer !== number && answer !== string) { 
//             throw new Error("Function not implemented")
//         }
//     }
//     catch (erorr) {
//         console.log(erorr)
//     }
//     if(answer===number){ 
//         console.log (`there are numbers`)
//         const NumbersArray = array.map(elm => {  
//             if (typeof elm === "number") return elm
//         })
//         .filter(elm => typeof elm === 'number'); //מפלטרים
//         return NumbersArray
//     }
//     else if (answer === string) { //מערך הסטרינגים
//         console.log(`there are strings`)
//         const StringArray = array.map(elm => { 
//             if (typeof elm === "string") return elm 
//         })
//         .filter(elm => typeof elm === 'string');//מפלטרים
//         return StringArray 
//     }
//   });
