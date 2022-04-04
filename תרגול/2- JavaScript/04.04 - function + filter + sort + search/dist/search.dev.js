"use strict";

//--------------------first option----------------//
var search = /a/; //יחפש ה"איי" היחידי בתוך הטקסט

var searchTerm = /a/g; // יכנס גלובל את כל האותיות "איי" בתוך הטקסט, לא ניתן לשינוי ע"י המשתמש
//-------------------second option-----------------//

var searchTerm2 = new RegExp('a', 'g'); //ניתן לשינוי, בישביל משתמש נשתמש בפונקציה זו
//-------------------test search - true or false--------------//

console.log('TEXT SEARCH');
var text = "saadfsfe fgaerf";
console.log(searchTerm.test(text)); //-----------------search from input----------//

console.log('SEARCH FROM INPUT');

function handleSearch(e) {
  var searchTerm3 = e.target.value;
  var regSearchTerm = new RegExp(searchTerm3, 'g'); //מייצר אובקייט חדש 

  if (regSearchTerm.test(text)) {
    console.log('term exist');
  } else {
    console.log('term not exist ');
  }
}