const array: Array<any> = [1, `a`, 2, `b`, 3, `c`, 4, `d`]


const answer:any = prompt (`pls type "number" or "string"`)
const number = array.filter(elm => typeof elm === `number`);
const string= array.filter(elm => typeof elm === `string`);

const newarray= homework (answer) //ליצור מערך חדשה
console.log (newarray) 

function homework (answer:any){
    try{
        if (answer !== number && answer !== string) { //מגדירים מה זו בעצם שגיאה
            throw new Error("Function not implemented")
        }
    }
    catch (erorr) {
        console.log(erorr)
    }
    if(answer===number){ //קופצים למים ומתחילים להגדיר לחלק את המערך הישן וליצור חדש
        console.log (`there are numbers`)
        const newNumbersArry = array.map(elm => { //  שולפים בעזרת (map) את המספרים ויוצרים מערך חדש שיוצג בקונסול שהמשתמש יקיש Number
            if (typeof elm === "number") return elm
        })
        .filter(elm => typeof elm === 'number'); //מפלטרים
        return newNumbersArry
    }
    else if (answer === string) {
        console.log(`These are strings:`)
        const newStringArry = array.map(elm => {// כנל לגביי הסטרינגים
            if (typeof elm === "string") return elm
        })
        .filter(elm => typeof elm === 'string');
        return newStringArry 
    }
}

// function err(err: any) {
//     throw new Error("Function not implemented.");
// }
