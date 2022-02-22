// משימות בית:
// צרו מערך עם מספרים ומחרוזות (string).
// בנו פונקציה שמקבלת את המערך. אם נותנים לה משתנה ״
// strings״ היא מחזירה מערך רק עם המחרוזות. אם נותנים לה משתנה ״numbers״ היא מחזירה רק את ה-numbers.
// אם לא נותנים לה numbers  או strings, היא מחזירה מערך ריק ומשאירה הודעת שגיאה ״לא קיבלתי פקודה מתאימה״.
// Opening Array
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana', 7, 5];
// String or Number Prompt 
var inPut = prompt('Enter String or Number Here');
var valNumber = "Number";
var valString = "String";
// Log function
var arrAns = stringOrNumber(inPut);
console.log(arrAns);
// Function
function stringOrNumber(answer) {
    try {
        if (answer !== valNumber && answer !== valString)
            throw SyntaxError('Thought you could fool me? Error!');
    }
    catch (e) {
        return console.log("Try again");
    }
    if (answer === valNumber) {
        console.log('You Chose Numbers');
        var newValNumber = values.map(function (elm) {
            if (typeof elm === 'number')
                return elm;
        }).filter(function (elm) { return typeof elm === 'number'; });
        return newValNumber;
    }
    else if (answer === valString) {
        console.log('You Chose String');
        var newValString = values.map(function (elm) {
            if (typeof elm === 'string')
                return elm;
        }).filter(function (elm) { return typeof elm === 'string'; });
        return newValString;
    }
}
;
