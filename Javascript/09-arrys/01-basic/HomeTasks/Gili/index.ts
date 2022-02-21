// First Task - Friends Arry
const friends: Array<any> = ["Almog", "Sayfan", "Roni", "Benji", "Daniel", "Evgeny"];

for (let i = 0; i < friends.length; i++) {
    console.log(`Welcome ${friends[i]}!`)
}

// Second Task - Numbers array

const numArray: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 26, 29, 30, 50, 45, 66, 1, 2, 3, 4]

for (let j = 0; j < numArray.length; j++) {

    if (numArray[j] > 5) {
        console.log(`the number ${numArray[j]} is bigger than 5`)
    }
}

//Third Task - typeof array, excute functions

const diffArray: Array<any> = [1, "hello", 3, 5, fun1, 16, "gift", 18, 20, fun2];

for (let k = 0; k < diffArray.length; k++) {
    console.log(typeof diffArray[k])

    if (typeof diffArray[k] === 'function') {
        console.log(diffArray[k](4, 5))
    }
}

function fun1(a, b) {
    return a * b;
}

function fun2(a, b) {
    return a * a * b * b;
}

// Fourth task - average

const numArray2 = [1, 5, 7, 8, 14, 15, 16, 17, 18, 20]

var sum = 0;
for( var l = 0; l < numArray2.length; l++ ){
    sum += numArray2[l], 10 ; 
}
var avg = sum/numArray2.length;

console.log(`rge averege of the array is ${avg}`)
