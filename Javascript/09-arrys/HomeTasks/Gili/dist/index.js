<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//--1--//
var a = ["Shiran", "Margalit", "Tiferet", "Lital",];
console.log(a);
function multy(a, b) {
    return a * b;
}
//--2--//
=======
=======
>>>>>>> b250038a22130bc19d32f91437f96e7240e94cb3
=======
>>>>>>> b250038a22130bc19d32f91437f96e7240e94cb3
// First Task - Friends Arry
var friends = ["Almog", "Sayfan", "Roni", "Benji", "Daniel", "Evgeny"];
for (var i = 0; i < friends.length; i++) {
    console.log("Welcome " + friends[i] + "!");
}
// Second Task - Numbers array
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 26, 29, 30, 50, 45, 66, 1, 2, 3, 4];
for (var j = 0; j < numArray.length; j++) {
    if (numArray[j] > 5) {
        console.log("the number " + numArray[j] + " is bigger than 5");
    }
}
//Third Task - typeof array, excute functions
var diffArray = [1, "hello", 3, 5, fun1, 16, "gift", 18, 20, fun2];
for (var k = 0; k < diffArray.length; k++) {
    console.log(typeof diffArray[k]);
    if (typeof diffArray[k] === 'function') {
        console.log(diffArray[k](4, 5));
    }
}
function fun1(a, b) {
    return a * b;
}
function fun2(a, b) {
    return a * a * b * b;
}
// Fourth task - average
var numArray2 = [1, 5, 7, 8, 14, 15, 16, 17, 18, 20];
var sum = 0;
for (var l = 0; l < numArray2.length; l++) {
    sum += numArray2[l], 10;
}
var avg = sum / numArray2.length;
console.log("rge averege of the array is " + avg);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b250038a22130bc19d32f91437f96e7240e94cb3
=======
>>>>>>> b250038a22130bc19d32f91437f96e7240e94cb3
=======
>>>>>>> b250038a22130bc19d32f91437f96e7240e94cb3
