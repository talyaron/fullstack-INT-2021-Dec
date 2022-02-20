// 1st assignment ----------------------------------------------------------------------------------------------------
// Info: All variables inside "friends" array, will be printed in the console with a greeting.
var friends = ["Tomer", "Anna", "Noa", "Daniel", "Maor", "Adi", "Alex", "Bina"];
for (var i_1 = 0; i_1 < friends.length; i_1++) {
    console.log("Hello " + friends[i_1]);
}
// 2st assignment ----------------------------------------------------------------------------------------------------
// Info: every number that's bigger than 5, will be printed in the console.
var numbers = 10;
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers; i++) {
    if (i > 5) {
        console.log("The number " + nums[i] + " is bigger then 5");
    }
}
// 3st assignment ----------------------------------------------------------------------------------------------------
// Info: The app identifies the type of each variable inside an array.
// if the type of the variable is a "function" - then the app runs it's function,
// else the app just identifies the type of the variable.
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
}
var items = [random, "Tel aviv", 4, "Tomer 1", 1 + 1, true, 3.6, false, undefined, null];
for (var i = 0; i < items.length; i++) {
    if (typeof items[i] === "function") {
        console.log(random(1, 9));
    }
    else {
        console.log(typeof items[i]);
    }
}
// 4st assignment ----------------------------------------------------------------------------------------------------
// Info: a function that calculates what's the average of all numbers inside an array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var total = 0;
for (var i_2 = 0; i_2 < array.length; i_2++) {
    total += array[i_2];
}
console.log(total / array.length);
