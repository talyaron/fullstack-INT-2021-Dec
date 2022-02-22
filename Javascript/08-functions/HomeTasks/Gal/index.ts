// // ---first way to do that (function 1)---

const array: Array<any> = [1, `a`, 2, `b`, 3, `c`, 4, `d`] // create an array
console.log(array)

const answer:any = prompt (`pls type "number" or "string"`) //נגדיר הודעה למשתמש שבא פקודה שיכניס לנו מספר או סטרינג
const number = array.filter(elm => typeof elm === `number`); // נגדיר משתנה קבוע מספר (ניצור מערך חדש של מספרים בלבד) ובעזרת פילטר נמיין מהמערך רק את המסםרים
const string= array.filter(elm => typeof elm === `string`); // נגדיר משתנה קבוע סטרינג (ניצור מערך חדש של סטרינגים בלבד) ובעזרת פילטר נמיין מהמערך רק את הסטרינגים
array.forEach((elm) => {// להלן מתודה שהיא בעצם פונקציה של אובייקט במקרה שלנו מערך
    try{ if ( answer === 'number'){ // תנאי מספרים
        console.log(number)
    }
    else if( answer === 'string'){// תנאי סטרינגים
        console.log(string)
    }
    else{
        console.log(`error`)// תנאי לשגיאה
    }
    }catch(error){
        console.error(error);   
    }
})



// // ---second way to do that (function 2)---

// const array: Array<any> = [1, `a`, 2, `b`, 3, `c`, 4, `d`] // create array
// console.log(array)

// const answer:any = prompt (`pls type "number" or "string"`) //print an order to the user for typing number or string 

// // const number = array.filter(elm => typeof elm === `number`); // i will do the filter in the function so this sentence is wrong
// // const string= array.filter(elm => typeof elm === `string`); //  i will do the filter in the function so this sentence is wrong
// // const number:number= `numbers` //cannot do number because in the function its string

// const number:string=`number`
// const string:string=`string`

// const newarray= homework (answer) //ניצור מערך חדשה
// console.log (newarray) 

// function homework (answer:any){ //  (array)בפונקציה נערבל את כל המשתנים ובעזרת התנאיות נגרום לפונקציה ליצור 2 מערכים חדשים אחד למספרים והשני לסטרינגים על בסיס המערך המקורי 
//     try{
//         if (answer !== number && answer !== string) { //מגדירים מה זו בעצם שגיאה
//             throw new Error("Function not implemented")// שווה ערך לפונקציה שרשומה בקומנטים למטה (קונסול לוג לא עובד)
//         }
//     }
//     catch (erorr) {
//         console.log(erorr)
//     }
//     if(answer===number){ // קופצים למים ומתחילים להגדיר (לחלק) את המערך הישן וליצור חדש-נתחיל במערך המספרים
//         console.log (`there are numbers`)
//         const NumbersArray = array.map(elm => { //האלמנט יצטרף למערך המספרים בלבד  number כאשר האלמנט אותו יגדיר היוזר יהיה  array map בעזרת 
//             if (typeof elm === "number") return elm
//         })
//         .filter(elm => typeof elm === 'number'); //מפלטרים
//         return NumbersArray
//     }
//     else if (answer === string) { //מערך הסטרינגים
//         console.log(`there are strings`)
//         const StringArray = array.map(elm => { //האלמנט יצטרף למערך הסטרינגים בלבד  string כאשר האלמנט אותו יגדיר היוזר יהיה  array map בעזרת
//             if (typeof elm === "string") return elm
//         })
//         .filter(elm => typeof elm === 'string');//מפלטרים
//         return StringArray 
//     }
// }

// // ---error function---
// // function err(err: any) {
// //     throw new Error("Function not implemented.");
// // }



