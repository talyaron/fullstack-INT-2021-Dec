// משימות בית:
// צרו מערך עם מספרים ומחרוזות (string).
// בנו פונקציה שמקבלת את המערך. אם נותנים לה משתנה ״
// strings״ היא מחזירה מערך רק עם המחרוזות. אם נותנים לה משתנה ״numbers״ היא מחזירה רק את ה-numbers.
// אם לא נותנים לה numbers  או strings, היא מחזירה מערך ריק ומשאירה הודעת שגיאה ״לא קיבלתי פקודה מתאימה״.
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana', 7, 5];
console.log(values);
values.forEach(function (elm) {
    try {
        if (typeof elm === "function")
            throw "Thought you could fool me? Error!";
    }
    catch (error) {
        console.error(error);
        return "Try again";
    }
});
var valString = values.map(function (elm) {
    if (typeof elm === 'string')
        return elm;
}).filter(function (elm) { return typeof elm === 'string'; });
console.log(valString);
var valNumber = values.map(function (elm) {
    if (typeof elm === 'number')
        return elm;
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(valNumber);
var unKnown = values.map(function (elm) {
    if (typeof elm === 'function')
        return console.log('Nope!');
}).filter(function (elm) { return typeof elm === 'function'; });
console.log(unKnown);
