//--------------------first task---------------------------------------
var friends = ["Eren", "Reiner", "Jean", "Connie", "Annie", "Armin"];
for (var i = 0; i < friends.length; i++) {
    console.log("Hello my dear friend " + friends[i]);
}
//--------------------second task-----------------------------------
var numbers = [1, 2, 3, 4, 5, 13, 7, 8, 9, 10, 13, 2];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 5) {
        console.log(numbers[i]);
    }
}
//--------------------thired task-----------------------------------
function thiredtask(a, b) {
    return a + b;
}
var longArray = [1, "Jean", thiredtask, "Armin", 23, 432, "abcd", 43];
for (var i = 0; i < longArray.length; i++) {
    if (typeof (longArray[i]) === 'function') {
        console.log("your function is " + longArray[i](1, 3));
    }
    else {
        console.log(typeof (longArray[i]));
    }
}
//--------------------forth task-----------------------------------
var avarageArray = [1, 3, 5, 7, 9, 22, 5, 1];
function calculateAvarage(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return console.log(sum / a.length);
}
calculateAvarage(avarageArray);
