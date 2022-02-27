// const arr = [1, 2, 3, 4, 5];
// arr[0] // 1
// const arr1 = [{ name: 'John' }, { name: 'Jane' }];
// arr1[0].name //John

// const obj = {
//     name: 'John',
//     age: 30,
//     isMarried: false
// }

// console.log(obj.name);
// console.log(obj.age);

// const newArr = arr.map(item => item * 2);

// console.log(newArr)

//-------------------------
/*
Read 3 numbers from the user and check if the 3rd is the sum of the first two.
 If it is, print all the numbers to the console like this: 6 + 4 = 10
 If not, print them like this: 3 + 5 != 10

prompt()
*/

//--------------------------
// Read two positive numbers from the user.
// Calculate the difference between them (the absolute value).
// First, check that the input values are numbers
// (try googling something like ‘javascript check if number’)
// Print the inputs and the absolute difference between them to the console.
// If the difference is smaller than both input values,
// print to the console that those numbers are relatively close.
//Something like this – num1 = 5, num2 = 9, diff = 4 => numbers are relatively close!

// const num1 = +prompt('Enter first number: '); //number
// const num2 = +prompt('Enter first number: ');
// // const num1 = prompt('Enter first number: '); // string


// if (typeof num1 == 'number' && typeof num2 == "number") {
//     if (num1 > 0 && num2 > 0) {
//         const diff = Math.abs(num1 - num2);
//         console.log(`${num1} - ${num2} = ${diff}`);
//         if (diff < num1 && diff < num2) {
//             console.log(`${num1} and ${num2} are relatively close`);
//         }
//     } else {
//         console.log(`only positive numbers`);
//     }
// } else {
//     console.log(`only numbers`);
// }

// function fun() {
//     return
//     if(){....}
// }

//-------------------------
// var a = "Hello world" //string
// a[0] = 'h'
// console.log(a)

//-------------------------
// let foo = function () {
//     return {
//         a: 0,
//         b: 3,
//         c: 7
//     };
// }

// console.log(foo())

//-----------------------
// const a = "JavaScript"
// const b = new String(a)
// console.log(b)

// console.log(typeof a)
// console.log(typeof b)

// console.log(a === b)

//----------------------

// const result = eval('(25*5-15)/11')

// console.log(typeof result)

//----------------------
// const  - ניתן לא ניתן לשינוי
// let - ניתן לשינוי
// const x = 1

// function fun() {
//     x
// }
// function fun1() {
//     x
// }
// function fun2() {
//     x
// }

// function fun4(num1, num2) {
    // let x = 1
    // return num1 + num2 + x
    // const x = 2
// }

// console.log(fun4(1, 2))
// typeof == "string"
// typeof == "number"

// = - הכרזה על משתנה
//     == - השוואה בין המשתנים

// דוגמא:
// 1 == "1" //true
//     === - השוואה בין משתנים וסוג משתנה

// דוגמא:
// 1 === "1" //false