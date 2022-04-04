console.log('hi');
var listOfFriends = ['Ron', 'Eyal', 'Tom'];
for (var i = 0; i < listOfFriends.length; i++) {
    console.log("Hello " + listOfFriends[i]);
}
var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > 5)
        console.log("the " + listOfNumbers[i] + " is bigger than 5");
}
var listOfAny = [1, 2, 'hello', 'bey', true, false, myFunc];
for (var i = 0; i < listOfAny.length; i++) {
    console.log(typeof listOfAny[i]);
    if (typeof listOfAny[i] === 'function')
        listOfAny[i]();
}
function myFunc() {
    console.log('it worked');
}
var avrageOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < avrageOfNumbers.length; i++) {
    total += avrageOfNumbers[i];
}
console.log(total / avrageOfNumbers.length);
