// 1st assignment ----------------------------------------------------------------------------------------------------
// Info: All variables inside "friends" array, will be printed in the console with a greeting.
const friends: Array < string > = ["Tomer", "Anna", "Noa", "Daniel", "Maor", "Adi", "Alex", "Bina"];
for (let i = 0; i < friends.length; i++) {
    console.log(`Hello ${friends[i]}`)
}



// 2st assignment ----------------------------------------------------------------------------------------------------
// Info: every number that's bigger than 5, will be printed in the console.
const numbers = 10;
const nums: Array < number > = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers; i++) {
    if (i > 5) {
        console.log(`The number ${nums[i]} is bigger then 5`);
    }
}



// 3st assignment ----------------------------------------------------------------------------------------------------

// Info: The app identifies the type of each variable inside an array.
// if the type of the variable is a "function" - then the app runs it's function,
// else the app just identifies the type of the variable.

function random(min: number, max: number) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
}

const items: Array < any > = [random, "Tel aviv", 4, "Tomer 1", 1 + 1, true, 3.6, false, undefined, null];
for (var i = 0; i < items.length; i++) {
    if (typeof items[i] === "function") {
        console.log(random(1, 9));
    } else {
        console.log(typeof items[i]);
    }
}



// 4st assignment ----------------------------------------------------------------------------------------------------
// Info: a function that calculates what's the average of all numbers inside an array

const array: Array < number > = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let total = 0;

for (let i = 0; i < array.length; i++) {
    total += array[i];
}

console.log(total / array.length);