"use strict";

//-----------------from small to big---------------//
console.log('SMALL TO BIG');
var books = [{
  title: 'book2',
  year: 1980
}, {
  title: 'book3',
  year: 1990
}, {
  title: 'book1',
  year: 1970
}, {
  title: 'book4',
  year: 2000
}];
books = books.sort(function (a, b) {
  return a.year - b.year;
}); //מסדר מהקטן לגדול

console.log(books); //---------------from big to small------------------//

console.log('BIG TO SMALL');
var books2 = [{
  title: 'book2',
  year: 1990
}, {
  title: 'book3',
  year: 1980
}, {
  title: 'book1',
  year: 2010
}, {
  title: 'book4',
  year: 2000
}];
books2 = books2.sort(function (a, b) {
  return b.year - a.year;
}); //מסדר מגדול לקטן

console.log(books2); //----------------------sort by letters---------------//

console.log('BY LETTERS');
var books3 = [{
  title: 'book2',
  year: 1980
}, {
  title: 'book3',
  year: 1990
}, {
  title: 'book1',
  year: 1970
}, {
  title: 'book4',
  year: 2000
}];
books3 = books3.sort(function (a, b) {
  if (a.title < b.title) return -1;
});
console.log(books3); //-------------------numbers---------------------//

console.log('NUMBERS');
var numbers = [1, 5, 3, 8, 5, 10, 23, 35];
numbers = numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); //------------------names--------------------//

console.log('NAMES');
var names = ['ac', 'ab', 'da', 'aa'];
names = names.sort();
console.log(names);
var names2 = ['אג', 'נכ', 'גד', 'אב'];
names2 = names2.sort();
console.log(names2); //------------------sort by UTF8----------------//

console.log('BY UTF8');
var symbols = ['+', '*']; //in TF8 '*' is 42 and '+' is 43

symbols = symbols.sort();
console.log(symbols);