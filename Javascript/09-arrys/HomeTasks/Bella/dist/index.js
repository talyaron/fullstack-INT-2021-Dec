// const arr: Array<number> = [10, 2, 34, 6, 120, 130, 99, 10000000, 200];
// const newArr = arr.map(elm=>{
//   if(elm >= 100) return elm
//   else return "This number is smaller than 100!";
// }).filter(elm=>elm >= 100);
// console.log (newArr);
// console.log(arr.indexOf[1]); 
var arr = [10, "Wacom Cintiq", "4", 8, 120, 130, "HUION Kamvas Pro", true];
var str1 = "Wacom Cintiq";
var str2 = "HUION Kamvas Pro";
function typeOfvar(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            return i;
        }
        else if (typeof arr[i] === "string") {
            return i;
        }
    }
}
// 3st assignment ----------------------------------------------------------------------------------------------------
// Info: The app identifies the type of each variable inside an array.
// if the type of the variable is a "function" - then the app runs it's function,
// else the app just identifies the type of the variable.
// const items: Array < any > = [random, "Tel aviv", 4, "Tomer 1", 1 + 1, true, 3.6, false, undefined, null];
// for (var i = 0; i < items.length; i++) {
//   if (typeof items[i] === "function") {
//       console.log(random(1, 9));
//   } else {
//       console.log(typeof items[i]);
//   }
// }
