// משימות בית:
// צרו מערך עם מספרים ומחרוזות (string).

// בנו פונקציה שמקבלת את המערך. אם נותנים לה משתנה ״
// strings״ היא מחזירה מערך רק עם המחרוזות. אם נותנים לה משתנה ״numbers״ היא מחזירה רק את ה-numbers.
// אם לא נותנים לה numbers  או strings, היא מחזירה מערך ריק ומשאירה הודעת שגיאה ״לא קיבלתי פקודה מתאימה״.

// Opening Array
const values: Array<any> = ['Apple', 2, 'Orange', 3, 4, 'Banana',7,5]; 

// String or Number Prompt 
const inPut: any = prompt('Enter valString or valNumber Here')
const valNumber: string = "Number"
const valString: string = "String"

// Log function
const arrAns = stringOrNumber(inPut)
console.log(arrAns)

// Function

function stringOrNumber(answer: string): void | number[] | string[] {

  try{

    if(answer !== valNumber && answer !== valString) 
      throw SyntaxError('Thought you could fool me? Error!');

  } catch (e){
    return console.log("Try again");
  }

  if(answer === valNumber) {
    console.log('You Chose Numbers')
  
  const newValNumber = values.map(elm => {
    if(typeof elm === 'number') return elm
  }).filter(elm => typeof elm === 'number');
  return newValNumber
  }

  else if(answer === valString) {
    console.log('You Chose String')

    const newValString = values.map(elm => {
      if(typeof elm === 'string') return elm
    }).filter(elm => typeof elm === 'string')
    return newValString
  }
};