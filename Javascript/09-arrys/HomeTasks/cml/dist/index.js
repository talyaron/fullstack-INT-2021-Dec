var myFriends = ['CSENGE', 'HADAR', 'NOA', 'PAOLA', 'SHAKED', 'SHAHAR', 'MAYA'];
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
for (var i = 0; i < myFriends.length; i++) {
    console.log("welcome " + myFriends[i]);
}
var myNums = [3, 6, 2, 3, 1, 2, 8, 5, 9];
for (var i = 0; i < myNums.length; i++) {
    console.log(myNums[i]);
    if (myNums[i] > 5) {
        console.log("the number " + myNums[i] + " is bigger then 5");
    }
}
function weirdFunction(a, b) {
    if (a > b) {
        return (a - b);
    }
    else {
        return (b - a);
    }
}
var b = weirdFunction(6, 8);
var myArray = [34, "this is funn!!!!", "lie", 4206969, '3', weirdFunction];
for (var i = 0; i < myArray.length; i++) {
    var objecType = typeof (myArray[i]);
    console.log("this object is a " + objecType);
    if (objecType === 'function') {
        var f = myArray[i];
        console.log(f(4, 7));
    }
}
function avgOfArray(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    var ave = sum / a.length;
    return ave;
}
console.log(avgOfArray(myNums));
