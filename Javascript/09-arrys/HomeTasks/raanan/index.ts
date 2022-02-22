// משימות בית:
// צרו מערך עם מספרים ומחרוזות (string).

// בנו פונקציה שמקבלת את המערך. אם נותנים לה משתנה ״
// strings״ היא מחזירה מערך רק עם המחרוזות. אם נותנים לה משתנה ״numbers״ היא מחזירה רק את ה-numbers.
// אם לא נותנים לה numbers  או strings, היא מחזירה מערך ריק ומשאירה הודעת שגיאה ״לא קיבלתי פקודה מתאימה״.

const values: Array<any> = ['Apple', 2, 'Orange', 3, 4, 'Banana',7,5]; 
console.log(values);

values.forEach((elm) =>{
  try{

    if(typeof elm === "function") throw "Thought you could fool me? Error!";

  } catch (error){
    console.error(error)
    return "Try again";
  }
});

const valString = values.map(elm => {

  if (typeof elm === 'string') return elm

}).filter(elm => typeof elm === 'string');
console.log(valString)

const valNumber = values.map(elm => {

  if(typeof elm === 'number') return elm

}).filter(elm => typeof elm === 'number');
console.log(valNumber)

const unKnown = values.map(elm => {

  if(typeof elm === 'function') return console.log('Nope!')

}).filter(elm => typeof elm === 'function');
console.log(unKnown)

