/* first task */
var my_besties = ['Johnny Knoxville', 'Elon Musk', 'Vladimir Putin', 'Fridrich'];
for (var i = 0; i < my_besties.length; i++) {
    console.log("Welcome: " + my_besties[i]);
}
/* first task */
/* second task */
var numbers = 10;
var arr = [];
for (var i = 0; i < numbers; i++) {
    arr.push(i);
    if (i > 5) {
        console.log("The number is bigger then 5");
    }
}
/* second task */
/* third task */
function num(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var arr2 = ['Peter Pan', 3, 'Max Payne', 'Solidity', 5, num];
for (var i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] === 'function') {
        console.log(num(7, 2));
    }
    else {
        console.log(typeof arr2[i]);
    }
}
/* third task */
/* fourth task */
var numbers2 = 10;
var arr3 = [];
for (var i = 0; i < numbers2; i++) {
    arr3.push(i);
}
var sum2 = 0;
function avg() {
    for (var i_1 = 0; i_1 < arr3.length; i_1++) {
        sum2 = (sum2 + arr3[i_1]);
    }
    return sum2 / arr3.length;
}
console.log(avg());
/* fourth task */ 
