// Say Hello----//
var nameFriends = ["Maya", "Saphir", "Levi", "Ran", "Meital", "Ron"];
console.log(nameFriends);
var _loop_1 = function (i) {
    console.log("Welcome " + nameFriends[i]);
    function sayWelcome(nameFriends) {
        return "welcome +" + nameFriends[i];
    }
};
for (var i = 0; i < nameFriends.length; i++) {
    _loop_1(i);
}
// Bigger than Five----//
var numbers = [1, 2, 8, 9, 4, 6];
for (var i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
    if (numbers[i] > 5) {
        console.log("this is " + numbers[i] + "  and it's bigger than 5");
    }
}
// Whats My Type----//
var diff = ["all", 7, "my", 10, add];
function add(diff) {
    return "this is function 7 10";
}
var _loop_2 = function (i) {
    console.log((typeof diff[i]) + (diff[i]));
    function getNumber(diff) {
        return typeof (diff[i]);
    }
};
for (var i = 0; i < diff.length; i++) {
    _loop_2(i);
}
// Estimate a Number----//
var estimateNum = [100, 90, 70, 50, 40];
for (var i = 0; i < estimateNum.length; i++) {
    console.log(estimateNum[i]);
    function estimateAll(estimateNum) {
        return [100, 90, 70, 50, 40].reduce(function (a, b) { return a + b; }, 0);
    }
}
var sum = estimateAll([]);
var finalsum = sum / estimateNum.length;
console.log(finalsum);
// Reverse a Number----//
function reverseNum(n) {
    var x = n + "";
    return x.split("").reverse().join("");
}
console.log(Number(reverseNum(5678)));
// Test Data----//
function isArray(input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
}
console.log(isArray('Lital'));
console.log(isArray([1, 3, 5, 7]));
