////////// 1 //////////
// console.log(1 + "2" + "2"); //122 // 122
// console.log(1 + +"2" + "2"); //122 //1+22 //32
// console.log(1 + -"1" + "2"); //1-12 //02
// console.log(+"1" + "1" + "2"); //112 //112
// console.log("A" - "B" + "2"); //AB2 //NaN = not a number = NaN2
// console.log("A" - "B" + 2); //AB+2 //NaN

// // +prompt('num')

/////////// 2 /////////
// console.log(false == '0')  //true
// console.log(false === '0')  //false

////////// 3 /////////

// console.log(typeof 4.55.toFixed(1)) //we get string
// console.log(4.55.toFixed(1) + 1) //string + number - give string


///////////4 //////////
// const arr = [1, 3, , 7]

// arr.forEach((element) => {
//     console.log(element)
// }) //1,3,7

///////// 5 //////////
// enum RGB {
//     YELLOW,
//     GREY,
//     Maam = 17,
//     RED = 30,
//     GREEN = 60,
//     BLUE
// }

// console.log(RGB.Maam) //GREEN
// console.log(RGB[30]) //GREEN

///////// 6 /////////
// "use strict"

//Defines that JavaScript code should be executed in "strict mode".With strict mode, you can not, for example, use undeclared variables.
//You can use strict mode in all your programs. It helps you to write cleaner code.
// x = 30;
// console.log(x)

////////// 7 ////////
// console.log(undefined == false) //false
// console.log(null == undefined) //true
// console.log(null == false) //false

//null = nothing
//undefined = לא נמצא
// false = not true

///////// 8 ////////
// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");

// const arr11 = [
//     { ok: true, name: "gal" },
//     { ok: true, name: "gal" },
//     { ok: true, name: "gal" },
//     { ok: true, name: "gal" },
//     { ok: true, name: "gal" },
// ]

// console.log(arr11)
// console.table(arr11)

///////9//////
//4. variable value exchange
// let fire = '1';
// let friut = '2';

// [friut, fire] = [fire, friut];
// console.log(fire, friut)

////////10////////
// function foo1() {
//     return {
//         bar: "hello"
//     };
// }
// console.log(foo1())

// function foo2() {
//     return
//     {
//         bar: "hello"
//     };
// }

// console.log(foo2())

///////11////////
// alert('hello')
// const hi = +prompt()
// console.log(hi)

// const confirmClient = confirm('meir')
// console.log(confirmClient)

// if (confirmClient == true) {
//     console.log('gal haya po')
// }

// CSS
// http://www.layerstyles.org/builder.html
// https://codepen.io/Anna_Batura/pen/dypeoxj

