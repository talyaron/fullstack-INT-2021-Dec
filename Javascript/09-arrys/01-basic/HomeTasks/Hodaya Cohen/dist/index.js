//--1--//
var friends = ["Shiran", "Margalit", "Tiferet", "Lital",];
console.log(friends);
for (var i = 0; i < friends.length; i++) {
    console.log("Welcome " + friends[i]);
}
//--2--//
var numbers = [1, 2, 6, 7, 8, 9,];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log("The number " + numbers[i] + " is greater than 5");
    }
}
//--3--//
var array = ["i", 6, "love", 12, "you"];
for (var i = 0; i < array.length; i++) {
    console.log("the element " + array[i] + " type is " + typeof array[i]);
    if (typeof array[i] == "function") {
        console.log("The function: " + array[i](30, 60));
    }
}
//--4--//
var a = [100, 200, 300, 400, 500];
console.log(a);
function averageNumber(b) {
    var sum = 0;
    for (var i = 0; i < b.length; i++) {
        sum = sum + b[i];
    }
    return console.log(sum / b.length);
}
averageNumber(a);
