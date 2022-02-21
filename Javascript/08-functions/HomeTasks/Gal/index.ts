const array: Array<any> = [1, `a`, 2, `b`, 3, `c`, 4, `d`]


const answer:any = prompt (`pls type "number" or "string"`)
// const number = array.filter(elm => typeof elm === `number`);
// const string= array.filter(elm => typeof elm === `string`);

// const number:number= `numbers` //cannot do number because in the function its string
const number:string=`number`
const string:string=`string`

const newarray= homework (answer) //ליצור מערך חדשה
console.log (newarray) 

function homework (answer:any){
    try{
        if (answer !== number && answer !== string) { //מגדירים מה זו בעצם שגיאה
            throw new Error("Function not implemented")// שווה ערך לפונקציה שרשומה בקומנטים למטה (קונסול לוג לא עובד)
        }
    }
    catch (erorr) {
        console.log(erorr)
    }
    if(answer===number){ //קופצים למים ומתחילים להגדיר לחלק את המערך הישן וליצור חדש
        console.log (`there are numbers`)
        const newNumbersArray = array.map(elm => { //  שולפים בעזרת (map) את המספרים ויוצרים מערך חדש שיוצג בקונסול שהמשתמש יקיש Number
            if (typeof elm === "number") return elm
        })
        .filter(elm => typeof elm === 'number'); //מפלטרים
        return newNumbersArray
    }
    else if (answer === string) {
        console.log(`These are strings:`)
        const newStringArray = array.map(elm => {// כנל לגביי הסטרינגים
            if (typeof elm === "string") return elm
        })
        .filter(elm => typeof elm === 'string');
        return newStringArray 
    }
}

// function err(err: any) {
//     throw new Error("Function not implemented.");
// }
